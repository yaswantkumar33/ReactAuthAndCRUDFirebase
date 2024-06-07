import { ref, uploadBytes } from 'firebase/database'
import React, { useState } from 'react'

export default function file() {
    const [file, setfile] = useState(null)
    const UploadFile = () => {
        const folderef = ref(storagr, `projects/${file.name}`)

    }
    return (
        <div><input type="file" onChange={(event) => {
            setfile(event.target.files);
        }} /><button onClick={UploadFile}>Upload File</button></div>
    )
}
