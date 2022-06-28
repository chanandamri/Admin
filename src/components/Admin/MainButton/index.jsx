import './style.css'

// Creator : Team e - chanan
function MainButton({ children, form }) {
    return <>
        <button  form={form} type="submit" className="buttonAddClass">{children}</button>
    </>
}


export default MainButton