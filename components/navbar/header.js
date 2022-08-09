export default function Header(props) {
  return (
    <div>
      <header className="navbar-body">
        <div className="navbar">
          {props.children}
        </div>
      </header >
    </div >
  )
}