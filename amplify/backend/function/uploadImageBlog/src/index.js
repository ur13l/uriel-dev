/* Amplify Params - DO NOT EDIT
	API_URIELDEV_GRAPHQLAPIENDPOINTOUTPUT
	API_URIELDEV_GRAPHQLAPIIDOUTPUT
	API_URIELDEV_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_URIELDEVCONTENT_BUCKETNAME
Amplify Params - DO NOT EDIT */

const { v4: uuidv4 } = require("uuid");
const aws = require("aws-sdk");
const s3 = new aws.S3({
  params: { Bucket: process.env.STORAGE_URIELDEVCONTENT_BUCKETNAME },
});

exports.handler = async (event) => {
  // TODO implement
  const {
    arguments: { file, extension },
  } = event;

  buf = Buffer.from(file.replace(/^data:image\/\w+;base64,/, ""), "base64");
  var data = {
    Key: `${uuidv4()}.${extension}`, //TODO: Cambiar por UUID
    Body: buf,
    ContentEncoding: "base64",
    ContentType: "image/jpeg",
  };
  try {
    const res = await s3.putObject(data).promise();
    console.log(res); //TODO: Generar public link
  } catch (e) {}

  const response = {
    msg: "Mensaje de éxito",
    code: 200,
    data: {
      errFiles: [],
      succMap: JSON.stringify({
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71oLPcxaBdL._SL1200_.jpg",
      }),
    },
  };
  return response;
};
