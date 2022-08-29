export async function getMasters(mastersToState) {
    fetch("http://localhost:8080/Masters")
        .then(response => response.json())
        .then(json => mastersToState(json))

}

export async function getCategories(categoriesToState) {
    fetch("http://localhost:8080/Categories")
        .then(response => response.json())
        .then(json => categoriesToState(json))
}

export async function getCategoriesListServices(categoriesListServicesToState) {
    fetch("http://localhost:8080/CategoriesListServices")
        .then(response => response.json())
        .then(json => categoriesListServicesToState(json))

}

export async function getOrders(showOrders) {
    fetch("http://localhost:8080/orders")
        .then(response => response.json())
        .then(json => showOrders(json))


}

export async function delMasterFromServer(item) {
    await fetch("http://localhost:8080/DeleteMaster",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify(item)
        })

}


export async function postNewMaster(useValue) {


    await fetch("http://localhost:8080/NewMaster",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name: useValue})
        })


}


export async function postCreateOrder(choseMaster, allChoseItemsOrder, useValue) {

    let newOrder = [
        choseMaster,
        [allChoseItemsOrder], useValue];
    await fetch("http://localhost:8080/CreateOrder",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newOrder)
        })

}


export async function delFromOrders(item) {
    let delItem = item.filter(items => items[2]);
    await fetch("http://localhost:8080/DeleteOrder",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify(delItem)
        })


}

