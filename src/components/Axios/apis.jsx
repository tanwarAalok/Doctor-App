import axios from "axios";
const API = axios.create({
  baseURL: "https://doc00.herokuapp.com",
});

export const dashboard = (date) => API.get(`/admin/dashboard?date=${date}`);

export const AllPatients = () => API.get(`/admin/patients?pg=1&1m=10`);
export const AllDoctors = () => API.get(`/admin/doctors`);
export const AllPharmas = () => API.get(`/admin/pharmacies`);
export const AllAmbulance = () => API.get(`/admin/ambulances`);

//******************************************************************* */ 

export const patientManage = (data) => API.post(`/admin/managepatient`, data);
export const doctorManage = (data) => API.post(`/admin/managedoctor`, data);
export const pharmaManage = (data) => API.post(`/admin/managepharmacy`, data);
export const ambulanceManage = (data) => API.post(`/admin/manageambulance`, data);

//******************************************************************* */ 
export const getPatientDetail = (patientId) =>
  API.get(`/admin/patientbyid?patientId=${patientId}`);

export const getPatientDoctorCurrentBooking = (patientId) =>
  API.get(`/admin/currentAppointmentPatient?patientId=${patientId}`);

export const getPatientDoctorPastBooking = (patientId) =>
  API.get(`/admin/pastAppointmentPatient?patientId=${patientId}`);

export const getPatientPharmaCurrentBooking = (patientId) =>
  API.get(`/admin/currentRequestPatient?patientId=${patientId}`);

export const getPatientPharmaPastBooking = (patientId) =>
  API.get(`/admin/pastRequestPatient?patientId=${patientId}`);

export const getPatientAmbulanceCurrentBooking = (patientId) =>
  API.get(`/admin/currentBookingPatient?patientId=${patientId}`);

export const getPatientAmbulancePastBooking = (patientId) =>
  API.get(`/admin/pastBookingPatient?patientId=${patientId}`);


//******************************************************************* */ 

export const getDoctorDetail = (doctorId) =>
  API.get(`/admin/doctorbyid?doctorId=${doctorId}`);

export const getDoctorCurrentBooking = (doctorId) =>
  API.get(`/admin/currentAppointmentDoctor?doctorId=${doctorId}`);

export const getDoctorPastBooking = (doctorId) =>
  API.get(`/admin/pastAppointmentDoctor?doctorId=${doctorId}`);

//******************************************************************* */ 
export const getPharmaDetail = (pharmaId) =>
  API.get(`/admin/pharmacybyid?pharmacyId=${pharmaId}`);

export const getPharmaCurrentBooking = (pharmaId) =>
  API.get(`/admin/currentRequestPharmacy?pharmacyId=${pharmaId}`);

export const getPharmaPastBooking = (pharmaId) =>
  API.get(`/admin/pastRequestPharmacy?pharmacyId=${pharmaId}`);

//******************************************************************* */ 
export const getAmbulanceDetail = (ambulanceId) =>
  API.get(`/admin/ambulancebyid?ambulanceId=${ambulanceId}`);

export const getAmbulanceCurrentBooking = (ambulanceId) =>
  API.get(`/admin/currentBookingAmb?ambulanceId=${ambulanceId}`);

export const getAmbulancePastBooking = (ambulanceId) =>
  API.get(`/admin/pastBookingAmb?ambulanceId=${ambulanceId}`);
