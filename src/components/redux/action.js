const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export default addToCart
// const addToCart = (product) =>
// {
//     return{
//         type: 'ADD_TO_CART',
//      payload: product
//     }
// }
// const removeToCart = (product) =>
// {
//     return{
//         type: 'REMOVE_TO_CART',
//      payload: product
//     }
// }

// export default (addToCart,removeToCart)

// const removeToCart = (product) => ({
//     type: 'REMOVE_TO_CART',
//     payload: product
// });

// export default addToCart



