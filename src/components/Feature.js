import React from 'react';

const Feature = ({ feature, ind }) => (
                <div className="features-slider_item">
                  <div className="features-img" style={{ backgroundImage: `url(./images/${ind + 1}.svg)` }} />
                  <div className="features-feature">{feature}</div>
                </div>
              )

export default Feature;