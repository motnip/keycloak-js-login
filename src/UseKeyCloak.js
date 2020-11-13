
import { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js';

function useKeyCloak() {
    const [authenticated, setAuthenticated] = useState(false);
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        var initSetting = { onLoad: 'login-required' }
        var keycloak = Keycloak('/keycloak.json');

        keycloak.init(initSetting)
            .then(authenticated => {
                console.log("init - authenticated: ", authenticated)
                setAuthenticated(authenticated);
                setKeycloak(keycloak)
            });
        console.log("authenticated: ", authenticated)
    }, []);

    console.log("stocazzo: ", keycloak)

    return [authenticated, keycloak]
}

export default useKeyCloak