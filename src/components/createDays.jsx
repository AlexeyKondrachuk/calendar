export const createDays = function(date) {

    let dayFirstName = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
        dayLast = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        dayLastName = new Date(date.getFullYear(), date.getMonth(), dayLast).getDay(),
        rows = [], 
        cells = [];
  
    if (dayFirstName != 1) {
     
      let j = dayFirstName == 0 ? 6 : dayFirstName - 1;
      for (let i = 0; i < j; i++) {
        let day = new Date(date.getFullYear(), date.getMonth(), dayFirstName - i - dayFirstName).getDate();
        cells.unshift({ day: day, attr: 'ui-datepicker-other-month'});
       
      }
    }
  
   
    for (let i = 1; i <= dayLast; i++) {
      let attr = i == date.getDate() ? 'ui-datepicker-today' : '';
      cells.push({ day: i, attr: attr});
      if (cells.length == 7) {
        rows.push(cells);
        cells = [];
      }
    }
    
    
    if (dayLastName != 0) {
      for (let i = dayLastName; i < 7; i++) {
        cells.push({ day: i - dayLastName + 1, attr: 'ui-datepicker-other-month'});
      }
    }
    rows.push(cells);
    return rows;
  }