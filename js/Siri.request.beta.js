/*
README: https://github.com/VirgilClyne/iRingo
*/
const $ = new Env(" iRingo: 🔍 Siri v3.0.0(2) request.beta");
const URL = new URLs();
const DataBase = {
	"Location":{
		"Settings":{"Switch":"true","PEP":{"GCC":"US"},"Services":{"PlaceData":"CN","Directions":"AUTO","Traffic":"AUTO","RAP":"XX","Tiles":"AUTO"},"Geo_manifest":{"Dynamic":{"Config":{"Country_code":{"default":"AUTO","iOS":"CN","iPadOS":"CN","watchOS":"US","macOS":"CN"}}}},"Config":{"Announcements":{"Environment:":{"default":"AUTO","iOS":"CN","iPadOS":"CN","watchOS":"XX","macOS":"CN"}},"Defaults":{"LagunaBeach":true,"DrivingMultiWaypointRoutesEnabled":true,"GEOAddressCorrection":true,"LookupMaxParametersCount":true,"LocalitiesAndLandmarks":true,"POIBusyness":true,"PedestrianAR":true,"6694982d2b14e95815e44e970235e230":true,"OpticalHeading":true,"UseCLPedestrianMapMatchedLocations":true,"TransitPayEnabled":true,"WiFiQualityNetworkDisabled":false,"WiFiQualityTileDisabled":false}}}
	},
	"Weather":{
		"Settings":{"Switch":"true","NextHour":{"Switch":true},"AQI":{"Switch":true,"Mode":"WAQI Public","Location":"Station","Auth":null,"Scale":"EPA_NowCast.2204"},"Map":{"AQI":false}},
		"Configs":{"Availability":["currentWeather","forecastDaily","forecastHourly","history","weatherChange","forecastNextHour","severeWeather","airQuality"],"Pollutants":{"co":"CO","no":"NO","no2":"NO2","so2":"SO2","o3":"OZONE","nox":"NOX","pm25":"PM2.5","pm10":"PM10","other":"OTHER"}}
	},
	"Siri":{
		"Settings":{"Switch":"true","CountryCode":"SG","Domains":["web","itunes","app_store","movies","restaurants","maps"],"Functions":["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],"Safari_Smart_History":true},
		"Configs":{
			"VisualIntelligence":{"enabled_domains":["pets","media","books","art","nature","landmarks"],"supported_domains":["OBJECT_2D","SCULPTURE","ART","CATS","DOGS","LANDMARK","ALBUM","SKYLINE","BIRDS","NATURE","ANIMALS","INSECTS","BOOK","MEDIA","NATURAL_LANDMARK"]}
		}
	},
	"TV":{
		"Settings":{"Switch":"true","Third-Party":true,"Configs":{"CountryCode":"AUTO","Tabs":["WatchNow","Originals","Movies","TV","Sports","Kids","Library","Search"]},"View":{"CountryCode":["SG","TW"]},"WatchNow":{"CountryCode":"AUTO"},"Channels":{"CountryCode":"AUTO"},"Originals":{"CountryCode":"TW"},"Movies":{"CountryCode":"AUTO"},"TV":{"CountryCode":"AUTO"},"Sports":{"CountryCode":"US"},"Kids":{"CountryCode":"US"},"Persons":{"CountryCode":"SG"},"Search":{"CountryCode":"TW"},"Others":{"CountryCode":"AUTO"}},
		"Configs":{
			"Locale":{"AU":"en-AU","CA":"en-CA","GB":"en-GB","KR":"ko-KR","HK":"yue-Hant","JP":"ja-JP","MO":"zh-Hant","TW":"zh-Hant","US":"en-US","SG":"zh-Hans"},
			"Tabs":{"zh":{"WatchNow":"立即观看","Originals":"原创内容","Movies":"电影","TV":"电视节目","Store":"商店","Sports":"体育节目","Kids":"儿童","Library":"资料库","Search":"搜索"},"zh-Hans":{"WatchNow":"立即观看","Originals":"原创内容","Movies":"电影","TV":"电视节目","Store":"商店","Sports":"体育节目","Kids":"儿童","Library":"资料库","Search":"搜索"},"zh-Hant":{"WatchNow":"立即觀看","Originals":"原創內容","Movies":"電影","TV":"電視節目","Store":"商店","Sports":"體育節目","Kids":"兒童","Library":"資料庫","Search":"蒐索"},"en":{"WatchNow":"Watch Now","Originals":"Originals","Movies":"Movies","TV":"TV Shows","Store":"Store","Sports":"Sports","Kids":"Kids","Library":"Library","Search":"Search"}}
		}
	},
    "News":{
		"Settings":{"Switch":"true","CountryCode":"US","newsPlusUser":"AUTO"}
	},
	"Default": {
		"Settings":{"Switch":"true"},
		"Configs":{
			"Storefront":{"AF":"143610","AL":"143575","AO":"143564","AI":"143538","AG":"143540","AR":"143505","AM":"143524","AU":"143460","AT":"143445","AZ":"143568","BA":"143612","BS":"143539","BH":"143559","BB":"143541","BD":"143490","BY":"143565","BE":"143446","BZ":"143555","BJ":"143576","BM":"143542","BT":"143577","BO":"143556","BW":"143525","BR":"143503","VG":"143543","BN":"143560","BG":"143526","BF":"143578","CA":"143455","CI":"143527","CM":"143574","CV":"143580","KY":"143544","TD":"143581","CL":"143483","CN":"143465","CO":"143501","CG":"143582","CR":"143495","HR":"143494","CY":"143557","CZ":"143489","DK":"143458","DM":"143545","DO":"143508","DZ":"143563","EC":"143509","EG":"143516","SV":"143506","EE":"143518","FJ":"143583","FI":"143447","FR":"143442","GM":"143584","DE":"143443","GH":"143573","GR":"143448","GD":"143546","GT":"143504","GW":"143585","GY":"143553","HN":"143510","HK":"143463","HU":"143482","IS":"143558","IN":"143467","ID":"143476","IE":"143449","IL":"143491","IT":"143450","JM":"143511","JP":"143462","JO":"143528","KH":"143579","KR":"143466","KZ":"143517","KE":"143529","KW":"143493","KG":"143586","LA":"143587","LV":"143519","LB":"143497","LR":"143588","LT":"143520","LI":"143522","LU":"143451","MO":"143515","MK":"143530","MG":"143531","MW":"143589","MY":"143473","MV":"143488","ML":"143532","MT":"143521","MR":"143590","MU":"143533","MX":"143468","FM":"143591","MD":"143523","MN":"143592","MS":"143547","MZ":"143593","NA":"143594","NP":"143484","NL":"143452","NZ":"143461","NI":"143512","NE":"143534","NG":"143561","NO":"143457","OM":"143562","PK":"143477","PW":"143595","PA":"143485","PG":"143597","PY":"143513","PE":"143507","PH":"143474","PL":"143478","PT":"143453","QA":"143498","RO":"143487","RU":"143469","ST":"143598","SA":"143479","SN":"143535","SC":"143599","SL":"143600","SG":"143464","SK":"143496","SI":"143499","SB":"143601","ZA":"143472","KP":"143466","ES":"143454","LK":"143486","KN":"143548","LC":"143549","VC":"143550","SR":"143554","SZ":"143602","SE":"143456","CH":"143459","TW":"143470","TJ":"143603","TZ":"143572","TH":"143475","TT":"143551","TN":"143536","TR":"143480","TM":"143604","TC":"143552","AE":"143481","UG":"143537","UA":"143492","GB":"143444","US":"143441","UY":"143514","UZ":"143566","VE":"143502","VN":"143471","YE":"143571","ZW":"143605","CD":"143613","GA":"143614","GF":"143615","IQ":"143617","XK":"143624","LY":"143567","ME":"143619","MA":"143620","MM":"143570","NR":"143606","RW":"143621","RS":"143500","TO":"143608","VU":"143609","ZM":"143622"}
		}
	}
};

// 构造回复数据
let $response = undefined;

/***************** Processing *****************/
(async () => {
	const { Settings, Caches, Configs } = setENV("iRingo", "Siri", DataBase);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings?.Switch) {
		case "true":
		default:
			let url = URL.parse($request?.url);
			const METHOD = $request?.method, HOST = url?.host, PATH = url?.path, PATHs = PATH.split("/");
			// 解析格式
			const FORMAT = ($request?.headers?.["Content-Type"] ?? $request?.headers?.["content-type"])?.split(";")?.[0];
			$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, `HOST: ${HOST}`, `PATH: ${PATH}`, `PATHs: ${PATHs}`, `FORMAT: ${FORMAT}`, "");
			// 创建空数据
			let body = {};
			// 方法判断
			switch (METHOD) {
				case "POST":
				case "PUT":
				case "PATCH":
				case "DELETE":
					// 格式判断
					switch (FORMAT) {
						case undefined: // 视为无body
							break;
						case "application/x-www-form-urlencoded":
						case "text/html":
						default:
							break;
						case "text/xml":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
							body = await PLIST("plist2json", $request.body);
							$.log(body);
							$request.body = await PLIST("json2plist", body);
							break;
						case "application/json":
						case "text/json":
							body = JSON.parse($request.body);
							$.log(body);
							$request.body = JSON.stringify(body);
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 路径判断
							switch (PATH) {
								case "apple.parsec.spotlight.v1alpha.ZkwSuggestService/Suggest": // 新闻建议
									break;
							};
							break;
					};
					break;
				case "GET":
				case "HEAD":
				case "OPTIONS":
					const LOCALE = url.params.locale;
					$.log(`🚧 ${$.name}, LOCALE: ${LOCALE}`, "");
					if (Settings.CountryCode == "AUTO") Settings.CountryCode = LOCALE?.match(/[A-Z]{2}$/)?.[0] ?? Settings.CountryCode;
					if (url?.params?.cc) url.params.cc = url.params.cc.replace(/[A-Z]{2}/, Settings.CountryCode);
					// 主机判断
					switch (HOST) {
						case "api.smoot.apple.com":
						case "api.smoot.apple.cn":
							// 路径判断
							switch (PATH) {
								case "bag": // 配置
									break;
							};
							break;
						case "fbs.smoot.apple.com":
							break;
						case "cdn.smoot.apple.com":
							break;
						default: // 其他主机
							// 路径判断
							switch (PATH) {
								case "warm":
								case "render":
								case "flight": // 航班
									break;
								case "search": // 搜索
									if (url?.params?.card_locale) url.params.card_locale = LOCALE;
									if (url?.params?.qtype == "zkw") { // 处理"新闻"小组件
										["CN", "HK", "MO", "TW", "SG"].includes(Settings.CountryCode) ? url.params.locale = `${url.params.esl}_SG`
											: ["US", "CA", "UK", "AU"].includes(Settings.CountryCode) ? url.params.locale = url.params.locale
												: url.params.locale = `${url.params.esl}_US`
									} else { // 其他搜索
										if (/^%E5%A4%A9%E6%B0%94%20/.test(url.params.q)) { // 处理"天气"搜索，搜索词"天气 "开头
											console.log("Type A", ``);
											url.params.q = url.params.q.replace(/%E5%A4%A9%E6%B0%94/, "weather"); // "天气"替换为"weather"
											if (/^weather%20.*%E5%B8%82$/.test(url.params.q)) url.params.q = url.params.q.replace(/$/, "%E5%B8%82");
										} else if (/%20%E5%A4%A9%E6%B0%94$/.test(url.params.q)) {// 处理"天气"搜索，搜索词" 天气"结尾
											console.log("Type B", ``);
											url.params.q = url.params.q.replace(/%E5%A4%A9%E6%B0%94/, "weather"); // "天气"替换为"weather"
											if (/.*%E5%B8%82%20weather$/.test(url.params.q)) url.params.q = url.params.q.replace(/%20weather$/, "%E5%B8%82%20weather");
										}
									};
									break;
								case "card": // 卡片
									const sf = url?.params?.storefront?.match(/[\d]{6}/g); //StoreFront ID, from App Store Region
									if (url?.params?.card_locale) url.params.card_locale = LOCALE;
									if (url?.params?.include == "movies" || url?.params?.include == "tv") {
										if (sf == "143463") url.params.q = url.params.q.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-HK")
										else if (sf == "143470") url.params.q = url.params.q.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-TW")
										else if (sf == "143464") url.params.q = url.params.q.replace(/%2F[a-z]{2}-[A-Z]{2}/, "%2Fzh-SG")
									};
									break;
							};
							break;
					};
					break;
				case "CONNECT":
				case "TRACE":
					break;
			};
			if ($request?.headers?.Host) $request.headers.Host = url.host;
			$request.url = URL.stringify(url);
			$.log(`🚧 ${$.name}, $request.url: ${$request.url}`, "");
			break;
		case "false":
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有构造回复数据，返回构造的回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `echo $response`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `echo $response: ${JSON.stringify($response)}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				delete $response?.headers?.["Content-Length"];
				delete $response?.headers?.["content-length"];
				delete $response?.headers?.["Transfer-Encoding"];
				if ($.isQuanX()) {
					$response.status = "HTTP/1.1 200 OK";
					switch (FORMAT) {
						case "application/x-www-form-urlencoded":
						case "text/html":
						case "text/xml":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers, body: $response.body });
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ status: $response.status, headers: $response.headers, bodyBytes: $response.bodyBytes });
							break;
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers });
							break;
					};
				} else $.done({ response: $response });
				break;
			};
			case undefined: { // 无构造回复数据，发送修改的请求数据
				const FORMAT = ($request?.headers?.["Content-Type"] ?? $request?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `$request`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `$request:${JSON.stringify($request)}`, "");
				if ($.isQuanX()) {
					switch (FORMAT) {
						case "application/x-www-form-urlencoded":
						case "text/html":
						case "text/xml":
						case "text/plist":
						case "application/plist":
						case "application/x-plist":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers, body: $request.body })
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$request.bodyBytes.byteLength}---${$request.bodyBytes.buffer.byteLength}`);
							$.done({ url: $request.url, headers: $request.headers, bodyBytes: $request.bodyBytes.buffer.slice($request.bodyBytes.byteOffset, $request.bodyBytes.byteLength + $request.bodyBytes.byteOffset) });
							break;
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers })
							break;
					};
				} else $.done($request);
				break;
			};
		};
	})

/***************** Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {String} platform - Platform Name
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platform, database) {
	$.log(`⚠ ${$.name}, Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getENV(name, platform, database);
	/***************** Prase *****************/
	//Settings.Switch = JSON.parse(Settings.Switch) // BoxJs字符串转Boolean
	if (typeof Settings?.Domains == "string") Settings.Domains = Settings.Domains.split(",") // BoxJs字符串转数组
	if (typeof Settings?.Functions == "string") Settings.Functions = Settings.Functions.split(",") // BoxJs字符串转数组
	if (Settings?.Safari_Smart_History) Settings.Safari_Smart_History = JSON.parse(Settings.Safari_Smart_History) // BoxJs字符串转Boolean
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Caches *****************/
	return { Settings, Caches, Configs };
};

/**
 * Parse Plist
 * @author VirgilClyne
 * @typedef { "json2plist" | "plist2json" } opt
 * @param {opt} opt - do types
 * @param {String} string - string
 * @return {Promise<*>}
 */
async function PLIST(opt, string) {
	const request = {
		"url": "https://json2plist.nanocat.me/convert.php",
		"headers": {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			"Accept": "text/javascript, text/html, application/xml, text/xml, */*",
		},
		"body": `do=${opt}&content=` + encodeURIComponent(string)
	};
	return await $.http.post(request).then(v => v.body);
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t);break;case"Node.js":this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}

// https://github.com/DualSubs/URL/blob/main/URLs.embedded.min.js
function URLs(s){return new class{constructor(s=[]){this.name="URL v1.0.2",this.opts=s,this.json={scheme:"",host:"",path:"",params:{}}}parse(s){let t=s.match(/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/)?.groups??null;return t?.path||(t.path=""),t?.params&&(t.params=Object.fromEntries(t.params.split("&").map((s=>s.split("="))))),t}stringify(s=this.json){return s?.params?s.scheme+"://"+s.host+"/"+s.path+"?"+Object.entries(s.params).map((s=>s.join("="))).join("&"):s.scheme+"://"+s.host+"/"+s.path}}(s)}

/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/VirgilClyne/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} t - Persistent Store Key
 * @param {String} e - Platform Name
 * @param {Object} n - Default Database
 * @return {Object} { Settings, Caches, Configs }
 */
function getENV(t,e,n){let i=$.getjson(t,n),s={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((t=>t.split("="))));for(let e in t)l(s,e,t[e])}let g={...n?.Default?.Settings,...n?.[e]?.Settings,...i?.[e]?.Settings,...s},f={...n?.Default?.Configs,...n?.[e]?.Configs,...i?.[e]?.Configs},o=i?.[e]?.Caches||{};return"string"==typeof o&&(o=JSON.parse(o)),{Settings:g,Caches:o,Configs:f};function l(t,e,n){e.split(".").reduce(((t,i,s)=>t[i]=e.split(".").length===++s?n:t[i]||{}),t)}}
