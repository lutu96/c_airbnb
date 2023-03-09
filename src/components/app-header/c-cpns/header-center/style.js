import styled from 'styled-components'

const CenterWrapper = styled.div`
    min-width: 348px;
    height: 48px;
    text-align: left;
    display: flex;
    justify-content: center;
    .search-bar {
        position: absolute;
        display: flex;
        align-items:center;
        width: 300px;
        padding-left: 8px;
        border: 1px solid ${props => props.theme.border.primary};
        border-radius: 40px;
        box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
        ${props => props.theme.mixin.boxShadow};
        .placeholder {
            flex: 1 1 auto;
            padding: 0 16px;
            font-weight: 600;
        }

        .search-icon {
            width: 32px;
            height: 32px;
            padding: 10px;
            margin: 7px 7px 7px 0;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primary};
            color: #fff;
            
        }
    }

    .search-detail {
        position: relative;
        transform-origin: 50% 0;
        will-change: transform, opacity;

        .infos {
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .detail-exit {
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .detail-exit-active {
        transition: all 250ms ease;
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter {
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter-active {
        transform: scale(1.0) translateY(0);
        opacity: 1;
        transition: all 250ms ease;
    }

    .bar-enter {
        transform: scale(2.85714, 1.375) translateY(58px);
        opacity: 0;
    }

    .bar-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .bar-exit {
        opacity: 0;
    }
`

export default CenterWrapper