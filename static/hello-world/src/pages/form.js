import { invoke } from '@forge/bridge';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
function Form () {
  var tt ="";

const [projectsData, setProjectsData] = useState([]);
var [value, setValue] = useState("");

  useEffect(() => {
      invoke('getProjectsData').then(data =>{
        let combinedArray = data.map(({name}) => name)
        setProjectsData(combinedArray)   
      }) ;
  }, []);

  function test(event){
    console.log("first",event);
    setValue(event);
    console.log("second",value);
  }


 return (
    <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
    <div className='Form'>
        <h5 style={{color:"black"}}> Select a project</h5>
        <Multiselect
        isObject = {false}
        onRemove = {(event)=>console.log(event)}
        onSelect = {(event)=>test(event)}
         options={projectsData}
          />
    <div>
    <form onSubmit={(e) => console.log(e)}>
        <button type='submit' className='btn btn-primary'>Click me</button>
      </form>
    </div>
    </div>
    </div>

  )
}
export default Form;