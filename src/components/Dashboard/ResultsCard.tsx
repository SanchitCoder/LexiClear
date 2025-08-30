import React from 'react'
import { FileText, Download } from 'lucide-react'

interface ResultsCardProps {
  results: string
  fileName: string
}

export const ResultsCard: React.FC<ResultsCardProps> = ({ results, fileName }) => {
  let plainText = results

  try {
    const parsed = JSON.parse(results)
    if (Array.isArray(parsed) && parsed[0]?.output) {
      plainText = parsed[0].output
    } else if (parsed.output) {
      plainText = parsed.output
    }
  } catch (e) {
    plainText = results
  }

  const handleDownload = () => {
    const blob = new Blob([plainText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName.replace('.pdf', '')}_simplified.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg">Simplified Analysis</h3>
            <p className="text-sm text-green-100">{fileName}</p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-white/20 border border-white/30 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-colors duration-200"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {plainText}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #34d399; /* emerald-400 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #10b981; /* emerald-500 */
        }
      `}</style>
    </div>
  )
}
