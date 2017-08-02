import React from 'react';
import Waypoint from 'react-waypoint';

const Layout_TopmenuWaypoint = props => (
  <Waypoint
    onPositionChange={({ previousPosition, currentPosition, event }) => {
      if(!previousPosition && currentPosition === 'above'){
        props.fixedMenuTrigger(true)
      }
    }}
    onEnter={({ previousPosition, currentPosition, event }) => {
      if(previousPosition === 'above'){
        props.fixedMenuTrigger(false)
      }
    }}
    onLeave={({ previousPosition, currentPosition, event }) => {
      if(currentPosition === 'above'){
        props.fixedMenuTrigger(true)
      }
    }}
  />
)

export default Layout_TopmenuWaypoint;