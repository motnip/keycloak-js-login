import React from 'react'
import useKeyCloak from './UseKeyCloak';

function Secured() {
  const authenticated = useKeyCloak();

  return (
    <div>
      {authenticated && (<div>loggin succeed</div>)}
      {!authenticated && <div>loggin falied</div>}
    </div>
  )
}
export default Secured 