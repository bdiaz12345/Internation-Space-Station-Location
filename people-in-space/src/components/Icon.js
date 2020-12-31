import L from 'leaflet'
import SpaceStation from './assets/spacestation.png'

const Icon = L.icon({
    iconUrl: SpaceStation,
    iconRetinaUrl: SpaceStation,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [50, 50],
    className: 'iss-icon'
})

export default Icon