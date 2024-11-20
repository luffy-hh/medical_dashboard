import { configureStore } from "@reduxjs/toolkit";
import ThemeConfigSlice from "./ThemeConfig/themeConfigSlice";
import patientSlice from "./Patients/patientSlice.jsx";
import categorySlice from "./category/categorySlice.jsx";
import userSlice from "./User/userSlice.jsx";
import labRecordSlice from "./labRecords/labRecordSlice.jsx";
import bannerSlice from "./banners/bannerSlice.jsx";
import medicineSlice from "./medicines/medicineSlice.jsx";
import appointmentSlice from "./appointment/appointmentSlice.jsx";
import authSlice from "./auth/authSlice.jsx";
import dailyCheckSlice from "./dailyCheck/dailyCheckSlice.jsx";
import masterDataSlice from "./masterData/masterDataSlice.jsx";
import softwareUpdateSlice from "./softwareUpdates/softwareUpdateSlice.jsx";

export const store = configureStore({
  reducer: {
    themeConfig: ThemeConfigSlice,
    patients: patientSlice,
    categories: categorySlice,
    users: userSlice,
    labRecords: labRecordSlice,
    banners: bannerSlice,
    medicines: medicineSlice,
    appointments: appointmentSlice,
    auth: authSlice,
    dailyChecks: dailyCheckSlice,
    masterData: masterDataSlice,
    softwareUpdates: softwareUpdateSlice,
  },
});

export default store;
