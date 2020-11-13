function checkPathname() {
	console.log('checkPathname run')
	if (document.location.pathname === '/feed/') {
		window.location.href = '/jobs/'
	}
}

checkPathname()