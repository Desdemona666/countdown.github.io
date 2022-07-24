const countdown = () => {
  const countDate = new Date('August 6, 2022 16:30:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //gimana cara waktunya bekerja?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //kalkulasikan
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = textDay;
  document.getElementById('hours').innerText = textHour;
  document.getElementById('minutes').innerText = textMinute;
  document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);
