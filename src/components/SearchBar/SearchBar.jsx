import { useState } from "react";

export default function SearchBar( { onSearch } ) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }  

   const enterKey = (event) => {
      if (event.keyCode === 13) {
         setId( () => onSearch(id))
         event.target.value = '';
      }
   }

   return (
      <div>
         <input type = 'search' onChange = {handleChange} value = {id} onKeyUp = {enterKey} />
         <button onClick = { enterKey }>Agregar</button>
         {/* <button onClick = { () => {onSearch(id); setId('')} }>Agregar</button> */}
      </div>
   );
}