
export const getCategoriesListServices = (Lavrikov) => {
    let CategoriesListServices;
    CategoriesListServices = Lavrikov.filter(item => item.CategoriesListServices);
    console.log(Lavrikov);
    return CategoriesListServices;


}