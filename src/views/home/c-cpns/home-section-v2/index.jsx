import React, { memo, useState, useCallback } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/setction-tabs'
import SectionFooter from '@/components/section-footer'
import { SectionV2Wrapper } from './style'



const HomeSectionV2 = memo((props) => {
    const {infoData} =  props 
    const tabNames = infoData.dest_address?.map(item => item.name)
    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)


const tabClickHandle = useCallback((name, index) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
        <SectionRooms rooms={infoData.dest_list?.[name]} itemWidth={'33.33333%'}/>
        <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {}

export default HomeSectionV2