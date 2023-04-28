import './App.css';
import GlobalFonts from './fonts/fonts'
import { VideoBackground, Video, Main } from './styledComponents';
// import { VideoBackground, Video } from './styledComponents';
import video from './assets/media/rym.mp4'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import Cards from './components/Cards/Cards.jsx';
import Form from './components/Form/Form';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = 'sani@gmail.com'
const password = 'asdqwe123'
  
function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('There are not characters with this ID');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered );
   }

   return (
      <div className = 'App'>
         <VideoBackground>
            <Video autoPlay muted loop>
               <source src = {video} type='video/mp4' />
            </Video>
         </VideoBackground>
         <GlobalFonts />

         {
            location.pathname !== '/' ? <Nav onSearch = {onSearch} /> : null
         }

         <Routes>
            <Route path = '/' element = {<Form login = {login} />} />
            <Route path = '/Home' element = { 
               <Main>
                  <Cards characters = {characters} onClose = {onClose} />
               </Main>
            } />
            <Route path = '/About' element = {<About />} />
            <Route path = '/Detail/:id' element = {<Detail />} />
         </Routes>

         {/* <Main>
            <Cards characters = {characters} onClose = {onClose} />
         </Main> */}
      </div>
   );
}

export default App;
