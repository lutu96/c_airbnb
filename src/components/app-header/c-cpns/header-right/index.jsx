import React, { memo, useEffect, useState } from 'react'

import IconAvatar from '@/assets/svg/icon-avatar'
import IconDir from '@/assets/svg/icon-dir'
import IconGlobal from '@/assets/svg/icon-global'
import RightWrapper from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function windowClick () {
      setShowPanel(false)
    }
    window.addEventListener('click',windowClick, true)

    return () => {
      window.removeEventListener('click', windowClick, true)
    }
  }, [])

  function clickShowPanel () {
    setShowPanel(true)
  }

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
      <div className='profile' onClick={clickShowPanel}>
        <div className='dir'>
          <IconDir />
        </div>
        <div className='avatar'>
          <IconAvatar/>
        </div>
        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight