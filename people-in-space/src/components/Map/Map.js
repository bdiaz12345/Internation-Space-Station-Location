import React from 'react'
import styled from 'styled-components/macro'
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Icon from '../Icon'

const Component = styled.div`
    width: 100%;

    & > div {
        width: 100%;
        height: 400px;
    }
`


const Map = ({ position }) => (
    <Component>
        <LeafletMap center={position} zoom={4}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position} icon={Icon}>
                <Popup>
                    Latitute: {position.lat}
                    <br/>
                    Longitude: {position.lng}
                </Popup>
                <Circle center={position} radius={500000} />
            </Marker>
        </LeafletMap>
    </Component>
)

export default Map