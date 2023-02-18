import yRequest from ".."

export  const fetchGoodPriceData = () => {
    return yRequest.get({
        url: '/home/goodPrice'
    })
}

export const fetchHighScoreData = () => {
    return yRequest.get({
        url: '/home/highscore'
    })
}

export const fetchDiscountData = () => {
    return yRequest.get({
        url: '/home/discount'
    })
}

export const fetchRecommendData = () => {
    return yRequest.get({
        url: '/home/hotrecommenddest'
    })
}

export const fetchLongforData = () => {
    return yRequest.get({
        url: '/home/longfor'
    })
}

export const fetchPlusData = () => {
    return yRequest.get({
        url: '/home/plus'
    })
}