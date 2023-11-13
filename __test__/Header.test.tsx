import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "@/components/Header/index"


describe('Modal Header', () => {
    it("Check if the modal button exists", () => {
        render(<Header />)

        const modalButton = screen.getByText('0')
        expect(modalButton).toBeInTheDocument()
    })

    it("Check if the modal is opening and closing", () => {
        render(<Header />)

        const modalButton = screen.getByText('0')
        expect(modalButton).toBeInTheDocument()

        const modalElement = screen.queryByRole('dialog')
        expect(modalElement).not.toBeInTheDocument()

        fireEvent.click(modalButton)

        const openModalElement = screen.getByRole('dialog')
        expect(openModalElement).toBeInTheDocument()

        const modalContent = screen.getByText('Carrinho de compras')
        expect(modalContent).toBeInTheDocument()

        const closeButton = screen.getByText('X')
        expect(closeButton).toBeInTheDocument()

        fireEvent.click(closeButton)

        expect(openModalElement).not.toBeInTheDocument()
        
    })
})

