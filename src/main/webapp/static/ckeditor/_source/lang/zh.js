 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Chinese Traditional language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['zh'] =
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
	source			: '???',
	newPage			: '????',
	save			: '??',
	preview			: '??',
	cut				: '??',
	copy			: '??',
	paste			: '??',
	print			: '??',
	underline		: '??',
	bold			: '??',
	italic			: '??',
	selectAll		: '??',
	removeFormat	: '????',
	strike			: '???',
	subscript		: '??',
	superscript		: '??',
	horizontalrule	: '?????',
	pagebreak		: '??????',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: '?????',
	undo			: '??',
	redo			: '??',

	// Common messages and labels.
	common :
	{
		browseServer	: '??????',
		url				: 'URL',
		protocol		: '????',
		upload			: '??',
		uploadSubmit	: '??????',
		image			: '??',
		flash			: 'Flash',
		form			: '??',
		checkbox		: '????',
		radio			: '????',
		textField		: '????',
		textarea		: '????',
		hiddenField		: '????',
		button			: '??',
		select			: '??/??',
		imageButton		: '????',
		notSet			: '<????>',
		id				: 'ID',
		name			: '??',
		langDir			: '????',
		langDirLtr		: '???? (LTR)',
		langDirRtl		: '???? (RTL)',
		langCode		: '????',
		longDescr		: '?? URL',
		cssClass		: '?????',
		advisoryTitle	: '??',
		cssStyle		: '??',
		ok				: '??',
		cancel			: '??',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: '??',
		advancedTab		: '??',
		validateNumberFailed : '????????',
		confirmNewPage	: '????????????????',
		confirmCancel	: '????????????????',
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
		width			: '??',
		height			: '??',
		align			: '??',
		alignLeft		: '????',
		alignRight		: '????',
		alignCenter		: '??',
		alignTop		: '????',
		alignMiddle		: '????',
		alignBottom		: '????',
		invalidHeight	: '?????????',
		invalidWidth	: '?????????',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, ???</span>'
	},

	contextmenu :
	{
		options : 'Context Menu Options' // MISSING
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: '??????',
		title		: '???????',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: '??/?????',
		other 		: '<??>',
		menu		: '?????',
		title		: '???',
		info		: '?????',
		target		: '??',
		upload		: '??',
		advanced	: '??',
		type		: '?????',
		toUrl		: 'URL', // MISSING
		toAnchor	: '????',
		toEmail		: '????',
		targetFrame		: '<??>',
		targetPopup		: '<????>',
		targetFrameName	: '??????',
		targetPopupName	: '??????',
		popupFeatures	: '??????',
		popupResizable	: '???',
		popupStatusBar	: '???',
		popupLocationBar: '???',
		popupToolbar	: '???',
		popupMenuBar	: '???',
		popupFullScreen	: '??? (IE)',
		popupScrollBars	: '??',
		popupDependent	: '?? (NS)',
		popupLeft		: '?',
		popupTop		: '?',
		id				: 'ID',
		langDir			: '????',
		langDirLTR		: '???? (LTR)',
		langDirRTL		: '???? (RTL)',
		acccessKey		: '???',
		name			: '??',
		langCode			: '????',
		tabIndex			: '????',
		advisoryTitle		: '??',
		advisoryContentType	: '????',
		cssClasses		: '?????',
		charset			: '???????',
		styles			: '??',
		rel			: 'Relationship', // MISSING
		selectAnchor		: '?????',
		anchorName		: '?????',
		anchorId			: '??? ID',
		emailAddress		: '????',
		emailSubject		: '????',
		emailBody		: '????',
		noAnchors		: '(??????????)',
		noUrl			: '??????? URL',
		noEmail			: '?????????'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: '??/????',
		menu		: '????',
		title		: '????',
		name		: '????',
		errorName	: '???????'
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
		title				: '?????',
		find				: '??',
		replace				: '??',
		findWhat			: '??:',
		replaceWith			: '??:',
		notFoundMsg			: '?????????',
		matchCase			: '??????',
		matchWord			: '????',
		matchCyclic			: '????',
		replaceAll			: '????',
		replaceSuccessMsg	: '??? %1 ???'
	},

	// Table Dialog
	table :
	{
		toolbar		: '??',
		title		: '????',
		menu		: '????',
		deleteTable	: '????',
		rows		: '??',
		columns		: '??',
		border		: '??',
		widthPx		: '??',
		widthPc		: '???',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: '??',
		cellPad		: '??',
		caption		: '??',
		summary		: '??',
		headers		: '??',
		headersNone		: '???',
		headersColumn	: '???',
		headersRow		: '???',
		headersBoth		: '???????',
		invalidRows		: '?????????',
		invalidCols		: '?????????',
		invalidBorder	: '???????????',
		invalidWidth	: '???????????',
		invalidHeight	: '???????????',
		invalidCellSpacing	: '????????????',
		invalidCellPadding	: '????????????',

		cell :
		{
			menu			: '???',
			insertBefore	: '???????',
			insertAfter		: '???????',
			deleteCell		: '?????',
			merge			: '?????',
			mergeRight		: '???????',
			mergeDown		: '???????',
			splitHorizontal	: '???????',
			splitVertical	: '???????',
			title			: '?????',
			cellType		: '?????',
			rowSpan			: '?????',
			colSpan			: '?????',
			wordWrap		: '????',
			hAlign			: '????',
			vAlign			: '????',
			alignBaseline	: '????',
			bgColor			: '????',
			borderColor		: '????',
			data			: '??',
			header			: '??',
			yes				: '?',
			no				: '?',
			invalidWidth	: '????????????',
			invalidHeight	: '????????????',
			invalidRowSpan	: '????????????',
			invalidColSpan	: '?????????????',
			chooseColor		: 'Choose' // MISSING
		},

		row :
		{
			menu			: '?',
			insertBefore	: '?????',
			insertAfter		: '?????',
			deleteRow		: '???'
		},

		column :
		{
			menu			: '?',
			insertBefore	: '?????',
			insertAfter		: '?????',
			deleteColumn	: '???'
		}
	},

	// Button Dialog.
	button :
	{
		title		: '????',
		text		: '???? (?)',
		type		: '??',
		typeBtn		: '?? (Button)',
		typeSbm		: '?? (Submit)',
		typeRst		: '?? (Reset)'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : '??????',
		radioTitle	: '??????',
		value		: '???',
		selected	: '???'
	},

	// Form Dialog.
	form :
	{
		title		: '????',
		menu		: '????',
		action		: '??',
		method		: '??',
		encoding	: '????'
	},

	// Select Field Dialog.
	select :
	{
		title		: '??/????',
		selectInfo	: '??',
		opAvail		: '????',
		value		: '?',
		size		: '??',
		lines		: '?',
		chkMulti	: '???',
		opText		: '????',
		opValue		: '???',
		btnAdd		: '??',
		btnModify	: '??',
		btnUp		: '??',
		btnDown		: '??',
		btnSetValue : '?????',
		btnDelete	: '??'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: '??????',
		cols		: '????',
		rows		: '??'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: '??????',
		name		: '??',
		value		: '?',
		charWidth	: '????',
		maxChars	: '?????',
		type		: '??',
		typeText	: '??',
		typePass	: '??'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: '??????',
		name	: '??',
		value	: '?'
	},

	// Image Dialog.
	image :
	{
		title		: '????',
		titleButton	: '??????',
		menu		: '????',
		infoTab		: '????',
		btnUpload	: '??????',
		upload		: '??',
		alt			: '????',
		lockRatio	: '???',
		unlockRatio	: 'Unlock Ratio', // MISSING
		resetSize	: '??????',
		border		: '??',
		hSpace		: '????',
		vSpace		: '????',
		alertUrl	: '????? URL',
		linkTab		: '???',
		button2Img	: '????????????',
		img2Button	: '????????????',
		urlMissing	: 'Image source URL is missing.', // MISSING
		validateBorder	: 'Border must be a whole number.', // MISSING
		validateHSpace	: 'HSpace must be a whole number.', // MISSING
		validateVSpace	: 'VSpace must be a whole number.' // MISSING
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash ??',
		propertiesTab	: '??',
		title			: 'Flash ??',
		chkPlay			: '????',
		chkLoop			: '??',
		chkMenu			: '????',
		chkFull			: '???????',
 		scale			: '??',
		scaleAll		: '????',
		scaleNoBorder	: '???',
		scaleFit		: '????',
		access			: '??????',
		accessAlways	: '??',
		accessSameDomain: '????',
		accessNever		: '??',
		alignAbsBottom	: '????',
		alignAbsMiddle	: '????',
		alignBaseline	: '???',
		alignTextTop	: '????',
		quality			: '??',
		qualityBest		: '??',
		qualityHigh		: '?',
		qualityAutoHigh	: '?????',
		qualityMedium	: '?????',
		qualityAutoLow	: '?????',
		qualityLow		: '?',
		windowModeWindow: '??',
		windowModeOpaque: '???',
		windowModeTransparent : '??',
		windowMode		: '????',
		flashvars		: 'Flash ??',
		bgcolor			: '????',
		hSpace			: '????',
		vSpace			: '????',
		validateSrc		: '??????? URL',
		validateHSpace	: '???????????',
		validateVSpace	: '???????????'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: '????',
		title			: '????',
		notAvailable	: '???????????',
		errorLoading	: '???????: %s.',
		notInDic		: '?????',
		changeTo		: '???',
		btnIgnore		: '??',
		btnIgnoreAll	: '????',
		btnReplace		: '??',
		btnReplaceAll	: '????',
		btnUndo			: '??',
		noSuggestions	: '- ???? -',
		progress		: '???????…',
		noMispell		: '??????????????',
		noChanges		: '??????????????',
		oneChange		: '?????????? 1 ???',
		manyChanges		: '?????????? %1 ???',
		ieSpellDownload	: '?????????????????????'
	},

	smiley :
	{
		toolbar	: '????',
		title	: '??????',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 ??'
	},

	numberedlist	: '????',
	bulletedlist	: '????',
	indent			: '????',
	outdent			: '????',

	justify :
	{
		left	: '????',
		center	: '??',
		right	: '????',
		block	: '????'
	},

	blockquote : '????',

	clipboard :
	{
		title		: '??',
		cutError	: '?????????????????????????????? (Ctrl/Cmd+X) ???',
		copyError	: '?????????????????????????????? (Ctrl/Cmd+C) ???',
		pasteMsg	: '?????? (<strong>Ctrl/Cmd+V</strong>) ?????????? <strong>??</strong>',
		securityMsg	: '?????????????????????????????????????????????',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: '??????????? Word ?????????????? Word ?????????',
		toolbar			: '? Word ??',
		title			: '? Word ??',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: '???????',
		title	: '???????'
	},

	templates :
	{
		button			: '??',
		title			: '????',
		options : 'Template Options', // MISSING
		insertOption	: '??????',
		selectPromptMsg	: '?????????<br> (??????????):',
		emptyListMsg	: '(???)'
	},

	showBlocks : '????',

	stylesCombo :
	{
		label		: '??',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: '??????',
		panelTitle2	: '??????',
		panelTitle3	: '??????'
	},

	format :
	{
		label		: '??',
		panelTitle	: '??',

		tag_p		: '??',
		tag_pre		: '????',
		tag_address	: '??',
		tag_h1		: '?? 1',
		tag_h2		: '?? 2',
		tag_h3		: '?? 3',
		tag_h4		: '?? 4',
		tag_h5		: '?? 5',
		tag_h6		: '?? 6',
		tag_div		: '?? (DIV)'
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
		label		: '??',
		voiceLabel	: '??',
		panelTitle	: '??'
	},

	fontSize :
	{
		label		: '??',
		voiceLabel	: '????',
		panelTitle	: '??'
	},

	colorButton :
	{
		textColorTitle	: '????',
		bgColorTitle	: '????',
		panelTitle		: 'Colors', // MISSING
		auto			: '??',
		more			: '????…'
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
		title			: '??????',
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: '????????',
		disable			: '????????',
		about			: '????????',
		toggle			: '???????????',
		options			: '??',
		langs			: '??',
		moreSuggestions	: '??????',
		ignore			: '??',
		ignoreAll		: '????',
		addWord			: '????',
		emptyDic		: '???????.',

		optionsTab		: '??',
		allCaps			: 'Ignore All-Caps Words', // MISSING
		ignoreDomainNames : 'Ignore Domain Names', // MISSING
		mixedCase		: 'Ignore Words with Mixed Case', // MISSING
		mixedWithDigits	: 'Ignore Words with Numbers', // MISSING

		languagesTab	: '??',

		dictionariesTab	: '??',
		dic_field_name	: 'Dictionary name', // MISSING
		dic_create		: 'Create', // MISSING
		dic_restore		: 'Restore', // MISSING
		dic_delete		: 'Delete', // MISSING
		dic_rename		: 'Rename', // MISSING
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: '??'
	},

	about :
	{
		title		: '?? CKEditor',
		dlgTitle	: '?? CKEditor',
		moreInfo	: '???????????????????',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : '???',
	minimize : 'Minimize', // MISSING

	fakeobjects :
	{
		anchor		: '??',
		flash		: 'Flash ??',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: '????'
	},

	resize : '??????',

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
