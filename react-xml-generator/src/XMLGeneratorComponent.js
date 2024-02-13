import React from 'react';
import generateXML from './XMLContent';

const XMLGeneratorComponent = () => {
  const handleGenerateXML = () => {
    const xmlContent = generateXML();

    // Create a Blob from the XML content
    const blob = new Blob([xmlContent], { type: 'application/xml' });

    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'example.xml';

    // Trigger the download
    link.click();
  };

  return (
    <div>
      <button onClick={handleGenerateXML}>Generate XML</button>
    </div>
  );
};

export default XMLGeneratorComponent;