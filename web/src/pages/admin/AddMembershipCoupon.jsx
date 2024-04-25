import React, { useState } from 'react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/admin/Sidebar'
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress';

export const Addmembershipcoupon = () => {

    const [data,setData] = useState({
        code:"",
        validity:"",
        limit:"",
        Amount:"",
        type:"select",

    });

    const [loading,setLoading] = useState(false);

    const ChangeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        setLoading(true);
        // console.log(data);
        if(data.validFor !== "select"){
            fetch(`${BASE}/membershipcoupon/add`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(resp=>{
                resp.json().then(dta=>{
                    setLoading(false)
                    if(dta.success){
                        alert(dta.message)
                    }else{
                        alert(dta.message)
                    }
                }).catch(err=>{
                    setLoading(false)
                    console.log(err);
                })
            }).catch(er=>{
                setLoading(false)
                console.log(er);
            })
        }else{
            alert("please select a valid for option");
        }
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <div className='p-2'>
                {loading && <LinearProgress color="inherit"/>}
                <h1 className='text-center mt-2'>Add Membership Coupon</h1>
                <form action="" className='flex flex-col justify-center items-center gap-3 mt-10' onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter Coupon code ' required className='border p-2 w-72 uppercase' value={data.code} onChange={ChangeHandler} name="code"/>
                    <input type="text" placeholder='Enter Coupon Validity in months ' required className='border p-2 w-72' value={data.validity} onChange={ChangeHandler} name="validity"/>
                    <input type="text" placeholder='Enter Coupon Limit ' required className='border p-2 w-72' value={data.limit} onChange={ChangeHandler} name="limit"/>
                    <input type="text" placeholder='Enter Coupon Amount ' required className='border p-2 w-72' value={data.Amount} onChange={ChangeHandler} name="Amount"/>
                    <h1 className='text-left w-72 text-xs uppercase text-gray-600'>* Valid for</h1>
                    <select name="" id="" className='border p-2 w-72' onChange={e=>{
                        setData({...data,type:e.target.value});
                    }} required value={data.type}>
                        <option value="select" className='border p-2 w-72'>Select</option>
                        <option value="BRONZE" className='border p-2 w-72'>BRONZE</option>
                        <option value="SILVER" className='border p-2 w-72'>SILVER</option>
                        <option value="GOLD" className='border p-2 w-72'>GOLD</option>
                        <option value="PLATINUM" className='border p-2 w-72'>PLATINUM</option>
                        <option value="DIAMOND" className='border p-2 w-72'>DIAMOND</option>
                        <option value="STUDENTEMP" className='border p-2 w-72'>STUDENTEMP</option>
                    </select>
                    <input type="submit" className='border p-2 w-72 bg-black text-white transition hover:text-black hover:bg-white cursor-pointer rounded' />
                </form>
            </div>
        </div>
    )
}
