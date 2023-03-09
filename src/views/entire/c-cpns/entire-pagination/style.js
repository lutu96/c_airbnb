import styled from 'styled-components'
export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .MuiPaginationItem-circular svg {
        font-size: 26px;
    }
    .MuiPaginationItem-page {
        margin: 0 9px;
        &:hover {
            text-decoration: underline;
        }
        &.Mui-selected {
            background-color: #000;
            color: #fff;
        }
    }
     
    .desc {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }
`