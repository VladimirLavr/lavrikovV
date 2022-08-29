import "./FreeMaster.css";
import deleteMaster from "../CostSideBar/logo/del.png"
import {delMasterFromServer} from "../../Api/getList";


export const FreeMaster = ({item, addChoseMasterToOrder,delMasterFromState}) => {

    const delMaster=(item)=>{
        console.log(item)
        delMasterFromServer(item)
        delMasterFromState(item)
    }

    const checkMasterToOrder = (item) => {
        addChoseMasterToOrder(item)
    }

    return (
        <div className="FreeMasterWrapper" >
            <div onClick={() => checkMasterToOrder(item)} className="FreeMaster" >{item.name}</div>
            <div onClick={()=>delMaster(item)}>
                <img className="FreeMasterLogo"  src={deleteMaster} alt="deleteMaster"/>
            </div>

        </div>
    )
}