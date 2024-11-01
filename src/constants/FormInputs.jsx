import {bloodGroupData, genderData} from "./SelectData.jsx";

export const loginInputs = () => {
  return [
    {
      label: "Email (Or) LoginId",
      name: "login",
      type: "text",
      placeholder: "Enter Email (Or) LoginId",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please enter your Email (Or) LoginId",
        },
      ],
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      placeholder: "Enter Password",
      rules: [
        {
          required: true,
          message: "Please enter your Password",
        },
      ],
    },
  ];
};

export const patientInputs = () => {
  return [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please enter Name",
        }
      ],
    },
    {
      label: "Phone Number",
      name: "phone_number",
      type: "text",
      placeholder: "Enter Phone Number",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          pattern: /[0-9]+/g,// This will allow only numbers
          message: "Please enter valid Phone Number",
        },
        {
          min:7,max:11,
          message: "Phone number must be 7 to 11 digits long",
        }
      ],
    },
    {
      label:"Blood Group",
      name: "blood_group",
      type: "select",
      options: bloodGroupData,
      placeholder: "Choose Blood Group",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please select Blood Group",
        },
      ],
    },{
    label: "Weight",
      name: "weight",
      type: "number",
      placeholder: "Enter Weight",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please enter Weight",
        },
      ],
    },
    {
      label: "Height",
      name: "height",
      type: "number",
      placeholder: "Enter Height",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please enter Height",
        },
      ],
    },
      {
      label: "Gender",
      name: "gender",
      type: "select",
      options: genderData,
      placeholder: "Choose Gender",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          pattern: /^(?!\s*$).+$/,
          required: true,
          message: "Please choose Gender",
        },
      ],
    },
    {
      label: "Date of Birth",
      name: "date_of_birth",
      type: "date",
      placeholder: "Choose Date of Birth",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          required: true,
          message: "Please enter Date of Birth",
        },
      ],
    },
  ];
};

export const dailyInputs=()=>{
  return [
    {
      label:"Blood Sugar Level (Before Meal)",
      name:"before_meal",
      type:"number",
      placeholder:"Enter Sugar Level",
      className:"w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },{
    label: "Blood Sugar Level (After Meal)",
      name: "after_meal",
      type: "number",
      placeholder: "Enter Sugar Level",
      className: "w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },{
    label:"Systolic Blood Pressure",
      name:"systolic_blood_pressure",
      type:"number",
      placeholder:"Enter Systolic Blood Pressure",
      className:"w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },
    {
      label:"Diastolic Blood Pressure",
      name:"diastolic_blood_pressure",
      type:"number",
      placeholder:"Enter Diastolic Blood Pressure",
      className:"w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },{
    label:"Temperature",
      name:"temperature",
      type:"number",
      placeholder:"Enter Temperature",
      className:"w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Temperature",
        },
      ],
    },{
    label:"Pulse",
      name:"pulse",
      type:"number",
      placeholder:"Enter Pulse",
      className:"w-full",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      rules: [
        {
          max:3,
          message: "Enter valid Pulse",
        },
      ],
    },{
    
    }
  ];
}