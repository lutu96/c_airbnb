import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { BrowerWrapper } from './style'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'


const PictureBrower = memo((props) => {
    const { pictures = [], closeClick} = props
    const [selectIndex, setSelectIndex ] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [showList, setShowList] = useState(true)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const closeHandle = () => {
        if (closeClick) {
            closeClick()
        }
    }

    const iconClickHandle = (isNext) => {
        let newIndex = isNext ? selectIndex + 1: selectIndex - 1
        if (newIndex > pictures.length - 1) newIndex = 0
        if (newIndex < 0) newIndex = pictures.length - 1
        setIsNext(isNext)
        setSelectIndex(newIndex)

    }

    const itemClickHandle = (index) => {
        setIsNext(index > selectIndex)
        setSelectIndex(index)
    }
  return (
    <BrowerWrapper isNext={isNext} showList={showList}>
        <div className='top'>
            <div className='close-icon' onClick={closeHandle}>
                <IconClose />
            </div>
        </div>
        <div className='slider'>
            <div className='control'>
                <div className='icon left-icon' onClick={() => iconClickHandle(false)}>
                    <IconArrowLeft height={77} width={77}/>
                </div>
                <div className='icon right-icon' onClick={() => iconClickHandle(true)}>
                    <IconArrowRight height={77} width={77}/>
                </div>
            </div>
            <div className='picture'>
                <SwitchTransition mode='in-out'>
                    <CSSTransition
                        classNames='pic'
                        key={pictures[selectIndex]}
                        timeout={200}
                    >
                        <img src={pictures[selectIndex]} alt=''/>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className='preview'>
            <div className='info'>
                <div className='desc'>
                    <div>
                        <span>{`${selectIndex + 1} / ${ pictures.length} apartment图片${selectIndex + 1}`}</span>
                    </div>
                    <div className={'desc-right'} onClick={() => { setShowList(!showList)}}>
                        <span>{showList ? '隐藏' : '显示'}照片列表</span>
                        { showList ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>}
                    </div>
                </div>
                <div className='list'>
                    <Indicator selectIndex={selectIndex}>
                        {
                            pictures?.map((item, index) => (
                                <div 
                                    className={classNames('item', { active: selectIndex === index})}
                                    onClick={() => itemClickHandle(index)}>
                                    <img src={item} alt=''/>
                                </div>
                            ))
                        }
                    </Indicator>
                </div>
            </div>
        </div>
    </BrowerWrapper>
  )
})

PictureBrower.propTypes = {}

export default PictureBrower