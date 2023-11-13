'use client'

import Image from "next/image"
import cartIcon from "@/assets/icons/cart-icon.svg"
import { ButtonCartModal } from "./style"
import { StyledCountButtonCart } from "@/styles/typography/header"
import { useEffect, useState } from "react"
import React from 'react';
import Modal from 'react-modal';
import { ModalCart } from "@/components/Modal"
import { useAtomValue } from "jotai"
import { productsInCartAtom } from "@/atoms/productsInCartAtom"


interface Styles {
  content?: any
  overlay?: any
}


export const ButtonHeader = () => {
  
    const productsCart = useAtomValue(productsInCartAtom)

    const [totalCart, setTotalCart] = useState(0)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {

      setIsOpen(true);
    }
  
    function afterOpenModal() {}
  
    function closeModal(): void {

      setIsOpen(false);
    }

    useEffect(() => {

      const totalProductsInCart = productsCart.reduce((total, product) => total + (product.amount || 0), 0);
      setTotalCart(totalProductsInCart)

    },[productsCart])

    let screenWidth = 550

    if (typeof window !== 'undefined') {
      screenWidth = window.innerWidth;
    }

    const contentWidth = screenWidth < 550 ? '100%' : '400px';

    const customStyles: Styles = {
      overlay: {
        backgroundColor: 'transparent',
        zIndex: 20,
      },
      content: {
        position: 'fixed',
        padding: '0',
        top: '0',
        left: 'auto',
        right: '0',
        bottom: '0',
        width: contentWidth,
        border: 'none',
      },
    };
    

    return(
        <>
            <ButtonCartModal onClick={() => openModal()}>
            <Image src={cartIcon} alt="Icone de um carrinho de compras"/>
            <StyledCountButtonCart>{totalCart}</StyledCountButtonCart>
            </ButtonCartModal>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalCart closeModal={closeModal}/>
            </Modal>
        </>
    )
}