import { createContext, useReducer } from "react";


export const  CartContext = createContext(); 

const products =[
    { id:1, name : "Apple" , price : 50},
    { id:2, name : "Orange",price : 30},
    { id:3, name : "Banana" ,price : 10},
    { id:4, name : "Mango" , price : 80},
];
function Reducers(state, action) {
  switch (action.type) {

    // ADD ITEM ------------------------------------------------------------
    case "ADD_ITEM": {
      const existing = state.find(item => item.id === action.payload.id);

      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // Add new item with qty = 1
      return [...state, { ...action.payload, qty: 1 }];
    }

    // REMOVE ITEM ----------------------------------------------------------
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);

    // INCREASE -------------------------------------------------------------
    case "INCREASE":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    // DECREASE -------------------------------------------------------------
    case "DECREASE":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0); // Remove if qty is 0

    // RESET CART -----------------------------------------------------------
    case "RESET":
      return [];

    default:
      return state;
  }
}


export function CartProvider ({children}) {
    const [cart ,dispatch] = useReducer (Reducers ,[]);
    return (
        <CartContext.Provider value ={{cart,dispatch,products}}>{children}</CartContext.Provider>
    );
}