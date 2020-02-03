import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Filter = ({value, onChange}) => {
  return (
    <Label>
      <LabelText>Find contacts by name</LabelText>
      <input type="text" name="filter" value={value} onChange={e => onChange(e.target.value)} />
    </Label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Filter.defaultProps = {
  filter: ''
}

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;
`;
export default Filter;