import "./Items.css";
import {useState} from "react";


export const Items = ({items, getId, sendId}) => {

    let [checkItem, setCheckItem] = useState(true);


    return (
        <div onClick={() => getId(items) && setCheckItem(!checkItem)}>

            <div className={(checkItem && items.id === sendId) ? "itemsListChecked" : "itemsList"}> {items.name}</div>

        </div>
    )
}