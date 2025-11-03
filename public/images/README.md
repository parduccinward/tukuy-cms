# Images Directory

This directory contains all images used in the Mujeres Tukuy website.

## Structure

```
images/
├── og-image.jpg          # Open Graph image for social sharing (1200x630)
├── favicon.ico           # Website favicon
├── janette-blacutt.jpg   # Profile photo for about page
├── services/             # Service-related images
├── testimonials/         # Customer testimonial photos
└── icons/               # UI icons and graphics
```

## Image Guidelines

### Formats
- **Photos**: JPG (optimized for web)
- **Graphics/Logos**: PNG (with transparency if needed)
- **Icons**: SVG (preferred) or PNG

### Sizing
- **Open Graph**: 1200x630px
- **Profile photos**: 400x400px (square)
- **Service images**: 800x600px
- **Testimonial photos**: 200x200px (square)

### Optimization
- Compress images for web
- Use Next.js Image component for automatic optimization
- Provide alt text for accessibility

## Current Images Needed

1. **Janette's profile photo** (`janette-blacutt.jpg`)
2. **Open Graph image** (`og-image.jpg`) 
3. **Service illustrations** (optional)
4. **Customer testimonial photos** (optional)

## Usage

All images should be referenced using Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/janette-blacutt.jpg"
  alt="Janette Blacutt - Mentora de Mujeres Emprendedoras"
  width={400}
  height={400}
  priority // for above-the-fold images
/>
```