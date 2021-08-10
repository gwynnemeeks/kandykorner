import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Satisfying your sweet tooth one tooth at a time</small>
        <h2>Locations</h2>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)