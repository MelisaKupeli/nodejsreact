import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Form with validation using react-hook-form and yup
// Fields: Full Name, Email, Age, Password, Confirm Password
// Validation Rules:
export const Form =()=> {
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
        age: yup.number().positive("Age must be positive").integer("Age must be an integer").min(18).required("Age is required"),
        password: yup.string().min(6, "Password must be at least 6,").max(20, " and at most 20 characters").required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Passwords must match")
            .required(),
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });//hook form with yup validation
        

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Display error messages below each field */}

      <input type="text" placeholder="Enter your full name" {...register("fullName")} />
      {errors.fullName?.message && <span style={{ color: "red" }}>{errors.fullName.message}</span>}

      <input type="email" placeholder="Enter your email" {...register("email")} />
      {errors.email?.message && <span style={{ color: "red" }}>{errors.email.message}</span>}

      <input type="number" placeholder="Age..." {...register("age")} />
      {errors.age?.message && <span style={{ color: "red" }}>{errors.age.message}</span>}

      <input type="password" placeholder="Enter your password" {...register("password")} />
      {errors.password?.message && <span style={{ color: "red" }}>{errors.password.message}</span>}

      <input type="password" placeholder="Confirm your password" {...register("confirmPassword")} />
      {errors.confirmPassword?.message && <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>}

      <input type="submit" />

    </form>
  );

}