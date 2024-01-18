import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CityDetails from "./components/CityDetails";

const apiKey = import.meta.env.VITE_API_KEY;
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

function App() {

  return (

    <div className=" font-roboto h-screen" style={{background: "radial-gradient(50% 50% at 50% 50%, #E0E8F1 0%, #BFCAD6 100%)"}}>
      <NavBar />
      <section className=" px-40 pt-14">
        <header className="flex justify-between items-center pb-2 flex-row-reverse w-full border-b border-black/20">
          <SearchBar />
          <CityDetails city={cityData[0]} />
        </header>
      </section>
    </div>

  )
}

export default App
