import { invoke } from '@forge/bridge';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
function Form () {

const [projectsData, setProjectsData] = useState([]);
var [value, setValue] = useState("");

  useEffect(() => {
      invoke('getProjectsData').then(data =>{
        let combinedArray = data.map(({name}) => name)
        setProjectsData(combinedArray)   
      }) ;
  }, []);

  function test(event){
    //console.log("first",event);
    setValue(event);
    //console.log("value",value);
  }

  function tst() {
    console.log("the value found after submit", value);
  }

 return (
    <div style={{width:"90%", justifyContent:"center", display:"flex"}}>
      <div className='Form'>
          <h6 style={{color:"black"}}> Select a project</h6>
          <Multiselect
          isObject = {false}
          onSelect = {(event)=>test(event)}
          options={projectsData}
            />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <button type='button' onClick={() => tst()}>
        Submit
      </button>
    </div>
    </div>
    </div>

  )
}
export default Form;