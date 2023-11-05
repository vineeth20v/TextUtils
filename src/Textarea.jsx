import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./App.css";

// Define the Alert component
function Alert({ message, type }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default function Textarea(props) {
  const [text, setText] = useState("");
  const [fWord, setFindWord] = useState("");
  const [rWord, setReplaceWord] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    document.title = "Textutils-Uppercase";
    showAlert("Uppercase", "success");
  };

  const handleLow = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    document.title = "Textutils-LowerCase mode";
    showAlert("Lowercase enabled", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    setFindWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    setReplaceWord(event.target.value);
  };

  const handleReplaceClick = () => {
    let newText = text.replace(new RegExp(fWord, "g"), rWord);
    setText(newText);
    document.title = "Textutils-replace mode";
    showAlert("Replace enabled", "success");
  };

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showAlert("copied", "success");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const handleClear = () => {
    let newtext = "";
    setText(newtext);
    showAlert("Text cleared enabled", "success");
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";

    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
      }
    });
    setText(joinedWords);
    showAlert("Removed extra spaces enabled", "success");
  };

  const handleFirstLetterUppercase = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    setText(upper);
    showAlert("First letter uppercase enabled", "success");
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" }); // Hide the alert after a few seconds
    }, 1500); // Adjust the timeout as needed
  };

  return (
    <div className="my-2">
      {alert.message && <Alert message={alert.message} type={alert.type} />}
      <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
        Enter the text to analyze
      </h3>
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <textarea
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "#FAF9F6" : "#332940",
          }}
          className="form-control my-2"
          value={text}
          onChange={handleOnChange}
          id="floatingTextarea"
          rows={8}></textarea>
      </div>
      <div className="container my-2">
        <div className="d-flex">
          <button className="btn btn-primary my-2 me-2" onClick={handleUp}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2" onClick={handleLow}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleFirstLetterUppercase}>
            First Word To Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={copyText}>
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h4 style={{ color: props.mode === "light" ? "#332940" : "#FAF9F6" }}>
          Your text summary
        </h4>
        <p style={{ color: props.mode === "light" ? "#332940" : "#FAF9F6" }}>
          Words: {text.split(" ").length} and {text.length} characters
        </p>
        <p style={{ color: props.mode === "light" ? "#332940" : "#FAF9F6" }}>
          Minutes to read: {0.008 * text.split(" ").length}
        </p>
      </div>
      <div className="my-2">
        <textarea
          className="mx-2"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "#FAF9F6" : "#332940",
          }}
          value={fWord}
          onChange={handleFindChange}
          placeholder="Enter the word to find"
        />

        <textarea
          className="mx-1"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "#FAF9F6" : "#332940",
          }}
          value={rWord}
          onChange={handleReplaceChange}
          placeholder="Enter the word to replace with"
        />

        <button
          className="btn btn-primary my-2 d-block mx-2"
          onClick={handleReplaceClick}>
          Replace
        </button>
      </div>
    </div>
  );
}
