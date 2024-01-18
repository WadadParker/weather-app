import React from 'react'
import { convertTimestampToDate } from '../../utils/utils'
import WeatherIcon from './WeatherIcon'

const WeatherCard = ({data}) => {
    const fahrenheitToCelsius=(fahrenheit) => {
        return Math.round((fahrenheit - 32) * 5/9);
      }
  return (
    <li className='flex flex-col space-y-1 sm:min-w-40 max-sm:min-w-10'>
        <p className='text-lg text-text font-bold text-center'>{convertTimestampToDate(data?.dt)}</p>
        <section className='pt-2 pb-4 rounded-lg' style={{background: "linear-gradient(180deg, #464646 0%, #1D2540 100%)"}}>
            <aside className='border-b flex items-center space-x-1 px-3 py-2'>
                <WeatherIcon weather={data?.weather[0]?.main} />
                <p className='text-white text-[19px] font-bold'>{data?.weather[0]?.main}</p>
            </aside>
            <ul className='flex flex-col space-x space-y-4 items-center mt-4'>
                <li className='flex items-center space-x-3 '>
                    <small className='text-white'>Temp</small>
                    <span className='text-white font-bold'>{fahrenheitToCelsius(data?.main?.temp)}°C / {Math.round(data?.main?.temp)}°F</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <small className='text-white'>Pressure</small>
                    <span className='text-white font-bold'>{data?.main?.pressure}</span>
                </li>
                <li className='flex items-center space-x-3 '>
                    <small className='text-white'>Humidity</small>
                    <span className='text-white font-bold'>{data?.main?.humidity}</span>
                </li>
            </ul>
        </section>
    </li>
  )
}

export default WeatherCard