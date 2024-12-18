import {
  and,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore'
import { IModerationStatus } from 'oa-shared'
import { DB_ENDPOINTS } from 'src/models/dbEndpoints'
import { changeUserReferenceToPlainText } from 'src/utils/mentions.utils'

import { firestore } from '../../utils/firebase'

import type {
  DocumentData,
  QueryDocumentSnapshot,
  QueryFilterConstraint,
  QueryNonFilterConstraint,
} from 'firebase/firestore'
import type {
  ICategory,
  IResearch,
  IResearchDB,
  ResearchStatus,
} from 'oa-shared'
import type { ResearchSortOption } from './ResearchSortOptions'

const search = async (
  words: string[],
  category: string,
  sort: ResearchSortOption,
  status: ResearchStatus | null,
  snapshot?: QueryDocumentSnapshot<DocumentData, DocumentData>,
  take: number = 10,
) => {
  const { itemsQuery, countQuery } = createSearchQuery(
    words,
    category,
    sort,
    status,
    snapshot,
    take,
  )

  const documentSnapshots = await getDocs(itemsQuery)
  const lastVisible = documentSnapshots.docs
    ? documentSnapshots.docs[documentSnapshots.docs.length - 1]
    : undefined

  const items = documentSnapshots.docs
    ? documentSnapshots.docs.map((x) => x.data() as IResearch.Item)
    : []
  const total = (await getCountFromServer(countQuery)).data().count

  return { items, total, lastVisible }
}

const createSearchQuery = (
  words: string[],
  category: string,
  sort: ResearchSortOption,
  status: ResearchStatus | null,
  snapshot?: QueryDocumentSnapshot<DocumentData, DocumentData>,
  take: number = 10,
) => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.research)
  let filters: QueryFilterConstraint[] = [
    and(
      where('_deleted', '!=', true),
      where('moderation', '==', IModerationStatus.ACCEPTED),
    ),
  ]
  let constraints: QueryNonFilterConstraint[] = []

  if (words?.length > 0) {
    filters = [...filters, and(where('keywords', 'array-contains-any', words))]
  }

  if (category) {
    filters = [...filters, where('researchCategory._id', '==', category)]
  }

  if (status) {
    filters = [...filters, where('researchStatus', '==', status)]
  }

  if (sort) {
    const sortConstraint = getSort(sort)

    if (sortConstraint) {
      constraints = [...constraints, sortConstraint]
    }
  }

  const countQuery = query(collectionRef, and(...filters), ...constraints)

  if (snapshot) {
    constraints = [...constraints, startAfter(snapshot)]
  }

  const itemsQuery = query(
    collectionRef,
    and(...filters),
    ...constraints,
    limit(take),
  )

  return { countQuery, itemsQuery }
}

const getResearchCategories = async () => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.researchCategories)

  return (await getDocs(query(collectionRef))).docs.map(
    (x) => x.data() as ICategory,
  )
}

const getSort = (sort: ResearchSortOption) => {
  switch (sort) {
    case 'MostComments':
      return orderBy('totalCommentCount', 'desc')
    case 'MostUpdates':
      return orderBy('totalUpdates', 'desc')
    case 'MostUseful':
      return orderBy('totalUsefulVotes', 'desc')
    case 'Newest':
      return orderBy('_created', 'desc')
    case 'LatestUpdated':
      return orderBy('_contentModifiedTimestamp', 'desc')
  }
}

const createDraftQuery = (userId: string) => {
  const collectionRef = collection(firestore, DB_ENDPOINTS.research)
  const filters = and(
    where('_createdBy', '==', userId),
    where('moderation', 'in', [
      IModerationStatus.AWAITING_MODERATION,
      IModerationStatus.DRAFT,
      IModerationStatus.IMPROVEMENTS_NEEDED,
      IModerationStatus.REJECTED,
    ]),
    where('_deleted', '!=', true),
  )

  const countQuery = query(collectionRef, filters)
  const itemsQuery = query(
    collectionRef,
    filters,
    orderBy('_contentModifiedTimestamp', 'desc'),
  )

  return { countQuery, itemsQuery }
}

const getDraftCount = async (userId: string) => {
  const { countQuery } = createDraftQuery(userId)

  return (await getCountFromServer(countQuery)).data().count
}

const getDrafts = async (userId: string) => {
  const { itemsQuery } = createDraftQuery(userId)
  const docs = await getDocs(itemsQuery)

  return docs.docs ? docs.docs.map((x) => x.data() as IResearch.Item) : []
}

const getBySlug = async (slug: string) => {
  // Get all that match the slug, to avoid creating an index (blocker for cypress tests)
  let snapshot = await getDocs(
    query(
      collection(firestore, DB_ENDPOINTS.research),
      where('slug', '==', slug),
    ),
  )

  if (snapshot.size === 0) {
    // try previous slugs if slug is not recognized as primary
    snapshot = await getDocs(
      query(
        collection(firestore, DB_ENDPOINTS.research),
        where('previousSlugs', 'array-contains', slug),
      ),
    )
  }

  if (snapshot.size === 0) {
    return null
  }

  const research = snapshot.docs[0].data() as IResearchDB

  if (!research) {
    return null
  }

  // Change all UserReferences to mentions
  if (research.description) {
    research.description = changeUserReferenceToPlainText(research.description)
  }

  for (const update of research.updates) {
    if (!update.description) {
      continue
    }

    update.description = changeUserReferenceToPlainText(update.description)
  }

  return research
}

export const researchService = {
  search,
  getResearchCategories,
  getDrafts,
  getDraftCount,
  getBySlug,
}

export const exportedForTesting = {
  createSearchQuery,
}
