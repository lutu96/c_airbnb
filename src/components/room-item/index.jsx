import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import ItemWrapper from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import classNames from 'classnames'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'




const RoomItem = memo((props) => {
  const { roomData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef(null)

  const controlClickHandle = (e,isRight) => {
    e.stopPropagation()
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = roomData.picture_urls.length
    if (newIndex < 0) {
      newIndex = length - 1
    }
    if (newIndex >= length) {
      newIndex = 0
    }
    setSelectIndex(newIndex)
  }

  const handleItemClick = () => {
    if (itemClick) itemClick(roomData)
  }

  const PictureElement = (
    <div className='cover'>
      <img src={roomData.picture_url} alt=''/>
    </div>
  )

  const SliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(e,false)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(e,true)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            roomData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          roomData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )





  return (
    <ItemWrapper verifyColor={ roomData.verify_info.textColor || '#39576a'} itemWidth={itemWidth} onClick={handleItemClick}>
      <div className='inner'>
        { roomData.picture_urls?.length ? SliderElement : PictureElement}
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