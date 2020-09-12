import React,{useState} from 'react'
import logo from "./logo.svg"

const Image = ({fileInputState,setFileInputState}) => {

     
    const handleDragOver = (e) => {
        e.preventDefault()
        e.target.classList.add("image-container-over")
    }
    const handleDragLeave = (e) => {
        e.target.classList.remove("image-container-over")
    }
    const handleDrop = (e) => {
        e.preventDefault()
        const inputElement = document.querySelector(".img-upload")
        const fileObj = e.dataTransfer.files
        if(fileObj.length) {
            inputElement.files = fileObj
            updateThumb(fileObj[0])
        }
        e.target.classList.remove("image-container-over")

        
    }
    const updateThumb = (file) => {
        const thumb = document.querySelector(".thumb")
        const imgBox = document.querySelector(".img-box")
        imgBox.style.display = "none"
        thumb.style.display = "block"
        if(file.type.startsWith("image/")) {
            thumb.dataset.label = file.name
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setFileInputState(reader.result)
                thumb.style.backgroundImage = `url('${reader.result}')`
            }
        } else {
            thumb.style.backgroundImage = null
            thumb.dataset.label = "cannot accept this file type"

        }

        

    }
    const handleClick = (e) => {
        const inputElement = document.querySelector(".img-upload")
        inputElement.click()
    }
    const handleChange = (e) => {
        if(e.target.files.length) {
           updateThumb(e.target.files[0])
        }
    }
    return (
        <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragLeave}
        onDrop={handleDrop}
        className="image-container">
            <div className="img-box">
                <img className="img" src={logo} />
                <span className="img-span">Drag & Drop your Image Here</span>
            </div>
            <div className="thumb" data-label="myFile.txt"></div>
            <input  onChange={handleChange} accept="image/x-png,image/jpeg"  type="file" name="imgFile" className="img-upload" />
        </div>
    )
}

export default Image
