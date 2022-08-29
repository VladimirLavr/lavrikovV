import "./ListMasters.css";
import {FreeMaster} from "../FreeMaster/FreeMaster";
import {CreateNewMaster} from "./CreateNewMaster/CreateNewMaster";



export const ListMasters = ({isVisibleMasters, Masters,pushNewMasterToState,addChoseMasterToOrder,delMasterFromState}) => {





    return (
        <div className="ListMasters">
            {(isVisibleMasters ) && Masters.map(item => <FreeMaster delMasterFromState={delMasterFromState}   addChoseMasterToOrder={addChoseMasterToOrder} key={item.id} item={item}/>)}

            {(isVisibleMasters ) && <div className="newMasterWrapper"><CreateNewMaster  pushNewMasterToState={pushNewMasterToState}   />

            </div>}
        </div>
    )
}