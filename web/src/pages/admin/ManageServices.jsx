import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';
import BASE from '../../api/apis';
import { useNavigate } from 'react-router-dom'
import { TableContainer,Table,TableRow,TableCell,TableHead,TableBody, Dialog, LinearProgress } from '@mui/material';

const ManageServices = () =>{

    const [services,setServices] = useState([]);
    const [loading,setLoading]  = useState(false);
    const [dialog,setDialog] = useState(false);
    const navigate = useNavigate();

    const getServices = async ()=>{
        setLoading(true);
        fetch(`${BASE}/services/all`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            resp.json().then(dta=>{
                setServices(dta.services);
                setLoading(false);
            }).catch(err=>console.log(err))
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getServices();
    },[]);

    return(
        <div>
            <Header/>
            <Sidebar/>
            {loading && <LinearProgress color="inherit"/>}
            <Dialog open={dialog}>
                <div className='p-3'>
                    <h1>Please wait.....</h1>
                </div>
            </Dialog>
            <div className='mt-5'>
                <h1 className='text-center'>Manage Services </h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><h1 className='text-center'>Name</h1></TableCell>
                                <TableCell><h1 className='text-center'>Category</h1></TableCell>
                                <TableCell><h1 className='text-center'>Duration</h1></TableCell>
                                <TableCell><h1 className='text-center'>Price</h1></TableCell>
                                <TableCell><h1 className='text-center'>Action</h1></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                !loading && services.map(srv=>{
                                    return(
                                        <TableRow>
                                            <TableCell><h1 className='text-center'>{srv.name}</h1></TableCell>
                                            <TableCell><h1 className='text-center'>{srv.category}</h1></TableCell>
                                            <TableCell><h1 className='text-center'>{srv.duration}</h1></TableCell>
                                            <TableCell><h1 className='text-center'>{srv.price}</h1></TableCell>
                                            <TableCell>
                                                <div className='flex flex-row justify-center items-center gap-2'>
                                                    <button className='p-2 bg-black text-white' onClick={()=>navigate(`/editservice/${srv._id}`)}>Edit</button>
                                                    <button className='p-2 bg-red-600 text-white' onClick={()=>{
                                                        setDialog(true);
                                                        const serv = [...services];
                                                        const index = services.findIndex(itm=>itm._id === srv._id);
                                                        if(index >= 0){
                                                            serv.splice(index,1);
                                                            setServices(serv);
                                                        }
                                                        fetch(`${BASE}/services/${srv._id}`,{
                                                            method:"DELETE",
                                                            headers:{
                                                                "Content-Type":"application/json"
                                                            }
                                                        }).then(resp=>{
                                                            resp.json().then(dta=>{
                                                                setDialog(false);
                                                                // alert(dta.message);
                                                            }).catch(err=>console.log(err))
                                                        }).catch(err=>console.log(err))
                                                    }}>Delete</button>
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
    );
};

export default ManageServices;