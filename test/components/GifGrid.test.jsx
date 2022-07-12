import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componente GifGrid', () => {
    const category = 'Naruto';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid categoria={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGift', () => {

        const gifs = [
            {
                id: 'Naruto',
                title: 'NarutoGif',
                url: 'https://localhost/naruto.jpg'
            },
            {
                id: 'Harry',
                title: 'HarryGif',
                url: 'https://localhost/harry.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid categoria={category} />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})