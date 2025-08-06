import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import landingImage from "../../assets/Home/doctor.png";
import Footer from "../../components/Footer/footer";

const Landing = () => {
  return (
    <>
    <div className="landing-container vh-100 d-flex align-items-stretch text-white">
      <div className="container-fluid">
        <div className="row h-100">
          
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="display-4 fw-bold">Welcome to RochettaBalady</p>
            <p className="lead">
              Bringing healthcare to your home — your trusted source for authentic Egyptian prescriptions and services.
            </p>
            <div className="mt-4">
              <button className="btn btn-success me-3">Get Started</button>
              <button className="btn btn-outline-light">Learn More</button>
            </div>
          </div>

          <div className="col-md-6 p-0">
            <div className="h-100 d-flex justify-content-center align-items-end">
              <img src={landingImage} alt="Doctor" className="doctor-img" />
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer /> 

    </>
  );
};

export default Landing;