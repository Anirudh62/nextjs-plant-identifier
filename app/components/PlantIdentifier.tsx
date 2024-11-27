'use client'

import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Image from 'next/image'

interface PlantInfo {
  name: string;
  scientificName?: string;
  description?: string;
  careInstructions?: string;
}

export default function PlantIdentifier() {
  const [image, setImage] = useState<string | null>(null)
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 🚨 REPLACE 'YOUR_ACTUAL_API_KEY' WITH YOUR REAL GOOGLE GEMINI API KEY
  const API_KEY = 'AIzaSyCUS4Py9esmWg2fOc7i8UZsH3ButPXI-8U'

  if (!API_KEY) {
    return (
      <div className="text-red-600 p-4 bg-red-100 rounded-lg">
        Error: You must provide a Gemini API key
      </div>
    )
  }

  const genAI = new GoogleGenerativeAI(API_KEY)
  // Updated to use Gemini 1.5 Flash
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash-latest",
    generationConfig: {
      maxOutputTokens: 300
    }
  })

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.')
        return
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size should be less than 5MB.')
        return
      }

      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64Image = reader.result as string
        setImage(base64Image)
        await identifyPlant(base64Image)
      }
      reader.readAsDataURL(file)
    }
  }

  const identifyPlant = async (base64Image: string) => {
    setIsLoading(true)
    setError(null)
    setPlantInfo(null)

    try {
      // Remove data URL prefix if present
      const base64Data = base64Image.split(',')[1] || base64Image

      const result = await model.generateContent({
        contents: [{
          role: 'user',
          parts: [
            { 
              text: "Carefully identify this plant. Provide these details in a clear, concise format: Common Name, Scientific Name, Brief Description, and Basic Care Tips. If unsure about identification, explain why." 
            },
            { 
              inlineData: { 
                mimeType: 'image/jpeg', 
                data: base64Data 
              } 
            }
          ]
        }]
      })

      const response = await result.response.text()

      console.log('Full Gemini Response:', response)

      // More robust parsing
      const parsedInfo = parsePlantInfo(response)

      if (!parsedInfo.name || parsedInfo.name.toLowerCase().includes('unable') || parsedInfo.name.toLowerCase().includes('not identified')) {
        setError('Plant could not be identified. Please try a clear, well-lit image of the entire plant.')
        setPlantInfo(null)
      } else {
        setPlantInfo(parsedInfo)
      }
    } catch (err) {
      console.error('Identification Error:', err)

      // More specific error messages
      if (err instanceof Error) {
        setError(`Identification failed: ${err.message}`)
      } else {
        setError('An unexpected error occurred during plant identification.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const parsePlantInfo = (response: string): PlantInfo => {
    return {
      name: extractDetail(response, 'Common Name') || extractDetail(response, 'Name') || 'Unknown Plant',
      scientificName: extractDetail(response, 'Scientific Name'),
      description: extractDetail(response, 'Description') || extractDetail(response, 'Brief Description'),
      careInstructions: extractDetail(response, 'Care Tips') || extractDetail(response, 'Care Instructions')
    }
  }

  // Helper function to extract details from response
  const extractDetail = (text: string, key: string): string | undefined => {
    const regex = new RegExp(`${key}:?\\s*(.+?)(?:\n|$)`, 'i')
    const match = text.match(regex)
    return match ? match[1].trim() : undefined
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
      <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="plant-upload"
        />
        <label 
          htmlFor="plant-upload" 
          className="cursor-pointer inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          {image ? 'Change Image' : 'Upload Plant Image'}
        </label>
      </div>

      {image && (
        <div className="flex flex-col items-center">
          <Image 
            src={image} 
            alt="Uploaded plant" 
            width={300} 
            height={300} 
            className="rounded-lg shadow-md mb-4"
          />
        </div>
      )}

      {isLoading && (
        <div className="text-center text-green-600 animate-pulse">
          Identifying plant... This may take a moment.
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
          {error}
        </div>
      )}

      {plantInfo && (
        <div className="bg-green-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-bold text-green-800">{plantInfo.name}</h2>
          {plantInfo.scientificName && (
            <p><strong>Scientific Name:</strong> {plantInfo.scientificName}</p>
          )}
          {plantInfo.description && (
            <p><strong>Description:</strong> {plantInfo.description}</p>
          )}
          {plantInfo.careInstructions && (
            <p><strong>Care Instructions:</strong> {plantInfo.careInstructions}</p>
          )}
        </div>
      )}
    </div>
  )
}