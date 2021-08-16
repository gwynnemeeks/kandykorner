import React from "react"
import { Route } from "react-router-dom"

import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"

import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"

import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeList } from "./productType/productTypeList"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <ProductProvider>
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

            <ProductTypeProvider>
                <Route path="/productTypes">
                    <ProductTypeList />
                </Route>
            </ProductTypeProvider>
        </>
    )
}