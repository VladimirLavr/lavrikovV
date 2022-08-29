let orderList = [];

export const order = (orderCreate) => {

    if (orderCreate) {
        orderList.push(orderCreate);
    }


    return orderList;
}


export const deleleOrder = (delOrder) => {
    if (delOrder) {
        orderList = orderList.filter(items => items[2] !== delOrder[0]);
    }
   console.log(orderList)
    return orderList;
}

