import React from "react";



export const StoreCtx = React.createContext(null);

export const Provider = (props)=>{
    return (
        <StoreCtx.Provider value={props.store}>
            {props.children}
        </StoreCtx.Provider>
    )
}
