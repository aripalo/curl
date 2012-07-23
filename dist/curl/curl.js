/*
 MIT License (c) copyright B Cavalier & J Hann */
var h=!0,k=!1,l=this.window||global;function m(){}function p(a,b){return 0==q.call(a).indexOf("[object "+b)}function r(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function t(a,b){var c,e,d;e=1;a=a.replace(u,function(a,b,c,j){c&&e++;d=h;return j||""});return d?(c=b.split("/"),c.splice(c.length-e,e),c.concat(a||[]).join("/")):a}function v(a){var b=a.indexOf("!");return{I:a.substr(b+1),j:0<=b&&a.substr(0,b)}}function x(){}
function y(a,b){x.prototype=a||z;var c=new x;x.prototype=z;for(var e in b)c[e]=b[e];return c}function A(){function a(a,b,d){e.push([a,b,d])}function b(a,b){for(var d,c=0;d=e[c++];)(d=d[a])&&d(b)}var c,e,d;c=this;e=[];d=function(c,f){a=c?function(a){a&&a(f)}:function(a,b){b&&b(f)};d=m;b(c?0:1,f);b=m;e=B};this.X=function(b,d,c){a(b,d,c)};this.h=function(a){c.da=a;d(h,a)};this.d=function(a){c.ca=a;d(k,a)};this.o=function(a){b(2,a)}}function C(a,b,c,e){a instanceof A?a.X(b,c,e):b(a)}
function D(a,b,c){var e;return function(){0<=--a&&b&&(e=b.apply(B,arguments));0==a&&c&&c(e);return e}}function E(){function a(b,d,c){var f;f=F.g(G,B,[].concat(b));this.then=b=function(a,b){C(f,function(b){a&&a.apply(B,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d){return new a(b,d,f)};d&&b(d);C(c,function(){F.i(f)})}var b=[].slice.call(arguments),c;p(b[0],"Object")&&(c=b.shift(),G=F.b(c,G),F.s(c));return new a(b[0],b[1])}
function I(a){var b=a.id;if(b==B)if(J!==B)J={z:"Multiple anonymous defines in url"};else if(!(b=F.S()))J=a;if(b!=B){var c=K[b];b in K||(c=F.k(b,G).b,c=K[b]=F.u(c,b));if(!(c instanceof A))throw Error("duplicate define: "+b);c.Z=k;F.v(c,a)}}
var G=l.curl,L,M,N=l.document,O=N&&(N.head||N.getElementsByTagName("head")[0]),P={},Q={},R={},S={},z={},q=z.toString,B,T={loaded:1,interactive:R,complete:1},K={},U=k,J,W=/\?/,X=/^\/|^[^:]+:\/\//,u=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,Y=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,Z=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,$,F;
F={g:function(a,b,c,e){function d(a){return t(a,f.e)}function g(b,c){var g,n,H,V;g=c&&function(a){c.apply(B,a)};if(p(b,"String")){n=d(b);H=K[n];V=H instanceof A&&H.a;if(!(n in K))throw Error("Module not resolved: "+n);if(g)throw Error("require(id, callback) not allowed");return V||H}C(F.i(F.g(a,f.e,b,e)),g)}var f;f=new A;f.e=f.id=b||"";f.T=e;f.w=c;f.p=g;g.toUrl=function(b){return F.k(d(b),a).url};f.Y=d;return f},u:function(a,b,c,e){var d,g,f;d=F.g(a,b,B,c);d.e=e==B?b:e;g=d.h;f=D(1,function(a){d.m=
a;try{return F.L(d)}catch(b){d.d(b)}});d.h=function(a){C(c||U,function(){g(K[d.id]=f(a))})};d.A=function(a){C(c||U,function(){d.a&&(f(a),d.o(Q))})};return d},K:function(a,b,c,e){a=F.g(a,b,B,c);a.e=e;return a},R:function(a){return a.p},B:function(a){return a.a||(a.a={})},Q:function(a){var b=a.n;b||(b=a.n={id:a.id,uri:F.C(a),exports:F.B(a)},b.a=b.exports);return b},C:function(a){return a.url||(a.url=F.t(a.p.toUrl(a.id)))},b:function(a){var b,c,e;(b=a)||(a={});c=a.apiName||"curl";e=a.apiContext||l;if(e!=
l||"curl"!=c?e[c]:L&&b)throw Error(c+" already exists");e[c]=E;L&&b&&(l.curl=L);c=a.defineName||"define";e=a.defineContext||l;if(e!=l||"define"!=c?e[c]:M&&b)throw Error(c+" already exists");e[c]=c=function(){var a=F.P(arguments);I(a)};M&&b&&(l.define=M);c.amd={plugins:h,jQuery:h,$:"0.6.6"};b&&(F.b=F.F);return F.F(a)},F:function(a,b){function c(a,b){var c,e,f,s,i;for(i in a){f=a[i];f.name=f.id||f.name||i;s=d;e=v(r(f.name||i));c=e.I;if(e=e.j)s=g[e],s||(s=g[e]=y(d),s.f=y(d.f),s.c=[]),delete a[i];if(b){e=
f;var w=void 0;e.path=r(e.path||e.location||"");w=r(e.main)||"main";"."!=w.charAt(0)&&(w="./"+w);e.D=t(w,e.name+"/");e.V=t(w,e.path+"/");e.b=e.config}else e={path:r(f)};e.J=c.split("/").length;c?(s.f[c]=e,s.c.push(c)):s.r=F.H(f,d)}}function e(a){var b=a.f;a.W=RegExp("^("+a.c.sort(function(a,c){return b[a].J<b[c].J}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.c}var d,g;b||(b={});d=y(b,a);d.r=d.baseUrl||"";d.G=d.pluginPath||"curl/plugin";d.f=y(b.f);g=d.plugins=y(b.plugins,a.plugins);
d.c=[];c(a.paths,k);c(a.packages,h);for(var f in g){var i=g[f].c;i&&(g[f].c=i.concat(d.c),e(g[f]))}e(d);return d},s:function(a){var b;(b=a&&a.preloads)&&0<b.length&&C(U,function(){U=F.i(F.g(G,B,b,h))})},k:function(a,b,c){var e,d,g,f;e=b.f;c&&(b.G&&0>a.indexOf("/")&&!(a in e))&&(g=a=r(b.G)+"/"+a);c=X.test(a)?a:a.replace(b.W,function(b){d=e[b]||{};f=d.b;return d.D&&b==a?(g=d.D,d.V):d.path||""});return{e:g||a,b:f||G,url:F.H(c,b)}},H:function(a,b){var c=b.r;return c&&!X.test(a)?r(c)+"/"+a:a},t:function(a){return a+
(W.test(a)?"":".js")},U:function(a,b,c){var e=N.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||l.event;if("load"==c.type||T[e.readyState])delete S[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};e.type=a.aa||"text/javascript";e.charset="utf-8";e.async=!a.ba;e.src=a.url;S[a.id]=e;O.insertBefore(e,O.firstChild);return e},M:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(Y,
"").replace(Z,function(a,d,g){g?c=c==g?B:c:c||b.push(d);return a});return b},P:function(a){var b,c,e,d,g,f;g=a.length;e=a[g-1];d=p(e,"Function")?e.length:-1;2==g?p(a[0],"Array")?c=a[0]:b=a[0]:3==g&&(b=a[0],c=a[1]);!c&&0<d&&(f=h,c=["require","exports","module"].slice(0,d).concat(F.M(e)));return{id:b,m:c||[],q:0<=d?e:function(){return e},l:f}},L:function(a){var b;b=a.q.apply(a.l?a.a:B,a.m);b===B&&a.a&&(b=a.n?a.a=a.n.a:a.a);return b},v:function(a,b){a.q=b.q;a.l=b.l;a.w=b.m;F.i(a)},i:function(a){function b(a,
b,c){f[b]=a;c&&o(a,b)}function c(b,c){var e,d,f,g;e=D(1,function(a){d(a);n(a,c)});d=D(1,function(a){o(a,c)});f=F.N(b,a);(g=f instanceof A&&f.a)&&d(g);C(f,e,a.d,a.a&&function(a){f.a&&(a==P?d(f.a):a==Q&&e(f.a))})}function e(){a.h(f)}var d,g,f,i,j,o,n;f=[];g=a.w;i=g.length;0==g.length&&e();o=D(i,b,function(){a.A&&a.A(f)});n=D(i,b,e);for(d=0;d<i;d++)j=g[d],j in $?(n($[j](a),d,h),a.a&&a.o(P)):j?c(j,d):n(B,d,h);return a},O:function(a){F.C(a);F.U(a,function(){var b=J;J=B;a.Z!==k&&(!b||b.z?a.d(Error(b&&b.z||
"define() missing or duplicated: "+a.url)):F.v(a,b))},a.d);return a},N:function(a,b){var c,e,d,g,f,i,j,o,n;c=b.Y;e=b.T;d=v(a);i=d.I;g=c(d.j||i);j=F.k(g,G,!!d.j);if(d.j)f=g;else if(f=j.b.moduleLoader)i=g,g=f,j=F.k(f,G);d=K[g];g in K||(d=K[g]=F.u(j.b,g,e,j.e),d.url=F.t(j.url),F.O(d));g==f&&(o=new A,n=G.plugins[f]||G,C(d,function(a){var b,d,g;g=a.dynamic;i="normalize"in a?a.normalize(i,c,n)||"":c(i);d=f+"!"+i;b=K[d];if(!(d in K)){b=F.K(n,d,e,i);g||(K[d]=b);var j=function(a){b.h(a);g||(K[d]=a)};j.resolve=
j;j.reject=b.d;a.load(i,b.p,j,n)}o!=b&&C(b,o.h,o.d,o.o)},o.d));return o||d},S:function(){var a;if(!p(l.opera,"Opera"))for(var b in S)if(T[S[b].readyState]==R){a=b;break}return a}};$={require:F.R,exports:F.B,module:F.Q};E.version="0.6.6";"function"==typeof define&&(M=define);"function"==typeof G&&(L=G,G=k);G=F.b(G);F.s(G);K.curl=E;K["curl/_privileged"]={core:F,cache:K,cfg:G,_define:I,_curl:E,Promise:A};
