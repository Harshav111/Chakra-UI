// DynamicAIInsertion.js

import React, { useState } from 'react';

const DynamicAIInsertion = () => {
    const [insertedContent, setInsertedContent] = useState([]);

    const handleDocumentClick = (event) => {
        const { clientX, clientY } = event;
        const newContent = { x: clientX, y: clientY };

        // Add new content to the existing array
        setInsertedContent([...insertedContent, newContent]);
    };

    return (
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
                    Welcome to Avivo AI {index + 1}!
                </div>
            ))}
        </div>
    );
};

export default DynamicAIInsertion;
