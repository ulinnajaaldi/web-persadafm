import React from "react";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CardProps {
  item: any;
  handleCardClick: (item: any) => void;
  handleDelete: (item: any) => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { item, handleCardClick, handleDelete } = props;

  return (
    <div
      className="group relative cursor-pointer space-y-1 rounded-md border p-2 transition duration-300 ease-in-out hover:shadow-md"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCardClick(item);
      }}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          placeholder="blur"
          blurDataURL={item.image}
          width={400}
          height={400}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <h2 className="line-clamp-2 text-justify font-semibold">{item.title}</h2>
      <div className="flex items-center justify-between">
        <p className="line-clamp-2 text-justify text-sm">{item.time}</p>
        {item.highlight && <Badge variant="outline">Highlight</Badge>}
      </div>
      <p className="line-clamp-3 text-justify text-sm">{item.content}</p>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.preventDefault(), e.stopPropagation(), handleDelete(item);
        }}
        className="absolute right-2 top-1 z-30 translate-x-3 opacity-0 transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
      >
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default Card;
