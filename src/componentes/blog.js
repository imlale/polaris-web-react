import {React,  useEffect, useState } from "react";
import parse from 'html-react-parser';
import {useParams, Link} from 'react-router-dom';
import { motion } from "framer-motion";

const host = "https://"+  window.location.host +"/"

export const Blog = () => {
    
    const url = (host.includes('localhost')?"":"https://polarisweb.com.co") + "/wp-json/wp/v2/posts" + (host.includes('localhost')?".json":"")
    const [posts, setPosts] = useState([]);
  

 useEffect(() => {
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));

  }, [url]);

  
  return <AllPosts posts={posts}/>
    
};

function AllPosts({posts}){
    return (  <motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5}}>
       <article id="blog">    
    <div className="container-fluid">
      <div className="inner-container">
        
        <div className="row min-vh-100">
        <h1>Blog</h1>
        {posts.map((post) => (
            
            <div key={post.id} className="col-12 col-md-4 post-item mb-5">
              <Link className="" to={"/"+post.slug}>
                <div className="post-wrapper">
                  <PostImagen pid={post.featured_media}/>
                  <div className="resumen p-5"><h5>{post.title.rendered}</h5>
                  {parse(post.excerpt.rendered)}
                  </div>
                </div>
              </Link>   
            </div> 
                  
            
        ))}
        {posts[0]?"":<NoPosts/>}
        
        </div>
      </div>
    </div>
</article>
</motion.div>
);
}

function NoPosts(){
  return <>
    
              
    <div className="col-12 col-md-4 post-item mb-5 cargando">
      <img className="w-100" src="/img/post-cargando.jpg"></img>
    </div>
    <div className="col-12 col-md-4 post-item mb-5 cargando">
      <img className="w-100" src="/img/post-cargando.jpg"></img>
    </div>
    <div className="col-12 col-md-4 post-item mb-5 cargando">
      <img className="w-100" src="/img/post-cargando.jpg"></img>
    </div>
              
      
  </>
}

function PostImagen({pid}){
    const url = (host.includes('localhost')?"":"https://polarisweb.com.co") + "/wp-json/wp/v2/media/" + pid + (host.includes('localhost')?".json":"")
    
    const [imagen, setImagen] = useState([]);

  useEffect(() => {   
        fetch(url)
            .then((res) => res.json()).catch(()=>{ const a = {id:pid} 
                return a})
            .then((data) => {setImagen(data)})
            
  }, [url, pid]);

  return (
    <div className="post-img" key={imagen.id}>
                <img className="w-100"  onLoad={(e)=>e.target.style.opacity=1} src={imagen.guid?imagen.source_url:"/img/img-not-found.png" } alt={imagen.slug || ""} />
            </div>
  );
    
}


function SelectedPost({ postId, posts, setSelectedPostId }) {
  
    const post = posts.find(post => post.id === postId)
   
    const dateFormatted = formatearFecha(post.date);
        
    return (<motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5}}>
        <article className="post-article" id={"post-"+postId}>
        <div className="container-fluid">
          <div className="inner-container">
            <div className="row">
              <div className="post-header mb-5">
                <h2>{post.title.rendered}</h2>
                <p>Publicado el {dateFormatted}</p>
              </div>
              <div className="post-content">
                {parse(post.content.rendered)}   
              </div>
              <div className="post-footer">
                
                <Link className="btn btn-primary" to="/blog">Ver todas las entradas</Link>
               </div>
          </div>
         </div>      
        </div>  
      </article>   
      </motion.div>   
    )
  }

  export function SinglePost(){
    const { slug } = useParams()
    
    let url = (host.includes('localhost')?"":"https://polarisweb.com.co") + "/wp-json/wp/v2/posts?slug=" + slug + (host.includes('localhost')?".json":"")
    url = host.includes('localhost')?url.replace("?","-").replace("=","-"):url
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
      
     
      fetch(url)
        .then((res) => res.json()).catch( ()=>{ const a = [{id:-1}] 
        return a})
        .then((data) => {setPosts(data)
          
          setSelectedPostId(data[0].id)
        }).catch(()=>{setSelectedPostId(-1)});

    }, [url]);
    
    if(!posts[0]){ return <><div class="custom-loader"></div></>}
    if(posts[0].id < 0 || selectedPostId<0){ 
      return <><div className='container-fluid'>
        <div className='row' style={{paddingTop:"250px"}}><h1>Página no encontrada</h1></div>
      </div></>
    }
    
    return <SelectedPost postId={selectedPostId} posts={posts} setSelectedPostId={setSelectedPostId}/>
  }

function formatearFecha (fecha){
  const date = new Date(fecha)
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' }); 
    const year = date.getFullYear();

    return `${day} de ${month} de ${year}`
}