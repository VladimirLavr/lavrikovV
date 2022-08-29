import "./CostSideBar.css"

import {SideBarHeader} from "./SideBarHeader/SideBarHeader";
import {SideBarOrderCreate} from "./SideBarOrderCreate/SideBarOrderCreate";
import {ChoseMaster} from "./ChoseMaster/ChoseMaster";
import {postCreateOrder} from "../../Api/getList";
import {useState} from "react";

export const CostSideBar = ({
                                isVisibleMasters,
                                isVisibleCategories,
                                allChoseItemsOrder,
                                deleteItemOrderFromCart,
                                choseMaster,
                                clearAllFromCart, clearMasterFromCart,
                            }) => {

    let [cleanUp, setCleanUp] = useState(false);

    let [useValue,setUseValue]=useState('');

    const cleanUpsideBar = (choseMaster, allChoseItemsOrder) => {
        postCreateOrder(choseMaster, allChoseItemsOrder,useValue);
        setCleanUp(!cleanUp);
        clearAllFromCart();
        setUseValue(useValue='')
        setTimeout(() => {
            setCleanUp(cleanUp)
        }, 2000);

    }


    return (

        (isVisibleMasters || isVisibleCategories) && <div className="CostSideBar">

            <SideBarHeader cleanUp={cleanUp} allChoseItemsOrder={allChoseItemsOrder}/>


            {allChoseItemsOrder && allChoseItemsOrder
                .map(item => <SideBarOrderCreate cleanUp={cleanUp}
                                                 deleteItemOrderFromCart={deleteItemOrderFromCart} key={item.id}
                                                 item={item}/>)}

            <ChoseMaster clearMasterFromCart={clearMasterFromCart} allChoseItemsOrder={allChoseItemsOrder}
                         cleanUp={cleanUp}   choseMaster={choseMaster}/>

            <input value={useValue} onChange={(event) => setUseValue(event.target.value)}   className="inputSideBar" placeholder="Введіть номерний знак авто"/>

            {(allChoseItemsOrder.length && choseMaster && useValue.length>7) ?
                <button onClick={() => cleanUpsideBar(choseMaster, allChoseItemsOrder)}
                        className="CostSideBarButton">Записаться</button>

                : <button
                    className="CostSideBarButtonDisable">Записаться</button>}
        </div>
    )
}