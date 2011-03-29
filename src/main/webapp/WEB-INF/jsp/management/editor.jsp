<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html dir="ltr">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<title>Editor</title>
<link
	href="http://www.blogger.com/static/v1/v-css/2159828906-app_common_head_content.css"
	rel="stylesheet" type="text/css">
<style type="text/css">
</style>

<link
	href="http://www.blogger.com/static/v1/v-css/3564466600-trogedit_bundle.css"
	rel="stylesheet" type="text/css">
<script type="text/javascript">
	document
			.write("\x3cstyle type\x3d\x22text/css\x22\x3e\n      \n      \n        #enclosures { display:none; }\n        #hideEnclosuresLink { display:none; }\n\n        \n          #showEnclosuresLink { display:none; }\n        \n      \n\n      #new-enclosure-row { display:none; }\n    \x3c/style\x3e");
</script>
<script type="text/javascript">
	(function() {
		var a = window;
		function c(b) {
			this.t = {};
			this.tick = function(d, i, e) {
				e = e != undefined ? e : (new Date).getTime();
				this.t[d] = [ e, i ]
			};
			this.tick("start", null, b)
		}
		var f = new c;
		a.jstiming = {
			Timer : c,
			load : f
		};
		try {
			var g = null;
			if (a.chrome && a.chrome.csi)
				g = Math.floor(a.chrome.csi().pageT);
			if (g == null)
				if (a.gtbExternal)
					g = a.gtbExternal.pageT();
			if (g == null)
				if (a.external)
					g = a.external.pageT;
			if (g)
				a.jstiming.pt = g
		} catch (h) {
		}
		;
		a.tickAboveFold = function(b) {
			var d = 0;
			if (b.offsetParent) {
				do
					d += b.offsetTop;
				while (b = b.offsetParent)
			}
			b = d;
			b <= 750 && a.jstiming.load.tick("aft")
		};
		var j = false;
		function k() {
			if (!j) {
				j = true;
				a.jstiming.load.tick("firstScrollTime")
			}
		}
		a.addEventListener ? a.addEventListener("scroll", k, false) : a
				.attachEvent("onscroll", k);
	})();
</script>
</head>
<body id="posting" class="editorPage lang_en" unselectable="on">
	<script type="text/javascript" src="http://www.google.com/ig/ifpc.js"></script>
	<script type="text/javascript">
		if (!window['google']) {
			window['google'] = {};
		}
		if (!window['dict_api']) {
			window['dict_api'] = {};
		}
	</script>
	<div id="body">
		<form action="/post-create.do" method="POST" name="postingForm"
			id="postingForm">
			<input type="hidden" name="security_token"
				value="AOuZoY7pO3Z5djW2cu1ilzhe5ydCz9ZtRg:1301124835901"><input
				type="hidden" name="blogID" value="7745840761108268253"> <input
				type="hidden" name="postID" id="postID" value=""> <input
				type="hidden" name="status" value="DRAFT">

			<script type="text/javascript">
				document
						.write("\x3cinput type\x3d\x22hidden\x22 name\x3d\x22javascriptEnabled\x22 value\x3d\x22true\x22\x3e");
			</script>
			<noscript>
				<input type="hidden" name="javascriptEnabled" value="false">
			</noscript>
			<div id="postingEditor" class="editor">
				<div class="state htmlMode composeModeNotAvailable">
					<table class="postFields">
						<tr>
							<th><label for="postingTitleField">Title:</label>
							</th>
							<td><div id="titleErrorBox" class="errorbox-good">
									<input type="text" name="title" value=""
										class="titleField textField" id="postingTitleField" size="60">
								</div>
								<div class="errormsg-group" id="titleErrorMessage"></div>
							</td>
						</tr>
					</table>

					<input type="hidden" name="previewUrl" id="previewUrl" value="">
					<input type="hidden" name="previewSaving" id="previewSaving"
						value="false"> <input type="hidden"
						name="editorModeDefault" value="1" class="editorModeField">
					<input type="hidden" name="editorHeightDefault" value=""
						class="editorHeightField">
					<div class="editorHolder">
						<div class="hiddenErrors">
							<div id="securityTokenErrorBox" class="errorbox-good">
								<input name="securityToken" type="hidden"
									value="APq4FmDSg81mtZJLaNU_pW4MO0VQieL-vnOohvkbw_923tCN1YEDvnSAleqjkaMC1tsNn1U-r3Jlja6dMplgCxXtc6P0GLH5CecSAHfikHLmCzIQNHP_ITY=">

								<div class="errormsg-group" id="securityTokenErrorMessage"></div>
							</div>
							<div id="statusErrorBox" class="errorbox-good">
								<div class="errormsg-group" id="statusErrorMessage"></div>
							</div>
						</div>
						<div class="tabs">
							<a href="javascript:void(0)" class="composeTab"
								id="postingComposeTab">Compose</a> <a href="javascript:void(0)"
								class="htmlTab">Edit HTML</a> <a href="javascript:void(0)"
								class="previewTab">Preview</a>
						</div>
						<div class="main">
							<div class="toolbarHolder" id="toolbarHolder">
								<div class="toolbar composeToolbar" id="postingComposeToolbar"></div>
								<div class="toolbar htmlToolbar" id="postingHtmlToolbar"></div>
							</div>
							<div class="boxesHolder">
								<div class="boxes">
									<div id="postBodyErrorBox" class="errorbox-good">
										<div class="errormsg-group" id="postBodyErrorMessage"></div>

										<div class="r"></div>
									</div>
									<textarea name="postBody" rows="17" cols="47" class="htmlBox"
										id="postingHtmlBox" wrap="soft"></textarea>
									<div class="composeBox" id="postingComposeBox"></div>
									<textarea class="debugRawBox debugBox" id="debugPostingRawBox"
										rows="17" cols="47" wrap="soft" disabled></textarea>

									<textarea class="debugComposeBox debugBox"
										id="debugPostingComposeBox" rows="17" cols="47" wrap="soft"
										disabled></textarea>
								</div>
							</div>
							<table>
								<tr>
									<td><table class="footbar">
											<tr>
												<td rowspan="2" class="optionsToggleCell"><div
														class="optionsToggle" id="postingOptionsToggle"></div>
												</td>
												<th class="labelsFieldHeader"><label
													for="postingLabelsField">Labels:</label>
												</th>
												<td class="labelsFieldCell"><div
														id="postLabelsErrorBox" class="errorbox-good">
														<input type="text" name="postLabels" value=""
															class="labelsField textField" id="postingLabelsField"
															size="23" autocomplete="off">
													</div>
												</td>
												<td class="labelsShowAllCell"></td>
											</tr>
											<tr>
												<td colspan="4"><div class="errormsg-group"
														id="postLabelsErrorMessage"></div>
													<div class="labelsList hidden"></div>
												</td>
											</tr>
										</table></td>
								</tr>
							</table>
						</div>
						<div class="options" id="postingOptions">
							<fieldset class="radio-fieldset">
								<legend>Reader comments</legend>
								<label><input type="radio" name="commentsMode" checked
									value="ON"> Allow</label> <label><input type="radio"
									name="commentsMode" value="HIDE"> Do not allow</label>
							</fieldset>

							<fieldset class="dateControls">
								<legend>
									Post <label for="postDateField">date</label> and <label
										for="postTimeField">time</label>
								</legend>
								<label><input type="radio" name="postDateSet" checked
									value="false" onclick="showOrHideDateFields(false);">
									Automatic</label> <br> <label><input type="radio"
									name="postDateSet" value="true"
									onclick="showOrHideDateFields(true);"> Scheduled at</label>
								<div id="dateTimeFields">
									<div id="postDateErrorBox" class="errorbox-good">
										<input type="text" name="postDate" value="26/03/11" size="10"
											id="postDateField">
									</div>
									<div id="postTimeErrorBox" class="errorbox-good">
										<input type="text" name="postTime" value="00:33" size="10"
											id="postTimeField">
									</div>
									<div class="errormsg-group" id="postDateErrorMessage"></div>

									<div class="errormsg-group" id="postTimeErrorMessage"></div>
								</div>
							</fieldset>
							<div class="r"></div>
							<fieldset class="radio-fieldset editHtmlFormatControls">
								<legend>Edit HTML Line Breaks</legend>
								<label><input type="radio" name="editHtmlLineBreaks"
									checked value="true"> Press &quot;Enter&quot; for line
									breaks</label> <label><input type="radio"
									name="editHtmlLineBreaks" value="false"> Use <code>&lt;br
										/&gt;</code> tags</label>
							</fieldset>
							<fieldset class="radio-fieldset composeFormatControls">
								<legend>Compose Settings</legend>

								<label><input type="radio" name="composeAcceptsHtml"
									value="true"> Interpret typed HTML</label> <label><input
									type="radio" name="composeAcceptsHtml" checked value="false">
									Show HTML literally</label>
							</fieldset>
						</div>

						<div id="videoStatus" style="display: none;">
							<img src="/img/spinner_white_tiny.gif" alt=""> <span
								id="videoUploadingText" class="videoStatusText">Uploading
								Video... <span id="videoUploadProgress"></span> <a href="#"
								onclick="EDITOR.cancelAllVideoUploads(); return false;">Cancel</a>
								<br> <span id="videoUploadingHelpText"
								class="videoStatusHelpText">You can continue to edit your
									post during upload, but can't close this window or publish
									until it's finished.</span>
							</span> <span id="videoProcessingText" class="videoStatusText"
								style="display: none;">Processing Video... <a href="#"
								onclick="EDITOR.cancelAllVideoUploads(); return false;">Cancel</a>

								<br> <span id="videoProcessingHelpText"
								class="videoStatusHelpText">You can save your post and
									return to publish when processing is complete.</span>
							</span>
							<div class="r"></div>
						</div>

						<div id="submitButtons">
							<div class="cssButtonSize-small cssButtonSide-left" dir="ltr">
								<div class="cssButtonColor-orange">
									<script type="text/javascript">
										document
												.write("\x3ca id\x3d\x22publishButton\x22 class\x3d\x22cssButton\x22 href\x3d\x22javascript:void(0)\x22 target\x3d\x22\x22 onclick\x3d\x22if (this.className.indexOf(\x26quot;ubtn-disabled\x26quot;) \x3d\x3d -1) {var e \x3d document[\x26#39;postingForm\x26#39;].publish;(e.length) ? e[0].click() : e.click(); if (window.event) window.event.cancelBubble \x3d true; return false;}\x22\x3e\x3cdiv class\x3d\x22cssButtonOuter\x22\x3e\x3cdiv class\x3d\x22cssButtonMiddle\x22\x3e\x3cdiv class\x3d\x22cssButtonInner\x22\x3ePublish Post\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e");
									</script>
									<script type="text/javascript">
										document
												.write("\x3cinput type\x3d\x22submit\x22 id\x3d\x22publishButton-hidden\x22 name\x3d\x22publish\x22 value\x3d\x22Publish Post\x22 tabindex\x3d\x22-1\x22 style\x3d\x22position:absolute; display:block; width:0; padding:0;                z-index:-1; border:none; top:-5000px; left:-5000px\x22\x3e");
									</script>
									<noscript>
										<input type="submit" id="publishButton-ns"
											class="ubtn ubtn-block" name="publish" tabindex="0"
											value="Publish Post">
									</noscript>
								</div>
							</div>
							<div class="cssButtonSize-small cssButtonSide-left" dir="ltr">
								<div class="cssButtonColor-blue">
									<script type="text/javascript">
										document
												.write("\x3ca id\x3d\x22draftButton\x22 class\x3d\x22cssButton\x22 href\x3d\x22javascript:void(0)\x22 target\x3d\x22\x22 onclick\x3d\x22if (this.className.indexOf(\x26quot;ubtn-disabled\x26quot;) \x3d\x3d -1) {var e \x3d document[\x26#39;postingForm\x26#39;].saveDraft;(e.length) ? e[0].click() : e.click(); if (window.event) window.event.cancelBubble \x3d true; return false;}\x22\x3e\x3cdiv class\x3d\x22cssButtonOuter\x22\x3e\x3cdiv class\x3d\x22cssButtonMiddle\x22\x3e\x3cdiv class\x3d\x22cssButtonInner\x22\x3eSave as Draft\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e");
									</script>
									<script type="text/javascript">
										document
												.write("\x3cinput type\x3d\x22submit\x22 id\x3d\x22draftButton-hidden\x22 name\x3d\x22saveDraft\x22 value\x3d\x22Save as Draft\x22 tabindex\x3d\x22-1\x22 style\x3d\x22position:absolute; display:block; width:0; padding:0;                z-index:-1; border:none; top:-5000px; left:-5000px\x22\x3e");
									</script>
									<noscript>
										<input type="submit" id="draftButton-ns"
											class="ubtn ubtn-block" name="saveDraft" tabindex="0"
											value="Save as Draft">
									</noscript>
								</div>
							</div>

							<div class="cssButtonSize-small cssButtonSide-left">
								<div class="cssButtonColor-blue">
									<script type="text/javascript">
										document
												.write("\x3ca id\x3d\x22previewButton\x22 class\x3d\x22cssButton\x22 href\x3d\x22javascript:void(0)\x22 target\x3d\x22\x22 onclick\x3d\x22void(0);\x22\x3e\x3cdiv class\x3d\x22cssButtonOuter\x22\x3e\x3cdiv class\x3d\x22cssButtonMiddle\x22\x3e\x3cdiv class\x3d\x22cssButtonInner\x22\x3ePreview\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e");
									</script>
								</div>
							</div>
							<div id="statusMessage"></div>
						</div>
						<div id="postListLink">
							<a href="/posts.g?blogID=7745840761108268253">Return to list
								of posts</a>
						</div>
						<div class="r"></div>
					</div>
				</div>
			</div>
			<input type="hidden" name="returnToOldEditor" value="false">
		</form>
	</div>

	<script type="text/javascript">
		document.getElementById('postingHtmlBox').style.visibility = 'hidden';
	</script>
	<script type="text/javascript"
		src="http://www.blogger.com/static/v1/jsbin/1314405443-ed_en-GB.js"></script>

	<script type="text/javascript">
		function createEditor() {
			var editorDiv = $("postingEditor");
			var postingForm = $('postingForm');
			var transliterationSettings = {
				enabled : false,
				language : "",
				securityToken : "mTCKNZ5TNZr8AwsyJTCtJff-3JE:-yL5IhXzxznBDC35r9nmFcbNoNo"
			};
			var editor = new BLOG_PostEditor(editorDiv, postingForm, 'en_GB',
					false, false, transliterationSettings, true, true);

			BLOG_listenOnce(window, 'load', function() {
				var publishButton = $('publishButton');
				var draftButton = $('draftButton');
				var statusMessage = $('statusMessage');
				var labels = [];

				var uiFeatures = {
					AUTO_RESIZING : true,
					YOUTUBE_SEARCH : true,
					PICASA_PHOTOS : true,
					MY_YOUTUBE : true,
					SPELL_CHECKER : true,
					ACCURATE_PREVIEW : true,
					VIDEO_PICKER : true,
					IMAGE_CAPTIONS : true,
					PHOTO_PALETTE : true,
					IMAGE_PLUGIN_IN_EDIT_HTML : true,
					TRANSLIT_V2 : true
				};

				var ajaxController = null;

				ajaxController = new BLOG_AjaxController(postingForm);

				editor.initUi(publishButton, draftButton, statusMessage,
						labels, ajaxController, postingForm, uiFeatures);

				editor.initHtmlMode(uiFeatures);
				initComposeMode(editor, uiFeatures);

				showOrHideDateFields(false);

			});

			return editor;
		}

		function initComposeMode(editor, uiFeatures) {

			var titleField = $('postingTitleField');
			if (titleField) {
				titleField.focus();
			}
			var composeModeLoaded = editor.initComposeMode(window, uiFeatures,
					"/e/picker", true);

			if (composeModeLoaded) {

				editor.initPicker("5580195443991098545", "7745840761108268253");

				var postingForm = document.getElementById('postingForm');
				postingForm.onsubmit = function() {
					editor.moveComposeToHtml();
				};

			} else {
				var composeTab = document.getElementById('postingComposeTab');
				composeTab.onclick = function() {

					alert("We\x27re sorry. Unfortunately, we do not support Compose mode for your current browser. You will need a recent version of Firefox, Internet Explorer or Safari.");
					return false;
				};
			}

			document.getElementById('postingHtmlBox').style.visibility = '';
		}

		function returnToOldEditor() {
			document['postingForm'].returnToOldEditor.value = 'true';
			document['postingForm'].submit();
			// If submit was aborted by the user because they hadn't saved, this
			// will reset the returnToOldEditor field.
			document['postingForm'].returnToOldEditor.value = 'false';
		}

		function showOrHideDateFields(show) {
			var dateTimeFields = document.getElementById('dateTimeFields');
			dateTimeFields.style.display = show ? 'block' : 'none';
		}

		function BLOG_startProcessing(contentId) {
			EDITOR.resumeVideoProcessing(contentId);
		}

		BLOG_EditorResources.setBaseAppUrl("http://www.blogger.com");

		var form = document.getElementById('postingForm');

		var EDITOR = createEditor();

		var FORMGUARD = new BLOG_FormGuard(form);

		FORMGUARD.setUnguardedInputs([ 'securityToken', 'postID', 'status',
				'previewUrl', 'previewMode' ]);
	</script>

	<script type="text/javascript">
		BLOG_initCsi('trogedit_editor');
	</script>
</body>
</html>