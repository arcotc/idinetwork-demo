 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Vietnamese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['vi'] =
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
	editorTitle : 'B? so?n th?o, %1, nh?n ALT + 0 ?? xem h??ng d?n.',

	// ARIA descriptions.
	toolbar	: 'Thanh công c?',
	editor	: 'B? so?n th?o',

	// Toolbar buttons without dialogs.
	source			: 'Mã HTML',
	newPage			: 'Trang m?i',
	save			: 'L?u',
	preview			: 'Xem tr??c',
	cut				: 'C?t',
	copy			: 'Sao chép',
	paste			: 'Dán',
	print			: 'In',
	underline		: 'G?ch chân',
	bold			: '??m',
	italic			: 'Nghiêng',
	selectAll		: 'Ch?n t?t c?',
	removeFormat	: 'Xoá ??nh d?ng',
	strike			: 'G?ch xuyên ngang',
	subscript		: 'Ch? s? d??i',
	superscript		: 'Ch? s? trên',
	horizontalrule	: 'Chèn ???ng phân cách ngang',
	pagebreak		: 'Chèn ng?t trang',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Xoá liên k?t',
	undo			: 'Khôi ph?c thao tác',
	redo			: 'Làm l?i thao tác',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Duy?t trên máy ch?',
		url				: 'URL',
		protocol		: 'Giao th?c',
		upload			: 'T?i lên',
		uploadSubmit	: 'T?i lên máy ch?',
		image			: 'Hình ?nh',
		flash			: 'Flash',
		form			: 'Bi?u m?u',
		checkbox		: 'Nút ki?m',
		radio			: 'Nút ch?n',
		textField		: 'Tr??ng v?n b?n',
		textarea		: 'Vùng v?n b?n',
		hiddenField		: 'Tr??ng ?n',
		button			: 'Nút',
		select			: 'Ô ch?n',
		imageButton		: 'Nút hình ?nh',
		notSet			: '<không thi?t l?p>',
		id				: '??nh danh',
		name			: 'Tên',
		langDir			: 'H??ng ngôn ng?',
		langDirLtr		: 'Trái sang ph?i (LTR)',
		langDirRtl		: 'Ph?i sang trái (RTL)',
		langCode		: 'Mã ngôn ng?',
		longDescr		: 'Mô t? URL',
		cssClass		: 'L?p Stylesheet',
		advisoryTitle	: 'Nhan ?? h??ng d?n',
		cssStyle		: 'Ki?u (style)',
		ok				: '??ng ý',
		cancel			: 'B? qua',
		close			: '?óng',
		preview			: 'Xem tr??c',
		generalTab		: 'Tab chung',
		advancedTab		: 'Tab m? r?ng',
		validateNumberFailed : 'Giá tr? này không ph?i là s?.',
		confirmNewPage	: 'M?i thay ??i không ???c l?u l?i, n?i dung này s? b? m?t. B?n có ch?c ch?n mu?n t?i m?t trang m?i?',
		confirmCancel	: 'M?t vài tùy ch?n ?ã b? thay ??i. B?n có ch?c ch?n mu?n ?óng h?p tho?i?',
		options			: 'Tùy ch?n',
		target			: '?ích ??n',
		targetNew		: 'C?a s? m?i (_blank)',
		targetTop		: 'C?a s? trên cùng (_top)',
		targetSelf		: 'T?i trang (_self)',
		targetParent	: 'C?a s? cha (_parent)',
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: 'Chi?u r?ng',
		height			: 'chi?u cao',
		align			: 'V? trí',
		alignLeft		: 'Trái',
		alignRight		: 'Ph?i',
		alignCenter		: 'Gi?a',
		alignTop		: 'Trên',
		alignMiddle		: 'Gi?a',
		alignBottom		: 'D??i',
		invalidHeight	: 'Chi?u cao ph?i là s? nguyên.',
		invalidWidth	: 'Chi?u r?ng ph?i là s? nguyên.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, không có</span>'
	},

	contextmenu :
	{
		options : 'Tùy ch?n menu b? xung'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Chèn ký t? ??c bi?t',
		title		: 'Hãy ch?n ký t? ??c bi?t',
		options : 'Tùy ch?n các ký t? ??c bi?t'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Chèn/S?a liên k?t',
		other 		: '<khác>',
		menu		: 'S?a liên k?t',
		title		: 'Liên k?t',
		info		: 'Thông tin liên k?t',
		target		: '?ích',
		upload		: 'T?i lên',
		advanced	: 'M? r?ng',
		type		: 'Ki?u liên k?t',
		toUrl		: 'URL',
		toAnchor	: 'Neo trong trang này',
		toEmail		: 'Th? ?i?n t?',
		targetFrame		: '<khung>',
		targetPopup		: '<c?a s? popup>',
		targetFrameName	: 'Tên khung ?ích',
		targetPopupName	: 'Tên c?a s? Popup',
		popupFeatures	: '??c ?i?m c?a c?a s? Popup',
		popupResizable	: 'Có th? thay ??i kích c?',
		popupStatusBar	: 'Thanh tr?ng thái',
		popupLocationBar: 'Thanh v? trí',
		popupToolbar	: 'Thanh công c?',
		popupMenuBar	: 'Thanh Menu',
		popupFullScreen	: 'Toàn màn hình (IE)',
		popupScrollBars	: 'Thanh cu?n',
		popupDependent	: 'Ph? thu?c (Netscape)',
		popupLeft		: 'V? trí bên trái',
		popupTop		: 'V? trí phía trên',
		id				: '??nh danh',
		langDir			: 'H??ng ngôn ng?',
		langDirLTR		: 'Trái sang ph?i (LTR)',
		langDirRTL		: 'Ph?i sang trái (RTL)',
		acccessKey		: 'Phím h? tr? truy c?p',
		name			: 'Tên',
		langCode			: 'Mã ngôn ng?',
		tabIndex			: 'Ch? s? c?a Tab',
		advisoryTitle		: 'Nhan ?? h??ng d?n',
		advisoryContentType	: 'N?i dung h??ng d?n',
		cssClasses		: 'L?p Stylesheet',
		charset			: 'B?ng mã c?a tài nguyên ???c liên k?t ??n',
		styles			: 'Ki?u (style)',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Ch?n m?t ?i?m neo',
		anchorName		: 'Theo tên ?i?m neo',
		anchorId			: 'Theo ??nh danh thành ph?n',
		emailAddress		: 'Th? ?i?n t?',
		emailSubject		: 'Tiêu ?? thông ?i?p',
		emailBody		: 'N?i dung thông ?i?p',
		noAnchors		: '(Không có ?i?m neo nào trong tài li?u)',
		noUrl			: 'Hãy ??a vào ???ng d?n liên k?t (URL)',
		noEmail			: 'Hãy ??a vào ??a ch? th? ?i?n t?'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Chèn/S?a ?i?m neo',
		menu		: 'Thu?c tính ?i?m neo',
		title		: 'Thu?c tính ?i?m neo',
		name		: 'Tên c?a ?i?m neo',
		errorName	: 'Hãy nh?p vào tên c?a ?i?m neo'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Thu?c tính danh sách có th? t?',
		bulletedTitle		: 'Thu?c tính danh sách không th? t?',
		type				: 'Ki?u lo?i',
		start				: 'B?t ??u',
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: 'Khuyên tròn',
		disc				: 'Hình ??a',
		square				: 'Hình vuông',
		none				: 'Không gì c?',
		notset				: '<không thi?t l?p>',
		armenian			: 'S? theo ki?u Armenian',
		georgian			: 'S? theo ki?u Georgian (an, ban, gan...)',
		lowerRoman			: 'S? La Mã ki?u th??ng (i, ii, iii, iv, v...)',
		upperRoman			: 'S? La Mã ki?u HOA (I, II, III, IV, V...)',
		lowerAlpha			: 'Ki?u abc th??ng (a, b, c, d, e...)',
		upperAlpha			: 'Ki?u ABC HOA (A, B, C, D, E...)',
		lowerGreek			: 'Ki?u Hy L?p (alpha, beta, gamma...)',
		decimal				: 'Ki?u s? (1, 2, 3 ...)',
		decimalLeadingZero	: 'Ki?u s? (01, 02, 03...)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Tìm ki?m và thay th?',
		find				: 'Tìm ki?m',
		replace				: 'Thay th?',
		findWhat			: 'Tìm chu?i:',
		replaceWith			: 'Thay b?ng:',
		notFoundMsg			: 'Không tìm th?y chu?i c?n tìm.',
		matchCase			: 'Phân bi?t ch? hoa/th??ng',
		matchWord			: 'Gi?ng toàn b? t?',
		matchCyclic			: 'Gi?ng m?t ph?n',
		replaceAll			: 'Thay th? t?t c?',
		replaceSuccessMsg	: '%1 v? trí ?ã ???c thay th?.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'B?ng',
		title		: 'Thu?c tính b?ng',
		menu		: 'Thu?c tính b?ng',
		deleteTable	: 'Xóa b?ng',
		rows		: 'S? hàng',
		columns		: 'S? c?t',
		border		: 'Kích th??c ???ng vi?n',
		widthPx		: '?i?m ?nh (px)',
		widthPc		: 'Ph?n tr?m (%)',
		widthUnit	: '??n v?',
		cellSpace	: 'Kho?ng cách gi?a các ô',
		cellPad		: 'Kho?ng ??m gi? ô và n?i dung',
		caption		: '??u ??',
		summary		: 'Tóm l??c',
		headers		: '??u ??',
		headersNone		: 'Không có',
		headersColumn	: 'C?t ??u tiên',
		headersRow		: 'Hàng ??u tiên',
		headersBoth		: 'C? hai',
		invalidRows		: 'S? l??ng hàng ph?i là m?t s? l?n h?n 0.',
		invalidCols		: 'S? l??ng c?t ph?i là m?t s? l?n h?n 0.',
		invalidBorder	: 'Kích c? c?a ???ng biên ph?i là m?t s? nguyên.',
		invalidWidth	: 'Chi?u r?ng c?a b?ng ph?i là m?t s? nguyên.',
		invalidHeight	: 'Chi?u cao c?a b?ng ph?i là m?t s? nguyên.',
		invalidCellSpacing	: 'Kho?ng cách gi?a các ô ph?i là m?t s? nguyên.',
		invalidCellPadding	: 'Kho?ng ??m gi?a ô và n?i dung ph?i là m?t s? nguyên.',

		cell :
		{
			menu			: 'Ô',
			insertBefore	: 'Chèn ô Phía tr??c',
			insertAfter		: 'Chèn ô Phía sau',
			deleteCell		: 'Xoá ô',
			merge			: 'K?t h?p ô',
			mergeRight		: 'K?t h?p sang ph?i',
			mergeDown		: 'K?t h?p xu?ng d??i',
			splitHorizontal	: 'Phân tách ô theo chi?u ngang',
			splitVertical	: 'Phân tách ô theo chi?u d?c',
			title			: 'Thu?c tính c?a ô',
			cellType		: 'Ki?u c?a ô',
			rowSpan			: 'K?t h?p hàng',
			colSpan			: 'K?t h?p c?t',
			wordWrap		: 'Ch? li?n hàng',
			hAlign			: 'Canh l? ngang',
			vAlign			: 'Canh l? d?c',
			alignBaseline	: '???ng c? s?',
			bgColor			: 'Màu n?n',
			borderColor		: 'Màu vi?n',
			data			: 'D? li?u',
			header			: '??u ??',
			yes				: 'Có',
			no				: 'Không',
			invalidWidth	: 'Chi?u r?ng c?a ô ph?i là m?t s? nguyên.',
			invalidHeight	: 'Chi?u cao c?a ô ph?i là m?t s? nguyên.',
			invalidRowSpan	: 'S? hàng k?t h?p ph?i là m?t s? nguyên.',
			invalidColSpan	: 'S? c?t k?t h?p ph?i là m?t s? nguyên.',
			chooseColor		: 'Ch?n màu'
		},

		row :
		{
			menu			: 'Hàng',
			insertBefore	: 'Chèn hàng phía tr??c',
			insertAfter		: 'Chèn hàng phía sau',
			deleteRow		: 'Xoá hàng'
		},

		column :
		{
			menu			: 'C?t',
			insertBefore	: 'Chèn c?t phía tr??c',
			insertAfter		: 'Chèn c?t phía sau',
			deleteColumn	: 'Xoá c?t'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Thu?c tính c?a nút',
		text		: 'Chu?i hi?n th? (giá tr?)',
		type		: 'Ki?u',
		typeBtn		: 'Nút b?m',
		typeSbm		: 'Nút g?i',
		typeRst		: 'Nút nh?p l?i'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Thu?c tính nút ki?m',
		radioTitle	: 'Thu?c tính nút ch?n',
		value		: 'Giá tr?',
		selected	: '???c ch?n'
	},

	// Form Dialog.
	form :
	{
		title		: 'Thu?c tính bi?u m?u',
		menu		: 'Thu?c tính bi?u m?u',
		action		: 'Hành ??ng',
		method		: 'Ph??ng th?c',
		encoding	: 'B?ng mã'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Thu?c tính ô ch?n',
		selectInfo	: 'Thông tin',
		opAvail		: 'Các tùy ch?n có th? s? d?ng',
		value		: 'Giá tr?',
		size		: 'Kích c?',
		lines		: 'dòng',
		chkMulti	: 'Cho phép ch?n nhi?u',
		opText		: 'V?n b?n',
		opValue		: 'Giá tr?',
		btnAdd		: 'Thêm',
		btnModify	: 'Thay ??i',
		btnUp		: 'Lên',
		btnDown		: 'Xu?ng',
		btnSetValue : 'Giá tr? ???c ch?n',
		btnDelete	: 'Nút xoá'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Thu?c tính vùng v?n b?n',
		cols		: 'S? c?t',
		rows		: 'S? hàng'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Thu?c tính tr??ng v?n b?n',
		name		: 'Tên',
		value		: 'Giá tr?',
		charWidth	: '?? r?ng c?a ký t?',
		maxChars	: 'S? ký t? t?i ?a',
		type		: 'Ki?u',
		typeText	: 'Ký t?',
		typePass	: 'M?t kh?u'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Thu?c tính tr??ng ?n',
		name	: 'Tên',
		value	: 'Giá tr?'
	},

	// Image Dialog.
	image :
	{
		title		: 'Thu?c tính c?a ?nh',
		titleButton	: 'Thu?c tính nút c?a ?nh',
		menu		: 'Thu?c tính c?a ?nh',
		infoTab		: 'Thông tin c?a ?nh',
		btnUpload	: 'T?i lên máy ch?',
		upload		: 'T?i lên',
		alt			: 'Chú thích ?nh',
		lockRatio	: 'Gi? nguyên t? l?',
		unlockRatio	: 'Phá b? t? l?',
		resetSize	: 'Kích th??c g?c',
		border		: '???ng vi?n',
		hSpace		: 'Kho?ng ??m ngang',
		vSpace		: 'Kho?ng ??m d?c',
		alertUrl	: 'Hãy ??a vào ???ng d?n c?a ?nh',
		linkTab		: 'Tab liên k?t',
		button2Img	: 'B?n có mu?n chuy?n nút b?m b?ng ?nh ???c ch?n thành ?nh?',
		img2Button	: 'B?n có mu?n chuy?n ??i ?nh ???c ch?n thành nút b?m b?ng ?nh?',
		urlMissing	: 'Thi?u ???ng d?n hình ?nh',
		validateBorder	: 'Chi?u r?ng c?a ???ng vi?n ph?i là m?t s? nguyên d??ng',
		validateHSpace	: 'Kho?ng ??m ngang ph?i là m?t s? nguyên d??ng',
		validateVSpace	: 'Kho?ng ??m d?c ph?i là m?t s? nguyên d??ng'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Thu?c tính Flash',
		propertiesTab	: 'Thu?c tính',
		title			: 'Thu?c tính Flash',
		chkPlay			: 'T? ??ng ch?y',
		chkLoop			: 'L?p',
		chkMenu			: 'Cho phép b?t menu c?a Flash',
		chkFull			: 'Cho phép toàn màn hình',
 		scale			: 'T? l?',
		scaleAll		: 'Hi?n th? t?t c?',
		scaleNoBorder	: 'Không ???ng vi?n',
		scaleFit		: 'V?a v?n',
		access			: 'Truy c?p mã',
		accessAlways	: 'Luôn luôn',
		accessSameDomain: 'Cùng tên mi?n',
		accessNever		: 'Không bao gi?',
		alignAbsBottom	: 'D??i tuy?t ??i',
		alignAbsMiddle	: 'Gi?a tuy?t ??i',
		alignBaseline	: '???ng c? s?',
		alignTextTop	: 'Phía trên ch?',
		quality			: 'Ch?t l??ng',
		qualityBest		: 'T?t nh?t',
		qualityHigh		: 'Cao',
		qualityAutoHigh	: 'Cao t? ??ng',
		qualityMedium	: 'Trung bình',
		qualityAutoLow	: 'Th?p t? ??ng',
		qualityLow		: 'Th?p',
		windowModeWindow: 'C?a s?',
		windowModeOpaque: 'M? ??c',
		windowModeTransparent : 'Trong su?t',
		windowMode		: 'Ch? ?? c?a s?',
		flashvars		: 'Các bi?n s? dành cho Flash',
		bgcolor			: 'Màu n?n',
		hSpace			: 'Kho?ng ??m ngang',
		vSpace			: 'Kho?ng ??m d?c',
		validateSrc		: 'Hãy ??a vào ???ng d?n liên k?t',
		validateHSpace	: 'Kho?ng ??m ngang ph?i là s? nguyên.',
		validateVSpace	: 'Kho?ng ??m d?c ph?i là s? nguyên.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Ki?m tra chính t?',
		title			: 'Ki?m tra chính t?',
		notAvailable	: 'Xin l?i, d?ch v? này hi?n t?i không có.',
		errorLoading	: 'L?i khi ?ang n?p d?ch v? ?ng d?ng: %s.',
		notInDic		: 'Không có trong t? ?i?n',
		changeTo		: 'Chuy?n thành',
		btnIgnore		: 'B? qua',
		btnIgnoreAll	: 'B? qua t?t c?',
		btnReplace		: 'Thay th?',
		btnReplaceAll	: 'Thay th? t?t c?',
		btnUndo			: 'Ph?c h?i l?i',
		noSuggestions	: '- Không ??a ra g?i ý v? t? -',
		progress		: '?ang ti?n hành ki?m tra chính t?...',
		noMispell		: 'Hoàn t?t ki?m tra chính t?: Không có l?i chính t?',
		noChanges		: 'Hoàn t?t ki?m tra chính t?: Không có t? nào ???c thay ??i',
		oneChange		: 'Hoàn t?t ki?m tra chính t?: M?t t? ?ã ???c thay ??i',
		manyChanges		: 'Hoàn t?t ki?m tra chính t?: %1 t? ?ã ???c thay ??i',
		ieSpellDownload	: 'Ch?c n?ng ki?m tra chính t? ch?a ???c cài ??t. B?n có mu?n t?i v? ngay bây gi??'
	},

	smiley :
	{
		toolbar	: 'Hình bi?u l? c?m xúc (m?t c??i)',
		title	: 'Chèn hình bi?u l? c?m xúc (m?t c??i)',
		options : 'Tùy ch?n hình  bi?u l? c?m xúc'
	},

	elementsPath :
	{
		eleLabel : 'Nhãn thành ph?n',
		eleTitle : '%1 thành ph?n'
	},

	numberedlist	: 'Danh sách có th? t?',
	bulletedlist	: 'Danh sách không th? t?',
	indent			: 'D?ch vào trong',
	outdent			: 'D?ch ra ngoài',

	justify :
	{
		left	: 'Canh trái',
		center	: 'Canh gi?a',
		right	: 'Canh ph?i',
		block	: 'Canh ??u'
	},

	blockquote : 'Kh?i trích d?n',

	clipboard :
	{
		title		: 'Dán',
		cutError	: 'Các thi?t l?p b?o m?t c?a trình duy?t không cho phép trình biên t?p t? ??ng th?c thi l?nh c?t. Hãy s? d?ng bàn phím cho l?nh này (Ctrl/Cmd+X).',
		copyError	: 'Các thi?t l?p b?o m?t c?a trình duy?t không cho phép trình biên t?p t? ??ng th?c thi l?nh sao chép. Hãy s? d?ng bàn phím cho l?nh này (Ctrl/Cmd+C).',
		pasteMsg	: 'Hãy dán n?i dung vào trong khung bên d??i, s? d?ng t? h?p phím (<STRONG>Ctrl/Cmd+V</STRONG>) và nh?n vào nút <STRONG>??ng ý</STRONG>.',
		securityMsg	: 'Do thi?t l?p b?o m?t c?a trình duy?t nên trình biên t?p không th? truy c?p tr?c ti?p vào n?i dung ?ã sao chép. B?n c?n ph?i dán l?i n?i dung vào c?a s? này.',
		pasteArea	: 'Khu v?c dán'
	},

	pastefromword :
	{
		confirmCleanup	: 'V?n b?n b?n mu?n dán có kèm ??nh d?ng c?a Word. B?n có mu?n lo?i b? ??nh d?ng Word tr??c khi dán?',
		toolbar			: 'Dán v?i ??nh d?ng Word',
		title			: 'Dán v?i ??nh d?ng Word',
		error			: 'It was not possible to clean up the pasted data due to an internal error' // MISSING
	},

	pasteText :
	{
		button	: 'Dán theo ??nh d?ng v?n b?n thu?n',
		title	: 'Dán theo ??nh d?ng v?n b?n thu?n'
	},

	templates :
	{
		button			: 'M?u d?ng s?n',
		title			: 'N?i dung M?u d?ng s?n',
		options : 'Tùy ch?n m?u d?ng s?n',
		insertOption	: 'Thay th? n?i dung hi?n t?i',
		selectPromptMsg	: 'Hãy ch?n m?u d?ng s?n ?? m? trong trình biên t?p<br>(n?i dung hi?n t?i s? b? m?t):',
		emptyListMsg	: '(Không có m?u d?ng s?n nào ???c ??nh ngh?a)'
	},

	showBlocks : 'Hi?n th? các kh?i',

	stylesCombo :
	{
		label		: 'Ki?u',
		panelTitle	: 'Phong cách ??nh d?ng',
		panelTitle1	: 'Ki?u kh?i',
		panelTitle2	: 'Ki?u tr?c ti?p',
		panelTitle3	: 'Ki?u ??i t??ng'
	},

	format :
	{
		label		: '??nh d?ng',
		panelTitle	: '??nh d?ng',

		tag_p		: 'Bình th??ng (P)',
		tag_pre		: '?ã thi?t l?p',
		tag_address	: 'Address',
		tag_h1		: 'Heading 1',
		tag_h2		: 'Heading 2',
		tag_h3		: 'Heading 3',
		tag_h4		: 'Heading 4',
		tag_h5		: 'Heading 5',
		tag_h6		: 'Heading 6',
		tag_div		: 'Bình th??ng (DIV)'
	},

	div :
	{
		title				: 'T?o kh?i các thành ph?n',
		toolbar				: 'T?o kh?i các thành ph?n',
		cssClassInputLabel	: 'Các l?p CSS',
		styleSelectLabel	: 'Ki?u (style)',
		IdInputLabel		: '??nh danh (id)',
		languageCodeInputLabel	: 'Mã ngôn ng?',
		inlineStyleInputLabel	: 'Ki?u n?i dòng',
		advisoryTitleInputLabel	: 'Nhan ?? h??ng d?n',
		langDirLabel		: 'H??ng ngôn ng?',
		langDirLTRLabel		: 'Trái sang ph?i (LTR)',
		langDirRTLLabel		: 'Ph?i qua trái (RTL)',
		edit				: 'Ch?nh s?a',
		remove				: 'Xóa b?'
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
		label		: 'Phông',
		voiceLabel	: 'Phông',
		panelTitle	: 'Phông'
	},

	fontSize :
	{
		label		: 'C? ch?',
		voiceLabel	: 'Kích c? phông',
		panelTitle	: 'C? ch?'
	},

	colorButton :
	{
		textColorTitle	: 'Màu ch?',
		bgColorTitle	: 'Màu n?n',
		panelTitle		: 'Màu s?c',
		auto			: 'T? ??ng',
		more			: 'Màu khác...'
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
		title			: 'Ki?m tra chính t? ngay khi gõ ch? (SCAYT)',
		opera_title		: 'Không h? tr? trên trình duy?t Opera',
		enable			: 'B?t SCAYT',
		disable			: 'T?t SCAYT',
		about			: 'Thông tin v? SCAYT',
		toggle			: 'B?t t?t SCAYT',
		options			: 'Tùy ch?n',
		langs			: 'Ngôn ng?',
		moreSuggestions	: '?? xu?t thêm',
		ignore			: 'B? qua',
		ignoreAll		: 'B? qua t?t c?',
		addWord			: 'Thêm t?',
		emptyDic		: 'Tên c?a t? ?i?n không ???c ?? tr?ng.',

		optionsTab		: 'Tùy ch?n',
		allCaps			: 'Không phân bi?t ch? HOA ch? th??ng',
		ignoreDomainNames : 'B? qua tên mi?n',
		mixedCase		: 'Không phân bi?t lo?i ch?',
		mixedWithDigits	: 'Không phân bi?t ch? và s?',

		languagesTab	: 'Tab ngôn ng?',

		dictionariesTab	: 'T? ?i?n',
		dic_field_name	: 'Tên t? ?i?n',
		dic_create		: 'T?o',
		dic_restore		: 'Ph?c h?i',
		dic_delete		: 'Xóa',
		dic_rename		: 'Thay tên',
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type its name and click the Restore button.', // MISSING

		aboutTab		: 'Thông tin'
	},

	about :
	{
		title		: 'Thông tin v? CKEditor',
		dlgTitle	: 'Thông tin v? CKEditor',
		moreInfo	: 'Vui lòng ghé th?m trang web c?a chúng tôi ?? có thông tin v? gi?y phép:',
		copy		: 'B?n quy?n &copy; $1. Gi? toàn quy?n.'
	},

	maximize : 'Phóng to t?i ?a',
	minimize : 'Thu nh?',

	fakeobjects :
	{
		anchor		: '?i?m neo',
		flash		: 'Flash',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: '??i t??ng không rõ ràng'
	},

	resize : 'Kéo rê ?? thay ??i kích c?',

	colordialog :
	{
		title		: 'Ch?n màu',
		options	:	'Color Options', // MISSING
		highlight	: 'Màu ch?n',
		selected	: 'Màu ?ã ch?n',
		clear		: 'Xóa b?'
	},

	toolbarCollapse	: 'Thu g?n thanh công c?',
	toolbarExpand	: 'M? r?ng thnah công c?',

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	}
};
