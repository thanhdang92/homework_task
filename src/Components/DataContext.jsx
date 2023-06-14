import React, { createContext } from "react"
import { useState } from "react"
export const DataContext = createContext()
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataTask, setDataTask] = useState([]);
    const [isCreate, setIsCreate] = useState(true);
    return (
        <DataContext.Provider value={{ isCreate, setIsCreate, data, setData, dataTask, setDataTask }}>
            {children}
        </DataContext.Provider>
    )
}