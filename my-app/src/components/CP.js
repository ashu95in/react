import { useState } from 'react'
import css from './CP.css'

const initialState = {
    id: 0,
    Name: " ",
    Age: "19",
    perHour_rate: "41",
    working_hour: 8,
    Ph_no: "89688437257",
    skill: "High level of discipline"
}

function CP({ empyNumbers, TogleAdform,Toggle}) {
    const [empyInfo, setEmpyInfo] = useState(initialState)
    const [addBtn,setAddbtn] = useState(false)
    function findEmpy() {
        console.log("finding...")
    }

    function RemoveEmpy() {
        Toggle()
        
    }
    function addEmpy() {
        console.log("runnig ad ")
       TogleAdform()
    
     }
    function EditEmpy() {
        console.log("Editing...")
    }

    function handleChange(e) {
        setEmpyInfo({
            ...empyInfo,
            [e.target.name]: e.target.value,
            
            
        })
        
        

    }


    return (

        <div className='cont'>

            <input type='text' name='Name' placeholder='find employee' onChange={handleChange} />
            <button className='findbtn' onClick={findEmpy}>Find</button>
            <button className='findbtn' onClick={RemoveEmpy}>Remove</button>
            <button className='findbtn' onClick={addEmpy}>ADD</button>
            <button className='findbtn' onClick={EditEmpy}>Edit</button>
            <p className='info'>Number of Employee: {empyNumbers}</p>
            
        </div>
        
    )
}
export default CP