import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://blog.trongggg.com/wp-json/posts_custom/v1`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPost() {
    return apiClient.get("/list_post");
  },
  getPostDetails(id) {
    return apiClient.get("/list_post/" + id);
  }
};
