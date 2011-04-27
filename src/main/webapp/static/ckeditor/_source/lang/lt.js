 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Lithuanian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['lt'] =
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
	source			: 'Šaltinis',
	newPage			: 'Naujas puslapis',
	save			: 'Išsaugoti',
	preview			: 'Perži?ra',
	cut				: 'Iškirpti',
	copy			: 'Kopijuoti',
	paste			: '?d?ti',
	print			: 'Spausdinti',
	underline		: 'Pabrauktas',
	bold			: 'Pusjuodis',
	italic			: 'Kursyvas',
	selectAll		: 'Pažym?ti visk?',
	removeFormat	: 'Panaikinti format?',
	strike			: 'Perbrauktas',
	subscript		: 'Apatinis indeksas',
	superscript		: 'Viršutinis indeksas',
	horizontalrule	: '?terpti horizontali? linij?',
	pagebreak		: '?terpti puslapi? skirtuk?',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Panaikinti nuorod?',
	undo			: 'Atšaukti',
	redo			: 'Atstatyti',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Naršyti po server?',
		url				: 'URL',
		protocol		: 'Protokolas',
		upload			: 'Si?sti',
		uploadSubmit	: 'Si?sti ? server?',
		image			: 'Vaizdas',
		flash			: 'Flash',
		form			: 'Forma',
		checkbox		: 'Žymimasis langelis',
		radio			: 'Žymimoji akut?',
		textField		: 'Teksto laukas',
		textarea		: 'Teksto sritis',
		hiddenField		: 'Nerodomas laukas',
		button			: 'Mygtukas',
		select			: 'Atrankos laukas',
		imageButton		: 'Vaizdinis mygtukas',
		notSet			: '<n?ra nustatyta>',
		id				: 'Id',
		name			: 'Vardas',
		langDir			: 'Teksto kryptis',
		langDirLtr		: 'Iš kair?s ? dešin? (LTR)',
		langDirRtl		: 'Iš dešin?s ? kair? (RTL)',
		langCode		: 'Kalbos kodas',
		longDescr		: 'Ilgas aprašymas URL',
		cssClass		: 'Stili? lentel?s klas?s',
		advisoryTitle	: 'Konsultacin? antrašt?',
		cssStyle		: 'Stilius',
		ok				: 'OK',
		cancel			: 'Nutraukti',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'Bendros savyb?s',
		advancedTab		: 'Papildomas',
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
		width			: 'Plotis',
		height			: 'Aukštis',
		align			: 'Lygiuoti',
		alignLeft		: 'Kair?',
		alignRight		: 'Dešin?',
		alignCenter		: 'Centr?',
		alignTop		: 'Virš?n?',
		alignMiddle		: 'Vidur?',
		alignBottom		: 'Apa?i?',
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
		toolbar		: '?terpti special? simbol?',
		title		: 'Pasirinkite special? simbol?',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '?terpti/taisyti nuorod?',
		other 		: '<kitas>',
		menu		: 'Taisyti nuorod?',
		title		: 'Nuoroda',
		info		: 'Nuorodos informacija',
		target		: 'Paskirties vieta',
		upload		: 'Si?sti',
		advanced	: 'Papildomas',
		type		: 'Nuorodos tipas',
		toUrl		: 'URL', // MISSING
		toAnchor	: 'Žym? šiame puslapyje',
		toEmail		: 'El.paštas',
		targetFrame		: '<kadras>',
		targetPopup		: '<išskleidžiamas langas>',
		targetFrameName	: 'Paskirties kadro vardas',
		targetPopupName	: 'Paskirties lango vardas',
		popupFeatures	: 'Išskleidžiamo lango savyb?s',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: 'B?senos juosta',
		popupLocationBar: 'Adreso juosta',
		popupToolbar	: 'Mygtuk? juosta',
		popupMenuBar	: 'Meniu juosta',
		popupFullScreen	: 'Visas ekranas (IE)',
		popupScrollBars	: 'Slinkties juostos',
		popupDependent	: 'Priklausomas (Netscape)',
		popupLeft		: 'Kair? pozicija',
		popupTop		: 'Viršutin? pozicija',
		id				: 'Id', // MISSING
		langDir			: 'Teksto kryptis',
		langDirLTR		: 'Iš kair?s ? dešin? (LTR)',
		langDirRTL		: 'Iš dešin?s ? kair? (RTL)',
		acccessKey		: 'Prieigos raktas',
		name			: 'Vardas',
		langCode			: 'Teksto kryptis',
		tabIndex			: 'Tabuliavimo indeksas',
		advisoryTitle		: 'Konsultacin? antrašt?',
		advisoryContentType	: 'Konsultacinio turinio tipas',
		cssClasses		: 'Stili? lentel?s klas?s',
		charset			: 'Susiet? ištekli? simboli? lentel?',
		styles			: 'Stilius',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Pasirinkite žym?',
		anchorName		: 'Pagal žym?s vard?',
		anchorId			: 'Pagal žym?s Id',
		emailAddress		: 'El.pašto adresas',
		emailSubject		: 'Žinut?s tema',
		emailBody		: 'Žinut?s turinys',
		noAnchors		: '(Šiame dokumente žymi? n?ra)',
		noUrl			: 'Prašome ?vesti nuorodos URL',
		noEmail			: 'Prašome ?vesti el.pašto adres?'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '?terpti/modifikuoti žym?',
		menu		: 'Žym?s savyb?s',
		title		: 'Žym?s savyb?s',
		name		: 'Žym?s vardas',
		errorName	: 'Prašome ?vesti žym?s vard?'
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
		title				: 'Surasti ir pakeisti',
		find				: 'Rasti',
		replace				: 'Pakeisti',
		findWhat			: 'Surasti tekst?:',
		replaceWith			: 'Pakeisti tekstu:',
		notFoundMsg			: 'Nurodytas tekstas nerastas.',
		matchCase			: 'Skirti didži?sias ir maž?sias raides',
		matchWord			: 'Atitikti piln? žod?',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: 'Pakeisti visk?',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Lentel?',
		title		: 'Lentel?s savyb?s',
		menu		: 'Lentel?s savyb?s',
		deleteTable	: 'Šalinti lentel?',
		rows		: 'Eilut?s',
		columns		: 'Stulpeliai',
		border		: 'R?melio dydis',
		widthPx		: 'taškais',
		widthPc		: 'procentais',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: 'Tarpas tarp langeli?',
		cellPad		: 'Trapas nuo langelio r?mo iki teksto',
		caption		: 'Antrašt?',
		summary		: 'Santrauka',
		headers		: 'Antrašt?s',
		headersNone		: 'N?ra',
		headersColumn	: 'Pirmas stulpelis',
		headersRow		: 'Pirma eilut?',
		headersBoth		: 'Abu',
		invalidRows		: 'Number of rows must be a number greater than 0.', // MISSING
		invalidCols		: 'Number of columns must be a number greater than 0.', // MISSING
		invalidBorder	: 'Border size must be a number.', // MISSING
		invalidWidth	: 'Table width must be a number.', // MISSING
		invalidHeight	: 'Table height must be a number.', // MISSING
		invalidCellSpacing	: 'Cell spacing must be a number.', // MISSING
		invalidCellPadding	: 'Cell padding must be a number.', // MISSING

		cell :
		{
			menu			: 'Langelis',
			insertBefore	: '?terpti langel? prieš',
			insertAfter		: '?terpti langel? po',
			deleteCell		: 'Šalinti langelius',
			merge			: 'Sujungti langelius',
			mergeRight		: 'Sujungti su dešine',
			mergeDown		: 'Sujungti su apa?ia',
			splitHorizontal	: 'Skaidyti langel? horizontaliai',
			splitVertical	: 'Skaidyti langel? vertikaliai',
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
			menu			: 'Eilut?',
			insertBefore	: '?terpti eilut? prieš',
			insertAfter		: '?terpti eilut? po',
			deleteRow		: 'Šalinti eilutes'
		},

		column :
		{
			menu			: 'Stulpelis',
			insertBefore	: '?terpti stulpel? prieš',
			insertAfter		: '?terpti stulpel? po',
			deleteColumn	: 'Šalinti stulpelius'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Mygtuko savyb?s',
		text		: 'Tekstas (Reikšm?)',
		type		: 'Tipas',
		typeBtn		: 'Mygtukas',
		typeSbm		: 'Si?sti',
		typeRst		: 'Išvalyti'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Žymimojo langelio savyb?s',
		radioTitle	: 'Žymimosios akut?s savyb?s',
		value		: 'Reikšm?',
		selected	: 'Pažym?tas'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formos savyb?s',
		menu		: 'Formos savyb?s',
		action		: 'Veiksmas',
		method		: 'Metodas',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Atrankos lauko savyb?s',
		selectInfo	: 'Informacija',
		opAvail		: 'Galimos parinktys',
		value		: 'Reikšm?',
		size		: 'Dydis',
		lines		: 'eilu?i?',
		chkMulti	: 'Leisti daugeriop? atrank?',
		opText		: 'Tekstas',
		opValue		: 'Reikšm?',
		btnAdd		: '?traukti',
		btnModify	: 'Modifikuoti',
		btnUp		: 'Aukštyn',
		btnDown		: 'Žemyn',
		btnSetValue : 'Laikyti pažym?ta reikšme',
		btnDelete	: 'Trinti'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Teksto srities savyb?s',
		cols		: 'Ilgis',
		rows		: 'Plotis'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Teksto lauko savyb?s',
		name		: 'Vardas',
		value		: 'Reikšm?',
		charWidth	: 'Ilgis simboliais',
		maxChars	: 'Maksimalus simboli? skai?ius',
		type		: 'Tipas',
		typeText	: 'Tekstas',
		typePass	: 'Slaptažodis'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Nerodomo lauko savyb?s',
		name	: 'Vardas',
		value	: 'Reikšm?'
	},

	// Image Dialog.
	image :
	{
		title		: 'Vaizdo savyb?s',
		titleButton	: 'Vaizdinio mygtuko savyb?s',
		menu		: 'Vaizdo savyb?s',
		infoTab		: 'Vaizdo informacija',
		btnUpload	: 'Si?sti ? server?',
		upload		: 'Nusi?sti',
		alt			: 'Alternatyvus Tekstas',
		lockRatio	: 'Išlaikyti proporcij?',
		unlockRatio	: 'Unlock Ratio', // MISSING
		resetSize	: 'Atstatyti dyd?',
		border		: 'R?melis',
		hSpace		: 'Hor.Erdv?',
		vSpace		: 'Vert.Erdv?',
		alertUrl	: 'Prašome ?vesti vaizdo URL',
		linkTab		: 'Nuoroda',
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
		properties		: 'Flash savyb?s',
		propertiesTab	: 'Properties', // MISSING
		title			: 'Flash savyb?s',
		chkPlay			: 'Automatinis paleidimas',
		chkLoop			: 'Ciklas',
		chkMenu			: 'Leisti Flash meniu',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Mastelis',
		scaleAll		: 'Rodyti vis?',
		scaleNoBorder	: 'Be r?melio',
		scaleFit		: 'Tikslus atitikimas',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Absoliu?i? apa?i?',
		alignAbsMiddle	: 'Absoliut? vidur?',
		alignBaseline	: 'Apatin? linij?',
		alignTextTop	: 'Teksto virš?n?',
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
		bgcolor			: 'Fono spalva',
		hSpace			: 'Hor.Erdv?',
		vSpace			: 'Vert.Erdv?',
		validateSrc		: 'Prašome ?vesti nuorodos URL',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Rašybos tikrinimas',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: 'Žodyne nerastas',
		changeTo		: 'Pakeisti ?',
		btnIgnore		: 'Ignoruoti',
		btnIgnoreAll	: 'Ignoruoti visus',
		btnReplace		: 'Pakeisti',
		btnReplaceAll	: 'Pakeisti visus',
		btnUndo			: 'Atšaukti',
		noSuggestions	: '- N?ra pasi?lym? -',
		progress		: 'Vyksta rašybos tikrinimas...',
		noMispell		: 'Rašybos tikrinimas baigtas: Nerasta rašybos klaid?',
		noChanges		: 'Rašybos tikrinimas baigtas: N?ra pakeist? žodži?',
		oneChange		: 'Rašybos tikrinimas baigtas: Vienas žodis pakeistas',
		manyChanges		: 'Rašybos tikrinimas baigtas: Pakeista %1 žodži?',
		ieSpellDownload	: 'Rašybos tikrinimas neinstaliuotas. Ar J?s norite j? dabar atsisi?sti?'
	},

	smiley :
	{
		toolbar	: 'Veideliai',
		title	: '?terpti veidel?',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: 'Numeruotas s?rašas',
	bulletedlist	: 'Suženklintas s?rašas',
	indent			: 'Padidinti ?trauk?',
	outdent			: 'Sumažinti ?trauk?',

	justify :
	{
		left	: 'Lygiuoti kair?',
		center	: 'Centruoti',
		right	: 'Lygiuoti dešin?',
		block	: 'Lygiuoti abi puses'
	},

	blockquote : 'Citata',

	clipboard :
	{
		title		: '?d?ti',
		cutError	: 'J?s? naršykl?s saugumo nustatymai neleidžia redaktoriui automatiškai ?vykdyti iškirpimo operacij?. Tam prašome naudoti klaviat?r? (Ctrl/Cmd+X).',
		copyError	: 'J?s? naršykl?s saugumo nustatymai neleidžia redaktoriui automatiškai ?vykdyti kopijavimo operacij?. Tam prašome naudoti klaviat?r? (Ctrl/Cmd+C).',
		pasteMsg	: 'Žemiau esan?iame ?vedimo lauke ?d?kite tekst?, naudodami klaviat?r? (<STRONG>Ctrl/Cmd+V</STRONG>) ir paspauskite mygtuk? <STRONG>OK</STRONG>.',
		securityMsg	: 'D?l j?s? naršykl?s saugumo nustatym?, redaktorius negali tiesiogiai pasiekti laikinosios atminties. Jums reikia nukopijuoti dar kart? ? š? lang?.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: '?d?ti iš Word',
		title			: '?d?ti iš Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '?d?ti kaip gryn? tekst?',
		title	: '?d?ti kaip gryn? tekst?'
	},

	templates :
	{
		button			: 'Šablonai',
		title			: 'Turinio šablonai',
		options : 'Template Options', // MISSING
		insertOption	: 'Pakeisti dabartin? turin? pasirinktu šablonu',
		selectPromptMsg	: 'Pasirinkite norim? šablon?<br>(<b>D?mesio!</b> esamas turinys bus prarastas):',
		emptyListMsg	: '(Šablon? s?rašas tuš?ias)'
	},

	showBlocks : 'Rodyti blokus',

	stylesCombo :
	{
		label		: 'Stilius',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Šrifto formatas',
		panelTitle	: 'Šrifto formatas',

		tag_p		: 'Normalus',
		tag_pre		: 'Formuotas',
		tag_address	: 'Kreipinio',
		tag_h1		: 'Antraštinis 1',
		tag_h2		: 'Antraštinis 2',
		tag_h3		: 'Antraštinis 3',
		tag_h4		: 'Antraštinis 4',
		tag_h5		: 'Antraštinis 5',
		tag_h6		: 'Antraštinis 6',
		tag_div		: 'Normal (DIV)' // MISSING
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
		label		: 'Šriftas',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Šriftas'
	},

	fontSize :
	{
		label		: 'Šrifto dydis',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'Šrifto dydis'
	},

	colorButton :
	{
		textColorTitle	: 'Teksto spalva',
		bgColorTitle	: 'Fono spalva',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Automatinis',
		more			: 'Daugiau spalv?...'
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
