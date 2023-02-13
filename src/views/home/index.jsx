import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeWrapper from './style'
import { fetchHomeDataThunk } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isNotEmptyOject } from '@/utils'


const Home = memo((props) => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
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
          { isNotEmptyOject(goodPriceInfo) && <HomeSectionV1 infoData = { goodPriceInfo }/>}
          { isNotEmptyOject(highScoreInfo) && <HomeSectionV1 infoData = { highScoreInfo }/>}
        </div>
    </HomeWrapper>
  )
})


export default Home