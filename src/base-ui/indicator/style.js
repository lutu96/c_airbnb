import styled from 'styled-components'

export const Wrapper = styled.div`
    overflow: hidden;

    .indicator-content {
        display: flex;
        position: relative;
        transition: transform 200ms ease-in-out;
        > * {
            flex-shrink: 0
        }


    }
`