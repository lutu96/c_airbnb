import IconAvatar from '@/assets/svg/icon-avatar'
import IconDir from '@/assets/svg/icon-dir'
import IconGlobal from '@/assets/svg/icon-global'
import React, { memo } from 'react'
import RightWrapper from './style'
const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className='btns'>
        <div className='btn'>
          <span>登录</span>
        </div>
        <div className='btn'>
          <span>注册</span>
        </div>
        <div className='btn'>
          <IconGlobal/>
        </div>
      </div>
      <div className='profile'>
        <div className='dir'>
          <IconDir />
        </div>
        <div className='avatar'>
          <IconAvatar/>
        </div>
       
      </div>
    </RightWrapper>
  )
})

export default HeaderRight