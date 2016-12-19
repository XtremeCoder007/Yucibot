function home() {
   window.location.href = '/';
}

function commands() {
   window.location.href = '/commands';
}

var time = new Date();
var day = time.getDate();
var month = time.getMonth() + 1;
var year = time.getFullYear();
var date = year + "-" + month + "-" + day;

function history() {
   window.location.href = '/history/' + date;
}

function songlist() {
   window.location.href = '/admin/songlist';
}

function points() {
   window.location.href = '/admin/pointlogs';
}

function module() {
   window.location.href = '/admin/modules';
}