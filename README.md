A modern and responsive Weather Application built using React that provides real-time weather information for any location using a public weather API.
This project is designed as a learning-focused application while maintaining a clean UI and a scalable code structure.
🔍 Project Overview
The Weather App allows users to search for any city and instantly view current weather details such as:
🌡️ Temperature
🌧️ Weather conditions
💨 Wind speed
💧 Humidity
The application fetches real-time data from a public API and displays it in an easy-to-understand format.
🚀 Features
🔎 Search weather by city name
🌡️ Real-time temperature updates
☁️ Weather condition display (Clear, Clouds, Rain, etc.)
💧 Humidity and 💨 wind speed information
📱 Responsive design for all screen sizes
⚡ Fast and lightweight UI
🛠️ Tech Stack
Frontend
React (Create React App)
Languages
JavaScript
HTML
CSS
API
OpenWeatherMap API
Tools
Git
GitHub
Visual Studio Code
⚙️ Installation & Setup
Follow the steps below to run the project locally:
# 1. Clone the repository
git clone https://github.com/your-username/weather-app.git

# 2. Navigate into the project directory
cd weather-app

# 3. Install all required dependencies
npm install

# 4. Create a .env file in the root folder
# (add your OpenWeatherMap API key inside it)
REACT_APP_WEATHER_API_KEY=your_api_key_here

# 5. Start the development server
npm start

🌐 Run the Application
After running npm start, open your browser and visit:
Copy code

http://localhost:3000

🔑 API Configuration
To fetch weather data, you need an API key from OpenWeatherMap.
Steps:
1.Create a free account on OpenWeatherMap
2.Generate your API key
3.Create a .env file in the root directory
4.Add your API key as shown below:

Env
REACT_APP_WEATHER_API_KEY=your_api_key
