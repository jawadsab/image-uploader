import React from 'react'
import logo from "./logo.svg"

const Image = () => {
    return (
        <div className="image-container">
            <div className="img-box">
                <img className="img" src={logo} />
                <span className="img-span">Drag & Drop your Image Here</span>
            </div>
            {/* <div className="thumb" data-label="myFile.txt">

            </div> */}
            <input type="file" name="imgFile" className="img-upload" />
        </div>
    )
}

export default Image
