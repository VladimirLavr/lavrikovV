export const getCategories = (Lavrikov) => {

    let Categories;
    Categories = Lavrikov.filter(item => item.Categories)
    console.log(Lavrikov)
    return Categories
}