import React from 'react'
import SearchBar from './SearchBar'
import CityDetails from './CityDetails'

const cityData = [
    {
        "name": "Hubli",
        "local_names": {
            "de": "Hubli",
            "ja": "フッバッリ",
            "ur": "ہوبلی",
            "te": "హుబ్బల్లి",
            "pt": "Hubli",
            "ru": "Хубли-Дхарва",
            "ml": "ഹുബ്ലി",
            "es": "Hubli",
            "ks": "ہوبلی",
            "ta": "ஹூப்பள்ளி",
            "kn": "ಹುಬ್ಬಳ್ಳಿ",
            "he": "הובלי",
            "en": "Hubli",
            "ar": "هوبلي",
            "hi": "हुबली"
        },
        "lat": 15.3518378,
        "lon": 75.1379848,
        "country": "IN",
        "state": "Karnataka"
    }
  ]

const Header = () => {
  return (
    <header className="flex justify-between items-center pb-2 flex-row-reverse w-full border-b border-black/20">
        <SearchBar />
        <CityDetails city={cityData[0]} />
    </header>
  )
}

export default Header