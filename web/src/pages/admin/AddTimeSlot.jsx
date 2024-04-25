import React, { useState } from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';
import Switch from '@mui/material/Switch'
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress';

const AddTimeSlot = () =>{

    const [time,setTime] = useState();
    const [checked,setChecked] = useState(false);
    const [premium,setPremium] = useState(false);
    const [loading,setLoading] = useState(false);

    return(
        <div>
            <Header/>
            <Sidebar/>
            {loading && <LinearProgress color='inherit'/>}
            <div className='mt-3'>
                <h1 className='text-center'>Add Time Slot</h1>
                <form action="" onSubmit={e=>{
                    e.preventDefault();
                    setLoading(true);
                    fetch(`${BASE}/timeslot/addtimeslot`,{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify({
                            time:time,
                            Active:checked,
                            premium:premium
                        })
                    }).then(resp=>resp.json().then(dta=>{
                        alert(dta.message);
                        setLoading(false);
                    })).catch(err=>{
                        console.log(err);
                        setLoading(false);
                    })
                }}>
                    <div className='flex flex-col gap-2 items-center mt-10'>
                        <input type="time" placeholder='Enter Time' className='border p-2 w-72' required onChange={e=>setTime(e.target.value)}/>
                        <div className='flex flex-row items-center justify-between w-72'>
                            <label htmlFor="" className='text-xs'>Status</label>
                            <Switch onChange={e=>{
                                setChecked(e.target.checked);
                            }}/>
                        </div>
                        <div className='flex flex-row items-center justify-between w-72'>
                            <label htmlFor="" className='text-xs'>Premium</label>
                            <Switch onChange={e=>{
                                setPremium(e.target.checked);
                            }}/>
                        </div>
                        {!loading && <input type="submit" className='border p-2 w-72 bg-black text-white transition hover:text-black hover:bg-white cursor-pointer rounded' />}
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default AddTimeSlot;