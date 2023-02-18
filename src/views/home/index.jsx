import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeWrapper from './style'
import { fetchHomeDataThunk } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongfor from './c-cpns/home-longfor'
import { isNotEmptyOject } from '@/utils'
import HomeSectionV3 from './c-cpns/home-section-v3'


const Home = memo((props) => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
  }))
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataThunk())
  }, [dispatch])
  
  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className='content'>
          { isNotEmptyOject(discountInfo) && <HomeSectionV2 infoData = {discountInfo}/>}
          { isNotEmptyOject(recommendInfo) && <HomeSectionV2 infoData = {recommendInfo}/>}
          { isNotEmptyOject(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
          { isNotEmptyOject(goodPriceInfo) && <HomeSectionV1 infoData = { goodPriceInfo }/>}
          { isNotEmptyOject(highScoreInfo) && <HomeSectionV1 infoData = { highScoreInfo }/>}
          { isNotEmptyOject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
        </div>
    </HomeWrapper>
  )
})


export default Home