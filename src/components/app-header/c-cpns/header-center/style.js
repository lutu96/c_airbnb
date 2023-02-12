import styled from 'styled-components'

const CenterWrapper = styled.div`
    min-width: 348px;
    padding: 0 24px;
    text-align: left;
    .search-bar {
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
`

export default CenterWrapper