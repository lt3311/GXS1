
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var aa="./this.program";function p(a,b){throw b;}var r=!1,t=!1,u=!1,ba=!1;r="object"===typeof window;t="function"===typeof importScripts;u="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ba=!r&&!u&&!t;var v="",w,x,ca,da;
if(u)v=t?require("path").dirname(v)+"/":__dirname+"/",w=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);return ca.readFileSync(a,b?null:"utf8")},x=function(a){a=w(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",
y),p=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ba)"undefined"!=typeof read&&(w=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"function"===typeof quit&&(p=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:
print);else if(r||t)t?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var fa=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);
for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.thisProgram&&(aa=f.thisProgram);f.quit&&(p=f.quit);var ha=[],A,B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime;f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var C,D,ia=!1;function assert(a,b){a||y("Assertion failed: "+b)}var ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ja)return ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var k=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|k:(e&7)<<18|g<<12|k<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function ka(a){return a?G(la,a,void 0):""}
var H,I,la,ma,J,na=f.INITIAL_MEMORY||268435456;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:na/65536,maximum:na/65536});C&&(H=C.buffer);na=H.byteLength;var K=H;H=K;f.HEAP8=I=new Int8Array(K);f.HEAP16=ma=new Int16Array(K);f.HEAP32=J=new Int32Array(K);f.HEAPU8=la=new Uint8Array(K);f.HEAPU16=new Uint16Array(K);f.HEAPU32=new Uint32Array(K);f.HEAPF32=new Float32Array(K);f.HEAPF64=new Float64Array(K);var oa=[],pa=[],qa=[],ra=[];function sa(){var a=f.preRun.shift();oa.unshift(a)}
var L=0,ta=null,M=null;f.preloadedImages={};f.preloadedAudios={};function y(a){if(f.onAbort)f.onAbort(a);z(a);ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function ua(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function va(){return ua("data:application/octet-stream;base64,")}var N="libh265decoder-chrome.wasm";if(!va()){var wa=N;N=f.locateFile?f.locateFile(wa,v):v+wa}
function xa(){try{if(B)return new Uint8Array(B);if(x)return x(N);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}function ya(){return B||!r&&!t||"function"!==typeof fetch||ua("file://")?Promise.resolve().then(xa):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return xa()})}var O,za;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.ha;"number"===typeof c?void 0===b.S?D.get(c)():D.get(c)(b.S):c(void 0===b.S?null:b.S)}}}function Ba(a,b){for(var c=0,d=a.length-1;0<=d;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}
function Ca(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=Ba(a.split("/").filter(function(d){return!!d}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}function Da(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function Ea(a){if("/"===a)return"/";a=Ca(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}
function Fa(){if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(u)try{var b=require("crypto");return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){y("randomDevice")}}
function Ga(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:"/";if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=Ba(a.split("/").filter(function(d){return!!d}),!b).join("/");return(b?"/":"")+a||"."}var Ia=[];function Ja(a,b){Ia[a]={input:[],output:[],O:b};Ka(a,La)}
var La={open:function(a){var b=Ia[a.node.rdev];if(!b)throw new P(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.O.flush(a.tty)},flush:function(a){a.tty.O.flush(a.tty)},read:function(a,b,c,d){if(!a.tty||!a.tty.O.aa)throw new P(60);for(var e=0,g=0;g<d;g++){try{var k=a.tty.O.aa(a.tty)}catch(m){throw new P(29);}if(void 0===k&&0===e)throw new P(6);if(null===k||void 0===k)break;e++;b[c+g]=k}e&&(a.node.timestamp=Date.now());return e},write:function(a,b,c,d){if(!a.tty||!a.tty.O.U)throw new P(60);try{for(var e=
0;e<d;e++)a.tty.O.U(a.tty,b[c+e])}catch(g){throw new P(29);}d&&(a.node.timestamp=Date.now());return e}},Ma={aa:function(a){if(!a.input.length){var b=null;if(u){var c=Buffer.fa?Buffer.fa(256):new Buffer(256),d=0;try{d=ca.readSync(process.stdin.fd,c,0,256,null)}catch(n){if(-1!=n.toString().indexOf("EOF"))d=0;else throw n;}0<d?b=c.slice(0,d).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),null!==b&&(b+="\n")):"function"==typeof readline&&
(b=readline(),null!==b&&(b+="\n"));if(!b)return null;for(d=c=0;d<b.length;++d){var e=b.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|b.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:c+4}c=Array(c+1);var g=c.length;d=0;if(0<g){e=d;g=d+g-1;for(var k=0;k<b.length;++k){var m=b.charCodeAt(k);if(55296<=m&&57343>=m){var q=b.charCodeAt(++k);m=65536+((m&1023)<<10)|q&1023}if(127>=m){if(d>=g)break;c[d++]=m}else{if(2047>=m){if(d+1>=g)break;c[d++]=192|m>>6}else{if(65535>=m){if(d+2>=g)break;
c[d++]=224|m>>12}else{if(d+3>=g)break;c[d++]=240|m>>18;c[d++]=128|m>>12&63}c[d++]=128|m>>6&63}c[d++]=128|m&63}}c[d]=0;b=d-e}else b=0;c.length=b;a.input=c}return a.input.shift()},U:function(a,b){null===b||10===b?(fa(G(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(fa(G(a.output,0)),a.output=[])}},Na={U:function(a,b){null===b||10===b?(z(G(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(z(G(a.output,
0)),a.output=[])}},Q={I:null,K:function(){return Q.createNode(null,"/",16895,0)},createNode:function(a,b,c,d){if(24576===(c&61440)||4096===(c&61440))throw new P(63);Q.I||(Q.I={dir:{node:{L:Q.F.L,J:Q.F.J,lookup:Q.F.lookup,P:Q.F.P,rename:Q.F.rename,unlink:Q.F.unlink,rmdir:Q.F.rmdir,readdir:Q.F.readdir,symlink:Q.F.symlink},stream:{N:Q.G.N}},file:{node:{L:Q.F.L,J:Q.F.J},stream:{N:Q.G.N,read:Q.G.read,write:Q.G.write,W:Q.G.W,ba:Q.G.ba,ea:Q.G.ea}},link:{node:{L:Q.F.L,J:Q.F.J,readlink:Q.F.readlink},stream:{}},
X:{node:{L:Q.F.L,J:Q.F.J},stream:Oa}});c=Pa(a,b,c,d);16384===(c.mode&61440)?(c.F=Q.I.dir.node,c.G=Q.I.dir.stream,c.D={}):32768===(c.mode&61440)?(c.F=Q.I.file.node,c.G=Q.I.file.stream,c.H=0,c.D=null):40960===(c.mode&61440)?(c.F=Q.I.link.node,c.G=Q.I.link.stream):8192===(c.mode&61440)&&(c.F=Q.I.X.node,c.G=Q.I.X.stream);c.timestamp=Date.now();a&&(a.D[b]=c);return c},oa:function(a){if(a.D&&a.D.subarray){for(var b=[],c=0;c<a.H;++c)b.push(a.D[c]);return b}return a.D},pa:function(a){return a.D?a.D.subarray?
a.D.subarray(0,a.H):new Uint8Array(a.D):new Uint8Array(0)},Y:function(a,b){var c=a.D?a.D.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.D,a.D=new Uint8Array(b),0<a.H&&a.D.set(c.subarray(0,a.H),0))},ka:function(a,b){if(a.H!=b)if(0==b)a.D=null,a.H=0;else{if(!a.D||a.D.subarray){var c=a.D;a.D=new Uint8Array(b);c&&a.D.set(c.subarray(0,Math.min(b,a.H)))}else if(a.D||(a.D=[]),a.D.length>b)a.D.length=b;else for(;a.D.length<b;)a.D.push(0);a.H=b}},F:{L:function(a){var b=
{};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;16384===(a.mode&61440)?b.size=4096:32768===(a.mode&61440)?b.size=a.H:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.ga=4096;b.blocks=Math.ceil(b.size/b.ga);return b},J:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&Q.ka(a,b.size)},lookup:function(){throw Qa[44];
},P:function(a,b,c,d){return Q.createNode(a,b,c,d)},rename:function(a,b,c){if(16384===(a.mode&61440)){try{var d=Ra(b,c)}catch(g){}if(d)for(var e in d.D)throw new P(55);}delete a.parent.D[a.name];a.name=c;b.D[c]=a;a.parent=b},unlink:function(a,b){delete a.D[b]},rmdir:function(a,b){var c=Ra(a,b),d;for(d in c.D)throw new P(55);delete a.D[b]},readdir:function(a){var b=[".",".."],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=Q.createNode(a,b,41471,0);a.link=c;return a},
readlink:function(a){if(40960!==(a.mode&61440))throw new P(28);return a.link}},G:{read:function(a,b,c,d,e){var g=a.node.D;if(e>=a.node.H)return 0;a=Math.min(a.node.H-e,d);if(8<a&&g.subarray)b.set(g.subarray(e,e+a),c);else for(d=0;d<a;d++)b[c+d]=g[e+d];return a},write:function(a,b,c,d,e,g){if(!d)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.D||a.D.subarray)){if(g)return a.D=b.subarray(c,c+d),a.H=d;if(0===a.H&&0===e)return a.D=b.slice(c,c+d),a.H=d;if(e+d<=a.H)return a.D.set(b.subarray(c,
c+d),e),d}Q.Y(a,e+d);if(a.D.subarray&&b.subarray)a.D.set(b.subarray(c,c+d),e);else for(g=0;g<d;g++)a.D[e+g]=b[c+g];a.H=Math.max(a.H,e+d);return d},N:function(a,b,c){1===c?b+=a.position:2===c&&32768===(a.node.mode&61440)&&(b+=a.node.H);if(0>b)throw new P(28);return b},W:function(a,b,c){Q.Y(a.node,b+c);a.node.H=Math.max(a.node.H,b+c)},ba:function(a,b,c,d,e,g){assert(0===b);if(32768!==(a.node.mode&61440))throw new P(43);a=a.node.D;if(g&2||a.buffer!==H){if(0<d||d+c<a.length)a.subarray?a=a.subarray(d,
d+c):a=Array.prototype.slice.call(a,d,d+c);d=!0;g=16384*Math.ceil(c/16384);for(b=Sa(g);c<g;)I[b+c++]=0;c=b;if(!c)throw new P(48);I.set(a,c)}else d=!1,c=a.byteOffset;return{ra:c,na:d}},ea:function(a,b,c,d,e){if(32768!==(a.node.mode&61440))throw new P(43);if(e&2)return 0;Q.G.write(a,b,0,d,c,!1);return 0}}},Ta=null,Ua={},R=[],Va=1,S=null,Wa=!0,Xa={},P=null,Qa={};
function T(a,b){a=Ga("/",a);b=b||{};if(!a)return{path:"",node:null};var c={$:!0,V:0},d;for(d in c)void 0===b[d]&&(b[d]=c[d]);if(8<b.V)throw new P(32);a=Ba(a.split("/").filter(function(k){return!!k}),!1);var e=Ta;c="/";for(d=0;d<a.length;d++){var g=d===a.length-1;if(g&&b.parent)break;e=Ra(e,a[d]);c=Ca(c+"/"+a[d]);e.R&&(!g||g&&b.$)&&(e=e.R.root);if(!g||b.Z)for(g=0;40960===(e.mode&61440);)if(e=Ya(c),c=Ga(Da(c),e),e=T(c,{V:b.V}).node,40<g++)throw new P(32);}return{path:c,node:e}}
function Za(a){for(var b;;){if(a===a.parent)return a=a.K.da,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}}function $a(a,b){for(var c=0,d=0;d<b.length;d++)c=(c<<5)-c+b.charCodeAt(d)|0;return(a+c>>>0)%S.length}function Ra(a,b){var c;if(c=(c=ab(a,"x"))?c:a.F.lookup?0:2)throw new P(c,a);for(c=S[$a(a.id,b)];c;c=c.ja){var d=c.name;if(c.parent.id===a.id&&d===b)return c}return a.F.lookup(a,b)}
function Pa(a,b,c,d){a=new bb(a,b,c,d);b=$a(a.parent.id,a.name);a.ja=S[b];return S[b]=a}var cb={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function db(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}function ab(a,b){if(Wa)return 0;if(-1===b.indexOf("r")||a.mode&292){if(-1!==b.indexOf("w")&&!(a.mode&146)||-1!==b.indexOf("x")&&!(a.mode&73))return 2}else return 2;return 0}
function eb(a,b){try{return Ra(a,b),20}catch(c){}return ab(a,"wx")}function fb(a){var b=4096;for(a=a||0;a<=b;a++)if(!R[a])return a;throw new P(33);}function gb(a,b){hb||(hb=function(){},hb.prototype={});var c=new hb,d;for(d in a)c[d]=a[d];a=c;b=fb(b);a.fd=b;return R[b]=a}var Oa={open:function(a){a.G=Ua[a.node.rdev].G;a.G.open&&a.G.open(a)},N:function(){throw new P(70);}};function Ka(a,b){Ua[a]={G:b}}
function ib(a,b){var c="/"===b,d=!b;if(c&&Ta)throw new P(10);if(!c&&!d){var e=T(b,{$:!1});b=e.path;e=e.node;if(e.R)throw new P(10);if(16384!==(e.mode&61440))throw new P(54);}b={type:a,qa:{},da:b,ia:[]};a=a.K(b);a.K=b;b.root=a;c?Ta=a:e&&(e.R=b,e.K&&e.K.ia.push(b))}function jb(a,b,c){var d=T(a,{parent:!0}).node;a=Ea(a);if(!a||"."===a||".."===a)throw new P(28);var e=eb(d,a);if(e)throw new P(e);if(!d.F.P)throw new P(63);return d.F.P(d,a,b,c)}function U(a){jb(a,16895,0)}
function kb(a,b,c){"undefined"===typeof c&&(c=b,b=438);jb(a,b|8192,c)}function lb(a,b){if(!Ga(a))throw new P(44);var c=T(b,{parent:!0}).node;if(!c)throw new P(44);b=Ea(b);var d=eb(c,b);if(d)throw new P(d);if(!c.F.symlink)throw new P(63);c.F.symlink(c,b,a)}function Ya(a){a=T(a).node;if(!a)throw new P(44);if(!a.F.readlink)throw new P(28);return Ga(Za(a.parent),a.F.readlink(a))}
function V(a,b,c,d){if(""===a)throw new P(44);if("string"===typeof b){var e=cb[b];if("undefined"===typeof e)throw Error("Unknown file open mode: "+b);b=e}c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=Ca(a);try{g=T(a,{Z:!(b&131072)}).node}catch(m){}}e=!1;if(b&64)if(g){if(b&128)throw new P(20);}else g=jb(a,c,0),e=!0;if(!g)throw new P(44);8192===(g.mode&61440)&&(b&=-513);if(b&65536&&16384!==(g.mode&61440))throw new P(54);if(!e&&(c=g?40960===(g.mode&61440)?32:
16384===(g.mode&61440)&&("r"!==db(b)||b&512)?31:ab(g,db(b)):44))throw new P(c);if(b&512){c=g;var k;"string"===typeof c?k=T(c,{Z:!0}).node:k=c;if(!k.F.J)throw new P(63);if(16384===(k.mode&61440))throw new P(31);if(32768!==(k.mode&61440))throw new P(28);if(c=ab(k,"w"))throw new P(c);k.F.J(k,{size:0,timestamp:Date.now()})}b&=-131713;d=gb({node:g,path:Za(g),flags:b,seekable:!0,position:0,G:g.G,ma:[],error:!1},d);d.G.open&&d.G.open(d);!f.logReadFiles||b&1||(mb||(mb={}),a in mb||(mb[a]=1,z("FS.trackingDelegate error on read file: "+
a)));try{Xa.onOpenFile&&(g=0,1!==(b&2097155)&&(g|=1),0!==(b&2097155)&&(g|=2),Xa.onOpenFile(a,g))}catch(m){z("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+m.message)}return d}function ob(a,b,c){if(null===a.fd)throw new P(8);if(!a.seekable||!a.G.N)throw new P(70);if(0!=c&&1!=c&&2!=c)throw new P(28);a.position=a.G.N(a,b,c);a.ma=[]}
function pb(){P||(P=function(a,b){this.node=b;this.la=function(c){this.M=c};this.la(a);this.message="FS error"},P.prototype=Error(),P.prototype.constructor=P,[44].forEach(function(a){Qa[a]=new P(a);Qa[a].stack="<generic error, no stack>"}))}var qb;function rb(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c}
function W(a,b,c){a=Ca("/dev/"+a);var d=rb(!!b,!!c);sb||(sb=64);var e=sb++<<8|0;Ka(e,{open:function(g){g.seekable=!1},close:function(){c&&c.buffer&&c.buffer.length&&c(10)},read:function(g,k,m,q){for(var n=0,E=0;E<q;E++){try{var F=b()}catch(Ha){throw new P(29);}if(void 0===F&&0===n)throw new P(6);if(null===F||void 0===F)break;n++;k[m+E]=F}n&&(g.node.timestamp=Date.now());return n},write:function(g,k,m,q){for(var n=0;n<q;n++)try{c(k[m+n])}catch(E){throw new P(29);}q&&(g.node.timestamp=Date.now());return n}});
kb(a,d,e)}var sb,Y={},hb,mb,tb=void 0;function ub(){tb+=4;return J[tb-4>>2]}function Z(a){a=R[a];if(!a)throw new P(8);return a}function vb(){void 0===vb.start&&(vb.start=Date.now());return 1E3*(Date.now()-vb.start)|0}var wb={};
function xb(){if(!yb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa||"./this.program"},b;for(b in wb)a[b]=wb[b];var c=[];for(b in a)c.push(b+"="+a[b]);yb=c}return yb}var yb;function bb(a,b,c,d){a||(a=this);this.parent=a;this.K=a.K;this.R=null;this.id=Va++;this.name=b;this.mode=c;this.F={};this.G={};this.rdev=d}
Object.defineProperties(bb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}}});pb();S=Array(4096);ib(Q,"/");U("/tmp");U("/home");U("/home/web_user");
(function(){U("/dev");Ka(259,{read:function(){return 0},write:function(b,c,d,e){return e}});kb("/dev/null",259);Ja(1280,Ma);Ja(1536,Na);kb("/dev/tty",1280);kb("/dev/tty1",1536);var a=Fa();W("random",a);W("urandom",a);U("/dev/shm");U("/dev/shm/tmp")})();U("/proc");U("/proc/self");U("/proc/self/fd");
ib({K:function(){var a=Pa("/proc/self","fd",16895,73);a.F={lookup:function(b,c){var d=R[+c];if(!d)throw new P(8);b={parent:null,K:{da:"fake"},F:{readlink:function(){return d.path}}};return b.parent=b}};return a}},"/proc/self/fd");pa.push({ha:function(){zb()}});
var Bb={c:function(a,b,c,d){y("Assertion failed: "+ka(a)+", at: "+[b?ka(b):"unknown filename",c,d?ka(d):"unknown function"])},j:function(a,b,c){tb=c;try{var d=Z(a);switch(b){case 0:var e=ub();return 0>e?-28:V(d.path,d.flags,0,e).fd;case 1:case 2:return 0;case 3:return d.flags;case 4:return e=ub(),d.flags|=e,0;case 12:return e=ub(),ma[e+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return J[Ab()>>2]=28,-1;default:return-28}}catch(g){return"undefined"!==typeof Y&&g instanceof P||
y(g),-g.M}},i:function(a,b,c){tb=c;try{var d=ka(a),e=ub();return V(d,b,e).fd}catch(g){return"undefined"!==typeof Y&&g instanceof P||y(g),-g.M}},s:function(a,b,c){try{var d=Z(a);if(0>c||0>e)throw new P(28);if(null===d.fd)throw new P(8);if(1===(d.flags&2097155))throw new P(8);if(16384===(d.node.mode&61440))throw new P(31);if(!d.G.read)throw new P(28);a="undefined"!==typeof e;if(!a)var e=d.position;else if(!d.seekable)throw new P(70);var g=d.G.read(d,I,b,c,e);a||(d.position+=g);return g}catch(k){return"undefined"!==
typeof Y&&k instanceof P||y(k),-k.M}},b:function(){y()},l:vb,n:function(a,b,c){la.copyWithin(a,b,b+c)},o:function(){y("OOM")},p:function(a,b){var c=0;xb().forEach(function(d,e){var g=b+c;e=J[a+4*e>>2]=g;for(g=0;g<d.length;++g)I[e++>>0]=d.charCodeAt(g);I[e>>0]=0;c+=d.length+1});return 0},q:function(a,b){var c=xb();J[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});J[b>>2]=d;return 0},d:function(a){try{var b=Z(a);if(null===b.fd)throw new P(8);b.T&&(b.T=null);try{b.G.close&&b.G.close(b)}catch(c){throw c;
}finally{R[b.fd]=null}b.fd=null;return 0}catch(c){return"undefined"!==typeof Y&&c instanceof P||y(c),c.M}},r:function(a,b){try{var c=Z(a);I[b>>0]=c.tty?2:16384===(c.mode&61440)?3:40960===(c.mode&61440)?7:4;return 0}catch(d){return"undefined"!==typeof Y&&d instanceof P||y(d),d.M}},m:function(a,b,c,d,e){try{var g=Z(a);a=4294967296*c+(b>>>0);if(-9007199254740992>=a||9007199254740992<=a)return-61;ob(g,a,d);za=[g.position>>>0,(O=g.position,1<=+Math.abs(O)?0<O?(Math.min(+Math.floor(O/4294967296),4294967295)|
0)>>>0:~~+Math.ceil((O-+(~~O>>>0))/4294967296)>>>0:0)];J[e>>2]=za[0];J[e+4>>2]=za[1];g.T&&0===a&&0===d&&(g.T=null);return 0}catch(k){return"undefined"!==typeof Y&&k instanceof P||y(k),k.M}},h:function(a,b,c,d){try{a:{for(var e=Z(a),g=a=0;g<c;g++){var k=e,m=J[b+8*g>>2],q=J[b+(8*g+4)>>2],n=void 0;if(0>q||0>n)throw new P(28);if(null===k.fd)throw new P(8);if(0===(k.flags&2097155))throw new P(8);if(16384===(k.node.mode&61440))throw new P(31);if(!k.G.write)throw new P(28);k.seekable&&k.flags&1024&&ob(k,
0,2);var E="undefined"!==typeof n;if(!E)n=k.position;else if(!k.seekable)throw new P(70);var F=k.G.write(k,I,m,q,n,void 0);E||(k.position+=F);try{if(k.path&&Xa.onWriteToFile)Xa.onWriteToFile(k.path)}catch(X){z("FS.trackingDelegate['onWriteToFile']('"+k.path+"') threw an exception: "+X.message)}var Ha=F;if(0>Ha){var nb=-1;break a}a+=Ha}nb=a}J[d>>2]=nb;return 0}catch(X){return"undefined"!==typeof Y&&X instanceof P||y(X),X.M}},k:function(a){var b=Date.now();J[a>>2]=b/1E3|0;J[a+4>>2]=b%1E3*1E3|0;return 0},
a:C,f:function(){return 6},g:function(){},e:function(a){switch(a){case 30:return 16384;case 85:return la.length/16384;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:case 79:return 200809;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;
case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1E3;case 89:return 700;case 71:return 256;
case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return"object"===typeof navigator?navigator.hardwareConcurrency||1:1}J[Ab()>>2]=28;return-1}};
(function(){function a(e){f.asm=e.exports;D=f.asm.t;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==ta&&(clearInterval(ta),ta=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return ya().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){z("failed to asynchronously prepare wasm: "+g);y(g)})}var d={a:Bb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||va()||ua("file://")||"function"!==typeof fetch)return c(b);fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){z("wasm streaming compile failed: "+g);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();var zb=f.___wasm_call_ctors=function(){return(zb=f.___wasm_call_ctors=f.asm.u).apply(null,arguments)};
f._init_decoder=function(){return(f._init_decoder=f.asm.v).apply(null,arguments)};f._uninit_decoder=function(){return(f._uninit_decoder=f.asm.w).apply(null,arguments)};f._decode=function(){return(f._decode=f.asm.x).apply(null,arguments)};f._set_log_level=function(){return(f._set_log_level=f.asm.y).apply(null,arguments)};f._main=function(){return(f._main=f.asm.z).apply(null,arguments)};var Ab=f.___errno_location=function(){return(Ab=f.___errno_location=f.asm.A).apply(null,arguments)};
f._free=function(){return(f._free=f.asm.B).apply(null,arguments)};var Sa=f._malloc=function(){return(Sa=f._malloc=f.asm.C).apply(null,arguments)};
f.addFunction=function(a,b){var c=D;if(!A){A=new WeakMap;for(var d=0;d<c.length;d++){var e=c.get(d);e&&A.set(e,d)}}if(A.has(a))a=A.get(a);else{if(ha.length)d=ha.pop();else{d=c.length;try{c.grow(1)}catch(q){if(!(q instanceof RangeError))throw q;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";}}try{c.set(d,a)}catch(q){if(!(q instanceof TypeError))throw q;if("function"===typeof WebAssembly.Function){var g={i:"i32",j:"i64",f:"f32",d:"f64"},k={parameters:[],results:"v"==b[0]?[]:[g[b[0]]]};for(e=
1;e<b.length;++e)k.parameters.push(g[b[e]]);b=new WebAssembly.Function(k,a)}else{g=[1,0,1,96];k=b.slice(0,1);b=b.slice(1);var m={i:127,j:126,f:125,d:124};g.push(b.length);for(e=0;e<b.length;++e)g.push(m[b[e]]);"v"==k?g.push(0):g=g.concat([1,m[k]]);g[1]=g.length-2;b=new Uint8Array([0,97,115,109,1,0,0,0].concat(g,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));b=new WebAssembly.Module(b);b=(new WebAssembly.Instance(b,{e:{f:a}})).exports.f}c.set(d,b)}A.set(a,d);a=d}return a};
f.removeFunction=function(a){A.delete(D.get(a));ha.push(a)};var Cb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Db(){Cb||Eb();Cb||(M=Db)};
function Eb(){function a(){if(!Cb&&(Cb=!0,f.calledRun=!0,!ia)){f.noFSInit||qb||(qb=!0,pb(),f.stdin=f.stdin,f.stdout=f.stdout,f.stderr=f.stderr,f.stdin?W("stdin",f.stdin):lb("/dev/tty","/dev/stdin"),f.stdout?W("stdout",null,f.stdout):lb("/dev/tty","/dev/stdout"),f.stderr?W("stderr",null,f.stderr):lb("/dev/tty1","/dev/stderr"),V("/dev/stdin","r"),V("/dev/stdout","w"),V("/dev/stderr","w"));Aa(pa);Wa=!1;Aa(qa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Fb){var b=f._main;try{var c=b(0,0);if(!noExitRuntime||
0!==c){if(!noExitRuntime){if(f.onExit)f.onExit(c);ia=!0}p(c,new ea(c))}}catch(d){d instanceof ea||("unwind"==d?noExitRuntime=!0:((b=d)&&"object"===typeof d&&d.stack&&(b=[d,d.stack]),z("exception thrown: "+b),p(1,d)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),ra.unshift(b);Aa(ra)}}if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)sa();Aa(oa);0<L||(f.setStatus?(f.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}f.run=Eb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Fb=!0;f.noInitialRun&&(Fb=!1);noExitRuntime=!0;Eb();
