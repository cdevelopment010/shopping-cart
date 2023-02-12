import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className='home-container' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/jason-leung-unsplash-md.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'bottom'
      }}>

        <div className="d-flex align-item-center justify-content-center">
          <Link to="/shop">
            <button>  
            Explore the range 
            <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>

    </div>
    );
  }
  
  export default Home;
  