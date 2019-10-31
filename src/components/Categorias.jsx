import React from 'react';
import '../assets/styles/components/Categorias.scss';


const Categorias = ({children,title}) => (

    <div className="categorias">
       <h3 className="categories_title">{title}</h3>´
       {
           children
       }

    </div>


    

)

export default Categorias;
