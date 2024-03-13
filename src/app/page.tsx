"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/homelayout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const page = () => {
  const router = useRouter();
  // const { data, error, isLoading, isError } = useGetCarDetailsQuery({
  //   limit: "10",
  //   page: "0",
  // });
  // console.log(data)
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto  p-4">
        <div className="flex flex-col space-y-10 items-center">
          <div className="lg:w-[593px] w-[300px]">
            <div className="lg:text-[70px] text-6xl text-center leading-none">
              t<span className="lg:text-[100px] text-6xl text-primary">AI</span>
              lored Testing Solutions for Every Focus
            </div>
          </div>

          <div className="flex space-x-2">
            <Button className="rounded-3xl">Start Free Trial</Button>
            <Button className="bg-inherit rounded-3xl dark:text-white text-black border">
              Get A Demo
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="flex  space-x-6 ">
              <div>
                Test your <br /> API
              </div>
              <Separator orientation="vertical" />
              <div className="text-base ">
                Ensure your APIs are resilient in the real world. Simulate,
                evaluate, and optimise with ease for seamless performance.
              </div>
            </div>
            <div className="flex space-x-6 ">
              <div>
                Test your <br /> Web apps
              </div>
              <Separator orientation="vertical" />
              <div className=" text-base">
                Explore and optimise web-based workflows. Simulate user
                interactions to identify bottlenecks. Elevate your web
                applications with precise testing.
              </div>
            </div>
            <div className="flex space-x-6 ">
              <div>
                Test your <br /> Mobile apps
              </div>
              <Separator orientation="vertical" />
              <div className=" text-base">
                Guarantee a flawless user experience across devices. From load
                testing to performance analysis, elevate your mobile apps with
                confidence.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
