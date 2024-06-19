import React from 'react';
import Select from 'react-select';
import {
    Box
} from '@chakra-ui/react';


const staticData = [
  { "userId": 1, "id": 1, "title": "The production activity File", "completed": false },
  { "userId": 1, "id": 2, "title": "Previous record File", "completed": false },
  { "userId": 1, "id": 3, "title": "Temporary activities file", "completed": false },
  { "userId": 1, "id": 4, "title": "Data Recovery File", "completed": true },
  { "userId": 1, "id": 5, "title": "Data breach File", "completed": false },
  { "userId": 1, "id": 6, "title": "Total porduction commits", "completed": false },
  { "userId": 1, "id": 7, "title": "Document  test", "completed": false },
  { "userId": 1, "id": 8, "title": "Document Update ", "completed": true },
  { "userId": 1, "id": 9, "title": "Deployed version lists", "completed": false },
  { "userId": 1, "id": 10, "title": "Rates of the dealed products", "completed": true }
];


const options = staticData.map(item => ({
  value: item.id,
  label: item.title
}));

const MyComponent = () => {
  return (
    <Box p={3} bg="teal.50" borderRadius="md" textAlign="center">
    <Select options={options} />
    </Box>
  );
};

export default MyComponent;