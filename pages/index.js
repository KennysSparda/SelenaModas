import {useState} from 'react'
import Button from '../components/Button'
import Navbar from '../components/navbar/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Picture from '../components/Picture'

export default function App() {
  const [frase, setFrase] = useState('Reserve isso!')
  
  function bestFunction(){
    setFrase('oi pamonha') 
  }

  return (
    <div>
      <Navbar/>
      <Container id='home'>
        <h1>Inicio</h1>
        <p>Em progresso...</p>
      </Container>
      <Container id='category'>
        <h1>Categoria</h1>
        <p>Em progresso...</p>
      </Container>
      <Container id='gallery'>
        <h1>Galeria</h1>
        <Picture source='images/products/c.jpeg'/>
      </Container>
      <Container id='contact'>
        <h1>Contato</h1>
        <p>Em progresso...</p>
      </Container>
      <Container id='about'>
        <h1>Sobre</h1>
        <p>Em progresso...</p>
      </Container>
      <Footer/>
    </div>
  )
}
