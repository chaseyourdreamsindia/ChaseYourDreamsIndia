import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import axios from 'axios';
import BASE from '../../api/apis';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';

const MembershipTable = () => {


    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        const fetchMemberships = async () => {
            try {
                const response = await axios.get(`${BASE}/membership`); 
                setMemberships(response.data.memberships);
            } catch (error) {
                console.error('Error fetching memberships data:', error);
            }
        };

        fetchMemberships();
    }, []);

    return (
        <div>
            <Header/>
            <Sidebar/>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Icom</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Credits</TableCell>
                            <TableCell>Validity</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {memberships.map(membership => (
                            <TableRow key={membership._id}>
                                <TableCell><img src={membership.Icon} className='w-14 h-14 rounded'/></TableCell>
                                <TableCell>{membership.Name}</TableCell>
                                <TableCell>{membership.Credits}</TableCell>
                                <TableCell>{membership.Validity}</TableCell>
                                <TableCell>{membership.Type}</TableCell>
                                <TableCell>{membership.Price}</TableCell>
                                <TableCell>{membership.Description}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleAction(membership)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const handleAction = membership => {
    console.log('Action button clicked for membership:', membership);
};

export default MembershipTable;
