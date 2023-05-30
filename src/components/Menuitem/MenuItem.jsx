import PropTypes from 'prop-types'
import './MenuItem.css';

export const MenuItem = ({title,price,tags}) => (
  <div className="app__menuitem">
  <div className="app__menuitem-head">
    <div className="app__menuitem-name">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
    </div>
    <div className="app__menuitem-dash" />
    <div className="app__menuitem-price">
      <p className="p__cormorant">{price}</p>
    </div>
  </div>

  <div className="app__menuitem-sub">
    <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
  </div>
</div>
);


MenuItem.propTypes = {
title: PropTypes.string,
price: PropTypes.string,
tags:PropTypes.string
}