import React from "react";
import Link from "next/link";
import { BsGlobe2 } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ActionLivePreview = ({ href }: { href: string }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <BsGlobe2 />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Live Preview</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionLivePreview;
