// // Searchbar
$("#searchBar").keyup(function(ev) {
   if (ev.which === 13) {
      var name = $("input").val();
      location.href = "/user/" + name;
   }
}); 

//Menu
function home() {
   window.location.href = '/';
}

function commands() {
   window.location.href = '/commands';
}

function clips() {
   window.location.href = '/clips';
}

function admin() {
   window.location.href = '/admin';
}

function songlist() {
   window.location.href = '/admin/songlist';
}

function logs() {
   window.location.href = '/admin/logs';
}

function module() {
   window.location.href = '/admin/modules';
}

function sub() {
   window.location.href = '/sub';
}

function history() {
	window.location.href = '/history/' + new Date().toISOString().substr(0, 10);
}

function login() {
	window.location.href = "/login"
}

function logout() {
	window.location.href = '/logout';
}

function about() {
   window.location.href = '/about';
}

function github() {
   window.location.href = 'https://www.github.com/Mstiekema/Yucibot';
}

function support() {
   window.location.href = '/support';
}

function donate() {
   window.location.href = 'https://www.paypal.me/Mstiekema';
}