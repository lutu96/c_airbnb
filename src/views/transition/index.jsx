import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import { TransitionWrapper } from './style'
import { Transition, CSSTransition } from 'react-transition-group'


const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0.5,
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0.5 },
};

const TransitionView = memo((props) => {
  const [inProp, setInProp] = useState(false)
  const nodeRef = useRef(null)
  return (
   <TransitionWrapper>
      <Transition in={inProp} nodeRef={nodeRef} timeout={duration}>
        {state => (
          <div ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition! { state }
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    {/* <div>
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="my-node">
        <div ref={nodeRef}>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div> */}
   </TransitionWrapper>
  )
})

TransitionView.propTypes = {}

export default TransitionView