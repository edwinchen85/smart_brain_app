import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={_ => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
      );
    }
    else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={_ => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign In</p>
          <p onClick={_ => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
        </nav>
      );
    }
}

export default Navigation;
