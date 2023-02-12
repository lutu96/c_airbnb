import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeWrapper from './style'
import { fetchHomeDataThunk } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'

const Home = memo((props) => {
  // const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)
  // console.log(goodPriceInfo)
  const { goodPriceInfo, highScoreInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }))
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataThunk())
  }, [dispatch])

  
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
          <HomeSectionV1 infoData = { goodPriceInfo }/>
          <HomeSectionV1 infoData = { highScoreInfo }/>
        </div>
    </HomeWrapper>
  )
})


export default Home