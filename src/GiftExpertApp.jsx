
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';  //la exportacion busca el archivo index.js dentro de la carpeta componentes

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        console.log("aqui",newCategory);
        if( categories.includes(newCategory) ) return;
        setCategories( categories => categories.concat(newCategory) )
    }


    console.log(categories);

    return (
        <>
            { /* Titulo */ }
            <h1>GiftExpertApp</h1>

            { /* Input */ }

            <AddCategory 
              /*  setCategories= { setCategories  } */ 
              onNewCategory = { event => onAddCategory(event)  } 
            />

          
            { /*<button onClick={ onAddCategory } >Agregar</button> */ }
          
            { categories.map( (category) => (
                    <GifGrid key={ category } category = { category }  />
                ) ) 
            }
            

            { /* Gif item */ }
        </>
    )
}