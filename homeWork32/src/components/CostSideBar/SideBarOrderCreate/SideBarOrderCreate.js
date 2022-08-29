import "./SideBarOrderCreate.css";
import logo from '../logo/cart.png'


export const SideBarOrderCreate = ({item, deleteItemOrderFromCart,cleanUp}) => {




    let deleteFromOrdrer = (item) => {
        deleteItemOrderFromCart(item)
    }


    return (
       <div className="sideBarOrderCreateWrapper">
           <div className="SideBarOrderCreate">
               {!cleanUp && < img onClick={() => deleteFromOrdrer(item)} className="SideBarCart" src={logo} alt="cart"/>}
               <div>{!cleanUp && item.name}</div>
               <div>{!cleanUp && item.price}</div>
           </div>
       </div>
    )
}