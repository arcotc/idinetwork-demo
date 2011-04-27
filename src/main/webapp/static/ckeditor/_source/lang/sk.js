 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Slovak language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['sk'] =
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
	editorTitle : 'Rich text editor, %1, press ALT 0 for help.', // MISSING

	// ARIA descriptions.
	toolbar	: 'Toolbar', // MISSING
	editor	: 'Rich Text Editor', // MISSING

	// Toolbar buttons without dialogs.
	source			: 'Zdroj',
	newPage			: 'Nová stránka',
	save			: 'Uloži?',
	preview			: 'Náh?ad',
	cut				: 'Vystrihnú?',
	copy			: 'Kopírova?',
	paste			: 'Vloži?',
	print			: 'Tla?',
	underline		: 'Pod?iarknuté',
	bold			: 'Tu?né',
	italic			: 'Kurzíva',
	selectAll		: 'Vybra? všetko',
	removeFormat	: 'Odstráni? formátovanie',
	strike			: 'Pre?iarknuté',
	subscript		: 'Dolný index',
	superscript		: 'Horný index',
	horizontalrule	: 'Vloži? vodorovnú ?iaru',
	pagebreak		: 'Vloži? odde?ova? stránky',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Odstráni? odkaz',
	undo			: 'Spä?',
	redo			: 'Znovu',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Prechádza? server',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Odosla?',
		uploadSubmit	: 'Odosla? na server',
		image			: 'Obrázok',
		flash			: 'Flash',
		form			: 'Formulár',
		checkbox		: 'Zaškrtávacie polí?ko',
		radio			: 'Prepína?',
		textField		: 'Textové pole',
		textarea		: 'Textová oblas?',
		hiddenField		: 'Skryté pole',
		button			: 'Tla?idlo',
		select			: 'Rozba?ovací zoznam',
		imageButton		: 'Obrázkové tla?idlo',
		notSet			: '<nenastavené>',
		id				: 'Id',
		name			: 'Meno',
		langDir			: 'Orientácia jazyka',
		langDirLtr		: 'Z?ava doprava (LTR)',
		langDirRtl		: 'Sprava do?ava (RTL)',
		langCode		: 'Kód jazyka',
		longDescr		: 'Dlhý popis URL',
		cssClass		: 'Trieda štýlu',
		advisoryTitle	: 'Pomocný titulok',
		cssStyle		: 'Štýl',
		ok				: 'OK',
		cancel			: 'Zruši?',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'Hlavné',
		advancedTab		: 'Rozšírené',
		validateNumberFailed : 'This value is not a number.', // MISSING
		confirmNewPage	: 'Any unsaved changes to this content will be lost. Are you sure you want to load new page?', // MISSING
		confirmCancel	: 'Some of the options have been changed. Are you sure to close the dialog?', // MISSING
		options			: 'Options', // MISSING
		target			: 'Target', // MISSING
		targetNew		: 'New Window (_blank)', // MISSING
		targetTop		: 'Topmost Window (_top)', // MISSING
		targetSelf		: 'Same Window (_self)', // MISSING
		targetParent	: 'Parent Window (_parent)', // MISSING
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: 'Šírka',
		height			: 'Výška',
		align			: 'Zarovnanie',
		alignLeft		: 'V?avo',
		alignRight		: 'Vpravo',
		alignCenter		: 'Na stred',
		alignTop		: 'Nahor',
		alignMiddle		: 'Na stred',
		alignBottom		: 'Dole',
		invalidHeight	: 'Height must be a number.', // MISSING
		invalidWidth	: 'Width must be a number.', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Vloži? špeciálne znaky',
		title		: 'Výber špeciálneho znaku',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Vloži?/zmeni? odkaz',
		other 		: '<iný>',
		menu		: 'Zmeni? odkaz',
		title		: 'Odkaz',
		info		: 'Informácie o odkaze',
		target		: 'Cie?',
		upload		: 'Odosla?',
		advanced	: 'Rozšírené',
		type		: 'Typ odkazu',
		toUrl		: 'URL', // MISSING
		toAnchor	: 'Kotva v tejto stránke',
		toEmail		: 'E-Mail',
		targetFrame		: '<rámec>',
		targetPopup		: '<vyskakovacie okno>',
		targetFrameName	: 'Meno rámu cie?a',
		targetPopupName	: 'Názov vyskakovacieho okna',
		popupFeatures	: 'Vlastnosti vyskakovacieho okna',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: 'Stavový riadok',
		popupLocationBar: 'Panel umiestnenia',
		popupToolbar	: 'Panel nástrojov',
		popupMenuBar	: 'Panel ponuky',
		popupFullScreen	: 'Celá obrazovka (IE)',
		popupScrollBars	: 'Posuvníky',
		popupDependent	: 'Závislos? (Netscape)',
		popupLeft		: '?avý okraj',
		popupTop		: 'Horný okraj',
		id				: 'Id', // MISSING
		langDir			: 'Orientácia jazyka',
		langDirLTR		: 'Z?ava doprava (LTR)',
		langDirRTL		: 'Sprava do?ava (RTL)',
		acccessKey		: 'Prístupový k?ú?',
		name			: 'Meno',
		langCode			: 'Orientácia jazyka',
		tabIndex			: 'Poradie prvku',
		advisoryTitle		: 'Pomocný titulok',
		advisoryContentType	: 'Pomocný typ obsahu',
		cssClasses		: 'Trieda štýlu',
		charset			: 'Priradená znaková sada',
		styles			: 'Štýl',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Vybra? kotvu',
		anchorName		: 'Pod?a mena kotvy',
		anchorId			: 'Pod?a Id objektu',
		emailAddress		: 'E-Mailová adresa',
		emailSubject		: 'Predmet správy',
		emailBody		: 'Telo správy',
		noAnchors		: '(V stránke nie je definovaná žiadna kotva)',
		noUrl			: 'Zadajte prosím URL odkazu',
		noEmail			: 'Zadajte prosím e-mailovú adresu'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Vloži?/zmeni? kotvu',
		menu		: 'Vlastnosti kotvy',
		title		: 'Vlastnosti kotvy',
		name		: 'Meno kotvy',
		errorName	: 'Zadajte prosím meno kotvy'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Numbered List Properties', // MISSING
		bulletedTitle		: 'Bulleted List Properties', // MISSING
		type				: 'Type', // MISSING
		start				: 'Start', // MISSING
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: 'Circle', // MISSING
		disc				: 'Disc', // MISSING
		square				: 'Square', // MISSING
		none				: 'None', // MISSING
		notset				: '<not set>', // MISSING
		armenian			: 'Armenian numbering', // MISSING
		georgian			: 'Georgian numbering (an, ban, gan, etc.)', // MISSING
		lowerRoman			: 'Lower Roman (i, ii, iii, iv, v, etc.)', // MISSING
		upperRoman			: 'Upper Roman (I, II, III, IV, V, etc.)', // MISSING
		lowerAlpha			: 'Lower Alpha (a, b, c, d, e, etc.)', // MISSING
		upperAlpha			: 'Upper Alpha (A, B, C, D, E, etc.)', // MISSING
		lowerGreek			: 'Lower Greek (alpha, beta, gamma, etc.)', // MISSING
		decimal				: 'Decimal (1, 2, 3, etc.)', // MISSING
		decimalLeadingZero	: 'Decimal leading zero (01, 02, 03, etc.)' // MISSING
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Nájs? a nahradi?',
		find				: 'H?ada?',
		replace				: 'Nahradi?',
		findWhat			: '?o h?ada?:',
		replaceWith			: '?ím nahradi?:',
		notFoundMsg			: 'H?adaný text nebol nájdený.',
		matchCase			: 'Rozlišova? malé/ve?ké písmená',
		matchWord			: 'Len celé slová',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: 'Nahradi? všetko',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabu?ka',
		title		: 'Vlastnosti tabu?ky',
		menu		: 'Vlastnosti tabu?ky',
		deleteTable	: 'Vymaza? tabu?ku',
		rows		: 'Riadky',
		columns		: 'St?pce',
		border		: 'Ohrani?enie',
		widthPx		: 'pixelov',
		widthPc		: 'percent',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: 'Vzdialenos? buniek',
		cellPad		: 'Odsadenie obsahu',
		caption		: 'Popis',
		summary		: 'Preh?ad',
		headers		: 'Headers', // MISSING
		headersNone		: 'None', // MISSING
		headersColumn	: 'First column', // MISSING
		headersRow		: 'First Row', // MISSING
		headersBoth		: 'Both', // MISSING
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a number.', // MISSING

		cell :
		{
			menu			: 'Bunka',
			insertBefore	: 'Vloži? bunku pred',
			insertAfter		: 'Vloži? bunku za',
			deleteCell		: 'Vymaza? bunky',
			merge			: 'Zlú?i? bunky',
			mergeRight		: 'Zlú?i? doprava',
			mergeDown		: 'Zlú?i? dole',
			splitHorizontal	: 'Rozdeli? bunky horizontálne',
			splitVertical	: 'Rozdeli? bunky vertikálne',
			title			: 'Cell Properties', // MISSING
			cellType		: 'Cell Type', // MISSING
			rowSpan			: 'Rows Span', // MISSING
			colSpan			: 'Columns Span', // MISSING
			wordWrap		: 'Word Wrap', // MISSING
			hAlign			: 'Horizontal Alignment', // MISSING
			vAlign			: 'Vertical Alignment', // MISSING
			alignBaseline	: 'Baseline', // MISSING
			bgColor			: 'Background Color', // MISSING
			borderColor		: 'Border Color', // MISSING
			data			: 'Data', // MISSING
			header			: 'Header', // MISSING
			yes				: 'Yes', // MISSING
			no				: 'No', // MISSING
			invalidWidth	: 'Cell width must be a number.', // MISSING
			invalidHeight	: 'Cell height must be a number.', // MISSING
			invalidRowSpan	: 'Rows span must be a whole number.', // MISSING
			invalidColSpan	: 'Columns span must be a whole number.', // MISSING
			chooseColor		: 'Choose' // MISSING
		},

		row :
		{
			menu			: 'Riadok',
			insertBefore	: 'Vloži? riadok za',
			insertAfter		: 'Vloži? riadok pred',
			deleteRow		: 'Vymaza? riadok'
		},

		column :
		{
			menu			: 'St?pec',
			insertBefore	: 'Vloži? st?pec za',
			insertAfter		: 'Vloži? st?pec pred',
			deleteColumn	: 'Zmaza? st?pec'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Vlastnosti tla?idla',
		text		: 'Text',
		type		: 'Typ',
		typeBtn		: 'Tla?idlo',
		typeSbm		: 'Odosla?',
		typeRst		: 'Vymaza?'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Vlastnosti zaškrtávacieho polí?ka',
		radioTitle	: 'Vlastnosti prepína?a',
		value		: 'Hodnota',
		selected	: 'Vybrané'
	},

	// Form Dialog.
	form :
	{
		title		: 'Vlastnosti formulára',
		menu		: 'Vlastnosti formulára',
		action		: 'Akcie',
		method		: 'Metóda',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Vlastnosti rozba?ovacieho zoznamu',
		selectInfo	: 'Info',
		opAvail		: 'Dostupné možnosti',
		value		: 'Hodnota',
		size		: 'Ve?kos?',
		lines		: 'riadkov',
		chkMulti	: 'Povoli? viacnásobný výber',
		opText		: 'Text',
		opValue		: 'Hodnota',
		btnAdd		: 'Prida?',
		btnModify	: 'Zmeni?',
		btnUp		: 'Hore',
		btnDown		: 'Dole',
		btnSetValue : 'Nastavi? ako vybranú hodnotu',
		btnDelete	: 'Zmaza?'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Vlastnosti textovej oblasti',
		cols		: 'St?pce',
		rows		: 'Riadky'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Vlastnosti textového po?a',
		name		: 'Názov',
		value		: 'Hodnota',
		charWidth	: 'Šírka pola (znakov)',
		maxChars	: 'Maximálny po?et znakov',
		type		: 'Typ',
		typeText	: 'Text',
		typePass	: 'Heslo'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Vlastnosti skrytého po?a',
		name	: 'Názov',
		value	: 'Hodnota'
	},

	// Image Dialog.
	image :
	{
		title		: 'Vlastnosti obrázku',
		titleButton	: 'Vlastnosti obrázkového tla?idla',
		menu		: 'Vlastnosti obrázku',
		infoTab		: 'Informácie o obrázku',
		btnUpload	: 'Odosla? na server',
		upload		: 'Odosla?',
		alt			: 'Alternatívny text',
		lockRatio	: 'Zámok',
		unlockRatio	: 'Unlock Ratio', // MISSING
		resetSize	: 'Pôvodná ve?kos?',
		border		: 'Okraje',
		hSpace		: 'H-medzera',
		vSpace		: 'V-medzera',
		alertUrl	: 'Zadajte prosím URL obrázku',
		linkTab		: 'Odkaz',
		button2Img	: 'Do you want to transform the selected image button on a simple image?', // MISSING
		img2Button	: 'Do you want to transform the selected image on a image button?', // MISSING
		urlMissing	: 'Image source URL is missing.', // MISSING
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Vlastnosti Flashu',
		propertiesTab	: 'Properties', // MISSING
		title			: 'Vlastnosti Flashu',
		chkPlay			: 'Automatické prehrávanie',
		chkLoop			: 'Opakovanie',
		chkMenu			: 'Povoli? Flash Menu',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Mierka',
		scaleAll		: 'Zobrazi? mierku',
		scaleNoBorder	: 'Bez okrajov',
		scaleFit		: 'Roztiahnu? na celé',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Úplne dole',
		alignAbsMiddle	: 'Do stredu',
		alignBaseline	: 'Na základ?u',
		alignTextTop	: 'Na horný okraj textu',
		quality			: 'Quality', // MISSING
		qualityBest		: 'Best', // MISSING
		qualityHigh		: 'High', // MISSING
		qualityAutoHigh	: 'Auto High', // MISSING
		qualityMedium	: 'Medium', // MISSING
		qualityAutoLow	: 'Auto Low', // MISSING
		qualityLow		: 'Low', // MISSING
		windowModeWindow: 'Window', // MISSING
		windowModeOpaque: 'Opaque', // MISSING
		windowModeTransparent : 'Transparent', // MISSING
		windowMode		: 'Window mode', // MISSING
		flashvars		: 'Variables for Flash', // MISSING
		bgcolor			: 'Farba pozadia',
		hSpace			: 'H-medzera',
		vSpace			: 'V-medzera',
		validateSrc		: 'Zadajte prosím URL odkazu',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Kontrola pravopisu',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: 'Nie je v slovníku',
		changeTo		: 'Zmeni? na',
		btnIgnore		: 'Ignorova?',
		btnIgnoreAll	: 'Ignorova? všetko',
		btnReplace		: 'Prepísat',
		btnReplaceAll	: 'Prepísat všetko',
		btnUndo			: 'Spä?',
		noSuggestions	: '- Žiadny návrh -',
		progress		: 'Prebieha kontrola pravopisu...',
		noMispell		: 'Kontrola pravopisu dokon?ená: bez chýb',
		noChanges		: 'Kontrola pravopisu dokon?ená: žiadne slová nezmenené',
		oneChange		: 'Kontrola pravopisu dokon?ená: zmenené jedno slovo',
		manyChanges		: 'Kontrola pravopisu dokon?ená: zmenených %1 slov',
		ieSpellDownload	: 'Kontrola pravopisu nie je naištalovaná. Chcete ju hne? stiahnu??'
	},

	smiley :
	{
		toolbar	: 'Smajlíky',
		title	: 'Vkladanie smajlíkov',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: '?íslovanie',
	bulletedlist	: 'Odrážky',
	indent			: 'Zvä?ši? odsadenie',
	outdent			: 'Zmenši? odsadenie',

	justify :
	{
		left	: 'Zarovna? v?avo',
		center	: 'Zarovna? na stred',
		right	: 'Zarovna? vpravo',
		block	: 'Zarovna? do bloku'
	},

	blockquote : 'Citácia',

	clipboard :
	{
		title		: 'Vloži?',
		cutError	: 'Bezpe?nostné nastavenia Vášho prehliada?a nedovo?ujú editoru spusti? funkciu pre vystrihnutie zvoleného textu do schránky. Prosím vystrihnite zvolený text do schránky pomocou klávesnice (Ctrl/Cmd+X).',
		copyError	: 'Bezpe?nostné nastavenia Vášho prehliada?a nedovo?ujú editoru spusti? funkciu pre kopírovanie zvoleného textu do schránky. Prosím skopírujte zvolený text do schránky pomocou klávesnice (Ctrl/Cmd+C).',
		pasteMsg	: 'Prosím vložte nasledovný rám?ek použitím klávesnice (<STRONG>Ctrl/Cmd+V</STRONG>) a stla?te <STRONG>OK</STRONG>.',
		securityMsg	: 'Bezpe?nostné nastavenia Vášho prehliada?a nedovo?ujú editoru pristupova? priamo k datám v schránke. Musíte ich vloži? znovu do tohto okna.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'Vloži? z Wordu',
		title			: 'Vloži? z Wordu',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'Vloži? ako ?istý text',
		title	: 'Vloži? ako ?istý text'
	},

	templates :
	{
		button			: 'Šablóny',
		title			: 'Šablóny obsahu',
		options : 'Template Options', // MISSING
		insertOption	: 'Nahradi? aktuálny obsah',
		selectPromptMsg	: 'Prosím vyberte šablóny na otvorenie v editore<br>(súšasný obsah bude stratený):',
		emptyListMsg	: '(žiadne šablóny nenájdené)'
	},

	showBlocks : 'Ukáza? bloky',

	stylesCombo :
	{
		label		: 'Štýl',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Formát',
		panelTitle	: 'Formát',

		tag_p		: 'Normálny',
		tag_pre		: 'Formátovaný',
		tag_address	: 'Adresa',
		tag_h1		: 'Nadpis 1',
		tag_h2		: 'Nadpis 2',
		tag_h3		: 'Nadpis 3',
		tag_h4		: 'Nadpis 4',
		tag_h5		: 'Nadpis 5',
		tag_h6		: 'Nadpis 6',
		tag_div		: 'Odsek (DIV)'
	},

	div :
	{
		title				: 'Create Div Container', // MISSING
		toolbar				: 'Create Div Container', // MISSING
		cssClassInputLabel	: 'Stylesheet Classes', // MISSING
		styleSelectLabel	: 'Style', // MISSING
		IdInputLabel		: 'Id', // MISSING
		languageCodeInputLabel	: ' Language Code', // MISSING
		inlineStyleInputLabel	: 'Inline Style', // MISSING
		advisoryTitleInputLabel	: 'Advisory Title', // MISSING
		langDirLabel		: 'Language Direction', // MISSING
		langDirLTRLabel		: 'Left to Right (LTR)', // MISSING
		langDirRTLLabel		: 'Right to Left (RTL)', // MISSING
		edit				: 'Edit Div', // MISSING
		remove				: 'Remove Div' // MISSING
  	},

	iframe :
	{
		title		: 'IFrame Properties', // MISSING
		toolbar		: 'IFrame', // MISSING
		noUrl		: 'Please type the iframe URL', // MISSING
		scrolling	: 'Enable scrollbars', // MISSING
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: 'Písmo',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Písmo'
	},

	fontSize :
	{
		label		: 'Ve?kos?',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'Ve?kos?'
	},

	colorButton :
	{
		textColorTitle	: 'Farba textu',
		bgColorTitle	: 'Farba pozadia',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Automaticky',
		more			: 'Viac farieb...'
	},

	colors :
	{
		'000' : 'Black', // MISSING
		'800000' : 'Maroon', // MISSING
		'8B4513' : 'Saddle Brown', // MISSING
		'2F4F4F' : 'Dark Slate Gray', // MISSING
		'008080' : 'Teal', // MISSING
		'000080' : 'Navy', // MISSING
		'4B0082' : 'Indigo', // MISSING
		'696969' : 'Dark Gray', // MISSING
		'B22222' : 'Fire Brick', // MISSING
		'A52A2A' : 'Brown', // MISSING
		'DAA520' : 'Golden Rod', // MISSING
		'006400' : 'Dark Green', // MISSING
		'40E0D0' : 'Turquoise', // MISSING
		'0000CD' : 'Medium Blue', // MISSING
		'800080' : 'Purple', // MISSING
		'808080' : 'Gray', // MISSING
		'F00' : 'Red', // MISSING
		'FF8C00' : 'Dark Orange', // MISSING
		'FFD700' : 'Gold', // MISSING
		'008000' : 'Green', // MISSING
		'0FF' : 'Cyan', // MISSING
		'00F' : 'Blue', // MISSING
		'EE82EE' : 'Violet', // MISSING
		'A9A9A9' : 'Dim Gray', // MISSING
		'FFA07A' : 'Light Salmon', // MISSING
		'FFA500' : 'Orange', // MISSING
		'FFFF00' : 'Yellow', // MISSING
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : 'Pale Turquoise', // MISSING
		'ADD8E6' : 'Light Blue', // MISSING
		'DDA0DD' : 'Plum', // MISSING
		'D3D3D3' : 'Light Grey', // MISSING
		'FFF0F5' : 'Lavender Blush', // MISSING
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : 'Light Yellow', // MISSING
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : 'Azure', // MISSING
		'F0F8FF' : 'Alice Blue', // MISSING
		'E6E6FA' : 'Lavender', // MISSING
		'FFF' : 'White' // MISSING
	},

	scayt :
	{
		title			: 'Spell Check As You Type', // MISSING
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: 'Enable SCAYT', // MISSING
		disable			: 'Disable SCAYT', // MISSING
		about			: 'About SCAYT', // MISSING
		toggle			: 'Toggle SCAYT', // MISSING
		options			: 'Options', // MISSING
		langs			: 'Languages', // MISSING
		moreSuggestions	: 'More suggestions', // MISSING
		ignore			: 'Ignore', // MISSING
		ignoreAll		: 'Ignore All', // MISSING
		addWord			: 'Add Word', // MISSING
		emptyDic		: 'Dictionary name should not be empty.', // MISSING

		optionsTab		: 'Options', // MISSING
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: 'Languages', // MISSING

		dictionariesTab	: 'Dictionaries', // MISSING
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: 'Create', // MISSING
		dic_restore		: 'Restore', // MISSING
		dic_delete		: 'Delete', // MISSING
		dic_rename		: 'Rename', // MISSING
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: 'About' // MISSING
	},

	about :
	{
		title		: 'About CKEditor', // MISSING
		dlgTitle	: 'About CKEditor', // MISSING
		moreInfo	: 'For licensing information please visit our web site:', // MISSING
		copy		: 'Copyright &copy; $1. All rights reserved.' // MISSING
	},

	maximize : 'Maximize', // MISSING
	minimize : 'Minimize', // MISSING

	fakeobjects :
	{
		anchor		: 'Anchor', // MISSING
		flash		: 'Flash Animation', // MISSING
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Unknown Object' // MISSING
	},

	resize : 'Drag to resize', // MISSING

	colordialog :
	{
		title		: 'Select color', // MISSING
		options	:	'Color Options', // MISSING
		highlight	: 'Highlight', // MISSING
		selected	: 'Selected Color', // MISSING
		clear		: 'Clear' // MISSING
	},

	toolbarCollapse	: 'Collapse Toolbar', // MISSING
	toolbarExpand	: 'Expand Toolbar', // MISSING

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	}
};
