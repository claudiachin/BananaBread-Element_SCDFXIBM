let path = require("path");
let express = require("express");
let superagent = require("superagent");
let dotenv = require("dotenv");
dotenv.config();

let admin = require("firebase-admin");
let service_account = require("./service_account_key.json");

admin.initializeApp({
  credential: admin.credential.cert(service_account),
});
let db = admin.firestore();

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listening on port 8000");
});

const DUMMY_DEVICE_LOCATION_MAP = {
  'Sensor_1': 'A',
  'Sensor_2': 'B',
  'Sensor_3': 'C',
  'Sensor_4': 'D',
  'Sensor_5': 'E',
  'Sensor_6': 'F'
}

// ROUTES

app.get("/", (req, res) => {
  res.json("testing");
});

app.get("/get-access-token", async (req, res) => {
  try {
    const token_response = await superagent
      .post("https://iam.cloud.ibm.com/identity/token")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Accept", "application/json")
      .send({
        grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        apikey: process.env.IBM_CLOUD_KEY,
      });
    // const { access_token, refresh_token } = token_response.body;
    res.json("obtained access token");
  } catch (err) {
    console.error(err);
    res.json("error");
  }
});

app.get("/get-data", async (req, res) => {
  try {
    const devices_response = await superagent
      .get(
        `https://${process.env.YIFEI_ORG_ID}.internetofthings.ibmcloud.com/api/v0002/bulk/devices`
      )
      .set("Accept", "application/json")
      .set(
        "Authorization",
        `Basic ${Buffer.from(
          `${process.env.YIFEI_IOT_KEY}:${process.env.YIFEI_IOT_TOKEN}`
        ).toString("base64")}`
      )
      .query({
        _limit: 25,
      });
    const devices = devices_response.body.results;
    const all_device_data = [];
    for (const device of devices) {
      const data_response = await superagent
        .get(
          `https://${process.env.YIFEI_ORG_ID}.internetofthings.ibmcloud.com/api/v0002/device/types/${device.typeId}/devices/${device.deviceId}/events`
        )
        .set("Content-type", "application/json")
        .set(
          "Authorization",
          `Basic ${Buffer.from(
            `${process.env.YIFEI_IOT_KEY}:${process.env.YIFEI_IOT_TOKEN}`
          ).toString("base64")}`
        );
      const humidity = JSON.parse(Buffer.from(data_response.body.find(event => event.eventId === 'Humidity').payload, "base64").toString()).randomNumber;
      const temperature = JSON.parse(Buffer.from(data_response.body.find(event => event.eventId === 'Temperature').payload, "base64").toString()).randomNumber;
      const data = {
        humidity: humidity,
        temperature: temperature,
        id: device.deviceId,
        location: DUMMY_DEVICE_LOCATION_MAP[device.deviceId]
    };
      const doc_ref = db.collection('SensorReading').doc(Date.now().toString());
      doc_ref.set(data);
      all_device_data.push(data);
    }

    res.json(all_device_data);
  } catch (err) {
    console.error(err);
    res.json("error");
  }
});
