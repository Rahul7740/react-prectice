import { useState } from "react"

export function Texterea(){
    function upperchaseFunction(){
        console.log(text);
        setText(text.toUpperCase())
    }
    
    function onchangeText(event){
        setText(event.target.value)
    }
    function cleartext(){
        setText("")
    }
    const [text,setText] = useState("")
    let mystyle = {
        color: "red"
    }
    let btnStyle = {
        padding:"5px 10px",
        border:'1px solid black'
    }
    return(
        <>

            <br/>
            <textarea rows="10" value={text} onChange={onchangeText} placeholder="Enter your text" ></textarea>
            <br/>
            <button style={btnStyle} onClick={upperchaseFunction} >uppercash</button>
            <br />
            <button style={btnStyle} onClick={cleartext} >clear</button>
            <p>word:{text.split(" ").length} // letters:{text.length}</p>
            <h2>perview</h2>
            <p style={mystyle}>{text}</p>
        </>
    )
}