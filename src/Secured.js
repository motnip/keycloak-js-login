import useKeyCloak from './UseKeyCloak';
import UserInfo from './UserInfo';
import Logout from './Logout';
import React, { useEffect } from 'react';

export default function Secured() {
  const [authenticated, keycloak] = useKeyCloak();

  useEffect(() => {
    console.log("state keycloak", keycloak)
    console.log("state authenticated", authenticated)
  }, []);
  return (

    <div>
      {keycloak && authenticated && (<div>
        <div>loggin succeed</div>
        <div> <UserInfo keycloak={keycloak} authenticated={authenticated} /></div>
        <div><Logout keycloak={keycloak} /></div>
      </div>
      )}
      {!authenticated && <div>loggin falied</div>}
    </div>

  )
}