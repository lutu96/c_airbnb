import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'

const HomeLongfor = memo((props) => {
    const { infoData } = props
  return (
    <LongforWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <div className='longfor-list'>
            <ScrollView>
                { infoData?.list.map((item, index) => {
                    return (
                        <LongforItem itemData={item} key={item.city}/>
                    )
                })}
            </ScrollView>
        </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {}

export default HomeLongfor