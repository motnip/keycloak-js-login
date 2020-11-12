import React from 'react'
import useKeyCloak from './UseKeyCloak';

function Secured2() {
  const authenticated = useKeyCloak();

  return (
    <div>
      {authenticated && (
        <div>This is secure 2</div>)
      }
      {!authenticated && <div>loggin falied Secure2</div>}
    </div>
  )
}
export default Secured2 