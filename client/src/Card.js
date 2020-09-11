import React from 'react'
import Image from "./Image"

const Card = () => {

    const handleChoose = () => {
        const realBtn = document.getElementById("real-file")
        const customBtn = document.getElementById("custom-btn")
        realBtn.click()
    }
    return (
        <div className="card-container">
            <div className="header">
                <h3>Upload your image</h3>
                <p>file should be .jpeg or .png</p>
            </div>
            <Image />
            <span>or</span>
            <input type="file" id="real-file" hidden="hidden" />
            <button onClick={handleChoose} id="custom-btn" className="choose-btn">Choose a file</button>
        </div>
    )
}

export default Card
