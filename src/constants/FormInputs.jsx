import { bloodGroupData, genderData } from "./SelectData.jsx";

export const loginInputs = () => {
  return [
    {
      label: "LoginId",
      name: "loginId",
      type: "text",
      placeholder: "Enter LoginId",
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
          message: "Please enter your LoginId",
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
        },
      ],
    },
    {
      label: "Phone Number",
      name: "phone_no",
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
          pattern: /[0-9]+/g, // This will allow only numbers
          message: "Please enter valid Phone Number",
        },
        {
          min: 7,
          max: 11,
          message: "Phone number must be 7 to 11 digits long",
        },
      ],
    },
    {
      label: "Blood Group",
      name: "blood_type",
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
    },
    {
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
          // pattern: /^(?!\s*$).+$/,
          required: true,
          message: "Please choose Gender",
        },
      ],
    },
    {
      label: "Date of Birth",
      name: "dob",
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
    {
      label: "Photo",
      name: "member_photo",
      type: "file",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
    },
    {
      label: "Selected Photo",
      name: "selected_photo",
      type: "file",
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
          message: "Please enter Photo",
        },
      ],
    },
    {
      label: "Unselected Photo",
      name: "unselected_photo",
      type: "file",
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
          message: "Please enter Photo",
        },
      ],
    },
  ];
};

export const dailyInputs = () => {
  return [
    {
      label: "Blood Sugar Level (Before Meal)",
      name: "before_meal",
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
          max: 3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },
    {
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
          max: 3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },
    {
      label: "Systolic Blood Pressure",
      name: "systolic_blood_pressure",
      type: "number",
      placeholder: "Enter Systolic Blood Pressure",
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
          max: 3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },
    {
      label: "Diastolic Blood Pressure",
      name: "diastolic_blood_pressure",
      type: "number",
      placeholder: "Enter Diastolic Blood Pressure",
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
          max: 3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },
    {
      label: "Temperature",
      name: "temperature",
      type: "number",
      placeholder: "Enter Temperature",
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
          max: 3,
          message: "Enter valid Temperature",
        },
      ],
    },
    {
      label: "Pulse",
      name: "pulse",
      type: "number",
      placeholder: "Enter Pulse",
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
          max: 3,
          message: "Enter valid Pulse",
        },
      ],
    },
  ];
};

export const dailyBloodSugarInputs = () => {
  return [
    {
      label: "Blood Sugar Level (Before Meal)",
      name: "(Before Meal)",
      type: "number",
      placeholder: "Enter Blood Sugar Level (Before Meal)",
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
          max: 3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },
    {
      label: "Blood Sugar Level (After Meal)",
      name: "(After Meal)",
      type: "number",
      placeholder: "Enter Blood Sugar Level (After Meal)",
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
          max: 3,
          message: "Enter valid Blood Sugar Level",
        },
      ],
    },

    {
      label: "Record Date",
      name: "record_date",
      type: "date",
      showTime: true,
      placeholder: "Enter Record Date",
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
    },
    {
      label: "Record Photo",
      name: "attaches",
      type: "file",
      // multiple: true,
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
    },
    {
      label: "Note",
      name: "note",
      type: "text",
      placeholder: "Enter Note",
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
    },
  ];
};

export const dailyBloodPressureInputs = () => {
  return [
    {
      label: "Systolic Blood Pressure",
      name: "Systolic",
      type: "number",
      placeholder: "Enter Systolic Blood Pressure",
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
          max: 3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },
    {
      label: "Diastolic Blood Pressure",
      name: "Diastolic",
      type: "number",
      placeholder: "Enter Diastolic Blood Pressure",
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
          max: 3,
          message: "Enter valid Blood Pressure",
        },
      ],
    },
    {
      label: "Record Date",
      name: "record_date",
      type: "date",
      showTime: true,
      placeholder: "Enter Record Date",
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
    },
    {
      label: "Record Photo",
      name: "attaches",
      type: "file",
      // multiple: true,
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
    },
    {
      label: "Note",
      name: "note",
      type: "text",
      placeholder: "Enter Note",
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
    },
  ];
};

export const dailyTemperatureInputs = () => {
  return [
    {
      label: "Temperature",
      name: "°F",
      type: "number",
      placeholder: "Enter Temperature",
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
          max: 4,
          message: "Enter valid Temperature",
        },
      ],
    },
    {
      label: "Record Date",
      name: "record_date",
      type: "date",
      showTime: true,
      placeholder: "Enter Record Date",
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
    },
    {
      label: "Record Photo",
      name: "attaches",
      type: "file",
      // multiple: true,
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
    },
    {
      label: "Note",
      name: "note",
      type: "text",
      placeholder: "Enter Note",
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
    },
  ];
};

export const dailyPulseRateInputs = () => {
  return [
    {
      label: "Pulse Rate",
      name: "bpm",
      type: "number",
      placeholder: "Enter Pulse Rate",
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
          max: 3,
          message: "Enter valid Pulse Rate",
        },
      ],
    },
    {
      label: "Record Date",
      name: "record_date",
      type: "date",
      showTime: true,
      placeholder: "Enter Record Date",
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
    },
    {
      label: "Record Photo",
      name: "attaches",
      type: "file",
      // multiple: true,
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
    },
    {
      label: "Note",
      name: "note",
      type: "text",
      placeholder: "Enter Note",
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
    },
  ];
};

export const dailyBloodOxygenInputs = () => {
  return [
    {
      label: "Blood Oxygen Level",
      name: "%",
      type: "number",
      placeholder: "Enter Blood Oxygen Level",
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
          max: 3,
          message: "Enter valid Blood Oxygen Level",
        },
      ],
    },
    {
      label: "Record Date",
      name: "record_date",
      type: "date",
      showTime: true,
      placeholder: "Enter Record Date",
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
    },
    {
      label: "Record Photo",
      name: "attaches",
      type: "file",
      // multiple: true,
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
    },
    {
      label: "Note",
      name: "note",
      type: "text",
      placeholder: "Enter Note",
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
    },
  ];
};

export const userCreateInputs = () => {
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
          message: "Enter Name",
        },
      ],
    },
    {
      label: "Login ID",
      name: "loginId",
      type: "text",
      placeholder: "Enter Login ID",
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
          message: "Enter Login ID",
        },
      ],
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
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
          message: "Enter Password",
        },
      ],
    },
  ];
};

export const userUpdateInputs = () => {
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
          message: "Enter Name",
        },
      ],
    },
    {
      label: "Login ID",
      name: "loginId",
      type: "text",
      placeholder: "Enter Login ID",
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
          message: "Enter Login ID",
        },
      ],
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
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
    },
  ];
};

export const categoryCreateInputs = () => {
  return [
    {
      label: "Name",
      name: "cat_name",
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
          message: "Enter Name",
        },
      ],
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      placeholder: "Enter Slug",
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
          message: "Enter Slug",
        },
      ],
    },
    {
      label: "Unit",
      name: "unit",
      type: "text",
      placeholder: "Enter Unit",
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
          message: "Please Enter Unit",
        },
      ],
    },
    {
      label: "Has Multiple Values",
      name: "is_multiple",
      type: "radioGroup",
      options: [
        {
          label: "Yes",
          value: 1,
        },
        {
          label: "No",
          value: 0,
        },
      ],
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
          message: "Please Choose is Multiple or not",
        },
      ],
    },
    {
      label: "Warning Point",
      name: "threshold",
      type: "number",
      placeholder: "Enter warning point",
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
          max: 3,
          message: "Please Enter a Valid value.",
        },
      ],
    },
    {
      label: "Warning Pont 2",
      name: "threshold2",
      type: "number",
      placeholder: "Enter warning point",
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
    },
    {
      label: "Icon Image",
      name: "icon",
      type: "file",
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
          message: "Please Enter a Valid value.",
        },
      ],
    },
  ];
};

export const bannerCreateInputs = () => {
  return [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title",
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
          message: "Title must be Entered",
        },
      ],
    },
    {
      label: "Image",
      name: "banner_img",
      type: "file",
      // placeholder: "Enter Description",
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
          message: "Banner Image must be Choosen",
        },
      ],
    },
  ];
};

export const medicineCreateInputs = (
  dayTypeValues,
  setDayTypeValues,
  mealTypeValues,
  setMealTypeValues,
) => {
  // const handleDayTypeChange = (values) => {
  //   console.log(values);
  //   setDayTypeValues([...dayTypeValues, ...values]);
  // };
  return [
    {
      label: "Start Taking Date",
      name: "start_date",
      type: "date",
      placeholder: "Enter Start Taking Date",
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
          message: "Enter Start Taking Date",
        },
      ],
    },
    {
      label: "End Taking Date",
      name: "end_date",
      type: "date",
      placeholder: "Enter End Taking Date",
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
          message: "Enter End Taking Date",
        },
      ],
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title",
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
          message: "Enter Title",
        },
      ],
    },
    {
      label: "Medicine Name",
      name: "medicine_name",
      type: "text",
      placeholder: "Enter Description",
      className: "w-full",
      // hidden: !dayTypeValues.includes("morning"),
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
          message: "Enter Description",
        },
      ],
    },
    {
      label: "Medicine Photo",
      name: "medicine_photo",
      type: "file",
      // placeholder: "Enter Description",
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
          message: "Please Add medicine Photo",
        },
      ],
    },
    {
      label: "Morning",
      name: "morning",
      type: "checkbox",
      // onChange: handleDayTypeChange,
      options: [{ label: "Morning", value: "morning" }],
      className: "w-auto",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
    },
    {
      label: "Before or After(Breakfast)",
      name: "morning_meal_type",
      type: "radioGroup",
      className: "w-full",
      // hidden: true,
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Select Before/After Meal",
      //   },
      // ],
      options: [
        {
          label: "Before Meal",
          value: "Before Meal",
        },
        {
          label: "After Meal",
          value: "After Meal",
        },
      ],
    },
    {
      label: "Morning Medicine Take Time",
      name: "morning_reminder_time",
      type: "time",
      className: "w-full",
      // hidden: !dayTypeValues.includes("morning"),
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Enter Medicine Take Time",
      //   },
      // ],
    },
    {
      label: "Afternoon",
      name: "afternoon",
      type: "checkbox",
      // onChange: handleDayTypeChange,
      options: [{ label: "Afternoon", value: "afternoon" }],
      className: "w-auto",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
    },
    {
      label: "Before or After(Lunch)",
      name: "afternoon_meal_type",
      type: "radioGroup",
      className: "w-full",
      // hidden: true,
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Select Before/After Meal",
      //   },
      // ],
      options: [
        {
          label: "Before Meal",
          value: "Before Meal",
        },
        {
          label: "After Meal",
          value: "After Meal",
        },
      ],
    },
    {
      label: "Afternoon Medicine Take Time",
      name: "afternoon_reminder_time",
      type: "time",
      className: "w-full",
      // hidden: !dayTypeValues.includes("morning"),
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Enter Medicine Take Time",
      //   },
      // ],
    },
    {
      label: "Night",
      name: "night",
      type: "checkbox",
      // onChange: handleDayTypeChange,
      options: [{ label: "Night", value: "night" }],
      className: "w-auto",
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
    },
    {
      label: "Before or After(Dinner)",
      name: "night_meal_type",
      type: "radioGroup",
      className: "w-full",
      // hidden: true,
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Select Before/After Meal",
      //   },
      // ],
      options: [
        {
          label: "Before Meal",
          value: "Before Meal",
        },
        {
          label: "After Meal",
          value: "After Meal",
        },
      ],
    },
    {
      label: "Night Medicine Take Time",
      name: "night_reminder_time",
      type: "time",
      className: "w-full",
      // hidden: !dayTypeValues.includes("morning"),
      layout: {
        layout: "vertical",
        labelCol: {
          span: 24,
        },
        wrapperCol: {
          span: 24,
        },
      },
      // rules: [
      //   {
      //     required: true,
      //     message: "Enter Medicine Take Time",
      //   },
      // ],
    },
    // {
    //   label: "Before or After Meal",
    //   name: "meal_type",
    //   type: "select",
    //   className: "w-full",
    //   hidden: true,
    //   layout: {
    //     layout: "vertical",
    //     labelCol: {
    //       span: 24,
    //     },
    //     wrapperCol: {
    //       span: 24,
    //     },
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       message: "Select Before or After Meal",
    //     },
    //   ],
    //   options: [
    //     { label: "Select Before or After Meal", value: "" },
    //     {
    //       label: "Before Meal",
    //       value: "Before",
    //     },
    //     {
    //       label: "After Meal",
    //       value: "After",
    //     },
    //   ],
    // },
    // {
    //   label: "Morning Medicine Take Time",
    //   name: "reminder_time",
    //   type: "time",
    //   className: "w-full",
    //   hidden: !dayTypeValues.includes("morning"),
    //   layout: {
    //     layout: "vertical",
    //     labelCol: {
    //       span: 24,
    //     },
    //     wrapperCol: {
    //       span: 24,
    //     },
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       message: "Enter Medicine Take Time",
    //     },
    //   ],
    // },
    // {
    //   label: "Image",
    //   name: "medicine_attach",
    //   type: "file",
    //   className: "w-full",
    //   hidden: true,
    //   layout: {
    //     layout: "vertical",
    //     labelCol: {
    //       span: 24,
    //     },
    //     wrapperCol: {
    //       span: 24,
    //     },
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       message: "Enter Image",
    //     },
    //   ],
    // },
  ];
  // if (dayTypeValues.includes("morning")) {
  //   inputs.push();
  // }
  // if (dayTypeValues.includes("afternoon")) {
  //   inputs.push();
  // }
  // if (dayTypeValues.includes("night")) {
  //   inputs.push();
  // }

  // return inputs;
};

export const appointmentCreateInputs = () => {
  return [
    {
      label: "Hospital Name",
      name: "check_location",
      type: "text",
      placeholder: "Enter Hospital Name",
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
          message: "Enter Patient Name",
        },
      ],
    },
    {
      label: "Check Category",
      name: "title",
      type: "text",
      placeholder: "Enter Check Category",
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
          message: "Enter Check Category",
        },
      ],
    },
    {
      label: "About",
      name: "about",
      type: "text",
      placeholder: "Enter About",
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
          message: "PleaseEnter About",
        },
      ],
    },
    {
      label: "Appointment Date",
      name: "appointment_date",
      type: "date",
      // showTime: true,
      placeholder: "Enter Appointment Date",
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
          message: "Enter Appointment Date",
        },
      ],
    },
    {
      label: "Appointment Time",
      name: "appointment_time",
      type: "time",
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
          message: "Enter Appointment Time",
        },
      ],
    },
    {
      label: "Reminder Time",
      name: "reminder_time",
      type: "time",
      placeholder: "Enter Reminder Time",
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
          message: "Enter Reminder Time",
        },
      ],
    },
  ];
};

export const medicalCheckupCreateInputs = () => {
  return [
    {
      label: "Hospital Name",
      name: "lab_name",
      type: "text",
      placeholder: "Enter Checkup Name",
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
          message: "Enter Checkup Name",
        },
      ],
    },
    {
      label: "Category",
      name: "title",
      type: "text",
      placeholder: "Enter Category",
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
          message: "Enter Category",
        },
      ],
    },
    {
      label: "About",
      name: "description",
      type: "text",
      placeholder: "Enter About",
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
          message: "PleaseEnter About",
        },
      ],
    },
    {
      label: "Checkup Date",
      name: "lab_date",
      type: "date",
      placeholder: "Enter Checkup Date",
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
          message: "Enter Checkup Date",
        },
      ],
    },
    {
      label: "Attachments",
      name: "attaches",
      type: "file",
      multiple: true,
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
          message: "Enter Attachments",
        },
      ],
    },
  ];
};
