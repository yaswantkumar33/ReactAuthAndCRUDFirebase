import React, { useEffect, useState } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";
import { v4 } from "uuid";
export default function file(props) {
    const [file, setfile] = useState(null);
    const [Fileslist, setfileslist] = useState([]);
    const imageref = ref(storage, "projectFiles/")
    useEffect(() => {
        filelistfun();
    }, [])
    const filelistfun = () => {
        listAll(imageref).then((response) => {
            response.items.forEach((Val) => {
                getDownloadURL(Val).then((furl) => {
                    setfileslist((prev) => {
                        return [...prev, furl]
                    })
                })
            })
        })
    }
    const UploadFile = async () => {
        if (!file) return
        console.log("the name of the uploaded file is ", file.name)
        const fodlerref = ref(storage, `projectFiles/${file.name + v4()}`)
        try {
            await uploadBytes(fodlerref, file);
        } catch (err) {
            console.log(err)
        }
    };
    console.log(Fileslist)
    return (
        <div>
            <input
                type="file"
                onChange={(event) => {
                    setfile(event.target.files[0]);
                }}
            />
            <button onClick={UploadFile}>Upload File</button>
            <div>
                {Fileslist.map((item, index) => {
                    return <img src={item} alt="" key={index} />
                })}
            </div>
        </div>
    );
}
