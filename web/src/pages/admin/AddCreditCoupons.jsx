import React, { useState } from 'react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/admin/Sidebar'
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress';

export const AddCreditCoupon = () => {

    const [data,setData] = useState({
        Code:"",
        Validity:"",
        Limit:"",
        Credits:"",
    });

    const [loading,setLoading] = useState(false);

    const ChangeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
        if(data.validFor !== "select"){
            fetch(`${BASE}/couponcredits/add`,{
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
                <h1 className='text-center mt-2'>Add Credit Coupon</h1>
                <form action="" className='flex flex-col justify-center items-center gap-3 mt-10' onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter Coupon code ' required className='border p-2 w-72 uppercase' value={data.Code} onChange={ChangeHandler} name="Code"/>
                    <input type="text" placeholder='Enter Coupon Validity ' required className='border p-2 w-72' value={data.Validity} onChange={ChangeHandler} name="Validity"/>
                    <input type="number" placeholder='Enter Coupon Limit ' required className='border p-2 w-72' value={data.Limit} onChange={ChangeHandler} name="Limit"/>
                    <input type="number" placeholder='Enter Coupon Credits ' required className='border p-2 w-72' value={data.Credits} onChange={ChangeHandler} name="Credits"/>
                    <input type="submit" className='border p-2 w-72 bg-black text-white transition hover:text-black hover:bg-white cursor-pointer rounded' />
                </form>
            </div>
        </div>
    )
}
