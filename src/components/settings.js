import React from 'react'

import BotaoMenu from './botao-menu'
import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-settings">
      <BotaoMenu
        text="Configurações"
        image_src="/settings.svg"
        rootClassName="botao-menu-root-class-name4"
      ></BotaoMenu>
    </div>
  )
}

export default Settings
