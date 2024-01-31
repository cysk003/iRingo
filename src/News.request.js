/*
README: https://github.com/VirgilClyne/iRingo
*/

import ENVs from "./ENV/ENV.mjs";
import URIs from "./URI/URI.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENVs(" iRingo: 📰 News v3.0.3(3) request");
const URI = new URIs();

// 构造回复数据
let $response = undefined;

/***************** Processing *****************/
// 解构URL
const URL = URI.parse($request.url);
$.log(`⚠ ${$.name}`, `URL: ${JSON.stringify(URL)}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = URL.host, PATH = URL.path, PATHs = URL.paths;
$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, "");
// 解析格式
const FORMAT = ($request.headers?.["Content-Type"] ?? $request.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ ${$.name}`, `FORMAT: ${FORMAT}`, "");
(async () => {
	const { Settings, Caches, Configs } = setENV($, "iRingo", "News", Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
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
						case "text/plain":
						case "text/html":
						default:
							break;
						case "application/x-mpegURL":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
						case "audio/mpegurl":
							break;
						case "text/xml":
						case "text/plist":
						case "application/xml":
						case "application/plist":
						case "application/x-plist":
							break;
						case "text/vtt":
						case "application/vtt":
							break;
						case "text/json":
						case "application/json":
							body = JSON.parse($request.body ?? "{}");
							// 主机判断
							switch (HOST) {
								case "news-edge.apple.com":
								case "news-todayconfig-edge.apple.com":
									// 路径判断
									switch (PATH) {
										case "v1/configs":
											if (Settings.CountryCode !== "AUTO") body.storefrontId = Configs.Storefront.get(Settings.CountryCode) ?? "143441"
											if (body?.deviceInfo?.preferredLanguages) {
												body.deviceInfo.preferredLanguages.unshift("zh-SG", "zh-Hans-US", "zh-Hant-US");
												body.deviceInfo.preferredLanguages.push("en");
											};
											if (Settings.CountryCode !== "AUTO") body.deviceInfo.countryCode = Settings?.CountryCode ?? "US";
											break;
									};
									break;
								case "news-events.apple.com":
								case "news-sports-events.apple.com":
									switch (PATH) {
										case "analyticseventsv2/async":
											if (body?.data?.session?.mobileData) {
												body.data.session.mobileData.countryCode = "310";
												body.data.session.mobileData.carrier = "Google Fi";
												body.data.session.mobileData.networkCode = "260";
											};
											break;
									};
									break;
								case "news-client-search.apple.com":
									switch (PATH) {
										case "v1/search":
											break;
									};
									break;
							};
							$request.body = JSON.stringify(body);
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							break;
					};
					//break; // 不中断，继续处理URL
				case "GET":
				case "HEAD":
				case "OPTIONS":
				case undefined: // QX牛逼，script-echo-response不返回method
				default:
					// 主机判断
					switch (HOST) {
						case "news-edge.apple.com":
						case "news-todayconfig-edge.apple.com":
							// 路径判断
							switch (PATH) {
								case "v1/configs":
									break;
							};
							break;
						case "news-events.apple.com":
						case "news-sports-events.apple.com":
							switch (PATH) {
								case "analyticseventsv2/async":
									break;
							};
							break;
						case "news-client-search.apple.com":
							switch (PATH) {
								case "v1/search":
									if (URL.query?.parsecParameters) {
										URL.query.parsecParameters = decodeURIComponent(URL.query.parsecParameters)
										URL.query.parsecParameters = JSON.parse(URL.query.parsecParameters);
										if (URL.query.parsecParameters.storeFront) if (Settings.CountryCode !== "AUTO") URL.query.parsecParameters.storeFront = URL.query.parsecParameters.storeFront.replace(/[\d]{6}/, Configs.Storefront.get(Settings.CountryCode) ?? "143441");
										URL.query.parsecParameters = JSON.stringify(URL.query.parsecParameters);
										URL.query.parsecParameters = encodeURIComponent(URL.query.parsecParameters);
									};
									if (URL.query?.storefrontID) if (Settings.CountryCode !== "AUTO") URL.query.storefrontID = Configs.Storefront.get(Settings.CountryCode) ?? "143441";
									if (URL.query?.newsPlusUser) URL.query.newsPlusUser = Settings?.newsPlusUser ?? true;
									break;
							};
							break;
					};
					break;
				case "CONNECT":
				case "TRACE":
					break;
			};
			if ($request.headers?.Host) $request.headers.Host = URL.host;
			$request.url = URI.stringify(URL);
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有构造回复数据，返回构造的回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `echo $response`, `FORMAT: ${FORMAT}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					$response.status = "HTTP/1.1 200 OK";
					delete $response?.headers?.["Content-Length"];
					delete $response?.headers?.["content-length"];
					delete $response?.headers?.["Transfer-Encoding"];
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers });
							break;
						default:
							// 返回普通数据
							$.done({ status: $response.status, headers: $response.headers, body: $response.body });
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ status: $response.status, headers: $response.headers, bodyBytes: $response.bodyBytes });
							break;
					};
				} else $.done({ response: $response });
				break;
			};
			case undefined: { // 无构造回复数据，发送修改的请求数据
				$.log(`🎉 ${$.name}, finally`, `$request`, `FORMAT: ${FORMAT}`, "");
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers })
							break;
						default:
							// 返回普通数据
							$.done({ url: $request.url, headers: $request.headers, body: $request.body })
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							$.done({ url: $request.url, headers: $request.headers, bodyBytes: $request.bodyBytes.buffer.slice($request.bodyBytes.byteOffset, $request.bodyBytes.byteLength + $request.bodyBytes.byteOffset) });
							break;
					};
				} else $.done($request);
				break;
			};
		};
	})

/***************** Function *****************/