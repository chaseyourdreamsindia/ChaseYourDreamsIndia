import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { AdminHome } from './pages/admin/AdminHome';
import { AddCoupon } from './pages/admin/AddCoupon';
import { ManageCoupons } from './pages/admin/ManageCoupons';
import { EditCoupon } from './pages/admin/EditCoupon';
import { Addservice } from './pages/admin/Addservice';
import AddTimeSlot from './pages/admin/AddTimeSlot';
import ManageTimeSlots from './pages/admin/ManageTimeSlots';
import ManageServices from './pages/admin/ManageServices';
import { EditService } from './pages/admin/EditService';
import ReviewsTable from './pages/admin/Reviews';
import { AddMembership } from './pages/admin/AddMembership';
import MembershipTable from './pages/admin/MembershipsTable';
import { Addmembershipcoupon } from './pages/admin/AddMembershipCoupon';
import { AddCreditCoupon } from './pages/admin/AddCreditCoupons';
import ViewReviews from './pages/admin/ViewReviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome/>}/>
      <Route path="/addcoupon" element={<AddCoupon/>}/>
      <Route path="/manageCoupons" element={<ManageCoupons/>}/>
      <Route path="/editCoupon/:id" element={<EditCoupon/>}/>
      <Route path="/addservice" element={<Addservice/>}/>
      <Route path="/addtimeslot" element={<AddTimeSlot/>}/>
      <Route path="/managetimeslots" element={<ManageTimeSlots/>}/>
      <Route path="/manageservices" element={<ManageServices/>}/>
      <Route path="/editservice/:id" element={<EditService/>}/>
      <Route path="/manageReviews" element={<ReviewsTable/>}/>
      <Route path="/addmembership" element={<AddMembership/>}/>
      <Route path="/manageMemberships" element={<MembershipTable/>}/>
      <Route path="/addmembershipcoupon" element={<Addmembershipcoupon/>}/>
      <Route path="/addcreditcoupons" element={<AddCreditCoupon/>}/>
      <Route path="/viewReviews" element={<ViewReviews/>}/>
    </Routes>
  );
}

export default App;
