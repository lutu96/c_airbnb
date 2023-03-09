import React, { memo } from 'react'
import LeftWrapper from './style'
import IconLogo from '@/assets/svg/icon-logo'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  return (
    <LeftWrapper>
       <div className='logo' onClick={() => {navigate('/home')}}>
        <IconLogo></IconLogo>
       </div>
    </LeftWrapper>
  )
})

export default HeaderLeft