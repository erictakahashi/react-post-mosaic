/**
 * Provides *MOCKED* blog post data.
 */
export const getBlogPosts = async ({ pageParam = 0 }) => {
  // Simulate API delay.
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return generateMockItems(pageParam)
}

/**
 * Generates mocked post data.
 */
const generateMockItems = (page: number, limit = 10) => {
  const items = []

  // Initial items index based on the pagination.
  const startIndex = page * limit

  for (let i = 0; i < limit; i++) {
    items.push({
      id: startIndex + i,
      title: `Item ${startIndex + i}`,
      description: `Description for item ${startIndex + i}`,
    })
  }

  return {
    items,
    nextPage: page + 1,
    hasMore: page < 9, // Limit to 100 items total (10 pages * 10 items).
  }
}
