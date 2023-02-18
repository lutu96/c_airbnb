import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchDiscountData, fetchGoodPriceData, fetchHighScoreData, fetchRecommendData, fetchLongforData, fetchPlusData } from '@/services'

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
    fetchRecommendData().then(res => {
      dispatch(changeRecommendInfoAction(res))
    })
    fetchLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    fetchPlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
})



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
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
      },
      changeRecommendInfoAction (state, { payload}) {
        state.recommendInfo = payload
      },
      changeLongforInfoAction (state, { payload }) {
        state.longforInfo = payload
      },
      changePlusInfoAction (state, { payload }) {
        state.plusInfo = payload
      }
    },
    extraReducers: {
        // [fetchGoodPriceDataThunk.fulfilled](state, { payload }) {
        //   state.goodPriceInfo = payload
        // }
      }
})

export const { changeGoodPriceAction, changeHighScoreAction, changeDiscountAction, changeRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction }  = homeSlice.actions

export default homeSlice.reducer