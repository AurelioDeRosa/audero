import React from 'react';
import PropTypes from 'prop-types';

import styles from './technology-tag.module.scss';

function dashCaseToCamelCase(string) {
   return string.toLowerCase().replace(/(\b|-)\w/g, function(match) {
      return match.toUpperCase().replace(/-/, '');
   });
}

function getClassName(name) {
   return styles[`tag${dashCaseToCamelCase(name)}`] || '';
}

const TechnologyTag = ({ name }) => (
   <span className={`${styles.tag} ${getClassName(name)}`}>{name}</span>
);

TechnologyTag.propTypes = {
   name: PropTypes.string.isRequired
};

export default TechnologyTag;
