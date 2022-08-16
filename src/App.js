import AllProducts from './components/allProducts';
import './App.css';
import CarouselImage from './components/carouselImage';
import SmalCardsBlock from './components/smalCardsBlock';
import "./style.scss"
import OurDifferences from './components/ourDifferences';
import Post from './components/post';

// images
import Material from "./images/products/material.png"
import Fasad from "./images/products/fasad.png"
import Counter from './components/counter';
import ClientFeedback from './components/clientFeedback';
import Form from './components/form';
import Blogs from './components/blogs';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <SmalCardsBlock/>
     <CarouselImage/>
     <AllProducts/>
     <OurDifferences/>
     <Post image={Material} title={`Learn more about the REVID`} info1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis error neque repudiandae impedit fugit magni. Amet eaque velit vero, id distinctio dolore excepturi error neque magnam ipsum hic asperiores.'} info2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis error neque repudiandae impedit fugit magni. Amet eaque velit vero, id distinctio dolore excepturi error neque magnam ipsum hic asperiores.`} info2={`Produzidos com atenção aos detalhes, diferenciados acabamentos, os revestimentos aliam cuidado artesanal à tecnologia de ponta. Seja para ambientes residenciais ou comerciais, é a melhor solução estética e a mais vantajosa relação custo-benefício do mercado. `} button={`Saiba Mais`} />
     <Post image={Fasad} title={`A maior e mais moderna indústria do setor na América Latina.`} info1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis error neque repudiandae impedit fugit magni. Amet eaque velit vero, id distinctio dolore excepturi error neque magnam ipsum hic asperiores.'} info2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis error neque repudiandae impedit fugit magni. Amet eaque velit vero, id distinctio dolore excepturi error neque magnam ipsum hic asperiores.`} info2={`Produzidos com atenção aos detalhes, diferenciados acabamentos, os revestimentos aliam cuidado artesanal à tecnologia de ponta. Seja para ambientes residenciais ou comerciais, é a melhor solução estética e a mais vantajosa relação custo-benefício do mercado. `} button={`Saiba Mais`} />
      <Counter/>
      <ClientFeedback/>
      <Form/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
