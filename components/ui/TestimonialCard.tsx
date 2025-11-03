interface TestimonialCardProps {
  name: string
  business: string
  image?: string
  testimonial: string
  rating?: number
}

export function TestimonialCard({ 
  name, 
  business, 
  image, 
  testimonial, 
  rating = 5 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        {image && (
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-sm text-gray-600">{business}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-accent text-lg">★</span>
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic">
        &ldquo;{testimonial}&rdquo;
      </blockquote>
    </div>
  )
}