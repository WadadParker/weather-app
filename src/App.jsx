import { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [weatherData,setWeatherData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(false);

  const loadingLogic = () => weatherData=="" ? isLoading : error ? false : true

  return (

    <div className=" font-roboto min-h-screen" style={{background: "radial-gradient(50% 50% at 50% 50%, #E0E8F1 0%, #BFCAD6 100%)"}}>
      <NavBar />
      <section className=" px-40 pt-14 max-sm:px-3 max-sm:pt-6">
        <Header setWeatherData={setWeatherData} setIsLoading={setIsLoading} error={error} setError={setError}/>
        {loadingLogic() && <Main isLoading={isLoading} weatherData={weatherData}/>}
        {error && <h1 className="text-red-600 font-bold text-xl fixed z-10 ">Error! Please reload and try again later</h1>}
      </section>
    </div>

  )
}

export default App
