# Typografi-förbättringar – WEBBkraft

## Mål
Förbättra typografin i "Visste du att..."-sektionen för en mer premium och professionell känsla som matchar den mörka designen.

---

## 1. Uppdatera Google Fonts-importen

Lägg till **Syne** som rubrikfont vid sidan av Inter i din font-import (troligen i `layout.tsx` eller `_document.tsx`):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

---

## 2. Uppdatera globals.css

```css
h1, h2, h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-weight: 600;
  letter-spacing: -0.01em;
}

p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;        /* var 300 – för tunn på mörk bakgrund */
  line-height: 1.7;
  color: #b0b0b0;          /* lite ljusare för bättre kontrast */
  max-width: 480px;        /* förhindrar för långa textrader */
}
```

---

## 3. Specifikt för "Visste du att..."-komponenten

Hitta komponenten (troligen `FactsSection.tsx` eller liknande) och applicera följande klasser/stilar:

### Sektionsrubrik ("Visste du att...")
```css
font-family: 'Syne', sans-serif;
font-size: 2.5rem;      /* 40px */
font-weight: 700;
letter-spacing: -0.02em;
color: #ffffff;
```

### Faktarubrikerna ("88% av konsumenter söker online...")
```css
font-family: 'Syne', sans-serif;
font-size: 1.75rem;     /* 28px */
font-weight: 600;
letter-spacing: -0.01em;
line-height: 1.2;
color: #ffffff;
```

### Brödtext under faktarubrikerna
```css
font-family: 'Inter', sans-serif;
font-size: 1rem;        /* 16px */
font-weight: 400;
line-height: 1.7;
color: #b0b0b0;
max-width: 480px;
```

### Tagg-etiketterna ("Synlighet Online", "Prestanda")
```css
font-family: 'Inter', sans-serif;
font-size: 0.75rem;     /* 12px */
font-weight: 500;
letter-spacing: 0.05em;
text-transform: uppercase;
```

---

## 4. Vad som INTE ska ändras
- Tagg-etiketternas bakgrundsfärg och guldiga accent behålls som de är
- Bildernas layout och storlek rörs inte
- Sektionens grid/flex-struktur behålls

---

## Prioriteringsordning
1. Byt rubrikfont från Poppins → Syne i globals.css
2. Höj font-weight på h2 från 400 → 600–700
3. Höj brödtext från weight 300 → 400
4. Lägg till letter-spacing på rubriker
5. Justera brödtextens färg till #b0b0b0