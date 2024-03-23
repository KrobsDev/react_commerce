interface CustomButtonProps {
  text: string;
  color?: string;
  icon?: string;
}

export default function CustomButton({ text, color, icon }: CustomButtonProps) {
  const buttonClasses = `${color ? `bg-${color}` : "bg-[#0065FF] text-white"}
     text-center p-3 font-medium rounded-md pointer ${
       icon && `flex justify-center items-center gap-4 text-black`
     }`;
  return (
    <button className={buttonClasses}>
      <img src={icon} alt="" />
      {text}
    </button>
  );
}
