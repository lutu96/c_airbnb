import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { RoomsWrapper } from './style'
import { fetchRoomListDataAction } from '@/store/modules/entire/createActions'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRomms = memo((props) => {
    const dispatch = useDispatch()
    const  navigate = useNavigate()
    useEffect(() => {
      dispatch(fetchRoomListDataAction())
    }, [dispatch])

    const { roomList, isLoading, totalCount } = useSelector((state) => ({
        roomList: state.entire.roomList,
        isLoading: state.entire.isLoading,
        totalCount: state.entire.totalCount,
    }), shallowEqual)

    const toDetail = useCallback((room) => {
      console.log(room)
      dispatch(changeDetailInfoAction(room))
      navigate('/detail')
    }, [navigate])
    console.log(roomList)

  return (
    <RoomsWrapper>
        <h1>{totalCount}多处住所</h1>
        <div className='list'>
            {
              roomList.map(item => (
                <RoomItem roomData={item} itemWidth='20%' key={item._id} itemClick={toDetail}/>
              ))
            }
        </div>
        { isLoading && (<div className='cover'></div>)}
    </RoomsWrapper>
  )
})

EntireRomms.propTypes = {}

export default EntireRomms