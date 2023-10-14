import React ,{useState} from 'react'

export default function TxtForm(props) {
  const handleUpclick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to upper case!","success")
  }

    const handleDoclick=()=>{
      let newtext=text.toLowerCase()
      setText(newtext)
      props.showAlert("Converted to lower case!","success")
    }
    const handleClearclick=()=>{
      let newtext=""
      setText(newtext)
      props.showAlert("Cleared text!","success")
    }
    const handlerevlick=()=>{
      let newtext=text.split(" ").reverse().join(" ")
      setText(newtext)
      props.showAlert("Reveresed string!","success")
    }
    const handleCopy=()=>{
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied Text!","success")
    }
    const titleCase = () => {
      const words = text.split(' ');
      const newWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      const newText = newWords.join(' ');
      setText(newText);
      props.showAlert('Converted to title Case!', 'success');
    };
    
    
const HandleonChange=(event)=>{
  setText(event.target.value)
}

  const [text, setText] = useState('');
  return (
   <>
   <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} id="Mybox" rows="8" onChange={HandleonChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleDoclick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearclick}>Cleartext</button>
<button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handlerevlick}>Reverse words</button>
<button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>copy text</button>
<button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={titleCase}>Title case</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your summary is here</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Nothing to preview!"} </p>
    </div>
    </>
  )
}
