import { invoke } from '@forge/bridge';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
function Form () {

const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
      invoke('getProjectsData').then(data =>{
        let combinedArray = data.map(({name}) => name)
        setProjectsData(combinedArray)
      }) ;
  }, []);


 return (
    <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
    <div className='Form'>
        <h5 style={{color:"black"}}> Select a project</h5>
        <Multiselect
        isObject = {false}
        onRemove = {(event)=>console.log(event)}
        onSelect = {(event)=>console.log(event)}
         options={projectsData}
          />
    </div>
    </div>

  )
}
export default Form;