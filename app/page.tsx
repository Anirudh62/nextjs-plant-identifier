// app/page.tsx
import Link from 'next/link'
import PlantIdentifier from './components/PlantIdentifier'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-white shadow-lg rounded-lg p-3">
        <h1 className="text-5xl font-bold text-green-800 mb-6">
          Discover the Plants Around You
        </h1>
        <p className="text-1xl text-gray-600 mb-8">
          Instantly identify plants using cutting-edge AI technology
        </p>
       
      </div>

      {/* Plant Identifier Section */}
      <div>
        <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Plant Identifier
        </h2>
        <PlantIdentifier />
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            AI-Powered Identification
          </h3>
          <p className="text-gray-600">
            Use advanced AI to identify plants with just a single image
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Detailed Information
          </h3>
          <p className="text-gray-600">
            Get comprehensive details about plant species, care, and characteristics
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Easy to Use
          </h3>
          <p className="text-gray-600">
            Simple, intuitive interface for plant lovers of all levels
          </p>
        </div>
      </div>
    </div>
  )
}