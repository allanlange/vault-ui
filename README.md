# 🏦 Vault-UI

> **Design System & UI Library for High-Density Fintech Applications.**

Vault-UI is a specialized component library built to handle the unique challenges of the financial sector: **data density, real-time updates, and extreme precision.**

This project serves as a testament to my profile as a **Design Engineer** – the bridge builder between complex visual design and robust, scalable frontend architecture.

---

## 🏗 The Design Engineering Philosophy

In the development of Vault-UI, I have focused on three core areas:

### 1. Token-Driven Architecture

The system is built on a **Multi-tier Token Structure**. This means we can switch from "Enterprise Blue" to "Startup Dark Mode" simply by updating our semantic mapping, without touching the component code.

* **Primitives:** Precise color and spacing values.
* **Semantics:** Contextual names like `--status-positive` or `--surface-primary`.

### 2. Financial Precision (A11Y & UX)

Financial interfaces often fail on readability. Vault-UI solves this by:

* **Tabular Figures:** Forced use of monospaced numbers to prevent layout shifts with live data.
* **Color Blindness Safety:** Information is never conveyed via color alone; icons and text labels always accompany it.
* **High Density, Low Noise:** Components are optimized to display large amounts of data without overwhelming the user.

### 3. Developer Experience (DX)

A design system is only strong if other developers can use it.

* **Type-Safety:** 100% TypeScript coverage on all props.
* **Interactive Documentation:** Fully integrated with Storybook for rapid prototyping.

---

## 🛠 Tech Stack

* **Styling:** CSS Modules + CSS Variables (Design Tokens)
* **Animation:** Framer Motion (for meaningful data transitions)
* **Documentation:** Storybook
* **Icons:** Lucide React (Fintech-optimized set)

---

## 🚀 Key Components to Explore

* `SmartTable`: A virtualized table for 10,000+ transactions.
* `TrendIndicator`: A semantic component for growth/decline visualization.
* `CurrencyInput`: A masked input field for error-free amount entry.
* `VaultProvider`: A context wrapper that controls theming and global settings.

---

## 📖 How to run

```bash
# Clone the vault
git clone https://github.com/your-username/vault-ui

# Install dependencies
npm install

# Generate CSS Module types
npm run type-gen

# Run dev server (types generated automatically)
npm run dev

# Fire up the Storybook
npm run storybook
```
