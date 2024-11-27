// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Contact Us</h1>
      <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-green-700 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-green-700 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-green-700 mb-2">Message</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}