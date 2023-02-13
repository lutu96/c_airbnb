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