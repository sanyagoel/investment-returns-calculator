import './inputInfo.css';
import { useState } from 'react';

// function changeValues(values,index,newValue){
//     values[index] = newValue;
//     setValues(values);
//   }

export default function Inputinfo({onSelect,values}){

    function changeValue(event){
       if(event.target.id ==='startAmount'){
       
        onSelect(values,0,event.target.value);
        
       }
       if(event.target.id ==='annualContribution'){
       
        onSelect(values,1,event.target.value);


       }
       if(event.target.id ==='rateOfReturn'){
        onSelect(values,2,event.target.value);


       }
       if(event.target.id ==='duration'){
        onSelect(values,3,event.target.value);

       }
    }
    return(
        <>
        <li>
        <label htmlFor="startAmount">INITIAL INVESTMENT</label>
            <input type="number" id="startAmount" onChange={changeValue}></input>
                  </li>

                  <li>
                  <label htmlFor="annualContribution">ANNUAL INVESTMENT</label>

            <input type="number" id="annualContribution"  onChange={changeValue}></input>
                  </li>
                  <li>
                  <label htmlFor="rateOfReturn" >EXPECTED RETURN</label>

            <input type="number" id="rateOfReturn" onChange={changeValue}></input>
                  </li>
                  <li>

                  <label htmlFor="duration"  >DURATION</label>

            <input type="number" id="duration"  onChange={changeValue}></input>
                  </li>

        </>
    )

}