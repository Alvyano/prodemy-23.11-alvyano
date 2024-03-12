import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

function ProductCard(props) {
    const { title, price, src, id } = props;

    const navigate = useNavigate();
    const goToProduct = (id) => {
        navigate(`/products/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <section className='bg-white rounded-lg border p-4 cursor-pointer shadow-md hover:shadow-md transition-all duration-300 hover:scale-105 transition-all duration-300' {...props} onClick={() => goToProduct(id)}>
          <div className='relative'>
            <img className='w-full h-40 object-cover rounded-md' src={src} alt={title} />
            <div className='absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-2 '>
              <h1 className='text-white text-sm font-semibold text-center'>{title}</h1>
            </div>
          </div>
          <div className='text-sm mt-2 text-center text-black'>
            <span>{price}</span>
            <div className='mt-2'>
              <Button>
                Buy
              </Button>
            </div>
          </div>
        </section>
    );
}

export default ProductCard;
