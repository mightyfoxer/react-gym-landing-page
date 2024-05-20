"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputForm from "../Form";
import Calendar from "../Calendar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Modal: React.FC<ModalProps> = ({ setOpen, open = false }) => {
  //   const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Dialog
      className={`fixed  z-[99999999999] ${
        isDesktop ? "top-[10%] left-[20%]" : "inset-0 top-[10%]"
      }`}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Dialog.Overlay className="fixed inset-0" />
      <div className="my-8 inline-block w-full transform overflow-hidden rounded-2xl bg-[#131313] p-6 text-left align-middle shadow-xl transition-all">
        <div className={isDesktop ? "flex gap-2" : "flex gap-2 overflow-auto"}>
          <InputForm />
          <div className="w-[450px]">
            <Calendar />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
