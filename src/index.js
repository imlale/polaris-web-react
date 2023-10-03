import ReactDOM from 'react-dom/client';
import React from 'react';
import { Header } from './componentes/header';
import { Footer } from './componentes/footer';
import { Home } from './componentes/home';
import { Blog, SinglePost } from './componentes/blog';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ContactForm } from './componentes/contactForm';


function Main () {
  
  return <>
  <React.StrictMode>
    <BrowserRouter>
    <AnimatePresence>   
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>         
          <Route path="blog" element={<Blog/>}/>
          <Route path="/:slug" element={<SinglePost />} />
          <Route 
            path="*"  
            element={
              <div className='container-fluid'>
                <div className='row' style={{paddingTop:"250px"}}><h1>Página no encontrada</h1></div>
              </div>
            } 
          />  
        </Route>
          
      </Routes>
      </AnimatePresence>
      <Footer/>
        <ContactForm/>
    </BrowserRouter>
  </React.StrictMode>
    </>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);