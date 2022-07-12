const { render, screen, fireEvent } = require("@testing-library/react")
import { AddCategory } from '../../src/components';

describe('Pruebas al componente AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input, { target: { value: 'Naruto' } } );
        expect( input.value ).toBe( 'Naruto' );
     });

    test('Debe de llamar onNewCategory si el input tiene valor', () => { 
        const inputValue = 'Naruto';
        const onNewCategory = jest.fn();


        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
     });

     test('No debe llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: '' } } );
        fireEvent.submit( form );
        
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
      })
 })