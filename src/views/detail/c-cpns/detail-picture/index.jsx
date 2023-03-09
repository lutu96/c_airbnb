import PictureBrower from '@/base-ui/picture-brower'
import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { PictureWrapper } from './style'

const DetailPicture = memo((props) => {
    const [showPictureBrower, setShowPictureBrower] = useState(false)
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
  return (
    <PictureWrapper>
      <div className='pictures' onClick={() => setShowPictureBrower(true)}>
        <div className='left'>
          <div className='item'>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
        <div className='show-btn' onClick={() => setShowPictureBrower(true)}>显示照片</div>
      </div>
      { showPictureBrower && <PictureBrower pictures={detailInfo?.picture_urls} closeClick={() => setShowPictureBrower(false)}/>}
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture