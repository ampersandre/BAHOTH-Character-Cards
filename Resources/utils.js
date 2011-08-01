function createWindow(windowName) {
	return Ti.UI.createWindow({
		title:windowName,
		backgroundColor:'#555'
	});
}

function createTab(tabName, innerWindow) {
	return Ti.UI.createTab({
		icon:'KS_nav_views.png',
		title:tabName,
		window:innerWindow
	});
}

function createLabel(labelText) {
	return Ti.UI.createLabel({
		color:'#aaa',
		text: labelText,
		font:{fontSize:18,fontFamily:'Helvetica Neue'},
		textAlign:'left',
		width:'auto'
	});
}