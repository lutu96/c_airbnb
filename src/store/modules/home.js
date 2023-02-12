import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchGoodPriceData, fetchHighScoreData } from '@/services'

export const fetchHomeDataThunk = createAsyncThunk('fetchGoodPrice',  (payload, { dispatch }) => {
    fetchGoodPriceData().then(res => {
      dispatch(changeGoodPriceAction(res))
    })
    fetchHighScoreData().then(res => {
      dispatch(changeHighScoreAction(res))
    })
})



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {}
    },
    reducers: {
      changeGoodPriceAction (state, { payload }) {
        state.goodPriceInfo = payload
      },
      changeHighScoreAction (state, { payload }) {
        state.highScoreInfo = payload
      }
    },
    extraReducers: {
        // [fetchGoodPriceDataThunk.fulfilled](state, { payload }) {
        //   state.goodPriceInfo = payload
        // }
      }
})

export const { changeGoodPriceAction, changeHighScoreAction}  = homeSlice.actions

export default homeSlice.reducer