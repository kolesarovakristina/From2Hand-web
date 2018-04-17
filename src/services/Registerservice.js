import axios from "axios";

async function register(username, email, password) {
  const data = JSON.stringify({ username, email, password });
  const options = {
    headers: { "Content-type": "application/json" },
    method: "POST",
    url: "/api/api/account/create",
    data
  };
  return axios(options);
}
export default register;
