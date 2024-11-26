import { toast } from "react-toastify";

export const toastErrorHandler = (error: any) => {
  if (error.code === "ERR_CANCELED") return;

  toast.error(
    error?.response?.data?.errorMessage ||
      error?.response?.data?.message ||
      error?.response?.errorMessage ||
      error?.message ||
      "Unresolved Error Occured",
  );
};
