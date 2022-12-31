import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IconLogoWithoutText from "../../icons/IconLogoWithoutText";
import { IUserFormValues } from "../../interfaces/users";
import { QUERY_CREATE_PROFILE } from "../../queries/profile/createprofile";
import { QUERY_REGISTER } from "../../queries/register";
import { Button } from "../Button";

type Props = {
  buttonText: string;
};

function RegisterCard({ buttonText }: Props) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFormValues>();

  const [userRegisterCall] = useMutation(QUERY_REGISTER);
  const [createProfileCall] = useMutation(QUERY_CREATE_PROFILE);
  const [password, setPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  const RegisterProcess: SubmitHandler<IUserFormValues> = async (data) => {
    if (data.password == data.confirmPassword) {
      try {
        setLoading(true);
        const userRegisterResponse = await userRegisterCall({
          variables: { email: data.email, password: data.password },
        });
        Cookies.set("accessToken", userRegisterResponse.data.register.jwt, {
          maxAge: 60 * 6 * 24,
        });
        const UserProfileResponse = await createProfileCall({
          variables: {
            userId: userRegisterResponse.data.register.user.id,
            username: data.email,
          },
        });
        if (UserProfileResponse) {
          //  dispatch(changeStatus());
          Cookies.set(
            "profile",
            UserProfileResponse.data.createProfile.data.id,
            {
              maxAge: 60 * 6 * 24,
            }
          );
          setLoading(false);
          navigate("/explore");
        }
      } catch (e) {
        setLoading(false);
        setErrorRegister(!errorRegister);
      }
    } else {
      setLoading(false);
      setPassword(!password);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterProcess)}
      className=" w-[300px] h-[711px]  mb-[25px] md:mb-[0px] md:w-[451px] md:h-[741px] bg-[#FFFFFF]   rounded-[70px] flex flex-col items-center"
    >
      <IconLogoWithoutText />
      <p className="text-[#3B3B3B] text-[24px] md:text-[36px] font-semibold leading-space">
        Welcome to LookMyArt
      </p>
      <p className="text-[#9E9C9C] text-[24px] md:text-[36px] font-semibold leading-space pt-[25px]">
        Find your best artist
      </p>
      <div className="pt-[75px] flex flex-col  items-center gap-y-12">
        <div className=" flex flex-col items-left ">
          <p className="text-[#636363] text-[12px]">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                Introduce tu correo electronico
              </span>
            </div>
          )}
        </div>
        <div className=" flex flex-col items-left">
          <p className="text-[#636363] text-[12px]">Password</p>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
            className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
          />
          {errors.password && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                Introduce tu contraseña
              </span>
            </div>
          )}
        </div>

        <div className=" flex flex-col items-left">
          <p className="text-[#636363] text-[12px]">Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true, minLength: 8 })}
            className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
          />
          {errors.confirmPassword && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                Introduce tu contraseña nuevamente
              </span>
            </div>
          )}
        </div>
        <Button
          styleButton="mt-[43px] w-[242px] h-[50px] md:w-[242px] md:h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#6CB2FE]"
          styleText="text-[20px] px-[13px] text-[#242424]"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

export { RegisterCard };
