# Real-Time Weather Monitoring System

This project is a Python-based weather monitoring system that provides real-time weather updates, daily summaries, and alerts for multiple cities.

## What This Project Does

- Fetches real-time weather data for multiple cities
- Calculates daily weather summaries (average, max, and min temperatures)
- Identifies the main weather condition for each day
- Alerts users when temperatures exceed set thresholds
- Visualizes weather trends over time

## How to Set Up and Run

1. Make sure you have Python 3.7 or newer installed on your computer.

2. Download this project to your computer.

3. Open a terminal/command prompt and navigate to the project folder.

4. Install the required Python packages by running:
   ```
   pip install aiohttp matplotlib
   ```

5. Get a free API key from OpenWeatherMap:
   - Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account
   - Once logged in, go to your profile and copy your API key

6. Open the file `src/config/config.py` in a text editor and replace `"your_api_key_here"` with your actual API key.

7. In the same file, you can change the list of cities you want to monitor by editing the `CITIES` list.

8. To start the weather monitoring system, run:
   ```
   python run.py
   ```

9. The program will start collecting weather data and will create visualizations in the project folder.

## Understanding the Output

- The program will print updates to the console as it collects data.
- It will create image files (PNG) in the project folder showing weather trends.
- If the temperature in any city goes above the set threshold, you'll see alert messages in the console.

## Customizing the System

- To change how often the system updates, edit the `UPDATE_INTERVAL` in `src/config/config.py`.
- To adjust temperature alert thresholds, modify the `ALERT_THRESHOLDS` in the same file.

