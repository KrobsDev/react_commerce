import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import CustomButton from "../components/Button";
import googleLogo from "../assets/images/icons/google_icon.svg";
import appleLogo from "../assets/images/icons/apple_icon.svg";
import registerBg from "../assets/images/backgrounds/register_bg.jpg";
import logo from "../assets/images/logo/logo-full.svg";

function Register() {
  return (
    <>
      <div className="w-full h-full flex justify-between">
        <div className="left flex flex-col justify-between md:w-2/4 xl:w-1/3 h-full py-4 px-8 md:px-12 xl:px-16">
          {/* logo */}
          <div className="w-fit h-fit">
            <img src={logo} alt="" />
          </div>

          <form className="w-full xl:w-fit h-fit flex flex-col gap-4">
            <div>
              <h3 className="text-2xl mb-1 font-medium">Create your account</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                culpa, corporis sapiente
              </p>
            </div>
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />

            <CustomButton text="Create account" />

            <div className="w-full flex items-center">
              <hr className="w-full" />
              <p className="w-full text-center font-light text-sm">
                or continue with
              </p>
              <hr className="w-full" />
            </div>

            <CustomButton
              text="Sign in with Google"
              color="white"
              icon={googleLogo}
            />
            <CustomButton
              text="Sign in with Apple"
              color="white"
              icon={appleLogo}
            />
          </form>

          {/* link */}
          <Link to={""} className="uppercase mb-4">
            sign in here
          </Link>
        </div>

        <div className="hidden md:block md:w-2/4 xl:w-2/3 h-full border-l">
          <img className="w-full h-full object-cover" src={registerBg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Register;
