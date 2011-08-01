// Set default background
Titanium.UI.setBackgroundColor('#333');

var tabGroup = Titanium.UI.createTabGroup();

Ti.include('utils.js');

var cardsWindow = createWindow('Cards');
cardsWindow.add(createLabel('Choose your card'));

var cardsTab = createTab('Cards', cardsWindow);

var selectedCardWindow = createWindow('Selected');
selectedCardWindow.add(createLabel('This is your selected card'));

var selectedCardTab = createTab('Selected', selectedCardWindow);


tabGroup.addTab(cardsTab);
tabGroup.addTab(selectedCardTab);

tabGroup.open();
