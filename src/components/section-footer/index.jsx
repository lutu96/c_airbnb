import React, { memo, useMemo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { name } = props
    const showMessage  = useMemo(() => {
        if (name) return `显示更多${name}房源`
        return '显示更多'
    }, [name])

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/entire')
    }
  return (
   <FooterWrapper color={name ? "#00848A": "#000"}>
        <div className='info' onClick={handleClick}>
            <span className='text'>{ showMessage} </span>
            <IconMoreArrow className='icon'/>
        </div>
   </FooterWrapper>
  )
})

SectionFooter.propTypes = {}

export default SectionFooter