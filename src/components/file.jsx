import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";
export default function file(props) {
    const [file, setfile] = useState(null);
    const UploadFile = async () => {
        if (!file) return
        console.log("the name of the uploaded file is ", file.name)
        const fodlerref = ref(storage, `projectFiles/${file.name}`)
        try {
            await uploadBytes(fodlerref, file);
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <div>
            <input
                type="file"
                onChange={(event) => {
                    setfile(event.target.files[0]);
                }}
            />
            <button onClick={UploadFile}>Upload File</button>
        </div>
    );
}
