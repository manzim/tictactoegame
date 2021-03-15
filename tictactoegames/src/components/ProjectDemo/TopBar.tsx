import React from 'react'

function TopBar() {
    return (
        <div>
            <nav className="bp3-navbar" style={{position: "fixed"}}>
                <div style={{margin: "0 auto", width: "480px"}}>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading">DashBoard Statistics</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right flex justify-around">
                        <button className="bp3-button bp3-minimal bp3-icon-circle">
                            Nombre Usario
                        </button>
                        <button className="bp3-button bp3-minimal bp3-icon-envelope"></button>
                        
                        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>                        
                        <button className="bp3-button bp3-minimal bp3-icon-menu"></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopBar
