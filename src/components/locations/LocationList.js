import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.scss"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (

    )
}