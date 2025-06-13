'use client'
import { useState } from 'react'
import MessageList from 'app/components/messagelist'
import MessageInput from 'app/components/messageinput'

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (prompt: string) => {
    if (!prompt.trim()) return

    const userMessage = { role: 'user', content: prompt }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await fetch('/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      const parsedData = data.response;
      const assistantMessage = {
        role: 'assistant',
        content: JSON.stringify(parsedData),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-2xl mx-auto flex flex-col min-h-80 min-w-full">
      <h2 className="text-1xl mb-4">Ask about Ivan:</h2>

      {/* messages list */}
      <div className="flex-grow overflow-y-auto border rounded-md p-1 mb-4 ">
        <MessageList messages={messages} />
      </div>

      <MessageInput onSend={sendMessage} loading={loading} />
    </main>
  )
}
