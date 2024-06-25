import React, { useState } from 'react';

const DynamicAIInsertion = () => {
    const [insertedContent, setInsertedContent] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [isAIEnabled, setIsAIEnabled] = useState(false);
    const [activeContent, setActiveContent] = useState('');

    const handleDocumentClick = (event) => {
        if (!isAIEnabled) return;

        const { clientX, clientY } = event;
        const newContent = { x: clientX, y: clientY, text: activeContent };

        // Add new content to the existing array
        const newInsertedContent = [...insertedContent, newContent];
        setInsertedContent(newInsertedContent);

        if (newInsertedContent.length > 100) {
            setShowMessage(true);
        }
    };

    const toggleAI = () => {
        setIsAIEnabled(!isAIEnabled);
    };

    const handleButtonClick = (content) => {
        setActiveContent(content);
        setIsAIEnabled(true); // Optionally, enable AI on button click
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                width: '200px',
                padding: '10px',
                backgroundColor: 'black',
                color: 'white',
                height: '100vh',
                boxSizing: 'border-box'
            }}>
                <button onClick={toggleAI} style={buttonStyle}>
                    {isAIEnabled ? 'Disable AI' : 'Enable AI'}
                </button>
                <button onClick={() => handleButtonClick('Your Contract Info')} style={buttonStyle}>
                    Button 1
                </button>
                <button onClick={() => handleButtonClick('Your organization info')} style={buttonStyle}>
                    Button 2
                </button>
                <button onClick={() => handleButtonClick('Your Name info')} style={buttonStyle}>
                    Button 3
                </button>
            </div>

            <div onClick={handleDocumentClick} style={{ width: '100%', height: '100vh', position: 'relative' }}>
                {/* Render all inserted content */}
                {insertedContent.map((content, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: content.y + 'px',
                            left: content.x + 'px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            padding: '5px',
                            borderRadius: '5px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                            zIndex: '999',
                        }}
                    >
                        {content.text}
                    </div>
                ))}

                {/* Conditionally render the warning message */}
                {showMessage && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            zIndex: '1000',
                        }}
                    >
                        Warning: Clicks exceeded limit!!!! Your Count: {insertedContent.length}
                    </div>
                )}
            </div>
        </div>
    );
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default DynamicAIInsertion;
