import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
        <div className='inner'>
            <div className='cover'>
                <img src={ itemData.picture_url } alt=''/>
            </div>
            <div className='bg-cover'></div>
            <div className='info'>
                <div className='city'>{ itemData.city }</div>
                <div className='price'> { itemData.price } </div>
            </div>
        </div>
        
    </ItemWrapper>
  )
})

LongforItem.propTypes = {}

export default LongforItem