import { useEffect, useState } from "react";

function App(){
const [randomPic, setRandomPic] = useState("https://dog.ceo/api/breeds/image/random")
const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then (resp => resp.json())
    .then (data => {
      setRandomPic(data.message)
      setIsLoaded(true)})
  },[])

    //loading indicator
    if(!isLoaded) return <p>Loading...</p>;
  return(
    <img src={randomPic} alt="A Random Dog" />
  )
}

export default App;