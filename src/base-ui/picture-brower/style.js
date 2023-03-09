import styled from 'styled-components'

export const BrowerWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #333;
    
    > .top {
        height: 70px;
        position: relative;
        flex-shrink: 0;

        .close-icon {
            position: absolute;
            top: 20px;
            right: 16px;
            cursor: pointer;
        }
    }

    > .slider {
        flex: 1;
        position: relative;
        display: flex;
        justify-content: center;
        .control {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
        }
        .icon {
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .picture {
            position: relative;
            height: 100%;
            width: 100%;
            max-width: 105vh;
            overflow: hidden;
            > img {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                height: 100%;
                margin: 0 auto;
                user-select: none;
            }

            .pic-enter {
                opacity: 0;
                transform: ${props => props.isNext ? 'translate(100%)' : 'translateX(-100%)'};
            }

            .pic-enter-active {
                opacity: 1;
                transform: translateX(0);
                transition: all 200ms ease;
            }

            .pic-exit {
                opacity: 1;
            }

            .pic-exit-active {
                opacity: 0;
                transition: opacity 200ms ease;
            }
        }
    }

    > .preview {
        flex-shrink: 0;
        justify-content: center;
        display: flex;
        height: 100px;
        margin-top: 10px;

        .info {
            position: absolute;
            bottom: 10px;
            width: 100%;
            max-width: 105vh;
            .desc {
                display: flex;
                justify-content: space-between;
                color: #fff;
                .desc-right {
                    cursor: pointer;
                }
            }
        }

        .list {
            width: 100%;
            height: ${props => props.showList ? '67px' : '0'};
            transition: height 200ms ease;
            overflow: hidden;

            .item {
                margin-right: 15px;
                opacity: 0.5;
                &.active {
                    opacity: 1;
                }
                > img {
                    height: 67px;
                    cursor: pointer;
                }

            }
        }
    }

    


`