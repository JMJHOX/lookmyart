import BlackMailIcon from "./../../assets/icons/email-black-icon.svg";
const BlackMailIconComponent = () => {
  return (
    <div className="icon-show-style pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 ">
      <img src={BlackMailIcon} alt="" className="w-[30px] h-[30px] " />
    </div>
  );
};
export default BlackMailIconComponent;
