import useKeyCloak from './UseKeyCloak';
import UserInfo from './UserInfo';
import Logout from './Logout';
import React, { useEffect } from 'react';

export default function Secured() {
  const keycloak = useKeyCloak();

  return (

    <div>
      {keycloak && keycloak.authenticated && (<div>
        <div>loggin succeed</div>
        <div> <UserInfo keycloak={keycloak}/></div>
        <div><Logout keycloak={keycloak} /></div>
      </div>
      )}
      {keycloak && !keycloak.authenticated &&
        (<div><a onClick={() => keycloak.login()}>Login</a></div>)
      }
    </div>

  )
}