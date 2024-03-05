import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import HomePage from './HomePage'
import Product from './Product'

export default function CustomerPage() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/products/:id' element={<Product />} />
            </Routes>
            <Footer />
        </div>
    )
}
