import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
 
export function MessageDialog() {
  const [open, setOpen] = React.useState(false);
//   const [open, setOpen] = React.useState(true);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      {/* <button class="bg-black text-white p-2 px-4 rounded-full " onClick={handleOpen}>Message Dialog</button> */}
      <div open={open} handler={handleOpen} class="pt-10" >
        <div className="flex items-center justify-between">
          <p>Залиште відгук про роботу нотаріуса</p>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg> */}
        </div>
        <DialogBody divider class="w-[50 %]">
          <div className="grid gap-6">
            <Input label="Username" class="border border-black/50 rounded-sm w-full" />
            <Textarea label="Message" class="border border-black/50 rounded-sm w-full" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2 pt-10">
          <button variant="outlined" color="red" class="bg-[#ff25258d] text-white p-2 px-4 rounded-full" onClick={handleOpen}>
            close
          </button>
          <button variant="gradient" color="green" class="bg-[#3ab65b] text-white p-2 px-4 rounded-full" onClick={handleOpen}>
            send message
          </button>
        </DialogFooter>
      </div>
    </>
  );
}