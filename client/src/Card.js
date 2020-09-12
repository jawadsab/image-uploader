import React,{useState} from 'react'
import Image from "./Image"

const Card = () => {


    const [fileInputState,setFileInputState] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch("/api/upload",{
                method:"POST",
                body:JSON.stringify({data:fileInputState}),
                headers:{"Content-type":"application/json"}
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="card-container">
            <div className="header">
                <h3>Upload your image</h3>
                <p>file should be .jpeg or .png</p>
            </div>
            <form>
                <Image fileInputState={fileInputState} setFileInputState={setFileInputState} />
            </form>
            <span>or</span>
            <button onClick={handleSubmit}  id="custom-btn" className="submit-btn">Upload</button>
        </div>
    )
}

export default Card
