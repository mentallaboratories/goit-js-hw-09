import { Report } from 'notiflix/build/notiflix-report-aio';
// Додатковий імпорт стилів
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    const { 
        elements:{delay, step, amount}
    } = e.currentTarget;
    let delaySet = parseInt(delay.value);
    let positions = parseInt(amount.value);
    let stepSet = parseInt(step.value);
    for (let position = 1; position <= positions; position++){
        createPromise(position, delaySet)
        .then(({ position, delay }) => {
            Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
;
          })
        .catch(({ position, delay }) => {
            Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
        delaySet += stepSet;
    }
    
}


function createPromise(position, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const shouldResolve = Math.random() > 0.3;
            if(shouldResolve){
                resolve({position, delay});
            }
                reject({position, delay});
        }, delay)
    });
}
    
  
//   createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });