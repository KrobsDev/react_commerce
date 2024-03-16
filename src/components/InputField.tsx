import { Lock1, Sms, TextBlock } from "iconsax-react";
import { ReactElement } from "react";

interface InputFieldProps {
  type?: string;
  placeholder?: string;
}

export default function InputField({
  type = "text",
  placeholder,
}: InputFieldProps) {
  let icon: ReactElement | null = null;

  switch (type) {
    case "text":
      icon = <TextBlock size="20" color="#9f9f9f" variant="Outline" />;
      break;

    case "email":
      icon = <Sms size="20" color="#9f9f9f" variant="Outline" />;
      break;

    case "password":
      icon = <Lock1 size="20" color="#9f9f9f" variant="Outline" />;
      break;

    default:
      break;
  }

  return (
    <div
      tabIndex={0}
      className="border border-transparent focus-within:border focus-within:border-blue-400 flex items-center gap-2 bg-white px-4 w-full rounded-md"
    >
      <div className="">{icon}</div>
      <input
        className="py-3 placeholder:text-sm w-full h-full outline-none rounded-md"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
