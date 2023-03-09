import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListDataAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo((props) => {
    const { currentPage, totalCount, roomList } = useSelector(state => ({
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        roomList: state.entire.roomList,
    }), shallowEqual)

    const dispatch = useDispatch()
    const handleChange = (event,page) => {
        window.scrollTo(0, 0)
        dispatch(fetchRoomListDataAction(page - 1))
    }
    console.log(totalCount)
  return (
    <PaginationWrapper>
        {
            !!roomList.length && (
                <div className='pagination'>
                    <Pagination count={ Math.ceil(totalCount / 20)}  onChange={handleChange}/>
                    <div className='desc'>
                        第 { currentPage * 20 + 1} - { (currentPage + 1) * 20} 个房源, 共超过 { totalCount} 2个
                    </div>
                </div>
            )
        }
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination