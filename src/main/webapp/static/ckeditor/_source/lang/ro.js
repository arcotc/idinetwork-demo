 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Romanian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ro'] =
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
	source			: 'Sursa',
	newPage			: 'Pagin? nou?',
	save			: 'Salveaz?',
	preview			: 'Previzualizare',
	cut				: 'Taie',
	copy			: 'Copiaz?',
	paste			: 'Adaug?',
	print			: 'Printeaz?',
	underline		: 'Subliniat (underline)',
	bold			: 'Îngro?at (bold)',
	italic			: 'Înclinat (italic)',
	selectAll		: 'Selecteaz? tot',
	removeFormat	: 'Înl?tur? formatarea',
	strike			: 'T?iat (strike through)',
	subscript		: 'Indice (subscript)',
	superscript		: 'Putere (superscript)',
	horizontalrule	: 'Insereaz? linie orizont?',
	pagebreak		: 'Insereaz? separator de pagin? (Page Break)',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Înl?tur? link (leg?tur? web)',
	undo			: 'Starea anterioar? (undo)',
	redo			: 'Starea ulterioar? (redo)',

	// Common messages and labels.
	common :
	{
		browseServer	: 'R?sfoie?te server',
		url				: 'URL',
		protocol		: 'Protocol',
		upload			: 'Încarc?',
		uploadSubmit	: 'Trimite la server',
		image			: 'Imagine',
		flash			: 'Flash',
		form			: 'Formular (Form)',
		checkbox		: 'Bif? (Checkbox)',
		radio			: 'Buton radio (RadioButton)',
		textField		: 'Câmp text (TextField)',
		textarea		: 'Suprafa?? text (Textarea)',
		hiddenField		: 'Câmp ascuns (HiddenField)',
		button			: 'Buton',
		select			: 'Câmp selec?ie (SelectionField)',
		imageButton		: 'Buton imagine (ImageButton)',
		notSet			: '<nesetat>',
		id				: 'Id',
		name			: 'Nume',
		langDir			: 'Direc?ia cuvintelor',
		langDirLtr		: 'stânga-dreapta (LTR)',
		langDirRtl		: 'dreapta-stânga (RTL)',
		langCode		: 'Codul limbii',
		longDescr		: 'Descrierea lung? URL',
		cssClass		: 'Clasele cu stilul paginii (CSS)',
		advisoryTitle	: 'Titlul consultativ',
		cssStyle		: 'Stil',
		ok				: 'Bine',
		cancel			: 'Anulare',
		close			: 'Close', // MISSING
		preview			: 'Preview', // MISSING
		generalTab		: 'General', // MISSING
		advancedTab		: 'Avansat',
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
		width			: 'L??ime',
		height			: 'În?l?ime',
		align			: 'Aliniere',
		alignLeft		: 'Stânga',
		alignRight		: 'Dreapta',
		alignCenter		: 'Centru',
		alignTop		: 'Sus',
		alignMiddle		: 'Mijloc',
		alignBottom		: 'Jos',
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
		toolbar		: 'Insereaz? caracter special',
		title		: 'Selecteaz? caracter special',
		options : 'Special Character Options' // MISSING
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Insereaz?/Editeaz? link (leg?tur? web)',
		other 		: '<alt>',
		menu		: 'Editeaz? Link',
		title		: 'Link (Leg?tur? web)',
		info		: 'Informa?ii despre link (Leg?tur? web)',
		target		: '?int? (Target)',
		upload		: 'Încarc?',
		advanced	: 'Avansat',
		type		: 'Tipul link-ului (al leg?turii web)',
		toUrl		: 'URL', // MISSING
		toAnchor	: 'Ancor? în aceast? pagin?',
		toEmail		: 'E-Mail',
		targetFrame		: '<frame>',
		targetPopup		: '<fereastra popup>',
		targetFrameName	: 'Numele frame-ului ?int?',
		targetPopupName	: 'Numele ferestrei popup',
		popupFeatures	: 'Propriet??ile ferestrei popup',
		popupResizable	: 'Resizable', // MISSING
		popupStatusBar	: 'Bara de status',
		popupLocationBar: 'Bara de loca?ie',
		popupToolbar	: 'Bara de op?iuni',
		popupMenuBar	: 'Bara de meniu',
		popupFullScreen	: 'Tot ecranul (Full Screen)(IE)',
		popupScrollBars	: 'Scroll Bars',
		popupDependent	: 'Dependent (Netscape)',
		popupLeft		: 'Pozi?ia la stânga',
		popupTop		: 'Pozi?ia la dreapta',
		id				: 'Id', // MISSING
		langDir			: 'Direc?ia cuvintelor',
		langDirLTR		: 'stânga-dreapta (LTR)',
		langDirRTL		: 'dreapta-stânga (RTL)',
		acccessKey		: 'Tasta de acces',
		name			: 'Nume',
		langCode			: 'Direc?ia cuvintelor',
		tabIndex			: 'Indexul tabului',
		advisoryTitle		: 'Titlul consultativ',
		advisoryContentType	: 'Tipul consultativ al titlului',
		cssClasses		: 'Clasele cu stilul paginii (CSS)',
		charset			: 'Setul de caractere al resursei legate',
		styles			: 'Stil',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Selecta?i o ancor?',
		anchorName		: 'dup? numele ancorei',
		anchorId			: 'dup? Id-ul elementului',
		emailAddress		: 'Adres? de e-mail',
		emailSubject		: 'Subiectul mesajului',
		emailBody		: 'Con?inutul mesajului',
		noAnchors		: '(Nicio ancor? disponibil? în document)',
		noUrl			: 'V? rug?m s? scrie?i URL-ul',
		noEmail			: 'V? rug?m s? scrie?i adresa de e-mail'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Insereaz?/Editeaz? ancor?',
		menu		: 'Propriet??i ancor?',
		title		: 'Propriet??i ancor?',
		name		: 'Numele ancorei',
		errorName	: 'V? rug?m scrie?i numele ancorei'
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
		title				: 'G?se?te ?i înlocuie?te',
		find				: 'G?se?te',
		replace				: 'Înlocuie?te',
		findWhat			: 'G?se?te:',
		replaceWith			: 'Înlocuie?te cu:',
		notFoundMsg			: 'Textul specificat nu a fost g?sit.',
		matchCase			: 'Deosebe?te majuscule de minuscule (Match case)',
		matchWord			: 'Doar cuvintele întregi',
		matchCyclic			: 'Match cyclic', // MISSING
		replaceAll			: 'Înlocuie?te tot',
		replaceSuccessMsg	: '%1 occurrence(s) replaced.' // MISSING
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabel',
		title		: 'Propriet??ile tabelului',
		menu		: 'Propriet??ile tabelului',
		deleteTable	: '?terge tabel',
		rows		: 'Linii',
		columns		: 'Coloane',
		border		: 'M?rimea marginii',
		widthPx		: 'pixeli',
		widthPc		: 'procente',
		widthUnit	: 'width unit', // MISSING
		cellSpace	: 'Spa?iu între celule',
		cellPad		: 'Spa?iu în cadrul celulei',
		caption		: 'Titlu (Caption)',
		summary		: 'Rezumat',
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
			menu			: 'Celul?',
			insertBefore	: 'Insereaz? celul? înainte',
			insertAfter		: 'Insereaz? celul? dup?',
			deleteCell		: '?terge celule',
			merge			: 'Une?te celule',
			mergeRight		: 'Une?te la dreapta',
			mergeDown		: 'Une?te jos',
			splitHorizontal	: 'Împarte celula pe orizontal?',
			splitVertical	: 'Împarte celula pe vertical?',
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
			menu			: 'Linie',
			insertBefore	: 'Insereaz? linie înainte',
			insertAfter		: 'Insereaz? linie dup?',
			deleteRow		: '?terge linii'
		},

		column :
		{
			menu			: 'Coloan?',
			insertBefore	: 'Insereaz? coloan? înainte',
			insertAfter		: 'Insereaz? coloan? dup?',
			deleteColumn	: '?terge celule'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Propriet??i buton',
		text		: 'Text (Valoare)',
		type		: 'Tip',
		typeBtn		: 'Button',
		typeSbm		: 'Submit',
		typeRst		: 'Reset'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Propriet??i bif? (Checkbox)',
		radioTitle	: 'Propriet??i buton radio (Radio Button)',
		value		: 'Valoare',
		selected	: 'Selectat'
	},

	// Form Dialog.
	form :
	{
		title		: 'Propriet??i formular (Form)',
		menu		: 'Propriet??i formular (Form)',
		action		: 'Ac?iune',
		method		: 'Metod?',
		encoding	: 'Encoding' // MISSING
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Propriet??i câmp selec?ie (Selection Field)',
		selectInfo	: 'Informa?ii',
		opAvail		: 'Op?iuni disponibile',
		value		: 'Valoare',
		size		: 'M?rime',
		lines		: 'linii',
		chkMulti	: 'Permite selec?ii multiple',
		opText		: 'Text',
		opValue		: 'Valoare',
		btnAdd		: 'Adaug?',
		btnModify	: 'Modific?',
		btnUp		: 'Sus',
		btnDown		: 'Jos',
		btnSetValue : 'Seteaz? ca valoare selectat?',
		btnDelete	: '?terge'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Propriet??i suprafa?? text (Textarea)',
		cols		: 'Coloane',
		rows		: 'Linii'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Propriet??i câmp text (Text Field)',
		name		: 'Nume',
		value		: 'Valoare',
		charWidth	: 'L?rgimea caracterului',
		maxChars	: 'Caractere maxime',
		type		: 'Tip',
		typeText	: 'Text',
		typePass	: 'Parol?'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Propriet??i câmp ascuns (Hidden Field)',
		name	: 'Nume',
		value	: 'Valoare'
	},

	// Image Dialog.
	image :
	{
		title		: 'Propriet??ile imaginii',
		titleButton	: 'Propriet??i buton imagine (Image Button)',
		menu		: 'Propriet??ile imaginii',
		infoTab		: 'Informa?ii despre imagine',
		btnUpload	: 'Trimite la server',
		upload		: 'Încarc?',
		alt			: 'Text alternativ',
		lockRatio	: 'P?streaz? propor?iile',
		unlockRatio	: 'Unlock Ratio', // MISSING
		resetSize	: 'Reseteaz? m?rimea',
		border		: 'Margine',
		hSpace		: 'HSpace',
		vSpace		: 'VSpace',
		alertUrl	: 'V? rug?m s? scrie?i URL-ul imaginii',
		linkTab		: 'Link (Leg?tur? web)',
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
		properties		: 'Propriet??ile flash-ului',
		propertiesTab	: 'Properties', // MISSING
		title			: 'Propriet??ile flash-ului',
		chkPlay			: 'Ruleaz? automat',
		chkLoop			: 'Repet? (Loop)',
		chkMenu			: 'Activeaz? meniul flash',
		chkFull			: 'Allow Fullscreen', // MISSING
 		scale			: 'Scal?',
		scaleAll		: 'Arat? tot',
		scaleNoBorder	: 'F?r? margini (No border)',
		scaleFit		: 'Potrive?te',
		access			: 'Script Access', // MISSING
		accessAlways	: 'Always', // MISSING
		accessSameDomain: 'Same domain', // MISSING
		accessNever		: 'Never', // MISSING
		alignAbsBottom	: 'Jos absolut (Abs Bottom)',
		alignAbsMiddle	: 'Mijloc absolut (Abs Middle)',
		alignBaseline	: 'Linia de jos (Baseline)',
		alignTextTop	: 'Text sus',
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
		bgcolor			: 'Coloarea fundalului',
		hSpace			: 'HSpace',
		vSpace			: 'VSpace',
		validateSrc		: 'V? rug?m s? scrie?i URL-ul',
		validateHSpace	: 'HSpace must be a number.', // MISSING
		validateVSpace	: 'VSpace must be a number.' // MISSING
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Verific? text',
		title			: 'Spell Check', // MISSING
		notAvailable	: 'Sorry, but service is unavailable now.', // MISSING
		errorLoading	: 'Error loading application service host: %s.', // MISSING
		notInDic		: 'Nu e în dic?ionar',
		changeTo		: 'Schimb? în',
		btnIgnore		: 'Ignor?',
		btnIgnoreAll	: 'Ignor? toate',
		btnReplace		: 'Înlocuie?te',
		btnReplaceAll	: 'Înlocuie?te tot',
		btnUndo			: 'Starea anterioar? (undo)',
		noSuggestions	: '- F?r? sugestii -',
		progress		: 'Verificarea textului în desf??urare...',
		noMispell		: 'Verificarea textului terminat?: Nicio gre?eal? g?sit?',
		noChanges		: 'Verificarea textului terminat?: Niciun cuvânt modificat',
		oneChange		: 'Verificarea textului terminat?: Un cuvânt modificat',
		manyChanges		: 'Verificarea textului terminat?: 1% cuvinte modificate',
		ieSpellDownload	: 'Unealta pentru verificat textul (Spell checker) neinstalat?. Dori?i s? o desc?rca?i acum?'
	},

	smiley :
	{
		toolbar	: 'Figur? expresiv? (Emoticon)',
		title	: 'Insereaz? o figur? expresiv? (Emoticon)',
		options : 'Smiley Options' // MISSING
	},

	elementsPath :
	{
		eleLabel : 'Elements path', // MISSING
		eleTitle : '%1 element' // MISSING
	},

	numberedlist	: 'List? numerotat?',
	bulletedlist	: 'List? cu puncte',
	indent			: 'Cre?te indentarea',
	outdent			: 'Scade indentarea',

	justify :
	{
		left	: 'Aliniere la stânga',
		center	: 'Aliniere central?',
		right	: 'Aliniere la dreapta',
		block	: 'Aliniere în bloc (Block Justify)'
	},

	blockquote : 'Citat',

	clipboard :
	{
		title		: 'Adaug?',
		cutError	: 'Set?rile de securitate ale navigatorului (browser) pe care îl folosi?i nu permit editorului s? execute automat opera?iunea de t?iere. V? rug?m folosi?i tastatura (Ctrl/Cmd+X).',
		copyError	: 'Set?rile de securitate ale navigatorului (browser) pe care îl folosi?i nu permit editorului s? execute automat opera?iunea de copiere. V? rug?m folosi?i tastatura (Ctrl/Cmd+C).',
		pasteMsg	: 'V? rug?m ad?uga?i în c?su?a urm?toare folosind tastatura (<STRONG>Ctrl/Cmd+V</STRONG>) ?i ap?sa?i <STRONG>OK</STRONG>.',
		securityMsg	: 'Din cauza set?rilor de securitate ale programului dvs. cu care naviga?i pe internet (browser), editorul nu poate accesa direct datele din clipboard. Va trebui s? ad?uga?i din nou datele în aceast? fereastr?.',
		pasteArea	: 'Paste Area' // MISSING
	},

	pastefromword :
	{
		confirmCleanup	: 'The text you want to paste seems to be copied from Word. Do you want to clean it before pasting?', // MISSING
		toolbar			: 'Adaug? din Word',
		title			: 'Adaug? din Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'Adaug? ca text simplu (Plain Text)',
		title	: 'Adaug? ca text simplu (Plain Text)'
	},

	templates :
	{
		button			: 'Template-uri (?abloane)',
		title			: 'Template-uri (?abloane) de con?inut',
		options : 'Template Options', // MISSING
		insertOption	: 'Înlocuie?te cuprinsul actual',
		selectPromptMsg	: 'V? rug?m selecta?i template-ul (?ablonul) ce se va deschide în editor<br>(con?inutul actual va fi pierdut):',
		emptyListMsg	: '(Niciun template (?ablon) definit)'
	},

	showBlocks : 'Arat? blocurile',

	stylesCombo :
	{
		label		: 'Stil',
		panelTitle	: 'Formatting Styles', // MISSING
		panelTitle1	: 'Block Styles', // MISSING
		panelTitle2	: 'Inline Styles', // MISSING
		panelTitle3	: 'Object Styles' // MISSING
	},

	format :
	{
		label		: 'Formatare',
		panelTitle	: 'Formatare',

		tag_p		: 'Normal',
		tag_pre		: 'Formatted',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Normal (DIV)'
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
		label		: 'Font',
		voiceLabel	: 'Font', // MISSING
		panelTitle	: 'Font'
	},

	fontSize :
	{
		label		: 'M?rime',
		voiceLabel	: 'Font Size', // MISSING
		panelTitle	: 'M?rime'
	},

	colorButton :
	{
		textColorTitle	: 'Culoarea textului',
		bgColorTitle	: 'Coloarea fundalului',
		panelTitle		: 'Colors', // MISSING
		auto			: 'Automatic',
		more			: 'Mai multe culori...'
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
