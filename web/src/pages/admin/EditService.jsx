import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase';
import { v4 } from 'uuid'
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress'
import { useParams } from 'react-router-dom'
import Switch from '@mui/material/Switch'

export const EditService = () => {

    const [data, setData] = useState({
        name: "",
        price: "",
        duration: "",
        keyPoints: [],
        background: "",
        category: "",
        canBook:true
    });

    const [Loading, setLoading] = useState(false);
    const [keyPoint, setKeyPoint] = useState("");
    const [bg, setBg] = useState({});
    
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`${BASE}/services/one/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(serviceData => {
                    setData(serviceData.service);
                    // console.log(serviceData)
                    setLoading(false);
                })
                .catch(error => {
                    console.error('There was a problem fetching the service data:', error);
                    setLoading(false);
                });
        }
    }, []);

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Header />
            <Sidebar />
            {Loading && <LinearProgress color="inherit" />}
            <h1 className='text-center mt-2'>Edit Service</h1>
            <form action="" className='flex flex-col justify-center items-center gap-2 pt-10' onSubmit={async e => {
                e.preventDefault();
                if (bg) {
                    setLoading(true);
                    const refer = ref(storage, `/services/${bg.name + v4()}`);
                    await uploadBytes(refer, bg).then(resp => getDownloadURL(resp.ref).then(url => {
                        fetch(`${BASE}/services/update/${id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({...data, background:url})
                        }).then(resp => resp.json().then(dta => {
                            setLoading(false);
                            console.log(dta);
                        }).catch(err => console.log(err))).catch(err => {
                            console.log(err);
                            setLoading(false);
                        })
                    })).catch(err => { console.log(err); setLoading(false); })
                } else {
                    fetch(`${BASE}/services/update/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({...data})
                    }).then(resp => resp.json().then(dta => {
                        setLoading(false);
                        console.log(dta);
                    }).catch(err => console.log(err))).catch(err => {
                        console.log(err);
                        setLoading(false);
                    })
                }
                console.log(data);
            }}>
                <h1 className='text-xs text-left w-72'>* Select a Category</h1>
                <select name="category" id="category" className='border p-2 w-72' required onChange={changeHandler} value={data.category}>
                    <option value="individuals" className='border p-2 w-72'>Individuals</option>
                    <option value="corporate" className='border p-2 w-72'>Corporate</option>
                    <option value="parent" className='border p-2 w-72'>Parent</option>
                    <option value="educational_institutions" className='border p-2 w-72'>Educational & Professional Institutions</option>
                    <option value="couples" className='border p-2 w-72'>Couples</option>
                    <option value="students" className='border p-2 w-72'>Students</option>
                    <option value="family" className='border p-2 w-72'>Family</option>
                </select>
                <label htmlFor="filef" className='text-xs w-72 text-left'>Select background</label>
                <div className='w-72 flex justify-center'>
                    <input type="file" name="background" id="filef" onChange={e => setBg(e.target.files[0])} accept='image/*' />
                </div>
                <input type="text" placeholder='Enter Service name' className='w-72 border p-2' name="name" onChange={changeHandler} value={data.name} />
                <input type="number" placeholder='Enter Service Price' className='w-72 border p-2' name="price" onChange={changeHandler} value={data.price} />
                <input type="number" placeholder='Enter Service duration in minutes' className='w-72 border p-2' name="duration" onChange={changeHandler} value={data.duration} />
                <div className='flex flex-row items-center justify-between w-72'>
                    <input type="text" className='w-60 border p-2' placeholder='Enter Service key Points' value={keyPoint} onChange={e => setKeyPoint(e.target.value)} />
                    <span
                        className='material-symbols-outlined p-2 bg-black text-white cursor-pointer' onClick={() => {
                            const dta = { ...data };
                            dta.keyPoints.push(keyPoint);
                            setData(dta);
                            setKeyPoint("");
                        }}>add</span>
                </div>
                <div>
                    {
                        data.keyPoints.length > 0 && data.keyPoints.map(point => {
                            return (
                                <div key={point}>{point}</div>
                            );
                        })
                    }
                </div>
                <div className='flex flex-row items-center'>
                    <label htmlFor="switch">Can Book</label>
                    <Switch id="switch" checked={data.canBook} onChange={e=>{
                        setData({...data,canBook:e.target.checked})
                        // console.log(e)
                        // console.log(data)
                    }}/>
                </div>
                {!Loading && <input type="submit" className='w-72 p-2 bg-black text-white transition hover:bg-white hover:text-black rounded' />}
            </form >
        </div >
    )
}
