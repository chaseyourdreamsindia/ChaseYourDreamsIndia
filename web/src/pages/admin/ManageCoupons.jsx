import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/admin/Sidebar'
import LinearProgress from '@mui/material/LinearProgress';
import { TableContainer,Table,TableHead,TableCell,TableRow, TableBody } from '@mui/material'
import BASE from '../../api/apis';
import { useNavigate } from 'react-router-dom'

export const ManageCoupons = () => {

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [coupons,setCoupons] = useState([]);

    const getCoupons = () =>{
        setLoading(true);
        fetch(`${BASE}/coupons/`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        }).then(resp=>{
            resp.json().then(dta=>{
                setLoading(false);
                setCoupons(dta.coupons);
            }).catch(er=>{
                setLoading(false);
                console.log(er);
            })
        }).catch(er=>{
            setLoading(false);
            console.log(er);
        })
    }

    const DeleteCoupon = id =>{
        const cpns = [...coupons];
        const index = cpns.findIndex(itm=>itm._id === id);
        if(index >= 0){
            cpns.splice(index,1);
            setCoupons(cpns);
        }
        fetch(`${BASE}/coupons/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            resp.json().then(dta=>{
                if(dta.success){
                    alert(dta.message);
                }else{
                    alert(dta.message);
                }
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getCoupons();
    },[]);  

  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='p-2'>
            {loading && <LinearProgress color='inherit'/>}
            <h1 className='mt-2 text-center'>Manage Coupons</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><h1 className='text-center'>Coupon Code</h1></TableCell>
                            <TableCell><h1 className='text-center'>Coupon Validity</h1></TableCell>
                            <TableCell><h1 className='text-center'>Coupon Limit</h1></TableCell>
                            <TableCell><h1 className='text-center'>Coupon Amount</h1></TableCell>
                            <TableCell><h1 className='text-center'>Coupons Claimed</h1></TableCell>
                            <TableCell><h1 className='text-center'>Coupons Valid for</h1></TableCell>
                            <TableCell><h1 className='text-center'>Active</h1></TableCell>
                            <TableCell><h1 className='text-center'>Actions</h1></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !loading && coupons.map(cpn=>{
                                return(
                                    <TableRow>
                                        <TableCell><h1 className='text-center'>{cpn.code}</h1></TableCell>
                                        <TableCell><h1 className='text-center'><span className='font-bold'>{cpn.validity}</span> Days</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{cpn.limit}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{cpn.amount}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{cpn.claimed}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{cpn.validFor}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{cpn.active ? "Active" : "InActive"}</h1></TableCell>
                                        <TableCell>
                                            <div className='flex flex-row justify-center gap-2'>
                                                <button className='p-2 bg-black text-white' onClick={()=>navigate(`/editCoupon/${cpn._id}`)}>Edit</button>
                                                <button className='p-2 bg-red-600 text-white' onClick={()=>DeleteCoupon(cpn._id)}>Delete</button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}
