
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time' || 0);

player.setCurrentTime(savedTime).catch((error) => {
 if (error.name === 'RangeError') {
    return;
 } return;
});