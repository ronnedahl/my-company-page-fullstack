# Växtkraft Webb

Fullstack monorepo for **Växtkraft Webb** — a web agency in Karlstad, Sweden, offering web development and AI services to local businesses. All user-facing content is in Swedish.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 16, React 19, Tailwind CSS 4, TypeScript |
| **Backend** | FastAPI, Python 3.12, SQLAlchemy (async), LangGraph |
| **Database** | MySQL (bookings), Firebase Firestore (vector store) |
| **AI** | OpenAI GPT + Embeddings, LangGraph agent |
| **Icons/Fonts** | Font Awesome 7, Poppins (Google Fonts) |

## Features

- **Landing page** — Hero, services, pricing, testimonials, case studies, contact form
- **Service detail page** — `/webbutveckling` with process steps, features, CTA
- **Booking system** — 5-step wizard: choose service → pick date → pick time → contact info → confirmation
- **AI chatbot** — Floating chat widget powered by LangGraph with Firebase vector search (RAG)

## Monorepo Structure

```
├── next-app/                  # Frontend (Next.js)
│   └── src/
│       ├── app/               # Pages (/, /booking, /webbutveckling)
│       ├── components/
│       │   ├── booking/       # Booking wizard (5-step flow)
│       │   ├── layout/        # Header, Footer, ServiceHeader
│       │   ├── sections/      # Homepage sections
│       │   ├── ui/            # Reusable buttons, headers
│       │   └── webbutveckling/# Service page components
│       ├── lib/               # Icons, booking API helpers
│       └── types/             # TypeScript interfaces
│
├── backend/                   # Backend (FastAPI)
│   ├── .env.example           # Environment variable template
│   └── src/
│       ├── api/routes/        # Endpoints (chat, bookings, search, health)
│       ├── config/            # Settings (env variables)
│       ├── core/              # LangGraph agent (nodes, state, graph)
│       ├── models/            # Pydantic + SQLAlchemy models
│       ├── services/          # Business logic (booking, vector store, embeddings)
│       ├── middleware/        # CORS, security, auth
│       └── utils/             # Logging, caching, quick responses
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.12+
- MySQL 8+

### 1. Clone the repo

```bash
git clone https://github.com/your-username/vaxtkraft-webb.git
cd vaxtkraft-webb
```

### 2. Database Setup

```bash
sudo service mysql start

mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS vaxtkraft_bookings CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

mysql -u root -p vaxtkraft_bookings -e "
CREATE TABLE IF NOT EXISTS bookings (
    id VARCHAR(36) PRIMARY KEY,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50),
    service_type ENUM('ai-consultation', 'web-development') NOT NULL,
    description TEXT,
    status ENUM('confirmed', 'cancelled') NOT NULL DEFAULT 'confirmed',
    meeting_link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_booking_date (booking_date),
    INDEX idx_status (status)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS blocked_times (
    id VARCHAR(36) PRIMARY KEY,
    blocked_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_blocked_date (blocked_date)
) ENGINE=InnoDB;
"
```

### 3. Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate   # Linux/Mac
# venv\Scripts\activate    # Windows
pip install -r requirements.txt
cp .env.example .env       # Edit with your credentials
python -m uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload
```

### 4. Frontend

```bash
cd next-app
npm install
npm run dev
```

Frontend: `http://localhost:3001` | Backend: `http://localhost:8000`

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in your credentials:

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key (for chatbot) |
| `FIREBASE_*` | Firebase service account credentials (for vector store) |
| `MYSQL_HOST` | MySQL host (default: `localhost`) |
| `MYSQL_PORT` | MySQL port (default: `3306`) |
| `MYSQL_USER` | MySQL user |
| `MYSQL_PASSWORD` | MySQL password |
| `MYSQL_DATABASE` | MySQL database name (default: `vaxtkraft_bookings`) |

## API Endpoints

### Booking System

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/bookings/available-slots?date=YYYY-MM-DD` | Get available time slots |
| `POST` | `/api/bookings/create` | Create a booking |
| `DELETE` | `/api/bookings/cancel/{id}` | Cancel a booking |

### AI Chatbot

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/chat/` | Send a message to the AI assistant |
| `POST` | `/search/` | Semantic search in knowledge base |
| `GET` | `/health/` | Health check |

## Booking Rules

- Weekdays only (Mon–Fri)
- Working hours: 08:00–17:00
- Lunch break: 12:00–13:00 (no bookings)
- 1-hour slots
- Minimum 24h in advance
- Maximum 4 weeks ahead
