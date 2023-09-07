import PropTypes from 'prop-types';
import { GiftItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs(category);
   
   console.log(isLoading)

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                { 
                    images.map( (image) => (  
                       <GiftItem 
                            key= { image.id }
                            {...image  } //*esparcir todas las propiedades del campo image en el componente GifItem */  
                        />
                    ))   
                }
               
            </div>
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

