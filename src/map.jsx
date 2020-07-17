import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
// import Header from './components/header'
import './map.css'

export class Map extends Component{
    map=null;
    mapContainer = React.createRef();

    componentDidMount(){
        mapboxgl.accessToken="pk.eyJ1IjoicmV6ZXRhdCIsImEiOiJja2M5MzJqbWwxaG9sMnRvMGVibWwybTdoIn0.P1f3uj5wb7sAXqhwOuWj6Q"
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style:"mapbox://styles/rezetat/ckc93aol83t7q1ipioyust4u8",
            center:[37.61778, 55.75583],          
            zoom:10
        })
    }

    componentWillUnmount(){
        this.map.remove()
    }
    
    render(){
        return <sections className="mapContainer">
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer}></div>
            </div>
        </sections>
    }
}