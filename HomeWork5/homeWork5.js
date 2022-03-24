const movies = [
    { id: 1, name: "Fast and Furious", cost: 5.99 },
    { id: 2, name: "Fast and Furious 2", cost: 3.99 },
    { id: 3, name: "Fast and Furious 4", cost: 4.99 },
    { id: 4, name: "Shrek", cost: 12.99 },
];

const cart = [];

function addToCart(id) {
    movies.filter(addMovie => {
        if (id === addMovie.id) {
            return cart.push(addMovie)
        }
    })

}

addToCart(2);

function printCheck() {
    const newCart = cart.map(movieItem => {
        return (`${movieItem.id} -- ${movieItem.name} -- $${movieItem.cost}`)
    })
    console.log(newCart)
}

printCheck();




