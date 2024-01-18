import React, { useState , useEffect } from 'react'
import SearchBar from './SearchBar'
import CityDetails from './CityDetails'

const apiKey = import.meta.env.VITE_API_KEY;

const Header = ({setWeatherData,setIsLoading,error,setError}) => {
  const [cityData,setCityData] = useState("");

  const handleCityData = (data) =>
  {
    setCityData(data);
    setIsLoading(true);
  }

  const getWeatherData = async () =>
  {
    try {
      if(cityData!=="")
      {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.lat}&lon=${cityData.lon}&appid=${apiKey}&units=imperial`);
      const data = await response.json();
      console.log(response,data);
      
      setWeatherData(data.list);
      setIsLoading(false);
      setError(false);
      }

    }
    catch(error)
    {
      console.log(error);
      setError(true);
    }
  }

  useEffect(()=>{getWeatherData()},[cityData]);
  
  return (
    <header className="flex justify-between items-center pb-2  w-full border-b border-black/20 max-sm:flex-col-reverse max-sm:space-y-4">
        {(cityData!=="" && !error) && <CityDetails city={cityData} />}
        <SearchBar handleCityData={handleCityData} setError={setError}/>
    </header>
  )
}

export default Header