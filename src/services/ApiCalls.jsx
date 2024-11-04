import { expireToken } from "../utilities/utilsFunctions.js";

const baseUrl = import.meta.env.VITE_BASE_URL;
// const token = ;
export const getData = async (api) => {
  try {
    const response = await fetch(`${baseUrl}${api}`);
    if (response.status === 500 || response.status === 401) {
      expireToken();
    }
    return response;
    // console.log(`${api}>> Get:`, response);
    // const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataWithToken = async (api) => {
  try {
    // console.log(token);

    const response = await fetch(`${baseUrl}${api}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    if (response.status === 500 || response.status === 401) {
      // expireToken();
    }
    return response;
    // console.log(`${api}>> Get:`, response);
    // const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (api, postData) => {
  // console.log(postData);
  try {
    // if (response.status === 401) {
    //   // expireToken();
    // }
    // console.log(`${api}>> Post:`, response);
    return await fetch(baseUrl + api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(postData),
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error in post request");
  }
};

export const postDataWithToken = async (api, postData, header = {}) => {
  console.log(api, postData);
  try {
    const response = await fetch(baseUrl + api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        ...header,
      },
      body: JSON.stringify(postData),
    });
    if (response.status === 500 || response.status === 401) {
      expireToken();
    }
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error in post request");
  }
};

export const postMultipartDataWithToken = async (
  api,
  postData,
  header = {},
) => {
  console.log(api, postData);
  let formData = new FormData();
  Object.keys(postData).forEach((key) => {
    formData.append(key, postData[key]);
  });
  try {
    const response = await fetch(baseUrl + api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        ...header,
      },
      body: formData,
    });
    if (response.status === 500 || response.status === 401) {
      expireToken();
    }
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error in post request");
  }
};
