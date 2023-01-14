import CalendarIcon from "./../../assets/Calendar.svg";
const CalendarIconComponent = () => {
  return (
    <div className="icon-show-style">
      <img src={CalendarIcon} alt="" className="w-[30px] h-[30px] " />
      <p>Joined February , 2020</p>
    </div>
  );
};
export default CalendarIconComponent;
