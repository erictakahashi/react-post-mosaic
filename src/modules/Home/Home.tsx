import { Fragment } from 'react'
import Layout from '~/components/Layout/Layout'
import { useManagePostsPagination } from './hooks/useManagePostsPagination'

/**
 * The home page component.
 */
export const Home = () => {
  const { containerRef, data, hasNextPage, isFetchingNextPage, status } =
    useManagePostsPagination()

  return (
    <Layout>
      <div className="py-8 h-full overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

        {status === 'error' && (
          <div className="p-4 text-red-500">Error loading items</div>
        )}

        {status !== 'error' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.pages.map((page, pageIndex) => (
                <Fragment key={pageIndex}>
                  {page.items.map((item) => (
                    <div
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                      key={item.id}
                    >
                      <div className="p-4">
                        <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>

            <div
              className="h-20 flex items-center justify-center"
              ref={containerRef}
            >
              {isFetchingNextPage ? (
                <div className="text-gray-500">Loading more items...</div>
              ) : hasNextPage ? (
                <div className="text-gray-400">Scroll for more</div>
              ) : (
                <div className="text-gray-400">No more items to load</div>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
