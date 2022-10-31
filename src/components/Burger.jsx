const Burger = ({open, handleClick}) => {
  return (
    <button data-open={open} onClick={handleClick} aria-label="Toggle menu">
      <span />
      <span />
      <span />
    </button>
  )
}
export default Burger