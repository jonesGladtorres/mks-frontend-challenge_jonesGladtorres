import { StyledPriceAndTextAndButtonModal, StyledTitleModal } from "@/styles/typography/modal"
import { StyledButtonCartModal, StyledButtonCloseModal, StyledContainerCartModal, StyledContainerProductsInCart, StyledHeaderCartModal, StyledProductsCartModal, StyledTotalCartModal } from "./style"
import { ProductInCartModal } from "./ProductInCartModal"
import { useAtomValue } from "jotai"
import { IProduct } from "../CardsList"
import { useEffect, useState } from "react"
import { productsInCartAtom } from "@/atoms/productsInCartAtom"


export const ModalCart = ({closeModal}: any) => {
    const productsCart = useAtomValue(productsInCartAtom)
    const [valueTotal, setValueTotal] = useState(0)

    useEffect(() => {
        const values = productsCart.reduce((acc, product) => {
            
            const productPrice = Number(product.total)

            return acc + productPrice
        }, 0)
        setValueTotal(values)
    }, [productsCart])

    return (
        <div>
            <StyledContainerCartModal>
                <StyledHeaderCartModal>
                    <StyledTitleModal>Carrinho de compras</StyledTitleModal>
                    <StyledButtonCloseModal onClick={() => closeModal()}>X</StyledButtonCloseModal>
                </StyledHeaderCartModal>
                <StyledProductsCartModal>
                    <StyledContainerProductsInCart>
                        {productsCart.map((product: IProduct) => (<ProductInCartModal key={product.id} product={product}/>))}
                    </StyledContainerProductsInCart>
                </StyledProductsCartModal>
                <StyledTotalCartModal>
                    <StyledPriceAndTextAndButtonModal>TOTAL:</StyledPriceAndTextAndButtonModal>
                    <StyledPriceAndTextAndButtonModal>{`R$${valueTotal},00`}</StyledPriceAndTextAndButtonModal>
                </StyledTotalCartModal>
                <StyledButtonCartModal>
                    <StyledPriceAndTextAndButtonModal>Finalizar Compra</StyledPriceAndTextAndButtonModal>
                    </StyledButtonCartModal>
            </StyledContainerCartModal>
        </div>
    )
}