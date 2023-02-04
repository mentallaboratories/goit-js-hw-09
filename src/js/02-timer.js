import flatpickr from "flatpickr";
import { Report } from 'notiflix/build/notiflix-report-aio';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

let time = null;
let intervalId = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      time=selectedDates[0].getTime()-options.defaultDate.getTime()
      if (time>0){
        refs.btnStart.disabled = false;
        return time;
      };

      Report.failure('Failure report', 'Please choose a date in the future', 'Close');
      //alert('Please choose a date in the future');
    },
  };

const refs = {
    inputDatePicker:document.querySelector('input#datetime-picker'),
    btnStart:document.querySelector('button[data-start]'),
    days:document.querySelector('.value[data-days]'),
    hours:document.querySelector('.value[data-hours]'),
    minutes:document.querySelector('.value[data-minutes]'),
    seconds:document.querySelector('.value[data-seconds]')
};

refs.btnStart.setAttribute('disabled','true');
refs.btnStart.addEventListener('click', onTimerStart)




flatpickr(refs.inputDatePicker, options);




function onTimerStart(e){
    e.currentTarget.disabled = true;
    intervalId = setInterval(tick,1000);
    
};

function tick(){
    if (time < 1000){
        clearInterval(intervalId);
        return;} else {
    time -=1000;
    
    const {days, hours, minutes, seconds} = convertMs(time);

    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);

    return time;
        }
};


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

function addLeadingZero(val){
    if (val < 10){
    return String(val).padStart(2,'0');
} else {
    return val;
}
}