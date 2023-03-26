import axios from "axios";

async function fetchData(number) {
  const response = await axios({
    method: "post",
    url: `https://api.novaposhta.ua/v2.0/json/`,
    data: {
      apiKey: process.env.REACT_APP_API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: number,
          },
        ],
      },
    },
  });
  return response.data;
}

async function fetchLocation(locationName, page) {
  const response = await axios({
    method: "post",
    url: `https://api.novaposhta.ua/v2.0/json/`,
    data: {
      apiKey: process.env.REACT_APP_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: locationName,
        Page: page,
        Limit: "50",
        Language: "UA",
      },
    },
  });
  console.log(response.data);
  return response.data;
}

// async function fetchLocation(locationName) {
//   const response = await axios({
//     method: "post",
//     url: `https://api.novaposhta.ua/v2.0/json/`,
//     data: {
//       apiKey: process.env.REACT_APP_API_KEY,
//       modelName: "Address",
//       calledMethod: "searchSettlements",
//       methodProperties: {
//         CityName: locationName,
//         Limit: "50",
//         Page: "1",
//       },
//     },
//   });
//   return response.data;
// }

export { fetchData, fetchLocation };
