import React, { useState } from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress';
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'; 
import { storage } from '../../firebase/firebase';
import { v4 } from 'uuid'
import axios from 'axios';

export const AddMembership = () => {
    const [data, setData] = useState({
        Name: '',
        Credits: '',
        Validity: '',
        Price: '',
        Type: 'select',
        KeyPoints: [],
        Description:"",
        Bg:"",
        CardImg:"",
        Icon:""
    });

    const [loading, setLoading] = useState(false);

    const [bgImg,setBgimg] = useState("");
    const [icon,setIcon] = useState("");
    const [banner,setBanner] = useState("");

    const [key, setKey] = useState('');

    const ChangeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async e => {
        e.preventDefault();

        const refer = ref(storage,`/memberships/${bgImg.name + v4()}`);
        await uploadBytes(refer,bgImg).then(async resp=>{
            await getDownloadURL(resp.ref).then(async url=>{
                data.Bg = url;
                const refer2 = ref(storage,`/memberships/${icon.name + v4()}`);
                await uploadBytes(refer2,icon).then(async resp=>{
                    await getDownloadURL(resp.ref).then(async url=>{
                        data.Icon = url;
                        const refer3 = ref(storage,`/memberships/${banner.name + v4()}`);
                        await uploadBytes(refer3,banner).then(async resp=>{
                            await getDownloadURL(resp.ref).then(url=>{
                                data.CardImg = url;
                                axios.post(`${BASE}/membership/add`,data).then(resp=>{
                                    alert(resp.data.message);
                                }).catch(Err=>{
                                    console.log(Err);
                                })
                            }).catch(err=>{
                                console.log(err);
                            })
                        }).catch(err=>console.log(err))
                    }).catch(err=>{
                        console.log(err);
                    })
                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(Err=>{
            console.log(Err);
        })

        console.log(data);
    };

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="p-2">
                {loading && <LinearProgress color="inherit" />}
                <h1 className="text-center mt-2">Add Membership</h1>
                <form
                    action=""
                    className="flex flex-col justify-center items-center gap-3 mt-10"
                    onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Membership Name "
                        required
                        className="border p-2 w-72 uppercase"
                        value={data.Name}
                        onChange={ChangeHandler}
                        name="Name"
                    />
                    <input
                        type="number"
                        placeholder="Enter Membership Credits "
                        required
                        className="border p-2 w-72"
                        value={data.Credits}
                        onChange={ChangeHandler}
                        name="Credits"
                    />
                    <input
                        type="text"
                        placeholder="Enter Membership Validity in mnths"
                        className="border p-2 w-72"
                        value={data.Validity}
                        onChange={ChangeHandler}
                        name="Validity"
                    />
                    <input
                        type="text"
                        placeholder="Enter Membership Amount "
                        required
                        className="border p-2 w-72"
                        value={data.Price}
                        onChange={ChangeHandler}
                        name="Price"
                    />
                    <h1 className="text-left w-72 text-xs uppercase text-gray-600">
                        * Type
                    </h1>
                    <select
                        name=""
                        id=""
                        className="border p-2 w-72"
                        onChange={e => {
                            setData({ ...data, Type: e.target.value });
                        }}
                        required
                        value={data.Type}>
                        <option value="select" className="border p-2 w-72">
                            Select
                        </option>
                        <option value="BRONZE" className="border p-2 w-72">
                            Bronze
                        </option>
                        <option value="SILVER" className="border p-2 w-72">
                            Silver
                        </option>
                        <option value="GOLD" className="border p-2 w-72">
                            Gold
                        </option>
                        <option value="PLATINUM" className="border p-2 w-72">
                            Platinum
                        </option>
                        <option value="DIAMOND" className="border p-2 w-72">
                            Diamond
                        </option>
                        <option value="STUDENTEMP" className="border p-2 w-72">
                            STUDENTEMP
                        </option>
                    </select>
                    <label htmlFor=""></label>
                    <div className="flex flex-row items-center justify-between w-72">
                        <input
                            type="text"
                            className="w-60 border p-2"
                            placeholder="Enter Service key Points"
                            value={key}
                            onChange={e => setKey(e.target.value)}
                        />
                        <span
                            className="material-symbols-outlined p-2 bg-black text-white cursor-pointer"
                            onClick={() => {
                                const dta = { ...data };
                                dta.KeyPoints.push(key);
                                setData(dta);
                                setKey('');
                            }}>
                            add
                        </span>
                    </div>
                    <div>
                        {data.KeyPoints.length > 0 &&
                            data.KeyPoints.map(point => {
                                return <div>{point}</div>;
                            })}
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description' className='w-72 mt-2 border border-gray-300 rounded p-2' onChange={e=>{
                        setData({...data,Description:e.target.value});
                    }}></textarea>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                            <label htmlFor="bgimg">Select Bg img </label>
                            <input type="file" name="" id="bgimg" onChange={e=>setBgimg(e.target.files[0])}/>
                            <label htmlFor="banner">Select Banner Img  </label>
                            <input type="file" name="" id="banner" onChange={e=>setBanner(e.target.files[0])}/>
                            <label htmlFor="icon">Select icon img </label>
                            <input type="file" name="" id="icon" onChange={e=>setIcon(e.target.files[0])}/>
                    </div>
                    <input
                        type="submit"
                        className="border p-2 w-72 bg-black text-white transition hover:text-black hover:bg-white cursor-pointer rounded"
                    />
                </form>
            </div>
        </div>
    );
};
