import React, { useState } from 'react';

export default function Textarea(props) {
  const [text, setText] = useState('');
  const [fWord, setFindWord] = useState('');
  const [rWord, setReplaceWord] = useState('');

  const handleUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    document.title='Textutils-Uppercase'
  }

  const handleLow = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    document.title='Textutils-LowerCase mode'
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleFindChange = (event) => {
    setFindWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    setReplaceWord(event.target.value);
  };

  const handleReplaceClick = () => {
    let newText = text.replace(new RegExp(fWord, 'g'), rWord);
    setText(newText);
    document.title='Textutils-replace mode'
  };
  const copyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  }
  const handleclear = () => {
    let newtext = '';
    setText(newtext);
    
  }
  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
}
const handleFirstLetterUppercase = () =>{
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const upper = text.split(' ').map(capitalize).join(' ');
  setText(upper)
}


  return (
    <div className="my-2" >
      <h3 style={{ color: props.mode === 'light' ?  '#332940': '#FAF9F6' }}>Enter the text to analyze</h3>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <textarea
     
    
        style={{ 
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? '#FAF9F6' : '#332940' , display:'flex'}}
        className="form-control my-2"
        value={text}
        onChange={handleOnChange}
        id="floatingTextarea"
        rows={8}
      ></textarea>
      </div>
      <div className="container my-2">
        <div className="d-flex">
          <button className="btn btn-primary my-2 me-2" onClick={handleUp}>Convert to Uppercase</button>
          <button className="btn btn-primary my-2" onClick={handleLow}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleFirstLetterUppercase}>First Word To Uppercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleclear}>Clear Text</button>
        </div>
      </div>
      <div className="container my-2">
        <h4 style={{ color: props.mode === 'light' ? '#332940' : '#FAF9F6' }}>Your text summary</h4>
        <p style={{ color: props.mode === 'light' ? '#332940' : '#FAF9F6' }}>Words: {text.split(" ").length} and {text.length} characters</p>
        <p style={{ color: props.mode === 'light' ? '#332940' : '#FAF9F6' }}>Minutes to read: {0.008 * text.split(" ").length}</p>
      </div>
      < div className=" my-2"
          value={rWord} >
            <div></div>
        <textarea
       className='mx-2'
          style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? '#FAF9F6' : '#332940' }}
          value={fWord}
          onChange={handleFindChange}
          placeholder="Enter the word to find"
        />
        
                <textarea 
                className='mx-1'
          style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? '#FAF9F6' : '#332940' }}
          value={rWord}
          onChange={handleReplaceChange}
          placeholder="Enter the word to replace with"
        />
        
        <button className="btn btn-primary my-2 d-block mx-2" onClick={handleReplaceClick}>Replace</button>
      </div>
    </div>
  );
}

         





