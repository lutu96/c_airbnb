import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
    const { infoData } = props
  return (
    <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <div className='room-list'>
            <ScrollView>
                { infoData.list.map(item => (<RoomItem roomData={item} key={item.id} itemWidth='20%'/>))}
            </ScrollView>
        </div>
        <SectionFooter name='plus'/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {}

export default HomeSectionV3