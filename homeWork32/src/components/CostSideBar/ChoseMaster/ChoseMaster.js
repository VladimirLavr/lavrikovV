import "./ChoseMaster.css";
import deleteMaster from "../logo/del.png"

export const ChoseMaster=({choseMaster,cleanUp,clearMasterFromCart})=>{
    return(
       <div className="ChoseMaster">
           {choseMaster && !cleanUp && <div className="IsChoseMaster"> {choseMaster.name}</div>}
           <img  onClick={()=>clearMasterFromCart()}  className="delImg"  src={deleteMaster} alt="delMaster"/>
       </div>
)
}