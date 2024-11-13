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
        Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
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
        Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
        ...header,
      },
      body: JSON.stringify(postData),
    });
    if (response.status === 500 || response.status === 401) {
      expireToken();
    }
    // console.log(await response.json());

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
  for (const key in postData) {
    if (Object.prototype.hasOwnProperty.call(postData, key)) {
      const value = postData[key];
      if (
        Array.isArray(value) &&
        (key === "attaches" || key === "medicine_photo")
      ) {
        // If the value is an array, append each file separately
        value.forEach((file) => {
          formData.append(`${key}[]`, file);
          // console.log(`Appended ${key}: ${file.name} to formData`);
        });
      } else {
        formData.append(key, value);
        // console.log(`Appended ${key}: ${value.name || value} to formData`);
      }
    }
  }
  try {
    console.log(formData);

    const response = await fetch(baseUrl + api, {
      method: "POST",
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
        ...header,
      },
      body: formData,
    });
    if (response.status === 401) {
      expireToken();
    }
    return response;
  } catch (error) {
    console.log(error.stack, error.message);
    throw new Error("Error in post request");
  }
};
