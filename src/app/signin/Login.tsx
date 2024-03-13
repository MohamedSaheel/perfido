import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";

interface LoginProps {
  formik: any; // You might want to replace 'any' with the actual type of formik
}

export function Login({ formik }: LoginProps) {
  return (
    <Card className="w-[364px] shadow-lg border-none space-y-3">
      <h1 className="text-center text-2xl text-primary font-bold">Perfido</h1>
      <h1 className="text-center font-bold text-4xl ">Welcome Back !</h1>
      <h1 className="text-center text-sm">Login into your account</h1>
      <CardContent className="flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center space-y-3"
        >
          <div className="flex flex-col w-72">
            <Label className="">Email id</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`mt-3 border-custom-blue ${
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
          <div className="flex flex-col w-72">
            <Label>Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`mt-3 border-custom-blue ${
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
          <div className="flex justify-center">
            <label className=" text-sm">
              Forget Password ?
              <a href="#" className="ms-2 text-primary hover:underline">
                Reset Password
              </a>
            </label>
          </div>
          <Button
            type="submit"
            className=" bg-[#00CEAC] font-bold w-72 rounded-sm"
          >
            Login
          </Button>
          <p className="text-sm text-center">
            New to Perfido?
            <Link href="/signup" className="text-[#00CBC9] text-sm">
              &nbsp;Create an account
            </Link>
          </p>
          <h4 className="text-center">Connect with</h4>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-around w-full">
          <Link href="">
            <Image
            className="w-auto"
              src="/assets/icons/google.png"
              alt="microsoft logo"
              width={48}
              height={48}
            />
          </Link>
          <Link href="">
            <Image
            className="w-auto"
              src="/assets/icons/outlook.png"
              alt="microsoft logo"
              width={48}
              height={48}
            />
          </Link>
          <Link href="">
            <Image
            className="w-auto"
              src="/assets/icons/apple.png"
              alt="microsoft logo"
              width={48}
              height={39}
            />
          </Link>
          <Link href="">
            <Image
            className="w-auto"
              src="/assets/icons/github.png"
              alt="microsoft logo"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
