Ti.include('utils.js');

// Set default background
Titanium.UI.setBackgroundColor('#333');

var tabGroup = Titanium.UI.createTabGroup();

var characterCardLabels = [createLabel("Jenny LeClerc"),
							createLabel("Darin \"Flash\" Williams"),
							createLabel("Vivan Lopez"),
							createLabel("Peter Akimoto"),
							createLabel("Little Zoe Ingstrom"),
							createLabel("Professor Longfellow"),
							createLabel("Madame Zostra")];

var cardScrollView = createScrollableView(characterCardLabels);

var cardsWindow = createWindow('Cards');
cardsWindow.add(cardScrollView);
var cardsTab = createTab('Cards', cardsWindow);

var selectedCardWindow = createWindow('Selected Card');
var selectedCardTab = createTab('Selected Card', selectedCardWindow);

tabGroup.addTab(cardsTab);
tabGroup.addTab(selectedCardTab);
tabGroup.open();