import React from 'react';
import Menu from './components/Menu'
import DadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
function App() {
  return (
    // eslint-disable-next-line react/style-prop-object
    <div>
      <Menu />
      
      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é frontend"}
      />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />

      <Carousel 
        category={DadosIniciais.categorias[1]}
      />

      <Carousel 
        category={DadosIniciais.categorias[2]}
      />

      <Carousel 
        category={DadosIniciais.categorias[3]}
      />

      <Carousel 
        category={DadosIniciais.categorias[4]}
      />

      <Carousel 
        category={DadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
