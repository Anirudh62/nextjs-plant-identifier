// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-6">About PlantSmart</h1>
      <div className="bg-white shadow-md rounded-lg p-8 space-y-4">
        <p>
          PlantSmart is an innovative AI-powered platform designed to help plant enthusiasts, 
          gardeners, and nature lovers identify and understand plants with ease.
        </p>
        <p>
          Our mission is to make plant identification accessible, educational, and enjoyable. 
          Using cutting-edge AI technology, we provide instant insights into the plants around you.
        </p>
        <h2 className="text-2xl font-semibold text-green-700 mt-4">Our Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Instant plant identification</li>
          <li>Detailed plant information</li>
          <li>Care instructions</li>
          <li>User-friendly interface</li>
        </ul>
      </div>
    </div>
  )
}