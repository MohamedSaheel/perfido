"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useGetProjectsViewQuery } from "@/store/api/projectsApi";
import { Textarea } from "@/components/ui/textarea";
const page = () => {
  const params = useSearchParams();
  const projectID = params.get("id");
  const { data, error } = useGetProjectsViewQuery(projectID);
  const apiData: any[] = data?.data?.data?.artilleryJson?.scenario[0].flow;

  const [inputValues, setInputValues] = useState([
    {
      name: "",
      weight: "",
      flow: [
        {
          method: "",
          url: "",
        },
      ],
    },
  ]);
  const handleScenarioNameChange = (value: any) => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      updatedInputValues[0].name = value;
      return updatedInputValues;
    });
  };

  const handleWeightChange = (value: any) => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      updatedInputValues[0].weight = value;
      return updatedInputValues;
    });
  };
  const handleAddScenario = () => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      const newScenario = {
        name: "",
        weight: "",
        flow: [
          {
            method: "",
            url: "",
          },
        ],
      };
      // Append the new scenario to the existing scenarios
      updatedInputValues.push(newScenario);
      return updatedInputValues;
    });
  };
  const handleAddFlow = (scenarioIndex: number) => {
    setInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      const newFlow = {
        method: "",
        url: "",
      };
      updatedInputValues[scenarioIndex] = {
        ...updatedInputValues[scenarioIndex],
        flow: [...updatedInputValues[scenarioIndex].flow, newFlow],
      };
      return updatedInputValues;
    });
  };

  console.log(inputValues);
  return (
    <div>
      <div>
        <Accordion type="single" collapsible defaultValue="flow1">
          <button onClick={handleAddScenario}>Add Input</button>
          {inputValues.map((input, scenarioIndex) => (
            <AccordionItem
              key={`scenario_${scenarioIndex}`}
              value={`flow${scenarioIndex}`}
            >
              <AccordionTrigger>Scenario</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="flex space-x-4 ">
                  <Input
                    className="w-80"
                    type="text"
                    placeholder="Scenario Name"
                    onChange={(e) => handleScenarioNameChange(e.target.value)}
                  />
                  <Input
                    className="w-80"
                    type="text"
                    placeholder="Weight"
                    onChange={(e) => handleWeightChange(e.target.value)}
                  />
                </div>
                <button onClick={() => handleAddFlow(scenarioIndex)}>
                  Add flow
                </button>
                {input.flow.map((flow, flowIndex) => (
                  <Card className="space-y-4" key={`flow_${flowIndex}`}>
                    <div className="flex space-x-4">
                      <Select>
                        <SelectTrigger className="w-80">
                          <SelectValue placeholder="Method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="get">GET</SelectItem>
                            <SelectItem value="post">POST</SelectItem>
                            <SelectItem value="put">PUT</SelectItem>
                            <SelectItem value="delete">DELETE</SelectItem>
                            <SelectItem value="patch">PATCH</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Input className="w-80" placeholder="name" />
                      <Input className="w-80" placeholder="request url" />
                    </div>
                    <Tabs defaultValue="account" className="">
                      <TabsList className="flex justify-start space-x-4">
                        <TabsTrigger value="qs">qs</TabsTrigger>
                        <TabsTrigger value="headers">Headers</TabsTrigger>
                        <TabsTrigger value="body">Body</TabsTrigger>
                        <TabsTrigger value="form">Form</TabsTrigger>
                        <TabsTrigger value="formData">FormData</TabsTrigger>
                      </TabsList>
                      <TabsContent value="qs">
                            <div
                            
                              className="flex space-x-4 p-2"
                            >
                              <Input
                                className="w-80"
                                placeholder="Key"
                              
                              />
                              <Input
                                className="w-80"
                                placeholder="Value"
                              />
                            </div>
                         
                    
                      </TabsContent>
                      <TabsContent value="headers">
                        <div className="flex space-x-4 p-2">
                          <Input className="w-80" placeholder="Key" />
                          <Input className="w-80" placeholder="Value" />
                        </div>
                      </TabsContent>
                      <TabsContent value="body">
                        {/* <pre className="border p-4">
                        {data.json && JSON.stringify(data.json, null, 2)}
                      </pre> */}
                        <Textarea
                          rows={10}
                          cols={40}
                          placeholder="Enter JSON data here"
                        />
                      </TabsContent>
                      <TabsContent value="form">
                        <div className="flex space-x-4 p-2">
                          <Input className="w-80" placeholder="Key" />
                          <Input className="w-80" placeholder="Value" />
                        </div>
                      </TabsContent>
                      <TabsContent value="formData">
                        <div className="flex space-x-4 p-2">
                          <Input className="w-80" placeholder="Key" />
                          <Input className="w-80" placeholder="Value" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </Card>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default page;
