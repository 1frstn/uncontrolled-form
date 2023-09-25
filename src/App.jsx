import { useRef } from "react"


function App() {

  const numberRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const number = numberRef.current.value;

    if(Number.isNaN(Number(number))){
      alert('Only number')
    }else if(number.length >=10){
      alert('number exceed')
    }else{
      alert(`sending conformation code to ${number}.`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Phone number</label>
        <input type="text" ref={numberRef} />
        <button type="submit" >Submit</button>
      </form>
    </>
  )
}

export default App
