import React, {useEffect} from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import Translate from '@docusaurus/Translate';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const timerProps = {
  isPlaying: true,
  rotation: 'counterclockwise',
  size: 100,
  trailStrokeWidth: 6,
  strokeWidth: 6,
  trailColor: '#808080',
};

export default function Countdown(props) {
  const startTime = new Date('2022-05-06T02:17:00Z') / 1000; // use UNIX timestamp in seconds
  const currentTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date('2022-05-29T15:00:00Z') / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - currentTime;
  const totalTime = endTime - startTime;
  const days = Math.ceil(totalTime / daySeconds);
  const daysDuration = days * daySeconds;

  // make sure to appear the minting link when the countdown ends
  useEffect(() => {
    let timer = null;
    const shouldEnd = () => {
      const remainingTimeNow = endTime - Date.now() / 1000;
      if (remainingTimeNow <= 0) {
        clearInterval(timer);
        props.onEnd && props.onEnd();
      }
    };
    shouldEnd();
    timer = setInterval(shouldEnd, 1000);
  }, []);

  return (
    <div className="countdownContainer">
      <div className="countdownSeperator">
        <div className="timer">
          <CountdownCircleTimer
            {...timerProps}
            colors="#1bab8f"
            duration={daysDuration}
            initialRemainingTime={remainingTime}>
            {({elapsedTime}) => (
              <div className="timerText">
                <div className="timerTime">
                  {getTimeDays(daysDuration - elapsedTime)}
                </div>
                <div>
                  <Translate>Days</Translate>
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="timer">
          <CountdownCircleTimer
            className="timer"
            {...timerProps}
            colors="#2980b8"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}>
            {({elapsedTime}) => (
              <div className="timerText">
                <div className="timerTime">
                  {getTimeHours(daySeconds - elapsedTime)}
                </div>
                <div>
                  <Translate>Hours</Translate>
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="countdownSeperator">
        <div className="timer">
          <CountdownCircleTimer
            {...timerProps}
            colors="#8e44ad"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}>
            {({elapsedTime}) => (
              <div className="timerText">
                <div className="timerTime">
                  {getTimeMinutes(hourSeconds - elapsedTime)}
                </div>
                <div>
                  <Translate>Min</Translate>
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="timer">
          <CountdownCircleTimer
            {...timerProps}
            colors="#f39c12"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}>
            {({elapsedTime}) => (
              <div className="timerText">
                <div className="timerTime">{getTimeSeconds(elapsedTime)}</div>
                <div>
                  <Translate>Sec</Translate>
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
}
