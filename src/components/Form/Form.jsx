import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {  // Ante cada cambio que suceda en el input (gracias a onChange), se ejecuta esta fn, la cual se encarga de avisarle al estado que hubo un cambio, por ende se tiene que modificar
        setUserData({ // Retorno un nuevo obj porque estoy pisando el valor del estado, por eos necesito justamente retornar un nuevo objeto y COPIAR ... lo que habia antes para no perderlo
            ...userData, 
            [event.target.name]: event.target.value
            // Bracket notation [] porque es una propiedad del objeto que es variable, o sea, que no se cual va a ser, puede ser cualquier cosa.
            // Esto me permite a mi dar escabilidad y dinamismo a la pagina, porque puedo meter 1 millon de inputs pero siempre va a pickear al que yo en ese momento este targeteando, eso gracias al value y al name que le pusimos en el html  
        })

        setErrors(validation({
            ...userData, 
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <form onSubmit = {handleSubmit}>

            <label style = {{ color: "white" }} htmlFor = "email">Email</label>
            <input type = "email" name = "email" value = {userData.email} onChange = {handleChange} />
            {
                errors.email && <p style = {{ color: "red" }} >{errors.email}</p>   // Si existe esa propiedad me va a dar true, entonces me muestra el error, y si no existe esa propiedad, me da false y lo otro no se muestra
            }
            <hr />
            <label style = {{ color: "white" }} htmlFor = "password">Password</label>
            <input type = "password" name = "password" value = {userData.password} onChange = {handleChange} />
            {
                errors.password && <p style = {{ color: "red" }} >{errors.password}</p>   // Si existe esa propiedad me va a dar true, entonces me muestra el error, y si no existe esa propiedad, me da false y lo otro no se muestra
            }
            <button>Submit</button>
        </form>
    )
}

export default Form;