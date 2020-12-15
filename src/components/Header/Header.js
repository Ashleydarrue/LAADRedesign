import React from 'react';
import './Header.css';





export default function Header() {
  return (
    <div className="header">
      <div className="logo">
      <img src={require('./laad.png')}  alt="laadLogo" id="laadlogo"/>
      </div>
      <div className="Mission">
        <h3>Here to help finance small and medium-size agribusiness 
          projects to promote economic, environmental and social development 
          in Latin America</h3>
      </div>
    </div>
  )
}
