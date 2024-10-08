from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

# Load the trained model
model = joblib.load('calories.pkl')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from frontend

# Define the endpoint for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Extract input features from JSON data
        features = np.array([[  # Convert features to NumPy array for model
            float(data['age']),
            float(data['height']),
            float(data['weight']),
            float(data['duration']),
            float(data['heartRate']),
            float(data['bodyTemp'])
        ]])

        # Make prediction using the pre-trained model
        prediction = model.predict(features)

        # Return the result as JSON
        return jsonify({'Calories': float(prediction[0])})

    except Exception as e:
        # Return an error message in case something goes wrong
        return jsonify({'error': str(e)})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
