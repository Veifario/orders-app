import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Eye } from "lucide-react";
import { useAppDispatch } from "@/hooks/redux";

import TextInput from "@/components/ui/Input/TextInput";
import Button from "@/components/ui/Button/Button";

import { isSignedIn, setLocalStorage } from "@/helpers/auth.helper";
import { loginThunk } from "@/store/thunks/login.thunk";
import { setUserData } from "@/store/slices/user.slice";
import { phoneNumberRegex } from "@/constants/regex";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    dispatch(
      loginThunk.login({
        phone: "+" + formData.phone,
        password: formData.password,
      }),
    )
      .unwrap()
      .then((data) => {
        setLocalStorage("accessToken", data.token);
        dispatch(setUserData(data.user));
        navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const disabled = formData.password === "" || formData.phone === "";

  if (isSignedIn()) return <Navigate to="/" />;
  return (
    <div className="container min-h-screen">
      <div className="mt-32">
        <h1 className="text-[32px] font-black">Avtorizatsiya</h1>
        <p className="mt-2 text-sm text-[#4B4B4B]">
          Shaxsiy ma'lumotlarni kiriting
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <TextInput
          className="bg-[#F5F5F5]"
          label="Telefon raqami"
          placeholder="Telefon"
          pattern="[0-9]*"
          inputMode="tel"
          value={formData.phone}
          onChange={(event) =>
            setFormData((prevState) => ({
              ...prevState,
              phone: event.target.value.replace(phoneNumberRegex, ""),
            }))
          }
        />

        <div className="relative">
          <TextInput
            className="bg-[#F5F5F5]"
            label="Parol"
            placeholder="Parol"
            type={isPasswordVisible ? "text" : "password"}
            value={formData.password}
            onChange={(event) =>
              setFormData((prevState) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
          />

          <button
            className="absolute bottom-0 right-4 h-12"
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
          >
            <Eye
              className={twMerge(
                "text-[#CACACA] duration-150",
                isPasswordVisible && "text-black",
              )}
              size={20}
            />
          </button>
        </div>
      </div>

      <Button
        className="mt-20"
        loading={isLoading}
        disabled={disabled}
        onClick={handleLogin}
      >
        Kirish
      </Button>
    </div>
  );
};

export default Login;
