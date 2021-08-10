import React from "react"
import { LocationList } from "./locations/LocationList"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Satisfying your sweet tooth one tooth at a time</small>
        <h2>Locations</h2>
        <article className="locations">
            <LocationList />
        </article>
    </>
)