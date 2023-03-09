import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }
    .content {
        position: relative;
        z-index: 19;
        padding: 0 24px;
        height: 80px;
        border-bottom: ${props => props.theme.isAlpha ? 'none': '1px solid #f2f2f2'};
        background-color: ${props => props.theme.isAlpha ? 'transparent': '#fff'};
    }

    .top {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .cover {
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0, 0.3);
    }
`

export const SearchWrapper = styled.div`
    transition: height 250ms ease;
    height: ${props => props.isSearch ? '100px' : '0'};
    background-color: ${props => props.theme.isAlpha ? 'transpatent': '#fff'};
    margin: 0 -24px;
`
