import { useState } from "react";

const ContactForm = ({}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }
        const url = "http://127.0.0.1:5000/create_contact"
        
        const options = {
            method: 'Post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        
        const response =  await fetch(url,options)
        
        if(response.status != 201 && response.status != 200){
            const data = await response.json()
            alert(data.message)
        } else {
            //success
        }
    }


    return <form onSubmit={onSubmit}>
        <div>
            <label htmlfor='firstName'>First Name:</label>
            <input type="text" 
                   id="firstName" 
                   value={firstName} 
                   onChange={(e)=> setFirstName(e.target.value)}
            />
        </div>
        <div>
            <label htmlfor='lastName'>Last Name:</label>
            <input type="text" 
                   id="lastName" 
                   value={lastName} 
                   onChange={(e)=> setLastName(e.target.value)}
            />
        </div>
        <div>
            <label htmlfor='email'>Email:</label>
            <input type="text" 
                   id="email" 
                   value={email} 
                   onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <button type="submit">Create Contact</button>
    </form>

    }

export default ContactForm