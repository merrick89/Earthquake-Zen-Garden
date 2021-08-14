import React, { useState } from 'react'
import './Home.css'
import moment from 'moment-timezone'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Home = (props) => {
    
    const [features, setFeatures] = useState(props.features);
    const [order, setOrder] = useState({orderItem: 'title', direction: 'asc'})

    const toggleOrder = (orderItem) => {
        const orderDirection = (orderItem == order.orderItem && order.direction == 'asc') ? 'desc' : 'asc'        
        const ordered = _.orderBy(features, [`properties.${orderItem}`, 'properties.title'], [orderDirection, 'desc'])
        setFeatures(ordered)
        setOrder({orderItem: orderItem, direction: orderDirection})
    }

    return ( 
        <div>
            <h3 className="text-center">{props.title}</h3>
            <table className="feature-list-table" cellSpacing="0" cellPadding="0">
                <thead>
                    <tr>
                        <th onClick={()=>toggleOrder("place")}>Title</th>
                        <th onClick={()=>toggleOrder("mag")}>Magnitude</th>
                        <th onClick={()=>toggleOrder("time")}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    { features.map( feature => {
                        const {place, mag, time} = feature.properties
                        const formattedTime = moment(time).tz("America/Los_Angeles").format('MMM D, YYYY, h:mm A')
                        return  <tr key={feature.id}>
                                    <td><Link to={`/detail/${feature.id}`}>{place}</Link></td>
                                    <td className="text-center">{mag}</td>
                                    <td className="text-center">{formattedTime}</td>
                                </tr>
                    }) }
                </tbody>
            </table>
        </div>
    );
}
 
export default Home;