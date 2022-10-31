import Burger from "./Burger"


const Navbar = ({open, setOpen}) => {

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <Burger open={open} handleClick={handleClick}/>
    </nav>
  )
}
export default Navbar