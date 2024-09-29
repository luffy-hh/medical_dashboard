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
