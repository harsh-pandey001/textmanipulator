
import React, {useState} from "react";


export const Aboutus = (props) => {

  // const [mystyled, setMystyled] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });

let mystyled = {
 color : props.mode === 'dark'?'white':'#183148',
 backgroundColor: props.mode === 'dark'?'#183148':'white'
}  

  // const [btn, setbtn] = useState("Switch to dark mode")
  // const [btnc, setbtnc] = useState("btn-dark")

  // const mode = () => {
  //   if (mystyled.color === "black") {
  //     setMystyled({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     });
  //     setbtn("Switch to Light mode")
  //     setbtnc("btn-light")
  //   }
  //   else{
  //     setMystyled({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     });
  //     setbtn("Switch to dark mode")
  //     setbtnc("btn-dark")
  //   }
    
  // };

  return (
    <>
      <div className="container my-5" style={mystyled}>
        <h1 className="my-5"> About Us </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={mystyled}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyled}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              
            >
              <div className="accordion-body" style={mystyled}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                className es that we use to style each element. These className
                es control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyled}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyled}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className es that we use to style each element.
                These className es control the overall appearance, as well as
                the showing and hiding via CSS transitions. You can modify any
                of this with custom CSS or overriding our default variables.
                It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyled}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyled}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate className es that we use to style each element.
                These className es control the overall appearance, as well as
                the showing and hiding via CSS transitions. You can modify any
                of this with custom CSS or overriding our default variables.
                It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
          {/* <div className="container my-3" style={mystyled}>
            <button type="button" className={`btn ${btnc}`} onClick = {mode}>
              {btn}
            </button> </div> */}
            
        </div>
      </div>
    </>
  );
};
