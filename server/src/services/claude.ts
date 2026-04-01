import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
   apiKey: process.env.ANTHROPIC_API_KEY!
})
console.log('API KEY:', process.env.ANTHROPIC_API_KEY ? 'found' : 'missing')

async function reviewCode (code:string): Promise<any>{ 
  try{ const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: "The following rules are strict and must be followed: You are a sophisticated code analyzer. You are to check for bugs and security vulnerabilities while also coming up with suggestions on improvements. You are to ONLY respond in JSON format with the following array properties: 'bugs', 'security', 'suggestions'. Do NOT include markdown formatting or code fences around the JSON",
      messages: [ { role: "user", content: code} ]
   })
   const block = response.content[0]
   if (block.type !== 'text') throw new Error('unexpected response type')
   const text = block.text
   const cleaned = text.replace(/```json\n?|\n?```/g, '').trim()
   const responseText = JSON.parse(cleaned)
   return responseText
   } catch (error) {
     console.error(' Anthropic API error:', error)
     throw error}
}

export default reviewCode