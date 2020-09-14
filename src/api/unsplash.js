import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID h6yKHrseyNNS8mds_RKYAT8-M-r_MXaw5d0rSkX_Yxo",
  },
});
