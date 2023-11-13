import { Suspense } from 'react'
import Image from "next/image"
import shoppingIcon from "@/assets/icons/shopping-icon.svg"
import { StyledButtonContainerCardsProducts, StyledCardProductsContainer, StyledCardProductsImage, StyledContainerNameCardProducts, StyledContainerPrice } from "./style"
import { StyledDescriptionCard, StyledNameCard, StyledPriceCard, StyledTypographButtonCard } from "@/styles/typography/cards"
import { IProduct } from ".."
import { useAtom } from "jotai"
import { productsInCartAtom } from "@/atoms/productsInCartAtom"


type TProductsProps = {
    product: IProduct
}

export const CardProducts = ({product}:TProductsProps) => {
    const [productsCart, setProductsCart] = useAtom(productsInCartAtom)
    
    const handleAddCart = () => {

        const productExist = productsCart.find((item) => item.id === product.id);
    
        if (productExist) {
          setProductsCart((prevProducts) =>
            prevProducts.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    amount: (item.amount || 0) + 1,
                    total: (item.amount || 0 + 1) * item.price,
                  }
                : item
            )
          );
        }else{
            
          setProductsCart([...productsCart, { ...product, amount: 1, total: product.price }]);
        }
    };

    return(
          <StyledCardProductsContainer>
            <StyledCardProductsImage src={product.photo} alt={`A imagem de um ${product.name}`}/>
            <StyledContainerNameCardProducts>
                <StyledNameCard>{product.name}</StyledNameCard>
                <StyledContainerPrice>
                    <StyledPriceCard>{`R$${product.price}`}</StyledPriceCard>
                </StyledContainerPrice>
            </StyledContainerNameCardProducts>
            <StyledDescriptionCard>{product.description}</StyledDescriptionCard>
            <StyledButtonContainerCardsProducts>
                <Image src={shoppingIcon} alt="Icone de uma sacola de compras"/> 
                <StyledTypographButtonCard 
                onClick={() => handleAddCart()}>COMPRAR</StyledTypographButtonCard>
            </StyledButtonContainerCardsProducts>
          </StyledCardProductsContainer>
    )
}