import "./ListContent.css";
import {ItemContent} from "../ItemContent/ItemContent";


export const ListContent = ({CategoriesListServices, sendId, isVisible,addChoseItemsToOrder}) => {


    return (
        <div className="ListContentWrapper">
            <div className="listContent">
                {isVisible && CategoriesListServices.map(obj => obj.ListService.map(item => <div
                    key={item.id}>
                    {sendId === obj.id && <ItemContent addChoseItemsToOrder={addChoseItemsToOrder} item={item}/>}

                </div>))}
            </div>
        </div>
    )
}