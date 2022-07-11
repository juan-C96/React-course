import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length >= 1 ) {
            //setCategory( categorias => [inputValue, ...categorias] );
            onNewCategory( inputValue.trim() );
            setinputValue('');
        }
    }

    return (
        <form onSubmit = { onSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
