import Rows from "./Rows";
import { createDays } from "./createDays";


const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthsNominativeСase = months.map(month => {
  return (month + 'а').replace(/[ьй]а$/, 'я');
});
  






export default function Calendar({ date }) {  
  return (
    <div className='ui-datepicker'>
      <div className='ui-datepicker-material-header'>
        <div className='ui-datepicker-material-day'>{days[date.getDay()]}</div>
        <div className='ui-datepicker-material-date'>
          <div className='ui-datepicker-material-day-num'>{date.getDate()}</div>
          <div className='ui-datepicker-material-month'>{monthsNominativeСase[date.getMonth()]}</div>
          <div className='ui-datepicker-material-year'>{date.getFullYear()}</div>
        </div>
      </div>
      <div className='ui-datepicker-header'>
        <div className='ui-datepicker-title'>
          <span className='ui-datepicker-month'>{months[date.getMonth()]}</span>&nbsp;
          <span className='ui-datepicker-year'>{date.getFullYear()}</span>
        </div>
      </div>
      <table className='ui-datepicker-calendar'>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className='ui-datepicker-week-end' />
          <col className='ui-datepicker-week-end' />
        </colgroup>
        <thead>
          <tr>
            <th scope='col' title='Понедельник'>Пн</th>
            <th scope='col' title='Вторник'>Вт</th>
            <th scope='col' title='Среда'>Ср</th>
            <th scope='col' title='Четверг'>Чт</th>
            <th scope='col' title='Пятница'>Пт</th>
            <th scope='col' title='Суббота'>Сб</th>
            <th scope='col' title='Воскресенье'>Вс</th>
          </tr>
        </thead>
        <Rows rows={createDays(date)} />
      </table>
    </div>
  );
}

