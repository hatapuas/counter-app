
import { useState } from 'react';

import PropTypes from 'prop-types';

const Counter = ({values}) => {

 const [counter, setCounter] = useState(values);
    

    const handleAdd = () =>{
       
          setCounter(counter +1)

    }
    
    const handleSubtract = () =>  setCounter(counter -1);

  
  const handleReset = () => setCounter(values);


return (
                <>
                <h1>This is the secon Counter not export on the Botton. </h1>
                <h1>this use to be a value</h1>
                <h2>{counter}</h2>
                <button onClick={handleAdd}> +1 </button>
                <button onClick={handleSubtract}> -1 </button>
                <button onClick={handleReset}> Reset </button>
               

                </>


        )


}


Counter.propTypes = {

    values: PropTypes.number,



}

export default Counter;

