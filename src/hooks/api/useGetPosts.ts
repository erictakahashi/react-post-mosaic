import { useInfiniteQuery } from '@tanstack/react-query'
import { getBlogPosts } from '~/api/getBlogPosts'
import { QueryKeysEnum } from '~/models/enums/QueryKeysEnum'

/**
 * Implements an infinite query to fetch
 * blog posts.
 */
export const useGetPosts = () =>
  useInfiniteQuery({
    queryKey: [QueryKeysEnum.BLOG_POSTS],
    queryFn: getBlogPosts,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 0,
  })
