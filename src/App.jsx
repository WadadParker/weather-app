import NavBar from "./components/NavBar";
import Header from "./components/header/Header";

const apiKey = import.meta.env.VITE_API_KEY;


function App() {

  return (

    <div className=" font-roboto h-screen" style={{background: "radial-gradient(50% 50% at 50% 50%, #E0E8F1 0%, #BFCAD6 100%)"}}>
      <NavBar />
      <section className=" px-40 pt-14">
        <Header />
      </section>
    </div>

  )
}

export default App
