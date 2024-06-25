import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  theme,
  ThemeProvider,
  CSSReset,
  Button
} from '@chakra-ui/react';
import CustomSelect from './Select';
import Drop from './Drop';
import './App.css';
import LexicalEditor from './LexicalEditor';

function App() {
  const [option, setOption] = useState('option1');
  const [isShown, setIsShown] = useState(false);

  const handleSelectChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className='App'>
      <p>CLICK BELOW !!!!</p>
      
      <Drop />
      <Button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => setIsShown(!isShown)}
        colorScheme="teal"
        variant="solid"
      >
        Organization {option === 1 ? 'Default' : option}
      </Button>
      {isShown && (
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
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
          
        </div>
      )}
      <div><LexicalEditor/></div>
    </div>
  );
}

export default App;
