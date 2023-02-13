import PropTypes from 'prop-types'
import React, { memo, useMemo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
    const { name } = props
    const showMessage  = useMemo(() => {
        if (name) return `显示更多${name}房源`
        return '显示更多'
    }, [name])
  return (
   <FooterWrapper color={name ? "#00848A": "#000"}>
        <div className='info'>
            <span className='text'>{ showMessage} </span>
            <IconMoreArrow className='icon'/>
        </div>
   </FooterWrapper>
  )
})

SectionFooter.propTypes = {}

export default SectionFooter