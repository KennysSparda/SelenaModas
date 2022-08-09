import { useState } from 'react'
import Header from './header'
import BtnMain from './buttons/btnMain'
import Menu from './menu'

export default function Navbar(props) {
  // Start navbar empty
  const [show, setShow] = useState(true);

  // function to toggle Show / Hide navbar
  const showMenu = () => {
    setShow(!show)
  }

  // Verify if main button is pressed
  if (show == true) {
    return (
      <Header>
        <BtnMain function={showMenu}/>
        <Menu function={showMenu}/>
      </Header>
    )
  } else {
    return (
      <Header>
        <BtnMain function={showMenu}/>
      </Header>
    )
  }
}
