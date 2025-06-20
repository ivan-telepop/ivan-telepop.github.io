'use client'
import { useState } from 'react'
import MessageList from 'app/components/messagelist'
import MessageInput from 'app/components/messageinput';
import { Pinecone } from '@pinecone-database/pinecone'


const API_KEY = 'pcsk_3CS6nF_KwcT7rt8xMkE2urdEj4JyzijnsTHinr53QfmEJYNabn3x72bYT8xh9RcoUkZAEn'
// Basic setup for Pinecone
const pc = new Pinecone({ apiKey: API_KEY});
const assistantName = 'about-ivan';
const assistant = pc.Assistant(assistantName);


type ChatComponentProps = {
  title?: string 
  inputPlaceholder?: string
  description?: string
}

export default function ChatComponent({ title = 'Ask AI about Ivan', inputPlaceholder= "Type your message...", description="Here you can ask the AI about Ivan’s skills and professional background."}: ChatComponentProps) {
  
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (prompt: string) => {
    if (!prompt.trim()) return

    const userMessage = { role: 'user', content: prompt }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const chatResp = await assistant.chat({
        messages: [{ role: 'user', content: prompt }],
      });
      const assistantResponse = chatResp?.message?.content || "";

      const assistantMessage = {
        role: 'assistant',
        content: assistantResponse.replace(/\n/g, ' '),
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
      <pre>
      <h5>{description}</h5>  
      <h2 className="text-1xl mb-4">{title}</h2>

      <div className="overflow-y-auto border rounded-md p-1 mb-4 ">
          <MessageList messages={messages} />
      </div>

      <MessageInput inputPlaceholder={inputPlaceholder} onSend={sendMessage} loading={loading} />

      </pre>
      
    </main>
  )
}
