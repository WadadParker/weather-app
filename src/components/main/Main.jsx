import React from 'react'
import DateAndLabels from './DateAndLabels';
import WeatherCard from './WeatherCard';

const filterFirstOccurrenceOfDay = (data) => {
    const result = [];
    const seenDays = new Set();
  
    for (const entry of data) {
      // Extracting day from timestamp (ignoring time)
      const day = new Date(entry.dt_txt.split(" ")[0]).toLocaleDateString();
  
      if (!seenDays.has(day)) {
        seenDays.add(day);
        result.push(entry);
      }
    }
  
    return result;
  };

const Main = ({isLoading,weatherData}) => {
    const filteredWeatherData = filterFirstOccurrenceOfDay(weatherData);

  if(isLoading)  
  return (
    <div className='pt-12 max-sm:pt-2 flex justify-center items-center'>
        <aside className='w-10 h-10 border-black border-t-2 rounded-full animate-spin'></aside>
    </div>
)
  return (
    <div className=' pt-12 max-sm:pt-0'>
        <main className='flex space-x-11 max-sm:space-x-0 max-sm:flex-col max-sm:space-y-3'>
            <DateAndLabels date={filteredWeatherData[0].dt}/>
            <ul className='grow flex space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5 max-sm:px-[15%]'>
                {filteredWeatherData?.map((data,index)=>{
                    if(index<5)
                    return (<WeatherCard key={index} data={data}/>)
                })}
                
            </ul>
        </main>
    </div>
  )
}

export default Main