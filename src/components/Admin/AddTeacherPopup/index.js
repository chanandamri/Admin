import {useState} from 'react'

export default function Addteacherpopup(){

    const [formData, setFormData] = useState({});
   
    const isFormValid = () => {
        const { teacherName, teacherEmail, teacherPassword ,teacherJob } = formData;
        return teacherName?.match(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/) &&
        teacherEmail?.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/) &&
        teacherPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) &&
        teacherJob.match(/^[a-zA-Z]+$/);
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
            const formData = Object.fromEntries(new FormData(e.target));
            console.log(formData);
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <label htmlFor="teacherName">name </label>
            <input name="teacherName" placeholder="Enter full name" value={formData.teacherName || ''} onChange={onChange} />

            <label htmlFor="teacherEmail">email </label>
            <input name="teacherEmail" type="email" placeholder="Email" value={formData.teacherEmail || ''} onChange={onChange} />
            
            <label htmlFor="teacherPassword">password </label>
            <input name="teacherPassword" type="password" placeholder='A-Z & a-z & 0-9 ,8characters' value={formData.teacherPassword || ''} onChange={onChange} />
            
            <label htmlFor="teacherJob">job </label>
            <input name="teacherJob" placeholder="Job" value={formData.teacherJob || ''} onChange={onChange} />
            
            <button disabled={!isFormValid()}>Add</button>
        </form>
        
        </>
    )
}