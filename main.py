import json
import cv2
import matplotlib.pyplot as plt
from deepface import DeepFace
import numpy as np

def convert_numpy_floats(obj):
    """
    Recursively converts numpy.float32 to Python float in a nested dictionary or list.
    """
    if isinstance(obj, dict):
        return {k: convert_numpy_floats(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_numpy_floats(v) for v in obj]
    elif isinstance(obj, np.float32):
        return float(obj)
    else:
        return obj

img_path = './microsoft/nursing_assistant/nursing_assistant5.png'
img = cv2.imread(img_path)
plt.imshow(img[:, :, ::-1])  # Convert BGR to RGB for displaying
plt.axis('off')  # Hide axes
plt.show()
demography = DeepFace.analyze(img_path, actions=['age', 'gender', 'race', 'emotion'])

demography = convert_numpy_floats(demography)

print(json.dumps(demography, indent=2))


