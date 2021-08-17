import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./customer.scss"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <section className="customers">
            {
                customers.map(customer => {
                    return ()