import React from 'react'
import Dropzone from 'react-dropzone'

import Components from './components'

const ProfilePicture = ({ changeImage }) => (
  <Components.Wrapper>
    <Components.Label>Foto do Perfil</Components.Label>
    <Dropzone
      accept=".jpg, .jpeg"
      onDrop={value => value.map(item => changeImage(item))}
      className="dropzone"
    >
      item
    </Dropzone>
  </Components.Wrapper>
)

export default ProfilePicture
