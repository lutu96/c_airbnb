import styled from 'styled-components'
export const RoomsWrapper = styled.div`
    position: relative;
    margin: 0 -8px;
    padding: 0 20px;
    h1 {
        padding: 10px 8px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        
    }

    > .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255, 0.8)
    }
`