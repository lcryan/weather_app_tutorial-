import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import axios from 'axios';


const apiKey = '7613e22655f9590922054d0746226b6e';


function App() {

    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');

    async function fetchData() {
        try {
            const result = await
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=eindhoven,nl&appid=${apiKey}&lang=nl`);
            console.log(result.data);
            setWeatherData(result.data);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
return(<SearchBar setLocationHandler={setLocation}/> )

            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    <SearchBar/>
                    <span className="location-details">
            {Object.keys(weatherData).length > 0 &&
            <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
            </>
            }
                        <button
                            type="button"
                            onClick={fetchData}>
                    Haal data op!
                </button>
              </span>
                </div>

                {/*CONTENT ------------------ */}
                <div className="weather-content">
                    <TabBarMenu/>

                    <div className="tab-wrapper">
                        Alle inhoud van de tabbladen komt hier!
                    </div>
                </div>

                <MetricSlider/>

            </div>
        </>
    )
        ;
}

export default App;
