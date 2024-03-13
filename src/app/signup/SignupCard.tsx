import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";

interface SignuProps {
  formik: any; // You might want to replace 'any' with the actual type of formik
}

export function SignupCard({ formik }: SignuProps) {
  return (
    <Card className="w-[710px] h-[648px] shadow-lg p-3">
      <CardTitle className="text-primary">Perfido</CardTitle>
      <CardTitle className="text-5xl mt-3">Create an account</CardTitle>
      <CardContent className="mt-2">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-around">
            <Label>First Name</Label>
            <div className="">
              <Input
                type="firstname"
                id="firstname"
                placeholder="Enter your firstname"
                className={`mt-5 border ${
                  formik.touched.firstname && formik.errors.firstname
                    ? "border-red-500"
                    : ""
                } `}
                {...formik.getFieldProps("firstname")}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.firstname}
                </div>
              ) : null}
            </div>
            <div className="">
              <Input
                type="lastname"
                id="lastname"
                placeholder="Enter your lastname"
                className={`mt-5 border ${
                  formik.touched.lastname && formik.errors.lastname
                    ? "border-red-500"
                    : ""
                } `}
                {...formik.getFieldProps("lastname")}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.lastname}
                </div>
              ) : null}
            </div>
          </div>
          <div className="">
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`mt-5 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              } `}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="">
            <Input
              id="phonenumber"
              placeholder="Enter your phone number"
              className={`mt-5 border ${
                formik.touched.phonenumber && formik.errors.phonenumber
                  ? "border-red-500"
                  : ""
              } `}
              {...formik.getFieldProps("phonenumber")}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.phonenumber}
              </div>
            ) : null}
          </div>
          <div className="">
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`mt-5 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              } `}
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="">
            <Input
              type="confirmpassword"
              id="confirmpassword"
              placeholder="Enter your confirm password"
              className={`mt-5 border ${
                formik.touched.confirmpassword && formik.errors.confirmpassword
                  ? "border-red-500"
                  : ""
              } `}
              {...formik.getFieldProps("confirmpassword")}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.confirmpassword}
              </div>
            ) : null}
          </div>
          <Button className="mt-5 font-bold w-96">Signup</Button>
        </form>
      </CardContent>
      <div className="flex justify-center">
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border  rounded"
            required
          />
        </div>
        <label className="ms-2 text-sm font-medium">
          I agree with the{" "}
          <a href="#" className="text-primary hover:underline ">
            terms and conditions
          </a>
        </label>
      </div>
      <p className="mt-6 text-sm text-center">
        Already have an account
        <Link href="/signin" className="text-primary text-sm">
          &nbsp;Login here
        </Link>
      </p>
    </Card>
  );
}
