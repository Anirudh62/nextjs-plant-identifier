// app/guides/page.tsx
export default function GuidesPage() {
  const plantGuides = [
    { 
      title: 'Houseplant Care Basics', 
      description: 'Essential tips for keeping your indoor plants healthy and thriving.',
      difficulty: 'Beginner'
    },
    { 
      title: 'Succulent Maintenance', 
      description: 'How to care for and propagate different types of succulents.',
      difficulty: 'Intermediate'
    },
    { 
      title: 'Orchid Growing Guide', 
      description: 'Comprehensive guide to growing and caring for orchids.',
      difficulty: 'Advanced'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Plant Care Guides</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plantGuides.map((guide, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">{guide.title}</h2>
            <p className="text-gray-600 mb-4">{guide.description}</p>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {guide.difficulty} Level
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}