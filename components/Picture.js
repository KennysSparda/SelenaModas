/*      Picture like place for some image 
 *    you will need to load this on all
 *    pages manualy passing the
 *    path of the image in source
 *    property 
 */
export default function Picture(props) {
  var srcImage = props.source
  var sourceSet=` ${srcImage} 320w,
                  ${srcImage} 480w,
                  ${srcImage} 800w`
  return (
    <div id='picture'>
      <img 
          srcSet={sourceSet}
          sizes="(max-width: 320px) 280px,
          (max-width: 480px) 440px, 800px"
          src={srcImage}
          alt={props.description}>
      </img>
    </div>
  )
}
