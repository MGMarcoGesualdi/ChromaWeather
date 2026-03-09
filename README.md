# 🌈 Chroma Weather

**Chroma Weather** is a weather application that transforms atmospheric data into a **visual and interactive experience**.

Rather than presenting weather information as simple numbers, the interface dynamically adapts its **colors, gradients, and visual tone** based on real-time weather conditions.

Through a system called **Dynamic Contextual Styling**, the UI responds to temperature ranges and environmental data, allowing users to **perceive weather conditions visually**.

---

# 📖 Overview

The goal of Chroma Weather is to explore how **environmental data can drive dynamic interfaces**.

Weather information becomes part of the **visual identity of the interface**, creating a more immersive interaction between the user and the data.

The application integrates:

- **real-time meteorological data**
- **dynamic UI color systems**
- **interactive geospatial visualization**

to produce a weather interface that is both **informative and experiential**.

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
cd ChromaWeather
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

Contributions are welcome.

If you'd like to contribute:

1. **Fork** the repository
2. Create a feature branch

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes with a clear and descriptive message.

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

```
