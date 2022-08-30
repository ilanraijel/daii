import * as React from "react";
import { useContext } from "react";

export const initialState = {
    loading: true,
    token: "",
    menu: {
        precio: 0,
        HealthScore: 0,
        lista: [],
        eliminarId: [],
        descontarPricePerServing: 0,
        descontarHealthScore: 0,
    },
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetToken: "SET_TOKEN",
    SetMenu: "SET_MENU",
    SetMenuPrecio: "SET_MENU_PRECIO",
    SetMenuHealthScore: "SET_MENU_HEALTHSCORE",
    SetMenuLista: "SET_MENU_LISTA",
    SetEliminarId: "SET_ELIMINAR_ID",
    SetDescontarPricePerServing: "SET_DESCONTAR_PRICE_PER_SERVING",
    SetDescontarHealthScore: "SET_DESCONTAR_HEALTH_SCORE",
};

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetToken:
            return {
                ...state,
                token: action.value,
            };
        case ActionTypes.SetMenu:
            return {
                ...state,
                menu: action.value,
            };
        case ActionTypes.SetMenuPrecio:
            return {
                ...state,
                precio: action.value,
            };
        case ActionTypes.SetMenuHealthScore:
            return {
                ...state,
                HealthScore: action.value,
            };
        case ActionTypes.SetMenuLista:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    lista: [...state.menu.lista, action.value],
                }
            };
        case ActionTypes.SetDescontarPricePerServing:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    descontarPricePerServing: action.value,
                }
            };
        case ActionTypes.SetDescontarHealthScore:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    descontarHealthScore: action.value,
                }
            };
        case ActionTypes.SetEliminarId:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    lista: state.menu.lista.filter((plato) => plato.id !== action.value)
                }
            };
        default:
            return state;
    }
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}

export const useContextState = () => useContext(Cont);
