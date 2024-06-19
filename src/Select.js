import React from 'react';
import {
  Box,
  Select,
  FormControl,
  FormLabel,
  Text,
  Stack
} from '@chakra-ui/react';

const CustomSelect = ({ option, handleSelectChange }) => {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="options" color="teal.600">Select an option</FormLabel>
        <Select id="options" placeholder="Select option" value={option} onChange={handleSelectChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
      {option && (
        <Box p={3} bg="teal.50" borderRadius="md" textAlign="center">
          <Text color="teal.800">You selected: {option}</Text>
        </Box>
      )}
    </Stack>
  );
};

export default CustomSelect;
