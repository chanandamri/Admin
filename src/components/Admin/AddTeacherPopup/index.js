import {useState} from 'react'
import './style.css'
import MainButton from '../MainButton';

// Creator : Team E - Ariel
export default function Addteacherpopup(){

    const [formData, setFormData] = useState(
        {
            permissions: "teacher", 
            classId:1, 
            TF:[{value:1}], 
            calibration:1
        }
    );
    
    const isFormValid = () => {
        const { firstName, lastName, email, password } = formData;

        return firstName?.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) &&
        lastName?.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/) &&
        email?.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/) &&
        password?.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [name]: value,
            };
        });
    };
    
    const onSubmit=(e)=>{
            e.preventDefault()
            console.log(formData);
            // const data = Object.fromEntries(new FormData(formData));
            // console.log(data);

            // fetch(url,{method: 'POST', data: JSON.stringify(formData)})
            // .then(()=>{
                //     alert("Teacher added successfully");
                //     //send email to teacher
            // })
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName" className='label'>name </label>
            <input name="firstName" className='input' placeholder="First name" value={formData.firstName || ''} onChange={onChange} />

            <label htmlFor="lastName" className='label'>job </label>
            <input name="lastName" className='input' placeholder="Last name" value={formData.lastName || ''} onChange={onChange} />
            
            <label htmlFor="email" className='label'>email </label>
            <input name="email" className='input' type="email" placeholder="Email" value={formData.email || ''} onChange={onChange} />
            
            <label htmlFor="password" className='label'>password </label>
            <input name="password" className='input' type="password" placeholder='A-Z & a-z & 0-9 ,8characters' value={formData.password || ''} onChange={onChange} />
            
            <button className="buttonAddClass" disabled={!isFormValid()}>Add</button>
        </form>
        
        </>
    )
}