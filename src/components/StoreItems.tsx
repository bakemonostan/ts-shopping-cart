import { Button, Card } from 'react-bootstrap';
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItems = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div>
      StoreItems
      <Card className='h-100'>
        <Card.Img
          variant='top'
          src={imgUrl}
          height='200px'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{price}</span>
          </Card.Title>
          <div className='mt-auto'>
            <Button className='w-100'>+ Add To Cart</Button>

            <div
              className='d-flex align-items-center justify-content-center'
              style={{ gap: '.5rem' }}
            >
              <Button>+</Button>
            </div>
            <Button variant='danger' size='sm'>
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default StoreItems;
