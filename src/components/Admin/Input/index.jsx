import './style.css'

// Creator : Team A - Shahar
export default function Input(props) {
    const dummyvalues = ["ClassA", "ClassB", "ClassC", "ClassD"]
    if (props.type == "text") return <div className='input'>
        <label className="inputLabel">{props.title}</label>
        <input className='inputButton' type={props.type} />
    </div>

    if (props.type == "dropdown") return <div className='input'>
        <label >{props.title}</label>
        <select >
            {dummyvalues.map(v => { return (<option value={(v)} key={(v)}>{v}</option>) })}

        </select>


    </div>
}