import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const AddprojectDialog = () => {
  return (
    <DialogContent>
      <DialogHeader className="space-y-6">
        <DialogTitle>Fill the details...</DialogTitle>
        <DialogDescription>
          <Input className="" placeholder="Enter a project name..." />
        </DialogDescription>
        <DialogDescription>
          <Textarea placeholder="Enter a project description..." />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex justify-center">
        <Button className="mx-auto">Submit</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddprojectDialog;
