import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "https://doc00.herokuapp.com",
});

let id = Cookies.get("RentOutToken");
API.interceptors.request.use((req) => {
  if (id) {
    req.headers["Authorization"] = `Bearer ${id}`;
  }
  return req;
});

export const Signin = (SigninData) => API.post("/admin/adminLogin", SigninData);

export const AllPatients = () => API.get(`/admin/patients?pg=1&1m=10`);
export const AllDoctors = () => API.get(`/admin/doctors`);
export const AllPharmas = () => API.get(`/admin/pharmacies`);
export const AllAmbulance = () => API.get(`/admin/ambulances`);

export const getPatientDetail = (patientId) =>
  API.get(`/admin/patientbyid?patientId=${patientId}`);

export const getDoctorDetail = (doctorId) =>
  API.get(`/admin/doctorbyid?doctorId=${doctorId}`);

export const getPharmaDetail = (pharmaId) =>
  API.get(`/admin/pharmacybyid?pharmacyId=${pharmaId}`);

export const getAmbulanceDetail = (ambulanceId) =>
  API.get(`/admin/ambulancebyid?ambulanceId=${ambulanceId}`);
