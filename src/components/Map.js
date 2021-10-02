import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';

function Map () {
    const [viewport, setViewport] = useState({
        latitude: 29.7589382,
        longitude: -95.3676974,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });


    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/gabrielzurc10/ckuag6p2216qt17o5ts54ds7b"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                
            />
        </div>
    );
}

export default Map;