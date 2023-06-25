import CalendarIcon from "./../../assets/Calendar.svg";


const CalendarIconComponent = (props: { date: string }) => {
  console.log("value time:",props.date)
  const date = new Date(props.date);
  
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  
  return (
    <div className="icon-show-style">
      <img src={CalendarIcon} alt="" className="w-[30px] h-[30px] " />

      <p>Joined {dateTimeFormat.format(date)}</p>
    </div>
  );
};
export default CalendarIconComponent;
