

export default function Addteacherpopup(){
    return(
        <>
        <form>
        <label htmlFor="teacherName">name 
        <input  name="teacherName" placeholder="enter your name" />
        </label>
        <label htmlFor="teacherEmail">email</label>
        <input name="teacherEmail" type={"email"} placeholder="email"/>
        <label htmlFor="teacherPassword">password</label>
        <input name="teacherPassword" type={"password"} placeholder="password" />
        <label htmlFor="teacherJob">job</label>
        <input name="teacherJob" placeholder="job" />
        <button name="">Add</button>
        
        </form>
        
        </>
    )
}