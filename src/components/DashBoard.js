import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Map from './Map';

import firebase from '../config/firebase';
import 'firebase/auth';
const auth = firebase.auth();

function DashBoard () {
    const [route, setRoute] = useState();

    return auth.currentUser && (
        <div>
            <Sidebar render={route => setRoute(route)}/>
            {
                route === "map" &&
                <Map />
            }
        </div>
    );
}

export default DashBoard;