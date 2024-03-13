"use client";
import React, { useState, ChangeEvent } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  useImportHarMutation,
  useImportJmeterMutation,
  useImportPostmanMutation,
  useImportSwaggerMutation,
} from "@/store/api/importApi";
import { Button } from "@/components/ui/button";
import { useCreateProjectsMutation } from "@/store/api/projectsApi";
import { toast, Toaster } from "sonner";

const page = () => {
  const [importHar] = useImportHarMutation();
  const [warningMessage, setWarningMessage] = useState("");
  const [apiData, setApiData] = useState([]);
  const [importJmeter] = useImportJmeterMutation();
  const [importPostman] = useImportPostmanMutation();
  const [importSwagger] = useImportSwaggerMutation();
  const [createProjects] = useCreateProjectsMutation();

  const handleCreateproject = async () => {
    const userId = sessionStorage.getItem("userauth");
    const postData = {
      userId: userId,
      data: apiData,
    };
    await createProjects(postData)
      .unwrap()
      .then((data) => {
        if (data?.statusCode === 200 || data?.statusCode === 201) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.data?.message);
      });
  };
  const handleHarFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await importHar(formData)
          .unwrap()
          .then((data) => {
            toast.success(data?.message);
            setApiData(data?.data);
            if (data?.warnings && data?.warnings?.length > 0) {
              setWarningMessage(data?.warnings);
            }
          })
          .catch((error) => {
            setWarningMessage(error?.data?.message);
          });
        // Check if data contains both 'data' and 'warnings' fields
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(apiData, "jhgfdsa");
  const handlePostmanFileChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await importPostman(formData)
          .unwrap()
          .then((data) => {
            toast.success(data?.message);
            setApiData(data?.data);
            if (data?.warnings && data?.warnings?.length > 0) {
              setWarningMessage(data?.warnings);
            }
          })
          .catch((error) => {
            setWarningMessage(error?.data?.message);
          });
        // Check if data contains both 'data' and 'warnings' fields
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleJmxFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await importJmeter(formData)
          .unwrap()
          .then((data) => {
            toast.success(data?.message);
            setApiData(data?.data);
            if (data?.warnings && data?.warnings?.length > 0) {
              setWarningMessage(data?.warnings);
            }
          })
          .catch((error) => {
            setWarningMessage(error?.data?.message);
          });
        // Check if data contains both 'data' and 'warnings' fields
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSwaggerFileChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await importSwagger(formData)
          .unwrap()
          .then((data) => {
            toast.success(data?.message);
            setApiData(data?.data);
            if (data?.warnings && data?.warnings?.length > 0) {
              setWarningMessage(data?.warnings);
            }
          })
          .catch((error) => {
            setWarningMessage(error?.data?.message);
          });
        // Check if data contains both 'data' and 'warnings' fields
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
     
      <div className="flex flex-col space-y-5 items-center">
      <Toaster />
        <div className="text-center lg:text-4xl">
          <label>
            Hey All, <br />
            Ready to Supercharge Your{" "}
            <span className="text-primary"> Testing with AI power !</span>
          </label>
        </div>
        <div className="text-base text-center">
          <p>
            choose the card that best matches your testing goal, and let the AI
            guide <br /> you on a tailored journey to success.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="text-center">
            <CardTitle>.HAR</CardTitle>
            <CardContent className="text-sm">
              <p>Import your HAR file containing captured browser activity.</p>
            </CardContent>
            <CardFooter>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="flex items-center justify-center border border-primary bg-secondary rounded-md shadow-sm px-4 p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 31 38"
                    fill="none"
                  >
                    <path
                      d="M25.6784 10.8571H16.857V23.8662L21.3262 19.3978C21.5828 19.154 21.9245 19.0201 22.2784 19.0247C22.6323 19.0292 22.9704 19.1718 23.2207 19.4221C23.4709 19.6723 23.6135 20.0104 23.618 20.3643C23.6226 20.7182 23.4887 21.0599 23.2449 21.3165L16.4592 28.1022C16.2047 28.3565 15.8596 28.4994 15.4999 28.4994C15.1401 28.4994 14.795 28.3565 14.5405 28.1022L7.75482 21.3165C7.51105 21.0599 7.37715 20.7182 7.38168 20.3643C7.38622 20.0104 7.52881 19.6723 7.77907 19.4221C8.02933 19.1718 8.36745 19.0292 8.72134 19.0247C9.07523 19.0201 9.41689 19.154 9.67348 19.3978L14.1427 23.8662V10.8571H5.32129C4.06192 10.8585 2.85453 11.3594 1.96402 12.2499C1.07351 13.1404 0.572636 14.3478 0.571289 15.6071V33.25C0.572636 34.5094 1.07351 35.7168 1.96402 36.6073C2.85453 37.4978 4.06192 37.9986 5.32129 38H25.6784C26.9378 37.9986 28.1452 37.4978 29.0357 36.6073C29.9262 35.7168 30.4271 34.5094 30.4284 33.25V15.6071C30.4271 14.3478 29.9262 13.1404 29.0357 12.2499C28.1452 11.3594 26.9378 10.8585 25.6784 10.8571ZM16.857 1.35714C16.857 0.997206 16.714 0.652012 16.4595 0.397498C16.205 0.142984 15.8598 0 15.4999 0C15.1399 0 14.7947 0.142984 14.5402 0.397498C14.2857 0.652012 14.1427 0.997206 14.1427 1.35714V10.8571H16.857V1.35714Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    Choose a file
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleHarFileChange}
                  />
                </label>
              </div>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardTitle>.JMX</CardTitle>

            <CardContent className="text-sm">
              <p>Import your HAR file containing captured browser activity.</p>
            </CardContent>
            <CardFooter>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="flex items-center justify-center border border-primary bg-secondary rounded-md shadow-sm px-4 p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 31 38"
                    fill="none"
                  >
                    <path
                      d="M25.6784 10.8571H16.857V23.8662L21.3262 19.3978C21.5828 19.154 21.9245 19.0201 22.2784 19.0247C22.6323 19.0292 22.9704 19.1718 23.2207 19.4221C23.4709 19.6723 23.6135 20.0104 23.618 20.3643C23.6226 20.7182 23.4887 21.0599 23.2449 21.3165L16.4592 28.1022C16.2047 28.3565 15.8596 28.4994 15.4999 28.4994C15.1401 28.4994 14.795 28.3565 14.5405 28.1022L7.75482 21.3165C7.51105 21.0599 7.37715 20.7182 7.38168 20.3643C7.38622 20.0104 7.52881 19.6723 7.77907 19.4221C8.02933 19.1718 8.36745 19.0292 8.72134 19.0247C9.07523 19.0201 9.41689 19.154 9.67348 19.3978L14.1427 23.8662V10.8571H5.32129C4.06192 10.8585 2.85453 11.3594 1.96402 12.2499C1.07351 13.1404 0.572636 14.3478 0.571289 15.6071V33.25C0.572636 34.5094 1.07351 35.7168 1.96402 36.6073C2.85453 37.4978 4.06192 37.9986 5.32129 38H25.6784C26.9378 37.9986 28.1452 37.4978 29.0357 36.6073C29.9262 35.7168 30.4271 34.5094 30.4284 33.25V15.6071C30.4271 14.3478 29.9262 13.1404 29.0357 12.2499C28.1452 11.3594 26.9378 10.8585 25.6784 10.8571ZM16.857 1.35714C16.857 0.997206 16.714 0.652012 16.4595 0.397498C16.205 0.142984 15.8598 0 15.4999 0C15.1399 0 14.7947 0.142984 14.5402 0.397498C14.2857 0.652012 14.1427 0.997206 14.1427 1.35714V10.8571H16.857V1.35714Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    Choose a file
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleJmxFileChange}
                  />
                </label>
              </div>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardTitle>Postman</CardTitle>

            <CardContent className="text-sm">
              <p>Import your HAR file containing captured browser activity.</p>
            </CardContent>
            <CardFooter>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="flex items-center justify-center border border-primary bg-secondary rounded-md shadow-sm px-4 p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 31 38"
                    fill="none"
                  >
                    <path
                      d="M25.6784 10.8571H16.857V23.8662L21.3262 19.3978C21.5828 19.154 21.9245 19.0201 22.2784 19.0247C22.6323 19.0292 22.9704 19.1718 23.2207 19.4221C23.4709 19.6723 23.6135 20.0104 23.618 20.3643C23.6226 20.7182 23.4887 21.0599 23.2449 21.3165L16.4592 28.1022C16.2047 28.3565 15.8596 28.4994 15.4999 28.4994C15.1401 28.4994 14.795 28.3565 14.5405 28.1022L7.75482 21.3165C7.51105 21.0599 7.37715 20.7182 7.38168 20.3643C7.38622 20.0104 7.52881 19.6723 7.77907 19.4221C8.02933 19.1718 8.36745 19.0292 8.72134 19.0247C9.07523 19.0201 9.41689 19.154 9.67348 19.3978L14.1427 23.8662V10.8571H5.32129C4.06192 10.8585 2.85453 11.3594 1.96402 12.2499C1.07351 13.1404 0.572636 14.3478 0.571289 15.6071V33.25C0.572636 34.5094 1.07351 35.7168 1.96402 36.6073C2.85453 37.4978 4.06192 37.9986 5.32129 38H25.6784C26.9378 37.9986 28.1452 37.4978 29.0357 36.6073C29.9262 35.7168 30.4271 34.5094 30.4284 33.25V15.6071C30.4271 14.3478 29.9262 13.1404 29.0357 12.2499C28.1452 11.3594 26.9378 10.8585 25.6784 10.8571ZM16.857 1.35714C16.857 0.997206 16.714 0.652012 16.4595 0.397498C16.205 0.142984 15.8598 0 15.4999 0C15.1399 0 14.7947 0.142984 14.5402 0.397498C14.2857 0.652012 14.1427 0.997206 14.1427 1.35714V10.8571H16.857V1.35714Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    Choose a file
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handlePostmanFileChange}
                  />
                </label>
              </div>
            </CardFooter>
          </Card>

          <Card className="text-center">
            <CardTitle>Swagger</CardTitle>

            <CardContent className="text-sm">
              <p>Import your data file containing captured browser activity.</p>
            </CardContent>
            <CardFooter>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="flex items-center justify-center border border-primary bg-secondary rounded-md shadow-sm px-4 p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 31 38"
                    fill="none"
                  >
                    <path
                      d="M25.6784 10.8571H16.857V23.8662L21.3262 19.3978C21.5828 19.154 21.9245 19.0201 22.2784 19.0247C22.6323 19.0292 22.9704 19.1718 23.2207 19.4221C23.4709 19.6723 23.6135 20.0104 23.618 20.3643C23.6226 20.7182 23.4887 21.0599 23.2449 21.3165L16.4592 28.1022C16.2047 28.3565 15.8596 28.4994 15.4999 28.4994C15.1401 28.4994 14.795 28.3565 14.5405 28.1022L7.75482 21.3165C7.51105 21.0599 7.37715 20.7182 7.38168 20.3643C7.38622 20.0104 7.52881 19.6723 7.77907 19.4221C8.02933 19.1718 8.36745 19.0292 8.72134 19.0247C9.07523 19.0201 9.41689 19.154 9.67348 19.3978L14.1427 23.8662V10.8571H5.32129C4.06192 10.8585 2.85453 11.3594 1.96402 12.2499C1.07351 13.1404 0.572636 14.3478 0.571289 15.6071V33.25C0.572636 34.5094 1.07351 35.7168 1.96402 36.6073C2.85453 37.4978 4.06192 37.9986 5.32129 38H25.6784C26.9378 37.9986 28.1452 37.4978 29.0357 36.6073C29.9262 35.7168 30.4271 34.5094 30.4284 33.25V15.6071C30.4271 14.3478 29.9262 13.1404 29.0357 12.2499C28.1452 11.3594 26.9378 10.8585 25.6784 10.8571ZM16.857 1.35714C16.857 0.997206 16.714 0.652012 16.4595 0.397498C16.205 0.142984 15.8598 0 15.4999 0C15.1399 0 14.7947 0.142984 14.5402 0.397498C14.2857 0.652012 14.1427 0.997206 14.1427 1.35714V10.8571H16.857V1.35714Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    Choose a file
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleSwaggerFileChange}
                  />
                </label>
              </div>
            </CardFooter>
          </Card>
        </div>
        {warningMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Warning!</strong>
            <span className="block sm:inline">{warningMessage}</span>
          </div>
        )}
        {!Array.isArray(apiData) && (
          <div className="flex justify-center">
            <Button onClick={handleCreateproject}>proceed</Button>
          </div>
        )}{" "}
      </div>
  );
};

export default page;
