import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => { // llegan los parametros props y se desestructura y se obtiene el valor del atributo

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1 ) return;
       // setCategories( cat => [inputValue,  ...cat ] )
        onNewCategory(newInputValue);
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange= {  onInputChange }
            />
        </form>
       
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}


