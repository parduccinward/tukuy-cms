export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="font-playfair text-2xl font-bold text-primary mb-2">
          Cargando...
        </h2>
        <p className="text-gray-600">
          Preparando tu experiencia transformadora
        </p>
      </div>
    </div>
  )
}