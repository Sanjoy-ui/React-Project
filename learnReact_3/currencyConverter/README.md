# 💱 Currency Converter App

A simple and elegant currency converter built with **React**. It uses real-time exchange rates fetched from an open-source API and allows you to convert between currencies easily.

![Currency Converter Screenshot](./public/currencyConverter.png)

---

## 🚀 Features

- Live currency conversion
- Swap between "From" and "To" currencies
- Dynamic dropdown populated with all available currencies
- Clean, responsive UI with background image
- Built with React hooks and custom hook (`useCurrencyInfo`)

---


## 📁 Project Structure
src/
├── App.jsx
├── components/
│ └── InputBox.jsx
├── hooks/
│ └── useCurrencyInfo.js
└── main.jsx

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/currency-converter-react.git
   cd currency-converter-react
  ## Install dependencies: 
npm install
## Run the development server:
npm run dev
## Open in browser:
http://localhost:5173

##  API Used
Source: [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
## Endpoint Example:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
