const Buttons=({ classes, text ,onClick})=>{
  return (
    <>
      <button  onClick={onClick} className={classes}>
        {text}
      </button>
    </>
  )
}

export default Buttons;
