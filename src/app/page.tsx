import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ContentCurateAI',
  description: 'ContentCurateAI is an AI-driven content curation platform that leverages Web3 technology to provide small businesses with personalized, niche-specific content tailored to their brand and audience.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">ContentCurateAI</h1>
      <p className="mt-4 text-lg">ContentCurateAI is an AI-driven content curation platform that leverages Web3 technology to provide small businesses with personalized, niche-specific content tailored to their brand and audience.</p>
    </main>
  )
}
