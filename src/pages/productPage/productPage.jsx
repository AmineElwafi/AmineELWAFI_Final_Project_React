import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import RelatedProducts from './partials/relatedProducts'
import ProductSection from './partials/productSection'

export default function ProductPage() {
    return (
        <>
            <Header/>
            <ProductSection/>
            <RelatedProducts/>
            <Footer/>
        </>
    )
}
