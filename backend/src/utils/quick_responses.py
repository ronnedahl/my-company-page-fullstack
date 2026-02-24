"""Quick response handler for simple queries to avoid unnecessary LLM calls."""

import re
from typing import Optional, Dict, Any
import structlog

logger = structlog.get_logger()

# Simple greeting patterns
GREETING_PATTERNS = [
    r'^(hej|hello|hi|hallå|tjena|tja|yo)\.?!?$',
    r'^(hej|hello|hi)\s+(där|peter|du)\.?!?$',
    r'^(god\s+morgon|godmorgon|gm)\.?!?$',
    r'^(god\s+kväll|godkväll|gk)\.?!?$',
    r'^(god\s+dag|goddag)\.?!?$',
    r'^(bra\s+dag|ha\s+en\s+bra\s+dag)\.?!?$'
]

QUICK_PATTERNS = {
    r'^(vad\s+heter\s+du|what.+name|vad\s+heter\s+ni)': {
        'sv': "Vi heter Växtkraft Webb! Vi är en webbutvecklingsbyrå i Karlstad som hjälper lokala företag att växa digitalt. Vad kan vi hjälpa dig med?",
        'en': "We're Växtkraft Webb! We're a web development agency in Karlstad helping local businesses grow digitally. How can we help you?"
    },
    r'^(hur\s+mår\s+du|how\s+are\s+you)': {
        'sv': "Tack för att du frågar! Vi är redo att hjälpa dig. Vill du veta mer om våra tjänster eller priser?",
        'en': "Thanks for asking! We're ready to help you. Would you like to know more about our services or pricing?"
    },
    r'^(vem\s+är\s+ni|vem\s+är\s+du|who\s+are\s+you)': {
        'sv': "Vi är Växtkraft Webb, en nystartad webbyrå i Karlstad. Vi hjälper lokala företag med hemsidor, bokningssystem, AI-chatbotar och SEO. Vad vill du veta mer om?",
        'en': "We're Växtkraft Webb, a web development agency in Karlstad. We help local businesses with websites, booking systems, AI chatbots, and SEO. What would you like to know more about?"
    }
}

# Standard greeting responses
GREETING_RESPONSES = {
    'sv': [
        "Hej! Välkommen till Växtkraft Webb. Hur kan vi hjälpa dig idag? 😊",
        "Hallå! Vad kul att du tittar in! Fråga gärna om våra tjänster, priser eller hur vi kan hjälpa ditt företag.",
        "Hej där! Vi hjälper lokala företag att växa digitalt. Vad kan vi göra för dig?"
    ],
    'en': [
        "Hello! Welcome to Växtkraft Webb. How can we help you today? 😊",
        "Hi there! Feel free to ask about our services, pricing, or how we can help your business.",
        "Hello! We help local businesses grow digitally. What can we do for you?"
    ]
}

def detect_language(text: str) -> str:
    """Detect if text is Swedish or English."""
    swedish_words = ['är', 'och', 'det', 'en', 'du', 'jag', 'vad', 'hur', 'vem', 'hej', 'där']
    english_words = ['are', 'and', 'the', 'you', 'what', 'how', 'who', 'hello', 'hi']
    
    text_lower = text.lower()
    swedish_count = sum(1 for word in swedish_words if word in text_lower)
    english_count = sum(1 for word in english_words if word in text_lower)
    
    return 'sv' if swedish_count > english_count else 'en'

def get_quick_response(query: str) -> Optional[str]:
    """
    Check if query can be answered quickly without LLM calls.
    
    Args:
        query: User query
        
    Returns:
        Quick response if applicable, None otherwise
    """
    query_clean = query.lower().strip()
    language = detect_language(query)
    
    logger.info("checking_quick_response", query=query[:50], language=language)
    
    for pattern in GREETING_PATTERNS:
        if re.match(pattern, query_clean, re.IGNORECASE):
            import random
            response = random.choice(GREETING_RESPONSES[language])
            logger.info("quick_greeting_response", pattern=pattern, language=language)
            return response
    
    for pattern, responses in QUICK_PATTERNS.items():
        if re.search(pattern, query_clean, re.IGNORECASE):
            logger.info("quick_pattern_response", pattern=pattern, language=language)
            return responses.get(language, responses['en'])
    
    return None

def should_use_quick_response(query: str) -> bool:
    """
    Determine if query should use quick response path.
    
    Args:
        query: User query
        
    Returns:
        True if quick response should be used
    """
    return get_quick_response(query) is not None