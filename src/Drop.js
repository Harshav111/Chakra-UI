import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Contract-Document', label: 'Contract-Document' },
  { value: 'Reading-Element', label: 'Reading-Element' },
  { value: 'Notedown-Element', label: 'Notedown-Element' }
]

const MyComponent = () => {
    return(
  <Select options={options} />
);
};
export default MyComponent;