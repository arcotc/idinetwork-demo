 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Latvian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['lv'] =
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
	source			: 'HTML kods',
	newPage			: 'Jauna lapa',
	save			: 'Saglab?t',
	preview			: 'P?rskat?t',
	cut				: 'Izgriezt',
	copy			: 'Kop?t',
	paste			: 'Ievietot',
	print			: 'Druk?t',
	underline		: 'Apakšsv?tra',
	bold			: 'Treknu šriftu',
	italic			: 'Sl?prakst?',
	selectAll		: 'Iez?m?t visu',
	removeFormat	: 'No?emt stilus',
	strike			: 'P?rsv?trots',
	subscript		: 'Zemrakst?',
	superscript		: 'Augšrakst?',
	horizontalrule	: 'Ievietot horizont?lu Atdal?t?jsv?tru',
	pagebreak		: 'Ievietot lapas p?rtraukumu',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'No?emt hipersaiti',
	undo			: 'Atcelt',
	redo			: 'Atk?rtot',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Skat?t servera saturu',
		url				: 'URL',
		protocol		: 'Protokols',
		upload			: 'Augšupiel?d?t',
		uploadSubmit	: 'Nos?t?t serverim',
		image			: 'Att?ls',
		flash			: 'Flash',
		form			: 'Forma',
		checkbox		: 'Atz?m?šanas kast?te',
		radio			: 'Izv?les poga',
		textField		: 'Teksta rinda',
		textarea		: 'Teksta laukums',
		hiddenField		: 'Pasl?pta teksta rinda',
		button			: 'Poga',
		select			: 'Iez?m?šanas lauks',
		imageButton		: 'Att?lpoga',
		notSet			: '<nav iestat?ts>',
		id				: 'Id',
		name			: 'Nosaukums',
		langDir			: 'Valodas las?šanas virziens',
		langDirLtr		: 'No kreis?s uz labo (LTR)',
		langDirRtl		: 'No lab?s uz kreiso (RTL)',
		langCode		: 'Valodas kods',
		longDescr		: 'Gara apraksta Hipersaite',
		cssClass		: 'Stilu saraksta klases',
		advisoryTitle	: 'Konsultat?vs virsraksts',
		cssStyle		: 'Stils',
		ok				: 'Dar?ts!',
		cancel			: 'Atcelt',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: 'Izv?rstais',
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
		width			: 'Platums',
		height			: 'Augstums',
		align			: 'Nol?dzin?t',
		alignLeft		: 'Pa kreisi',
		alignRight		: 'Pa labi',
		alignCenter		: 'Centr?ti',
		alignTop		: 'Augš?',
		alignMiddle		: 'Vertik?li centr?ts',
		alignBottom		: 'Apakš?',
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
		toolbar		: 'Ievietot speci?lo simbolu',
		title		: 'Ievietot ?pašu simbolu',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Ievietot/Labot hipersaiti',
		other 		: '<cits>',
		menu		: 'Labot hipersaiti',
		title		: 'Hipersaite',
		info		: 'Hipersaites inform?cija',
		target		: 'M?r?is',
		upload		: 'Augšupiel?d?t',
		advanced	: 'Izv?rstais',
		type		: 'Hipersaites tips',
		toUrl		: 'URL', // MISSING
		toAnchor	: 'Iez?me šaj? lap?',
		toEmail		: 'E-pasts',
		targetFrame		: '<ietvars>',
		targetPopup		: '<uznirstoš? log?>',
		targetFrameName	: 'M?r?a ietvara nosaukums',
		targetPopupName	: 'Uznirstoš? loga nosaukums',
		popupFeatures	: 'Uznirstoš? loga nosaukums ?paš?bas',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: 'Statusa josla',
		popupLocationBar: 'Atrašan?s vietas josla',
		popupToolbar	: 'R?ku josla',
		popupMenuBar	: 'Izv?lnes josla',
		popupFullScreen	: 'Piln? ekr?n? (IE)',
		popupScrollBars	: 'Ritjoslas',
		popupDependent	: 'Atkar?gs (Netscape)',
		popupLeft		: 'Kreis? koordin?te',
		popupTop		: 'Augš?j? koordin?te',
		id				: 'Id', // MISSING
		langDir			: 'Valodas las?šanas virziens',
		langDirLTR		: 'No kreis?s uz labo (LTR)',
		langDirRTL		: 'No lab?s uz kreiso (RTL)',
		acccessKey		: 'Pieejas kods',
		name			: 'Nosaukums',
		langCode			: 'Valodas las?šanas virziens',
		tabIndex			: 'Ci??u indekss',
		advisoryTitle		: 'Konsultat?vs virsraksts',
		advisoryContentType	: 'Konsultat?vs satura tips',
		cssClasses		: 'Stilu saraksta klases',
		charset			: 'Pievienot? resursa kodu tabula',
		styles			: 'Stils',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Izv?l?ties iez?mi',
		anchorName		: 'P?c iez?mes nosaukuma',
		anchorId			: 'P?c elementa ID',
		emailAddress		: 'E-pasta adrese',
		emailSubject		: 'Zi?as t?ma',
		emailBody		: 'Zi?as saturs',
		noAnchors		: '(Šaj? dokument? nav iez?mju)',
		noUrl			: 'L?dzu nor?di hipersaiti',
		noEmail			: 'L?dzu nor?di e-pasta adresi'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ievietot/Labot iez?mi',
		menu		: 'Iez?mes ?paš?bas',
		title		: 'Iez?mes ?paš?bas',
		name		: 'Iez?mes nosaukums',
		errorName	: 'L?dzu nor?diet iez?mes nosaukumu'
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
		title				: 'Find and Replace', // MISSING
		find				: 'Mekl?t',
		replace				: 'Nomain?t',
		findWhat			: 'Mekl?t:',
		replaceWith			: 'Nomain?t uz:',
		notFoundMsg			: 'Nor?d?t? fr?ze netika atrasta.',
		matchCase			: 'Re?istrj?t?gs',
		matchWord			: 'J?sakr?t piln?b?',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: 'Aizvietot visu',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabula',
		title		: 'Tabulas ?paš?bas',
		menu		: 'Tabulas ?paš?bas',
		deleteTable	: 'Dz?st tabulu',
		rows		: 'Rindas',
		columns		: 'Kolonnas',
		border		: 'R?mja izm?rs',
		widthPx		: 'pikse?os',
		widthPc		: 'procentu?li',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: 'R?ti?u atstatums',
		cellPad		: 'R?ti?u nob?de',
		caption		: 'Le?enda',
		summary		: 'Anot?cija',
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
			menu			: 'Š?na',
			insertBefore	: 'Insert Cell Before', // MISSING
			insertAfter		: 'Insert Cell After', // MISSING
			deleteCell		: 'Dz?st r?ti?as',
			merge			: 'Apvienot r?ti?as',
			mergeRight		: 'Merge Right', // MISSING
			mergeDown		: 'Merge Down', // MISSING
			splitHorizontal	: 'Split Cell Horizontally', // MISSING
			splitVertical	: 'Split Cell Vertically', // MISSING
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
			menu			: 'Rinda',
			insertBefore	: 'Insert Row Before', // MISSING
			insertAfter		: 'Insert Row After', // MISSING
			deleteRow		: 'Dz?st rindas'
		},

		column :
		{
			menu			: 'Kolonna',
			insertBefore	: 'Insert Column Before', // MISSING
			insertAfter		: 'Insert Column After', // MISSING
			deleteColumn	: 'Dz?st kolonnas'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Pogas ?paš?bas',
		text		: 'Teksts (v?rt?ba)',
		type		: 'Tips',
		typeBtn		: 'Button', // MISSING
		typeSbm		: 'Submit', // MISSING
		typeRst		: 'Reset' // MISSING
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Atz?m?šanas kast?tes ?paš?bas',
		radioTitle	: 'Izv?les poga ?paš?bas',
		value		: 'V?rt?ba',
		selected	: 'Iez?m?ts'
	},

	// Form Dialog.
	form :
	{
		title		: 'Formas ?paš?bas',
		menu		: 'Formas ?paš?bas',
		action		: 'Darb?ba',
		method		: 'Metode',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Iez?m?šanas lauka ?paš?bas',
		selectInfo	: 'Inform?cija',
		opAvail		: 'Pieejam?s iesp?jas',
		value		: 'V?rt?ba',
		size		: 'Izm?rs',
		lines		: 'rindas',
		chkMulti	: 'At?aut vair?kus iez?m?jumus',
		opText		: 'Teksts',
		opValue		: 'V?rt?ba',
		btnAdd		: 'Pievienot',
		btnModify	: 'Veikt izmai?as',
		btnUp		: 'Augšup',
		btnDown		: 'Lejup',
		btnSetValue : 'Noteikt k? iez?m?to v?rt?bu',
		btnDelete	: 'Dz?st'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Teksta laukuma ?paš?bas',
		cols		: 'Kolonnas',
		rows		: 'Rindas'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Teksta rindas  ?paš?bas',
		name		: 'Nosaukums',
		value		: 'V?rt?ba',
		charWidth	: 'Simbolu platums',
		maxChars	: 'Simbolu maksim?lais daudzums',
		type		: 'Tips',
		typeText	: 'Teksts',
		typePass	: 'Parole'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Pasl?pt?s teksta rindas ?paš?bas',
		name	: 'Nosaukums',
		value	: 'V?rt?ba'
	},

	// Image Dialog.
	image :
	{
		title		: 'Att?la ?paš?bas',
		titleButton	: 'Att?lpogas ?paš?bas',
		menu		: 'Att?la ?paš?bas',
		infoTab		: 'Inform?cija par att?lu',
		btnUpload	: 'Nos?t?t serverim',
		upload		: 'Augšupiel?d?t',
		alt			: 'Alternat?vais teksts',
		lockRatio	: 'Nemain?ga Augstuma/Platuma attiec?ba',
		unlockRatio	: 'Unlock Ratio', // MISSING
		resetSize	: 'Atjaunot s?kotn?jo izm?ru',
		border		: 'R?mis',
		hSpace		: 'Horizont?l? telpa',
		vSpace		: 'Vertik?l? telpa',
		alertUrl	: 'L?dzu nor?d?t att?la hipersaiti',
		linkTab		: 'Hipersaite',
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
		properties		: 'Flash ?paš?bas',
		propertiesTab	: 'Properties', // MISSING
		title			: 'Flash ?paš?bas',
		chkPlay			: 'Autom?tiska atska?ošana',
		chkLoop			: 'Nep?rtraukti',
		chkMenu			: 'At?aut Flash izv?lni',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Main?t izm?ru',
		scaleAll		: 'R?d?t visu',
		scaleNoBorder	: 'Bez r?mja',
		scaleFit		: 'Prec?zs izm?rs',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Absol?ti apakš?',
		alignAbsMiddle	: 'Absol?ti vertik?li centr?ts',
		alignBaseline	: 'Pamatrind?',
		alignTextTop	: 'Teksta augš?',
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
		bgcolor			: 'Fona kr?sa',
		hSpace			: 'Horizont?l? telpa',
		vSpace			: 'Vertik?l? telpa',
		validateSrc		: 'L?dzu nor?di hipersaiti',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Pareizrakst?bas p?rbaude',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: 'Netika atrasts v?rdn?c?',
		changeTo		: 'Nomain?t uz',
		btnIgnore		: 'Ignor?t',
		btnIgnoreAll	: 'Ignor?t visu',
		btnReplace		: 'Aizvietot',
		btnReplaceAll	: 'Aizvietot visu',
		btnUndo			: 'Atcelt',
		noSuggestions	: '- Nav ieteikumu -',
		progress		: 'Notiek pareizrakst?bas p?rbaude...',
		noMispell		: 'Pareizrakst?bas p?rbaude pabeigta: k??das netika atrastas',
		noChanges		: 'Pareizrakst?bas p?rbaude pabeigta: nekas netika labots',
		oneChange		: 'Pareizrakst?bas p?rbaude pabeigta: 1 v?rds izmain?ts',
		manyChanges		: 'Pareizrakst?bas p?rbaude pabeigta: %1 v?rdi tika main?ti',
		ieSpellDownload	: 'Pareizrakst?bas p?rbaud?t?js nav pievienots. Vai v?laties to lejupiel?d?t tagad?'
	},

	smiley :
	{
		toolbar	: 'Smaidi?i',
		title	: 'Ievietot smaidi?u',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: 'Numur?ts saraksts',
	bulletedlist	: 'Izcelts saraksts',
	indent			: 'Palielin?t atk?pi',
	outdent			: 'Samazin?t atk?pi',

	justify :
	{
		left	: 'Izl?dzin?t pa kreisi',
		center	: 'Izl?dzin?t pret centru',
		right	: 'Izl?dzin?t pa labi',
		block	: 'Izl?dzin?t malas'
	},

	blockquote : 'Block Quote', // MISSING

	clipboard :
	{
		title		: 'Ievietot',
		cutError	: 'J?su p?rl?kprogrammas droš?bas iestat?jumi nepie?auj editoram autom?tiski veikt izgriešanas darb?bu.  L?dzu, izmantojiet (Ctrl/Cmd+X, lai veiktu šo darb?bu.',
		copyError	: 'J?su p?rl?kprogrammas droš?bas iestat?jumi nepie?auj editoram autom?tiski veikt kop?šanas darb?bu.  L?dzu, izmantojiet (Ctrl/Cmd+C), lai veiktu šo darb?bu.',
		pasteMsg	: 'L?dzu, ievietojiet tekstu šaj? laukum?, izmantojot klaviat?ru (<STRONG>Ctrl/Cmd+V</STRONG>) un apstipriniet ar <STRONG>Dar?ts!</STRONG>.',
		securityMsg	: 'Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.', // MISSING
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'Ievietot no Worda',
		title			: 'Ievietot no Worda',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'Ievietot k? vienk?ršu tekstu',
		title	: 'Ievietot k? vienk?ršu tekstu'
	},

	templates :
	{
		button			: 'Sagataves',
		title			: 'Satura sagataves',
		options : 'Template Options', // MISSING
		insertOption	: 'Replace actual contents', // MISSING
		selectPromptMsg	: 'L?dzu, nor?diet sagatavi, ko atv?rt editor?<br>(patreiz?jie dati tiks zaud?ti):',
		emptyListMsg	: '(Nav nor?d?tas sagataves)'
	},

	showBlocks : 'Show Blocks', // MISSING

	stylesCombo :
	{
		label		: 'Stils',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Form?ts',
		panelTitle	: 'Form?ts',

		tag_p		: 'Norm?ls teksts',
		tag_pre		: 'Format?ts teksts',
		tag_address	: 'Adrese',
		tag_h1		: 'Virsraksts 1',
		tag_h2		: 'Virsraksts 2',
		tag_h3		: 'Virsraksts 3',
		tag_h4		: 'Virsraksts 4',
		tag_h5		: 'Virsraksts 5',
		tag_h6		: 'Virsraksts 6',
		tag_div		: 'Rindkopa (DIV)'
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
		label		: 'Šrifts',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Šrifts'
	},

	fontSize :
	{
		label		: 'Izm?rs',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'Izm?rs'
	},

	colorButton :
	{
		textColorTitle	: 'Teksta kr?sa',
		bgColorTitle	: 'Fona kr?sa',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Autom?tiska',
		more			: 'Plaš?ka palete...'
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
