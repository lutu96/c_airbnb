import useScrollPosition from '@/hooks/useScrollPosition'
import classNames from 'classnames'
import React, { memo, useState, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchWrapper } from './style'


const AppHeader = memo(() => {

  
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig
  const [isSearch, setIsSearch] = useState(false)
  const { scrollY } = useScrollPosition()
  // console.log(scrollY)
  const preY = useRef(0)
  // console.log(isSearch)
  if (!isSearch) preY.current = scrollY
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={() => setIsSearch(true)}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchWrapper isSearch={isAlpha || isSearch}/>
        </div>
        { isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
    
  )
})

export default AppHeader