import { useState, createContext } from "react";

export const AdminContext = createContext({
    patients: null,
    setPatients: () => null,
    doctors: null,
    setDoctors: () => null,
    pharma: null,
    setPharma: () => null,
    ambulance: null,
    setAmbulance: () => null,
    patientDetail: null,
    setPatientDetails: () => null,
    doctorDetail: null,
    setDoctorDetails: () => null,
})

export const AdminProvider = ({ children }) => {
    const [patients, setPatients] = useState(null);
    const [patientDetail, setPatientDetails] = useState(null);
    const [doctors, setDoctors] = useState(null);
    const [pharma, setPharma] = useState(null);
    const [ambulance, setAmbulance] = useState(null);
    const [doctorDetail, setDoctorDetails] = useState(null);

    const value = {
      doctorDetail, setDoctorDetails,
      patientDetail, setPatientDetails,
      ambulance, setAmbulance,
      patients,setPatients,
      doctors,setDoctors,
      pharma,setPharma,
    };

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}