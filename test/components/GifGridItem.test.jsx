import { render, screen } from "@testing-library/react"
import { GifGridItem } from '../../src/components';


describe('Pruebas al componente GifGridItem', () => {

    const title = '123';
    const url = 'http://localhost/VVVVV';

    test('Debe hacer match con el Snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifGridItem title={title} url={url} />);
        /*/expect( screen.getByRole( 'img' ).src ).toBe( url );
        expect( screen.getByRole( 'img' ).alt ).toBe( title );*/
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifGridItem title={ title } url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();

    })
})