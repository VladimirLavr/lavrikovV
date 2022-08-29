import "./ListCategories.css";

import {Items} from "../Items/Items";

export const ListCategories = ({Categories,isVisible,getId,sendId}) => {

    return (
        <div  className="ListCategories">
            {isVisible && Categories.map(items => <div    key={items.id}>
               <Items  sendId={sendId} getId={getId}  items={items}/>
            </div>) }

        </div>
    )
}