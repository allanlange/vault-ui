# 🏦 Vault-UI

> **Design System & UI Library for High-Density Fintech Applications.**

Vault-UI er et specialiseret komponentbibliotek bygget til at håndtere de unikke udfordringer i den finansielle sektor: **datadensitet, realtidsopdateringer og ekstrem præcision.**

Dette projekt fungerer som et bevis på min profil som **Design Engineer** – brobyggeren mellem komplekst visuelt design og robust, skalerbar frontend-arkitektur.

---

## 🏗 The Design Engineering Philosophy

I udviklingen af Vault-UI har jeg fokuseret på tre kerneområder:

### 1. Token-Driven Architecture

Systemet er bygget på en **Multi-tier Token Struktur**. Det betyder, at vi kan skifte fra "Enterprise Blue" til "Startup Dark Mode" ved blot at opdatere vores semantiske mapping, uden at røre ved komponent-koden.

* **Primitiver:** Præcise farve- og spacing-værdier.
* **Semantik:** Kontekstuelle navne som `--status-positive` eller `--surface-primary`.

### 2. Financial Precision (A11Y & UX)

Finansielle interfaces fejler ofte på læsbarhed. Vault-UI løser dette ved:

* **Tabular Figures:** Tvungen brug af monospacede tal for at forhindre layout-skift ved live data.
* **Color Blindness Safety:** Information formidles aldrig via farve alene; ikoner og tekst-labels følger altid med.
* **High Density, Low Noise:** Komponenterne er optimeret til at vise store mængder data uden at overvælde brugeren.

### 3. Developer Experience (DX)

Et designsystem er kun stærkt, hvis andre udviklere kan bruge det.

* **Type-Safety:** 100% TypeScript dækning på alle props.
* **Interactive Documentation:** Fuldt integreret med Storybook for hurtig prototyping.

---

## 🛠 Tech Stack

* **Framework:** React / Next.js
* **Styling:** Tailwind CSS + CSS Variables (Design Tokens)
* **Animation:** Framer Motion (til meningsfulde data-transitioner)
* **Documentation:** Storybook
* **Icons:** Lucide React (Fintech-optimeret set)

---

## 🚀 Key Components to Explore

* `SmartTable`: En virtualiseret tabel til 10.000+ transaktioner.
* `TrendIndicator`: En semantisk komponent til vækst/fald visualisering.
* `CurrencyInput`: Et maskeret input-felt til fejlfri beløbsindtastning.
* `VaultProvider`: En context-wrapper, der styrer theming og globale indstillinger.

---

## 📖 How to run

```bash
# Clone the vault
git clone https://github.com/dit-brugernavn/vault-ui

# Install dependencies
npm install

# Fire up the Storybook
npm run storybook

```
