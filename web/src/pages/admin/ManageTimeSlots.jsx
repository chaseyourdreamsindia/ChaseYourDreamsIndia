import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';
import { Table,TableContainer,TableRow,TableCell,TableHead,TableBody, Dialog } from '@mui/material';
import BASE from '../../api/apis';
import Switch from '@mui/material/Switch'
import LinearProgress from '@mui/material/LinearProgress'

const ManageTimeSlots = () =>{

    const [timeslots,setTimeSlots] = useState([]);
    const [loading,setLoading] = useState(false);
    const [dialog,setDialog] = useState(false);

    const FetchTimeSlots = () =>{
        setLoading(true);
        fetch(`${BASE}/timeslot/all`,{
            method:"GET"
        }).then(resp=>{
            resp.json().then(dta=>{
                setLoading(false);
                setTimeSlots(dta.timeslots)
            })
        }).catch(err=>{
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(()=>{
        FetchTimeSlots();
    },[]);

    return(
        <div>
            <Header/>
            <Sidebar/>
            <Dialog open={dialog}>
                <div className='w-32 p-2'>
                    <h1>Please wait....</h1>
                </div>
            </Dialog>
            {loading && <LinearProgress color='inherit'/>}
            <h1 className='mt-3 text-center'>Manage TimeSlots</h1>
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><h1 className='text-center'>Time slot</h1></TableCell>
                                <TableCell><h1 className='text-center'>Status</h1></TableCell>
                                <TableCell><h1 className='text-center'>Premium</h1></TableCell>
                                <TableCell><h1 className='text-center'>Actions</h1></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                (!loading) && timeslots.map(itm=>{
                                    return(<TableRow>
                                        <TableCell><h1 className='text-center'>{itm.time}</h1></TableCell>
                                        <TableCell>
                                            <div className='flex flex-row justify-center items-center'>
                                                <Switch checked={itm.Active} onChange={e=>{
                                                    const index = timeslots.findIndex(t=>t.time === itm.time);
                                                    const slots = [...timeslots];
                                                    slots[index].Active = e.target.checked;
                                                    setTimeSlots(slots);
                                                    setDialog(true);
                                                    fetch(`${BASE}/timeslot/update`,{
                                                        method:"PUT",
                                                        body:JSON.stringify(itm),
                                                        headers:{
                                                            "Content-Type":"application/json"
                                                        }
                                                    }).then(resp=>{ 
                                                        resp.json().then(dta=>{
                                                            if(dta.success){
                                                                setDialog(false);
                                                            }else{
                                                                alert(dta.message)
                                                            }
                                                        }).catch(err=>{
                                                            setDialog(false);
                                                            console.log(err);
                                                        })
                                                    }).catch(err=>{
                                                        setDialog(false);
                                                        console.log(err);
                                                    })
                                                }}/>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex flex-row justify-center items-center'>
                                                <Switch checked={itm.premium} onChange={e=>{
                                                    const index = timeslots.findIndex(t=>t.time === itm.time);
                                                    const slots = [...timeslots];
                                                    slots[index].premium = e.target.checked;
                                                    setTimeSlots(slots);
                                                    setDialog(true);
                                                    fetch(`${BASE}/timeslot/update`,{
                                                        method:"PUT",
                                                        body:JSON.stringify(itm),
                                                        headers:{
                                                            "Content-Type":"application/json"
                                                        }
                                                    }).then(resp=>{ 
                                                        resp.json().then(dta=>{
                                                            if(dta.success){
                                                                setDialog(false);
                                                            }else{
                                                                alert(dta.message)
                                                            }
                                                        }).catch(err=>{
                                                            setDialog(false);
                                                            console.log(err);
                                                        })
                                                    }).catch(err=>{
                                                        setDialog(false);
                                                        console.log(err);
                                                    })
                                                }}/>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className='flex flex-row justify-center items-center' onClick={e=>{
                                                setDialog(true);
                                                const index = timeslots.findIndex(t=>t.time === itm.time);
                                                const slots = [...timeslots];
                                                slots.splice(index,1);
                                                setTimeSlots(slots);
                                                fetch(`${BASE}/timeslot/delete`,{
                                                    method:"DELETE",
                                                    headers:{
                                                        "Content-Type":"application/json"
                                                    },
                                                    body:JSON.stringify(itm)
                                                }).then(resp=>resp.json().then(dta=>{
                                                    setDialog(false);
                                                }).catch(err=>{
                                                    console.log(err);
                                                }))
                                            }}>
                                                <button className='p-2 bg-red-700 text-white'>Delete</button>
                                            </div>
                                        </TableCell>
                                    </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ManageTimeSlots;