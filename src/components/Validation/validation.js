const validation = (userData) => {
    const errors = {};
    const emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    const passwordRegex = /.*\d+.*/;

    // Si NO es un email, mando mensaje de error. Creo una propiedad en el objeto errors
    if (!emailRegex.test(userData.email)) {
        errors.email = 'El email ingresado no es valido wachin'
    }

    if (!userData.email) {  //userData.email.length === ''
        errors.email = 'Vos sos boludo? Escribi un email, dale pancho'
    }

    if (userData.email.length > 35) {
        errors.email = 'Nooo, vos te vas a la mierda, tenes que poner menos caracteres, papanata'
    }

    if (!passwordRegex.test(userData.password)) {
        errors.password  = 'Dale estupido, ponele al menos un numero a tu pass, sino es re insegura, boludito'
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password  = 'Mira flaco, me tenes cansado, la pass tiene que tener entre 6 y 10 caracteres, no es tu agenda esto'
    }

    return errors;
}

export default validation;