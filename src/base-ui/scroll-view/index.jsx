import React, { memo, useEffect, useState, useRef } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const scrollContentRef = useRef()
  const distanceRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    distanceRef.current = scrollWidth - clientWidth
    setShowRight (distanceRef.current > 0)
  }, [props.children])

  const iconClick = (isRight) => {
    const newPosIndex = isRight ? posIndex + 1 : posIndex - 1
    const newOffsetLeft = scrollContentRef.current.children[newPosIndex].offsetLeft
    scrollContentRef.current.style.transform = `translate(${-newOffsetLeft}px)`
    setPosIndex(newPosIndex)
    setShowRight(distanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>
        { showLeft && <div className="control left" onClick={() => iconClick(false)}>
            <IconArrowLeft/>
        </div> }
        {
          showRight &&  <div className="control right" onClick={() => iconClick(true)}>
          <IconArrowRight/>
        </div>
        }
        <div className="scroll">
          <div className="scroll-content" ref={scrollContentRef}>
           { props.children }
          </div>
        </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView