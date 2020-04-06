import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <section className="section">
          <h2 className="has-text-centered has-text-weight-semibold" style={{fontStyle: 'italic'}}>
            {price.plan}
          </h2>
          <h2 className="is-size-4 has-text-weight-bold has-text-primary has-text-centered">
          {price.price}
          </h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map(item => (
              <p style={{}}>
              <li key={item} className="is-size-5">

                  {item}

              </li></p>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
