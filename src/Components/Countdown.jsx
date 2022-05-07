import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const runCountdown = () => {
  var currentTime = new Date();
  const offset = currentTime.getTimezoneOffset();
  currentTime.setMinutes(currentTime.getMinutes() + offset);
  var finalTime = new Date('2022-05-16T15:00:00Z');
  finalTime.setMinutes(finalTime.getMinutes() + offset);
  var fundraiseStartTime = new Date('2022-05-05T22:00:00Z');
  fundraiseStartTime.setMinutes(fundraiseStartTime.getMinutes() + offset);
  const fundraiseTotalTimeSeconds =
    Math.abs(finalTime.getTime() - fundraiseStartTime.getTime()) / 1000;

  var timerInterval = setInterval(() => {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    var secondsRemaining =
      Math.abs(finalTime.getTime() - currentTime.getTime()) / 1000;
    if (secondsRemaining < 1) {
      document.getElementById('base-timer-label-seconds-m').innerHTML =
        '0' + ' S';
      document.getElementById('base-timer-label-seconds').innerHTML =
        '0' + ' S';
      clearInterval(timerInterval);
    }
    var daysRemainingProgress =
      secondsRemaining / (fundraiseTotalTimeSeconds * 1.0);
    var daysRemainingDisplay = Math.floor(
      daysRemainingProgress * ((fundraiseTotalTimeSeconds * 1.0) / (24 * 3600)),
    );
    secondsRemaining = secondsRemaining - daysRemainingDisplay * 24 * 3600;
    var hoursRemainingProgress = secondsRemaining / (3600 * 24.0);
    var hoursRemaining = Math.floor(secondsRemaining / 3600);
    secondsRemaining = secondsRemaining - hoursRemaining * 3600;
    var minutesRemainingProgress = secondsRemaining / 3600.0;
    var minutesRemaining = Math.floor(secondsRemaining / 60);
    secondsRemaining = Math.floor(secondsRemaining - minutesRemaining * 60);

    document.getElementById('base-timer-label-days').innerHTML =
      daysRemainingDisplay + ' D';
    document.getElementById('base-timer-label-hours').innerHTML =
      hoursRemaining + ' H';
    document.getElementById('base-timer-label-minutes').innerHTML =
      minutesRemaining + ' M';
    document.getElementById('base-timer-label-seconds').innerHTML =
      secondsRemaining + ' S';

    const circleDasharrayDays = `${(daysRemainingProgress * 283).toFixed(
      0,
    )} 283`;
    document
      .getElementById('base-timer-path-remaining-days')
      .setAttribute('stroke-dasharray', circleDasharrayDays);

    const circleDasharrayHours = `${(hoursRemainingProgress * 283).toFixed(
      0,
    )} 283`;
    document
      .getElementById('base-timer-path-remaining-hours')
      .setAttribute('stroke-dasharray', circleDasharrayHours);

    const circleDasharrayMinutes = `${(minutesRemainingProgress * 283).toFixed(
      0,
    )} 283`;
    document
      .getElementById('base-timer-path-remaining-minutes')
      .setAttribute('stroke-dasharray', circleDasharrayMinutes);

    const circleDasharraySeconds = `${((secondsRemaining / 60) * 283).toFixed(
      0,
    )} 283`;
    document
      .getElementById('base-timer-path-remaining-seconds')
      .setAttribute('stroke-dasharray', circleDasharraySeconds);
  }, 1000);
};

const BrowserOnlyAxios = () => {
  return (
    <BrowserOnly fallback={<div> Loading... </div>}>
      {() => {
        runCountdown();
      }}
    </BrowserOnly>
  );
};

const Countdown = () => {
  return (
    <div id="timerContainer">
      <BrowserOnlyAxios></BrowserOnlyAxios>
      <div id="daysTimer" className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining-days"
              strokeDasharray="283"
              className="base-timer__path-remaining-days"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "></path>
          </g>
        </svg>
        <span id="base-timer-label-days" className="base-timer__label"></span>
      </div>
      <div id="hoursTimer" className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining-hours"
              strokeDasharray="283"
              className="base-timer__path-remaining-hours"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "></path>
          </g>
        </svg>
        <span id="base-timer-label-hours" className="base-timer__label"></span>
      </div>
      <div id="minutesTimer" className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining-minutes"
              strokeDasharray="283"
              className="base-timer__path-remaining-minutes"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "></path>
          </g>
        </svg>
        <span
          id="base-timer-label-minutes"
          className="base-timer__label"></span>
      </div>
      <div id="secondsTimer" className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining-seconds"
              strokeDasharray="283"
              className="base-timer__path-remaining-seconds"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "></path>
          </g>
        </svg>
        <span
          id="base-timer-label-seconds"
          className="base-timer__label"></span>
      </div>
    </div>
  );
};

export default Countdown;
