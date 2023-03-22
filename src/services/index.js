import axios from "axios";

export const getToken = async () => {
  try {
    return await axios.post(
      "https://apisandbox.synthetix.com/2.0/external/session",
      "",
      {
        headers: {
          APPLICATIONKEY: "7b829f3aeaf04561471b8e258739da3d",
          CONSUMERKEY: "9800bcc32393905388563bb784b84720",
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const checkTokenStatus = async () => {
  try {
    return await axios.get(
      "https://apisandbox.synthetix.com/2.0/external/session",

      {
        headers: {
          APPLICATIONKEY: "7b829f3aeaf04561471b8e258739da3d",
          CONSUMERKEY: "9800bcc32393905388563bb784b84720",
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const searchArticle = async (query, token) => {
  try {
    return await axios.post(
      "https://apisandbox.synthetix.com/2.0/external/search",
      query,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          APPLICATIONKEY: "7b829f3aeaf04561471b8e258739da3d",
          CONSUMERKEY: "9800bcc32393905388563bb784b84720",
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const postArticle = async (query, token) => {
  try {
    return await axios.post(
      "https://apisandbox.synthetix.com/2.0/external/article",
      query,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          APPLICATIONKEY: "7b829f3aeaf04561471b8e258739da3d",
          CONSUMERKEY: "9800bcc32393905388563bb784b84720",
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
