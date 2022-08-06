import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const getMiles = () => API.get("/milestone");
export const createTour = (formData) => API.post("/project", formData);
export const getprojects = () => API.get("/project");
export const getTour = (id) => API.get(`/tour/${id}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/tour/${id}`, updatedTourData);
  export const getProjectsByUser = (userId) => API.get(`/project/userProjects/${userId}`);
  export const getMilesByUser = (userId) => API.get(`/milestone/miles/${userId}`);
  export const createMile = (mile) => API.post("/milestone", mile);

export const getToursBySearch = (searchQuery) =>
  API.get(`/tour/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);
export const  createCareTaker = (formData) => API.get('/caretaker' ,formData);
export const getCaretaker = () => API.post('/caretaker');
export const getCaretakerByUser = (userId) => API.patch('/caretaker');