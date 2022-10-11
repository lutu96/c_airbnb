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
    }
`

export default RightWrapper