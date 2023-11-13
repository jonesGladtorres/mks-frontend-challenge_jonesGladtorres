import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardProducts } from '@/components/CardsList/CardProducts';
import { Header } from '@/components/Header';


const mockProduct = {
  id: 8,
  name: "Headset Cloud Stinger",
  brand: "HyperX",
  description: "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
  photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
  price: 600.00,

};

it('renders CardProducts correctly', () => {
  render(<CardProducts product={mockProduct} />);

  expect(screen.getByAltText(`A imagem de um ${mockProduct.name}`)).toBeInTheDocument();

  expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

  expect(screen.getByText(`R$${mockProduct.price}`)).toBeInTheDocument();

  expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

  expect(screen.getByText('COMPRAR')).toBeInTheDocument();
});

it('handles add to cart click', async () => {

  render(<CardProducts product={mockProduct} />);

  await userEvent.click(screen.getByText('COMPRAR'));

  render(<Header />)

  const buttonModal = screen.getByText('1')
  expect(buttonModal).toBeInTheDocument();
});