import React, { createContext, useState } from 'react'

export const addResponseContext = createContext({})
export const updateResponseContext = createContext({})
export const loginResponseContext = createContext({})

function Contextshare({ children }) {
    const [addResponse, setAddResponse] = useState([])
    const [updateResponse, setUpdateResponse] = useState([])
    const [loginResponse, setLoginResponse] = useState(true)

    return (

        <>
            <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                <updateResponseContext.Provider value={{ updateResponse, setUpdateResponse }}>
                    <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
                        {children}
                    </loginResponseContext.Provider>
                </updateResponseContext.Provider>
            </addResponseContext.Provider>
        </>
    )
}

export default Contextshare