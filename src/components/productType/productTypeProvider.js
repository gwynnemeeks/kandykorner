import React, { useState, createContext } from "react"

export const ProductTypeContext = createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductType = productTypeObj => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypeObj)
        })
            .then(getProductTypes)
    }

    return (
        <ProductTypeContext.Provider value={{
            productTypes, getProductTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}