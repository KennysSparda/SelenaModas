export default function Container(container) {
  return <section id={container.id}>
    <div 
      className='container'>
      {container.children}
    </div>
  </section>
}