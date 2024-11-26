export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const isSignedIn = () => !!getLocalStorage("accessToken");

export const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.reload();
};
