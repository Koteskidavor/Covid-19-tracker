import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './map.css'
import { showDataonMap } from "./util"


function Map({ countries, center, zoom, casesType }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenSteetMap</a> contributors' />


                {showDataonMap(countries, casesType)}
            </LeafletMap>

        </div>
    )
}

export default Map;

