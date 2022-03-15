
const Inputs=({classes,placeholder,value,onChange,type,require})=>{
  return (
    <>
      <input
      type={type}
      value={value}
      className={classes}
      placeholder={placeholder}
      onChange={onChange}
      required={require ? require:false}
    />
    </>
  )
}

export default Inputs;