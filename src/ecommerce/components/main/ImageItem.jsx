export const ImageItem = ({ image, start, end }) => {
  return (
    <img className= {`col-start-${start} col-end-${end} rounded-[1rem] hover:cursor-pointer`}
    src={image}></img>
  )
}
