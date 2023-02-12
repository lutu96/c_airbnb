import styled from 'styled-components'

const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .btns {
        display: flex;
        align-items: center;
        margin-right: 8px;
        color: ${props => props.theme.text.primary};
        .btn {
            position:relative;
            padding: 12px;
            cursor: pointer;
            &::before {
            content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: -3px;
                right: -3px;
                z-index: -1;
                border-radius: 22px;
                transition: background-color 200ms ease;
            }
            &:hover::before {
                background-color: #eee;
            }
        }
    }

    .profile {
        position: relative;
        display: flex;
        align-items: center;
        padding: 5px 5px 5px 12px;
        border: 1px solid ${props => props.theme.border.primary};
        border-radius: 21px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}
        .dir {
            color: ${props => props.theme.text.secondary}
        }
        .avatar {
            color: #717171;
            margin-left: 12px;
        }

        .panel {
            position: absolute;
            top: 54px;
            right: 0;
            width: 240px;
            border-radius: 10px;
            box-shadow: 0 0 6px rgba(0,0,0,.2);
            color: #444;
            .top, .bottom {
                padding: 10px 0;
            }
            .top {
                border-bottom: 1px solid #ddd;
            }
            .item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
                cursor: pointer;
                &.register {
                    color: #333;
                    font-weight: 500;
                }
                &:hover {
                    background-color: #eee;
                }
            }
        }
    }
`

export default RightWrapper