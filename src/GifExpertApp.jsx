import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categorias.includes(newCategory)) return;
        //categorias.push('event');
        console.log(newCategory)
        //setCategorias( cat => [ ...cat, 'Valorant'] );
        setCategorias([newCategory, ...categorias]);

    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategory = { setCategorias } 
                onNewCategory={onAddCategory}
            />

            {categorias.map(category => (
                <GifGrid key={category} categoria={category} />
            )
            )}
        </>
    )
}
