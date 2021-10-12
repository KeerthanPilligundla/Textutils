import React,{useState} from 'react'

const Textform = (props) => {

    const handleUpClick =()=>{
       // console.log("up button clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleLowClick =()=>{
        // console.log("up button clicked")
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowercase","success")
     }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Text Data","success")
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Data Copied","success")
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces deleted sucessfully","success")
    }
    const handleOnChange =(event)=>{
       // console.log("on")
        setText(event.target.value)
    }
    const [text, setText] = useState("")

    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="container">
                    <h2 className="mb-3">{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#3a3b3c':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>     
                    <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>     
                    <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p> Requires {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </div>
        </>
    )
}

export default Textform
