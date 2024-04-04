<h1>CategorizeMeIfYouCan <sub><sub>Backend</sub></sub><h1>
<h3>Implemented by Python Django.</h3>

  <p> * The backend section of the project. It receives the image sent by frontend, Then tries to categorize it using ResNet Algorithms and Tensorflow module(s).</p>
  <p> * After uploading an image, it will create a corresponding entity in database, Then predicts the corresponding Catgroy, if the category doesnt exist, it will create its         corresponding model, or uses the existing one..</p>
  <p> * After the algorithm completes, it will link each categries to the image with a new Prediction model, that specifies the accuracy of the categorizing too.</p>
  <p> * After the computation is completed, it will inform the client with propper response [containing entity id in database] and then the forntend app will list all                 predictions related to that entity. </p>
