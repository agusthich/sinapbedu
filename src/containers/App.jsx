import React,{useState,useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState  from '../hooks/useInitialState';
import Tramites from '../components/Tramites';

import '../assets/styles/App.scss';
const API='http://localhost:3000/initalState/';


const App = () => {
  //Aqui tenia mi api de localhost del state server-json/creamos hook/useInitialState
//actualizo mi compom
const initialState= useInitialState(API);

return (

    <div className="App">
         <Header/>

         <Search/>
       
        
           <Categorias title="Veracruz">
               <Carousel>
               {initialState.veracruz.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
            
               </Carousel>
           </Categorias> 
          
        
         <Categorias title="Puebla">
           <Carousel>
             {initialState.puebla.map(item =>
               <CarouselItem key={item.id} {...item}/>
             )}
             
             
           </Carousel>
         </Categorias>
       
         <Footer/> 
    
    </div>
  );
}
export default App;