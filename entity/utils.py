from django.db.models import ImageField
import numpy as np
from keras_preprocessing.image import load_img, img_to_array
from keras.applications import InceptionResNetV2
from keras.applications.imagenet_utils import decode_predictions, preprocess_input

from keras.applications.resnet import ResNet50, preprocess_input, decode_predictions
from keras.preprocessing import image


def preprocess_image(image: str, size=224) -> np.ndarray:
    img = load_img(image, target_size=(size, size))
    
    img_as_array = img_to_array(img)
    img_as_array = np.expand_dims(img_as_array, axis=0)
    print(img_as_array.shape)
    return preprocess_input(img_as_array)
    
    
def predict_classification(input_image: np.ndarray|str, algorithm:str='resnet50', max_predictions: int=10):
    if isinstance(input_image, str):
        input_image = preprocess_image(input_image)
    algorithm = algorithm.lower()
    if algorithm == 'resnet50':
        model = ResNet50(weights='imagenet')
    elif algorithm == 'inception2':
        model = InceptionResNetV2(weights='imagenet')
    else:
        raise ValueError('Wrong algorithm provided!')
    predictions = model.predict(input_image)
    decoded_predictions = decode_predictions(predictions, top=max_predictions)
    
    return decoded_predictions