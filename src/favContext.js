import {createContext, useReducer} from 'react'

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
                favs: [...state.favs, {...payload.post}]
            };
        case "CLOSELOGIN":
            return {
                ...state,
                isVisibleLogin: false
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