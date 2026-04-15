import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { useEffect, useState } from "react"


const App = () => {

  const [theme, setTheme] = useState("light");

useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar theme = {theme} setTheme = {setTheme}/>
    <main className="flex-1">

    <Outlet/>
    </main>
    <Footer/>

        
    </div>
  )
}

export default App