import React, { useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import { CustomMobileNet } from '@teachablemachine/image'; // Import the type if available

const TeachableMachineComponent = () => {
    const [model, setModel] = useState<CustomMobileNet | null>(null);
    const [image, setImage] = useState<any>(null); // Add state to hold the image
    const [className, setClassName] = useState(''); // State to hold the class name

    useEffect(() => {
      async function loadModel() {
        const modelURL = 'http://teachablemachine.withgoogle.com/models/4tgm8m4tL';
        const model = await tmImage.load(modelURL);
        setModel(model);
      }
      loadModel();
    }, []);
  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handlePredict = async () => {
      if (!model || !image) return;
      const prediction = await model.predict(image);
      console.log(prediction);
      // Assuming the prediction contains the class name
      if (prediction && prediction[0]) {
        setClassName(prediction[0].className);
      }
      // Handle prediction result
    };

    const handleTakeAttendance = async () => {
        const response = await fetch('/api/sendWebhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ className }),
        });

        const data = await response.json();
        console.log(data); // Handle response
    };

    return (
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handlePredict}>Predict</button>
        <button onClick={handleTakeAttendance}>Take Attendance</button>
      </div>
    );
  };
  
  export default TeachableMachineComponent;