import styled from 'styled-components'

const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
   .logo {
        color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primary};
        cursor: pointer;
   }
`

export default LeftWrapper