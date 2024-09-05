import Slider from '@mui/material/Slider';
import { useContext } from "react";
import { AppContext } from "../context/AppContext"
function Age(){
  const { setAge, age } = useContext(AppContext)
  function handlechange(e){
    setAge(e.target.value)
    }
    return (
        <div>
             <p className="subHeading">Age</p>
        <Slider
        onChange={handlechange}
        aria-label="Age"
        defaultValue={age}
        color="secondary"
        valueLabelDisplay="on"
      /> 
        </div>);

   }
 export default Age;