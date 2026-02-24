# Bokningssystem för Company Page

## Översikt
Integrera ett gratis bokningsformulär i den befintliga company page (my-company-page). Systemet ska hantera rådgivningstider för AI-konsultation och webbutveckling.

## Befintlig struktur
- **Backend:** Python med FastAPI (redan finns i backend-mappen)
- **Frontend:** Behöver integreras i befintlig frontend-struktur
- **Databas:** MySQL (ny databas behövs)
- **Email:** Nodemailer eller liknande för bekräftelser

## Databas (MySQL)

### Tabell: bookings
```sql
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50),
    service_type ENUM('ai_consulting', 'web_development') NOT NULL,
    description TEXT,
    status ENUM('confirmed', 'cancelled') DEFAULT 'confirmed',
    meeting_link VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_date_time (booking_date, start_time)
);
```

### Tabell: blocked_times
```sql
CREATE TABLE blocked_times (
    id INT AUTO_INCREMENT PRIMARY KEY,
    block_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    reason VARCHAR(255),
    INDEX idx_block_date (block_date)
);
```

## Backend API-endpoints (FastAPI)

Lägg till i befintlig FastAPI-backend:

### GET /api/bookings/available-slots
- **Query params:** date (YYYY-MM-DD)
- **Returnerar:** Lista med lediga tider för valt datum
- **Logik:** 
  - Endast vardagar (mån-fre)
  - Endast 08:00-17:00
  - 1-timmesslots
  - Filtrera bort bokade tider från bookings-tabellen
  - Filtrera bort blockerade tider från blocked_times-tabellen
  - Exkludera lunch 12:00-13:00

### POST /api/bookings/create
- **Body:** { booking_date, start_time, client_name, client_email, client_phone?, service_type, description }
- **Returnerar:** Bokningsbekräftelse med meeting_link
- **Logik:**
  - Validera att tiden fortfarande är ledig (double-check)
  - Generera Google Meet-länk (eller placeholder)
  - Spara i databasen
  - Skicka bekräftelseemail till kunden
  - Skicka notis till Peters email
  - Returnera bokningsdetaljer

### DELETE /api/bookings/cancel/:id
- **Params:** booking_id (från avbokningslänk i email)
- **Returnerar:** Bekräftelse på avbokning
- **Logik:**
  - Uppdatera status till 'cancelled'
  - Skicka avbokningsbekräftelse till kund
  - Notifiera Peter

### GET /api/bookings/admin (optional för MVP)
- **Auth:** Enkel auth för Peter
- **Returnerar:** Lista alla bokningar
- **Logik:** Hämta alla bokningar, sorterade efter datum

## Frontend-komponenter

### BookingCalendar.jsx/tsx
- Kalenderbiliotek (react-calendar eller react-big-calendar)
- Visa tillgängliga dagar (endast vardagar)
- Markera idag + max 4 veckor framåt
- Fetcha tillgängliga slots när datum väljs

### TimeSlotPicker.jsx/tsx
- Visa lediga 1-timmesslots för valt datum
- Grid-layout med klickbara slots
- Gråa ut bokade/otillgängliga tider
- Markera valt slot

### BookingForm.jsx/tsx
- Formulär med:
  - Service type (dropdown: AI-konsultation / Webbutveckling)
  - Namn (required)
  - Email (required, validering)
  - Telefon (optional)
  - Beskrivning (textarea, required, max 500 tecken)
- Sammanfattning av vald tid + tjänst
- "Bekräfta bokning"-knapp

### BookingConfirmation.jsx/tsx
- Visas efter lyckad bokning
- Visa bokningsdetaljer
- Meeting-länk (klickbar)
- "Lägg till i kalender"-knapp (.ics fil)
- Information om bekräftelseemail

## Email-funktionalitet

### Bekräftelseemail till kund
**Subject:** "Bokningsbekräftelse - Rådgivning med Peter"

**Body:**
- Tack för bokningen
- Datum och tid
- Typ av tjänst
- Google Meet-länk
- Avbokningslänk
- "Lägg till i kalender"-länk (.ics bifogad)
- Kontaktinfo till Peter

### Notis till Peter
**Subject:** "Ny bokning: [Tjänst] - [Datum]"

**Body:**
- Klientens namn och kontaktinfo
- Datum och tid
- Typ av tjänst
- Beskrivning av ärendet
- Meeting-länk

### Påminnelseemail (24h innan)
**Subject:** "Påminnelse: Möte imorgon kl [tid]"

**Body:**
- Påminnelse om mötet
- Meeting-länk
- Möjlighet att avboka

## Tekniska detaljer

### Database connection
- Använd mysql2 eller pymysql (beroende på om backend-logik läggs i Python eller Node.js)
- Connection pool för prestanda
- Environment variables för credentials

### Email service
- Nodemailer (om Node.js används för email)
- SMTP-konfiguration (Gmail, SendGrid eller Resend)
- Email templates i separata filer

### Google Meet integration (optional för MVP)
- Google Calendar API
- Skapa event automatiskt vid bokning
- Returnera Meet-länk
- (Alternativ: Använd statisk Zoom/Meet-länk för MVP)

### Tidshantering
- Alla tider sparas i lokal tid (svensk tid)
- Display i svensk tid (CET/CEST)
- Validera att bokning är minst 24h framåt

### Validation
- Backend: Validera att tid är ledig innan save
- Frontend: Disable slots som är bokade (hämtas från API)
- Email-validering både frontend och backend

## UI/UX-flöde

1. **Användaren besöker booking-sektionen på company page**
2. **Väljer typ av tjänst** (AI-konsultation eller Webbutveckling)
3. **Ser kalender** med tillgängliga dagar
4. **Väljer datum** → Ser lediga tider för den dagen
5. **Väljer tid** → Formulär visas
6. **Fyller i uppgifter** → Sammanfattning visas
7. **Bekräftar** → Bekräftelsesida + email skickas
8. **Får bekräftelse** med Meet-länk och avbokningslänk

## Styling
- Integrera med befintlig company page design
- Responsiv design (mobil + desktop)
- Tydliga call-to-actions
- Loading states vid API-anrop
- Error handling och feedback

## Error handling
- Visa tydliga felmeddelanden vid:
  - Nätverksfel
  - Tiden redan bokad (samtidig bokning)
  - Ogiltig email
  - Fel vid email-skickning
- Retry-logik för email
- Logga errors för debugging

## Deployment
- Backend: Samma Hetzner-server som befintlig backend
- Frontend: Integrerad i befintlig frontend-build
- Databas: MySQL på samma server
- Nginx: Routing till /api/bookings

## MVP-prioritering

**Must-have för första versionen:**
- Kalenderbokningsfunktionalitet
- Databas med bookings-tabell
- API för available-slots och create-booking
- Bekräftelseemail till kund och notis till Peter
- Basic avbokningsfunktion

**Nice-to-have (kan läggas till senare):**
- Google Meet auto-generation
- Admin-panel för att se bokningar
- Påminnelseemails
- blocked_times hantering via admin
- Statistik över bokningar
- .ics fil-generation för kalender

## Säkerhetsöverväganden
- Rate limiting på booking endpoint (förhindra spam)
- CSRF-skydd
- Input sanitization
- Email-validering
- Förhindra SQL injection (använd prepared statements)

## Testning
- Testa att endast vardagar visas
- Testa att tider 08-17 visas
- Testa att bokade tider inte visas som lediga
- Testa email-funktionalitet
- Testa avbokning
- Testa samtidig bokning (två användare väljer samma tid)

---

## Sammanfattning för Claude Code

Bygg ett komplett bokningssystem som integreras i befintlig my-company-page. Använd befintlig FastAPI-backend, lägg till MySQL-databas, skapa frontend-komponenter för kalender och bokning, samt implementera email-bekräftelser. Systemet ska hantera gratis rådgivningstider med 1-timmeslots vardagar 08-17.