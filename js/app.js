(function() {
  const remainingTime = document.querySelector('.remaining-time');

  const todayGeorgianDate = moment();

  const todayHijriFormat = todayGeorgianDate.format('iYYYY/iM/iD');

  const todayHijriDate = moment(todayHijriFormat, 'iYYYY/iM/iD');

  const thisHijriYear = parseInt(todayGeorgianDate.format('iYYYY'));

  let ramadanDate = moment(`${thisHijriYear}/9/1`, 'iYYYY/iM/iD');

  let daysInRamadan = ramadanDate.daysInMonth();

  let diff = todayHijriDate.diff(ramadanDate, 'days');


  if(diff >=0){
    if(diff<= daysInRamadan) {
      document.querySelector('.container')
              .classList
              .add('container--duringRamadan');
            diff = daysInRamadan - diff;
        }
        else {//after Ramadan
            const nextHijriYear = thisHijriYear + 1;

            ramadanDate = moment(`${nextHijriYear}/9/1`, 'iYYYY/iM/iD');
            diff = todayHijriDate.diff(ramadanDate, 'days');
        }
    }

    remainingTime.textContent = Math.abs(diff).toLocaleString('ar-sa');
})();

