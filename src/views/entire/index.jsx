import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRomms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRomms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire