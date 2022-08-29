import "./ItemContent.css";



export const ItemContent=({item,addChoseItemsToOrder})=>{


    let result=(event)=>{
        if(event.target){
            addChoseItemsToOrder(item)
        }
    }

    return(
        <div onClick={(event) => result(event)}  className="ItemContent"  >
           <div >{item.name}</div>
            <div>{item.price}</div>
        </div>
    )
}