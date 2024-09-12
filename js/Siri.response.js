let e=class{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}};class t{static name="$Storage";static version="1.0.9";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static#t(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}static getItem(t=new String,s=null){let a=s;if(!0===t.startsWith("@")){const{key:s,path:i}=t.match(this.#e)?.groups;t=s;let o=this.getItem(t,{});"object"!=typeof o&&(o={}),a=e.get(o,i);try{a=JSON.parse(a)}catch(e){}}else{switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.read(t);break;case"Quantumult X":a=$prefs.valueForKey(t);break;case"Node.js":this.data=this.#s(this.dataFile),a=this.data?.[t];break;default:a=this.data?.[t]||null}try{a=JSON.parse(a)}catch(e){}}return a??s}static setItem(t=new String,s=new String){let a=!1;if("object"==typeof s)s=JSON.stringify(s);else s=String(s);if(!0===t.startsWith("@")){const{key:i,path:o}=t.match(this.#e)?.groups;t=i;let r=this.getItem(t,{});"object"!=typeof r&&(r={}),e.set(r,o,s),a=this.setItem(t,r)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.write(s,t);break;case"Quantumult X":a=$prefs.setValueForKey(s,t);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[t]=s,this.#a(this.dataFile),a=!0;break;default:a=this.data?.[t]||null}return a}static removeItem(t){let s=!1;if(!0===t.startsWith("@")){const{key:a,path:i}=t.match(this.#e)?.groups;t=a;let o=this.getItem(t);"object"!=typeof o&&(o={}),keyValue=e.unset(o,i),s=this.setItem(t,o)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:s=!1;break;case"Quantumult X":s=$prefs.removeValueForKey(t)}return s}static clear(){let e=!1;switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s);if(!a&&!i)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s),o=JSON.stringify(this.data);a?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}}class s{static name="ENV";static version="1.8.3";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}constructor(e,t){console.log(`\n🟧 ${s.name} v${s.version}\n`),this.name=e,this.logs=[],this.isMute=!1,this.isMuteLog=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log(`\n🚩 开始!\n${e}\n`)}environment(){switch(this.platform()){case"Surge":return $environment.app="Surge",$environment;case"Stash":return $environment.app="Stash",$environment;case"Egern":return $environment.app="Egern",$environment;case"Loon":let e=$loon.split(" ");return{device:e[0],ios:e[1],"loon-version":e[2],app:"Loon"};case"Quantumult X":return{app:"Quantumult X"};case"Node.js":return process.env.app="Node.js",process.env;default:return{}}}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}async getScript(e){return await this.fetch(e).then((e=>e.body))}async runScript(e,s){let a=t.getItem("@chavy_boxjs_userCfgs.httpapi");a=a?.replace?.(/\n/g,"")?.trim();let i=t.getItem("@chavy_boxjs_userCfgs.httpapi_timeout");i=1*i??20,i=s?.timeout??i;const[o,r]=a.split("@"),n={url:`http://${r}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:i},headers:{"X-Key":o,Accept:"*/*"},timeout:i};await this.fetch(n).then((e=>e.body),(e=>this.logErr(e)))}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(t={}||"",s={}){switch(t.constructor){case Object:t={...s,...t};break;case String:t={...s,url:t}}t.method||(t.method="GET",(t.body??t.bodyBytes)&&(t.method="POST")),delete t.headers?.Host,delete t.headers?.[":authority"],delete t.headers?.["Content-Length"],delete t.headers?.["content-length"];const a=t.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return t.timeout&&(t.timeout=parseInt(t.timeout,10),this.isSurge()||(t.timeout=1e3*t.timeout)),t.policy&&(this.isLoon()&&(t.node=t.policy),this.isStash()&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),this.isShadowrocket()&&e.set(t,"headers.X-Surge-Proxy",t.policy)),"boolean"==typeof t.redirection&&(t["auto-redirect"]=t.redirection),t.bodyBytes&&!t.body&&(t.body=t.bodyBytes,delete t.bodyBytes),await new Promise(((e,s)=>{$httpClient[a](t,((a,i,o)=>{a?s(a):(i.ok=/^2\d\d$/.test(i.status),i.statusCode=i.status,o&&(i.body=o,1==t["binary-mode"]&&(i.bodyBytes=o)),e(i))}))}));case"Quantumult X":return t.policy&&e.set(t,"opts.policy",t.policy),"boolean"==typeof t["auto-redirect"]&&e.set(t,"opts.redirection",t["auto-redirect"]),t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete object.body):t.body&&delete t.bodyBytes,await $task.fetch(t).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let s=require("iconv-lite");this.initGotEnv(t);const{url:i,...o}=t;return await this.got[a](i,o).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=s.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in a)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[t]:("00"+a[t]).substr((""+a[t]).length)));return e}msg(e=name,t="",s="",a){const i=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,s,i(a));break;case"Quantumult X":$notify(e,t,s,i(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(t={}){const s=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${s} 秒`,""),this.platform()){case"Surge":t.policy&&e.set(t,"headers.X-Surge-Policy",t.policy),$done(t);break;case"Loon":t.policy&&(t.node=t.policy),$done(t);break;case"Stash":t.policy&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),$done(t);break;case"Egern":case"Shadowrocket":default:$done(t);break;case"Quantumult X":t.policy&&e.set(t,"opts.policy",t.policy),delete t["auto-redirect"],delete t["auto-cookie"],delete t["binary-mode"],delete t.charset,delete t.host,delete t.insecure,delete t.method,delete t.opt,delete t.path,delete t.policy,delete t["policy-descriptor"],delete t.scheme,delete t.sessionIndex,delete t.statusCode,delete t.timeout,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete t.body):t.body&&delete t.bodyBytes,$done(t);break;case"Node.js":process.exit(1)}}}var a={Switch:!0},i={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},o={Settings:a,Configs:i},r={Switch:!0,PEP:{GCC:"US"}},n={Settings:r},c={Switch:!0,UrlInfoSet:{Dispatcher:"AutoNavi",Directions:"AutoNavi",RAP:"Apple",LocationShift:"AUTO"},TileSet:{Map:"CN",Satellite:"HYBRID",Traffic:"CN",POI:"CN",Flyover:"XX",Munin:"XX"},GeoManifest:{Dynamic:{Config:{CountryCode:{default:"CN",iOS:"AUTO",iPadOS:"AUTO",watchOS:"US",macOS:"AUTO"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"AUTO",iPadOS:"AUTO",watchOS:"AUTO",macOS:"AUTO"}}}},l={},h={Settings:c,Configs:l},u={Switch:!0,CountryCode:"US",NewsPlusUser:!0},d={Settings:u},p={Switch:!0,CountryCode:"US",canUse:!0},g={Settings:p},f={Switch:!0,CountryCode:"SG",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},m={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},S={Settings:f,Configs:m},y={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},b={Settings:y},v={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},w={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},k={Settings:v,Configs:w},A={Switch:!0,NextHour:{Provider:"ColorfulClouds"},AQI:{Provider:"ColorfulClouds",ReplaceProviders:[],Local:{Scale:"WAQI_InstantCast",ReplaceScales:["HJ6332012"],ConvertUnits:!1}},API:{WAQI:{Token:null,Header:{"Content-Type":"application/json"}},QWeather:{Token:null,Header:{"Content-Type":"application/json"},Host:"devapi.qweather.com"},ColorfulClouds:{Token:null,Header:{"Content-Type":"application/json"}}}},T={Availability:{v1:["currentWeather","dailyForecast","hourlyForecast","minuteForecast","weatherAlerts"],v2:["airQuality","currentWeather","forecastDaily","forecastHourly","forecastPeriodic","historicalComparisons","weatherChanges","forecastNextHour","weatherAlerts","weatherAlertNotifications","news"]}},_={Settings:A,Configs:T},C=Database={Default:Object.freeze({__proto__:null,Configs:i,Settings:a,default:o}),Location:Object.freeze({__proto__:null,Settings:r,default:n}),Maps:Object.freeze({__proto__:null,Configs:l,Settings:c,default:h}),News:Object.freeze({__proto__:null,Settings:u,default:d}),PrivateRelay:Object.freeze({__proto__:null,Settings:p,default:g}),Siri:Object.freeze({__proto__:null,Configs:m,Settings:f,default:S}),TestFlight:Object.freeze({__proto__:null,Settings:y,default:b}),TV:Object.freeze({__proto__:null,Configs:w,Settings:v,default:k}),WeatherKit:Object.freeze({__proto__:null,Configs:T,Settings:A,default:_})};const $=function(){if("undefined"!=typeof $environment&&$environment["surge-version"])return"Surge";if("undefined"!=typeof $environment&&$environment["stash-version"])return"Stash";if("undefined"!=typeof module&&module.exports)return"Node.js";if("undefined"!=typeof $task)return"Quantumult X";if("undefined"!=typeof $loon)return"Loon";if("undefined"!=typeof $rocket)return"Shadowrocket";if("undefined"!=typeof Egern)return"Egern"}();class O{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class L{static name="Storage";static version="1.1.0";static about(){return N("",`🟧 ${this.name} v${this.version}`,"")}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static getItem(e=new String,t=null){let s=t;if(!0===e.startsWith("@")){const{key:t,path:a}=e.match(this.#e)?.groups;e=t;let i=this.getItem(e,{});"object"!=typeof i&&(i={}),s=O.get(i,a);try{s=JSON.parse(s)}catch(e){}}else{switch($){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":s=$persistentStore.read(e);break;case"Quantumult X":s=$prefs.valueForKey(e);break;case"Node.js":this.data=this.#s(this.dataFile),s=this.data?.[e];break;default:s=this.data?.[e]||null}try{s=JSON.parse(s)}catch(e){}}return s??t}static setItem(e=new String,t=new String){let s=!1;if("object"==typeof t)t=JSON.stringify(t);else t=String(t);if(!0===e.startsWith("@")){const{key:a,path:i}=e.match(this.#e)?.groups;e=a;let o=this.getItem(e,{});"object"!=typeof o&&(o={}),O.set(o,i,t),s=this.setItem(e,o)}else switch($){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":s=$persistentStore.write(t,e);break;case"Quantumult X":s=$prefs.setValueForKey(t,e);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[e]=t,this.#a(this.dataFile),s=!0;break;default:s=this.data?.[e]||null}return s}static removeItem(e){let t=!1;if(!0===e.startsWith("@")){const{key:s,path:a}=e.match(this.#e)?.groups;e=s;let i=this.getItem(e);"object"!=typeof i&&(i={}),keyValue=O.unset(i,a),t=this.setItem(e,i)}else switch($){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:t=!1;break;case"Quantumult X":t=$prefs.removeValueForKey(e)}return t}static clear(){let e=!1;switch($){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s);if(!a&&!i)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s),o=JSON.stringify(this.data);a?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}}const N=(...e)=>console.log(e.join("\n"));function R(e,t,s){N("☑️ Set Environment Variables","");let{Settings:a,Caches:i,Configs:o}=function(e,t,s){let a=L.getItem(e,s),i={};switch(typeof $argument){case"string":let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let t in e)O.set(i,t,e[t]);break;case"object":for(let e in $argument)O.set(i,e,$argument[e])}const o={Settings:s?.Default?.Settings||{},Configs:s?.Default?.Configs||{},Caches:{}};Array.isArray(t)||(t=[t]);for(let e of t)o.Settings={...o.Settings,...s?.[e]?.Settings,...i,...a?.[e]?.Settings},o.Configs={...o.Configs,...s?.[e]?.Configs},a?.[e]?.Caches&&"string"==typeof a?.[e]?.Caches&&(a[e].Caches=JSON.parse(a?.[e]?.Caches)),o.Caches={...o.Caches,...a?.[e]?.Caches};return function e(t,s){for(var a in t){var i=t[a];t[a]="object"==typeof i&&null!==i?e(i,s):s(a,i)}return t}(o.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>r(e))):r(t)),t))),o;function r(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(e,t,s);switch(t){case"WeatherKit":Array.isArray(a?.AQI?.ReplaceProviders)||O.set(a,"AQI.ReplaceProviders",a?.AQI?.ReplaceProviders?[a.AQI.ReplaceProviders.toString()]:[]),a.AQI.ReplaceProviders.includes("TWC")&&a.AQI.ReplaceProviders.push("The Weather Channel"),a.AQI.ReplaceProviders.includes("QWeather")&&a.AQI.ReplaceProviders.push("和风天气"),a.AQI.ReplaceProviders.push(void 0),Array.isArray(a?.AQI?.Local?.ReplaceScales)||O.set(a,"AQI.Local.ReplaceScales",a?.AQI?.Local?.ReplaceScales?[a.AQI.Local.ReplaceScales.toString()]:[]);break;case"Siri":Array.isArray(a?.Domains)||O.set(a,"Domains",a?.Domains?[a.Domains.toString()]:[]),Array.isArray(a?.Functions)||O.set(a,"Functions",a?.Functions?[a.Functions.toString()]:[]);break;case"TV":Array.isArray(a?.Tabs)||O.set(a,"Tabs",a?.Tabs?[a.Tabs.toString()]:[])}if(N(`✅ Set Environment Variables, Settings: ${typeof a}, Settings内容: ${JSON.stringify(a)}`,""),o.Storefront=new Map(o.Storefront),o.Locale&&(o.Locale=new Map(o.Locale)),o.i18n)for(let e in o.i18n)o.i18n[e]=new Map(o.i18n[e]);return{Settings:a,Caches:i,Configs:o}}const E=new s(" iRingo: 🔍 Siri v3.2.0(1005) response"),j=new URL($request.url);E.log(`⚠ url: ${j.toJSON()}`,"");const I=$request.method,M=j.hostname,U=j.pathname;E.log(`⚠ METHOD: ${I}, HOST: ${M}, PATH: ${U}`,"");const P=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];E.log(`⚠ FORMAT: ${P}`,""),(async()=>{const{Settings:t,Caches:s,Configs:a}=R("iRingo","Siri",C);switch(E.log(`⚠ Settings.Switch: ${t?.Switch}`,""),t.Switch){case!0:default:let s={};switch(P){case void 0:case"application/x-www-form-urlencoded":case"text/plain":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/html":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(s=JSON.parse($response.body??"{}"),M){case"api.smoot.apple.com":case"api.smoot.apple.cn":if("/bag"===U){s.enabled=!0,s.feedback_enabled=!0,s?.enabled_domains&&(s.enabled_domains=[...new Set([...s?.enabled_domains??[],...t.Domains])],E.log("🎉 领域列表",`enabled_domains: ${JSON.stringify(s.enabled_domains)}`,"")),s?.scene_aware_lookup_enabled_domains&&(s.scene_aware_lookup_enabled_domains=[...new Set([...s?.scene_aware_lookup_enabled_domains??[],...t.Domains])],E.log("🎉 领域列表",`scene_aware_lookup_enabled_domains: ${JSON.stringify(s.scene_aware_lookup_enabled_domains)}`,"")),s.min_query_len=3;let i=s?.overrides;i&&[...new Set([...Object.keys(i),...t.Functions])].forEach((t=>{switch(E.log("🎉 覆盖列表",`Function: ${t}`,""),t){case"flightutilities":e.set(i,"flightutilities.enabled",!0),e.set(i,"flightutilities.feedback_enabled",!0);break;case"lookup":e.set(i,"lookup.enabled",!0),e.set(i,"lookup.feedback_enabled",!0);break;case"mail":e.set(i,"mail.enabled",!0),e.set(i,"mail.feedback_enabled",!0);break;case"messages":e.set(i,"messages.enabled",!0),e.set(i,"messages.feedback_enabled",!0);break;case"news":e.set(i,"news.enabled",!0),e.set(i,"news.feedback_enabled",!0);break;case"safari":e.set(i,"safari.enabled",!0),e.set(i,"safari.feedback_enabled",!0),e.set(i,"safari.experiments_custom_feedback_enabled",!0);break;case"spotlight":e.set(i,"spotlight.enabled",!0),e.set(i,"spotlight.feedback_enabled",!0);break;case"visualintelligence":e.set(i,"visualintelligence.enabled",!0),e.set(i,"visualintelligence.feedback_enabled",!0),e.set(i,"visualintelligence.enabled_domains",[...new Set([...i.visualIntelligence?.enabled_domains??[],...a.VisualIntelligence.enabled_domains])]),e.set(i,"visualintelligence.supported_domains",[...new Set([...i.visualIntelligence?.supported_domains??[],...a.VisualIntelligence.supported_domains])])}})),s.safari_smart_history_enabled=!!t.Safari_Smart_History,s.smart_history_feature_feedback_enabled=!!t.Safari_Smart_History}}$response.body=JSON.stringify(s);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((e=>E.logErr(e))).finally((()=>E.done($response)));
