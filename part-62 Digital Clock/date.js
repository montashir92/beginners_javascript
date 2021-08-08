
//const date = new Date(1995, 11, 17, 3, 24, 0);

//console.log(date);
//console.log(date.getDay());
//console.log(date.setDate(18));
//console.log(date.getDate());
//console.log(date.getFullYear());
//console.log(date.getYear());
//console.log(date.getHours());
//console.log(date.getMinutes());
//console.log(date.getSeconds());
//console.log(date.getTime());
//console.log(Date.now());
//console.log(date.getUTCDay());
//console.log(date.getUTCHours());
//console.log(date);

//const date = new Date();

//const hours = date.getHours();
//const minutes = date.getMinutes();
//const seconds = date.getSeconds();


//const twelveHoursFormat = hours > 12 ? hours - 12: hours
//const formatHours = twelveHoursFormat < 10 ? '0'+twelveHoursFormat : twelveHoursFormat
//const formatMinutes = minutes < 10 ? '0'+minutes : minutes
//const formatSeconds = seconds < 10 ? '0'+seconds : seconds

//console.log(`${formatHours}:${minutes}:${seconds}`);

//setTimeout
//setInterval

//setTimeout(() => {
//	const date = new Date();

//	const hours = date.getHours();
//	const minutes = date.getMinutes();
//	const seconds = date.getSeconds();

//
//	const twelveHoursFormat = hours > 12 ? hours - 12: hours
//	const formatHours = twelveHoursFormat < 10 ? '0'+twelveHoursFormat : twelveHoursFormat
//	const formatMinutes = minutes < 10 ? '0'+minutes : minutes
//	const formatSeconds = seconds < 10 ? '0'+seconds : seconds
//
//	console.log(`${formatHours}:${minutes}:${seconds}`);
//}, 1000);

function getCurrentTime() {
	const date = new Date()

	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()


	const twelveHoursFormat = hours > 12 ? hours - 12: hours
	const formatHours = twelveHoursFormat < 10 ? '0'+twelveHoursFormat : twelveHoursFormat
	const formatMinutes = minutes < 10 ? '0'+minutes : minutes
	const formatSeconds = seconds < 10 ? '0'+seconds : seconds

	console.log(`${formatHours}:${formatMinutes}:${formatSeconds}`);
}
const timer = setInterval(() => {
	getCurrentTime()
}, 1000);

clearInterval(timer)