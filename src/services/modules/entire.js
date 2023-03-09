import yRequest from ".."
export const fetchEntireData = (offset=0, size=20) => {
    return yRequest.get({
        url: '/entire/list',
        params: {
            offset,
            size
        }
    })
}