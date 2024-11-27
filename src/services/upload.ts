import { mainInstance } from "./config";

export const upload = (files: FileList | null) => {
  const data = new FormData();
  if (files !== null) {
    data.append("file", files[0]);
  }

  return mainInstance.post(`/upload-media`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
