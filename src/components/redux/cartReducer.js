// const cartReducer = (state=[], action) => {

//    switch(action.type) {
      
//     case 'ADD_TO_CART': 
//     {      
//        return [...state, action.payload];
       
//     }
//     default: 
//     {
//        return state
//     }
//    }
// }

// export default cartReducer;

const cartReducer = (state=[],action)=>
{
   if(action.type === 'ADD_TO_CART')
   {
       console.log(state);
      return [...state,action.payload];
      // state.prod.push(action.payload);
   }
   else 
   {
      return state
   }
}

export default cartReducer;