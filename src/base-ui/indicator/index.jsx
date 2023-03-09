import React, { memo, useEffect, useRef } from 'react'
import { Wrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex } = props
    const contentRef = useRef(null)
    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth

        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth

        // console.log(itemLeft, itemWidth, contentWidth, contentScroll)

        // 移动的距离
        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
        let totalDistance = contentScroll - contentWidth

        // 左边边界处理
        if (distance < 0) distance = 0
        // 右边边界处理
        if (distance > totalDistance) distance = totalDistance

        console.log(distance)

        // 移动
        contentRef.current.style.transform = `translate(${-distance}px)`

    }, [selectIndex])
  return (
    <Wrapper>
        <div className='indicator-content' ref={contentRef}>
            { props.children }
        </div>
    </Wrapper>
  )
})

Indicator.propTypes = {}

export default Indicator