
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProducts from './AddProducts'
import Admin from './Admin'
import DeleteProducts from './DeleteProducts'
import UpdateProducts from './UpdateProducts'

export default function AdminRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Admin />} />
            <Route path='/addProducts' element={<AddProducts />} />
            <Route path='/updateProducts/:id' element={<UpdateProducts />} />
            <Route path='/deleteProducts/:id' element={<DeleteProducts />} />
        </Routes>
    </div>
  )
}
