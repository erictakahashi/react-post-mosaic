import { useEffect, useRef } from 'react'
import { useGetPosts } from '~/hooks/api/useGetPosts'

/**
 * Hook that will manage the posts pagination
 * creating a infinite scroll fetching tool
 * by setting an intersection observer
 * to fetch more posts.
 */
export const useManagePostsPagination = () => {
  // The component that will observed:
  // Used to check if it the container scroll reached the end.
  const containerRef = useRef(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useGetPosts()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        // Fetch more posts.
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.1 }
    )

    // Set intersection observer for the `containerRef`:
    // Once the scroll intersects with it, it will trigger the callback.
    const currentTarget = containerRef.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    // Unobserve when component unmounts.
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    containerRef,
    data,
    hasNextPage,
    isFetchingNextPage,
    status,
  }
}
