import axios from "axios";
let userToken=localStorage.getItem("userInfo");
let token;
{userToken!=null?token=JSON.parse(userToken).token:token=""}
export default axios.create({
  baseURL: "https://localhost:44349/api",
  headers: {
    'Authorization': 'Bearer ' + token
  }
});