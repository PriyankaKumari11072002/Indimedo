// import React from "react";
// import { useFormik } from "formik";
// import Select from "react-select";
// import * as Yup from "yup";

// // Define your validation schema
// const validationSchema = Yup.object().shape({
//   state: Yup.string().required("State is required"),
// });

// // Define the options for the dropdown
// const stateOptions = [
//   { value: "ca", label: "California" },
//   { value: "ny", label: "New York" },
//   { value: "tx", label: "Texas" },
//   // Add more states as needed
// ];

// const App = () => {
//   // useFormik hook to handle form logic
//   const formik = useFormik({
//     initialValues: {
//       state: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log("Form submitted:", values);
//     },
//   });

//   return (
//     <div className="container mt-5">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="mb-3">
//           {/* Use React Select within the form */}
//           <Select
//             name="state"
//             options={stateOptions}
//             value={stateOptions.find(
//               (option) => option.value === formik.values.state
//             )}
//             onChange={(selectedOption) =>
//               formik.setFieldValue("state", selectedOption.value)
//             }
//             onBlur={() => formik.setFieldTouched("state", true)}
//             placeholder="Select State"
//           />
//           {formik.touched.state && formik.errors.state && (
//             <div className="text-danger">{formik.errors.state}</div>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";

const App = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const indianStates = [
      { id: 1, name: "Andhra Pradesh" },
      { id: 2, name: "Arunachal Pradesh" },
      { id: 3, name: "Assam" },
      { id: 4, name: "Bihar" },
      { id: 5, name: "Chhattisgarh" },
      { id: 6, name: "Goa" },
      { id: 7, name: "Gujarat" },
      { id: 8, name: "Haryana" },
      { id: 9, name: "Himachal Pradesh" },
      { id: 10, name: "Jharkhand" },
      { id: 11, name: "Karnataka" },
      { id: 12, name: "Kerala" },
      { id: 13, name: "Madhya Pradesh" },
      { id: 14, name: "Maharashtra" },
      { id: 15, name: "Manipur" },
      { id: 16, name: "Meghalaya" },
      { id: 17, name: "Mizoram" },
      { id: 18, name: "Nagaland" },
      { id: 19, name: "Odisha" },
      { id: 20, name: "Punjab" },
      { id: 21, name: "Rajasthan" },
      { id: 22, name: "Sikkim" },
      { id: 23, name: "Tamil Nadu" },
      { id: 24, name: "Telangana" },
      { id: 25, name: "Tripura" },
      { id: 26, name: "Uttar Pradesh" },
      { id: 27, name: "Uttarakhand" },
      { id: 28, name: "West Bengal" },
      { id: 29, name: "Andaman and Nicobar Islands" },
      { id: 30, name: "Chandigarh" },
      { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu" },
      { id: 32, name: "Delhi" },
      { id: 33, name: "Ladakh" },
      { id: 34, name: "Lakshadweep" },
      { id: 35, name: "Puducherry" },
    ];

    const stateOptions = indianStates.map((state) => ({
      value: state.id,
      label: state.name,
    }));
    setStates(stateOptions);
  }, []);

  useEffect(() => {
    const indianCities = {
      1: [
        { id: 101, name: "Visakhapatnam" },
        { id: 102, name: "Vijayawada" },
        { id: 103, name: "Guntur" },
        { id: 104, name: "Nellore" },
      ],
      2: [
        { id: 201, name: "Itanagar" },
        { id: 202, name: "Naharlagun" },
        { id: 203, name: "Pasighat" },
        { id: 204, name: "Roing" },
      ],
      3: [
        { id: 301, name: "Guwahati" },
        { id: 302, name: "Dibrugarh" },
        { id: 303, name: "Jorhat" },
        { id: 304, name: "Silchar" },
      ],
      4: [
        { id: 401, name: "Patna" },
        { id: 402, name: "Gaya" },
        { id: 403, name: "Muzaffarpur" },
        { id: 404, name: "Bhagalpur" },
      ],
      5: [
        { id: 501, name: "Raipur" },
        { id: 502, name: "Bilaspur" },
        { id: 503, name: "Bhilai" },
        { id: 504, name: "Durg" },
      ],
      6: [
        { id: 601, name: "Panaji" },
        { id: 602, name: "Vasco da Gama" },
        { id: 603, name: "Margao" },
        { id: 604, name: "Mapusa" },
      ],
      7: [
        { id: 701, name: "Ahmedabad" },
        { id: 702, name: "Surat" },
        { id: 703, name: "Vadodara" },
        { id: 704, name: "Rajkot" },
      ],
      8: [
        { id: 801, name: "Chandigarh" },
        { id: 802, name: "Faridabad" },
        { id: 803, name: "Gurgaon" },
        { id: 804, name: "Rohtak" },
      ],
      9: [
        { id: 901, name: "Shimla" },
        { id: 902, name: "Manali" },
        { id: 903, name: "Dharamshala" },
        { id: 904, name: "Solan" },
      ],
      10: [
        { id: 1001, name: "Ranchi" },
        { id: 1002, name: "Jamshedpur" },
        { id: 1003, name: "Dhanbad" },
        { id: 1004, name: "Bokaro" },
      ],
      11: [
        { id: 1101, name: "Bengaluru" },
        { id: 1102, name: "Mysuru" },
        { id: 1103, name: "Mangaluru" },
        { id: 1104, name: "Hubballi" },
      ],
      12: [
        { id: 1201, name: "Thiruvananthapuram" },
        { id: 1202, name: "Kochi" },
        { id: 1203, name: "Kozhikode" },
        { id: 1204, name: "Thrissur" },
      ],
      13: [
        { id: 1301, name: "Bhopal" },
        { id: 1302, name: "Indore" },
        { id: 1303, name: "Jabalpur" },
        { id: 1304, name: "Gwalior" },
      ],
      14: [
        { id: 1401, name: "Mumbai" },
        { id: 1402, name: "Pune" },
        { id: 1403, name: "Nagpur" },
        { id: 1404, name: "Thane" },
      ],
      15: [
        { id: 1501, name: "Imphal" },
        { id: 1502, name: "Thoubal" },
        { id: 1503, name: "Bishnupur" },
        { id: 1504, name: "Churachandpur" },
      ],
      16: [
        { id: 1601, name: "Shillong" },
        { id: 1602, name: "Tura" },
        { id: 1603, name: "Jowai" },
        { id: 1604, name: "Nongpoh" },
      ],
      17: [
        { id: 1701, name: "Aizawl" },
        { id: 1702, name: "Lunglei" },
        { id: 1703, name: "Champhai" },
        { id: 1704, name: "Saiha" },
      ],
      18: [
        { id: 1801, name: "Kohima" },
        { id: 1802, name: "Dimapur" },
        { id: 1803, name: "Mokokchung" },
        { id: 1804, name: "Tuensang" },
      ],
      19: [
        { id: 1901, name: "Bhubaneswar" },
        { id: 1902, name: "Cuttack" },
        { id: 1903, name: "Rourkela" },
        { id: 1904, name: "Puri" },
      ],
      20: [
        { id: 2001, name: "Amritsar" },
        { id: 2002, name: "Ludhiana" },
        { id: 2003, name: "Jalandhar" },
        { id: 2004, name: "Patiala" },
      ],
      21: [
        { id: 2101, name: "Jaipur" },
        { id: 2102, name: "Jodhpur" },
        { id: 2103, name: "Udaipur" },
        { id: 2104, name: "Kota" },
      ],
      22: [
        { id: 2201, name: "Gangtok" },
        { id: 2202, name: "Namchi" },
        { id: 2203, name: "Mangan" },
        { id: 2204, name: "Geyzing" },
      ],
      23: [
        { id: 2301, name: "Chennai" },
        { id: 2302, name: "Coimbatore" },
        { id: 2303, name: "Madurai" },
        { id: 2304, name: "Tiruchirappalli" },
      ],
      24: [
        { id: 2401, name: "Hyderabad" },
        { id: 2402, name: "Secunderabad" },
        { id: 2403, name: "Warangal" },
        { id: 2404, name: "Nizamabad" },
      ],
      25: [
        { id: 2501, name: "Agartala" },
        { id: 2502, name: "Udaipur" },
        { id: 2503, name: "Dharmanagar" },
        { id: 2504, name: "Kailasahar" },
      ],
      26: [
        { id: 2601, name: "Lucknow" },
        { id: 2602, name: "Kanpur" },
        { id: 2603, name: "Agra" },
        { id: 2604, name: "Varanasi" },
      ],
      27: [
        { id: 2701, name: "Dehradun" },
        { id: 2702, name: "Haridwar" },
        { id: 2703, name: "Rishikesh" },
        { id: 2704, name: "Nainital" },
      ],
      28: [
        { id: 2801, name: "Kolkata" },
        { id: 2802, name: "Howrah" },
        { id: 2803, name: "Durgapur" },
        { id: 2804, name: "Asansol" },
      ],
      29: [
        { id: 2901, name: "Port Blair" },
        { id: 2902, name: "Havelock Island" },
        { id: 2903, name: "Neil Island" },
        { id: 2904, name: "Diglipur" },
      ],
      30: [
        { id: 3001, name: "Chandigarh" },
        { id: 3002, name: "Mohali" },
        { id: 3003, name: "Panchkula" },
        { id: 3004, name: "Zirakpur" },
      ],
      31: [
        { id: 3101, name: "Daman" },
        { id: 3102, name: "Diu" },
        { id: 3103, name: "Silvassa" },
        { id: 3104, name: "Dadra" },
      ],
      32: [
        { id: 3201, name: "New Delhi" },
        { id: 3202, name: "South Delhi" },
        { id: 3203, name: "North Delhi" },
        { id: 3204, name: "East Delhi" },
      ],
      33: [
        { id: 3301, name: "Leh" },
        { id: 3302, name: "Kargil" },
        { id: 3303, name: "Hemis" },
        { id: 3304, name: "Drass" },
      ],
      34: [
        { id: 3401, name: "Kavaratti" },
        { id: 3402, name: "Agatti" },
        { id: 3403, name: "Amini" },
        { id: 3404, name: "Andrott" },
      ],
      35: [
        { id: 3501, name: "Puducherry" },
        { id: 3502, name: "Karaikal" },
        { id: 3503, name: "Mahe" },
        { id: 3504, name: "Yanam" },
      ],
    };

    if (selectedState) {
      const cityOptions = indianCities[selectedState.value].map((city) => ({
        value: city.id,
        label: city.name,
      }));
      setCities(cityOptions);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      pincode: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[a-zA-Z\s]+$/),
      address: Yup.string()
        .required("Address is required")
        .max(255, "Address is too long"),
      phone: Yup.string()
        .matches(/^[789]\d{9}$/, "Invalid phone number")
        .required("Phone no. is required")
        .max(10, "Phone no. must be exactly 10 digits"),
      email: Yup.string().email("Invalid email format"),
      city: Yup.object().required("City is required"),
      state: Yup.object().required("State is required"),
      // state: Yup.object().shape({
      //   value: Yup.string().required("State is required"),
      //   label: Yup.string().required("State is required"),
      // }),
      // city: Yup.object().shape({
      //   value: Yup.string().required("City is required"),
      //   label: Yup.string().required("City is required"),
      // }),
      pincode: Yup.string().required("Pincode is required"),
    }),
    onSubmit: (values) => {
      let timeout ;
      clearTimeout(timeout);
     timeout =   setTimeout(async()=>{
        try{
          console.log("Form submitted:", values);   
        }catch(error){
  
          console.log(error,'error')
        }
       },5000)
      
      
    },
  });

  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-danger">{formik.errors.phone}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email (Optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-danger">{formik.errors.address}</div>
          )}
        </div>
        <Select
          name="state"
          value={selectedState}
          onChange={(value) => {
            setSelectedState(value);
            formik.setFieldValue("state", value);
          }}
          options={states}
          placeholder="Select State"
        />
        {formik.touched.state && formik.errors.state && (
          <div className="text-danger">{formik.errors.state}</div>
        )}

        <Select
          name="city"
          value={selectedCity}
          onChange={(value) => {
            setSelectedCity(value);
            formik.setFieldValue("city", value);
          }}
          options={cities}
          placeholder="Select City"
        />
        {formik.touched.city && formik.errors.city && (
          <div className="text-danger">{formik.errors.city}</div>
        )}

        <div className="mb-3">
          <input
            type="text"
            name="pincode"
            className="form-control"
            placeholder="Pincode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode}
          />
          {formik.touched.pincode && formik.errors.pincode && (
            <div className="text-danger">{formik.errors.pincode}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default App;
