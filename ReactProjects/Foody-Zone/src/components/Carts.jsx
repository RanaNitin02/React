import PropTypes from 'prop-types';
import styled from 'styled-components'
import { baseURL } from './Heading';
import { Button } from './Heading';

function Carts({data:foodItem}) {

  return (
    <AllCarts>
      <FoodCart>
        {
          foodItem?.map(({name,image,text,price}) => (   // this is from api
            <Cart key={name}>
              <div className='food_images'>
                <img src={baseURL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button onClick={() => alert(`Your order ${name} is placed`)}>${price.toFixed(2)}</Button>
              </div>
            </Cart>
          ))
        }
      </FoodCart>
    </AllCarts>
  )
}

Carts.propTypes = {   // this is just to remove an error , no need to always write it
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Carts

const AllCarts = styled.section`
  /* width: 100%; */
  max-width: 100vw;
  min-height:520px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px;
  margin: 0 auto; 
  background: url("/images/bg.png") center/cover no-repeat;
`;

const FoodCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Cart = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid white;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
      color:white;
    }
    p {
      margin-top: 4px;
      font-size: 18px;
      color:white;
    }
    button {
      font-size: 12px;
    }
  }
`;