import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppStateProvider = (props) => {
    const [appglobal, setAppGlobal] = useState({
        refsocket: {}
    });
    return <AppContext.Provider value={[appglobal, setAppGlobal]}>{props.children}</AppContext.Provider>;
};

export const useAppContextState = () => useContext(AppContext);