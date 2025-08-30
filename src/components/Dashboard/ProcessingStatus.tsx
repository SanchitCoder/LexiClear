import React from 'react'
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react'

interface ProcessingStatusProps {
  status: 'processing' | 'completed' | 'error'
  message?: string
}

export const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ status, message }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'processing':
        return {
          icon: Loader2,
          iconClass: 'h-8 w-8 text-blue-600 animate-spin',
          bgClass: 'bg-blue-50 border-blue-200',
          textClass: 'text-blue-700',
          title: 'Processing Document...',
          subtitle: 'Our AI is analyzing your legal document. This may take a few moments.',
        }
      case 'completed':
        return {
          icon: CheckCircle,
          iconClass: 'h-8 w-8 text-green-600',
          bgClass: 'bg-green-50 border-green-200',
          textClass: 'text-green-700',
          title: 'Analysis Complete!',
          subtitle: 'Your document has been successfully processed.',
        }
      case 'error':
        return {
          icon: AlertTriangle,
          iconClass: 'h-8 w-8 text-red-600',
          bgClass: 'bg-red-50 border-red-200',
          textClass: 'text-red-700',
          title: 'Processing Failed',
          subtitle: message || 'There was an error processing your document. Please try again.',
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <div className={`border rounded-2xl p-8 ${config.bgClass}`}>
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Icon className={config.iconClass} />
        </div>
        
        <div>
          <h3 className={`text-lg font-semibold ${config.textClass}`}>
            {config.title}
          </h3>
          <p className={`text-sm ${config.textClass} opacity-80 mt-1`}>
            {config.subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}