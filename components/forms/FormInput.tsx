import { forwardRef } from 'react'

interface FormInputProps {
  label: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'url'
  placeholder?: string
  error?: string
  required?: boolean
  className?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, type = 'text', placeholder, error, required = false, className = '', ...props }, ref) => {
    return (
      <div className={`space-y-2 ${className}`}>
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary 
            transition-colors duration-200 text-gray-900 placeholder-gray-500
            ${error 
              ? 'border-red-300 bg-red-50 focus:ring-red-20 focus:border-red-500' 
              : 'border-gray-300 bg-white hover:border-gray-400'
            }
          `}
          {...props}
        />
        
        {error && (
          <p className="text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export { FormInput }