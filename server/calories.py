from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS
import logging

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Set up logging
logging.basicConfig(level=logging.INFO)

# Load the trained model once when the app starts
try:
    model = joblib.load('calor(XG).pkl')
    logging.info("Model loaded successfully.")
except Exception as e:
    logging.error(f"Error loading model: {e}")
    model = None  # Set model to None if loading fails

# Define a simple function to convert gender to numeric value
def convert_gender(gender):
    if gender.lower() == 'male':
        return 1
    elif gender.lower() == 'female':
        return 0
    else:
        raise ValueError("Invalid gender value. Use 'male' or 'female'.")

# Define the endpoint for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500

    try:
        # Get JSON data from request
        data = request.get_json()

        # Validate input data
        required_features = ['Age', 'Height', 'Weight', 'Duration', 'Heart_Rate', 'Body_Temp', 'Gender']
        for feature in required_features:
            if feature not in data:
                return jsonify({'error': f'Missing feature: {feature}'}), 400

        # Convert Gender to numeric value
        gender = convert_gender(data['Gender'])

        # Extract input features from JSON data and convert to NumPy array
        features = np.array([[  
            float(data['Age']),
            float(data['Height']),
            float(data['Weight']),
            float(data['Duration']),
            float(data['Heart_Rate']),
            float(data['Body_Temp']),
            gender  # Use the numeric value for Gender
        ]])

        # Make prediction using the pre-trained model
        prediction = model.predict(features)

        # Return the result as JSON
        return jsonify({'Calories': float(prediction[0])})

    except ValueError as ve:
        logging.error(f"Value error: {ve}")
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        logging.error(f"Error processing request: {e}")
        return jsonify({'error': str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
