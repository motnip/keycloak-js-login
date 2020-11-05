
import { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js';

function useKeyCloak() {
    const [authenticated, setAuthenticated] = useState(false);
    const keycloak = Keycloak('/keycloak.json');

    useEffect(() => {


        var initSetting = { onLoad: 'login-required' }

        keycloak.init(initSetting)
            .then(authenticated => {
                console.log("init - authenticated: ", authenticated)
                setAuthenticated(authenticated);
            });
        console.log("authenticated: ", authenticated)
    }, []);

    return authenticated
}

export default useKeyCloak