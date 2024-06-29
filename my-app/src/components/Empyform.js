import { useState } from "react"
import css from "./empyform.css"
let InitialSate = {
    
    id:0,
   Name:"",
    Age:"",
    perHour_rate:"",
    working_hour: 0,
    Ph_no:"",
    skill:""

  }
 window.c=5 
function EmpyForm({addToDB}){
   const [FormData,setFormData] = useState(InitialSate)
   function handleSubmit(e){
   addToDB(FormData)
   e.preventDefault()
       
   }
   function handleChange(e){
    setFormData({...FormData,

        [e.target.name]:e.target.value
    })    
   }
   
    return (
        <div className="form_cont">
        
        <form  className="EmpyForm" onChange={handleChange}>
            <span className="title">Name : <input type="text"  name="Name" /></span>
            <span className="title">Age : <input type="text" name="Age" /></span>
            <span className="title">Per Hour rate : <input type="text" name="perHour_rate" /></span>
            <span className="title">working Hour : <input type="text" name="working_hour" /></span>
            <span className="title">Ph. Number : <input type="text" name="Ph_no" /></span>
            <span className="title">Skill : <input type="text" name="skill" /></span>
            <input  className="subBtn" type="submit" onClick={handleSubmit}></input> 
        </form>
        
        </div>
    )
}

export default EmpyForm;