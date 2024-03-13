import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface type {
  id: string;
  name: string;
  description: string;
}
const ProjectCard = ({id, name, description }: type) => {
  return (
    <div>
      <Card className="">
        <CardTitle className="m-5">{name}</CardTitle>
        <CardDescription className="m-5">{description}</CardDescription>
        <CardContent>
          <Link href={{ pathname: "/perfido/projectview", query: { id: id } }}>
            <Button>view</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
