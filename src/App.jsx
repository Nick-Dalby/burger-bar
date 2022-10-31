import Navbar from "./components/Navbar"
import { useState } from "react"
import SideMenu from "./components/SideMenu"


function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Navbar open={open} setOpen={setOpen}/>
    <SideMenu open={open}/>
    <main>
      <img src="http://placecorgi.com/450" />
    </main>
    </>
  )
}

export default App
