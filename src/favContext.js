import {createContext, useReducer} from 'react';

export const Context = createContext();

const initialState = {
    favs: [],
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_FAVORITES":
            return {
                ...state,
                favs: [...state.favs, {...payload.p}]
            };
        case "REMOVE_FAVORITES":
            const filterFavs = state.favs.filter(
                fav => fav.id !== payload.p.id
            )
            return {
                ...state,
                favs: filterFavs
            };
        
        default:
            throw new Error();
    }
}

export const ContextProvider = ({children}) => {
    // const isLogin = false;
    // const titleContext = 'Context Incoming'

    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
}