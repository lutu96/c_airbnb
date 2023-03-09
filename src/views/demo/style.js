import styled from 'styled-components'
export const DemoWrapper = styled.div`
    .box {
        width: 200px;
        margin: 0 -10px;
    }
    .indecator {
        overflow: hidden;
    }
    .i-content {
        display: flex;
        position: relative;
        transition: all 300ms ease-in;
    }
    .item {
        padding: 10px;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
    }
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
        &.active {
            background-color: red;
        }
    }
`
