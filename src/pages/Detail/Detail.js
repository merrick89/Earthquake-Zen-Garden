import React from 'react'
import moment from 'moment-timezone'

const Detail = (props) => {

    const { title, mag, time, status, tsunami, type } = props.feature.properties

    return (
        <div className="layout-content-sm">
            <h3>{title}</h3>
            <table cellSpacing="0" cellPadding="0">                
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td className="text-muted">{title}</td>
                    </tr>
                    <tr>
                        <td>Magnitude</td>
                        <td className="text-muted">{mag}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td className="text-muted">{moment(time).tz("America/Los_Angeles").format('MMM D, YYYY, h:mm A')}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td className="text-muted">{status}</td>
                    </tr>
                    <tr>
                        <td>Tsunami</td>
                        <td className="text-muted">{tsunami}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td className="text-muted">{type}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default Detail;