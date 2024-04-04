import React from "react";
import { Button } from "../ui/button";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const ButtonBack = ({ route }: { route: string }) => {
  return (
    <Link href={route}>
      <Button size="icon" variant="outline" className="rounded-full">
        <BsArrowLeft />
      </Button>
    </Link>
  );
};

export default ButtonBack;
