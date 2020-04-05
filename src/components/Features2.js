import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid2 = ({ gridItems }) => (
  <div className="columns is-multiline"
  style={{textAlign: 'center'}}>
    {gridItems.map(item => (
      <div key={item.text} className="" >
        <section className="section">
          <div className="has-text-centered ">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
                textAlign: 'center'
              }}
            >
              <PreviewCompatibleImage imageInfo={item}  />
            </div>
          </div>
          <p style={{marginTop: '50px'}}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid2.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid2
