import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'
import PropTypes from 'prop-types';

export const GifGrid = ({ categoria }) => {

    const { images, isLoading } = useFetchGifs( categoria );

    return (
        <>
            <h3>{categoria}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map( image => (
                        <GifGridItem 
                        key={ image.id } 
                        { ...image }/>
                        /*title={ image.title }
                        url={ image.url }/>*/
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}
