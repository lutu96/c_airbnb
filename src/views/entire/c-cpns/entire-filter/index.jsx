import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
// import { shallowEqual, useSelector } from 'react-redux'

const EntireFilter = memo((props) => {

    // const { headerConfig } = useSelector(state => ({
    //     headerConfig: state => state.main.headerConfig
    // }), shallowEqual)

    const [activeItems, setActiveItems]   = useState([])
    const itemClick  = (item) => {
        const newItems = [...activeItems]
        if (!newItems.includes(item)) {
            newItems.push(item)
        } else {
            const index = newItems.findIndex(newItem => newItem === item)
            newItems.splice(index,1)
        }
        setActiveItems(newItems)
    }
  return (
   <FilterWrapper>
        <div className='filter'>
            {
                filterData.map((item,index) => (
                    <div className={classNames(['item', { active: activeItems.includes(item)}])} onClick={() => itemClick(item)} key={index}>
                        <span>{item}</span>
                    </div>
                ))
            }
        </div>
   </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter