import {OrderListItem} from "../OrderListItem/OrderListItem";
import delLogo from "./delOrder.png"
import {useState} from "react";
import {delFromOrders} from "../../../Api/getList";


export const OrderList = ({item, rerenderOrdersFromServer}) => {

    let [isDelete, setIsDelete] = useState(true);

    let deleteOrderFromOrders = (item) => {
        setIsDelete(!isDelete);
        delFromOrders(item);
        rerenderOrdersFromServer(isDelete);
    }


    return (
        isDelete && <div className="contentWrapper">
            <div className="ordersMasterWrapper" key={item[0].id}>
                <div className="ordersMaster">
                    {item[0].name}
                    <div>
                        {item[2]}
                    </div>
                </div>
                <div onClick={() => deleteOrderFromOrders(item)}>
                    <img src={delLogo} alt="delLogo"/>
                </div>
            </div>
            <div className="ordersList">
                <OrderListItem item={item}/>
            </div>
        </div>
    )

}