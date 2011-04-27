 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Polish language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['pl'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'Edytor tekstu sformatowanego, %1, w celu uzyskania pomocy naci?nij ALT 0.',

	// ARIA descriptions.
	toolbar	: 'Pasek narz?dzi',
	editor	: 'Edytor tekstu sformatowanego',

	// Toolbar buttons without dialogs.
	source			: '?ród?o dokumentu',
	newPage			: 'Nowa strona',
	save			: 'Zapisz',
	preview			: 'Podgl?d',
	cut				: 'Wytnij',
	copy			: 'Kopiuj',
	paste			: 'Wklej',
	print			: 'Drukuj',
	underline		: 'Podkre?lenie',
	bold			: 'Pogrubienie',
	italic			: 'Kursywa',
	selectAll		: 'Zaznacz wszystko',
	removeFormat	: 'Usu? formatowanie',
	strike			: 'Przekre?lenie',
	subscript		: 'Indeks dolny',
	superscript		: 'Indeks górny',
	horizontalrule	: 'Wstaw poziom? lini?',
	pagebreak		: 'Wstaw pdodzia? strony',
	pagebreakAlt		: 'Wstaw podzia? strony',
	unlink			: 'Usu? hiper??cze',
	undo			: 'Cofnij',
	redo			: 'Ponów',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Przegl?daj',
		url				: 'Adres URL',
		protocol		: 'Protokó?',
		upload			: 'Wy?lij',
		uploadSubmit	: 'Wy?lij',
		image			: 'Obrazek',
		flash			: 'Flash',
		form			: 'Formularz',
		checkbox		: 'Pole wyboru (checkbox)',
		radio			: 'Przycisk opcji (radio)',
		textField		: 'Pole tekstowe',
		textarea		: 'Obszar tekstowy',
		hiddenField		: 'Pole ukryte',
		button			: 'Przycisk',
		select			: 'Lista wyboru',
		imageButton		: 'Przycisk graficzny',
		notSet			: '<nie ustawiono>',
		id				: 'Id',
		name			: 'Nazwa',
		langDir			: 'Kierunek tekstu',
		langDirLtr		: 'Od lewej do prawej (LTR)',
		langDirRtl		: 'Od prawej do lewej (RTL)',
		langCode		: 'Kod j?zyka',
		longDescr		: 'Adres URL d?ugiego opisu',
		cssClass		: 'Nazwa klasy CSS',
		advisoryTitle	: 'Opis obiektu docelowego',
		cssStyle		: 'Styl',
		ok				: 'OK',
		cancel			: 'Anuluj',
		close			: 'Zamknij',
		preview			: 'Podgl?d',
		generalTab		: 'Ogólne',
		advancedTab		: 'Zaawansowane',
		validateNumberFailed : 'Ta warto?? nie jest liczb?.',
		confirmNewPage	: 'Wszystkie niezapisane zmiany zostan? utracone. Czy na pewno wczyta? now? stron??',
		confirmCancel	: 'Pewne opcje zosta?y zmienione. Czy na pewno zamkn?? okno dialogowe?',
		options			: 'Opcje',
		target			: 'Obiekt docelowy',
		targetNew		: 'Nowe okno (_blank)',
		targetTop		: 'Okno najwy?ej w hierarchii (_top)',
		targetSelf		: 'To samo okno (_self)',
		targetParent	: 'Okno nadrz?dne (_parent)',
		langDirLTR		: 'Od lewej do prawej (LTR)',
		langDirRTL		: 'Od prawej do lewej (RTL)',
		styles			: 'Style',
		cssClasses		: 'Klasy arkusza stylów',
		width			: 'Szeroko??',
		height			: 'Wysoko??',
		align			: 'Wyrównaj',
		alignLeft		: 'Do lewej',
		alignRight		: 'Do prawej',
		alignCenter		: 'Do ?rodka',
		alignTop		: 'Do góry',
		alignMiddle		: 'Do ?rodka',
		alignBottom		: 'Do do?u',
		invalidHeight	: 'Wysoko?? musi by? liczb?.',
		invalidWidth	: 'Szeroko?? musi by? liczb?.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, niedost?pne</span>'
	},

	contextmenu :
	{
		options : 'Opcje menu kontekstowego'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Wstaw znak specjalny',
		title		: 'Wybierz znak specjalny',
		options : 'Opcje znaków specjalnych'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Wstaw/edytuj hiper??cze',
		other 		: '<inny>',
		menu		: 'Edytuj hiper??cze',
		title		: 'Hiper??cze',
		info		: 'Informacje ',
		target		: 'Obiekt docelowy',
		upload		: 'Wy?lij',
		advanced	: 'Zaawansowane',
		type		: 'Typ hiper??cza',
		toUrl		: 'Adres URL',
		toAnchor	: 'Odno?nik wewn?trz strony (kotwica)',
		toEmail		: 'Adres e-mail',
		targetFrame		: '<ramka>',
		targetPopup		: '<wyskakuj?ce okno>',
		targetFrameName	: 'Nazwa ramki docelowej',
		targetPopupName	: 'Nazwa wyskakuj?cego okna',
		popupFeatures	: 'W?a?ciwo?ci wyskakuj?cego okna',
		popupResizable	: 'Skalowalny',
		popupStatusBar	: 'Pasek statusu',
		popupLocationBar: 'Pasek adresu',
		popupToolbar	: 'Pasek narz?dzi',
		popupMenuBar	: 'Pasek menu',
		popupFullScreen	: 'Pe?ny ekran (IE)',
		popupScrollBars	: 'Paski przewijania',
		popupDependent	: 'Okno zale?ne (Netscape)',
		popupLeft		: 'Pozycja w poziomie',
		popupTop		: 'Pozycja w pionie',
		id				: 'Id',
		langDir			: 'Kierunek tekstu',
		langDirLTR		: 'Od lewej do prawej (LTR)',
		langDirRTL		: 'Od prawej do lewej (RTL)',
		acccessKey		: 'Klawisz dost?pu',
		name			: 'Nazwa',
		langCode			: 'Kod j?zyka',
		tabIndex			: 'Indeks kolejno?ci',
		advisoryTitle		: 'Opis obiektu docelowego',
		advisoryContentType	: 'Typ MIME obiektu docelowego',
		cssClasses		: 'Nazwa klasy CSS',
		charset			: 'Kodowanie znaków obiektu docelowego',
		styles			: 'Styl',
		rel			: 'Relacja',
		selectAnchor		: 'Wybierz kotwic?',
		anchorName		: 'Wg nazwy',
		anchorId			: 'Wg identyfikatora',
		emailAddress		: 'Adres e-mail',
		emailSubject		: 'Temat',
		emailBody		: 'Tre??',
		noAnchors		: '(W dokumencie nie zdefiniowano ?adnych kotwic)',
		noUrl			: 'Podaj adres URL',
		noEmail			: 'Podaj adres e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Wstaw/edytuj kotwic?',
		menu		: 'W?a?ciwo?ci kotwicy',
		title		: 'W?a?ciwo?ci kotwicy',
		name		: 'Nazwa kotwicy',
		errorName	: 'Wpisz nazw? kotwicy'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'W?a?ciwo?ci list numerowanych',
		bulletedTitle		: 'W?a?ciwo?ci list wypunktowanych',
		type				: 'Typ punktora',
		start				: 'Pocz?tek',
		validateStartNumber				:'List? musi rozpoczyna? liczba ca?kowita.',
		circle				: 'Ko?o',
		disc				: 'Okr?g',
		square				: 'Kwadrat',
		none				: 'Brak',
		notset				: '<nie ustawiono>',
		armenian			: 'Numerowanie arme?skie',
		georgian			: 'Numerowanie gruzi?skie (an, ban, gan itd.)',
		lowerRoman			: 'Ma?e cyfry rzymskie (i, ii, iii, iv, v itd.)',
		upperRoman			: 'Du?e cyfry rzymskie (I, II, III, IV, V itd.)',
		lowerAlpha			: 'Ma?e litery (a, b, c, d, e itd.)',
		upperAlpha			: 'Du?e litery (A, B, C, D, E itd.)',
		lowerGreek			: 'Ma?e litery greckie (alpha, beta, gamma itd.)',
		decimal				: 'Liczby (1, 2, 3 itd.)',
		decimalLeadingZero	: 'Liczby z pocz?tkowym zerem (01, 02, 03 itd.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Znajd? i zamie?',
		find				: 'Znajd?',
		replace				: 'Zamie?',
		findWhat			: 'Znajd?:',
		replaceWith			: 'Zast?p przez:',
		notFoundMsg			: 'Nie znaleziono szukanego has?a.',
		matchCase			: 'Uwzgl?dnij wielko?? liter',
		matchWord			: 'Ca?e s?owa',
		matchCyclic			: 'Cykliczne dopasowanie',
		replaceAll			: 'Zamie? wszystko',
		replaceSuccessMsg	: '%1 wyst?pie? zast?pionych.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabela',
		title		: 'W?a?ciwo?ci tabeli',
		menu		: 'W?a?ciwo?ci tabeli',
		deleteTable	: 'Usu? tabel?',
		rows		: 'Liczba wierszy',
		columns		: 'Liczba kolumn',
		border		: 'Grubo?? obramowania',
		widthPx		: 'piksele',
		widthPc		: '%',
		widthUnit	: 'jednostka szeroko?ci',
		cellSpace	: 'Odst?p pomi?dzy komórkami',
		cellPad		: 'Dope?nienie komórek',
		caption		: 'Tytu?',
		summary		: 'Podsumowanie',
		headers		: 'Nag?ówki',
		headersNone		: 'Brak',
		headersColumn	: 'Pierwsza kolumna',
		headersRow		: 'Pierwszy wiersz',
		headersBoth		: 'Oba',
		invalidRows		: 'Liczba wierszy musi by? wi?ksza ni? 0.',
		invalidCols		: 'Liczba kolumn musi by? wi?ksza ni? 0.',
		invalidBorder	: 'Warto?? obramowania musi by? liczb?.',
		invalidWidth	: 'Szeroko?? tabeli musi by? liczb?.',
		invalidHeight	: 'Wysoko?? tabeli musi by? liczb?.',
		invalidCellSpacing	: 'Odst?p komórek musi by? liczb?.',
		invalidCellPadding	: 'Dope?nienie komórek musi by? liczb?.',

		cell :
		{
			menu			: 'Komórka',
			insertBefore	: 'Wstaw komórk? z lewej',
			insertAfter		: 'Wstaw komórk? z prawej',
			deleteCell		: 'Usu? komórki',
			merge			: 'Po??cz komórki',
			mergeRight		: 'Po??cz z komórk? z prawej',
			mergeDown		: 'Po??cz z komórk? poni?ej',
			splitHorizontal	: 'Podziel komórk? poziomo',
			splitVertical	: 'Podziel komórk? pionowo',
			title			: 'W?a?ciwo?ci komórki',
			cellType		: 'Typ komórki',
			rowSpan			: 'Scalenie wierszy',
			colSpan			: 'Scalenie komórek',
			wordWrap		: 'Zawijanie s?ów',
			hAlign			: 'Wyrównanie poziome',
			vAlign			: 'Wyrównanie pionowe',
			alignBaseline	: 'Linia bazowa',
			bgColor			: 'Kolor t?a',
			borderColor		: 'Kolor obramowania',
			data			: 'Dane',
			header			: 'Nag?owek',
			yes				: 'Tak',
			no				: 'Nie',
			invalidWidth	: 'Szeroko?? komórki musi by? liczb?.',
			invalidHeight	: 'Wysoko?? komórki musi by? liczb?.',
			invalidRowSpan	: 'Scalenie wierszy musi by? liczb? ca?kowit?.',
			invalidColSpan	: 'Scalenie komórek musi by? liczb? ca?kowit?.',
			chooseColor		: 'Wybierz'
		},

		row :
		{
			menu			: 'Wiersz',
			insertBefore	: 'Wstaw wiersz powy?ej',
			insertAfter		: 'Wstaw wiersz poni?ej',
			deleteRow		: 'Usu? wiersze'
		},

		column :
		{
			menu			: 'Kolumna',
			insertBefore	: 'Wstaw kolumn? z lewej',
			insertAfter		: 'Wstaw kolumn? z prawej',
			deleteColumn	: 'Usu? kolumny'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'W?a?ciwo?ci przycisku',
		text		: 'Tekst (Warto??)',
		type		: 'Typ',
		typeBtn		: 'Przycisk',
		typeSbm		: 'Wy?lij',
		typeRst		: 'Wyczy??'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'W?a?ciwo?ci pola wyboru (checkbox)',
		radioTitle	: 'W?a?ciwo?ci przycisku opcji (radio)',
		value		: 'Warto??',
		selected	: 'Zaznaczone'
	},

	// Form Dialog.
	form :
	{
		title		: 'W?a?ciwo?ci formularza',
		menu		: 'W?a?ciwo?ci formularza',
		action		: 'Akcja',
		method		: 'Metoda',
		encoding	: 'Kodowanie'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'W?a?ciwo?ci listy wyboru',
		selectInfo	: 'Informacje',
		opAvail		: 'Dost?pne opcje',
		value		: 'Warto??',
		size		: 'Rozmiar',
		lines		: 'wierszy',
		chkMulti	: 'Wielokrotny wybór',
		opText		: 'Tekst',
		opValue		: 'Warto??',
		btnAdd		: 'Dodaj',
		btnModify	: 'Zmie?',
		btnUp		: 'Do góry',
		btnDown		: 'Do do?u',
		btnSetValue : 'Ustaw jako zaznaczon?',
		btnDelete	: 'Usu?'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'W?a?ciwo?ci obszaru tekstowego',
		cols		: 'Liczba kolumn',
		rows		: 'Liczba wierszy'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'W?a?ciwo?ci pola tekstowego',
		name		: 'Nazwa',
		value		: 'Warto??',
		charWidth	: 'Szeroko?? w znakach',
		maxChars	: 'Szeroko?? maksymalna',
		type		: 'Typ',
		typeText	: 'Tekst',
		typePass	: 'Has?o'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'W?a?ciwo?ci pola ukrytego',
		name	: 'Nazwa',
		value	: 'Warto??'
	},

	// Image Dialog.
	image :
	{
		title		: 'W?a?ciwo?ci obrazka',
		titleButton	: 'W?a?ciwo?ci przycisku graficznego',
		menu		: 'W?a?ciwo?ci obrazka',
		infoTab		: 'Informacje o obrazku',
		btnUpload	: 'Wy?lij',
		upload		: 'Wy?lij',
		alt			: 'Tekst zast?pczy',
		lockRatio	: 'Zablokuj proporcje',
		unlockRatio	: 'Odblokuj proporcje',
		resetSize	: 'Przywró? rozmiar',
		border		: 'Obramowanie',
		hSpace		: 'Odst?p poziomy',
		vSpace		: 'Odst?p pionowy',
		alertUrl	: 'Podaj adres obrazka.',
		linkTab		: 'Hiper??cze',
		button2Img	: 'Czy chcesz przekonwertowa? zaznaczony przycisk graficzny do zwyk?ego obrazka?',
		img2Button	: 'Czy chcesz przekonwertowa? zaznaczony obrazek do przycisku graficznego?',
		urlMissing	: 'Podaj adres URL obrazka.',
		validateBorder	: 'Warto?? obramowania musi by? liczb? ca?kowit?.',
		validateHSpace	: 'Warto?? odst?pu poziomego musi by? liczb? ca?kowit?.',
		validateVSpace	: 'Warto?? odst?pu pionowego musi by? liczb? ca?kowit?.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'W?a?ciwo?ci obiektu Flash',
		propertiesTab	: 'W?a?ciwo?ci',
		title			: 'W?a?ciwo?ci obiektu Flash',
		chkPlay			: 'Autoodtwarzanie',
		chkLoop			: 'P?tla',
		chkMenu			: 'W??cz menu',
		chkFull			: 'Zezwól na pe?ny ekran',
 		scale			: 'Skaluj',
		scaleAll		: 'Poka? wszystko',
		scaleNoBorder	: 'Bez obramowania',
		scaleFit		: 'Dok?adne dopasowanie',
		access			: 'Dost?p skryptów',
		accessAlways	: 'Zawsze',
		accessSameDomain: 'Ta sama domena',
		accessNever		: 'Nigdy',
		alignAbsBottom	: 'Do do?u',
		alignAbsMiddle	: 'Do ?rodka w pionie',
		alignBaseline	: 'Do linii bazowej',
		alignTextTop	: 'Do góry tekstu',
		quality			: 'Jako??',
		qualityBest		: 'Najlepsza',
		qualityHigh		: 'Wysoka',
		qualityAutoHigh	: 'Auto wysoka',
		qualityMedium	: '?rednia',
		qualityAutoLow	: 'Auto niska',
		qualityLow		: 'Niska',
		windowModeWindow: 'Okno',
		windowModeOpaque: 'Nieprzezroczyste',
		windowModeTransparent : 'Przezroczyste',
		windowMode		: 'Tryb okna',
		flashvars		: 'Zmienne obiektu Flash',
		bgcolor			: 'Kolor t?a',
		hSpace			: 'Odst?p poziomy',
		vSpace			: 'Odst?p pionowy',
		validateSrc		: 'Podaj adres URL',
		validateHSpace	: 'Odst?p poziomy musi by? liczb?.',
		validateVSpace	: 'Odst?p pionowy musi by? liczb?.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Sprawd? pisowni?',
		title			: 'Sprawd? pisowni?',
		notAvailable	: 'Przepraszamy, ale us?uga jest obecnie niedost?pna.',
		errorLoading	: 'B??d wczytywania hosta aplikacji us?ugi: %s.',
		notInDic		: 'S?owa nie ma w s?owniku',
		changeTo		: 'Zmie? na',
		btnIgnore		: 'Ignoruj',
		btnIgnoreAll	: 'Ignoruj wszystkie',
		btnReplace		: 'Zmie?',
		btnReplaceAll	: 'Zmie? wszystkie',
		btnUndo			: 'Cofnij',
		noSuggestions	: '- Brak sugestii -',
		progress		: 'Trwa sprawdzanie...',
		noMispell		: 'Sprawdzanie zako?czone: nie znaleziono b??dów',
		noChanges		: 'Sprawdzanie zako?czone: nie zmieniono ?adnego s?owa',
		oneChange		: 'Sprawdzanie zako?czone: zmieniono jedno s?owo',
		manyChanges		: 'Sprawdzanie zako?czone: zmieniono %l s?ów',
		ieSpellDownload	: 'S?ownik nie jest zainstalowany. Czy chcesz go pobra??'
	},

	smiley :
	{
		toolbar	: 'Emotikony',
		title	: 'Wstaw emotikona',
		options : 'Opcje emotikonów'
	},

	elementsPath :
	{
		eleLabel : '?cie?ka elementów',
		eleTitle : 'element %1'
	},

	numberedlist	: 'Lista numerowana',
	bulletedlist	: 'Lista wypunktowana',
	indent			: 'Zwi?ksz wci?cie',
	outdent			: 'Zmniejsz wci?cie',

	justify :
	{
		left	: 'Wyrównaj do lewej',
		center	: 'Wy?rodkuj',
		right	: 'Wyrównaj do prawej',
		block	: 'Wyjustuj'
	},

	blockquote : 'Cytat',

	clipboard :
	{
		title		: 'Wklej',
		cutError	: 'Ustawienia bezpiecze?stwa Twojej przegl?darki nie pozwalaj? na automatyczne wycinanie tekstu. U?yj skrótu klawiszowego Ctrl/Cmd+X.',
		copyError	: 'Ustawienia bezpiecze?stwa Twojej przegl?darki nie pozwalaj? na automatyczne kopiowanie tekstu. U?yj skrótu klawiszowego Ctrl/Cmd+C.',
		pasteMsg	: 'Wklej tekst w poni?szym polu, u?ywaj?c skrótu klawiaturowego (<STRONG>Ctrl/Cmd+V</STRONG>), i kliknij <STRONG>OK</STRONG>.',
		securityMsg	: 'Zabezpieczenia przegl?darki uniemo?liwiaj? wklejenie danych bezpo?rednio do edytora. Prosz? ponownie wklei? dane w tym oknie.',
		pasteArea	: 'Obszar wklejania'
	},

	pastefromword :
	{
		confirmCleanup	: 'Tekst, który chcesz wklei?, prawdopodobnie pochodzi z programu Microsoft Word. Czy chcesz go wyczy?ci? przed wklejeniem?',
		toolbar			: 'Wklej z programu MS Word',
		title			: 'Wklej z programu MS Word',
		error			: 'Wyczyszczenie wklejonych danych nie by?o mo?liwe z powodu wyst?pienia b??du.'
	},

	pasteText :
	{
		button	: 'Wklej jako czysty tekst',
		title	: 'Wklej jako czysty tekst'
	},

	templates :
	{
		button			: 'Szablony',
		title			: 'Szablony zawarto?ci',
		options : 'Opcje szablonów',
		insertOption	: 'Zast?p obecn? zawarto??',
		selectPromptMsg	: 'Wybierz szablon do otwarcia w edytorze<br>(obecna zawarto?? okna edytora zostanie utracona):',
		emptyListMsg	: '(Brak zdefiniowanych szablonów)'
	},

	showBlocks : 'Poka? bloki',

	stylesCombo :
	{
		label		: 'Styl',
		panelTitle	: 'Style formatuj?ce',
		panelTitle1	: 'Style blokowe',
		panelTitle2	: 'Style liniowe',
		panelTitle3	: 'Style obiektowe'
	},

	format :
	{
		label		: 'Format',
		panelTitle	: 'Format',

		tag_p		: 'Normalny',
		tag_pre		: 'Tekst sformatowany',
		tag_address	: 'Adres',
		tag_h1		: 'Nag?ówek 1',
		tag_h2		: 'Nag?ówek 2',
		tag_h3		: 'Nag?ówek 3',
		tag_h4		: 'Nag?ówek 4',
		tag_h5		: 'Nag?ówek 5',
		tag_h6		: 'Nag?ówek 6',
		tag_div		: 'Normalny (DIV)'
	},

	div :
	{
		title				: 'Utwórz pojemnik Div',
		toolbar				: 'Utwórz pojemnik Div',
		cssClassInputLabel	: 'Klasy arkusza stylów',
		styleSelectLabel	: 'Styl',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: 'Kod j?zyka',
		inlineStyleInputLabel	: 'Style liniowe',
		advisoryTitleInputLabel	: 'Opis obiektu docelowego',
		langDirLabel		: 'Kierunek tekstu',
		langDirLTRLabel		: 'Od lewej do prawej (LTR)',
		langDirRTLLabel		: 'Od prawej do lewej (RTL)',
		edit				: 'Edytuj pojemnik Div',
		remove				: 'Usu? pojemnik Div'
  	},

	iframe :
	{
		title		: 'W?a?ciwo?ci elementu IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Podaj adres URL elementu IFrame',
		scrolling	: 'W??cz paski przewijania',
		border		: 'Poka? obramowanie obiektu IFrame'
	},

	font :
	{
		label		: 'Czcionka',
		voiceLabel	: 'Czcionka',
		panelTitle	: 'Czcionka'
	},

	fontSize :
	{
		label		: 'Rozmiar',
		voiceLabel	: 'Rozmiar czcionki',
		panelTitle	: 'Rozmiar'
	},

	colorButton :
	{
		textColorTitle	: 'Kolor tekstu',
		bgColorTitle	: 'Kolor t?a',
		panelTitle		: 'Kolory',
		auto			: 'Automatycznie',
		more			: 'Wi?cej kolorów...'
	},

	colors :
	{
		'000' : 'Czarny',
		'800000' : 'Kasztanowy',
		'8B4513' : 'Czekoladowy',
		'2F4F4F' : 'Ciemnografitowy',
		'008080' : 'Morski',
		'000080' : 'Granatowy',
		'4B0082' : 'Indygo',
		'696969' : 'Ciemnoszary',
		'B22222' : 'Czerwie? ?elazowa',
		'A52A2A' : 'Br?zowy',
		'DAA520' : 'Ciemnoz?oty',
		'006400' : 'Ciemnozielony',
		'40E0D0' : 'Turkusowy',
		'0000CD' : 'Ciemnoniebieski',
		'800080' : 'Purpurowy',
		'808080' : 'Szary',
		'F00' : 'Czerwony',
		'FF8C00' : 'Ciemnopomara?czowy',
		'FFD700' : 'Z?oty',
		'008000' : 'Zielony',
		'0FF' : 'Cyjan',
		'00F' : 'Niebieski',
		'EE82EE' : 'Fioletowy',
		'A9A9A9' : 'Przygaszony szary',
		'FFA07A' : '?ososiowy',
		'FFA500' : 'Pomara?czowy',
		'FFFF00' : '?ó?ty',
		'00FF00' : 'Limonkowy',
		'AFEEEE' : 'Bladoturkusowy',
		'ADD8E6' : 'Jasnoniebieski',
		'DDA0DD' : '?liwkowy',
		'D3D3D3' : 'Jasnoszary',
		'FFF0F5' : 'Jasnolawendowy',
		'FAEBD7' : 'Kremowobia?y',
		'FFFFE0' : 'Jasno?ó?ty',
		'F0FFF0' : 'Bladozielony',
		'F0FFFF' : 'Jasnolazurowy',
		'F0F8FF' : 'Jasnob??kitny',
		'E6E6FA' : 'Lawendowy',
		'FFF' : 'Bia?y'
	},

	scayt :
	{
		title			: 'Sprawd? pisowni? podczas pisania (SCAYT)',
		opera_title		: 'Funkcja nie jest obs?ugiwana przez przegl?dark? Opera',
		enable			: 'W??cz SCAYT',
		disable			: 'Wy??cz SCAYT',
		about			: 'Informacje o SCAYT',
		toggle			: 'Prze??cz SCAYT',
		options			: 'Opcje',
		langs			: 'J?zyki',
		moreSuggestions	: 'Wi?cej sugestii',
		ignore			: 'Ignoruj',
		ignoreAll		: 'Ignoruj wszystkie',
		addWord			: 'Dodaj s?owo',
		emptyDic		: 'Nazwa s?ownika nie mo?e by? pusta.',

		optionsTab		: 'Opcje',
		allCaps			: 'Ignoruj wyrazy pisane du?ymi literami',
		ignoreDomainNames : 'Ignoruj nazwy domen',
		mixedCase		: 'Ignoruj wyrazy pisane du?ymi i ma?ymi literami',
		mixedWithDigits	: 'Ignoruj wyrazy zawieraj?ce cyfry',

		languagesTab	: 'J?zyki',

		dictionariesTab	: 'S?owniki',
		dic_field_name	: 'Nazwa s?ownika',
		dic_create		: 'Utwórz',
		dic_restore		: 'Przywró?',
		dic_delete		: 'Usu?',
		dic_rename		: 'Zmie? nazw?',
		dic_info		: 'Pocz?tkowo s?ownik u?ytkownika przechowywany jest w cookie. Pliki cookie maj? jednak ograniczon? pojemno??. Je?li s?ownik u?ytkownika przekroczy wielko?? dopuszczaln? dla pliku cookie, mo?liwe jest przechowanie go na naszym serwerze. W celu zapisania s?ownika na serwerze niezb?dne jest nadanie mu nazwy. Je?li s?ownik zosta? ju? zapisany na serwerze, wystarczy poda? jego nazw? i nacisn?? przycisk Przywró?.',

		aboutTab		: 'Informacje o SCAYT'
	},

	about :
	{
		title		: 'Informacje o programie CKEditor',
		dlgTitle	: 'Informacje o programie CKEditor',
		moreInfo	: 'Informacje na temat licencji mo?na znale?? na naszej stronie:',
		copy		: 'Copyright &copy; $1. Wszelkie prawa zastrze?one.'
	},

	maximize : 'Maksymalizuj',
	minimize : 'Minimalizuj',

	fakeobjects :
	{
		anchor		: 'Kotwica',
		flash		: 'Animacja Flash',
		iframe		: 'IFrame',
		hiddenfield	: 'Pole ukryte',
		unknown		: 'Nieznany obiekt'
	},

	resize : 'Przeci?gnij, aby zmieni? rozmiar',

	colordialog :
	{
		title		: 'Wybierz kolor',
		options	:	'Opcje koloru',
		highlight	: 'Zaznacz',
		selected	: 'Wybrany',
		clear		: 'Wyczy??'
	},

	toolbarCollapse	: 'Zwi? pasek narz?dzi',
	toolbarExpand	: 'Rozwi? pasek narz?dzi',

	bidi :
	{
		ltr : 'Kierunek tekstu od lewej strony do prawej',
		rtl : 'Kierunek tekstu od prawej strony do lewej'
	}
};
