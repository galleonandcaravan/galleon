import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { PAGES } from '../../constants';
import './styles.css';

const Dots = ({ activePage }) => (
  <ul className="dots">
    {Object.keys(PAGES).map(pageKey => (
      <li
        key={pageKey}
        className={cn('dots__item', { dots__item_active: activePage === PAGES[pageKey] })}
      >
        <a href={`#${PAGES[pageKey]}`} />
      </li>
    ))}
  </ul>
);

Dots.propTypes = {
  activePage: PropTypes.string,
};

Dots.defaultProps = {
  activePage: '',
};

export default Dots;
