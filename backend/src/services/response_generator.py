"""Response generation service for creating personalized AI responses."""

from typing import List, Dict, Any
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
import structlog

logger = structlog.get_logger()


class ResponseGenerator:
    """Generates responses as Växtkraft Webb customer service assistant."""

    SYSTEM_PROMPT = """Du är en kundservice-assistent för Växtkraft Webb, en webbutvecklingsbyrå i Karlstad.
    Svara som "vi" (företaget), inte som en enskild person.

    ALLOWED TOPICS - Svara alltid på frågor om:
    - Tjänster (hemsidor, bokningssystem, AI-chatbotar, SEO, prestanda)
    - Priser och paket (Startpaketet, Tillväxtpaketet, Premiumpaketet)
    - Arbetsprocess och SEO-migrering
    - Teknikstack (Next.js, React, Tailwind, AI-verktyg)
    - Kundcase och resultat
    - Om företaget och vår filosofi
    - Kontaktinformation och bokning av rådgivning
    - Hälsningar och allmänna frågor om Växtkraft Webb

    DECLINE ONLY these truly off-topic questions:
    - Politik, val, politiker
    - Nyheter och aktuella händelser som inte rör webbutveckling
    - Personliga frågor om anställda
    - Allmänkunskap som inte rör företaget (t.ex. "Vad är Sveriges huvudstad?")
    - Medicinska, juridiska eller finansiella råd

    When declining, say:
    Swedish: "Jag svarar bara på frågor om Växtkraft Webbs tjänster och erbjudanden. Fråga gärna om våra paket, priser eller hur vi kan hjälpa ditt företag!"
    English: "I only answer questions about Växtkraft Webb's services and offerings. Feel free to ask about our packages, pricing, or how we can help your business!"

    CRITICAL - NO HALLUCINATION:
    - ONLY use information from the provided context
    - NEVER make up services, prices, or capabilities we don't offer
    - If the context doesn't contain the answer, say "Det har jag tyvärr inte information om just nu. Kontakta oss på hej@vaxtkraftwebb.se så hjälper vi dig!"
    - Do NOT guess or assume - only state facts from the context

    Important instructions:
    - Speak as "vi" (the company), not as an individual
    - Be helpful, professional, and sales-oriented without being pushy
    - Encourage visitors to book a free consultation when relevant
    - Base ALL answers on the provided context only

    Response style:
    - Vänlig och professionell
    - Hjälpsam och lösningsorienterad
    - Uppmuntra till kontakt och bokning
    - Kortfattad men informativ

    Language: Respond in the same language as the question (Swedish or English)"""
    
    def __init__(self, llm: ChatOpenAI):
        self.llm = llm
    
    def _format_context(self, context: List[Dict[str, Any]]) -> str:
        """Format retrieved context into a readable string."""
        if not context:
            return ""
        
        formatted = "\n\nRelevant information:\n"
        for doc in context:
            formatted += f"- {doc['text']}\n"
            if doc.get("metadata"):
                for key, value in doc["metadata"].items():
                    formatted += f"  {key}: {value}\n"
        
        return formatted
    
    async def generate(
        self, 
        query: str, 
        context: List[Dict[str, Any]] = None,
        plan: str = None
    ) -> str:
        """
        Generate a personalized response based on query and context.
        
        Args:
            query: User's query
            context: Retrieved context documents
            plan: Response plan (optional)
        
        Returns:
            Generated response string
        """
        try:
            context_str = self._format_context(context or [])
            
            if context_str:
                user_prompt = f"""USER QUESTION: {query}

AVAILABLE INFORMATION FROM OUR DATABASE:
{context_str}

IMPORTANT: Answer ONLY using the information above. Do NOT add any services, prices, or capabilities that are not explicitly mentioned in the database information above. If asked about something not in the database, suggest contacting us at hej@vaxtkraftwebb.se."""
            else:
                user_prompt = f"""USER QUESTION: {query}

NOTE: No relevant information was found in our database for this question.
If this is a question about our services, say "Det har jag tyvärr inte information om just nu. Kontakta oss på hej@vaxtkraftwebb.se så hjälper vi dig!"
If this is off-topic, politely decline."""
            
            messages = [
                SystemMessage(content=self.SYSTEM_PROMPT),
                HumanMessage(content=user_prompt)
            ]
            
            response = await self.llm.ainvoke(messages)
            
            logger.info(
                "response_generated",
                query=query[:100],
                context_count=len(context or []),
                response_length=len(response.content)
            )
            
            return response.content
            
        except Exception as e:
            logger.error("response_generation_failed", error=str(e))
            return "Ursäkta, något gick fel. Försök gärna igen eller kontakta oss på hej@vaxtkraftwebb.se."