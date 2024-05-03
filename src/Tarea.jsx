import PropTypes from 'proptypes';


export const Tarea = ({valor}) => {
  return (
    <div>
    <h2>  This is the Counter App</h2>
        <h2>{valor}</h2>
    
    </div>
  )
}




Tarea.propTypes = {

    valor: PropTypes.number.isRequired

}
