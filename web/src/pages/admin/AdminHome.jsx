import React from 'react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/admin/Sidebar'

export const AdminHome = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='p-3'>
            <h1>AdminHome</h1>
        </div>
    </div>
  )
}
