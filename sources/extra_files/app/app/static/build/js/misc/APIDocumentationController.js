var modernPaste={misc:{}};modernPaste.misc.APIDocumentationController=function(){this.apiListing=$(".api-listing");this.apiDocumentation=$(".api-documentation-container");hljs.initHighlightingOnLoad();modernPaste.misc.APIDocumentationController.toggleApiListingVisibility.bind(this)();$("a").on("click",modernPaste.misc.APIDocumentationController.animateAnchorJump);$(window).on("scroll",modernPaste.misc.APIDocumentationController.lockApiListing.bind(this));$(window).on("resize",modernPaste.misc.APIDocumentationController.toggleApiListingVisibility.bind(this))};
modernPaste.misc.APIDocumentationController.toggleApiListingVisibility=function(){1400<(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)?this.apiListing.show():this.apiListing.hide()};modernPaste.misc.APIDocumentationController.animateAnchorJump=function(){$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},{duration:700,easing:"easeOutQuint"})};
modernPaste.misc.APIDocumentationController.lockApiListing=function(){$(window).scrollTop()>this.apiDocumentation.offset().top-140?this.apiListing.addClass("stick"):this.apiListing.removeClass("stick")};$(document).ready(function(){new modernPaste.misc.APIDocumentationController});modernPaste.universal={};modernPaste.universal.AlertController=function(){modernPaste.universal.AlertController.ALERT_TYPE_SUCCESS="alert_type_success";modernPaste.universal.AlertController.ALERT_TYPE_FAILURE="alert_type_failure"};
modernPaste.universal.AlertController.displayAlert=function(a,b){this.alertContainer=$("#alert");this.alertMessage=this.alertContainer.find(".alert-message");this.alertTitle=this.alertContainer.find(".alert-title");this.alertContainer.removeClass();a===this.ALERT_TYPE_SUCCESS?(this.alertTitle.text(""),this.alertContainer.addClass("alert-success")):a===this.ALERT_TYPE_FAILURE&&(this.alertTitle.text("There was an error processing your request."),this.alertContainer.addClass("alert-error"));this.alertMessage.text(b);
this.alertContainer.css("visibility","visible");this.alertContainer.css("opacity",.8);setTimeout(function(){this.alertContainer.css("opacity",0);setTimeout(function(){this.alertContainer.css("visibility","hidden")}.bind(this),600)}.bind(this),4E3)};modernPaste.universal.AlertController.displaySuccessAlert=function(a){modernPaste.universal.AlertController.displayAlert(modernPaste.universal.AlertController.ALERT_TYPE_SUCCESS,a)};
modernPaste.universal.AlertController.displayErrorAlert=function(a){modernPaste.universal.AlertController.displayAlert(modernPaste.universal.AlertController.ALERT_TYPE_FAILURE,a)};modernPaste.universal.AlertController.selectErrorMessage=function(a,b){return void 0===a.responseJSON||void 0===a.responseJSON.failure?"There was an internal server-side error. Please try again later.":b.hasOwnProperty(a.responseJSON.failure)?b[a.responseJSON.failure]:"There was an internal server-side error. Please try again later."};
$(document).ready(function(){new modernPaste.universal.AlertController});modernPaste.universal.CommonController=function(){};
modernPaste.universal.CommonController.unixTimestampToRelativeTime=function(a){var b=function(a,b){return 1===b?a:a+"s"};a=new Date(1E3*parseInt(a,10));a=(new Date-a)/1E3;var c=a/60,e=c/60,d=e/24,f=d/30,g=f/12;return 1<=g?Math.round(g)+b(" year",Math.round(g))+" ago":1<=f?Math.round(f)+b(" month",Math.round(f))+" ago":1<=d?Math.round(d)+b(" day",Math.round(d))+" ago":1<=e?Math.round(e)+b(" hour",Math.round(e))+" ago":1<=c?Math.round(c)+b(" minute",Math.round(c))+" ago":Math.round(a)+b(" second",Math.round(a))+
" ago"};modernPaste.universal.CommonController.truncateText=function(a,b){return a.length>b?a.substring(0,b)+"...":a};modernPaste.universal.CommonController.getFileExtensionForType=function(a){var b={text:".txt",coffeescript:".coffee",css:".css",htmlmixed:".html",javascript:".js",jinja2:".html",markdown:".md",php:".php",python:".py",sass:".scss",sql:".sql",verilog:".v",yaml:".yml"},c="";b.hasOwnProperty(a.toLowerCase())&&(c=b[a.toLowerCase()]);return c};
modernPaste.universal.CommonController.formatFileSize=function(a,b){void 0===b&&(b=2);var c=a/1E3,e=c/1E3,d=e/1E3;return 1<=d?d.toFixed(b)+" GB":1<=e?e.toFixed(b)+" MB":1<=c?c.toFixed(b)+" KB":a.toFixed(b)+" B"};modernPaste.universal.CommonController.escapeSelector=function(a){return a.replace(/(:|\.|\[|\]|,)/g,"\\$1")};$(document).ready(function(){new modernPaste.universal.CommonController});modernPaste.universal.MenuController=function(){this.menuToggleButton=$("#header").find(".container .menu-button");this.menuPanel=$("#menu-panel");this.pageHeader=$("#header");this.pageFooter=$("#footer");this.mainPage=$("#main-page");this.userHeader=$("#header").find(".user-section .user-header");this.userHeaderDropdown=$("#user-header-dropdown");this.openSourceNote=this.menuPanel.find(".open-source-note");this.menuToggleButton.on("click",modernPaste.universal.MenuController.handleMenuToggleButtonClick.bind(this));
$("html").on("click",modernPaste.universal.MenuController.handleWindowClick.bind(this));$(window).on("resize",modernPaste.universal.MenuController.toggleOpenSourceNoteVisibility.bind(this))};modernPaste.universal.MenuController.toggleOpenSourceNoteVisibility=function(){500<(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)?this.openSourceNote.show():this.openSourceNote.hide()};
modernPaste.universal.MenuController.handleWindowClick=function(a){modernPaste.universal.MenuController.isMenuPanelVisible.bind(this)()&&this.menuPanel[0]!==$(a.target)[0]&&0===this.menuPanel.has($(a.target)).length&&modernPaste.universal.MenuController.hideMenuPanel.bind(this)()};
modernPaste.universal.MenuController.handleMenuToggleButtonClick=function(a){a.preventDefault();modernPaste.universal.MenuController.isMenuPanelVisible.bind(this)()?modernPaste.universal.MenuController.hideMenuPanel.bind(this)():modernPaste.universal.MenuController.showMenuPanel.bind(this)()};
modernPaste.universal.MenuController.hideMenuPanel=function(){this.menuToggleButton.fadeOut(function(){$(this).attr("class","fa fa-bars fa-large menu-button");$(this).fadeIn()});this.menuPanel.css("margin-left","-310px");this.pageHeader.css("margin-left","0");this.mainPage.css("margin-left","0");0<this.pageFooter.length&&this.pageFooter.css("margin-left","0")};
modernPaste.universal.MenuController.showMenuPanel=function(){this.userHeaderDropdown.is(":visible")&&this.userHeader.click();this.menuToggleButton.fadeOut(function(){$(this).attr("class","fa fa-times menu-button");$(this).fadeIn()});this.menuPanel.css("margin-left","0");this.pageHeader.css("margin-left","310px");this.mainPage.css("margin-left","310px");0<this.pageFooter.length&&this.pageFooter.css("margin-left","310px")};
modernPaste.universal.MenuController.isMenuPanelVisible=function(){return"0"===this.menuPanel.css("margin-left")||"0px"===this.menuPanel.css("margin-left")};$(document).ready(function(){new modernPaste.universal.MenuController});modernPaste.universal.SplashController=function(){Pace.options={ajax:!1};this.loadingSplash=$("#loading-splash");Pace.on("done",modernPaste.universal.SplashController.hideLoadingSplash.bind(this))};modernPaste.universal.SplashController.showSplash=function(a){a.css("visibility","visible");a.css("opacity",.6)};modernPaste.universal.SplashController.hideSplash=function(a){a.css("opacity",0);setTimeout(function(){a.css("visibility","hidden")}.bind(this),600)};
modernPaste.universal.SplashController.hideLoadingSplash=function(){modernPaste.universal.SplashController.hideSplash(this.loadingSplash)};$(document).ready(function(){new modernPaste.universal.SplashController});modernPaste.universal.URIController=function(){var a=$("#uris");modernPaste.universal.URIController.uris={};for(var b=0;b<a.children().length;b++){var c=$(a.children()[b]);modernPaste.universal.URIController.uris[c.attr("id")]=c.text()}};modernPaste.universal.URIController.formatURI=function(a,b){var c=a,e=[],d;for(d in b)b.hasOwnProperty(d)&&(0<a.indexOf("<"+d+">")?c=c.split("<"+d+">").join(b[d]):e.push(d+"="+b[d]));return 0<e.length?c+"?"+e.join("&"):c};
modernPaste.universal.URIController.getURLParameters=function(){for(var a=document.location.search.split("+").join(" "),b={},c,e=/[?&]?([^=]+)=([^&]*)/g;c=e.exec(a);)b[decodeURIComponent(c[1])]=decodeURIComponent(c[2]);return b};$(document).ready(function(){new modernPaste.universal.URIController});modernPaste.universal.UserHeaderController=function(){this.userHeader=$("#header").find(".user-section .user-header");this.userMenuArrow=this.userHeader.find(".user-menu-arrow");this.userHeaderDropdown=$("#user-header-dropdown");this.userHeader.on("click",modernPaste.universal.UserHeaderController.toggleDropdownVisibility.bind(this))};
modernPaste.universal.UserHeaderController.toggleDropdownVisibility=function(a){a.preventDefault();this.userHeaderDropdown.is(":visible")?(this.userMenuArrow.css("transform","rotate(90deg)"),this.userHeaderDropdown.slideUp({duration:600,easing:"easeOutQuint"})):(this.userMenuArrow.css("transform","rotate(-90deg)"),this.userHeaderDropdown.slideDown({duration:600,easing:"easeOutQuint"}))};$(document).ready(function(){new modernPaste.universal.UserHeaderController});
