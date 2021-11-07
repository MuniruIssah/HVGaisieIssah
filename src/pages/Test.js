import { useState, forwardRef, useMemo, useCallback } from "react";
import { FiCalendar } from "react-icons/fi";
import classNames from "classnames";
import { BsArrowRight } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { DateToggleButton } from "./DashboardPage/components/DateToggleButtons/DateToggleButtons";
// import "../assets/css/pickercss.css";
export const CustomDateRangePicker = ({ data = {}, onChange }) => {
  const today = moment().format("YYYY-MM-DD");
  const lastweek = useMemo(
    () => moment().subtract(1, "week").format("YYYY-MM-DD"),
    []
  );
  const lastmonth = useMemo(
    () => moment().subtract(1, "month").format("YYYY-MM-DD"),
    []
  );
  const { date_before = today, date_after = today } = data;
  const [startDate, setStartDate] = useState(() => new Date(date_before));
  const [endDate, setEndDate] = useState(() => new Date(date_after));
  const toYMD = useCallback((date) => {
    return moment(date).format("YYYY-MM-DD");
  }, []);
  const toDM = useCallback((date) => {
    return moment(date).format("DD MMM");
  }, []);

  const active = useMemo(() => {
    const first = toYMD(startDate);
    const last = toYMD(endDate);
    if (first === today && first === last) return "today";
    if (first === lastweek && last === today) return "1W";
    if (first === lastmonth && last === today) return "1M";
    return "picker";
  }, [endDate, lastmonth, lastweek, startDate, toYMD, today]);

  const ExampleCustomInput = forwardRef((props, ref) => {
    const [start, end] = props.value.split(" - ");
    console.log(props.value);
    return (
      <div  className="dateToggleButtons" style={{width:'300px',zIndex:3}}>
        {/* <div
          role="button"
          tabIndex={-1}
          className={classNames([
            "date-selection bg-secondary",
            { "date-selection-active": active === "today" },
          ])}
          onClick={() => {
            setStartDate(new Date());
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        >
          Today
        </div> */}
        <DateToggleButton
          title="Today"
          active={active === "today"}
          onClick={() => {
            setStartDate(new Date());
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        />
        <DateToggleButton
          title="1W"
          active={active === "1W"}
          onClick={() => {
            setStartDate(new Date(lastweek));
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        />
        <DateToggleButton
          title="1M"
          active={active === "1M"}
          onClick={() => {
            setStartDate(new Date(lastmonth));
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        />
        {/* <div
          role="button"
          className={classNames([
            "date-selection bg-secondary",
            { "date-selection-active": active === "1W" },
          ])}
          tabIndex={-1}
          onClick={() => {
            setStartDate(new Date(lastweek));
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        >
          1W
        </div> */}
        {/* <div
          role="button"
          tabIndex={-1}
          className={classNames([
            "date-selection bg-secondary",
            { "date-selection-active": active === "1M" },
          ])}
          onClick={() => {
            setStartDate(new Date(lastmonth));
            setEndDate(new Date());
            onChange?.({
              date_before: toYMD(endDate),
              date_after: toYMD(startDate),
            });
          }}
        >
          1M
        </div> */}
        <button
          className={`dateToggleButton ${active === "picker" ? "active" : ""}`}
          onClick={props.onClick}
          ref={ref}
          role="button"
          tabIndex={-1}
        >
          <FiCalendar />
          <span>{toDM(start)}</span>
          <BsArrowRight />
          <span>{toDM(end)}</span>
        </button>
      </div>
    );
  });
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      onCalendarClose={() => {
        setEndDate((e) => e || startDate);
        onChange?.({
          date_before: toYMD(endDate),
          date_after: toYMD(startDate),
        });
      }}
      popperPlacement='bottom-end'
    //   popperClassName='testPopperClassname'
      selectsRange
      startDate={startDate}
      endDate={endDate}
      customInput={<ExampleCustomInput />}
      calendarClassName="bg-white"
      dateFormat="yyyy-MM-dd"
    />
  );
};

const Test = () => {
  return (
    <div>
      <CustomDateRangePicker />
    </div>
  );
};

export default Test;
