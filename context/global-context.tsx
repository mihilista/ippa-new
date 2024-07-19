'use client';
import React, {createContext, useCallback, useContext, useMemo, useReducer} from 'react';

interface State {
    burgerMenuActive: boolean;
    fontSizesTimestamp: number | null;
}

export interface ContextState extends State {
    setBurgerMenuActive: () => void;
    setBurgerMenuInactive: () => void;
    toggleBurgerMenu: () => void;
    setFontSizesTimestamp: () => void;
    state: State;
    dispatch: React.Dispatch<Action>;
}

interface Action {
    type: string;
    payload?: string | null;
}

const GlobalContext = createContext<ContextState | undefined>(undefined);

const initialState: State = {
    burgerMenuActive: false,
    fontSizesTimestamp: null,
};

const globalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_BURGER_MENU_ACTIVE':
            return {
                ...state,
                burgerMenuActive: true
            };
        case 'SET_BURGER_MENU_INACTIVE':
            return {
                ...state,
                burgerMenuActive: false
            };
        case 'TOGGLE_BURGER_MENU':
            return {
                ...state,
                burgerMenuActive: !state.burgerMenuActive
            };
        case 'SET_FONT_SIZES_TIMESTAMP':
            return {
                ...state,
                fontSizesTimestamp: Date.now()
            };
        default:
            console.error('Unhandled action type:', action.type);
            return state;
    }
};

export const GlobalProvider = ({children}: {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    const setBurgerMenuActive = useCallback(() => {
        dispatch({type: 'SET_BURGER_MENU_ACTIVE'});
    }, [dispatch]);

    const setBurgerMenuInactive = useCallback(() => {
        dispatch({type: 'SET_BURGER_MENU_INACTIVE'});
    }, [dispatch]);

    const toggleBurgerMenu = useCallback(() => {
        dispatch({type: 'TOGGLE_BURGER_MENU'});
    }, [dispatch]);

    const setFontSizesTimestamp = useCallback(() => {
        dispatch({type: 'SET_FONT_SIZES_TIMESTAMP'});
    }, [dispatch]);


    const contextValue = useMemo(() => {
        return {
            burgerMenuActive: state.burgerMenuActive,
            fontSizesTimestamp: state.fontSizesTimestamp,
            setBurgerMenuActive,
            setBurgerMenuInactive,
            toggleBurgerMenu,
            setFontSizesTimestamp,
            state,
            dispatch
        };
    }, [state, setBurgerMenuActive, setBurgerMenuInactive, toggleBurgerMenu, setFontSizesTimestamp]);

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
