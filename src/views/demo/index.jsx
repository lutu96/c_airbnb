import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState, useRef, useEffect } from 'react'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
    const [dots, setDots] = useState([1,2,3,4,5,6,7])
    const [selectIndex, setSelectIndex] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth

        const contentWidth = contentRef.current.clientWidth
        const contentScrollWidth = contentRef.current.scrollWidth

        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

        // 左边边缘情况
        if (distance < 0) distance = 0
        
        // 右边边缘情况
        const totalDistance = contentScrollWidth - contentWidth
        if (distance > totalDistance) distance = totalDistance

        // console.log(`translate(${-distance}px)`)
        // 移动
        contentRef.current.style.transform = `translate(${-distance}px)`

    }, [selectIndex])

    const change = (isRight) => {
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        if (newIndex >= dots.length) {
            newIndex = 0
        }
        if (newIndex < 0) {
            newIndex = dots.length - 1
        }
        setSelectIndex(newIndex)
    }

  return (
    <DemoWrapper>
       <button onClick={() => change(false)}>上一个</button>
       <button onClick={() => change(true)}>下一个</button>
       <div className='box'>
            <div className='indecator'>
                <div className='i-content' ref={contentRef}>
                    {
                        dots.map((item, index) => {
                            return (<div className='item' key={index}>
                                <div className={classNames(['inner', { active: selectIndex === index}])}>
                                    {item}
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
       </div>
       
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo