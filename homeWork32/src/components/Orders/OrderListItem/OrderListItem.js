import "./OrderListItem.css";
import {ListItem} from "./ListItem/ListItem";

export const OrderListItem = ({item}) => {

    return (
        item && item[1].map(order => order
            .map(list => <ListItem key={list.id} list={list}/>))
    )
}