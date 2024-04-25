import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Switch,
    Paper,
    Box,
    CircularProgress,
    Dialog,
} from '@mui/material';
import axios from 'axios';
import BASE from '../../api/apis';

const ViewReviews = () => {
    const [data, setData] = useState();
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE}/review/reviews`);
                setData(response.data.reviews);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    });

    return (
        <div>
            <Dialog open={modal}>
                <Box className="p-5 bg-white rounded">
                    <CircularProgress/>
                </Box>
            </Dialog>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Show Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.map(row => (
                                <TableRow key={row._id}>
                                    <TableCell>{row.Name}</TableCell>
                                    <TableCell>{row.Message}</TableCell>
                                    <TableCell>{row.Rating}</TableCell>
                                    <TableCell>
                                        <Switch checked={row.Show} onChange={(e) => { 
                                            setModal(true);
                                            axios.put(`${BASE}/review/update-review/${row._id}`,{...row,Show:e.target.checked}).then(resp=>{
                                                setModal(false);
                                            }).catch(err=>{
                                                setModal(false);
                                                alert(err.message);
                                            })
                                        }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ViewReviews;
