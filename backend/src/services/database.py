"""Database connection and session management."""

from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from src.config import settings
import structlog

logger = structlog.get_logger()

engine = create_async_engine(
    settings.mysql_url,
    echo=settings.is_development,
    pool_size=5,
    max_overflow=10,
    pool_recycle=3600,
)

async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def get_db():
    """Dependency that yields a database session."""
    async with async_session() as session:
        yield session


async def init_db():
    """Initialize database connection pool."""
    logger.info("database_connecting", url=settings.mysql_host)
    # Test the connection
    async with engine.begin() as conn:
        await conn.execute(
            __import__("sqlalchemy").text("SELECT 1")
        )
    logger.info("database_connected")


async def close_db():
    """Close database connection pool."""
    await engine.dispose()
    logger.info("database_disconnected")
