import { StyledCountInCart, StyledNameProductInCart, StyledPriceProductInCart } from "@/styles/typography/modal"
import { StyledButtonDeleteProductInCart, StyledContainerCountProductInCart, StyledContainerProductInCart, StyledImageProductInCart } from "./style"
import { IProduct } from "@/components/CardsList"
import { useAtom } from "jotai"
import { productsInCartAtom } from "@/atoms/productsInCartAtom"

type TProductsProps = {
    product: IProduct
}

export const ProductInCartModal = ({product}: TProductsProps) => {

    const [productsCart, setProductsCart] = useAtom(productsInCartAtom)

    const deleteProductCart = (productIdToRemove: number) => {
        
        const updatedCart = productsCart.filter((item) => item.id !== productIdToRemove);
        setProductsCart(updatedCart);
    };
    
    const updateProductAmount = (productId: number, newAmount: number) => {

        const updatedProducts = [...productsCart];
        const productIndex = updatedProducts.findIndex((product) => product.id === productId);
    
        if (productIndex !== -1) {

          updatedProducts[productIndex] = {
            ...updatedProducts[productIndex],
            amount: newAmount,
            total: updatedProducts[productIndex].price * newAmount,
          };
          setProductsCart(updatedProducts);
        }
    };
    
    const handleIncreaseAmount = () => {
        
        const newAmount = (product.amount || 0) + 1;
        updateProductAmount(product.id, newAmount);
    };
    
    const handleDecreaseAmount = () => {

        const newAmount = Math.max(0, (product.amount || 0) - 1);
    
        if (newAmount === 0) {
          return deleteProductCart(product.id);
        }
        updateProductAmount(product.id, newAmount);
    };
    

    return (
        <StyledContainerProductInCart>
            <StyledButtonDeleteProductInCart onClick={() => deleteProductCart(product.id)}>X</StyledButtonDeleteProductInCart>
            <StyledImageProductInCart src={product.photo} alt={`A imagem de um ${product.name}`} />
            <StyledNameProductInCart>{product.name}</StyledNameProductInCart>
            <StyledContainerCountProductInCart>
                <StyledCountInCart onClick={() => handleDecreaseAmount()}>-</StyledCountInCart>
                <StyledCountInCart content="yes">{product.amount}</StyledCountInCart>
                <StyledCountInCart onClick={() => handleIncreaseAmount()}>+</StyledCountInCart>
            </StyledContainerCountProductInCart>
            <StyledPriceProductInCart>{`R$${product.price}`}</StyledPriceProductInCart>
        </StyledContainerProductInCart>
    )
}