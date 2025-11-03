export default function ServicesLoading() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Skeleton */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-3/4 mx-auto mb-8 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-full w-64 mx-auto animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="bg-gray-100 py-16 px-8 rounded-2xl text-center">
          <div className="h-8 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg mb-8 w-2/3 mx-auto animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}