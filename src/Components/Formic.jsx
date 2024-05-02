import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

const Formic = () => {
  const formValidation = (value) => {
    const err = { name: "", email: "", phone: "", password: "" };

    if (!value.name) {
      err.name = "*Required field";
    } else if (value.name.length < 5) {
      err.name = "*Minimum 5 characters";
    }

    if (!value.email) {
      err.email = "*Required field";
    } else if (value.email.length < 5) {
      err.email = "*Minimum 5 characters";
    }

    if (!value.phone) {
      err.phone = "*Required field";
    } else if (value.phone.length < 5) {
      err.phone = "*Minimum 5 characters";
    }

    if (!value.password) {
      err.password = "*Required field";
    } else if (value.password.length < 5) {
      err.password = "*Minimum 5 characters";
    }

    // console.log("Validation error: ", err);
    return err;
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validate: formValidation,
    onSubmit: (data) => {
      alert();
      console.log("Submitted data: ", data);
    },
  });

  return (
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{
        padding: "0px",
        marginTop: "50px",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid black",
        width: "300px",
        Height: "350px",
        backgroundColor: "white",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        type="text"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}{" "}
      {/* here "errors" is predefined. */}
      <br />
      <TextField
        id="outlined-basic1"
        label="Email"
        name="email"
        type="text"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}{" "}
      <br />
      <TextField
        id="outlined-basic2"
        label="Phone"
        name="phone"
        type="number"
        variant="outlined"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <p>{formik.errors.phone}</p>
      ) : null}{" "}
      <br />
      <TextField
        id="outlined-basic3"
        label="Password"
        name="password"
        type="text"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}{" "}
      <br />
      <Button
        variant="contained"
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Formic;
