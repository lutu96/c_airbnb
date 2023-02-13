import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeWrapper from './style'
import { fetchHomeDataThunk } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/setction-tabs'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isNotEmptyOject } from '@/utils'


const Home = memo((props) => {
  // const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)
  // console.log(goodPriceInfo)
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
  }))
  
  const dispatch = useDispatch()
  
  // const tabNames = discountInfo.dest_address?.map(item => item.name)
  // const initialName = Object.keys(discountInfo.dest_list ?? {})[0] ?? ''
  // const [name, setName] = useState(initialName)

  useEffect(() => {
    dispatch(fetchHomeDataThunk())
  }, [dispatch])

  // const tabClickHandle = useCallback((name, index) => {
  //   setName(name)
  // }, [])
  
  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className='content'>
          {/* <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title}></SectionHeader>
            <SectionRooms rooms={goodPriceInfo.list}/>
          </div>
          <div className='high-score'>
            <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
            <SectionRooms rooms={highScoreInfo.list}/>
          </div>  */}
            
          {/* <div className='discount'>
            <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
            <SectionRooms rooms={discountInfo.dest_list?.[name]} itemWidth={'33.33333%'}/>
          </div> */}

          { isNotEmptyOject(discountInfo) && <HomeSectionV2 infoData = {discountInfo}/>} 

          { isNotEmptyOject(goodPriceInfo) && <HomeSectionV1 infoData = { goodPriceInfo }/>}
          { isNotEmptyOject(highScoreInfo) && <HomeSectionV1 infoData = { highScoreInfo }/>}
        </div>
    </HomeWrapper>
  )
})


export default Home