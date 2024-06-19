import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  theme,
  ThemeProvider,
  CSSReset
} from '@chakra-ui/react';
import CustomSelect from './Select';
import Drop from "./Drop";

function App() {
  const [option, setOption] = useState('');

  const handleSelectChange = (event) => {
    setOption(event.target.value);
    
  };

  return (
    <div className='App'>
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
          <CustomSelect option={option} handleSelectChange={handleSelectChange} />
        </Box>
      </Container>
    </ThemeProvider>
    <Drop/>
    </div>
  );
}

export default App;
