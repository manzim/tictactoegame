import { Card, Divider, Icon, Tag } from '@blueprintjs/core'
import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

function DemoDashBoard() {
    return (
        <div>
            <article className="vh-100 dt w-100" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="dtc red tc white ph3 ph4-l">
                    <div id="sidebar">
                        <SideBar />
                    </div>
                    <div id="rightSideWrapper">
                        <header>
                            <TopBar />
                        </header>

                        <div className="ContentBox">
                            <main>
                                <div className="bp3-card w-100 bg-red br4">
                                    <div className="cf items-center flex">
                                        <div className="fl w-100 w-60-ns tc">
                                            <h1>Column One</h1>
                                        </div>
                                        <div className="fl w-100 w-40-ns tc pl2">
                                        <div className="center b mb3 w-100">Select Device <Divider style={{color: "grey"}} /> </div>
                                            <div className="cf flex justify-center w-100 items-center bp3-card">                                                                                            
                                                <div className="w-40 dt items-center ">
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className="cf w-100 flex mb2">
                                                        <div className="w-75 tl">Energy Solar</div>
                                                        <div className="w-25 tr"><Tag large={false} round intent="warning">641</Tag></div>
                                                    </div>
                                                    <div className=" cf w-100 flex mb2 center b flex items-center">
                                                        <Icon icon="full-circle" color="blue" className="mr1 ml2" iconSize={30} /> 
                                                        <Icon icon="chart" color="blue" className="mr1 ml2" iconSize={15} />
                                                        <span className="b blue tc f5 mr3 ml3">75%</span>
                                                        <Icon icon="add-location" color="blue" className="mr1 ml2" iconSize={30} />
                                                        <Icon icon="graph" color="blue" className="mr1 ml2" iconSize={15} />
                                                        <span className="b blue tc f5 mr3 ml3">54%</span>                                                        
                                                    </div>
                                                </div>

                                                <div className="w-60 ">
                                                    <img
                                                        src="https://www.tespack.com/wp-content/uploads/2016/12/X2_hires_Beetle_01-510x600NEW.jpg"
                                                        alt="tespack"
                                                        className=""

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default DemoDashBoard
