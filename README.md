```markdown
# 🌈 Chroma Weather
> **A context-aware weather engine** that bridges the gap between atmospheric data and visual emotion.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-v1.9-199903?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.org/)
[![OpenWeather](https://img.shields.io/badge/API-OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap)](https://openweathermap.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📖 Overview
**Chroma Weather** non è un semplice aggregatore di dati. È un'applicazione progettata per offrire un feedback visivo immediato. Attraverso un sistema di **Dynamic Contextual Styling**, l'intera interfaccia reagisce alle variazioni termiche, trasformando i dati grezzi in un'esperienza cromatica immersiva.



---

## 🛠 Tech Stack & Architecture
L'architettura è basata su una struttura a componenti atomici per massimizzare la riutilizzabilità e le performance:

- **Core Framework:** React 18+ (Functional Components & Hooks).
- **Data Layer:** Integrazione con OpenWeather API tramite `fetch` asincroni.
- **Geospatial:** Layer cartografico interattivo con **Leaflet.js**.
- **Typography:** - `Syne` (700/800) per gli elementi di branding e temperature.
  - `DM Mono` (400/500) per la precisione metrica.
- **Dynamic CSS:** Variabili CSS iniettate via JavaScript per gestire il sistema "Chroma" (gradienti dipendenti dalla temperatura).

---

## 🚀 Guida all'Installazione

### 1. Requisiti
- Node.js (v16.x o superiore)
- npm o yarn

### 2. Clonazione e Setup
```bash
git clone [https://github.com/MGMarcoGesualdi/MgWeatherAppAPI.git](https://github.com/MGMarcoGesualdi/MgWeatherAppAPI.git)
cd MgWeatherAppAPI
npm install

```

### 3. Configurazione API (Sicurezza)

*Nota: Al momento l'applicazione richiede la chiave API direttamente nei componenti. Per motivi di sicurezza e per favorire i contributi, si consiglia di non caricare la propria chiave su repository pubblici.*

Se desideri testare l'app:

* Ottieni la tua API Key su [OpenWeatherMap](https://openweathermap.org/api).
* Inseriscila nel parametro `apiKey` all'interno dei file `.jsx` in `src/components/`.

---

## 📂 Struttura del Progetto

```text
src/
 ├── assets/            # Media, font locali e loghi
 ├── components/        # UI Atoms (SearchBar, Card, Forecast, Map)
 ├── App.jsx            # State Management & Dynamic Logic
 ├── App.css            # Chroma Styling Engine
 └── index.js           # Virtual DOM Rendering

```

---

## 🗺 Roadmap & Prossimi Step

Siamo sempre alla ricerca di miglioramenti. Ecco cosa abbiamo in programma:

* [ ] **State Management:** Migrazione a Context API o Redux per una gestione più fluida.
* [ ] **Environment Security:** Implementazione di file `.env` per la gestione delle API Keys.
* [ ] **Extended Forecast:** Vista settimanale con grafici SVG.
* [ ] **Dark Mode Sync:** Sincronizzazione automatica con le impostazioni del sistema operativo.

---

## 🤝 Contribuisci al Progetto

Siamo aperti a Pull Request! Se vuoi contribuire:

1. Effettua il **Fork** del repository.
2. Crea un branch per la tua feature (`git checkout -b feature/NuovaFeature`).
3. Effettua il commit delle modifiche seguendo le [Conventional Commits](https://www.conventionalcommits.org/).
4. Apri una **Pull Request** descrivendo i cambiamenti.

---

## 👨‍💻 Autore

**Marco Gesualdi**

* GitHub: [@MGMarcoGesualdi](https://www.google.com/search?q=https://github.com/MGMarcoGesualdi)
* VSCode Marketplace: [MGExtensions](https://marketplace.visualstudio.com/publishers/MGMarcoGesualdi)

---

*Progetto creato a scopo didattico e professionale per l'esplorazione di interfacce dinamiche in React.*
