"use client";
import React, { Suspense, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddprojectDialog from "./AddprojectDialog";
import { useGetProjectsQuery } from "@/store/api/projectsApi";

const page = () => {
  const [apiData, setapiData] = useState<any[]>([]);

  const { data, error, isLoading, isError, isFetching } = useGetProjectsQuery();

  useEffect(() => {
    setapiData(data?.data);
  }, [data]);
  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }
  return (
    <div className="space-y-14">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger className="bg-primary p-2 rounded-xl text-black font-semibold">
            Add Project
          </DialogTrigger>
          <AddprojectDialog />
        </Dialog>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {apiData?.map((dataItem, index) => (
          <div key={dataItem._id}>
            <ProjectCard
            id={dataItem._id}
              name={dataItem.projectName}
              description={dataItem.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
