export default function cartReducers(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, { id: Date.now(), name: action.payload, qty: 1 }];
        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload);

        case "INCREASE":
            return state.map((item) => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item);
        case "DECREASE":
            return state.map((item) => item.id === action.payload && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item);
            default :
            return state;
    }
}