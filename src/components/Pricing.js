import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className='columns'>
    {data.map((price) => (
      <div key={price.plan} className='column'>
        <section className='section box '>
          <h4
            className='has-text-centered has-text-weight-semibold'
            style={{ fontStyle: "italic", fontSize: "17px" }}
          >
            {price.plan} : {price.description}
          </h4>
          <h5
            className='has-text-weight-bold has-text-centered'
            style={{ fontSize: "15px" }}
          >
            {price.price}
          </h5>
          <p className='has-text-weight-semibold'></p>
          <ul>
            {price.items.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "15px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
