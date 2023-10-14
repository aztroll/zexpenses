/**salesiq for cn start**/

/**salesiq for cn end**/

/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */ 

/* Common JS */

var getDomain = document.domain;
var splitUrl = getDomain.split('.');
var domainOne = splitUrl.pop();
var Zdomain = splitUrl.pop();
var productName = 'home';
var currentUrlLang = '';
var langsrc = "/";
var _lhref = window.location.href;
var DCoption = '';
var dcdomainOne = domainOne;
var dcVal = '0';
var currentYear = '2023';
var _preZ = 'p' + 'r' + 'e' + 'z' + 'o' + 'h' + 'o' + '.' + 'z' + 'o' + 'h' + 'o' + '.com';
var isMobile = /iPhone|iPad|iPod|Android|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
var _com = 'com',
    _es = 'xl';
var langArr = ['en', 'es-xl', 'pt-br', 'de', 'fr', 'jp', 'nl', 'ar', 'id', 'th'];
var onlylocal = ['zh-hans', 'vi', 'ko', 'it', 'ru', 'tr'];
var lancountry = {
    "en": "English",
    "fr": "FranÃ§ais",
    "de": "Deutsch",
    "es-xl": "Español (Latinoamérica)",
    "pt-br": "PortuguÃªs (Brasil)",
    "jp": "æ—¥æœ¬èªž",
    "nl": "Nederlands",
    "zh-hans": "ç®€ä½“ä¸­æ–‡",
    "id": "Bahasa Indonesia",
    "th": "à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
    "ar": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    "vi": "Tiáº¿ng Viá»‡t",
    "ko": "í•œêµ­ì–´",
    "it": "Italiano",
    "ru": "Ð ÑƒÑÑÐºÐ¸Ð¹",
    "tr": "TÃ¼rkÃ§e"
};

for (var i = 0; i < onlylocal.length; i++) {
    langArr.push(onlylocal[i]);
}

var customvar = {
    htmlencode: function(str) {
        var buf = [];
        for (var i = str.length - 1; i >= 0; i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return buf.join('');
    },
    htmldecode: function(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    },
	host: window.location.hostname,
    productName: '',
	lsoval : '',
    absurl: window.location.origin+window.location.pathname,
    findproduct: function () {
        if(customvar.host.indexOf('www.orchestly') > -1){
            customvar.productName = "zohoorchestly";
        }else if(_lhref.indexOf('mdm-cloud.html') > 0){ 
            customvar.productName = 'Mobile Device Management';
        }else if(_lhref.indexOf('bigin.'+domainOne) > 0){ 
            customvar.productName = 'bigin';
        }else if(window.location.href.indexOf('analytics-plus/plugin/') > 0){
            customvar.productName = 'analyticsplusplugin';
        }else{
            var arr1 = window.location.pathname.split('/'),
                arr = [];
            for (var i = 0; i < arr1.length; i++) { if (arr1[i] != '') { arr.push(arr1[i]) } }
            a: for (var i = 0; i < arr.length; i++) {
                if (allProductlowerCase.indexOf(arr[i]) > -1) {
                    if (arr[i + 1] == 'crmplus') {
                        customvar.productName = 'crmplus';
                    } else {
                        customvar.productName = arr[i];
                    }
                    break a;
                }
            }
        }
        (customvar.productName == 'analytics-plus') ? (customvar.productName = 'analyticsplus') : '';
        (customvar.productName == '') ?  (customvar.productName = 'home') : ''; 
    },
    countryEu: ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IM", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "GG", "JE", "XK", "SJ", "CS", "UK"],
    countryApac: ['AU','BD','BT','IO','BN','KH','CN','FJ','HK','IN','ID','JP','KP','KR','LA','MO','MY','MV','MN','MM','NP','NZ','PK','PG','PH','SG','LK','TW','TH','TL','VN'],
	lAmerica: ['BZ', 'CR', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'CU', 'DO', 'HT', 'PR', 'BL', 'MF'],
    countryTranstasman: ['AU', 'NZ'],
    noteuinarr: [
        ['dataprep', 'learn','identity-management', 'log360-cloud', 'catalyst', 'it-management'],
        ['dataprep', 'contactmanager', 'learn','identity-management', 'log360-cloud', 'catalyst', 'lens', 'it-management'],
        ['dataprep', 'contactmanager', 'learn','identity-management', 'log360-cloud', 'peopleplus', 'catalyst', 'lens', 'it-management']
    ],
	dcreset: function () {
        if (typeof CountryCode != 'undefined') {
            if (CountryCode == 'IN') {
                dcdomainOne = 'in';
                if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            }else if (CountryCode == 'CN' && customvar.cnarr.indexOf(customvar.productName) > -1) {
                dcdomainOne = domainOne;
            } else if (customvar.countryEu.indexOf(CountryCode) > -1) {
                dcdomainOne = 'eu';
                if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            } else if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
                dcdomainOne = 'com.au';
                if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            } else {
                dcdomainOne = 'com';
            }
            if (Zdomain == 'local' + 'zoho') {
                dcdomainOne = 'com';
                onlycom = true;
            }
        } else {
            //console.log('CountryCode undefined');
        }
    }
}

customvar.dcreset();
customvar.findproduct();

var dcenabled = true;
var nondc = true;

if (Zdomain == 'local' + 'zoho' || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false;
}

if (typeof skipInfoCallPrdCommon != 'undefined') {
	if(skipInfoCallPrdCommon){
		dcenabled = false;
        nondc = false;
	}
}


var infoElm = document.createElement('script');
var avoideinfoload = _lhref.indexOf('zgs=1') < 0;
/*
(window.location.host == (_locaZ) || window.location.host == 'zcms.zohocorp.com') ? langArr.push('zh-hans', 'id', 'th', 'nl') : '';
(($('body').hasClass('node-type-zoho-home') || window.location.href.indexOf('/crm/') > 0 || window.location.href.indexOf('/crmplus/') > 0 || window.location.href.indexOf('/one/') > 0 || window.location.href.indexOf('/people/') > 0 || window.location.href.indexOf('/workplace/') > 0 || window.location.href.indexOf('/mail/') > 0) && (window.location.host == (_locaZ) || window.location.host == 'zcms.zohocorp.com')) ? langArr.push('ar') : '';*/

var apiElm = document.createElement("link");
apiElm.setAttribute("rel", "stylesheet")
apiElm.setAttribute("type", "text/css")
apiElm.setAttribute("href", "/css/global-cvs.css")
document.getElementsByTagName("head")[0].appendChild(apiElm);

$('body').prepend('<div class="ztopstrip-container"></div>');


// TLS code start
$.getJSON("https://tlstest.zoho.com/api", function(data) {
    if (data.status != '200') {
        $('.ztopstrip-container').prepend('<div class="tls-infostrip"> <p>Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services.<a target="_blank" href="https://www.zoho.' + domainOne + '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>');
        $('.zclosestrip.tlsClose').on('click', function(e) {
            $('.tls-infostrip').remove();
        });
    }
});

// TLS code end

function decodeHexString(str) {
    str = str.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    str = str.replace(/\\u([\d\w]{4})/gi, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    return str;
}

var RegionName, CountryName, IPAddress, CountryCode;

function ipCallBack(ipData) {
    CountryCode = ipData.COUNTRY_CODE;
    CountryName = ipData.COUNTRY_NAME;
    RegionName = ipData.REGION;
    if (typeof ipData.IP_ADDRESS != "undefined") {
        IPAddress = ipData.IP_ADDRESS;
    }
	
	if(avoideinfoload){
		if (dcenabled && nondc) {
			var _infocount = 0;
			var errorCount = 0;
			for (var i = 0; i < customvar.domainArr[0].length; i++) {
				var infoElm = document.createElement('script');
				infoElm.className = "infoload";
				//infoElm.src = "https://accounts." + Zdomain + "." + customvar.domainArr[0][i] + "/u/info";
                infoElm.src = "https://accounts.zoho.com.cn/u/info";
				document.getElementsByTagName('head')[0].appendChild(infoElm);
				$(infoElm).on('load', function () {
					_infocount++;
					if (typeof zohouser.DC_INFO != 'undefined') {
						(zohouser.DC_INFO == 'cn') ? customvar.domainArr[1].push('com.cn') : (zohouser.DC_INFO == 'au') ? customvar.domainArr[1].push('com.au') : customvar.domainArr[1].push(zohouser.DC_INFO);
						if (zohouser.DC_INFO == 'in' && customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
							hidelogin = 1;
						}else if (zohouser.DC_INFO == 'eu' && customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
							hidelogin = 1;
						}else if (zohouser.DC_INFO == 'au' && customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
							hidelogin = 1;
						}
						if (customvar.domainArr[0].length == $('.infoload').length) {
							$('script.infoload').remove();
							if (customvar.domainArr[1][0] == 'us') {
								dcdomainOne = 'com';
							} else {
								dcdomainOne = customvar.domainArr[1][0];
                            }
                            resetUrl(customvar.productName);
							var infoElm = document.createElement('script');
							infoElm.className = "infoload";
							infoElm.src = "https://accounts.zoho.com.cn/u/info";
							document.getElementsByTagName('head')[0].appendChild(infoElm);
							infoElm.onload = geturL;
						}
					}
					if (_infocount == $('.infoload').length && customvar.domainArr[1].length == 0) {
						if (typeof CountryCode != 'undefined') {
							if (CountryCode == 'IN') {
								dcdomainOne = 'in';
								if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
									dcdomainOne = 'com';
								}
							} else if (customvar.countryEu.indexOf(CountryCode) > -1) {
								dcdomainOne = 'eu';
								if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
									dcdomainOne = 'com';
								}
							}else if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
								dcdomainOne = 'com.au';
								if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
									dcdomainOne = 'com';
								}
							} else {
								dcdomainOne = 'com';
							}
                        }
                        resetUrl(customvar.productName);
						geturL();
						//logindDetailedFroAll();
					}
				});
				$(infoElm).on('error', function(){
					errorCount++;
					//if(errorCount >= customvar.domainArr[0].length){
						//console.log('accounts failed');
                        //logindDetailedFroAll();
                        resetUrl(customvar.productName);
						geturL();
					//}
				});
			}
		}else{
            $(window).load(function() {
                if (typeof zohouser != 'undefined') {
                    if (typeof zohouser.DC_INFO != 'undefined') {
                        dcdomainOne = (zohouser.DC_INFO == 'cn') ? 'com.cn' : (zohouser.DC_INFO == 'au') ? 'com.au' : zohouser.DC_INFO;
                        if(dcdomainOne == 'us'){
                            dcdomainOne = 'com';
                        }
                        resetUrl(customvar.productName);
                        geturL();
                    }
                }
            });
        }
	}
}

function findeLanguage() {
    var lVal = '';
    langArr.forEach(function(index) {
        if (window.location.href.split('/').indexOf(index) > -1) {
            lVal = index;
        }
    });
    currentUrlLang = lVal;
    (currentUrlLang != '') ? (langsrc = '/' + currentUrlLang + '/') : '';
    if (lVal == 'es-xl') {
        lVal = 'es';
    } else if (lVal == 'pt-br') {
        lVal = 'pt';
    } else if (lVal == 'jp') {
        lVal = 'ja';
    } else if (lVal == 'zh-hans') {
        lVal = 'zh';
    }
    (lVal == 'id') ? (lVal = 'in') : '';
    return lVal;
}

function encodeFun(url) {
    url = decodeURI(url);
    if (url.indexOf('#') > -1) {
        var _length = url.split('#').length,
            _addUrl = '';
        for (var i = 1; i < _length; i++) {
            _addUrl += '#' + url.split('#')[i]
        }
        url = url.split('#')[0] + '' + encodeURI(_addUrl);
    }
    if (url.indexOf('?') > -1) {
        var _length = url.split('?').length,
            _addUrl = '';
        for (var i = 1; i < _length; i++) {
            _addUrl += '?' + url.split('?')[i]
        }
        url = url.split('?')[0] + '' + encodeURI(_addUrl);
    }
    return url;
}
var currentLang = findeLanguage();

var moreproducts = {
    "en": "More products",
    "fr": "Plus de produits",
    "de": "Mehr Produkte",
    "es-xl": "Mas productos",
    "pt-br": "Mais produtos",
    "jp": "ãã®ä»–ã®è£½å“",
    "nl": "Meer producten",
    "zh-hans": "æ›´å¤šäº§å“",
    "id": "Lebih banyak produk",
    "th": "à¸ªà¸´à¸™à¸„à¹‰à¸²à¸­à¸·à¹ˆà¸™ à¹†",
    "ar": "Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª"
};
var allproducts = {
    "en": "All Products",
    "fr": "Tous les produits",
    "de": "Alle Produkte",
    "es-xl": "Todos los productos",
    "pt-br": "Todos os produtos",
    "jp": "ã™ã¹ã¦ã®è£½å“",
    "nl": "Alle producten",
    "zh-hans": "æ‰€æœ‰äº§å“",
    "id": "Semua produk",
    "th": "à¸ªà¸´à¸™à¸„à¹‰à¸²à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
    "ar": "Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª"
};

var moreprd = (currentUrlLang == '') ? moreproducts["en"] : moreproducts[currentUrlLang];
var allprd = (currentUrlLang == '') ? allproducts["en"] : allproducts[currentUrlLang];

function domainCheck() {
    var _Domain = document.domain.split('').splice(0, (document.domain.split('').length - 1)).join('');
    if (document.domain.split('')[document.domain.length - 1] == '.') {
        var newDoaminOne = window.location.href.split(getDomain)[0];
        var newDoaminTwo = window.location.href.split(getDomain)[1];
        var _direction = newDoaminOne + '' + _Domain + '' + newDoaminTwo;
        window.location.href = encodeFun(_direction);
    }
}

function global_getUrlParam(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        } //else{return '';}
    }
    return '';
}

function countrycodecheckfun() {
    var inter = setTimeout(function() {
        if (typeof CountryCode != 'undefined') {
            if (typeof dcOption != 'undefined') {
                if (window.location.href.indexOf('local' + '' + 'zoho') > 0) {
                    //dcOption();
                }
            }
            if (typeof z_add_account_script != 'undefined') {
                z_add_account_script();
            } else if (typeof handleDomain != 'undefined') {
                handleDomain();
            } else if (typeof z_set_account_src != 'undefined') {
                z_set_account_src();
            }
        } else {
            countrycodecheckfun();
        }
    }, 100)
}

domainCheck();

var productArr = ['cliq', 'salesinbox', 'notebook', 'desk', 'reports', 'crmplus', 'writer', 'workplace', 'officeapi', 'developer'];
var servicenamrArr = ['ZohoChat', 'SalesInbox', 'notebook', 'ZohoSupport', 'ZohoReports', 'CRMPlus', 'ZohoWriter', 'VirtualOffice', 'OfficeAPI', 'ZohoCRM'];

function dcOption() {
    if (typeof CountryCode != 'undefined') {
        if (CountryCode == 'IN') {
            dcdomainOne = 'in';
            DCoption = '<div class="zdatacentre get-signup-plan"><div>Choose your preferred data center.</div><input checked="checked" name="dc" id="india-dc-in" value="0" type="radio"><label for="india-dc">India DC</label><input name="dc" id="us-dc-com" value="1" type="radio"><label for="us-dc">US DC</label></div>';
        } else if (countryEu.indexOf(CountryCode) > -1) {
            dcdomainOne = 'eu';
            DCoption = '<div class="zdatacentre get-signup-plan"><div>Choose your preferred data center.</div><input checked="checked" name="dc" id="europe-dc-eu" value="0" type="radio"><label for="europe-dc">Europe DC</label><input name="dc" id="us-dc-com" value="1" type="radio"><label for="us-dc">US DC</label>';
        }
    }
}

function geturL() {
	if(typeof infocallback != 'undefined') {
		 infocallback();
	}
	//console.log('test');
	logedUsername = zohouser.DISPLAY_NAME;
	if (logedUsername) {
		var getcrmPlan = $('.main').find('.pricing-offer');

		if (getcrmPlan.length > 0 && k2 == 'crm') {
			$(".free-plan a").attr('href', 'https://crm.' + k + '.com/').text("Get Started");
			$(".crmplus-plans .trynow").attr('href', 'https://crmplus.zoho.com/');

		}




		var getusername = decodeHexString(zohouser.DISPLAY_NAME);
		/*getusername = encodeURI(getusername)
		getusername = getusername.split('%2520').join(' ');
		getusername = getusername.split('%20').join(' ');*/
		$('.header').addClass('uheader');
		$('.get-started').css({
			'display': 'none'
		});



		// This is for signup page script hide section if user logedin
		var findSignup = $('.main').find('#signupcontainer');
		if (findSignup.length > 0) {
			$(".loggedin-userinfo").append(" <h2 class='username'>Welcome <span id='profile-user-displayname'></span></h2> <a class='access-apps' href=" + $gotoPage + " > " + accessZoho + k2 + "</a>");
			$('.signup-head,.signup-box,.login-text,.product-logo-part').hide();
			$('#profile-user-displayname').text(customvar.htmlencode(getusername) + "!");
		}

		if ($("body").find("main")) {
			$('.main').addClass('umain');
			$(document).trigger('umain-trigger');

			// this is only for crmplus, salesinbox and developer
			if (k2 == 'crmplus' || k2 == 'salesinbox' || k2 == 'developer') {
				if (k2 == 'salesinbox') {
					k2 = 'SalesInbox';
				}
				if (k2 == 'crmplus') {
					k2 = 'CRM Plus';
				}

				var findcrmpMenu = $('body').find('.product-menu');
				if (findcrmpMenu.length > 0) {
					if (k2 == 'developer') {
						$('.product-menu .signin-button,.product-menu .signupButton').hide();
					} else {
						$('.product-menu .spad').hide();
					}
					if (k2 == 'SalesInbox' || k2 == 'developer') {
						var appendAcce = '<li><a class="goto-link" href=' + $gotoPage + '>' + accessZoho + k2 + '</a></li>'
						$('.product-menu').append(appendAcce);
					}
				}
			}
			// End


		}
		var getHref = window.location.href;
		if (k2 == 'crm') {
			k2 = 'CRM';
		} else if (k2 == 'contactmanager') {
			k2 = 'ContactManager';
		} else if (k2 == 'salesiq') {
			k2 = 'SalesIQ';
		} else if (k2 == 'bugtracker') {
			k2 = 'BugTracker';
		} else if (k2 == 'financeplus') {
			k2 = 'Finance Plus';
		} else if (k2 == 'showtime') {
			k2 = 'ShowTime';
		} else if (k2 == 'officeapi') {
			k2 = 'Office API';
		} else if (k2 == 'gst') {
			k2 = 'GST';
		} else if (k2 == 'pagesense') {
			k2 = 'PageSense';
		}
		var logOutUrl = 'https://accounts.zoho.com.cn/logout?serviceurl=' + encodeURI(getHref);

		var insertsignIn = '<div class="userinfo-container"><div class="userinfo-details"><div class="zoho-proinner-container"><span id="userinfo-name">' + getusername + '</span><a class="userinfo-access" href=' + $gotoPage + ' target="_blank">' + accessZoho + k2 + '</a></div><div class="userinfo-avatar"><img src=' + $userAvator + ' alt=' + getusername + ' class="userPho"/></div><div class="account-signout-details"><a target="_blank" class="userinfo-account" href="https://accounts.zoho.com.cn/u/h#home">æˆ‘çš„è´¦æˆ·</a><a id="userinfo-signout" href="#">é€€å‡º</a></div></div></div><a href=' + $gotoPage + ' class="goto-link">' + accessZoho + k2 + '</a>';

		var userAccount = '<div class="zgh-user-box"> <div class="zgh-userPanel"> <img src=' + $userAvator + ' alt=' + getusername + ' class="zgh-userAvatar"> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' + $userAvator + ' alt=' + getusername + '> </li><li class="zgh-userName">' + customvar.htmlencode(getusername) + '</li><li class="zgh-userAccess"> <a href=' + $gotoPage + '></a> </li><li class="zgh-userAccount"> <a href="https://accounts.zoho.com.cn/u/h#home">æˆ‘çš„è´¦æˆ·</a> </li><li class="zgh-userLogout"><a href="' + logOutUrl + '">é€€å‡º</a> </li></ul> </div></div></div>';

		$('.zgh-accounts').html(userAccount);
		$('.zgh-userAccess a').html(accessZoho + ' ' + k2);
		if (window.innerWidth <= 767) {
			$('.product-header-inner').css({
				'overflow': 'visible'
			});
			//$(insertsignIn).insertAfter('.product-header .sub-menu-icon');
			$('#userinfo-signout').attr("href", logOutUrl);
			$('.user-icon').css({
				'display': 'none'
			})
		} else {
			if ($('body').find('.header').length > 0) {
				var headIS = $('body').find('.home-bg');
				if (headIS.length != 1) {
					$('.signing').html('');
					//$('.signing').html(insertsignIn);
					//$('#userinfo-signout').attr("href", logOutUrl);
					setTimeout(function() {
						$('.header').css({
							'overflow': 'visible'
						});
						var m = $('.signing .goto-link').innerWidth();
						var zohoProinner = $('.zoho-proinner-container');
						if (zohoProinner.length > 0) {
							var m1 = zohoProinner.css('padding-left').replace('px', '');
							getWidth = m + parseInt(m1);
						}
					}, 100)
				}
			}
		}
	} else {
		$('.zgh-accounts .zgh-login').css('display', 'inline-block');
		$('.signing .signup,.signing .signin').css({
			'display': 'inline-block'
		});
		$(document).trigger('no-umain-trigger');
	}
	$('.signing > a, .user-icon').css({
		'opacity': '1',
		'visibility': 'visible'
	})
	$('.signing .goto-link').hide();
}


function resetUrl(productName) {
	m = window.location.href;
	m = m.replace("http://www.", '');
	m = m.replace("https://www.", '');
	m = m.replace("http://", '');
	m = m.replace("https://", '');
	k = m.split(".com");
	var getDomain = document.domain;
	var splitUrl = getDomain.split('.');
	var domainOne = splitUrl.pop();
	var Zdomain = splitUrl.pop();
	if (k[1] != null) {
		findEs = k[1].split('/');

		if (productName == 'crm' && findEs.indexOf('es') > -1) {
			accessZoho = 'Accesar Zoho ';
			myAccount = 'Mi Cuenta';
			signOut = 'Salir';
		} else {
			accessZoho = 'è®¿é—® Zoho ';
			myAccount = 'My Account';
			signOut = 'Sign Out';
			(currentUrlLang == 'fr') ? (accessZoho = 'AccÃ©der Ã  Zoho ', myAccount = 'Mon compte', signOut = 'DÃ©connecter') : '';
			(currentUrlLang == 'de') ? (accessZoho = 'Auf Zoho zugreifen ', myAccount = 'Mein Konto', signOut = 'Abmelden') : '';
			(currentUrlLang == 'es-xl') ? (accessZoho = 'Acceder a Zoho ', myAccount = 'Mi cuenta', signOut = 'Cerrar sesiÃ³n') : '';
			(currentUrlLang == 'pt-br') ? (accessZoho = 'Acessar a Zoho ', myAccount = 'Minha conta', signOut = 'Finalizar sessÃ£o') : '';
			(currentUrlLang == 'jp') ? (accessZoho = 'Zoho ', myAccount = '\u30de\u30a4\u30a2\u30ab\u30a6\u30f3\u30c8', signOut = '\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8', japanese = '\u3078\u30a2\u30af\u30bb\u30b9') : '';
		}
	}
	if (k.length > 1) {
		k = k[0];
		k2 = productName;
	} else {
		k2 = '';
	}


	/* thisis for product homepage link url*/
	$gotoPage = '';
	$userAvator = 'https://contacts.' + k + '.com/file?t=user&fs=thumb';
	if (k2 == 'crm' || k2 == 'campaigns' || k2 == 'chat' || k2 == 'salesiq' || k2 == 'mail' || k2 == 'docs' || k2 == 'connect' || k2 == 'support' || k2 == 'desk' || k2 == 'books' || k2 == 'invoice' || k2 == 'subscriptions' || k2 == 'checkout' || k2 == 'expense' || k2 == 'showtime' || k2 == 'forms' || k2 == 'reports' || k2 == 'inventory' || k2 == 'crmplus' || k2 == 'financeplus' || k2 == 'notebook' || k2 == 'developer' || k2 == 'payroll' || k2 == 'cliq' || k2 == 'gst') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne
	} else if (k2 == 'projects' || k2 == 'bugtracker') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/portals.do'
	} else if (k2 == 'people') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/' + k2
	} else if (k2 == 'assist') {
		$gotoPage = 'https://meeting.' + k + '.'+dcdomainOne+'/' + k2
	} else if (k2 == 'survey') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/home.do'
	} else if (k2 == 'sites') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/index'
	} else if (k2 == 'social') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/Home.do'
	} else if (k2 == 'meeting') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/jsp/service-check.jsp?service=meeting'
	} else if (k2 == 'vault') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/online/main'
	} else if (k2 == 'recruit') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/recruit/ShowHomePage.do'
	} else if (k2 == 'creator') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne
	} else if (k2 == 'contactmanager') {
		$gotoPage = 'https://cm.' + k + '.'+dcdomainOne+'/index.do'
	} else if (k2 == 'motivator') {
		$gotoPage = 'https://motivator.' + k + '.'+dcdomainOne+'/home.html'
	} else if (k2 == 'salesinbox') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/' + k2 + '/ShowHomePage.do'
	} else if (k2 == 'workplace') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/'
	} else if (k2 == 'writer') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/documents'
	} else if (k2 == 'officeapi') {
		$gotoPage = 'https://officeapi.' + k + '.'+dcdomainOne
	} else if (k2 == 'sprints') {
		$gotoPage = 'https://' + k2 + '.' + k + '.'+dcdomainOne+'/team.do'
	} else if (k2 == 'show') {
		$gotoPage = 'https://show.zoho.'+dcdomainOne+'/presentations'
	} else {
		k2 = 'Access Zoho Apps';
		accessZoho = '';
		$gotoPage = 'https://home.' + k + '.'+dcdomainOne+'/';
	}

	//https://motivator.zoho.'+dcdomainOne+'/home.html
	var sna = '';
	var loginlink = k2;
	if (productArr.indexOf(k2) > -1) {
		sna = servicenamrArr[productArr.indexOf(k2)]

		if (productName == 'crmplus') {
			loginlink = 'crm/crmplus';
		}
		var ssu = 'https://' + window.location.host + '/' + loginlink + '/' + 'signup.html'
		if (productName == 'writer') {
			ssu = 'https://docs.' + Zdomain + '.' + domainOne + '/writer/signup';
		}
		if (productName == 'workplace') {
			ssu = 'https://www.' + Zdomain + '.' + domainOne + '/workplace/pricing.html';
		}
		$('.signing .signin, .login-text .login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=' + sna + '&signupurl=' + ssu);
		$('.zgh-accounts .zgh-login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=' + sna + '&signupurl=' + ssu);
	}

	if (productName == 'salesinbox' && domainOne == 'eu') {
		$('.signing .signin, .login-text .login').attr('href', 'https://accounts.zoho.eu/signin?servicename=ZohoCRM&serviceurl=https://crm.zoho.eu/crm/ShowTab.do?module=SalesInbox&signupurl=https://www.zoho.eu/salesinbox/signup.html');
		$('.zgh-accounts .zgh-login').attr('href', 'https://accounts.zoho.eu/signin?servicename=ZohoCRM&serviceurl=https://crm.zoho.eu/crm/ShowTab.do?module=SalesInbox&signupurl=https://www.zoho.eu/salesinbox/signup.html');
	}
	if (window.location.href.split('/')[3] == '') {
		$('.zgh-accounts .zgh-login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=ZohoHome&serviceurl=https://home.zoho.'+dcdomainOne+'&signupurl=https://www.' + Zdomain + '.' + domainOne + '/signup.html');
		$('.signing .signin, .login-text .login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=ZohoHome&serviceurl=https://home.zoho.'+dcdomainOne+'&signupurl=https://www.' + Zdomain + '.' + domainOne + '/signup.html');
	}

}

$(document).ready(function(e) {
    var getDomain = document.domain;
    var splitUrl = getDomain.split('.');
    var domainOne = splitUrl.pop();
    var Zdomain = splitUrl.pop();
    if (!$('body').hasClass('domain-' + domainOne)) {
        var _element = document.getElementsByTagName('body')[0];
        _element.classList.add("domain-" + domainOne);
    }
    /* JS FOR PLACEHOLDER MOVING EFFECTS STARTS  */

    insertUsericon = "";

    function signupfieldcheck() {
        setTimeout(function() {
            if ($('.signup-box').length > 0) {
                for (var i = 0; i < $('.sgfrm input').length; i++) {
                    if ($('.sgfrm input').eq(i).val() != 'undefined' && $('.signup-box').css('display') == 'block') {
                        if ($('.sgfrm input').eq(i).val() != '') {
                            if ($('.sgfrm input').eq(i).prev().hasClass('placeholder')) {
                                $('.sgfrm input').eq(i).parent().addClass('added-placeholder');
                            }
                        }
                    }
                }
            }
        }, 500);
    }

    $(document).on('blur', 'input', function() {
        var getTextval = $(this).val()
        if (getTextval == "" || getTextval == null) {

            $(this).parent().removeClass('added-placeholder');
        } else {
            $(this).parent().addClass('added-placeholder')
        }
    }).on('focus', 'input', function() {
        var getTextval = $(this).val()
        if (getTextval == "" || getTextval == null) {

            $(this).parent().removeClass('').addClass('added-placeholder');
        } else {
            $(this).parent().addClass('added-placeholder')
        }
    }).on('change', 'input', function() {
        signupfieldcheck()
    });


    var getTextval = $('#emailfield').val();
    if (getTextval == "" || getTextval == null) {
        $('#emailfield').parent().removeClass('added-placeholder');
    } else {
        $('#emailfield').parent().addClass('added-placeholder');
    }


    /* JS FOR PLACEHOLDER MOVING EFFECTS ENDS */

    /* added the browser tab in one page column */
    var chBrowsertab = $('.add-browser-tab');
    if (chBrowsertab.length > 0) {
        var browserTab = '<span class="browser-tab"> <em></em></span>'
        $('.add-browser-tab').prepend(browserTab);
    }
    getWidth = 0;

    breaks = false;
    var url = window.location.href.split('/');
    var findCrmplus = url.indexOf('crmplus')

    if (findCrmplus < 0) {
        findproduct: for (var k = 0; k < url.length; k++) {
            for (var m = 0; m < allProduct.length; m++) {
                if (allProduct[m] == url[k]) {
                    productName = allProduct[m];
                    break findproduct;
                }
            }
        }
    }
    else {
        productName = 'crmplus';
    }
    if (window.location.origin.indexOf('zohocrm') > 0) {
        productName = 'crm';
    }

    var _loc = window.location.href;
    if (_loc.indexOf('/docs/show/android-app.html') > 0) {
        productName = 'show';
    }

    addString = "'" + productName + "'"

    /* Header footer Common HTML Js */
    var header = '<span class="menu-icon">Menu</span> <div class="mask-holder hide"> <div class="mobile-menu"> <div class="mobile-menu-wrap"> <ul> <li>Sales &amp; Marketing</li> <li class="bundle-container-mobile"><a class="product" href="' + langsrc + 'crm/crmplus/?src=top-header"><span class="bundle-app-icon1"></span>CRM Plus</a> </li> <li> <a href="' + langsrc + 'crm/"><span class="app-icon1"></span>CRM</a></li><li><a href="' + langsrc + 'pagesense/"><span class="app-icon45"></span>PageSense</a></li> <li> <a href="' + langsrc + 'social/"><span class="app-icon24"></span>Social</a></li> <li> <a href="' + langsrc + 'salesiq/"><span class="app-icon6"></span>SalesIQ</a></li> <li> <a href="' + langsrc + 'forms/"><span class="app-icon26"></span>Forms</a></li> <li> <a href="' + langsrc + 'survey/"><span class="app-icon4"></span>Survey</a></li> <li> <a href="' + langsrc + 'salesinbox/"><span class="app-icon36"></span>SalesInbox</a></li> <li> <a href="' + langsrc + 'campaigns/"><span class="app-icon2"></span>Campaigns</a></li> <li> <a href="' + langsrc + 'sites/"><span class="app-icon3"></span>Sites</a></li> <li class="zcomtctmanager"> <a href="' + langsrc + 'contactmanager/"><span class="app-icon18"></span>ContactManager</a></li> <li> <a href="' + langsrc + 'motivator/"><span class="app-icon30"></span>Motivator</a></li> <li> <a href="' + langsrc + 'sign/"><span class="app-icon39"></span>Sign</a></li><li><a href="' + langsrc + '/backstage/"><span class="app-icon48"></span>Backstage</a></li> </ul> <ul> <li>Finance</li> <li class="bundle-container-mobile finance"><a class="product" href="/financeplus/?src=top-header"><span class="bundle-app-icon3"></span>Finance Plus</a> </li> <li> <a href="' + langsrc + 'books/"><span class="app-icon14"></span>Books</a></li> <li><a href="' + langsrc + 'invoice/"><span class="app-icon15"></span>Invoice</a></li> <li><a href="' + langsrc + 'subscriptions/"><span class="app-icon15a"></span>Subscriptions</a></li> <li><a href="' + langsrc + 'expense/"><span class="app-icon27a"></span>expense</a></li> <li><a href="' + langsrc + 'inventory/"><span class="app-icon28"></span>Inventory</a></li> <li><a href="/checkout/"><span class="app-icon37"></span>Checkout</a></li> </ul> <ul> <li>Email &amp; Collaboration</li> <li class="bundle-container-mobile email-collab"><a class="product" href="' + langsrc + 'workplace/?src=top-header"><span class="bundle-app-icon2"></span>Workplace</a> </li> <li><a href="' + langsrc + 'mail/"><span class="app-icon10"></span>Mail</a></li>  <li><a href="' + langsrc + 'docs/"><span class="app-icon9a"></span>Docs</a></li> <li><a href="' + langsrc + 'writer/"><span class="app-icon40"></span>Writer</a></li> <li><a href="' + langsrc + 'docs/sheet.html"><span class="app-icon42"></span>Sheet</a></li> <li><a href="' + langsrc + 'show/"><span class="app-icon44"></span>Show</a></li> <li> <a href="' + langsrc + 'projects/"><span class="app-icon12"></span>Projects</a></li> <li> <a href="' + langsrc + 'connect/"><span class="app-icon13"></span>Connect</a></li> <li> <a href="' + langsrc + 'bugtracker/"><span class="app-icon8"></span>BugTracker</a></li> <li> <a href="' + langsrc + 'meeting/"><span class="app-icon11"></span>Meeting</a></li> <li> <a href="' + langsrc + 'vault/"><span class="app-icon21"></span>Vault</a></li> <li> <a href="' + langsrc + 'showtime/"><span class="app-icon29"></span>ShowTime</a></li> <li> <a href="' + langsrc + 'cliq/"><span class="app-icon31"></span>Cliq</a></li> <li> <a href="' + langsrc + 'notebook/"><span class="app-icon35"></span>Notebook</a></li> <li><a href="' + langsrc + 'sprints/"><span class="app-icon41"></span>Sprints</a></li> <li> <a href="' + langsrc + 'wiki/"><span class="app-icon38"></span>Wiki</a></li> </ul> <ul> <li>IT &amp; Help Desk</li> <li><a href="' + langsrc + 'desk/"><span class="app-icon7"></span>Desk</a></li> <li> <a href="' + langsrc + 'assist/"><span class="app-icon5"></span>Assist</a></li> <li><a href="/cloud-it-help-desk-software.html"><span class="app-icon32"></span>ServiceDesk Plus</a></li> <li><a href="/mdm-cloud.html"><span class="app-icon34"></span>MDM</a></li> </ul> <ul> <li>Human Resources</li> <li><a href="' + langsrc + 'recruit/"><span class="app-icon17"></span>Recruit</a></li> <li> <a href="' + langsrc + 'people/"><span class="app-icon16"></span>People</a></li> </ul> <ul> <li>Custom Solutions</li> <li> <a href="' + langsrc + 'creator/"><span class="app-icon19"></span>Creator</a></li> <li><a href="' + langsrc + 'analytics/"><span class="app-icon20"></span>Analytics</a></li><li><a href="' + langsrc + 'flow/"><span class="app-icon46"></span>Flow</a></li> <li><a href="/officeplatform/integrator/"><span class="app-icon47"></span>Office Integrator</a></li> </ul> <p class="mobile-apps-link"><a href="' + langsrc + 'mobile-apps.html">Mobile Apps</a></p> </div> </div> </div> <ul class="menu"> <li class="sales-marketing"><a href="javascript:;">Sales &amp; Marketing</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app bundle-container app-box"><a class="product" href="' + langsrc + 'crm/crmplus/?src=top-header"><small class="bundle-text">Bundle</small><span class="bundle-app-icon1"></span>CRM Plus<em>Unified Customer Experience Platform.</em></a> </div> <div class="app-box"> <a class="product" href="' + langsrc + 'crm/"><span class="app-icon1"></span>CRM<em> Close more deals in less time.</em></a> </div><div class="app-box"><a class="product" href="' + langsrc + 'pagesense/" ><span class="app-icon45"></span>PageSense<em>Conversion rate optimization software.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'sign/"><span class="app-icon39"></span>Sign<em>Sign and send documents.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'social/"><span class="app-icon24"></span>Social <em>The all-in-one social media management software.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'salesiq/"><span class="app-icon6"></span>SalesIQ <em>Convert website visitors into customers.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'forms/"><span class="app-icon26"></span>Forms <em>Forms for mobile teams.</em></a> </div> <div class="app-box"> <a class="product" href="' + langsrc + 'survey/"><span class="app-icon4"></span>Survey <em>Online surveys for every occasion.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'salesinbox/"><span class="app-icon36"></span>SalesInbox <em>Email for salespeople.</em> </a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'campaigns/"><span class="app-icon2"></span>Campaigns <em> Reach and engage your customers.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'sites/"><span class="app-icon3"></span>Sites <em>Design mobile friendly websites.</em></a> </div> <div class="app-box zcomtctmanager"><a class="product" href="' + langsrc + 'contactmanager/"><span class="app-icon18"></span>ContactManager <em>Absolute contact management.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'motivator/"><span class="app-icon30"></span>Motivator <em>Turbocharge your sales with sales activity management.</em></a> </div><div class="app-box"> <a class="product" href="' + langsrc + 'backstage/"><span class="app-icon48"></span>Backstage<em>End-to-end event management software.</em></a> </div> </div> </div> </li> <li class="finance"><a href="javascript:;">Finance</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app bundle-container app-box"><a class="product" href="/financeplus/?src=top-header"><small class="bundle-text">Bundle</small><span class="bundle-app-icon3"></span>Finance Plus<em>Unified finance platform for business.</em></a> </div> <div class="app-box"> <a class="product" href="' + langsrc + 'books/"><span class="app-icon14"></span>Books <em> Smart accounting for growing businesses.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'invoice/"><span class="app-icon15"></span>Invoice <em> Hassle-free invoicing.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'subscriptions/"><span class="app-icon15a"></span>Subscriptions <em>Smarter billing for your subscription business.</em> </a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'expense/"><span class="app-icon27"></span>Expense <em>Effortless expense reporting.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'inventory/"><span class="app-icon28"></span>Inventory <em>Online inventory and order management.</em></a> </div> <div class="app-box"><a class="product" href="/checkout/"><span class="app-icon37"></span>Checkout <em>Simple one-time and recurring online payments solution.</em> </a> </div> </div> </div> </li> <li class="email-collab"><a href="javascript:;">Email &amp; Collaboration</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app bundle-container app-box"><a class="product" href="' + langsrc + 'workplace/?src=top-header"><small class="bundle-text">Bundle</small><span class="bundle-app-icon2"></span>Workplace<em>All the tools for work in one Integrated site.</em></a> </div> <div class="app-box"> <a class="product" href="' + langsrc + 'mail/"><span class="app-icon10"></span>Mail <em>Business email. Clean and ad-free.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'docs/"><span class="app-icon9a"></span>Docs <em> All your documents in one place.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'writer/"><span class="app-icon40"></span>Writer <em> A clean, crisp space to write and discuss.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'docs/sheet.html"><span class="app-icon42"></span>Sheet <em> The spreadsheet application for collaborative work.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'show/"><span class="app-icon44"></span>Show <em> Create, collaborate and broadcast presentations.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'projects/"><span class="app-icon12"></span>Projects <em> Turn every project into a success story.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'connect/"><span class="app-icon13"></span>Connect <em> Your social workplace.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'bugtracker/"><span class="app-icon8"></span>BugTracker <em> Fix bugs fast and ship great software.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'meeting/"><span class="app-icon11"></span>Meeting <em> Web conferencing made simple and easy.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'vault/"><span class="app-icon21"></span>Vault <em>Online password manager for teams.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'showtime/"><span class="app-icon29"></span>ShowTime <em>Online training tool to engage your learners.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'cliq/"><span class="app-icon31"></span>Cliq <em> Chat that&#39;s built for work.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'notebook/"><span class="app-icon35"></span>Notebook <em>A beautiful home for all your notes.</em> </a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'sprints/"><span class="app-icon41"></span>Sprints <em> Planning and tracking projects for agile teams.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'wiki/"><span class="app-icon38"></span>Wiki <em>Knowledge management for teams.</em> </a> </div> </div> </div> </li> <li class="help-desk"><a href="javascript:;">IT &amp; Help Desk</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app app-box"> <a class="product" href="' + langsrc + 'desk/"><span class="app-icon7"></span>Desk <em>Put customer service at the heart of your company.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'assist/"><span class="app-icon5"></span>Assist <em> Support remote customers instantly. Manage computers located anywhere.</em></a> </div> <div class="app-box"><a class="product" href="/cloud-it-help-desk-software.html"><span class="app-icon32"></span>ServiceDesk Plus <em> Offer best-in-class IT support on the cloud.</em></a> </div> <div class="app-box mdm-box"><a class="product" href="/mdm-cloud.html"><span class="app-icon34"></span>Mobile Device Management <em>Easy-to-use and affordable web-based MDM solution.</em></a> </div> <div class="app-box"><a class="product" target=" /_blank/" href="https://www.site24x7.com/"><span class="app-icon25"></span>Site24x7 <em> Website monitoring from a global perspective.</em></a> </div> </div> </div> </li> <li class="hr"><a href="javascript:;">HR</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app app-box"> <a class="product" href="' + langsrc + 'recruit/"><span class="app-icon17"></span>Recruit <em> Applicant tracking system.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'people/"><span class="app-icon16"></span>People <em> Organize, automate and simplify your HR processes.</em></a> </div> </div> </div> </li> <li class="business-proc"><a href="javascript:;">Custom Solutions</a> <div class="catagory-dropdown"> <div class="catagory-inner"> <div class="featured-app app-box"> <a class="product" href="' + langsrc + 'creator/"><span class="app-icon19"></span>Creator <em> Build custom apps for your business needs.</em></a> </div> <div class="app-box"><a class="product" href="' + langsrc + 'analytics/"><span class="app-icon20"></span>Analytics <em> Online reporting and business intelligence.</em><span class="new">New</span></a> </div><div class="app-box"><a class="product" href="' + langsrc + 'flow/" ><span class="app-icon46"></span>Flow<em>Integrate your apps to automate business workflows.</em></a> </div><div class="app-box"><a class="product" href="/officeplatform/integrator/" ><span class="app-icon47"></span>Office Integrator <em>Give your apps built-in document editors.</em></a> </div> </div> </div> </li> </ul> <div class="dropdown-mask"></div>';

    var footer = '<ul><li><a href="' + langsrc + '">Zoho Home</a></li><li><a href="' + langsrc + 'contact.html">Contact</a></li><li><a href="' + langsrc + 'security.html">Security</a></li><li><a href="' + langsrc + 'ipr-complaints.html">IPR Complaints</a></li><li><a href="' + langsrc + 'policy.html"> Anti-spam Policy</a></li><li id="footer-terms"><a href="' + langsrc + 'terms.html">Terms of Service</a></li><li><a href="' + langsrc + 'privacy.html"> Privacy Policy</a></li><li id="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">Cookie Policy</a></li><li><a href="' + langsrc + 'gdpr.html">GDPR Compliance</a></li><li><a href="https://www.zoho.com/abuse-policy/">Abuse Policy</a></li></ul><p>&copy; 2020, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>';

    var zohosignup = {
        "productSignup": [{
                "crm": [{
                    "servicename": "ZohoCRM"
                }, ]
            },
            {
                "assist": [{
                    "servicename": "ZohoMeeting"
                }, ]
            },
            {
                "meeting": [{
                    "servicename": "ZohoMeeting"
                }, ]
            },
            {
                "bugtracker": [{
                    "servicename": "ZohoBugTracker"
                }, ]
            },
            {
                "chat": [{
                    "servicename": "ZohoChat"
                }, ]
            },
            {
                "campaigns": [{
                    "servicename": "ZohoCampaigns"
                }, ]
            },
            {
                "books": [{
                    "servicename": "ZohoBooks"
                }, ]
            },
            {
                "connect": [{
                    "servicename": "ZohoPulse"
                }, ]
            },
            {
                "contactmanager": [{
                    "servicename": "ZohoContactManager"
                }, ]
            },
            {
                "creator": [{
                    "servicename": "ZohoCreator"
                }, ]
            },
            {
                "expense": [{
                    "servicename": "ZohoExpense"
                }, ]
            },
            {
                "subscriptions": [{
                    "servicename": "ZohoSubscriptions"
                }, ]
            },
            {
                "inventory": [{
                    "servicename": "ZohoInventory"
                }, ]
            },
            {
                "invoice": [{
                    "servicename": "ZohoInvoice"
                }, ]
            },
            {
                "docs": [{
                    "servicename": "ZohoPC"
                }, ]
            },
            {
                "forms": [{
                    "servicename": "ZohoForms"
                }, ]
            },
            {
                "mail": [{
                    "servicename": "VirtualOffice"
                }, ]
            },
            {
                "people": [{
                    "servicename": "zohopeople"
                }, ]
            },
            {
                "projects": [{
                    "servicename": "ZohoProjects"
                }, ]
            },
            {
                "motivator": [{
                    "servicename": "ZohoMotivator"
                }, ]
            },
            {
                "recruit": [{
                    "servicename": "ZohoRecruit"
                }, ]
            },
            {
                "reports": [{
                    "servicename": "ZohoReports"
                }, ]
            },
            {
                "salesiq": [{
                    "servicename": "LiveDesk"
                }, ]
            },
            {
                "showtime": [{
                    "servicename": "ZohoShowtime"
                }, ]
            },
            {
                "social": [{
                    "servicename": "ZohoSocial"
                }, ]
            },
            {
                "sites": [{
                    "servicename": "ZohoSites"
                }, ]
            },
            {
                "support": [{
                    "servicename": "ZohoSupport"
                }, ]
            },
            {
                "desk": [{
                    "servicename": "ZohoSupport"
                }, ]
            },
            {
                "survey": [{
                    "servicename": "ZohoSurvey"
                }, ]
            },
            {
                "vault": [{
                    "servicename": "ZohoVault"
                }, ]
            },
            {
                "checkout": [{
                    "servicename": "ZohoCheckout"
                }, ]
            },
            {
                "cliq": [{
                    "servicename": "ZohoChat"
                }, ]
            },
            {
                "salesinbox": [{
                    "servicename": "ZohoCRM"
                }, ]
            },
            {
                "officeapi": [{
                    "servicename": "OfficeAPI"
                }, ]
            },
            {
                "sprints": [{
                    "servicename": "ZohoSprints"
                }, ]
            },
            {
                "writer": [{
                    "servicename": "ZohoWriter"
                }, ]
            },
            {
                "subscriptions": [{
                    "servicename": "ZohoSubscriptions"
                }, ]
            },
            {
                "pagesense": [{
                    "servicename": "PageSense"
                }, ]
            },
            {
                "flow": [{
                    "servicename": "ZohoFlow"
                }, ]
            },
            {
                "salesinbox": [{
                    "servicename": "SalesInbox"
                }, ]
            },
            {
                "workplace": [{
                    "servicename": "VirtualOffice"
                }, ]
            },
            {
                "show": [{
                    "servicename": "ZohoShow"
                }, ]
            }

        ]
    }


    function setLangVal() {
        if (currentUrlLang != '') {
            var getDomain = document.domain;
            var splitUrl = getDomain.split('.');
            var domainOne = splitUrl.pop();
            var Zdomain = splitUrl.pop();
            var hCount = 0;
            var hEmCount = 0;
            var hFooterCount = 0;
            $.getJSON('https://www.' + Zdomain + '.' + domainOne + '/js/header-json-data.json', function(data) {
                var obj = data.header;
                var objem = data.productdetails;
                var objFooter = data.footer;
                var objCopyright = data.copyright;

                for (var key in obj) {
                    var _val = obj[key];
                    for (var prop in _val) {
                        if (currentUrlLang == prop) {
                            $('.header .menu li > a').eq(hCount).html(_val[prop]);
                            hCount++;
                        }
                    }
                }

                for (var key in objem) {
                    var _val = objem[key];
                    for (var i = 0; i < $('.app-box').length; i++) {
                        if ($('.app-box').eq(i).find('em').html().toLowerCase().trim() == key.toLowerCase().trim()) {
                            for (var prop in _val) {
                                if (currentUrlLang == prop) {
                                    $('.header .menu .app-box').eq(i).find('em').html(_val[prop]);
                                    hEmCount++;
                                }
                            }
                        }
                    }
                }

                for (var key in objCopyright) {
                    var _val = objCopyright[key];
                    for (var prop in _val) {
                        if (currentUrlLang == prop) {
                            /*$('.common-footer p').html(_val[prop]);*/
                        }
                    }
                }

                for (var key in objFooter) {
                    var _val = objFooter[key];
                    for (var prop in _val) {
                        if (currentUrlLang == prop) {
                            if ($('.common-links').length > 0) {
                                /*$('.common-links .ZPprivacy li > a').eq(hFooterCount).html(_val[prop]);*/
                            } else if ($('.common-footer').length > 0) {
                                /*$('.common-footer li > a').eq(hFooterCount).html(_val[prop]);*/
                            }
                            hFooterCount++;
                        }
                    }
                }

            });
        }
    }

    setLangVal();


    getService = getserviceUrl();

    function getserviceUrl() {
        for (var i = 0; i < zohosignup["productSignup"].length; i++) {
            var keys = Object.keys(zohosignup["productSignup"][i]);
            for (var j = 0; j < keys.length; j++) {
                if (keys[j] == productName) {
                    return [i, j, keys];
                }

            }
        }
    }



    var mobileApp = '<div class="mobile-app-banner" style="padding:10px;background:#f30; "></div>'


    if (typeof getService != 'undefined') {

        insertUsericon = '<a class="user-icon" href="https://accounts.zoho.com/login?servicename=' + zohosignup["productSignup"][getService[0]][getService[2][0]][0]["servicename"] + '">User Icon</a>'
    }



    if (window.location.href.indexOf('crmplus') > 0) {
        insertUsericon = '<a class="user-icon" href="https://accounts.zoho.com/login?servicename=CRMPlus&serviceurl=https://crmplus.zoho.com&hide_signup=true&hide_secure=true&css=https://www.zoho.com/css/prd-sign.css">User Icon</a>'
    } else if (window.location.href.indexOf('salesinbox') > 0) {
        insertUsericon = '<a class="user-icon" href="https://www.zoho.com/salesinbox/login.html">User Icon</a>'
    }



    slideMenu();


    allapps = allapps.split('|');
    var productavail = 0;
    if (productName == 'social' || productName == 'motivator') {
        $(".header").append(header);
        $(".common-footer").html(footer);
        var menuLi = $(".menu").children();
        $(menuLi[0]).addClass('selected');
        //languageredirect();
        productavail++;
        //console.log($('.common-footer').length)
    } else {
        for (i = 0; i < allapps.length; i++) {
            cat = allapps[i].split(',');
            for (j = 0; j < cat.length; j++) {
                if (cat[j] == productName) {
                    $(".header").append(header);
                    /*$(".common-footer").html(footer);*/
                    var menuLi = $(".menu").children();
                    $(menuLi[i]).addClass('selected');
                    //languageredirect();
                    productavail++;
                    //console.log($('.common-footer').length)

                }
            }

        }
    }

    for (var i = 0; i < $('.app-box').length; i++) {
        if ($('.app-box a').eq(i).attr('href').indexOf('?src=top-header') < 0) {
            $('.app-box a').eq(i).attr('href', $('.app-box a').eq(i).attr('href') + '?src=top-header');
        }
    }

    if (productavail == 0 || $('body').hasClass('og-context-node-17848')) {
        //languageredirect();
        //console.log($('.common-footer').length)
    }

    if (domainOne == "in") {
        $('.zcomtctmanager').hide();
    }

    if ($('.common-footer #footer-terms a').length > 0) {
        if (productName == 'sites' || productName == 'developer' || productName == 'cliq') {
            var aval = $('.common-footer #footer-terms a').attr('href').split('terms.html').join(productName + '/terms.html');
            $('.common-footer #footer-terms a').attr('href', aval)
        } else if (productName == 'campaigns') {
            var aval = $('.common-footer #footer-terms a').attr('href').split('terms.html').join('campaigns/zc-terms.html?src=zc-footer');
            $('.common-footer #footer-terms a').attr('href', aval);
            $('.common-footer #footer-terms a').html('Terms of Use');
        } else if (productName == 'crm') {
            var aval = $('.common-footer #footer-terms a').attr('href').split('terms.html').join('crm/zohocrm-terms.html');
            $('.common-footer #footer-terms a').attr('href', aval)
        } else if (productName == 'creator') {
            var aval = 'https://www.zoho.com/creator/terms.html'
            $('.common-footer #footer-terms a').attr('href', aval)
        } else if (productName == 'pagesense') {
            var aval = 'https://www.zoho.com/pagesense/terms-of-use.html'
            $('.common-footer #footer-terms a').attr('href', aval)
        } else if (productName == 'officeapi') {
            var aval = 'https://officeapi.zoho.com/jsp/terms.jsp'
            $('.common-footer #footer-terms a').attr('href', aval)
        } else if (productName == 'salesiq') {
            var aval = $('.common-footer #footer-terms a').attr('href').split('terms.html').join('salesiq/zoho-salesiq-terms-of-use.html');
            $('.common-footer #footer-terms a').attr('href', aval)
        }
    }

    /* End of Header footer common HTML Js */
    //dropheight();
    function handlelanglink() {
        if (currentUrlLang == 'pt-br') {
            var _checkFinance = 0;
            for (var i = 0; i < $('.header .menu li').length; i++) {
                if ($('.header .menu li').eq(i).hasClass('finance')) {
                    _checkFinance = i;
                }
            }
            var _len = $('.header .menu li').eq(_checkFinance).find('.product').length;
            for (var i = 0; i < _len; i++) {
                var _href = $('.header .menu li').eq(_checkFinance).find('.product').eq(i).attr('href');
                if (_href.indexOf('/inventory/') > -1 || _href.indexOf('/subscriptions/') > -1 || _href.indexOf('/expense/') > -1) {
                    if (_href.indexOf('/pt-br/') > -1) {
                        var _lin = $('.header .menu li').eq(_checkFinance).find('.product').eq(i).attr('href').split('/pt-br')[1];
                        $('.header .menu li').eq(_checkFinance).find('.product').eq(i).attr('href', _lin);
                    }
                }
            }
        }
    }

    handlelanglink();

    $(window).scroll(function() {
        $('.zlang-container-inner').hide(); /*  slide down the menu  */
        slideDown(getWidth);
    })
    slideDown();

    var clicked = false;
    var navClick = false;
    $('.menu-icon').click(function() {
        if (window.innerWidth <= 550) {
            $('.product-menu').hide();
        }

        if (navClick == false) {
            navClick = true;
            $('.mask-holder').removeClass('hide');
            setTimeout(function() {
                $('.mobile-menu').css({
                    'left': '0%'
                });
            }, 100)

            setTimeout(function() {
                $('html,body').css({
                    'overflow': 'hidden'
                })
            }, 0)
        } else {
            hide();
        }
    })

    $('.mask-holder').click(function(e) {
        if (e.delegateTarget.className == e.target.className) {
            hide();
        }
    });



    /* this is for goto signup form */

    var getAllField = $('.banner-signup .sgfrm');
    if (getAllField.length != 0) {
        var getTarget = $(getAllField[0]).children().children();
    }
    $(document).on('click', '.get-started,.signing .signup, .posibilities-bot', function(e) {
            var getAllField = $('.banner-signup .sgfrm');
            if (getAllField.length != 0) {
                var getTarget = $(getAllField[0]).children().children();
                if (window.innerWidth > 650) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: 0,
                    }, 1000, function() {
                        setTimeout(function() {
                            $('.focusin').removeClass('focusin');
                        }, 500)
                    })
                    setTimeout(function() {
                        for (var i = 0; i < getTarget.length; i++) {
                            var getType = $(getTarget[i]).attr('type');
                            if (getType == 'text' || getType == 'email') {
                                $(getTarget[i]).addClass('focusin')
                                $(getTarget[i]).focus();
                            }
                        }
                    }, 1000)
                }
            }
        })
        //}



    /* this is for adding signout popup */

    var checkVisible = $('.product-menu').css('display');
    $('.userinfo-container').css({
        'display': 'block'
    });
    $('body').click(function(e) {
        if (e.target.parentNode != null || e.target.parentNode != undefined) {

            if (e.target.className == 'product-menu') {} else if (e.target.className == 'sub-menu-icon') {
                $('.product-menu').css({
                    'height': window.innerHeight - 50
                });
                if (clicked == false) {
                    clicked = true;
                    $('.product-menu').slideDown(300);
                    $('body').removeAttr('style');
                } else {
                    clicked = false;
                    $('.product-menu').slideUp(300);
                    $('body').removeAttr('style');
                }
            } else {
                if (clicked == true) {
                    clicked = false;
                    $('.product-menu').slideUp(300);
                    $('html,body').removeAttr('style')
                }
            }

            if (e.target.className != 'zclosestrip tlsClose') {
                var getTargetId = e.target.parentNode.parentNode.className;
                if (getTargetId == 'userinfo-details') {
                    $('.userinfo-details').addClass("zoho-expand");
                    if (getWidth > 285) {
                        $('.userinfo-details.zoho-expand').css({
                            'width': getWidth + 10,
                            'height': '135px'
                        });
                    }

                } else {
                    $('.userinfo-details').removeClass("zoho-expand");
                    if (getWidth > 285) {
                        $('.userinfo-details').css({
                            'width': '35px',
                            'height': '35px'
                        });
                        $('.product-header-top .userinfo-details, .product-header-top .userinfo-container').css({
                            'height': '43px'
                        });
                    }
                }
            }
        }
    });


    $(document).on('keydown', function(e) {
        keys = e.which;
        if (keys == 27) {
            $('.userinfo-details').removeClass("zoho-expand");
        }
    })

    $(window).resize(function() {
        if (window.innerWidth <= 767) {
            $('.product-menu').css({
                'height': window.innerHeight - 50,
                'display': 'none'
            });
        } else {
            $('.product-menu').css({
                'height': 'auto',
                'top': 'auto',
                'display': 'block'
            });
            $('.product-header-inner .userinfo-container,.product-header-inner .goto-link').remove();
        }
    })

    $('.product-header-inner .sub-menu-icon').click(function() {})


    /* EU redirection and Country selection Start */
    $(window).load(function() {
        languageredirect();
    });

    function languageredirect() {
        $('#cookie-policy').css('display', 'inline-block');
        if (domainOne != "in") {
            if (domainOne == "eu") {
                if (currentUrlLang == '') {
                    $('#cookie-policy').css('display', 'inline-block');
                }
            }
            if (typeof CountryCode != 'undefined') {
                if (countryEu.indexOf(CountryCode) > -1) {
                    if (!$('body').hasClass('ccode-eucountries')) {
                        var _element = document.getElementsByTagName('body')[0];
                        _element.classList.add("ccode-eucountries");
                    }
                }
            }
            if (currentUrlLang != '') {
                if (!$('body').hasClass('other-lang')) {
                    var _element = document.getElementsByTagName('body')[0];
                    _element.classList.add("other-lang");
                }
                if (!$('body').hasClass('lang-' + currentUrlLang)) {
                    var _element = document.getElementsByTagName('body')[0];
                    _element.classList.add("lang-" + currentUrlLang);
                }
            } else {
                if (!$('body').hasClass('lang-en')) {
                    var _element = document.getElementsByTagName('body')[0];
                    _element.classList.add("lang-en");
                }
            }
            if (currentUrlLang != 'jp') {
                if (typeof $('body').attr('data-lang-list') == 'string') {
                    var detectedLangNew = $('body').attr('data-lang-list').split(',');
                    var detectedLang = [];
                    for (var i = 0; i < detectedLangNew.length; i++) {
                        if (langArr.indexOf(detectedLangNew[i]) > -1) {
                            detectedLang.push(langArr[langArr.indexOf(detectedLangNew[i])]);
                        }
                    }
                    //var detectedLang = ['en','fr','de','es-xl','pt-br'];
                    var c = 'com',
                        e = 'eu'
                    if (detectedLang.length > 1) {
                        var _val = 'English';
                        (currentUrlLang != '') ? (_val = lancountry[currentUrlLang]) : '';
                        /*if(typeof CountryCode != 'undefined' && CountryCode != null) {
                        	if(countryEu.indexOf(CountryCode) > -1){
                        		if(domainOne == 'eu'){
                        			detectedLang.unshift('.com');
                        		}else if(domainOne == 'com'){
                        			detectedLang.unshift('.eu');
                        		}
                        	}
                        }*/
                        if (detectedLang.indexOf(window.location.pathname.split('/')[1]) < 0) {
                            (detectedLang.indexOf('en') > -1) ? detectedLang.splice(detectedLang.indexOf('en'), 1): '';
                        } else {
                            detectedLang.splice(detectedLang.indexOf(window.location.pathname.split('/')[1]), 1);
                            //_val = window.location.pathname.split('/')[1]
                        }

                        //(_val == 'fr') ? (_val = 'FranÃ§ais') : (_val == 'de') ? (_val = 'Deutsch') : (_val == 'es-xl') ? (_val = 'EspaÃ±ol') : (_val == 'pt-br') ? (_val = 'PortuguÃªs') : (_val == 'nl') ? (_val = 'Dutch') : '';	
                        var _aEle = '<div class="zlang-container"><span class="zlang-text">' + _val + '</span><div class="zlang-container-inner" style="display: none;"><ul></ul></div></div>'
                        if ($('.common-links').length > 0) {
                            $('.common-links').append(_aEle);
                        } else {
                            $('.common-footer').append(_aEle);
                        }

                        if ($('.header .signing').length > 0) {
                            $('.header .signing').after(_aEle);
                        } else if ($('.main .signing').length > 0) {
                            $('.main .signing').after(_aEle);
                        }

                        if (typeof CountryCode != 'undefined' && CountryCode != null) {
                            if (countryEu.indexOf(CountryCode) > -1) {
                                $('.zlang-container').addClass('lang-domain-show')
                            }
                        }

                        for (var i = 0; i < detectedLang.length; i++) {
                            if (langArr.indexOf(detectedLang[i]) > -1 || (detectedLang[i] == 'en' && langArr.indexOf(detectedLang[i]) < 0) || (detectedLang[i] == '.com' && langArr.indexOf(detectedLang[i]) < 0) || (detectedLang[i] == '.eu' && langArr.indexOf(detectedLang[i]) < 0)) {
                                var _langCountry = 'English';
                                //(detectedLang[i] == 'fr') ? (_langCountry = 'FranÃ§ais') : (detectedLang[i] == 'de') ? (_langCountry = 'Deutsch') : (detectedLang[i] == 'es-xl') ? (_langCountry = 'EspaÃ±ol') : (detectedLang[i] == 'pt-br') ? (_langCountry = 'PortuguÃªs') : '';
                                if (langArr.indexOf(detectedLang[i]) > -1) {
                                    _langCountry = lancountry[detectedLang[i]];
                                }
                                var _myClass = '';
                                if (detectedLang[i] == '.com') {
                                    _langCountry = 'zoho.' + c;
                                    _myClass = 'class="lang-domain"';
                                } else if (detectedLang[i] == '.eu') {
                                    _langCountry = 'zoho.' + e;
                                    _myClass = 'class="lang-domain"';
                                }
                                if (_langCountry == 'zoho.' + e || _langCountry == 'zoho.' + c) {
                                    _myClass = 'class="lang-domain"';
                                }
                                //$('.zlang-container-inner ul').append('<li '+_myClass+'><a href="'+movelocation(detectedLang[i])+'">'+_langCountry+'</a></li>');
                                if (onlylocal.indexOf(detectedLang[i]) > -1) {
                                    if (window.location.host == _locaZ) {
                                        if (detectedLang[i] == 'ar') {
                                            if ((window.location.href.indexOf('/books/') > 0 || window.location.href.indexOf('/crm/') > 0 || window.location.href.indexOf('/crmplus/') > 0 || window.location.href.indexOf('/one/') > 0 || window.location.href.indexOf('/people/') > 0 || window.location.href.indexOf('/workplace/') > 0 || window.location.href.indexOf('/mail/') > 0) && (window.location.host == (_locaZ) || window.location.host == 'zcms.zohocorp.com')) {
                                                $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                            }
                                        } else {
                                            $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                        }
                                    }
                                } else {
                                    $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                }

                            }
                        }

                        $('.zgh-localization').addClass('init');

                        $('.overMe, .zlang-container').on('mouseover', function() {
                            $(this).children('.zlang-container-inner').show();
                        });
                        $('.overMe, .zlang-container').on('mouseout', function() {
                            $(this).children('.zlang-container-inner').hide();
                        });
                        $('.zlang-container').on('click', function() {
                            $(this).children('.zlang-container-inner').show();
                        });
                    }
                }
            }
        }
        if (window.location.href.indexOf('https://www.zoho.com/us/payroll/') < 0) {
            //domainlinkFun();
        }
    }

    function domainlinkFun() {
        var _comlink = _lhref.split('.in').join('.com').split('.eu').join('.com');
        var _eulink = _lhref.split('.in').join('.eu').split('.com').join('.eu');
        var _inlink = _lhref.split('.com').join('.in').split('.eu').join('.in');
        var dataLangClass = '';
        if ($('.zlang-container').length < 1) {
            dataLangClass = 'zEngOnly';
        }
        var _apele = '<ul class="zdomainlink ' + dataLangClass + '"><li class="comlink"><a href="' + encodeURI(_comlink) + '">zoho.' + 'com' + '</a></li><li class="eulink"><a href="' + encodeURI(_eulink) + '">zoho.' + 'eu' + '</a></li><li class="inlink"><a href="' + encodeURI(_inlink) + '">zoho.' + 'in' + '</a></li></u>';
        if ($('.zdomainlink.zEngOnly').length == 0) {
            if ($('.common-links').length > 0) {
                $('.common-links').append(_apele);
            } else {
                $('.common-footer').append(_apele);
            }
            if ($('.' + domainOne + 'link').length > 0) {
                $('.' + domainOne + 'link').attr('onclick', 'return false');
                $('.' + domainOne + 'link').addClass('zcurrentdomain')
            }
            //$('.inlink').remove();
            if (currentUrlLang != '') {
                if (currentUrlLang != 'en') {
                    $('.inlink').remove();
                }
            }
            if (productName == 'contactmanager') {
                $('.inlink').remove();
            }
        }
    }

    function movelocation(a) {
        var _loation = window.location.href;
        var HrefLink = '';
        if (a == '.com') {
            var v = '?rdc';
            if (window.location.href.indexOf('?rdc') > -1) {
                v = '';
            }
            HrefLink = encodeFun(window.location.origin.split('eu').join('com') + window.location.href.split(window.location.origin)[1] + v)
        } else if (a == '.eu') {
            HrefLink = encodeFun(window.location.origin.split('com').join('eu') + window.location.href.split(window.location.origin)[1]);
            if (HrefLink.indexOf('?rdc') > 0) {
                HrefLink = encodeURI(HrefLink.split('?rdc').join(''));
            }
        } else {
            if (langArr.indexOf(window.location.pathname.split('/')[1]) > -1) {
                _loation = window.location.href.split(langArr[langArr.indexOf(window.location.pathname.split('/')[1])])[1];
            } else {
                _loation = _loation.split(window.location.host)[1];
            }
            (a == 'en') ? (HrefLink = encodeFun(window.location.href.split(window.location.pathname)[0] + _loation)) :
            (HrefLink = encodeFun(window.location.href.split(window.location.pathname)[0] + '/' + a + '' + _loation));
            if (HrefLink.indexOf('?rdc') > 0) {
                HrefLink = encodeURI(HrefLink.split('?rdc').join(''));
            }
        }
        //window.location = HrefLink;

        return HrefLink;
    }
    /* EU redirection and Country selection End */


    /* Zoholics Slider */
    count = 0;
    setInt = "";
    avoidNextLoop = true;
    speed = 8000;
    speed1 = 1500;
    slideLeft = "";
    zSlide = $('.slider-container').children();
    $(zSlide[0]).addClass('Zselect').siblings().removeClass('Zselect');
    bannerCh = $('.banner-part').children();
    var bannerChCount = bannerCh.length;
    if (bannerChCount >= 2) {
        zoholics = 0 - ($(bannerCh[1]).offset().left);
    }
    var findClass = $(document).find('.zoholicsSlider');
    if (window.innerWidth >= 1100) {
        if (findClass.length != 0) {}
    }

    $('.Znext').click(function() {
        var getClickedIndex = $(this).index();
        count = getClickedIndex;
        clearTimeout(setInt);

        if (avoidNextLoop == true) {
            avoidNextLoop = false;
            $(this).addClass('Zselect').siblings().removeClass('Zselect');
            $('.banner-part').css({
                'left': zoholics
            });
            setTimeout(function() {
                clearTimeout(slideLeft);
                avoidNextLoop = true;
                slideLeft = setTimeout(function() {}, speed)
            }, speed1)
        }
    })


    $('.Zpre').click(function() {
        var getClickedIndex = $(this).index();
        count = getClickedIndex;
        clearTimeout(setInt);
        if (avoidNextLoop == true) {
            avoidNextLoop = false;
            $(this).addClass('Zselect').siblings().removeClass('Zselect');
            $('.banner-part').css({
                'left': 0
            })
            setTimeout(function() {
                clearTimeout(slideLeft);
                avoidNextLoop = true;
                slideLeft = setTimeout(function() {}, speed)
            }, speed1)
        }
    })


    /* Remove the sites24*7 for zoho.eu*/
    var zohoDomain = document.domain;
    if (zohoDomain == "www.zoho.eu") {
        $('.business-proc .no-border,.site24x7').remove();
        $('.business-proc a[href="/appcreator/"]').parent().remove();
    }

    /* End of Zoholics Slider */

    anchorN = $('a');
    aa = [];
    for (i = 0; i < anchorN.length; i++) {
        aa[i] = $(anchorN[i]).attr('href');
        if (aa[i] == "javascript:void(0);") {
            $(anchorN[i]).css({
                "cursor": "text"
            });
        }
    }

    /* this is for check weather user loged in or not */


    //* This is for ZOHO smart banner script

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/Android/i)) {
        $('.apps-download-links-wrap.mobile>a').css('display', 'none');
        if (/iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
            $('.apps-download-links-wrap.mobile .app-store').css('display', 'inline-block');
        } else if (/android/i.test(navigator.userAgent.toLowerCase())) {
            $('.apps-download-links-wrap.mobile .g-play').css('display', 'inline-block');
        } else if (/WPDesktop/i.test(navigator.userAgent.toLowerCase())) {
            $('.apps-download-links-wrap.mobile .windows-app').css('display', 'inline-block');
        }
        $('.download-apps, .app-section').css('display', 'none');
        if (!window.location.href.indexOf('msignup.html') && !window.location.href.indexOf('m-signup.html')) {
            var scriptsmart = document.createElement('script');
            scriptsmart.src = "https://www.zoho.com/js/zoho-smartbanner.js";
            document.getElementsByTagName('head')[0].appendChild(scriptsmart);
            scriptsmart.onload = smartFun;
        }

        var metaName = ['apple-itunes-app', 'google-play-app'];
        var ss = 0;
        var appsIds = [];
        var metaHas = false;
        appTitle = '';
        appIcon = '';
        // Filling mobile app values in JSON
        var zoho = {
            "mobileApps": [{
                    "crm": [{
                            "title": "ZOHO CRM"
                        },
                        {
                            "apple": "app-id=444908810"
                        },
                        {
                            "google": "app-id=com.zoho.crm"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple3/v4/3c/cc/2e/3ccc2e5b-5eb6-120c-b8a2-f10465a65330/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "mail": [{
                            "title": "ZOHO Mail"
                        },
                        {
                            "apple": "app-id=909262651"
                        },
                        {
                            "google": "app-id=com.zoho.mail"
                        },
                        {
                            "icon": "http://a5.mzstatic.com/us/r30/Purple6/v4/ab/e5/0e/abe50e16-1ccc-db1a-9bae-3ab7f089aa38/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "docs": [{
                            "title": "ZOHO Docs"
                        },
                        {
                            "apple": "app-id=388384804"
                        },
                        {
                            "google": "app-id=com.zoho.docs"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple6/v4/0d/60/23/0d602381-ddc5-ae0a-027c-a3ff80376197/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "projects": [{
                            "title": "ZOHO Projects"
                        },
                        {
                            "apple": "app-id=511887920"
                        },
                        {
                            "google": "app-id=com.zoho.projects"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple6/v4/da/d7/16/dad71651-eb0b-26f2-02e2-4765d1f4f406/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "creator": [{
                            "title": "ZOHO Creator"
                        },
                        {
                            "apple": "app-id=692005267"
                        },
                        {
                            "google": "app-id=com.zoho.creator.a"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple69/v4/2a/76/0f/2a760f54-3b27-1e45-4a5d-f609ee35dab5/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "survey": [{
                            "title": "ZOHO Survey"
                        },
                        {
                            "apple": "app-id=638610965"
                        },
                        {
                            "google": "app-id=com.zoho.survey"
                        },
                        {
                            "icon": "http://a3.mzstatic.com/us/r30/Purple4/v4/65/54/ff/6554ff4e-3d5f-5a6d-70b7-7083494d6c65/icon175x175.png"
                        },
                    ]
                },
                {
                    "campaigns": [{
                            "title": "ZOHO Campaigns"
                        },
                        {
                            "apple": "app-id=804728901"
                        },
                        {
                            "google": "app-id=com.zoho.campaigns"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple69/v4/3e/6e/6f/3e6e6fc9-64a6-b7b4-74fa-ab88a596134a/icon175x175.png"
                        },
                    ]
                },
                {
                    "books": [{
                            "title": "ZOHO Books"
                        },
                        {
                            "apple": "app-id=710446064"
                        },
                        {
                            "google": "app-id=com.zoho.books"
                        },
                        {
                            "icon": "http://a3.mzstatic.com/us/r30/Purple6/v4/73/d4/17/73d41732-7618-b7ec-38d7-af63980c0bf2/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "invoice": [{
                            "title": "ZOHO Invoice"
                        },
                        {
                            "apple": "app-id=413017364"
                        },
                        {
                            "google": "app-id=com.zoho.invoice"
                        },
                        {
                            "icon": "http://a5.mzstatic.com/us/r30/Purple6/v4/00/67/ec/0067ecae-fe81-19d9-07e3-b015c9e9dc25/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "expense": [{
                            "title": "ZOHO Expense"
                        },
                        {
                            "apple": "app-id=966094166"
                        },
                        {
                            "google": "app-id=com.zoho.expense"
                        },
                        {
                            "icon": "http://a3.mzstatic.com/us/r30/Purple6/v4/b1/fd/67/b1fd6750-8a5b-dcd7-e786-6d032a5ada1d/icon175x175.png"
                        },
                    ]
                },
                {
                    "inventory": [{
                            "title": "ZOHO Inventory"
                        },
                        {
                            "apple": "app-id=1037960494"
                        },
                        {
                            "google": "app-id=com.zoho.inventory"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple6/v4/4e/2e/d2/4e2ed207-54d0-1c40-6f1b-9914d43f8e0d/icon175x175.png"
                        },
                    ]
                },
                {
                    "support": [{
                            "title": "ZOHO Support"
                        },
                        {
                            "apple": "app-id=692742510"
                        },
                        {
                            "google": "app-id=com.zoho.support"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple3/v4/14/28/c2/1428c239-4630-bf6e-0c86-26bbf4871007/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "desk": [{
                            "title": "ZOHO Desk"
                        },
                        {
                            "apple": "app-id=692742510"
                        },
                        {
                            "google": "app-id=com.zoho.support"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple3/v4/14/28/c2/1428c239-4630-bf6e-0c86-26bbf4871007/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "connect": [{
                            "title": "ZOHO Connect"
                        },
                        {
                            "apple": "app-id=650742465"
                        },
                        {
                            "google": "app-id=com.zoho.zohopulse"
                        },
                        {
                            "icon": "http://a5.mzstatic.com/us/r30/Purple69/v4/e6/b4/76/e6b47648-c5ed-8c21-6626-53b18f82d9a3/icon175x175.png"
                        },
                    ]
                },
                {
                    "vault": [{
                            "title": "ZOHO Vault"
                        },
                        {
                            "apple": "app-id=634857858"
                        },
                        {
                            "google": "app-id=com.zoho.vault"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple69/v4/74/12/de/7412de11-224b-5b9e-2683-cbf551338943/icon175x175.png"
                        },
                    ]
                },
                {
                    "social": [{
                            "title": "ZOHO Social"
                        },
                        {
                            "apple": "app-id=906377559"
                        },
                        {
                            "google": "app-id=com.zoho.zohosocial"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple69/v4/c7/08/b1/c708b1be-f861-863d-c5df-187966a06dbe/icon175x175.png"
                        },
                    ]
                },
                {
                    "people": [{
                            "title": "ZOHO People"
                        },
                        {
                            "apple": "app-id=680525956"
                        },
                        {
                            "google": "app-id=com.zoho.people"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple69/v4/ab/04/74/ab04743d-046f-d86b-9337-a626714470c1/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "assist": [{
                            "title": "ZOHO Assist"
                        },
                        {
                            "apple": "app-id=582922932"
                        },
                        {
                            "google": "app-id=com.zoho.assist"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple3/v4/e9/9b/80/e99b8063-1034-30d3-ec99-cf7e27930a28/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "contactmanager": [{
                            "title": "ZOHO ContactManager"
                        },
                        {
                            "apple": "app-id=705188406"
                        },
                        {
                            "google": "app-id=com.zoho.cm"
                        },
                        {
                            "icon": "http://a5.mzstatic.com/us/r30/Purple69/v4/d4/d6/7a/d4d67a6d-eeee-8464-5357-9f677e537876/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "forms": [{
                            "title": "ZOHO Forms"
                        },
                        {
                            "apple": "app-id=805565969"
                        },
                        {
                            "google": "app-id=com.zoho.forms.a"
                        },
                        {
                            "icon": "http://a3.mzstatic.com/us/r30/Purple69/v4/0d/41/2a/0d412a87-e4ed-3e68-184d-8264462cfbb2/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "showtime": [{
                            "title": "ZOHO ShowTime"
                        },
                        {
                            "apple": "app-id=925233601"
                        },
                        {
                            "google": "app-id=com.zoho.showtime.presenter"
                        },
                        {
                            "icon": "http://a3.mzstatic.com/us/r30/Purple69/v4/90/b9/ff/90b9ff29-c423-c2de-b3a2-e396fe3d068c/icon175x175.png"
                        },
                    ]
                },
                {
                    "recruit": [{
                            "title": "ZOHO Recruit"
                        },
                        {
                            "apple": "app-id=981522421"
                        },
                        {
                            "google": "app-id=com.zoho.recruit"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple69/v4/54/8d/71/548d713b-24d2-acce-eb55-76288492e5d3/icon175x175.png"
                        },
                    ]
                },
                {
                    "reports": [{
                            "title": "ZOHO Reports"
                        },
                        {
                            "apple": "app-id=902365462"
                        },
                        {
                            "google": "app-id=com.zoho.reports"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple4/v4/cb/01/ce/cb01ce7a-e0f8-ed54-d48a-e973fc61d03d/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "notebook": [{
                            "title": "ZOHO Notebook"
                        },
                        {
                            "apple": "app-id=973801089"
                        },
                        {
                            "google": "app-id=com.zoho.notebook"
                        },
                        {
                            "icon": "http://a5.mzstatic.com/us/r30/Purple60/v4/d3/15/51/d31551e0-44a5-610e-236e-6be10e13bf30/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "chat": [{
                            "title": "ZOHO Cliq"
                        },
                        {
                            "apple": "app-id=1056478397"
                        },
                        {
                            "google": "app-id=com.zoho.chat"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple49/v4/f2/52/5b/f2525ba1-0a73-4fcb-68b0-e97986490a27/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "motivator": [{
                            "title": "ZOHO Motivator"
                        },
                        {
                            "apple": "app-id=1091206693"
                        },
                        {
                            "icon": "http://a1.mzstatic.com/us/r30/Purple60/v4/24/a8/41/24a841bb-72e2-1f66-56b0-2c5107a23b0b/icon175x175.png"
                        },
                    ]
                },
                {
                    "salesiq": [{
                            "title": "ZOHO SalesIQ"
                        },
                        {
                            "apple": "app-id=1094699978"
                        },
                        {
                            "google": "app-id=com.zoho.salesiq"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple69/v4/4a/7c/fb/4a7cfbf6-1885-e25e-85a7-8ec772a5d536/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "salesinbox": [{
                            "title": "ZOHO SalesInbox"
                        },
                        {
                            "apple": ""
                        },
                        {
                            "google": ""
                        },
                        {
                            "icon": ""
                        },
                    ]
                },
                {
                    "sprints": [{
                            "title": "ZOHO Sprints"
                        },
                        {
                            "apple": ""
                        },
                        {
                            "google": ""
                        },
                        {
                            "icon": ""
                        },
                    ]
                },
                {
                    "cliq": [{
                            "title": "ZOHO Cliq"
                        },
                        {
                            "apple": "app-id=1056478397"
                        },
                        {
                            "google": "app-id=com.zoho.chat"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple49/v4/f2/52/5b/f2525ba1-0a73-4fcb-68b0-e97986490a27/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "subscriptions": [{
                            "title": "ZOHO Subscriptions"
                        },
                        {
                            "apple": "app-id=1184196693"
                        },
                        {
                            "google": "app-id=com.zoho.zsm"
                        },
                        {
                            "icon": "http://a2.mzstatic.com/us/r30/Purple49/v4/f2/52/5b/f2525ba1-0a73-4fcb-68b0-e97986490a27/icon175x175.jpeg"
                        },
                    ]
                },
                {
                    "show": [{
                            "title": "ZOHO Docs"
                        },
                        {
                            "apple": "app-id=388384804"
                        },
                        {
                            "google": "app-id=com.zoho.show.app"
                        },
                        {
                            "icon": "http://a4.mzstatic.com/us/r30/Purple6/v4/0d/60/23/0d602381-ddc5-ae0a-027c-a3ff80376197/icon175x175.jpeg"
                        },
                    ]
                }
                /*,
                			   {"writer": [
                                   { "title":"ZOHO Writer" },
                                   { "apple":"app-id=808719064"},
                                   { "google":"app-id=com.zoho.writer"},
                                   { "icon":""},
                               ]}*/
            ]
        }

        /* get The data mobile app data from the JSON */
        function getIndex() {
            for (var i = 0; i < zoho["mobileApps"].length; i++) {
                var keys = Object.keys(zoho["mobileApps"][i]);
                for (var j = 0; j < keys.length; j++) {
                    if (keys[j] == productName) {
                        var keys2 = zoho["mobileApps"][i][keys[j]].length;
                        appsIds = [zoho["mobileApps"][i][keys[j]][1]["apple"], zoho["mobileApps"][i][keys[j]][2]["google"]]
                        appendingMetaTag()
                        return [i, j, keys];
                    }

                }
            }
        }




        // Appending meta tags script stared.

        function appendingMetaTag() {
            $('meta').each(function(index, tag) {
                var content = tag.getAttribute('name');

                if (content == 'apple-itunes-app' || content == 'google-play-app') {
                    metaHas = true;
                    appTitle = tag.getAttribute('app-title');
                    appIcon = tag.getAttribute('app-icon');

                }
            });
            if (!metaHas) {
                if (productName == 'survey' || productName == 'inventory' || productName == 'assist') {
                    loopVal = 0
                } else {
                    loopVal = 1;
                }
                for (var i = 0; i <= loopVal; i++) {
                    var meta = document.createElement('meta');
                    meta.name = metaName[i];
                    meta.content = appsIds[i];
                    document.getElementsByTagName('head')[0].appendChild(meta);
                }
            }
        }

        // Appending meta tags script stared.

        // Triggering smart Banner script started.
        function smartFun() {
            if (productName != 'creator') {
                getVal = getIndex(); // getValues
                if (!metaHas) {
                    //$('.header').addClass('add-smartbanner');
                    if (typeof getVal != 'undefined' && typeof $.smartbanner != 'undefined') {
                        $.smartbanner({
                            title: zoho["mobileApps"][getVal[0]][getVal[2][0]][0]["title"],
                            author: ' ',
                            force: android ? 'android' : 'ios',
                            daysHidden: 0,
                            daysReminder: 0
                        });
                    }
                } else {
                    //$('.header').addClass('add-smartbanner');
                    if (typeof getVal != 'undefined' && typeof $.smartbanner != 'undefined') {
                        $.smartbanner({
                            title: appTitle,
                            author: ' ',
                            force: android ? 'android' : 'ios',
                            daysHidden: 0,
                            daysReminder: 0
                        });
                    }
                }
            }
        }

        // Triggering smart Banner script end.

        // Toggling smart Banner script started.

        $('.theme-toggle').on('click', function(e) {
            e.preventDefault();
            $.smartbanner('switchType')
            $(this).text($(this).text() == 'Preview Android' ? 'Preview iOS' : 'Preview Android')
        })
        if (android) $('.theme-toggle').text('Preview iOS');
    }

    // Toggling smart Banner script end.

    //* This is for ZOHO smart banner script end



    

    //window.onload = function(){
    //resetUrl(productName);
    //}
    var script = document.createElement('script');
    var getDomain = document.domain;
    var splitUrl = getDomain.split('.');
    var domainOne = splitUrl.pop();
    var Zdomain = splitUrl.pop();

    if (window.location.origin.indexOf('zohocrm') > -1) {
        k = 'zoho';
        Zdomain = 'zoho';
    }
   /* script.src = "https://accounts." + Zdomain + "." + domainOne + "/u/info";
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = geturL;*/


    /* this is for header hover animation */

    var timeout;
    var $getCh;
    var menutimeout;
    var mouseEnter = true;
    var timeDelay = 200;
    $('.dropdown-mask').css({
        'height': $('.catagory-dropdown').innerHeight()
    })
    $('.menu li').hover(
        function(e) {
            $this = $(this);
            var bposX = e.clientX;
            timeout = setTimeout(function() {
                var aposX = e.clientX;
                if ($('.dropdown-mask').hasClass('showmaskCheck')) {
                    timeDelay = 0;
                    if (bposX == aposX) {
                        $getCh = $this.children()[1];
                        $($getCh).addClass('addMe');
                        $('.catagory-dropdown.addMe').children().addClass('showMe');
                    }
                }
            }, timeDelay);
        },
        function() {
            clearTimeout(timeout);
            $($getCh).removeClass('addMe');
            $('.catagory-dropdown').children().removeClass('showMe');
        });

    $('.menu').hover(function() {
        if ($('.dropdown-mask').hasClass('showmaskCheck')) {
            timeDelay = 0;
        } else {
            timeDelay = 200;
        }
        menutimeout = setTimeout(function() {
            $('.dropdown-mask').addClass('showmask');
        }, 100);
        $('.dropdown-mask').addClass('showmaskCheck');
    }, function() {
        clearTimeout(menutimeout);
        $('.dropdown-mask').removeClass('showmaskCheck');
        $('.dropdown-mask').removeClass('showmask');
        timeDelay = 200;
    })


    $(document).on("click", ".moreapps", function(e) {
        var name = 'yes'
        sessionStorage.setItem('viewallapp', JSON.stringify(name));
    });

    function hide() {
        navClick = false;
        $('.mobile-menu').css({
            'left': '-100%'
        });
        setTimeout(function() {
            $('.mask-holder').addClass('hide');
        }, 100)

        setTimeout(function() {
            $('html').css({
                'overflow': 'auto'
            });
            $('body').removeAttr('style');
        }, 400)
    }

    function checkCookies() {
        if (getGlobalCookie('_z_identity')) {
            if ($("body").find("main")) {
                $('.main').addClass('umain');
                $(document).trigger('umain-trigger');
            }
            if ($("body").find(".main-container-wrapper")) {
                $('.main-container-wrapper').addClass('umain');
            }
        }
    }

    checkCookies();

});

function zohoGASignupEvent() {}

function slideDown(getWidth) {
    //console.log('scrollcheck',getWidth);

    $('.userinfo-details').removeClass("zoho-expand");
    if (getWidth > 285) {
        $('.userinfo-details').css({
            'width': 35,
            'height': 35
        });
        $('.product-header-top .userinfo-details, .product-header-top .userinfo-container').css({
            'height': '43px'
        });
    }

    if ($(window).scrollTop() > 200) {
        $('.product-header-top').removeClass('slide');
        $('.product-header-top .product-header-inner').css({
            'overflow': 'visible'
        }); /* remove the class for slidedown the another menu  */
    } else {
        $('.product-header-top').addClass('slide');
        $('.product-header-top .product-header-inner').css({
            'overflow': 'hidden'
        }); /* add the class for slideup the menu  */
    }
}


function intervelStart() {
    setInt = setTimeout(function() {
        count += 1;
        if (count <= 1) {
            $('.banner-part').css({
                'left': 0 - ($(bannerCh[count]).offset().left)
            })
            $(zSlide[count]).addClass('Zselect').siblings().removeClass('Zselect');
            intervelStart();
        } else {
            $('.banner-part').css({
                'left': 0
            })
            count = 0;
            $(zSlide[count]).addClass('Zselect').siblings().removeClass('Zselect');
            intervelStart();
        }
    }, speed);
}
/* slide menu content insert */
function slideMenu() {
    var getProhead = $('.product-menu').length;
    if (getProhead > 0) {
        $('.product-header-top').html($('.product-header').html());
        setTimeout(function() {
            $('.product-header-top .zgh-localization').hide();
        }, 500);
        var nod = $('.signing').clone();
        $('.product-header-top .product-logo').after(nod);
        inserApps();
    } else {
        inserApps();
    }
}


function inserApps() {
    var getDomain = document.domain;
    var splitUrl = getDomain.split('.');
    var domainOne = splitUrl.pop();
    var domain = splitUrl.pop();

    if (window.innerWidth <= 767) {
        $('.product-header').addClass('sticky');
        //$(insertUsericon).insertAfter('.product-header .sub-menu-icon');
        $('.product-header .product-menu').append('<li class="featured-apps-part"><div class="more-featured-apps"><h4>Other Zoho Products</h4><div class="featured-pro"> <a class="more-crm" href="/crm/"><span></span>CRM</a> <a class="more-mail" href="/mail/"> <span></span>Mail</a> <a class="more-creator" href="/creator/"><span></span>Creator</a> <a class="more-books" href="/books/"><span></span>Books</a> </div><div class="more-links"><a href="https://www.' + domain + '.' + domainOne + '/" class="moreapps">More</a></div></div></li>')
        $('.product-menu').css({
            'height': window.innerHeight - 50
        })
    }
}


$(window).load(function() {
    if (domainOne == "eu") {
        $('.vi-linkedin, .vi-office365').hide();
    }
});

function zSignupPrevent() {
    var getsignupClass = document.getElementsByClassName('disabled-z-signup').length;
    if (0 < getsignupClass) {
        return false;
    }
}

function getGlobalCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



/****************************************Footer Content Starts****************************************/
$(document).ready(function() {
    var winWidth = $(window).width();
    if (window.innerWidth < 480) {
        var inervl = setInterval(function() {
            if ($(".footer-sec-wrap .product-links").length > 0) {
                clearInterval(inervl);
                if ($(".footer-sec-wrap .product-links ul.contact-zoho").length <= 0) {
                    var contactLinks = '<ul class="contact-zoho" > <li><a href="/">Zoho Home</a></li><li><a href="/contactus.html">Contact</a></li></ul>';
                    var privacyLinks = '<ul class="security-policy" > <li><a href="/security.html">Security</a></li> <li><a href="/ipr-complaints.html">IPR Complaints</a></li><li><a href="/policy.html "> Anti-spam Policy</a></li><li id="footer-terms"><a href="/terms.html">Terms of Service</a></li><li><a href="/privacy.html ">Privacy Policy</a></li><li id="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">Cookie Policy</a></li><li><a href="/gdpr.html">GDPR Compliance</a></li></ul>';
                    if ($('.footer-links-wrap .product-links').hasClass('one-column')) {
                        $('.footer-links-wrap .one-column div').eq(0).prepend('<h4>Quick Links</h4>')
                    }
                    var contact = "<div><h4>Contact</h4>" + contactLinks + "</div>";
                    contact += "<div><h4>Security and Privacy</h4>" + privacyLinks + "</div>";
                    $(".footer-sec-wrap .product-links").append(contact);
                }

                $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
                    "display": "none"
                });
                $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
                    "display": "none"
                });

                $(window).resize(function() {
                    if ($(this).width() != winWidth) {
                        winWidth = $(this).width();
                        changeFooterView();
                    }
                });

                changeFooterView();

                $(".footer-sec-wrap .product-links h4").on("click", function() {
                    if (window.innerWidth < 480) {
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            $(this).next("ul").slideUp();
                        } else {
                            $(".footer-sec-wrap .product-links ul").slideUp();
                            $(".footer-sec-wrap .product-links h4").removeClass("active");
                            $(this).addClass("active");
                            $(this).next("ul").slideDown();
                        }
                    }
                });

                function changeFooterView() {
                    if (window.innerWidth < 480) {
                        $(".footer-sec-wrap .product-links ul").slideUp();
                        $(".footer-sec-wrap .product-links h4").removeClass("active");
                        $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
                            "display": "block"
                        });
                        $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
                            "display": "block"
                        });
                        if (productName == 'reports') {
                            $('.lang-support').prev().hide();
                            $('.lang-support').hide();
                        }
                    } else {
                        $(".footer-sec-wrap .product-links ul").slideDown();
                        $(".footer-sec-wrap .product-links ul ul").slideUp();
                        $(".footer-sec-wrap .product-links h4").removeClass("active");
                        $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({
                            "display": "none"
                        });
                        $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({
                            "display": "none"
                        });
                        if (productName == 'reports') {
                            $('.lang-support').show();
                            $('.lang-support').prev().show();
                        }
                    }
                }
            }
        }, 500);
    }
});

/****************************************Footer Content End****************************************/
/* EU redirection start */
var countryCodeArr = ['RS', 'VA', 'GB', 'UA', 'CH', 'SE', 'ES', 'SI', 'SK', 'RS', 'SM', 'RU', 'RO', 'PT', 'PL', 'NO', 'NL', 'ME', 'MC', 'MD', 'MT', 'MK', 'LU', 'LT', 'LI', 'LV', 'RS', 'IT', 'IM', 'IE', 'IS', 'HU', 'GR', 'GI', 'DE', 'FR', 'FI', 'FO', 'EE', 'DK', 'CZ', 'CY', 'HR', 'BG', 'BA', 'BE', 'BY', 'AT', 'AD', 'AL'];

$(document).ready(function() {
    if (currentUrlLang != '') {
        dropheight();
    }

    function langStrip() {
        var gotoCountry = CountryCode.toLowerCase();
        (CountryCode.toLowerCase() == 'br') ? (gotoCountry = 'pt-br') : '';
        var countryLatin = ['ES', 'AR', 'BO', 'CL', 'CO', 'EC', 'GF', 'PY', 'PE', 'SR', 'UY', 'VE', 'MX'];
        (countryLatin.indexOf(CountryCode) > -1) ? (gotoCountry = 'es-xl') : '';

        var _ele = document.getElementsByTagName('body')[0].getAttribute("data-lang-list");
        if (_ele != null && _ele != 'undefined') {
            var detectedLangNew = document.getElementsByTagName('body')[0].getAttribute('data-lang-list').split(','),
                detectedLang = [];
            for (var i = 0; i < detectedLangNew.length; i++) {
                if (langArr.indexOf(detectedLangNew[i]) > -1) {
                    var _x = langArr[langArr.indexOf(detectedLangNew[i])];
                    if (_x != 'en' && _x != 'jp') {
                        detectedLang.push(langArr[langArr.indexOf(detectedLangNew[i])]);
                    }
                }
            }

            var _loaded = localStorage.getItem('zloaded') == '1';
            try {} catch (err) {
                _loaded = true;
            }
            if ((detectedLang.indexOf(gotoCountry) > -1 || gotoCountry == 'ae' || gotoCountry == 'sa') && window.location.pathname.split('/')[1] != gotoCountry && !_loaded) {
                var _txt = '',
                    _btnTxt = '',
                    _lo = window.location.href;
                if (gotoCountry != 'ar') {
                    var _txt = '',
                        _btnTxt = '',
                        _lo = window.location.href,
                        _val = '';
                    if (gotoCountry == 'fr') {
                        _txt = 'Vous pouvez maintenant naviguer en franÃ§ais!';
                        _btnTxt = 'Bonjour';
                    } else if (gotoCountry == 'de') {
                        _txt = 'Sie kÃ¶nnen jetzt die deutsche Suchfunktion nutzen!';
                        _btnTxt = 'Hallo';
                    } else if (gotoCountry == 'pt-br') {
                        _txt = 'Agora vocÃª pode navegar em portuguÃªs!';
                        _btnTxt = 'OlÃ¡';
                    } else if (gotoCountry == 'es-xl') {
                        _txt = 'Â¡Ahora puede navegar en espaÃ±ol!';
                        _btnTxt = 'Hola';
                    } else if (gotoCountry == 'nl') {
                        _txt = 'Nu kun je navigeren';
                        _btnTxt = 'Hallo';
                    } else if (gotoCountry == 'ae' || gotoCountry == 'sa') {
                        _txt = "Ø§Ù„Ø¢Ù† ÙŠÙ…ÙƒÙ†Ùƒ Ø§Ù„ØªÙ†Ù‚Ù„";
                        _btnTxt = "Ù…Ø±Ø­Ø¨Ø§";
                    }
                    if (_btnTxt != '') {
                        $('.ztopstrip-container').append('<div class="langstrip"><span class="langTxt">' + _txt + '</span><span class="langBtn">' + _btnTxt + '</span><span class="langClose">X</span></div>');
                        $('.langstrip').css('display', 'block');
                        $('.langstrip .langClose').on('click', function() {
                            try {
                                localStorage.setItem('zloaded', '1');
                            } catch (err) {}
                            $('.langstrip').remove();
                        });

                        $('.langstrip .langBtn').on('click', function() {
                            if (gotoCountry == 'ae' || gotoCountry == 'sa') {
                                gotoCountry = 'ar';
                            }
                            if (currentUrlLang == '') {
                                _lo = _lo.split(window.location.host).join(window.location.host + '/' + gotoCountry);
                            } else {
                                _lo = _lo.split('/' + currentUrlLang + '/').join('/' + gotoCountry + '/');
                            }
                            window.location = encodeURI(_lo);
                            try {
                                localStorage.setItem('zloaded', '1');
                            } catch (err) {}
                        });
                    }
                }
            }
        }
    }

    function coockieStrip() {
        var cookieStorage = localStorage.getItem('coockiechecked') == '1';
        if (domainOne == 'eu' && !cookieStorage) {
            var _txt = 'We use cookies to help us understand and serve you better. Take a look at our <a href="https://www.zoho.com/privacy/cookie-policy.html">Cookie Policy.</a>';
            (currentUrlLang == 'fr') ? _txt = 'Nous utilisons les cookies pour mieux vous comprendre et mieux vous satisfaire. Consultez notre <a href="https://www.zoho.com/fr/privacy/cookie-policy.html">Politique relative aux cookies.</a>': '';
            (currentUrlLang == 'de') ? _txt = 'Wir nutzen Cookies, um Sie besser zu verstehen und Ihnen einen noch besseren Service anzubieten. Werfen Sie einen Blick auf unsere <a href="https://www.zoho.com/de/privacy/cookie-policy.html">Cookie-Richtlinie.</a>': '';
            (currentUrlLang == 'pt-br') ? _txt = 'Usamos cookies para nos ajudar a compreender e atendÃª-lo melhor. Veja a nossa <a href="https://www.zoho.com/pt-br/privacy/cookie-policy.html">PolÃ­tica de cookies.</a>': '';
            (currentUrlLang == 'es-xl') ? _txt = 'Utilizamos cookies para poder entenderlo mejor y brindarle un servicio superior. Revise nuestra <a href="https://www.zoho.com/es-xl/privacy/cookie-policy.html">PolÃ­tica de cookies.</a>': '';
            (currentUrlLang == 'jp') ? _txt = '\u30b5\u30fc\u30d3\u30b9\u306e\u54c1\u8cea\u5411\u4e0a\u306e\u305f\u3081\u3001\u5f53\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u306f\u30af\u30c3\u30ad\u30fc\uff08Cookie\uff09\u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u5f53\u793e\u306eCookie\u306b\u95a2\u3059\u308b\u898f\u5b9a\u306f<a href="https://www.zoho.com/privacy/cookie-policy.html\u3053\u3061\u3089</a>\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002': '';

            $('body').prepend('<div class="cookiestrip"><span class="cookieTxt">' + _txt + '</span><span class="cookieClose">OK</span></div>');
            $('.cookieClose').on('click', function() {
                try {
                    localStorage.setItem('coockiechecked', '1');
                } catch (err) {}
                $('.cookiestrip').remove();
            });
        }
    }

    function EUdirectionFun() {
        if (typeof CountryCode != 'undefined' && CountryCode != null) {
            var _wlo = window.location.href;
            if (_wlo.indexOf('books') < 0 && _wlo.indexOf('expense') < 0 && _wlo.indexOf('invoice') < 0 && _wlo.indexOf('subscriptions') < 0 && _wlo.indexOf('inventory') < 0 && _wlo.indexOf('checkout') < 0 && _wlo.indexOf('gst') < 0) {
                if (domainOne != 'in') {
                    langStrip();
                }
            }
            if (countryEu.indexOf(CountryCode) > -1 || domainOne == "eu") {
                coockieStrip();
            }
            var _element = document.getElementsByTagName('body')[0];
            _element.classList.add("ccode-" + CountryCode.toLowerCase());
            if (currentUrlLang != 'jp' && window.location.href.indexOf('crm/nps.html') < 0 && window.location.href.indexOf('cliq/m-signup.html') < 0 && window.location.href.indexOf('notebook/evernote-alternative.html') < 0) {
                /*var _zcom = 'com', _zeu = 'eu';
                var _lo = window.location.href;	
                var _dom = document.referrer;
                //if(productName != 'books' && productName != 'financeplus' && productName != 'invoice' && productName != 'subscriptions' && productName != 'expense' && productName != 'inventory' && productName != 'checkout'){
                if(_dom != ''){
                	if(document.referrer.split('/').length > 2){
                		_dom = document.referrer.split('/')[0]+'//'+document.referrer.split('/')[2];
                	}
                	_dom = _dom.split('zoho.'+''+'in').join('zoho.'+domainOne);
                	_dom = _dom.split('zoho.'+''+'com').join('zoho.'+domainOne);
                	_dom = _dom.split('zoho.'+''+'eu').join('zoho.'+domainOne);
                }
                if(_lhref == _dom || window.location.origin == _dom){
                	try {
                		if(localStorage.getItem('lanchanged') != '1'){
                			localStorage.setItem('lanchanged', '1');
                		}
                	} catch (err) {
                		langStorage = true;
                	}	
                }
                var langStorage = localStorage.getItem('lanchanged') == '1';
                if(_lhref.indexOf('prezoho.zoho') < 0 && _lhref.indexOf('local'+''+'zoho') < 0){
                	if(!langStorage && domainOne != 'in' && currentUrlLang == '' && CountryCode == "IN"){
                		_lo = encodeURI(_lo.split('zoho.'+domainOne).join('zoho.'+'in'));
                		window.location = _lo;
                	}

                	if (countryEu.indexOf(CountryCode) > -1 && !langStorage && domainOne != 'eu') {
                		_lo = encodeURI(_lo.split('zoho.' + domainOne).join('zoho.' + _zeu));
                		window.location = _lo;
                	}
                }*/
                /*if(window.location.href.indexOf('?rdc') > -1){
                	try {
                		localStorage.setItem('lanchanged', '1');
                	}catch(err) {}	
                }
                var langStorage = localStorage.getItem('lanchanged') == '1';
                try {
                	localStorage.setItem('lanchanged', '1');
                }catch(err) {
                	langStorage = true;
                }
                if(_lhref.indexOf('prezoho.zoho') < 0 && _lhref.indexOf('local'+''+'zoho') < 0){
                	if(!langStorage && domainOne != 'in' && currentUrlLang == '' && CountryCode == "IN" && productName != 'contactmanager'){
                		_lo = encodeURI(_lo.split('zoho.'+domainOne).join('zoho.'+'in'));
                		window.location = _lo;
                	}
                	
                	if(countryEu.indexOf(CountryCode) > -1 && !langStorage && domainOne != 'eu'){
                		_lo = encodeURI(_lo.split('zoho.'+domainOne).join('zoho.'+_zeu));
                		window.location = _lo;
                	}
                }*/
                //}
            }
        }
    }

    function checkUrl(a) {
        if (a.indexOf('#') > 0) {
            a = a.split('#')[0] + '#' + encodeURI(a.split('#')[1])
        }
        window.location = a;
    }

    function changeLocation(a) {
        if (a.indexOf('#') > 0) {
            a = a.split('#')[0] + '#' + encodeURI(a.split('#')[1])
        }
        return a;
    }
    /* EU redirection End */

    /* get and set parameter */
    var z_set_parameter = function(url, parameterName, parameterValue, atStart) {
        replaceDuplicates = true;
        if (url.indexOf('#') > 0) {
            var cl = url.indexOf('#');
            urlhash = url.substring(url.indexOf('#'), url.length);
        } else {
            urlhash = '';
            cl = url.length;
        }
        sourceUrl = url.substring(0, cl);
        var urlParts = sourceUrl.split("?");
        var newQueryString = "";
        if (urlParts.length > 1) {
            var parameters = urlParts[1].split("&");
            for (var i = 0;
                (i < parameters.length); i++) {
                var parameterParts = parameters[i].split("=");
                if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
                    if (newQueryString == "")
                        newQueryString = "?";
                    else
                        newQueryString += "&";
                    newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
                }
            }
        }
        if (newQueryString == "")
            newQueryString = "?";
        if (atStart) {
            newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
        } else {
            if (newQueryString !== "" && newQueryString != '?')
                newQueryString += "&";
            newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
        }
        return urlParts[0] + newQueryString + urlhash;
    }

    var z_get_parameter = function(url, name) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        /* get and set parameter End */
        //dropheight();

    var intervalCount = 0;

    function CheckelEment() {
        var runintervl = setTimeout(function() {
            if ($('.zgdprform-countrylist-container').length > 0) {
                var gdprElm = document.createElement("script");
                gdprElm.type = "text/javascript";
                gdprElm.src = "https://www." + Zdomain + "." + domainOne + "/js/gdpr-compliance.js";
                document.getElementsByTagName('head')[0].appendChild(gdprElm);
                clearInterval(runintervl);
            } else {
                intervalCount++;
                if (intervalCount < 25) {
                    CheckelEment();
                }
            }
        }, 500);
    }
    CheckelEment();

    var intervalSignupCount = 0;

    function CheckelEmentSignup() {
        var runintervlSignup = setTimeout(function() {
            if ($('.signup-box form').length > 0) {
                if ($('.za-captcha-container').length > 0) {
                    if ($('.za-country-container').length < 1) {
                        $('.za-captcha-container').after('<div class="za-country-container za-country-container-arrow"> <select class="form-input countryCnt za-country-select globalcountrycode-signup" name="country" id="country" placeholder="Select Country" aria-invalid="false"></select> </div>');
                        //$('.za-country-container').hide();
                    }

                    if ($('.za-newsletter-container').length > 0) {
                        var _txt = 'I would like to receive marketing communication from Zoho and Zoho\'s regional partners regarding Zoho\'s products, services, and events.'
                        if (typeof currentUrlLang != 'undefined') {
                            if (currentUrlLang == 'fr') {
                                _txt = 'Je souhaiterais recevoir des communications marketing de Zoho et de ses partenaires rÃ©gionaux concernant les produits, les services et les Ã©vÃ©nements.';
                            } else if (currentUrlLang == 'de') {
                                _txt = 'Ich mÃ¶chte von Zoho und regionalen Partnern von Zoho Marketingmitteilungen fÃ¼r Produkte, Dienstleistungen und Veranstaltungen erhalten.';
                            } else if (currentUrlLang == 'es-xl') {
                                _txt = 'Me gustarÃ­a recibir comunicaciones de marketing de Zoho y de los socios regionales de Zoho acerca de los productos, servicios y eventos de Zoho.';
                            } else if (currentUrlLang == 'pt-br') {
                                _txt = 'Gostaria de receber comunicaÃ§Ãµes de marketing da Zoho e dos parceiros regionais da Zoho sobre produtos, serviÃ§os e eventos da Zoho.';
                            } else if (currentUrlLang == 'nl') {
                                _txt = 'Ik wil graag marketingberichten ontvangen van Zoho en de regionale partners van Zoho over toekomstige producten, services en evenementen.';
                            } else if (currentUrlLang == 'jp') {
                                _txt = 'Zoho&#12392;Zoho&#12398;&#12497;&#12540;&#12488;&#12490;&#12540;&#20225;&#26989;&#12363;&#12425;&#12289;Zoho&#12398;&#35069;&#21697;&#12289;&#12469;&#12540;&#12499;&#12473;&#12289;&#12452;&#12505;&#12531;&#12488;&#12395;&#38306;&#12377;&#12427;&#12510;&#12540;&#12465;&#12486;&#12451;&#12531;&#12464;&#24773;&#22577;&#12398;&#21463;&#12369;&#21462;&#12427;&#12371;&#12392;&#12395;&#21516;&#24847;&#12375;&#12414;&#12377;&#12290';
                            }
                        }

                        $('.za-newsletter-container').html('<label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium unchecked" id="signup-newsletter"></span> <span>' + _txt + '</span> </label>');
                        $('.za-newsletter-container').css('display', 'none');
                    }
                }
                var gdprElm = document.createElement("script");
                gdprElm.type = "text/javascript";
                if (window.location.href.indexOf('survey') > 0) {
                    //gdprElm.src = "https://www."+Zdomain+"."+domainOne+"/js/gdpr-compliance-signup-test.js";
                } else {
                    //gdprElm.src = "https://www."+Zdomain+"."+domainOne+"/js/gdpr-compliance-signup.js";
                }
                gdprElm.src = "https://www." + Zdomain + "." + domainOne + "/js/gdpr-compliance-signup.js";
                document.getElementsByTagName('head')[0].appendChild(gdprElm);
                clearInterval(runintervlSignup);
            } else {
                intervalSignupCount++;
                if (intervalSignupCount < 25) {
                    CheckelEmentSignup();
                }
            }
        }, 100);
    }
    /*var ccountryCount = 0;
    function checkcountryCode(){
    	ccountryCount++;
    	var v = setTimeout(function(){
    		if(typeof CountryCode != 'undefined' && ccountryCount < 20){
    			CheckelEmentSignup();		
    		}else{
    			checkcountryCode();
    		}
    	},1000);
    }*/

    if (window.location.href.indexOf('/expense/') < 0) {
        CheckelEmentSignup();
        //ipElm.onload = CheckelEmentSignup;
    }
    ipElm.onload = EUdirectionFun;

});


function dropheight() {
    var HArr = [];
    var HCount = 0;
    var devidCount = 0;
    for (var i = 0; i < $('.header .menu li').length; i++) {
        for (var j = 1; j < $('.header .menu li .catagory-inner').eq(i).find('div').length; j++) {
            HArr[HCount] = ($('.header .menu li .catagory-inner').eq(i).find('div').eq(j).height())
            HCount++;
        }
    }
    var _maxVal = Math.max.apply(Math, HArr);
    $('.app-box').css('height', _maxVal + 'px')

    for (var j = 1; j < $('.header .menu li .catagory-inner').eq(0).find('div').length; j++) {
        var aV = $('.header .menu li .catagory-inner').eq(0).find('div').eq(1).offset().top;
        var bV = $('.header .menu li .catagory-inner').eq(0).find('div').eq(j).offset().top;
        if (aV == bV) {
            devidCount++;
        }
    }
    for (var i = 0; i < $('.header .menu li').length; i++) {
        var _rowcount = (Math.ceil(($('.header .menu li .catagory-inner').eq(i).find('div').length - 1) / devidCount));
        var _height = (_maxVal * _rowcount)
        if (_rowcount == 1) {
            _height = (_maxVal * 2)
        }
        $('.header .menu li .catagory-inner').eq(i).find('div').eq(0).css('height', _height + 'px')
    }
}


/* Access button click */
$(document).on("click", ".umain .signing .signup", function(e) {
    if ($(this).attr('href').indexOf("_ga")) {
        e.preventDefault();
        window.location = $(this).attr('href').split('?_ga')[0];
    }
});
/*
$(window).load(function() {
	if($('.zgdprform-countrylist-container').length > 0){
		var gdprElm = document.createElement("script");
		gdprElm.type = "text/javascript";
		gdprElm.src = "https://www.zoho.com/js/gdpr-compliance.js";
		document.getElementsByTagName('head')[0].appendChild(gdprElm);
	}
});*/


/********** pricing Code  *************/

$(document).ready(function(e) {
    //HTML <span data-common-zprice="USD;INR;EUR;GBP;JPY;AUD;SGB//1;2;3;4;5;6;7"></span>
    //Call displayZPricing() if needed from node JS
    displayZPricing();
});

function displayZPricing() {
    $("span[data-common-zprice]").each(function(index, element) {
        var pricingCurrencyList = $(this).attr('data-common-zprice').split("//")[0].split(";");
        var pricingAmountList = $(this).attr('data-common-zprice').split("//")[1].split(";");
        var currentCurrencyIndex = pricingCurrencyList.indexOf("USD");
        var zpricingCurrencySym = "&#x24;";
        var zpricingAmountVal = pricingAmountList[currentCurrencyIndex];

        if (domainOne == "eu") {
            if (CountryCode == "GB" && $.inArray("GBP", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("GBP");
                zpricingCurrencySym = "&#xa3;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            } else if ($.inArray("EUR", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("EUR");
                zpricingCurrencySym = "&#x20AC;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            }
        } else {
            if (CountryCode == "IN" && $.inArray("INR", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("INR");
                zpricingCurrencySym = "&#x20B9;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            } else if (CountryCode == "AU" && $.inArray("AUD", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("AUD");
                zpricingCurrencySym = "A&#x24;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            } else if (CountryCode == "SG" && $.inArray("SGD", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("SGD");
                zpricingCurrencySym = "S&#x24;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            } else if (CountryCode == "JP" && $.inArray("JPY", pricingCurrencyList) > -1) {
                currentCurrencyIndex = pricingCurrencyList.indexOf("JPY");
                zpricingCurrencySym = "&#xa5;";
                zpricingAmountVal = pricingAmountList[currentCurrencyIndex];
            }
        }

        $(this).addClass('zprice-container').attr('id', 'zprice-container' + (index + 1));
        $(this).html('<span class="zprice-currency">' + zpricingCurrencySym + '</span><span class="zprice-amount">' + zpricingAmountVal + '</span>');
    });
}


// Temp salesiq dropdown
var location_host = location.href;
if ((location_host.indexOf('/salesiq/live-chat-for-ecommerce/') > 0) || (location_host.indexOf('/salesiq/live-chat-for-travel/') > 0) || (location_host.indexOf('/salesiq/live-chat-for-real-estate/') > 0) || (location_host.indexOf('/salesiq/live-chat-for-startups/') > 0) || (location_host.indexOf('/salesiq/live-chat-for-financial-service/') > 0) || (location_host.indexOf('/salesiq/product-tour/') > 0)) {
    $('body').addClass('saplesiq-temp-menu');
    $('.product-header-inner .product-menu>li:last-child a').text('Knowledge Base');
    $('.product-header-inner .product-menu>li:nth-child(2)> a').hide();
    $('.product-header-inner .product-menu>li:nth-child(2)').addClass('temp-dropdown').append('<span title="" data-target="#" class="dropdown-toggle nolink" data-toggle="dropdown">Free Resources<span class="caret"></span></span><ul class="dropdown-menu"><li class="leaf"><a href="https://www.zoho.com/salesiq/product-tour/">Product Tour</a></li><li class="leaf"><a href="https://www.zoho.com/salesiq/ebooks/">Ebooks</a></li><li class="leaf"><a href="https://www.zoho.com/salesiq/infographics/">Infographics</a></li><li class="leaf"><a href="https://www.zoho.com/salesiq/blog">Blog</a></li></ul>');
} else {
    //console.log('Dropdown Not Working');
}


// ('/salesiq/live-chat-for-customer-service/')
if (location_host.indexOf('/salesiq/product-tour/') > 0) {
    $('body').addClass('saplesiq-temp-no-menu');
}

// Temp salesiq dropdown end


/********** pricing Code End *************/



/*-----------------------------Global Header Starts-------------------------------------------------*/
//Global Header Events on Ready
function zGlobalHeader() {
    var doc = $(document);
    var wW = $(window).width();
    var prdName = productName;
    (prdName == 'one') ? (prdName = 'zohoone') : '';
    (prdName == 'officeplatform') ? (prdName = 'officeintegrator') : '';
    (_lhref.indexOf('mdm-cloud.html') > 0) ? (prdName = 'Mobile Device Management') : '';
    (_lhref.indexOf('online-service-desk-software.html') > 0) ? (prdName = 'ServiceDesk Plus') : '';
    /*  Global Menu Block Starts */
    var zghBrand = ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a href="' + langsrc + '">Zoho</a></div>';
    var zghNav;
    if (prdName == 'home') {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">Products</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.com/customers.html">Customers</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">Support</a></li><li><a href="https://www.zoho.com/aboutus.html">About Us</a></li></ul></div>';
    } else {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + allprd + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>';
    }
    var _val = 'English';
    (currentUrlLang != '') ? (_val = lancountry[currentUrlLang]) : '';
    var zghSearch = ' <div class="zgh-search"> <span class="zgh-search-icon"></span> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" id="zgh-search-query" name="query" placeholder="Search for product overviews, FAQs, and more..." type="text"><input class="zgh-search-btn" type="button"> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
    var zghLoc = '<div class="zgh-localization"><span class="zgh-localSelect">' + _val + '</span><div class="zgh-localBox"><ul></ul></div></div>';
    //var zghAcc ='<div class="zgh-accounts"><a href="javascript:;" target="_self" class="zgh-login">LOGIN</a><a href="javascript:;" class="zgh-signup">Sign Up</a></div>';
    var zghAcc = '<div class="zgh-accounts"><a href="https://accounts.'+Zdomain+'.'+dcdomainOne+'/signin?servicename=ZohoHome&signupurl=https://www.'+Zdomain+'.'+domainOne+langsrc+'signup.html" class="zgh-login">LOGIN</a><a href="https://www.'+Zdomain+'.'+domainOne+langsrc+'signup.html" class="zgh-signup">Get Started</a></div>';
	var zghUtil;
    var d_local = 'local',
        d_zoho = 'zoho';
    if (currentUrlLang == "" && (window.location.host == "www." + d_local + d_zoho + "." + _com + "" || window.location.host == "prezoho.zoho." + _com + "" || window.location.host == "www.zoho." + _com + "" || window.location.host == "www.zoho." + _eu + "" || window.location.host == "www.zoho.in" || window.location.host == "prezoho.zohocorp.com" || window.location.host == "zoho.zohocorp.com" || window.location.host == "zcms.zohocorp.com")) {
        zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + '</div>';
    } else {
        //zghUtil = '<div class="zgh-utilities">' + zghLoc + zghAcc + '</div>';
        zghUtil = '<div class="zgh-utilities">' + zghAcc + '</div>';
    }
    var zghBlock = '<div class="zgh-headerWrap">' + zghBrand + zghNav + zghUtil + '</div>';
    var _signin = '',
        _signint = '',
        _signup = '',
        _signupt = '';

    if ($('.signing .signin').length > 0) {
        _signin = $('.signing .signin').attr('href');
        _signint = $('.signing .signin').html();
    }
    if ($('.signing .signup').length > 0) {
        _signup = $('.signing .signup').attr('href');
        _signupt = $('.signing .signup').html();
    }
    $('.header').html('');
    $('.header').append(zghBlock);
    $('.product-header-inner .product-menu').before(zghAcc);
    $('.product-header-inner .product-menu').before(zghLoc);
    $('.product-header-top .product-nav-links').before(zghAcc);
    $('.zgh-signup').css('display', 'inline-block');
    if (_signin != '') {
        $('.zgh-accounts .zgh-login').attr('href', _signin);
    }
    if (_signint != '') {
        $('.zgh-accounts .zgh-login').html(_signint);
    }
    if (_signup != '') {
        $('.zgh-accounts .zgh-signup').attr('href', _signup);
    } else {
		if(productName == 'home'){
			$('.zgh-accounts .zgh-signup').attr('href', '/signup.html');
		}else{
			$('.zgh-accounts .zgh-signup').attr('href', '/' + productName + '/signup.html');
		}
    }
    if (_signupt != '') {
        $('.zgh-accounts .zgh-signup').html(_signupt);
    }
    if (productName == 'mail') {
        $('.zgh-accounts .zgh-login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=VirtualOffice&signupurl=https://www.' + Zdomain + '.' + domainOne + '//workplace/pricing.html?src=zmail-signup&serviceurl=https%3A%2F%2Fmail.' + Zdomain + '.' + domainOne + '%2Fzm%2F');
    } else if (productName == "it-management") {
        $('.zgh-accounts .zgh-login').attr('href', 'https://accounts.' + Zdomain + '.' + domainOne + '/signin?servicename=alarmsone&serviceurl=https%3A%2F%2Falarmsone.manageengine.com%2Fjsp%2FSuccess.jsp');
        $('.zgh-accounts .zgh-signup').attr('href', 'https://mdm.manageengine.com/signup.html?ZohoITMainPage');
    }
    $('.signing').html('');
    /*  Global Menu Block Ends */
    /*  Global All Product Starts */
    //Set Menu Lang & Path to get json values
    var menuLang;
    var menuUrlLang;
    if (currentUrlLang == "" || currentUrlLang == undefined) {
        menuLang = 'en';
        menuUrlLang = '';
    } else {
        menuLang = currentUrlLang;
        menuUrlLang = '/' + currentUrlLang;
    }
    //Menu Order in Array
    var menuOrder = [];
    var categoryArr = [];
    var headerProductArr = [];
    var menuBoxLen = 30;
    for (var i = 1; i <= menuBoxLen; i++) {
        menuOrder.push(i);
    }
    //Product Box Structure
    function linkupdates(a) {
        if (a == 'IT Management' || a == 'Finance Plus' || a == 'Checkout' || a == 'ServiceDesk Plus' || a == 'Mobile Device Management' || a == 'Site24x7' || a == 'Office Integrator' || menuLang == "zh-hans" || a.toLowerCase() == 'orchestly' || a.toLowerCase() == 'payroll') {
            return '';
        } else if (domainOne == "com.cn" || ((a == 'Subscriptions' || a == 'Inventory' || a == 'Expense' || a == 'Finance Plus' || a == 'Checkout' || a == 'Invoice') && menuLang == 'ar')) {
            if (menuLang == 'jp' && (a == 'Finance Plus' || a == 'Checkout')) {} else {
                return '';
            }
        } else if ((a == 'Books' || a == 'Invoice') && (menuLang == "id" || menuLang == "th")) {
            return '';
        } else {
            if ((menuLang == 'pt-br' || menuLang == 'nl') && (a == 'Subscriptions' || a == 'Inventory' || a == 'Expense')) {
                return '';
            } else {
                return menuUrlLang;
            }
        }
    }

    function boxDiv(getProdItem, proURL, prdNameclass, productVersion, productVisible, productName, productDesc, productBoxHidden, setBlank, setPrdTagline, productTagLine) {
        if (productVisible == true) {
            var dataBox;
            var _lurl = '';
            var _lurl = '';
            if (menuLang == 'de' || menuLang == 'fr' || menuLang == 'es-xl' || menuLang == 'pt-br' || menuLang == 'nl' || menuLang == 'id' || menuLang == 'th') {
                if (menuLang == 'es-xl') {
                    _lurl = '/es';
                } else if (menuLang == 'pt-br') {
                    _lurl = '/pt';
                } else {
                    _lurl = '/' + menuLang;
                }
            }
            (proURL.indexOf('www.site24x7.com') > 0) ? (proURL = 'https://www.site24x7.' + domainOne + _lurl + '/') : '';
            if (currentUrlLang != '') {
                if (proURL.indexOf('online-service-desk-software.html') > 0 || proURL.indexOf('mdm-cloud.html') > 0 || proURL.indexOf('checkout') > 0 || proURL.indexOf('officeplatform/integrator') > 0 || proURL.indexOf('financeplus') > 0 || proURL.indexOf('it-management') > 0 || menuLang == "zh-hans") {
                    if (currentUrlLang == 'jp' && (proURL.indexOf('financeplus') > 0 || proURL.indexOf('checkout') > 0)) {

                    } else if (currentUrlLang == 'jp' && (proURL.indexOf('it-management') > 0 || proURL.indexOf('online-service-desk-software.html') > 0)) {
                        proURL = 'https://www.manageengine.jp/products/ServiceDesk_Plus/';
                    } else {
                        if (proURL.indexOf(langsrc) > -1) {
                            proURL = ('/' + proURL.split(langsrc)[1]);
                        }
                    }
                }
            }

            if (menuLang == 'pt-br') {
                if (proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            } else if (menuLang == 'nl' || menuLang == 'ar') {
                if (proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0 || proURL.indexOf('invoice') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            } else if (menuLang == 'id' || menuLang == 'th') {
                if (proURL.indexOf('books') > 0 || proURL.indexOf('expense') > 0 || proURL.indexOf('subscriptions') > 0 || proURL.indexOf('inventory') > 0 || proURL.indexOf('invoice') > 0) {
                    proURL = ('/' + proURL.split(langsrc)[1]);
                }
            }
            if (proURL.indexOf('marketplace') < 0) {
                proURL = proURL + '?src=top-header&ireft=' + prdName + '-' + categoryArr[categoryArr.length - 1].substring(0, 2);
            } else {
                if (domainOne != 'com') {
                    proURL = proURL.split('.com').join('.' + domainOne);
                }
            }
            if (prdName == 'orchestly') {
                if (proURL.indexOf('https') < 0) {
                    proURL = 'https://www.zoho.com' + proURL;
                }
                if (proURL.indexOf('www.orchestly.com/') > -1 && domainOne != 'com') {
                    proURL = proURL.split('.com').join('.' + domainOne);
                }
            }

            if (setPrdTagline) {
                if (setBlank) {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                } else {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><strong>' + productTagLine + '</strong><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                }
            } else {
                if (setBlank) {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a target="_blank" href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                } else {
                    if (productVersion != "") {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><span>' + productVersion + '</span><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }

                    } else {
                        if (productBoxHidden) {
                            dataBox = '<div data-hidden="true" data-index="' + getProdItem + '" class="zgh-menuItem zgh-hidden zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        } else {
                            dataBox = '<div data-index="' + getProdItem + '" class="zgh-menuItem zgh-b-' + prdNameclass + '"><a href="' + proURL + '" class="zgh-i-' + prdNameclass + '"><p>' + productName + '</p><em>' + productDesc + '</em></a></div>';
                        }
                    }
                }
            }
            return dataBox;
        }
    }

    var getJsonFile;
    getJsonFile = '/sites/default/files/global-menu.json';
    //Getting Related Products
    if (prdName != '') {
        var getRelprds = [];
        $.getJSON(getJsonFile, function(data) {
            $.each(data, function(index, item) {
                $.each(item.categoryProducts, function(index, items) {
                    if (items.productName == 'Zoho One' && prdName == 'One') {
                        items.productName = 'One';
                    }
                    if (items.productName.toLowerCase().replace(/-|\s/g, "") == prdName.toLowerCase().replace(/-|\s/g, "")) {
                        if (prdName == 'One') {
                            items.productName = 'Zoho One';
                        }
                        if (items.relatedProducts != undefined) {
                            getRelprds.push(items.relatedProducts.split(','));
                            getRelprds[0].unshift(items.productName);
                        }
                    }
                });
            });

            if (getRelprds.length >= 1) {
                $.each(getRelprds[0].reverse(), function(index, item) {
                    $.each(data, function(getindex, getItem) {
                        $.each(getItem.categoryProducts, function(getindex1, getItem1) {
                            if (item.toLowerCase().replace(/-|\s/g, "") == getItem1.productName.toLowerCase().replace(/-|\s/g, "")) {
                                if (prdName == 'One' && item == 'Zoho One') {
                                    getItem1.productName = 'one';
                                }
                                if (getItem1.productName.toLowerCase().replace(/-|\s/g, "") == prdName.toLowerCase().replace(/-|\s/g, "")) {
                                    if (getItem1.productName == 'one' && prdName == 'One') {
                                        getItem1.productName = 'Zoho One';
                                    }
                                    if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                        $('.zgh-nav > ul').prepend('<li><a class="active" href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header&ireft=">' + getItem1.productName + '</a></li>');
                                    }
                                } else {
                                    if (headerProductArr.indexOf(getItem1.productName) < 0) {
                                        $('.zgh-nav > ul').prepend('<li><a href="' + (linkupdates(getItem1.productName) + getItem1.productUrl) + '?src=top-header&ireft=' + prdName + '">' + getItem1.productName + '</a></li>');
                                    }
                                }
                                headerProductArr.push(getItem1.productName);
                            }
                        });
                    });
                });
            }
        });
    }
    var menuCateDiv = [3, 6, 8, 11];
    var menuCatBundle = [];
    //Getting products
    $.getJSON(getJsonFile, function(data) {
        $.each(menuOrder, function(getMenuindex, getMenuItem) {
            $.each(data, function(getDataindex, item) {
                getMenuCatName = item.categoryName[0][menuLang];
                getMenuCatIndex = getDataindex + 1;
                getMenuCatOrder = item.categoryOrder;
                getMenuCatBundle = item.categoryBundleProducts;
                getProVisCount = item.productVisibleCount;
                getMenuCatProducts = item.categoryProducts;
                var setMenuCatNameclass = item.categoryName[0].en;
                setMenuCatNameclass = setMenuCatNameclass.replace(/&+/g, '-').toLowerCase();
                setMenuCatNameclass = setMenuCatNameclass.replace(/\s+/g, '').toLowerCase();
                if (getMenuItem == getMenuCatOrder) {
                    if (getMenuCatOrder == 1) {
                        $('.zgh-products .zgh-megaMenuCat').append('<li class="active zgh-b-' + setMenuCatNameclass + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + '</span></li>');
                        $('.zgh-products .zgh-megaMenuPro').append('<div class="active zgh-' + setMenuCatNameclass + '" data-category="' + getMenuCatIndex + '"></div>');
                    } else {
                        $('.zgh-products .zgh-megaMenuCat').append('<li class="zgh-b-' + setMenuCatNameclass + '" data-list="' + getMenuCatIndex + '" data-bundle="' + getMenuCatBundle + '"><span>' + getMenuCatName + '</span></li>');
                        $('.zgh-products .zgh-megaMenuPro').append('<div class="zgh-' + setMenuCatNameclass + '" data-category="' + getMenuCatIndex + '"></div>');
                    }
                    categoryArr.push(setMenuCatNameclass);
                    if (getProVisCount != "" || getProVisCount != 0) {
                        var proShowMore = true;
                        $.each(menuOrder, function(getMenuindex, getProdItem) {
                            $.each(getMenuCatProducts, function(index, items) {
                                var setPrdNameclass = items.productName;
                                setPrdNameclass = setPrdNameclass.replace(/&+/g, '-').toLowerCase();
                                setPrdNameclass = setPrdNameclass.replace(/\s+/g, '').toLowerCase();
                                getProURL = '';
                                setBlank = false;
                                if (menuLang == 'en') {
                                    getProURL = items.productUrl;
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        setBlank = true;
                                    }
                                } else {
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        getProURL = items.productUrl;
                                        setBlank = true;
                                    } else {
                                        getProURL = menuUrlLang + items.productUrl;
                                    }
                                }
                                setPrdTagline = false;
                                getPrdTagline = '';
                                if (typeof items.productTagline != 'undefined') {
                                    setPrdTagline = true;
                                    getPrdTagline = items.productTagline[0][menuLang];
                                }
                                if (getProdItem == items.productOrder) {
                                    if (proShowMore) {
                                        proShowMore = false;
                                        $('div.zgh-' + setMenuCatNameclass).append('<div class="zmenu-menuProBox"><div class="zmenu-menuProBox-1"></div><div class="zmenu-menuProBox-2"></div><div class="zmenu-menuProBox-3"></div><div class="zmenu-menuProBox-4"></div></div><div class="zmenu-moreBox"><span class="zmenu-moreBtn">' + moreprd + '</span></div>');
                                    }
                                    var boxHidden;
                                    if (index + 1 <= getProVisCount) {
                                        boxHidden = false;
                                    } else {
                                        boxHidden = true;
                                    }
                                    if (wW < 768) {
                                        $('div.zgh-' + setMenuCatNameclass).append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        vendMobile = false;
                                    } else if (wW > 767 && wW < 1200) {
                                        split = (getProdItem - 1) % 3;
                                        if (split == 0) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-1').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 1) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-2').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 2) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-3').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        }
                                        vendTab = false;
                                    } else {
                                        split = (getProdItem - 1) % 4;
                                        if (split == 0) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-1').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 1) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-2').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 2) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-3').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        } else if (split == 3) {
                                            $('div.zgh-' + setMenuCatNameclass).find('.zmenu-menuProBox-4').append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                        }
                                        vendDesk = false;
                                    }
                                }
                            });
                            setBlank = false;
                            setPrdTagline = false;
                        });
                        proShowMore = true;
                    } else {
                        $.each(menuOrder, function(getMenuindex, getProdItem) {
                            $.each(getMenuCatProducts, function(index, items) {
                                var setPrdNameclass = items.productName;
                                setPrdNameclass = setPrdNameclass.replace(/&+/g, '-').toLowerCase();
                                setPrdNameclass = setPrdNameclass.replace(/\s+/g, '').toLowerCase();
                                getProURL = '';
                                setBlank = false;
                                if (menuLang == 'en') {
                                    getProURL = items.productUrl;
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        setBlank = true;
                                    }
                                } else {
                                    if (items.productUrl.indexOf("www.") > -1) {
                                        getProURL = items.productUrl;
                                        setBlank = true;
                                    } else {
                                        getProURL = menuUrlLang + items.productUrl;
                                    }
                                }
                                setPrdTagline = false;
                                getPrdTagline = '';
                                if (typeof items.productTagline != 'undefined') {
                                    setPrdTagline = true;
                                    getPrdTagline = items.productTagline[0][menuLang];
                                }
                                if (getProdItem == items.productOrder) {
                                    boxHidden = false;
                                    $('div.zgh-' + setMenuCatNameclass).append(boxDiv(getProdItem, getProURL, setPrdNameclass, items.productVersion, items.productVisible, items.productName, items.productDesc[0][menuLang], boxHidden, setBlank, setPrdTagline, getPrdTagline));
                                }
                            });
                            setBlank = false;
                            setPrdTagline = false;
                        });
                    }
                }
            });
            $.each(menuCateDiv, function(divIndex, divItem) {
                $('.zgh-products .zgh-megaMenuCat li[data-list="' + divItem + '"]').addClass('zgh-catDivider');
            });
            if (getMenuItem == menuBoxLen) {
                menuAfterInt();
            }
            $('.other-lang .zgh-i-patchmanagerplus').parent().remove();
        });
        if ($('.zgh-products .zgh-b-extensions').length > 0) {
            $('.zgh-products .zgh-b-extensions').before('<p class="marketplace-title">Do more with your Zoho products</p>');
        }
        $('.zgh-marketplace a').attr('target', '_blank');
        //Bundle Default active
        if (wW > 1199) {
            $('[data-bundle]').each(function() {
                var that = $(this);
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
            });
            if (menuCatBundle.length > 0) {
                $('.zgh-bundles > div').css('display', 'none');
                $.each(menuCatBundle[0], function(index, item) {
                    getBundleClass = item;
                    getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                    getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                    $('.zgh-b-' + getBundleClass).css('display', 'block');
                });
                $('.zgh-bundles').addClass('active-visible');
                menuCatBundle = [];
            } else {
                $('.zgh-bundles').removeClass('active-visible');
                $('.zgh-bundles > div').css('display', '');
            }
        }
    }).fail(function() {
        throw {
            name: "FileError",
            message: "An error has occurred while fetching the json data"
        };
    });

    function fileError(message) {
        this.name = "FileError";
        this.message = (message || "");
    }
    fileError.prototype = Error.prototype;
    //Products Menu Show more
    doc.on('click', '.zmenu-moreBtn', function() {
        var that = $(this);
        if (that.hasClass('active')) {
            that.closest('[data-category]').find('.zgh-hidden').attr('data-hidden', 'true').slideUp();
            that.removeClass('active').text(moreprd);
        } else {
            that.hide();
            that.closest('[data-category]').find('.zgh-hidden').attr('data-hidden', 'false').slideDown();
            that.addClass('active').text('Less products');
        }
    });
    /*  Global All Product Ends */
    /*  Search Starts */
    doc.on('click', '.zgh-search-icon', function() {
        $('.zgh-search-container').addClass('active');
        $('.zgh-search-field').focus().val('');
    });

    function searchHide() {
        if ($('.zgh-search-container').hasClass('active')) {
            $('.zgh-search-container').removeClass('active');
            $('.zgh-search-field').val('');
        }
    }
    doc.on(selectEvents, '.zgh-search-clear,.zgh-search-overlay', function() {
        searchHide();
    });
    doc.on('click', '.zgh-search-btn', function() {
        $('#zgh-search-action').submit();
    });
    doc.on('submit', '#zgh-search-action', function(e) {
        e.preventDefault();
        var formval = $('#zgh-search-query').val().trim();
        var actionURL
        if (currentUrlLang == "") {
            actionURL = window.location.origin + '/search-results.html';
        } else {
            actionURL = window.location.origin + '/' + currentUrlLang + '/' + 'search-results.html';
        }
        if (formval != "") {
            window.location = actionURL + "?query=" + encodeURIComponent(formval);
        }
    });
    doc.on('keyup', '.zgh-search-field', function() {
        var currentVallength = $(this).val().length;
        if (currentVallength > 0) {
            // $('.zgh-search-clear').fadeIn(500);
        } else {
            //$('.zgh-search-clear').fadeOut(500);
        }
    });
    doc.keyup(function(e) {
        if ((e.keyCode === 27)) {
            searchHide();
        }
    });
    $(window).scroll(function() {
        var thisScroll = $(this).scrollTop();
        if (thisScroll > 100) {
            searchHide();
        }
    });
    /*  Search Ends */
    /*  Localization Starts */
    doc.on('mouseenter touchstart', '.zgh-localization', function() {
        var that = $(this);
        that.addClass('active');
    });
    doc.on('mouseleave', '.zgh-localization', function() {
        var that = $(this);
        that.removeClass('active');
    });
    /*  Localization Ends */
    /*  Account Starts*/
    doc.on(selectEvents, '.zgh-userAvatar', function() {
        var that = $(this);
        that.parent().toggleClass('active');
    });
    /*  Account Ends */
    //After Menu init
    function menuAfterInt() {
        //Do other logic here before resize trigger.....
        $('.zgh-nav').addClass('active');
        $('.zgh-i-zohoone p').html('One');
        $('.zgh-i-orchestly').removeAttr('target');
        initGlobalHeaderResize();
    }
}
//Set Device Mode
function setDevice(wW, wH) {
    var doc = $(document);
    if (wW < 768) {
        if (/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').attr('data-device', 'mobile');
            doc.on(selectEvents, '[data-device="mobile"]', function(event) {
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        } else {
            $('body').attr('data-device', 'desktop');
            doc.on(selectEvents, '[data-device="desktop"]', function(event) {
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        }
    } else if (wW > 767 && wW < 1200) {
        if (/Android|webOS|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').attr('data-device', 'tab');
            doc.on(selectEvents, '[data-device="tab"]', function(event) {
                megaMenuOutClick(this, event);
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        } else {
            $('body').attr('data-device', 'desktop');
            doc.on(selectEvents, '[data-device="desktop"]', function(event) {
                megaMenuOutClick(this, event);
                userAccOutClick(this, event);
                userLanOutClick(this, event);
            });
        }
    } else {
        $('body').attr('data-device', 'desktop');
        doc.on(selectEvents, '[data-device="desktop"]', function(event) {
            megaMenuOutClick(this, event);
            userAccOutClick(this, event);
            userLanOutClick(this, event);
        });
    }
}
//Megamenu & User account mouse leave
megaMenuOutClick = function(target, event) {
    event.stopImmediatePropagation();
    var container = $('.zgh-megaMenu');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
        $('.zgh-megaMenuCat li').removeAttr('style');
    }
};
userAccOutClick = function(target, event) {
    event.stopImmediatePropagation();
    var container = $('.zgh-userPanel');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
    }
};
userLanOutClick = function(target, event) {
    event.stopImmediatePropagation();
    var container = $('.zgh-localization');
    if (!container.is(event.target) && container.has(event.target).length === 0) {
        container.removeClass('active');
    }
};

//Global Header Events on Resize
function headerMinHeight(a) {
    $('.zgh-products .zgh-megaMenuPro > div,.zgh-menuItem').css('display', 'block');
    $('.zgh-menuItem a').css('height', '');
    hei = 0;
    idS = 1;
    idE = a;
    orId = [];
    $('.zgh-megaMenuPro > div:not(.zgh-bundles):not(.zgh-marketplace)').each(function() {
        var that = $(this);
        if (that.find('.zmenu-moreBtn').length) {
            that.find('.zgh-menuItem').each(function(index, item) {
                if (index + 1 >= idS && index + 1 <= idE) {
                    orId.push(index + 1);
                    if (that.find('[data-index="' + (index + 1) + '"] a').height() > hei) {
                        hei = that.find('[data-index="' + (index + 1) + '"] a').height();
                    }
                }
                if (orId.length == a) {
                    $.each(orId, function(i) {
                        that.find('[data-index="' + orId[i] + '"] a').height(hei);
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + a;
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = a;
        } else {
            that.find('.zgh-menuItem').each(function(index, item) {
                var thats = $(this);
                if (thats.data('index') >= idS && thats.data('index') <= idE) {
                    orId.push(thats.data('index'));
                    if (thats.find('a').height() > hei) {
                        hei = thats.find('a').height();
                    }
                }
                if (orId.length == a) {
                    $.each(orId, function(i) {
                        that.find('[data-index="' + orId[i] + '"] a').height(hei);
                    });
                    orId.length = 0;
                    hei = 0;
                    idS = idE + 1;
                    idE = idE + a;
                }
            });
            orId.length = 0;
            hei = 0;
            idS = 1;
            idE = a;
        }
    });
    $('.zgh-products .zgh-megaMenuPro > div,.zgh-menuItem').removeAttr('style');
    $('.zgh-hidden').each(function() {
        var that = $(this);
        if (that.data('hidden') == 'false') {
            that.css('display', 'block');
        } else {
            that.css('display', 'none');
        }
    });
    $('.zgh-bundles .zgh-menuItem a,.zgh-marketplace .zgh-menuItem a').css('height', '');
    $('.zgh-products .zgh-megaMenuInner').css('height', '');
    var boxHei = 0;
    $('.zgh-megaMenuPro > div').each(function() {
        var that = $(this);
        if (that.innerHeight() > boxHei) {
            boxHei = that.innerHeight();
        }
    });
    $('.zgh-products .zgh-megaMenuInner').css('height', boxHei + 25);
}

function zGlobalHeaderResize(wW, wH) {
    var doc = $(document);
    var zghTrans = 0;
    var menuCatBundle = [];
    if (wW < 768) {
        minHeiDes = true;
        minHeiTab = true;
        //Hamburger mobile menu
        doc.on(selectEvents, '.zgh-menu', function(e) {
            e.stopImmediatePropagation();
            var that = $(this);
            if (that.hasClass('active')) {
                that.removeClass('active');
                $('.zgh-nav').slideUp();
                $('body').removeClass('lock');
            } else {
                that.addClass('active');
                $('.zgh-nav').slideDown(400, function() {
                    $('.zgh-nav').css('overflow', 'scroll');
                });
                $('body').addClass('lock');
            }
        });
        $('.zgh-nav').css('height', wH - 50);
        //Global Menu Event
        $('.zgh-products .zgh-megaMenuInner').css('height', '');
        $('.zgh-megaMenuCat li').removeAttr('style');
        doc.off('mouseenter touchstart click', '.zgh-megaMenu > a');
        doc.off('mouseleave', '.zgh-megaMenu');
        doc.on(selectEvents, '.zgh-megaMenu > a', function(e) {
            e.stopImmediatePropagation();
            var that = $(this);
            if (that.parent().hasClass('active')) {
                that.next().slideUp();
                that.parent().removeClass('active');
            } else {
                $('.zgh-megaMenuBox').slideUp();
                $('.zgh-megaMenu').removeClass('active');
                that.next().slideDown();
                that.parent().addClass('active');
            }
        });
        //Product Megamenu Event
        doc.off('mouseenter touchstart', '[data-list]');
        doc.on(selectEvents, '.zgh-megaMenuCat > li > span', function(e) {
            e.stopImmediatePropagation();
            var that = $(this).parent();
            if (that.hasClass('active')) {
                that.find('[data-category]').slideUp().removeClass('active');
                that.removeClass('active');
                lastCatActive = that.data('list');
            } else {
                $('.zgh-megaMenuCat > li').removeClass('active');
                $('[data-category]').slideUp().removeClass('active');
                that.find('[data-category]').slideDown().addClass('active');
                that.addClass('active');
                lastCatActive = that.data('list');
            }
        });
        //Append Menu box to category
        $('[data-category]').each(function() {
            var that = $(this);
            if ($('.zgh-megaMenuPro > div').length) {
                that.appendTo('[data-list="' + that.data('category') + '"]');
            }
        });
        if (defCatActive) {
            $('[data-category="1"]').css('display', 'block');
            defCatActive = false;
        } else {
            $('[data-category="' + lastCatActive + '"]').css('display', 'block');
        }
        $('.zgh-bundles').removeClass('active-visible');
        $('.zgh-bundles > div').css('display', '');
        //Product box position change
        $('.zgh-menuItem').css('overflow', '');
        $('.zgh-menuItem a').css('height', '');
        $('[data-category]').each(function(index, item) {
            var that = $(this);
            if (vendMobile) {
                that.find('.zgh-menuItem').each(function(index, item) {
                    var thats = $(this);
                    that.find('[data-index="' + (index + 1) + '"]').appendTo(that);
                });
            }
        });
        vendMobile = false;
        vendTab = true;
        vendDesk = true;
    } else {
        //Bundle default active on resize
        if (wW > 1199) {
            if ($('.zgh-b-bundles').hasClass('active')) {
                $('.zgh-b-bundles').removeClass('active');
                $('.zgh-bundles').removeClass('active');
                lastCatActive = 1;
            }
        }
        //Hamburger mobile menu
        $('.zgh-nav').removeAttr('style');
        $('.zgh-menu').removeClass('active');
        doc.off(selectEvents, '.zgh-menu');
        //Global Menu Event
        $('.zgh-megaMenu').removeClass('active');
        $('.zgh-megaMenuBox').removeAttr('style');
        doc.off(selectEvents, '.zgh-megaMenu > a');
        if (/Android|webOS|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            doc.off('mouseenter', '.zgh-megaMenu > a');
            doc.off('mouseleave', '.zgh-megaMenu');
            doc.off(selectEvents, '.zgh-megaMenu > a');
            doc.on(selectEvents, '.zgh-megaMenu > a', function(e) {
                e.stopImmediatePropagation();
                var that = $(this);
                if (!that.parent().hasClass('active')) {
                    $('.zgh-megaMenu').removeClass('active');
                    that.parent().addClass('active');
                    $('.zgh-megaMenuCat li').removeAttr('style');
                    $('.zgh-megaMenuCat li').each(function() {
                        var thatElm = $(this);
                        thatElm.css({ 'transition-delay': zghTrans + 'ms', '-webkit-transition-delay': zghTrans + 'ms' });
                        zghTrans = zghTrans + 120;
                    });
                    zghTrans = 0;
                } else {
                    that.parent().removeClass('active');
                    $('.zgh-megaMenuCat li').removeAttr('style');
                }
            });
        } else {
            doc.off(selectEvents, '.zgh-megaMenu > a');
            doc.on('mouseenter', '.zgh-megaMenu > a', function(e) {
                e.stopImmediatePropagation();
                var that = $(this);
                that.parent().addClass('active');
                $('.zgh-megaMenuCat li').removeAttr('style');
                $('.zgh-megaMenuCat li').each(function() {
                    var thatElm = $(this);
                    thatElm.css('transition-delay', zghTrans + 'ms');
                    zghTrans = zghTrans + 120;
                });
                zghTrans = 0;
            });
            doc.on('mouseleave', '.zgh-megaMenu', function(e) {
                e.stopImmediatePropagation();
                var that = $(this);
                that.removeClass('active');
                $('.zgh-megaMenuCat li').removeAttr('style');
            });
        }
        //Product Megamenu Event
        $('[data-list="' + lastCatActive + '"]').addClass('active');
        doc.off(selectEvents, '.zgh-megaMenuCat > li > span');
        doc.on('mouseenter touchstart', '[data-list]', function(e) {
            e.stopImmediatePropagation();
            var that = $(this);
            $('[data-list]').removeClass('active');
            $('[data-category]').removeClass('active').removeAttr('style');
            that.addClass('active');
            $('[data-category=' + that.attr('data-list') + ']').addClass('active');
            lastCatActive = that.attr('data-list');
            defCatActive = false;
            //Bundle active
            if (wW > 1199) {
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle = [];
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
                if (menuCatBundle.length > 0) {
                    $('.zgh-bundles > div').css('display', 'none');
                    $.each(menuCatBundle[0], function(index, item) {
                        getBundleClass = item;
                        getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                        getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                        $('.zgh-b-' + getBundleClass).css('display', 'block');
                    });
                    $('.zgh-bundles').addClass('active-visible');
                    menuCatBundle = [];
                } else {
                    $('.zgh-bundles').removeClass('active-visible');
                    $('.zgh-bundles > div').css('display', '');
                }
            }
        });
        //Append Menu box from category
        $('[data-category]').removeAttr('style');
        $('[data-category]').each(function() {
            var that = $(this);
            if ($('.zgh-megaMenuCat > li > div').length) {
                that.appendTo('.zgh-megaMenuPro');
            }
        });
        $('[data-category="' + lastCatActive + '"]').addClass('active');
        //Product box position change
        $('.zgh-menuItem').css('overflow', '');
        if (wW > 767 && wW < 1200 && vendTab) {
            $('[data-category]').each(function(index, item) {
                var that = $(this);
                that.find('.zgh-menuItem').each(function(indexs, item) {
                    var thats = $(this);
                    var thatItem = that.find('[data-index="' + (indexs + 1) + '"]');
                    split = indexs % 3;
                    if (split == 0) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-1').append(thatItem);
                    } else if (split == 1) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-2').append(thatItem);
                    } else if (split == 2) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-3').append(thatItem);
                    }
                });
                $('.zmenu-moreBtn').removeClass('active').text(moreprd);
                $('.zmenu-moreBtn').css('display', 'inline-block');
            });
            vendTab = false;
            vendMobile = true;
            vendDesk = true;
        } else if (wW > 1199 && vendDesk) {
            $('[data-category]').each(function(index, item) {
                var that = $(this);
                that.find('.zgh-menuItem').each(function(indexs, item) {
                    var thats = $(this);
                    var thatItem = that.find('[data-index="' + (indexs + 1) + '"]');
                    split = indexs % 4;
                    if (split == 0) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-1').append(thatItem);
                    } else if (split == 1) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-2').append(thatItem);
                    } else if (split == 2) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-3').append(thatItem);
                    } else if (split == 3) {
                        thats.closest('[data-category]').find('.zmenu-menuProBox-4').append(thatItem);
                    }
                });
                $('.zmenu-moreBtn').removeClass('active').text(moreprd);
                $('.zmenu-moreBtn').css('display', 'inline-block');
            });
            vendDesk = false;
            vendMobile = true;
            vendTab = true;
        }
        if (wW > 767 && wW < 1200) {
            //Products Box Min-height
            if (minHeiTab) {
                headerMinHeight(3);
                minHeiTab = false;
                minHeiDes = true;
            }
        } else if (wW > 1199) {
            //Products Box Min-height
            if (minHeiDes) {
                headerMinHeight(4);
                minHeiDes = false;
                minHeiTab = true;
            }
        }
        //Bundle default active on resize
        if (wW > 1199) {
            $('[data-bundle]').each(function() {
                var that = $(this);
                if (that.hasClass('active')) {
                    if (that.attr('data-bundle').length > 0) {
                        menuCatBundle = [];
                        menuCatBundle.push(that.data('bundle').split(','));
                    }
                }
            });
            if (menuCatBundle.length > 0) {
                $('.zgh-bundles > div').css('display', 'none');
                $.each(menuCatBundle[0], function(index, item) {
                    getBundleClass = item;
                    getBundleClass = getBundleClass.replace(/&+/g, '-').toLowerCase();
                    getBundleClass = getBundleClass.replace(/\s+/g, '').toLowerCase();
                    $('.zgh-b-' + getBundleClass).css('display', 'block');
                });
                $('.zgh-bundles').addClass('active-visible');
                menuCatBundle = [];
            } else {
                $('.zgh-bundles').removeClass('active-visible');
                $('.zgh-bundles > div').css('display', '');
            }
        }
    }
    //User Account
    $('.zgh-userPanel').removeClass('active');
}
//Call to init window resize & scroll 

function initGlobalHeaderResize() {
    var wW = $(window).width();
    var wH = $(window).height();
    zGlobalHeaderResize(wW, wH);
    setDevice(wW, wH);
    //Positioning New label
    $('.zgh-menuItem').each(function() {
        var that = $(this);
        if (that.find('span').length) {
            offText = that.find('p').text().length;
            if (offText < 14) {
                if (wW > 767 && wW < 1025) {
                    if (currentUrlLang == 'ar') {
                        that.find('span').css({ 'right': (offText * 8) + 86, 'top': 30, 'left': 'inherit' });
                    } else {
                        that.find('span').css({ 'left': (offText * 8) + 70, 'top': 30 });
                    }
                } else if (wW > 1024) {
                    if (currentUrlLang == 'ar') {
                        if (that.is(':first-of-type')) {
                            that.find('span').css({ 'right': (offText * 8) + 121, 'top': 30, 'left': 'inherit' });
                        } else {
                            that.find('span').css({ 'right': (offText * 8) + 106, 'top': 30, 'left': 'inherit' });
                        }
                    } else {
                        if (that.is(':first-of-type')) {
                            that.find('span').css({ 'left': (offText * 8) + 115, 'top': 30 });
                        } else {
                            that.find('span').css({ 'left': (offText * 8) + 100, 'top': 30 });
                        }
                    }
                }
            }
        }
    });
    var cachedWidth = $(window).width(),
        cachedHeight = $(window).height();
    $(window).resize(function() {
        var newWidth = $(window).width();
        var newHeight = $(window).height();
        if (newWidth != cachedWidth || newHeight != cachedHeight) {
            var wW = $(window).width();
            var wH = $(window).height();
            zGlobalHeaderResize(wW, wH);
            setDevice(wW, wH);
            cachedWidth = newWidth;
            cachedHeight = newHeight;
            //Positioning New label
            $('.zgh-menuItem').each(function() {
                var that = $(this);
                if (that.find('span').length) {
                    offText = that.find('p').text().length;
                    if (offText < 14) {
                        if (wW > 767 && wW < 1025) {
                            if (currentUrlLang == 'ar') {
                                that.find('span').css({ 'right': (offText * 8) + 86, 'top': 30, 'left': 'inherit' });
                            } else {
                                that.find('span').css({ 'left': (offText * 8) + 70, 'top': 30 });
                            }
                        } else if (wW > 1024) {
                            if (currentUrlLang == 'ar') {
                                if (that.is(':first-of-type')) {
                                    that.find('span').css({ 'right': (offText * 8) + 121, 'top': 30, 'left': 'inherit' });
                                } else {
                                    that.find('span').css({ 'right': (offText * 8) + 106, 'top': 30, 'left': 'inherit' });
                                }
                            } else {
                                if (that.is(':first-of-type')) {
                                    that.find('span').css({ 'left': (offText * 8) + 115, 'top': 30 });
                                } else {
                                    that.find('span').css({ 'left': (offText * 8) + 100, 'top': 30 });
                                }
                            }
                        }
                    }
                }
            });
        }
    });
    $(window).trigger('resize');
    $(window).on('scroll', function() {
        $('.zgh-userPanel,.zgh-localization').removeClass('active');
    });
}
//Set Device Condition
var vendMobile = true;
var vendTab = true;
var vendDesk = true;
var minHeiTab = true;
var minHeiDes = true;
var defCatActive = true;
var lastCatActive = 0;
var devOrientPor = true;
var devOrientLan = true;
var selectEvents = (function() {
    if ('ontouchstart' in document.documentElement === true)
        return 'touchstart';
    else
        return 'click';
})();
$(document).ready(function() {
    if ($('.zgh-headerWrap').length == 0) {
        if (window.location.href.indexOf('mediacoverage.html') < 0) {
            zGlobalHeader();
        }
    }
});

/*-----------------------------Global Header Ends-------------------------------------------------*/

