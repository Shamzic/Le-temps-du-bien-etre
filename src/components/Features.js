import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map((item) => (
      <div key={item.text} className=' is-12 is-flex'>
        <section className='section'>
          <div className='columns is-12 has-text-left'>
            <div
              style={{
              }}
              className="column is-6"
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div
              className="column is-6"
            >
              <h3 className="has-text-centered" style={{fontSize: "17px", marginBottom:'40px'}}>Gommages du corps</h3>
              <div className="has-text-left has-text-weight-medium"  style={{marginLeft: "35px"}}>
                <i>
                  <p className="">Gommage aux sels et huile d'abricot</p>
                  <p>Gommage au Savon Noir</p>
                  <p>Gommage au sucre</p>
                  <p>Gommage aux sels et huile d'argan</p>
                  <hr dotted style={{ width: '80%', opacity: '0.5', marginTop: '25px',  marginBottom: '20px', marginRight: '20%', borderTop:'dotted  1px'}}/>
                  <p>Tarif pour une durée de 30 minutes : 20€</p>
                </i>
              </div>

            </div>
          </div>
          <p
            style={{
              marginTop: "1%",
            }}
          >
            {item.text}
          </p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
