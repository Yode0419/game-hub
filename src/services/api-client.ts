import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c510b06389eb4788961331a29305cf59",
  },
});
