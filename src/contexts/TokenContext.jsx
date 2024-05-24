import { createContext, useState } from "react";

export const TokenContext = createContext();

export function TokenProvider({children}) {
    const [token, setToken] = useState("");
    const providerValue = {token, setToken};
    return (
        <TokenContext.Provider value={providerValue}>
            {children}
        </TokenContext.Provider>
    )
}