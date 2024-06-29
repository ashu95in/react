import css from './EmpyCard.css'

function EmpyCard({ skill, Ph_no, Name, Age, perHour_rate, wkhr ,id,toggle,remove}) {
    
  function   remove_func(){
    remove(id)
}

    return (
    <div className='EmpyCard'>
          {toggle?'':<button className='remove' onClick={remove_func}>X</button>}
            <ul>
            
                <li>Name: {Name}</li>

                <li>Age: {Age}</li>

                <li>perHour rate: {perHour_rate}</li>

                <li> working_hour: {wkhr}</li>

                <li> Ph. NO: {Ph_no}</li>

                <li>skill: {skill}</li>
                <li>id: {id}</li>

            </ul>
        </div>
    )
}

export default EmpyCard