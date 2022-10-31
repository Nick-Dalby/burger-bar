const SideMenu = ({open}) => {
  return (
    <nav className="side-menu" data-open={open}>
      <ul>
        <li><span>nav link 1</span> ✨</li>
        <li><span>nav link 2</span> 🐶</li>
        <li><span>nav link 3</span> 🎈</li>
      </ul>
    </nav>
  )
}
export default SideMenu