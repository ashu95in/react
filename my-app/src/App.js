import { useContext, useState } from 'react';
import css from './App.css';
import CP from './components/CP'
import EmpyCard from './components/EmpyCard';
import Raw_DB from './DataBase/Empy.json'
import EmpyForm from './components/Empyform'

function App() {
  const [DB,setDB] = useState(Raw_DB)
  var [toggle,setToggle] = useState(true)
  var [Formtoggle,setFormtoggle] = useState(true)
  
  
  const Toatl_active_empy = DB.length
  
  function addNewEmpy(obj){
    console.log("from form")
    setDB([...DB,{...obj,id:DB.length+1}])
     }
  
  function Toggle(){
    if(toggle) setToggle(false)
    else setToggle(true)  
  }
   

  function remove(id){
    setDB([...DB.filter(i=>{
      return i.id!==id
    })])
    console.log("removing")
  }

   function TogleAdform(){
    if(Formtoggle) setFormtoggle(false)
      else setFormtoggle(true)
   } 
  


  return (
    <>
      <div className='cont1'>
        <CP  empyNumbers = {Toatl_active_empy}  Toggle = {Toggle} remove={remove} TogleAdform={TogleAdform}></CP>

        {DB.map(empys =>
          <EmpyCard {...empys} toggle={toggle} remove={remove}></EmpyCard>
          )}
          

      </div>
      {Formtoggle?<EmpyForm addToDB={addNewEmpy}></EmpyForm>:""}
      
    </>
  )

}

export default App;
