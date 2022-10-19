import { useRef } from "react";
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
    
    patientPopupData: null,
    popupData: null,
    pharmaPopupData : null,
})

export const AdminProvider = ({ children }) => {
    const [patients, setPatients] = useState(null);
    const [doctors, setDoctors] = useState(null);
    const [pharma, setPharma] = useState(null);
    const [ambulance, setAmbulance] = useState(null);
    
    // const [popupData, setPopupData] = useState(null);
  const popupData = useRef(null);
  const patientPopupData = useRef(null);
  const pharmaPopupData = useRef(null);

    const value = {
      pharmaPopupData,
      popupData, patientPopupData,
      ambulance, setAmbulance,
      patients,setPatients,
      doctors,setDoctors,
      pharma,setPharma,
    };

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}