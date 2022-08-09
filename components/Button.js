/*    Button is the generalization of links and buttons with style and 
 *  protective security 
 *   if explicit declaration type='linkEx' then
 *      it accept link property ex:
 *      <Button type='link' path='/about'>About</Button>
 *   if explicit declaration type='linkIn' then
 *      it accept link property ex:
 *      <Button type='link' path='/about'>About</Button>
 *   else
 *      accept default a function on click it
 *      <Button function='reserve()'>Reserve it!</Button>
 */

export default function Button(props) {
  if(props.type == 'linkEx') {
    return (
      <a className="Button"
        href={props.path}
        onClick={props.function}
        // Open in new page
        target="_blank"
        // Security: to prevent malicious attacks from the pages how can you make a link
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  } else if(props.type == 'linkIn') {
    return (
      <a 
        className="Button"
        href={props.path}
        onClick={props.function}
      >
          {props.children}
      </a>
    )
  } else {
    return (
      <button className="Button"
        onClick={props.function}
      >
        {props.children}
      </button>
    )
  }
}
