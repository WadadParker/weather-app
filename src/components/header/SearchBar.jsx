import React, { useState } from 'react'
const apiKey = import.meta.env.VITE_API_KEY;

const SearchBar = ({handleCityData,setError}) => {

    const [search, setSearch] = useState("")

    const getCityData = async () =>
    {
      try{
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apiKey}`);
      const data = await response.json();

      handleCityData(data[0]);
      setSearch("");
      }
      catch(error) {
        console.log(error);
        setError(true);
      }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          getCityData();
        }

      };

  return (
    <aside className='flex justify-between items-center max-w-80 rounded-lg bg-white px-4 py-2 max-sm:self-stretch max-sm:mx-2' style={{boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.12)"}} >
        <input value={search} className='border-none outline-none font-roboto italic' placeholder='Search your city here...' onKeyDown={handleKeyDown} onChange={(e)=>setSearch(e.target.value)} />
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7929 16.6517H17.86L17.5294 16.3328C18.7266 14.9442 19.3846 13.1714 19.3833 11.3379C19.3833 9.81986 18.9332 8.3359 18.0898 7.07368C17.2464 5.81147 16.0476 4.82769 14.6451 4.24676C13.2426 3.66582 11.6994 3.51382 10.2105 3.80998C8.72161 4.10614 7.35398 4.83715 6.28055 5.91058C5.20713 6.984 4.47611 8.35163 4.17996 9.84052C3.8838 11.3294 4.0358 12.8727 4.61673 14.2752C5.19766 15.6777 6.18144 16.8764 7.44366 17.7198C8.70587 18.5632 10.1898 19.0133 11.7079 19.0133C13.609 19.0133 15.3567 18.3166 16.7028 17.1594L17.0216 17.4901V18.4229L22.9258 24.3153L24.6852 22.5558L18.7929 16.6517ZM11.7079 16.6517C8.76762 16.6517 6.39414 14.2782 6.39414 11.3379C6.39414 8.39764 8.76762 6.02417 11.7079 6.02417C14.6482 6.02417 17.0216 8.39764 17.0216 11.3379C17.0216 14.2782 14.6482 16.6517 11.7079 16.6517Z" fill="#444444"/>
        </svg>

    </aside>
  )
}

export default SearchBar