import * as actionTypes from './constants'
import { fetchEntireData } from '@/services/modules/entire'
export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCount = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoading = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListDataAction =  (page=0) => {
    return async (dispatch, getState) => {
        dispatch(changeCurrentPageAction(page))
        
        dispatch(changeIsLoading(true))
        const res = await fetchEntireData(page * 20)
        dispatch(changeIsLoading(false))

        const list = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(list))
        dispatch(changeTotalCount(totalCount))
    }
}
