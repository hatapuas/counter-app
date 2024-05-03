import PropsTypes from 'proptypes';

export const Fernando = ({titulo, subTitulo}) => {

  
  return (
        <>
        <h1>{titulo}</h1>
       
        <h2>{subTitulo}</h2>
       
        </>

  )
}
Fernando.propTypes = {

    titulo : PropsTypes.string.isRequired,
    subTitulo : PropsTypes.string.isRequired


}