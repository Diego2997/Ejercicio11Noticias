import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioNoticia from './components/FormularioNoticia';
import { useState ,useEffect} from 'react';
import ListaNoticias from './components/ListaNoticias';
import { categorias } from './components/categorias';

function App() {
  const APY_KEY = "pub_239948689964329617a4558a639ffac69e12e"
  const [categoria,setCategoria] = useState("")
  const [noticias,setNoticias] = useState([])
 
  useEffect(()=>{
    try {
      const consultarNoticia = async()=>{
        if(categoria === ""){
          return
        }else{
          const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=${APY_KEY}&category=${categoria}&language=es`)
          const data = await respuesta.json()
          setNoticias(data.results)
        }

      }
      consultarNoticia()
    } catch (error) {
      console.log(error)
    }
  },[categoria])

  const handleChangeCategoria =(e) =>{
    setCategoria(e.target.value)
  }

  return (
    <>
    <FormularioNoticia categorias={categorias} handleChangeCategoria={handleChangeCategoria}/>
    <ListaNoticias noticias={noticias} />
    </>
  )
}

export default App
