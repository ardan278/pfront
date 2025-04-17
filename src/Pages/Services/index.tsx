import React from 'react';
import { Container } from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <Container className="py-5 my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <p className="lead text-center">
        We offer a wide range of services to meet your needs. Explore our service offerings below.
      </p>
      
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Maintenance</h5>
              <p className="card-text">
                Regular maintenance services to keep your equipment running smoothly.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Installation</h5>
              <p className="card-text">
                Professional installation services for new equipment and systems.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Spare Parts</h5>
              <p className="card-text">
                Quality spare parts for all your equipment needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
