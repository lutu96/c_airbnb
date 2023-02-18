import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const index = memo((props) => {
  const { tabNames = [], tabClick}  = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClickHandle = (name, index) => {
    setCurrentIndex(index)
    tabClick(name, index)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
              tabNames.map((item,index) => {
                  return (
                      <div
                          key= { index }
                          className={classNames('item', { active: currentIndex === index})}
                          onClick={() => itemClickHandle(item,index)}
                      >{item }</div>
                  )
              })
          }
      </ScrollView>
        
    </TabsWrapper>
  )
})

index.propTypes = {
    tabNames: PropTypes.array
}

export default index