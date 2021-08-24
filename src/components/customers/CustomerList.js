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
                    return (
                        <div className="card" style="--background: #5d9cec; --text: white" id={`customer--${customer.id}`}>
                            <div className="multi-button">
                                <button className="fas fa-heart"></button>
                                <button className="fas fa-comment"></button>
                                <button className="fas fa-share-alt"></button>
                                <button className="fas fa-trash"></button>
                            </div>
                            <div className="container">
                                <h3>{customer.name}</h3>
                                <ul>
                                    <li>Blood Sugar Base Level: {customer.bloodSugarBase}</li>
                                    <li>Insulin Sensitivity: {customer.insulinSensitivity}</li>
                                    <li>Carb Sensitivity: {customer.carbSensitivity}</li>
                                    <li>Products that Work: {customer.productId}</li>
                                </ul>
                            </div>
                        </div>
                    )

                })
            }
        </section>
    )
}