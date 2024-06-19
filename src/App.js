import React, { useState } from 'react';
import {
  Box,
  Container,
  Select,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Stack,
  theme,
  ThemeProvider,
  CSSReset
} from '@chakra-ui/react';

function App() {
  const [option, setOption] = useState('');

  const handleSelectChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Container centerContent p={5}>
        <Box
          borderWidth={1}
          borderRadius="lg"
          overflow="hidden"
          p={5}
          bg="white"
          shadow="md"
          maxW="md"
          w="100%"
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center" color="teal.500">
            Avivo AI - Demo
          </Heading>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
