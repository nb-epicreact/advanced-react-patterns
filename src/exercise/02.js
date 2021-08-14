// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

// 📜 https://reactjs.org/docs/react-api.html#reactchildren
// 📜 https://reactjs.org/docs/react-api.html#cloneelement

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (typeof child.type === 'string') {
      return child
    }

    return React.cloneElement(child, {
      on,
      toggle,
    })
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <div>
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is off</ToggleOff>
          <span>Hello</span>
          <ToggleButton />
        </Toggle>
      </div>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
