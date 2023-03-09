import styled from 'styled-components'
export const TransitionWrapper = styled.div`

.my-node-appear {
    transform: translateY(100%)
}

.my-node-appear-active {
    transition: all 500ms;
}

.my-node-enter {
  opacity: 0;
  transform: translateX(100%)
}
.my-node-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 500ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transform: translateX(100%);
  transition: all 500ms;
}
    
`