import delItem from "../../../CostSideBar/logo/del.png";
import {useState} from "react";

export const ListItem = ({list, }) => {

    let [itemFromOrder, delItemFromOrder] = useState(true);



    return (
        itemFromOrder && <div className="orderListWrapper">

            <div className="spanWrapper">

                <div>{list.name}</div>
                <div>{list.price}</div>

            </div>

            <div className="imgWrapper">
                <img onClick={() => delItemFromOrder(!itemFromOrder)} src={delItem} alt="delItem"/>
            </div>

        </div>

    )
}