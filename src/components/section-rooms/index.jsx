import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomsWrapper from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const { rooms = []} = props
  return (
    <RoomsWrapper>
        { rooms?.slice(0,8).map(room => {
            return (
                <RoomItem key={room.id} roomData={room}/>
            )
        })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
    rooms: PropTypes.array
}

export default SectionRooms