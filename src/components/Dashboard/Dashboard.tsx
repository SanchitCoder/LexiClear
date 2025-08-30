import React, { useState } from 'react'
import { DashboardHeader } from './DashboardHeader'
import { FileUpload } from './FileUpload'
import { ProcessingStatus } from './ProcessingStatus'
import { ResultsCard } from './ResultsCard'

export const Dashboard: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [processing, setProcessing] = useState(false)
  const [results, setResults] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setResults(null)
    setError(null)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setResults(null)
    setError(null)
  }

  const handleSubmit = async () => {
    if (!selectedFile) return

    setProcessing(true)
    setError(null)
    setResults(null)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('fileName', selectedFile.name)

      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
      
      if (!webhookUrl) {
        throw new Error('N8N webhook URL not configured')
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.text()
      setResults(data || 'Document processed successfully, but no results were returned.')
    } catch (err) {
      console.error('Error processing file:', err)
      setError(err instanceof Error ? err.message : 'Failed to process document')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Document Analysis
            </h1>
            <p className="text-gray-600">
              Upload a legal document to get a simplified, plain-English explanation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onRemoveFile={handleRemoveFile}
              uploading={processing}
            />
            
            {selectedFile && !processing && !results && !error && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                >
                  Analyze Document
                </button>
              </div>
            )}
          </div>
          
          {processing && (
            <ProcessingStatus status="processing" />
          )}
          
          {error && (
            <ProcessingStatus status="error" message={error} />
          )}
          
          {results && selectedFile && (
            <ResultsCard results={results} fileName={selectedFile.name} />
          )}
        </div>
      </main>
    </div>
  )
}