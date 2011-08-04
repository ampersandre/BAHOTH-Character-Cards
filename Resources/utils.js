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
		text: labelText,
		height:'auto',
	    width:'auto',
	    shadowColor:'#aaa',
	    shadowOffset:{x:5,y:5},
	    color:'#aaa',
	    font:{fontSize:48},
	    textAlign:'center'
	});
}

function createScrollableView(viewArray) {
	return Ti.UI.createScrollableView({
		views:viewArray,
		showPagingControl:true,
		pagingControlHeight:10,
		maxZoomScale:2.0
	});
}