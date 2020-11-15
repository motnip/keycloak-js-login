
import { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js';

function useKeyCloak() {
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        var initSetting = { 
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' }
        var keycloak = Keycloak('/keycloak.json');
        
        console.log("before init - authenticated: ", keycloak.authenticated)

        keycloak.init(initSetting)
            .then(authenticated => {
                console.log("init - authenticated")
                setKeycloak(keycloak)
            });
        console.log("afer init - authenticated: ", keycloak.authenticated)
    }, []);

    return keycloak
}

export default useKeyCloak