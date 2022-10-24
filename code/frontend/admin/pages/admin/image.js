import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from '../../utils/axios';

const image = () => {

    const [files,setFiles] = useState([])
    const [imgadmin,setImgadmin] = useState('');
    const [imgportal,setImgportal] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(files);
        const fileData = new FormData();
        fileData.append("name",files[0].name)
        fileData.append("files",files[0]);
        fileData.append("filename",Date.now() + files[0].name)
        for (var key of fileData.entries()) {
			console.log(key[0] + ', ' + key[1])
		}

        axios.post(`/uploadAdmin`,fileData).then((res)=>{
            console.log(res)
            setImgadmin(res.data.path)
        }).catch((err)=>{
            console.log(err)
        })

        axios.post(`/uploadPortal`,fileData).then((res)=>{
            console.log(res)
            setImgportal(res.data.path)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
                <input name='files' type="file" onChange={e=>setFiles(e.target.files)} />
                <button type='submit' className='btn'>Submit</button>
            </form>
            {(imgadmin) && (
                <img src={'/uploads/' + imgadmin}/>
            ) }
        </div>
    )
}

export default image;