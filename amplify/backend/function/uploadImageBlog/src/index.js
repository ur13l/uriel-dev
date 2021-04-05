/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_URIELDEVCONTENT_BUCKETNAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO implement

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
