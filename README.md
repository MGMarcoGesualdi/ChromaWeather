```markdown
# 🌈 Chroma Weather
> **A context-aware weather engine that transforms atmospheric data into visual emotion.**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-v1.9-199903?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.org/)
[![OpenWeather](https://img.shields.io/badge/API-OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap)](https://openweathermap.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

# 📖 Overview

**Chroma Weather** is not just a weather data viewer.

It is a **visual weather experience** designed to translate atmospheric information into **color-driven UI feedback**.

Through a system called **Dynamic Contextual Styling**, the interface dynamically reacts to temperature and weather conditions, transforming raw data into an immersive chromatic environment.

Instead of simply displaying numbers, the application allows users to **perceive weather conditions visually**.

---

# ✨ Core Features

- 🌡 **Real-time weather data** via OpenWeather API  
- 🎨 **Dynamic chromatic UI** based on temperature ranges  
- 🗺 **Interactive map integration** powered by Leaflet  
- ⚡ **Reactive interface** built with React Hooks  
- 🧩 **Atomic component architecture** for scalability  
- 🔤 Carefully designed **typography pairing**

---

# 🛠 Tech Stack

### Frontend
- **React 18+**
- Functional Components
- React Hooks

### Data Layer
- **OpenWeather API**
- Asynchronous `fetch` requests

### Geospatial Layer
- **Leaflet.js** for interactive maps

### Typography
- **Syne (700 / 800)** → Branding & temperature emphasis  
- **DM Mono (400 / 500)** → Metric precision and UI data

### Styling System

A custom **Chroma Styling Engine** dynamically injects CSS variables based on weather conditions:

- Temperature-driven gradients
- Contextual UI color transitions
- Runtime CSS variable updates via JavaScript

---

# 🏗 Architecture

The project follows a **component-based atomic structure** designed for maintainability and performance.

```

src/
├── assets/            # Fonts, images and icons
├── components/        # UI atoms (SearchBar, WeatherCard, Forecast, Map)
├── App.jsx            # Global state & application logic
├── App.css            # Chroma Styling Engine
└── index.js           # React DOM rendering

````

---

# 🚀 Installation Guide

## 1️⃣ Requirements

Make sure you have installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

Check your installation:

```bash
node -v
npm -v
````

---

## 2️⃣ Clone the Repository

```bash
git clone https://github.com/MGMarcoGesualdi/ChromaWeather.git
cd MgWeatherAppAPI
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run the Development Server

```bash
npm start
```

The application will run locally at:

```
http://localhost:3000
```

---

# 🔐 Environment Configuration

The application uses the **OpenWeather API** to retrieve real-time weather data.

For security reasons, the API key is managed using **environment variables** and should **never be committed to public repositories**.

---

## 1️⃣ Create a `.env` file

In the root of the project create:

```
.env
```

---

## 2️⃣ Add your API Key

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

> ⚠️ In React applications, environment variables must start with `REACT_APP_` to be accessible in the client code.

---

## 3️⃣ Access the variable in the code

Example usage:

```javascript
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
```

---

## 4️⃣ Ignore `.env`

Make sure `.env` is included in `.gitignore`:

```
.env
```

---

## Optional: `.env.example`

For contributors, you can provide an example file:

```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

---

# 🗺 Roadmap

Future improvements planned for the project:

* [ ] **State Management Refactor**
  Migration to **React Context API** or **Redux**

* [ ] **Environment Security Improvements**
  Better configuration handling for API keys

* [ ] **Extended Forecast**
  Weekly forecast with **SVG charts**

* [ ] **Dark Mode Synchronization**
  Automatic sync with system theme preferences

* [ ] **Performance Optimization**
  Lazy loading for map and forecast components

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to contribute:

1. **Fork** the repository
2. Create a feature branch

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes following **Conventional Commits**

[https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

4. Push the branch

```bash
git push origin feature/YourFeature
```

5. Open a **Pull Request**

Please include a clear description of the improvements.

---

# 👨‍💻 Author

**Marco Gesualdi**

GitHub
[https://github.com/MGMarcoGesualdi](https://github.com/MGMarcoGesualdi)

VSCode Marketplace
[https://marketplace.visualstudio.com/publishers/MGMarcoGesualdi](https://marketplace.visualstudio.com/publishers/MGMarcoGesualdi)

---

# 📄 License

This project is licensed under the **MIT License**.

See the LICENSE file for more details.

---

# 🎯 Project Purpose

This project was created for **educational and professional purposes**, exploring how **environmental data can drive dynamic interfaces**.

The goal is to experiment with the intersection between:

* **data visualization**
* **reactive UI design**
* **environment-aware interfaces**

to create a weather application that is not only informative, but also **experiential**.
