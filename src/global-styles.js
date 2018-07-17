/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

injectGlobal`
${normalize()}

html,
body,
#root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

button {
  cursor: pointer;
}

input,
button {
  &:focus {
    outline: none;
  }
}
`
