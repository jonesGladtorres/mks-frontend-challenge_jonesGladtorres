'use client'

import { getProducts } from "@/services/request"
import { CardProducts } from "./CardProducts"
import { CardsListContainer, StyledMainContainer } from "./style"
import React, { useEffect, useState } from 'react';
import { Loading } from "../Skeleton/Loading";


export interface IProduct{
    brand: string,
    createdAt: Date,
    description: string,
    id: number,
    name: string,
    photo: string,
    price: number,
    updatedAt: Date,
    amount?: number,
    total?: number
}


export const CardList = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await getProducts()

                const productsWithAmount = result.products.map((product: IProduct) => ({ ...product, amount: 1, total: product.price }));
            
                setProducts(productsWithAmount)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return (
        <StyledMainContainer>
            <CardsListContainer>
                { loading ? (
                    Array.from({length: 8}).map((_, index) => <Loading key={index}/>)
                ) : (
                    products.map((product: IProduct) => ( <CardProducts key={product.id} product={product}/> ))
                )}
            </CardsListContainer>
        </StyledMainContainer>
    )
}