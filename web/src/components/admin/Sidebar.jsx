import React from 'react'
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className='w-44 border absolute bg-white top-0 h-auto' style={{zIndex:1,left:"-176px"}} id="sidebar">
            <div>
                <span className='material-symbols-outlined text-right w-full text-gray-500 cursor-pointer' onClick={()=>{
                    document.getElementById("sidebar").style.left = "-176px";
                }}>close</span>
            </div>
            <img src={logo} alt="" className='w-38 -mt-1 '/>
            <div className='px-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>SERVICES</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addservice")}>
                    <span className='material-symbols-outlined text-base'>add</span>
                    <h1 className='text-xs hover:text-gray-400'>Add service</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/manageservices")}>
                    <span className='material-symbols-outlined text-base'>design_services</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage services</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>COUPONS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addcoupon")}>
                    <span className='material-symbols-outlined text-base'>add</span>
                    <h1 className='text-xs hover:text-gray-400'>Create Coupon</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/manageCoupons")}>
                    <span className='material-symbols-outlined text-base'>award_star</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Coupons</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>APPOINTMENTS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center'>
                    <span className='material-symbols-outlined text-base'>book_online</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Appointments</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>USERS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center'>
                    <span className='material-symbols-outlined text-base'>person</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Users</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>TIME SLOTS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addtimeslot")}>
                    <span className='material-symbols-outlined text-base'>Today</span>
                    <h1 className='text-xs hover:text-gray-400'>Add Timeslot</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/managetimeslots")}>
                    <span className='material-symbols-outlined text-base'>Overview</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Timeslots</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>REVIEWS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/manageReviews")}>
                    <span className='material-symbols-outlined text-base'>Today</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Reviews</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>MEMBERSHIPS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addmembership")}>
                    <span className='material-symbols-outlined text-base'>Today</span>
                    <h1 className='text-xs hover:text-gray-400'>Add Memberships</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/manageMemberships")}>
                    <span className='material-symbols-outlined text-base'>Today</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Memberships</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addmembershipcoupon")}>
                    <span className='material-symbols-outlined text-base'>add</span>
                    <h1 className='text-xs hover:text-gray-400'>Add Memberships Coupon</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/managemembershipcoupons")}>
                    <span className='material-symbols-outlined text-base'>Redeem</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Membership Coupons</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>CREDIT COUPONS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/addcreditcoupons")}>
                    <span className='material-symbols-outlined text-base'>add</span>
                    <h1 className='text-xs hover:text-gray-400'>Add Credit Coupons</h1>
                </div>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/managecreditcoupons")}>
                    <span className='material-symbols-outlined text-base'>local_atm</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Credit Coupons</h1>
                </div>
            </div>
            <div className='p-2'>
                <h1 style={{fontSize:10}} className='text-gray-500'>REVIEWS</h1>
                <div className='mt-2 flex flex-row justify-start gap-2 cursor-pointer items-center' onClick={()=>navigate("/ViewReviews")}>
                    <span className='material-symbols-outlined text-base'>reviews</span>
                    <h1 className='text-xs hover:text-gray-400'>Manage Reviews</h1>
                </div>
            </div>
        </div>
    )
}
