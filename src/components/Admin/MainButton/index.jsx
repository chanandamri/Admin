import './style.css'

// Creator : Team e - chanan
function MainButton({ children, onClick }) {
    return <>
        <button onClick={onClick} className="buttonAddClass">{children}</button>
    </>
}


export default MainButton