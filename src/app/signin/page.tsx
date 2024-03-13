"use client";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Login } from "./Login";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { useLoginMutation } from "@/store/api/authApi";

interface Values {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});
const page = () => {
  const router = useRouter();
  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: Values) => {
      try {
        await login(values)
          .unwrap()
          .then((payload) => {
            if (payload?.statusCode === 200 || payload?.statusCode === 201) {
              sessionStorage.setItem("authToken", payload?.data?.accessToken);
              sessionStorage.setItem("userauth", payload?.data?.userId);
              toast.success(payload?.message);
              setTimeout(() => {
                router.push("/perfido");
              }, 2000);
            } else {
              toast.error(payload?.message);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error(error?.data?.message);
          });

        // Handle the result as needed
      } catch (error) {
        // Handle the error
      }
      // Handle form submission here, e.g., signin API call
    },
  });

  return (
    // bg-[url('/assets/images/Ellipse.png')] bg-center bg-no-repeat bg-top backdrop-blur-3xl
    <div className="w-screen h-screen flex justify-center items-center  ] ">
      <Toaster />
      <Login formik={formik} />
    </div>
  );
};

export default page;
