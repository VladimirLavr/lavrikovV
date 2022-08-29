import "./SideBarHeader.css";

export const SideBarHeader=({allChoseItemsOrder,cleanUp})=>{



    let costSum=()=>{
        return allChoseItemsOrder.map(item=>parseInt(item.price)).reduce((acc, num) => acc + num, 0)
    }



    return(
        <div className="SideBarHeader">{
           <div className="SideBarHeader__allCost">
                < div > Вартість робіт:  <span className="costResult">{!cleanUp ? costSum() : 0}</span>  грн</div>
           </div>
        }</div>
    )
}