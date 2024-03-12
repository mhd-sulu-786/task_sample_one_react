import React from 'react';
import './App.css';
 // Adjusted import path for Product component
import { Container } from 'react-bootstrap';
import Product from './Components/Prodect';

function App() {
  let Obj = [{
    id:'one',
      title: "The Seasons Latest",
      subtitle: "Get the seasons all latest designs in a flick of your hand",
      image: "https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?ex=65fd1f17&is=65eaaa17&hm=c54b326758a56ab751f6d43b53e4b567d02fb64155a27408c7e3206738e4a877&format=webp&quality=lossless&width=1440&height=387&"
    }, {
      id:'two',
      title: "Our New Designs",
      subtitle: "Get the designs developed by our in-house team all for yourself",
      image: "https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?ex=65fd1f17&is=65eaaa17&hm=89733777d21d2afb67475df5625b9b0f0fbf865468a4290d712b9f764160da60&format=webp&quality=lossless&width=1440&height=387&"
    }, {
      id:'three',
      title: "Insiders",
      subtitle: "Get the top class products for yourself with an extra off",
      image: "https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?ex=65fd1f17&is=65eaaa17&hm=086a5d4b10887cff99e99d5277a551d1e15cfebe91ff69b66152f5f9cb9bca9b&format=webp&quality=lossless&width=1440&height=387&"
  }];

  return (
    <div className='App'>
      <Container className='d-flex justify-content-center flex-wrap flex-row'>
        {Obj.map((item, index) => (
          <Product key={index} title={item.title} id={item.id} subtitle={item.subtitle} image={item.image} />
        ))}
      </Container>
    </div>
  );
};

export default App;