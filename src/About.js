import React, { useState } from 'react';

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#042743',
  });

  const [BtnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark Mode');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: '#042743',
      });
      setBtnText('Enable Light Mode');
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h3>About Us</h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div style={myStyle} id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={myStyle} className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
              </div>
            </div>
          </div>
          <div style={myStyle} className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div style={myStyle} className="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={toggleStyle}>{BtnText}</button>
        </div>
      </div>
    </>
  );
}





