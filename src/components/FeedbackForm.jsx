import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);

        if (newText === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (newText !== '' && newText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            // Handle form submission logic here
            console.log("Form submitted with text:", text);
        }
    };

    const [number, setNumber] = useState(0);
    const add = () => {
        setNumber(number + 1);
    };

    return (
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <h1>How would you like to rate our service</h1>

                <div className="input-group">
                    <input 
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                        className="formpd"
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
            <div>
                <h1>NUMBER = {number}</h1>
            </div>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default FeedbackForm;
