import { Toaster } from "@/components/ui/toaster";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/icons/google_icon.svg";
import appleLogo from "../../assets/images/icons/apple_icon.svg";
import loginBg from "../../assets/images/backgrounds/register_bg.jpg";
import logo from "../../assets/images/logo/logo-full.svg";
import InputField from "@/components/ui/InputField";
import { UserModel } from "@/models/UserModel";
import CustomButton from "@/components/ui/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { ValidationType, validate } from "@/utils/validate";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const validations = [
    { value: formData.first_name, type: ValidationType.FNAME },
    { value: formData.last_name, type: ValidationType.LNAME },
    { value: formData.email, type: ValidationType.EMAIL },
    { value: formData.password, type: ValidationType.PASSWD },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validations.reduce((acc, { value, type }) => {
      const errorMessage = validate(value, type);

      if (typeof acc === "object" && typeof errorMessage === "string") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc as any)[type] = errorMessage;
      }

      setFormErrors({
        fname:
          "fname" in acc && typeof acc["fname"] === "string"
            ? acc["fname"]
            : "",
        lname:
          "lname" in acc && typeof acc["lname"] === "string"
            ? acc["lname"]
            : "",
        email:
          "email" in acc && typeof acc["email"] === "string"
            ? acc["email"]
            : "",
        password:
          "password" in acc && typeof acc["password"] === "string"
            ? acc["password"]
            : "",
      });

      return acc;
    }, {});

    if (Object.keys(errors).length > 0) {
      return;
    }

    // create user model
    const user = new UserModel(formData);

    // api call
    // const response = await createUserController(user);

    // if (typeof response === "string") {
    //   return;
    // }

    // if (response instanceof UserModel) {
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 2000);
    // }
  };
  return (
    <>
      <div className="w-full h-full flex justify-between ">
        <div className="left flex flex-col justify-between md:w-2/4 xl:w-1/3 h-full py-4 px-8 md:px-12 xl:px-16 relative">
          {/* logo */}
          <div className="w-fit h-fit">
            <img src={logo} alt="" />
          </div>

          <form
            onSubmit={() => {}}
            className="w-full xl:w-fit h-fit flex flex-col gap-4"
          >
            <div>
              <h3 className="text-2xl mb-1 font-medium">Create your account</h3>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                culpa, corporis sapiente
              </p>
            </div>

            <InputField
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Email"
              error={formErrors.email}
            />

            <InputField
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Password"
              error={formErrors.password}
            />

            <CustomButton text="Sign In" />

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
          <img className="w-full h-full object-cover" src={loginBg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
