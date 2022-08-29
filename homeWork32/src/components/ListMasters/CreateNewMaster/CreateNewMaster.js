import "./CreateNewMaster.css";
import {useState} from "react";
import {postNewMaster} from "../../../Api/getList";
export const CreateNewMaster=({pushNewMasterToState})=>{


    let [useValue,setUseValue]=useState('');




    let pushNewMaster=()=>{
        postNewMaster(useValue)
        pushNewMasterToState(useValue)
        setUseValue(useValue = '')

    }

    return(
       <div >
           <input    value={useValue} onChange={(event) => setUseValue(event.target.value)} className="CreateNewMaster" placeholder="Введіть данні нового майстра" type="text" name="" id=""/>
           <button onClick={()=>pushNewMaster()}  className="button">Додати</button>
       </div>
    )
}