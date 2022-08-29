import "./Orders.css";

import {Header} from "../Header/Header";

import {useEffect, useState} from "react";
import {OrderList,} from "./OrderList/OrderList";


export const Orders = () => {


    let [orders, setOrders] = useState([]);

    let [isDElETED, setIsDeleted] = useState(true);

    let rerenderOrdersFromServer = (isDelete) => {
        setIsDeleted(isDElETED = isDelete);

    }

    useEffect(() => {
        fetch("http://localhost:8080/orders")
            .then(response => response.json())
            .then(json => setOrders(json))

    }, [isDElETED]);


    return (
        <div>
            <div className="orderHeader">
                <Header/>
            </div>

            <div className="orders">
                {orders.length && orders.map((item, index) =>

                    <div key={index}>
                        <OrderList rerenderOrdersFromServer={rerenderOrdersFromServer} item={item}/>
                    </div>)}
            </div>

        </div>
    )
}