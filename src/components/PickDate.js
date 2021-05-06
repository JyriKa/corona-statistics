import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fi from 'date-fns/locale/fi';
registerLocale('fi', fi)

const PickDate = ({ label, startDate, handleDateChange }) => {
    return (
        <div>
            <p>{label}</p>
            <DatePicker locale='fi' selected={startDate} onChange={handleDateChange} />
        </div>
    )
}

export default PickDate
