# BANANA BREAD
## ELEMENT
In recent years, vegetation fires in Singapore has contributed to a significant percentage of all fires in the country, making up 30.9% of all fires in 2019. According to news articles, the Wildfire Task Force Committee has taken preventive measures to minimise vegetation fire by trimming vegetation, watering dry areas and conducting patrols at hot spots. However, there is little detail as to how this is carried out, leading to our team deciding that the use of technology and the Internet of things will be able to help optimise the effciency and effectiveness of these measures.

Element is a mobile application that we have created which makes use of data collected from humidity and temperature sensors to indicate whether or not a certain location is in urgent need of watering. By relying on real time data collection, we believe that Element can ensure that dry areas are promptly taken care of and that no precious time and human resources will not be wasted on checking on the conditions of the entire plot of vegetation. 

### Implementation of Code
The user interface was created using React. Due to limitations in time, our team decided to demonstrate the functionalities of the application using a web app scaled down to the size of a mobile phone instead of developing a mobile application. Please note that as the app is meant for demonstration purposes, it is currently displayed properly only on a specific screen size.  

The back end of this mobile application uses Node.js and the Internet of Things Platform from IBM Cloud and is deployed using Heroku. For this demonstration, our team created simulation devices using the IOT Platform and used the IOT Platform API to send the device data to our mobile application. This data was also stored in Firebase for possible future use and analysis. 

### How to Run
The React app can be run with the command `npm run`. Before running the app, use the command `npm install` to obtain the necessary dependencies.

The Node.js server is accessible with the base URL of https://damp-journey-05387.herokuapp.com. To run it locally, first execute an `npm install` command to obtain the necessary dependencies. A `.env` file must be created and populated with the necessary port numbers and API keys and tokens. A service account key with read and write access to Google Cloud Firestore must be added to the backend directory and its path must be added to the `.env` file.  