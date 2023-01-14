import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IconLogoWithoutText from "../../icons/LogoWithoutTextIcon";
import { IUserFormValues } from "../../interfaces/users";
import { QUERY_LOGIN } from "../../queries/login";
import { ChangeAuth } from "../../services/apollo/store/userAuth";
import { useDispatch } from "react-redux";
import { Button } from "../Buttons/ButtonComponent";

type Props = {
  buttonText: string;
};

function LoginCard({ buttonText }: Props) {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFormValues>();

  const dispatch = useDispatch();
  const [UserLoginCall] = useMutation(QUERY_LOGIN);
  const [password, setPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const LoginProcess: SubmitHandler<IUserFormValues> = async (data) => {
    try {
      setLoading(true);
      const userLoginResult = await UserLoginCall({
        variables: { identifier: data.email, password: data.password },
      });
      Cookies.set("accessToken", userLoginResult.data.login.jwt, {
        expires: 1,
      });
      setLoading(false);
      dispatch(ChangeAuth(true));
      navigate("/explore");
    } catch (e) {
      setLoading(false);
      setErrorLogin(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(LoginProcess)}
      className=" w-[300px] h-[711px]  mb-[25px] md:mb-[0px] md:w-[451px] md:h-[711px] bg-[#FFFFFF]  drop-shadow-3xl  rounded-[70px] flex flex-col items-center"
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
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="card_input"
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
            className="card_input"
          />
          {errors.password && (
            <div className="mt-2 flex">
              <span className="body2 text-[#E33A3A]">
                Introduce tu contraseña
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

export { LoginCard };
