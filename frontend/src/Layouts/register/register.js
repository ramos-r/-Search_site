import React from 'react'
import '../../Layouts/register/register.css'
import FormQuestion from '../../components/FormQuestion'


const Register =()=>{
    return(
      <div className="gradiente">
         <div className="container">
            <h2> Cadastrar nova pesquisa </h2> 
            <div>
               <FormQuestion/>
            </div>
         </div>
      </div>
    )
}

export default Register;