import axios from "axios";

const instance = () => {
  const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";
  const token = "test";

  const PostInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const GetInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return { PostInstance, GetInstance };
};
