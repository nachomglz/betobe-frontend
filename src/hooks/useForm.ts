import { useState } from "react";

const useForm = () => {
   const [state, setState] = useState({});

   const handleChange = (e: any) => {
      setState((state) => ({ ...state, [e.target.name]: e.target.value }));
   };

   const handleAgencyChange = (agencyInfo: any) => {
      setState((state) => ({ ...state, agency: agencyInfo }));
   };

   return [state, handleChange, handleAgencyChange];
};

export default useForm;
