import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchDiscountData, fetchGoodPriceData, fetchHighScoreData } from '@/services'

export const fetchHomeDataThunk = createAsyncThunk('fetchGoodPrice',  (payload, { dispatch }) => {
    fetchGoodPriceData().then(res => {
      dispatch(changeGoodPriceAction(res))
    })
    fetchHighScoreData().then(res => {
      dispatch(changeHighScoreAction(res))
    })
    fetchDiscountData().then(res => {
      dispatch(changeDiscountAction(res))
    })  
})



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {}
    },
    reducers: {
      changeGoodPriceAction (state, { payload }) {
        state.goodPriceInfo = payload
      },
      changeHighScoreAction (state, { payload }) {
        state.highScoreInfo = payload
      },
      changeDiscountAction (state, { payload }) {
        state.discountInfo = payload
      } 
    },
    extraReducers: {
        // [fetchGoodPriceDataThunk.fulfilled](state, { payload }) {
        //   state.goodPriceInfo = payload
        // }
      }
})

export const { changeGoodPriceAction, changeHighScoreAction, changeDiscountAction}  = homeSlice.actions

export default homeSlice.reducer