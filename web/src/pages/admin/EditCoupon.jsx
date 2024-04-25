import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/admin/Sidebar'
import BASE from '../../api/apis';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom'

export const EditCoupon = () => {

    const { id } = useParams();

    const [data,setData] = useState({
        code:"",
        validity:"",
        limit:"",
        amount:"",
        validFor:"select"
    });

    const [loading,setLoading] = useState(false);

    const ChangeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        if(data.validFor !== "select"){
            fetch(`${BASE}/coupons/${id}`,{
                method:"PUT",
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

    const getCoupon = () =>{
        setLoading(true);
        fetch(`${BASE}/coupons/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            resp.json().then(dta=>{
                if(dta.success){
                    setData({...dta.coupon});
                    setLoading(false);
                }
            }).catch(err=>{
                console.log(err);
                setLoading(false);
            })
        }).catch(err=>{
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(()=>{
        getCoupon();
    },[]);

    return (
        <div>
            <Header />
            <Sidebar />
            <div className='p-2'>
                {loading && <LinearProgress color="inherit"/>}
                <h1 className='text-center mt-2'>Edit Coupon</h1>
                <form action="" className='flex flex-col justify-center items-center gap-3 mt-10' onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter Coupon code ' required className='border p-2 w-72' value={data.code} onChange={ChangeHandler} name="code"/>
                    <input type="text" placeholder='Enter Coupon Validity ' required className='border p-2 w-72' value={data.validity} onChange={ChangeHandler} name="validity"/>
                    <input type="text" placeholder='Enter Coupon Limit ' required className='border p-2 w-72' value={data.limit} onChange={ChangeHandler} name="limit"/>
                    <input type="text" placeholder='Enter Coupon Amount ' required className='border p-2 w-72' value={data.amount} onChange={ChangeHandler} name="amount"/>
                    <h1 className='text-left w-72 text-xs uppercase text-gray-600'>* Valid for</h1>
                    <select name="" id="" className='border p-2 w-72' onChange={e=>{
                        setData({...data,validFor:e.target.value});
                    }} required value={data.validFor}>
                        <option value="select" className='border p-2 w-72'>Select</option>
                        <option value="students" className='border p-2 w-72'>Students</option>
                        <option value="couples" className='border p-2 w-72'>Couples</option>
                        <option value="individuals" className='border p-2 w-72'>Individuals</option>
                        <option value="corporate" className='border p-2 w-72'>Corporate</option>
                        <option value="family" className='border p-2 w-72'>Family</option>
                        <option value="educational_institutions" className='border p-2 w-72'>Educational Institutions</option>
                    </select>
                    <input type="submit" className='border p-2 w-72 bg-black text-white transition hover:text-black hover:bg-white cursor-pointer rounded' />
                </form>
            </div>
        </div>
    )
}
