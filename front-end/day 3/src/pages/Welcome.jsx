import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../assets/images/welcomeimage01.jpg'
import image2 from '../assets/images/welcomeimage02.jpg'
import image3 from '../assets/images/welcomeimage03.jpg'
import '../assets/css/Caroselpage.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <Carousel data-bs-theme="white">
        <Carousel.Item>
          <img
            style={{ height: '100vh', width: '100vh' }}
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="fs-3">
            Yoga is the practice of quieting the mind.
            </h3> <br />
            <div className="button-wrapper">
              <button className="button-86" role="button">
                <Link to="/login" className="btn-link">
                  Get Started
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '100vh', width: '100vh' }}
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
            <h3>
            "Yoga is the fountain of youth. You’re only as young as your spine is flexible."
            </h3> <br/>
            <div className="button-wrapper">
              <button className="button-86" role="button">
                <Link to="/login" className="btn-link">
                  Get Started
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '100vh', width: '100vh' }}
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center">
            <h3>Sky Above - Earth Below - Peace Within</h3>
            <br/>
            <div className="button-wrapper">
              <button className="button-86" role="button">
                <Link to="/login" className="btn-link">
                  Get Started
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Welcome
