import styles from '../components/calendar.module.css'


const Calendar = (props) => {
  

   const days = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
   const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
               "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
 
    


   const years = props.date.getFullYear()
   const getmonth = props.date.getMonth()
   const getdate = props.date.getDate()
   const getDay = props.date.getDay()

   console.log(getDay +1)


   console.log(years)
    return (
        <div className={styles["ui-datepicker"]}>
        <div className={styles["ui-datepicker-material-header"]}>
          <div className={styles["ui-datepicker-material-day"]}>{days[getDay - 1]}</div>
          <div className={styles["ui-datepicker-material-date"]}>
            <div className={styles["ui-datepicker-material-day-num"]}>{getdate}</div>
            <div className={styles["ui-datepicker-material-month"]}>{months[getmonth]}</div>
            <div className={styles["ui-datepicker-material-year"]}>{years}</div>
          </div>
        </div>
        <div className={styles["ui-datepicker-header"]}>
          <div className={styles["ui-datepicker-title"]}>
            <span className={styles["ui-datepicker-month"]}>{months[getmonth]}</span>&nbsp;<span className={styles["ui-datepicker-year"]}>{years}</span>
          </div>
        </div>
        <table className={styles["ui-datepicker-calendar"]}>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className={styles["ui-datepicker-week-end"]} />
            <col className={styles["ui-datepicker-week-end"]} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={getdate === 27 ? `${styles["ui-datepicker-today"]}` : ''} >27</td>
              <td className={getdate === 28 ? `${styles["ui-datepicker-today"]}` : ''}>28</td>
              <td className={getdate === 29 ? `${styles["ui-datepicker-today"]}` : ''}>29</td>
              <td className={getdate === 30 ? `${styles["ui-datepicker-today"]}` : ''}>30</td>
              <td className={getdate === 31 ? `${styles["ui-datepicker-today"]}` : ''}>31</td>
              <td className={getdate === 1 ? `${styles["ui-datepicker-today"]}` : ''} >1</td>
              <td className={getdate === 2 ? `${styles["ui-datepicker-today"]}` : ''}>2</td>
            </tr>
            <tr>
              <td className={getdate === 3 ? `${styles["ui-datepicker-today"]}` : ''}>3</td>
              <td className={getdate === 4 ? `${styles["ui-datepicker-today"]}` : ''}>4</td>
              <td className={getdate === 5 ? `${styles["ui-datepicker-today"]}` : ''}>5</td>
              <td className={getdate === 6 ? `${styles["ui-datepicker-today"]}` : ''}>6</td>
              <td className={getdate === 8 ? `${styles["ui-datepicker-today"]}` : ''}>8</td>
              <td className={getdate === 9 ? `${styles["ui-datepicker-today"]}` : ''}>9</td>
              <td className={getdate === 10 ? `${styles["ui-datepicker-today"]}` : ''}>10</td>
            </tr>
            <tr>
              <td className={getdate === 11 ? `${styles["ui-datepicker-today"]}` : ''}>11</td>
              <td className={getdate === 12 ? `${styles["ui-datepicker-today"]}` : ''}>12</td>
              <td className={getdate === 13 ? `${styles["ui-datepicker-today"]}` : ''}>13</td>
              <td className={getdate === 14 ? `${styles["ui-datepicker-today"]}` : ''}>14</td>
              <td className={getdate === 15 ? `${styles["ui-datepicker-today"]}` : ''}>15</td>
              <td className={getdate === 16 ? `${styles["ui-datepicker-today"]}` : ''}>16</td>
              <td className={getdate === 17 ? `${styles["ui-datepicker-today"]}` : ''}>17</td>
            </tr>
            <tr>
              <td className={getdate === 18 ? `${styles["ui-datepicker-today"]}` : ''}>18</td>
              <td className={getdate === 19 ? `${styles["ui-datepicker-today"]}` : ''}>19</td>
              <td className={getdate === 20 ? `${styles["ui-datepicker-today"]}` : ''}>20</td>
              <td className={getdate === 21 ? `${styles["ui-datepicker-today"]}` : ''}>21</td>
              <td className={getdate === 22 ? `${styles["ui-datepicker-today"]}` : ''}>22</td>
              <td className={getdate === 23 ? `${styles["ui-datepicker-today"]}` : ''}>23</td>
              <td className={getdate === 24 ? `${styles["ui-datepicker-today"]}` : ''} >24</td>
            </tr>
            <tr>
              <td className={getdate === 25 ? `${styles["ui-datepicker-today"]}` : ''}>25</td>
              <td className={getdate === 26 ? `${styles["ui-datepicker-today"]}` : ''}>26</td>
              <td className={getdate === 27 ? `${styles["ui-datepicker-today"]}` : ''}>27</td>
              <td className={getdate === 10 ? `${styles["ui-datepicker-today"]}` : ''}>28</td>
              <td className={getdate === 10 ? `${styles["ui-datepicker-today"]}` : ''}>29</td>
              <td className={getdate === 10 ? `${styles["ui-datepicker-today"]}` : ''}></td>
              <td className={getdate === 10 ? `${styles["ui-datepicker-today"]}` : ''}></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Calendar