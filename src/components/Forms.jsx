import React, { useState } from "react";



const Forms = (props) => {

  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("The sentences are capitalized","Success");
 
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlelowclick = () => {
    let newt = text.toLowerCase();
    setText(newt);
    props.showalert("The sentences are in small letters","Success");
    
  };

  const clean = () => {
    let cl = "";
    setText(cl);
    props.showalert("The sentences are in cleared","Success");
  };

  const words=()=>
    {
      let totalwords;
      let w=0;
      totalwords=text.split(" ");
      let length;
      length=text.split(" ").length;
      for(let i=0;i<length;i++)
      {
        if(totalwords[i]==='')
        {

        }
        else{
          w=w+1;
        }
      }
      return w;
    };

  const handleCopyClick = () =>
    //MY CODE
    {
      navigator.clipboard.writeText(text);
      props.showalert("Text copied on clipboard","Success");
    };
  //   // const handleCopyClick= ()=>     //HARRY'S CODE
  //   // {
    //   //   let newtext=document.getElementById("data");
  //   //    newtext.select();
  //   //    navigator.clipboard.writeText(newtext.value);
  //   // }
  const handleSpacingClick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces cleared","Success");
  };

  const [text, setText] = useState("");

  return (
    <>
    
      <div className={`container my-5 text-${props.mode === 'light'?'dark':'light'}}` }>
        <h1 className={`container my-5 text-${props.mode === 'light'?'dark':'light'}`}>Write Something here </h1>

        <div className="form-group ">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Capitalized"
            value={text}
            onChange={handleOnChange}
            style = {{resize : "none"}}
            ></textarea>
        </div>
        <div className="col-auto my-5">
          <button disabled = {text.length === 0} className={`btn btn-primary my-2 text-${props.mode === 'light'?'dark':'light'}`} onClick={handleUpClick}>
            Capitalized
          </button>
          <button disabled = {text.length === 0}
            type="button"
            className={`btn btn-warning mx-4 my-2 text-${props.mode === 'light'?'dark':'light'}`}
            onClick={handlelowclick}
          >
            Lower case
          </button>
          <button disabled = {text.length === 0} type="button" className={`btn btn-danger my-2 text-${props.mode === 'light'?'dark':'light'}`}onClick={clean}>
            clear
          </button>
          <button disabled = {text.length === 0}
            type="button"
            className={`btn btn-dark mx-4 my-2 text-${props.mode === 'light'?'dark':'light'}`}
            onClick={handleCopyClick}
            >
            copy
          </button>
          <button disabled = {text.length === 0}
            type="button"
            className={`btn btn-secondary my-2 text-${props.mode === 'light'?'dark':'light'}`}
            
            onClick={handleSpacingClick}
            >
            Extra spacing
          </button>
        </div>
        <div className={`text-${props.mode === 'light'?'dark':'light'}`}>
          
        <h3>Word Count</h3>

        <p >
          

        {/* {words()} words and {text.replaceAll(' ', '').length} characters */}
        {text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.replaceAll(' ', '').length} characters
        </p>
        <p >{0.008 * words()} minutes read</p>
        <br />
        <h1 >Preview Your Text</h1>
        <p>{text.length>0?text:"Enter Something for Preview"}</p>
        </div>
      </div>
      
    </>
  );
};

export default Forms;
