
const initalState = {
    items: [],
    selectedItem: null
}

export default function (state = initalState, action = {}) {
<<<<<<< HEAD
=======

>>>>>>> 4f39933c4996784403a604ea7867d79a63fc6c66
    
    switch (action.type) {
        case 'SET_ITEMS':
            return { ...state, items: action.items };

        case 'ITEM_ADD':
            return { ...state, items: [...state.items, action.item] };

        case 'ITEM_UPDATE':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.item.id ? action.item : item
                )
            };

        case 'SET_ITEM':
            return { ...state, selectedItem: action.item };

        default:
            return state
    }
}
