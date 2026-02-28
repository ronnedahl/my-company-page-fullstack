# Specifikation för UI-sektion: "Processen i 6 steg"

## 1. Översikt och Layout
Denna sektion är en processbeskrivning (How it works / Process steps) som visar 6 steg i form av kort (cards). 
* **Tema:** Dark mode (Mörk bakgrund med ljus text och cyan/turkosa accentfärger).
* **Layout Desktop:** Ett CSS Grid med 3 kolumner och 2 rader (3x2).
* **Layout Mobile:** Ska brytas ner till 1 kolumn (1x6).
* **Avstånd:** Generöst med "gap" (avstånd) mellan korten (ca 24px - 32px).
* **Huvudrubrik:** Sektionen har en centrerad huvudrubrik högst upp: "Så här går processen till". Vit färg, modern sans-serif font.

## 2. Färgpalett (Design Tokens)
* **Main Background:** Mycket mörk blå/svart (t.ex. `#0b131e` eller liknande mörk nyans).
* **Card Background:** Mörkblå, snäppet ljusare än huvudbakgrunden (t.ex. `#132235`).
* **Accent Color:** Cyan / Ljusblå (t.ex. `#00b4d8`). Används för siffror, underrubriker och länkar.
* **Text Color Primary:** Vit (t.ex. `#ffffff`). Används för titlar och huvudrubrik.
* **Text Color Secondary:** Ljusgrå/Off-white (t.ex. `#d1d5db`). Används för brödtexten.

## 3. Kortens Anatomi (Anatomy of a Card)
Varje kort ska ha rundade hörn (border-radius ca 12px) och en inre padding. Kortet består av 4 huvudelement, uppifrån och ner:

1. **Header (Flexbox-rad):**
   * En cirkel (badge) till vänster. Bakgrundsfärg: Accent Color (Cyan). Text: Siffran (1-6) i vit färg.
   * En kort-titel till höger om cirkeln. Vit text, fetstil.
2. **Bild (Image):**
   * En rektangulär bild som täcker kortets fulla inre bredd. Rundade hörn i överkant eller runtom är acceptabelt. Bilden har landskapsformat (ca 16:9 eller 4:3).
3. **Innehåll (Content block):**
   * **Underrubrik:** Samma färg som Accent Color (Cyan), fetstil.
   * **Brödtext:** Liten, ljusgrå text med normal font-weight.
4. **Footer / Länk:**
   * En länk med texten "Visa mer".
   * Samma färg som Accent Color (Cyan), fetstil.
   * Högerjusterad (aligned to bottom-right).

---

## 4. Innehåll per kort (Data Structure)

### Kort 1
* **Siffra:** 1
* **Titel:** Syftet med din hemsida
* **Bildbeskrivning:** 3D-figurer som står och tittar på ett stort blått frågetecken.
* **Underrubrik:** Vad är syftet med din hemsida ?
* **Brödtext:** Innan vi börjar är det viktigt att definiera vad hemsidan ska uppnå.
* **Länk:** Visa mer

### Kort 2
* **Siffra:** 2
* **Titel:** UI / UX - Design
* **Bildbeskrivning:** En person arbetar vid en laptop som visar en mockup av en hemsida med texten "WEB DESIGN". En kaffekopp och pennor står på skrivbordet.
* **Underrubrik:** Designen är hjärtat i hemsidan
* **Brödtext:** – här tar vi fram funktion, användarvänlighet och estetik.
* **Länk:** Visa mer

### Kort 3
* **Siffra:** 3
* **Titel:** Programmering
* **Bildbeskrivning:** Närbild på en laptopskärm som visar kod (programmering) med en smartphone liggandes bredvid tangentbordet.
* **Underrubrik:** Programmering och utveckling
* **Brödtext:** När designen är på plats tar våra erfarna programmerare över.
* **Länk:** Visa mer

### Kort 4
* **Siffra:** 4
* **Titel:** Dags att köpa en domän
* **Bildbeskrivning:** En närbild på tangentbordsknappar och texten "https" varav "https" lyser i grönt. Mörk bakgrund.
* **Underrubrik:** Vad är en domän?
* **Brödtext:** För att din hemsida ska synas online behöver du en domän.
* **Länk:** Visa mer

### Kort 5
* **Siffra:** 5
* **Titel:** Lansering online
* **Bildbeskrivning:** En surfplatta (tablet) som ligger på ett bord och visar Googles startsida.
* **Underrubrik:** Nu är det dags att gå live
* **Brödtext:** När du har köpt din domän och vi har kopplat den till din hemsida är det dags att gå live.
* **Länk:** Visa mer

### Kort 6
* **Siffra:** 6
* **Titel:** Grattis - Du gjorde det
* **Bildbeskrivning:** En glad man som sitter på ett kontor framför en laptop. Han har knutna nävar och gör en segergest.
* **Underrubrik:** Din hemsida är nu färdig
* **Brödtext:** - och redo att användas för att representera ditt företag online.
* **Länk:** Visa mer