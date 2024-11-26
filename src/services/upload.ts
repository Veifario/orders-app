// export const uploadAvatar = ({
//   files,
//   setUploadLoading,
//   setPercentCompleted,
// }: {
//   files: FileList | null;
//   setUploadLoading: Dispatch<SetStateAction<boolean>>;
//   setPercentCompleted: Dispatch<SetStateAction<number>>;
// }) => {
//   setUploadLoading(true);
//   const data = new FormData();
//   if (files !== null) {
//     data.append("file", files[0]);
//   }

//   return mainInstance.post(`/file/v1/reels/upload/channel-avatar`, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     onUploadProgress: function (progressEvent: any) {
//       const percentCompleted = Math.round(
//         (progressEvent.loaded * 100) / progressEvent.total
//       );
//       setPercentCompleted(percentCompleted);
//     },
//   });
// };
