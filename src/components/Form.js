import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CustomAlert from './CustomAlert';

export default function Form(props) {

    const [textInput, setNewText] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleUpperCase = () =>    // Function to handle Convert to Upper Case Logic
    {
        let UpperCaseText = textInput.toUpperCase();
        setNewText(UpperCaseText);
    }
    const handleLowerCase = () =>    // Function to handle Convert to Lower Case Logic
    {
        let LowerCaseText = textInput.toLowerCase();
        setNewText(LowerCaseText);
    }
    const handleClearCase = () =>    // Function to handle Clear Text Logic
    {
        setNewText('');
    }
    const handleRemoveExtraSpaces = () =>  // Function to handle Logic Removing Extra Space.
    {
        let newText = textInput.replace(/\s+/g, ' ').trim();
        setNewText(newText);
    };
    
    const handleCapitalizeFirstLetter = () => {
        let newText = textInput
            .split(/([.!?]\s*)/g)  // Split text by sentence-ending punctuation followed by space
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .join('');
        setNewText(newText);
    };
    
    const handleCopyEntireText = () => {
        navigator.clipboard.writeText(textInput); // Copies text to clipboard
        setShowAlert(true);  // Show the custom success alert
    };

    const handleOnChange = (event) =>        // Function to handle the change in the textArea
    {
        setNewText(event.target.value);
    }

    const closeAlert = () => {
        setShowAlert(false);  // Close the alert
    };

    let analyzerStyle = {    // Styling of Text Analyzer Area

        paddingTop: '0.6rem',
        backgroundColor: 'rgb(231, 231, 231)',
        display: 'flex',
        borderRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        border: '2px solid black',
        borderTop: '0'

    };
    let textAreaStyle = {

        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        border: '2px solid black'
    }

    return (
        <div className="container formBtnContainer">

            <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Enter the Text to Analyze</h2>

            {showAlert && <CustomAlert message="Text copied to clipboard!" onClose={closeAlert} />}  {/* Show alert */}

            <div className="textAndAnalyzerContainer mb-3">

                <textarea className="form-control container" value={textInput} onChange={handleOnChange}
                    rows="8" id="textArea1" name="text" style={{
                        ...textAreaStyle, backgroundColor: props.mode === 'light' ? 'white' : '#fffff',
                        color: props.mode === 'light' ? 'black' : 'black'
                    }}>
                </textarea>

                <div className="container analyzerContainer" style={analyzerStyle}>

                    <p id="charactersPara"><strong>Characters: </strong>{textInput.length}</p>
                    <p id="wordsPara"><strong>Words:</strong> {textInput.trim().split(/\s+/).filter(word => word).length}</p>
                    <p id="sentencePara"><strong>Sentences:</strong> {textInput.split(/[.!?]+\s*/).filter(sentence =>
                        sentence.trim().length > 0).length}
                    </p>
                    <p id="ReadingTimePara"><strong>Estimated Reading Time: </strong>{0.008 * textInput.split(" ").filter(
                        (element) => element.length !== 0).length.toPrecision(2)} mins
                    </p>

                </div>
            </div>

            <div className="container buttonsContainer mt-4">
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleRemoveExtraSpaces}>Remove Unwanted whitespaces</button>
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleCapitalizeFirstLetter}>Capitalize Sentences</button>
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleCopyEntireText}>Copy Entire Text</button>
                <button className={`btn btn-success ${textInput.length > 0 ? 'active' : 'disabled'}`} onClick={handleClearCase}>Clear</button>  
            </div>
           
        </div>



    )
}
Form.propTypes = {
    headingText: PropTypes.string      // The data type of title is set to string
}
