import React, {useState, useEffect} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Button,
  Paper,
} from '@mui/material';
import Header from '../../components/Header';
import { Sidebar } from '../../components/admin/Sidebar';

function ReviewsTable() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from API
    fetch('your_api_endpoint_here')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleDeleteReview = reviewId => {
    // Delete review with given ID from API
    fetch(`your_api_endpoint_here/${reviewId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        // Update reviews state after deletion
        setReviews(reviews.filter(review => review.id !== reviewId));
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleSwitchChange = reviewId => {
    // Implement logic to update the status of review with given ID
    console.log(`Switch toggled for review ID ${reviewId}`);
  };

  return (
    <div>
        <Header/>
        <Sidebar/>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Review ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Show</TableCell>
                <TableCell>Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {reviews.map(review => (
                <TableRow key={review.id}>
                <TableCell>{review.id}</TableCell>
                <TableCell>{review.name}</TableCell>
                <TableCell>{review.message}</TableCell>
                <TableCell>{review.rating}</TableCell>
                <TableCell>
                    <Switch
                    checked={review.show}
                    onChange={() => handleSwitchChange(review.id)}
                    />
                </TableCell>
                <TableCell>
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteReview(review.id)}>
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
}

export default ReviewsTable;
