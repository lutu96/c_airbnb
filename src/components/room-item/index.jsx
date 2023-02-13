import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ItemWrapper from './style'
import { Rating } from '@mui/material'

const RoomItem = memo((props) => {
  const { roomData, itemWidth = '25%' } = props
  return (
    <ItemWrapper verifyColor={ roomData.verify_info.textColor || '#39576a'} itemWidth={itemWidth}>
      <div className='inner'>
        <div className='cover'>
          <img src={roomData.picture_url} alt=''/>
        </div>
        <div className='desc'>
          { roomData.verify_info.messages.join(' · ')}
        </div>
        <div className='name'>
          { roomData.name }
        </div>
        <div className='price'>
          ￥{roomData.price}/晚
        </div>
        <div className='bottom'>
          <Rating
            value={ roomData.star_rating ?? 5 }
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{roomData.reviews_count}</span>
          {
            roomData.bottom_info && <span className='extra'>·{roomData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  roomData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem