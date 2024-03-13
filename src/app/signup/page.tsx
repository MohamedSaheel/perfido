"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useRouter } from "next/navigation";

import { Toaster, toast } from "sonner";
import { useSignupMutation } from "@/store/api/authApi";
import { SignupCard } from "./SignupCard";
interface Values {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmpassword: string;
}

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(4, "firstname must be at least 4 characters")
    .required("Required"),
  lastname: Yup.string()
    .min(4, "firstname must be at least 4 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phonenumber: Yup.number()
    .integer("Phone number must be an integer")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
      "Please fill a valid password"
    ),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const page = () => {
  const router = useRouter();
  const [Signup] = useSignupMutation();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: Values) => {
      try {
        await Signup(values)
          .unwrap()
          .then((payload) => {
            if (payload?.statusCode === 200 || payload?.statusCode === 201) {
              sessionStorage.setItem("authToken", payload?.data?.accessToken);
              toast.success(payload.message);
              setTimeout(() => {
                router.push("/perfido");
              }, 2000);
            } else {
              toast.error(payload?.message);
            }
          })
          .catch((error) => {
            toast.error(error?.data?.message);
          });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Toaster />
      <SignupCard formik={formik} />
    </div>
  );
};

export default page;
