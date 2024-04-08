import React from 'react'

function TestimonialCard({ name, profession, workplace, testimonial, rating,gender }) {
    return (
      <div className="col-md-4 style-3">
        <div className="tour-item">
          <div className="tour-desc bg-white">
            <div className="tour-text color-grey-3 text-center">
              {testimonial}
            </div>
            <div className="d-flex justify-content-center pt-2 pb-2">
              <img
                className="tm-people"
                src={`https://xsgames.co/randomusers/avatar.php?g=${gender}`} />
            </div>
            <div className="link-name d-flex justify-content-center">{name}</div>
            <div className="link-position d-flex justify-content-center">
              {profession} at {workplace}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default TestimonialCard