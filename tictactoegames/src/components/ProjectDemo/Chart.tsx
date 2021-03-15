import React from 'react'

function Chart() {
    return (
        <div>
            <table className="graph">
                <caption>Daily Social Media Usage</caption>
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Percent</th>
                    </tr>
                </thead><tbody>
                    <tr style={{height:"85%"}}>
                        <th scope="row">Your Blog</th>
                        <td><span>85%</span></td>
                    </tr>
                    <tr style={{height:"23%"}}>
                        <th scope="row">Medium</th>
                        <td><span>23%</span></td>
                    </tr>
                    <tr style={{height:"07%"}}>
                        <th scope="row">Tumblr</th>
                        <td><span>7%</span></td>
                    </tr>
                    <tr style={{height:"38%"}}>
                        <th scope="row">Facebook</th>
                        <td><span>38%</span></td>
                    </tr>
                    <tr style={{height:"35%"}}>
                        <th scope="row">Youtube</th>
                        <td><span>35%</span></td>
                    </tr>
                    <tr style={{height:"30%"}}>
                        <th scope="row">LinkedIn</th>
                        <td><span>30%</span></td>
                    </tr>
                    <tr style={{height:"05%"}}>
                        <th scope="row">Twitter</th>
                        <td><span>5%</span></td>
                    </tr>
                    <tr style={{height:"20%"}}>
                        <th scope="row">Other</th>
                        <td><span>20%</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Chart
