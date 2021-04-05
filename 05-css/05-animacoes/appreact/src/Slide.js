import React from 'react'
import styles from './Slide.module.css'

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0) // começa com o slide de index 0 do array
  const [position, setPosition] = React.useState(0)
  const contentRef = React.useRef()

  // Para não ter que repetir o const { width } nas duas funções (prev e next), crio um efeito com esse código
  React.useEffect(() => {
    // pega o posicionamento e o tamanho da div dessa referência (a de slides), para que a rolagem fique dinâmica em qualquer tamanho de tela
    const { width } = contentRef.current.getBoundingClientRect() 
    setPosition(-(width * ativo))
  }, [ativo])

  function slidePrev() {
    if(ativo > 0)
    setAtivo(ativo - 1)
  }

  function slideNext() {
    if(ativo < slides.length - 1)
    setAtivo(ativo + 1)
  }
  
  return (
    <section className={styles.container}>
      <div ref={contentRef} className={styles.content} style={{transform: `translateX(${position}px)`}}>
        {slides.map(slide => <div key={slide.id} className={styles.item}>{slide.text}</div>)}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  )
}

export default Slide
