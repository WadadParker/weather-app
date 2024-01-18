import NavBar from "./components/NavBar";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  return (

    <div className=" font-roboto">
      <NavBar />
      <h1>Hello world</h1>
    </div>

  )
}

export default App
