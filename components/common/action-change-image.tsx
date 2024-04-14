import React from "react";
import { TbExchange } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionChangeImageProps {
  action: (e: any) => void;
  title?: string;
}

const ActionChangeImage: React.FC<ActionChangeImageProps> = ({
  action,
  title = "Change Image",
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" onClick={action}>
            <TbExchange />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionChangeImage;
