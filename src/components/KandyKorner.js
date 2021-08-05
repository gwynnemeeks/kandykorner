import React from "react"
import { Location } from "./locations/Location"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Satisfying your sweet tooth one tooth at a time</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>123 Skittles Way</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
        </article>
    </>
)