(function(a){var b={}
b.$Modules=b
;
var c={"build_number":"20150328.030043","git_commit":"26f778192dc5c05d0ce4223e5047a7ee7dab566c","languages":{"af":"__$$__stringtable_lang_af","ar":"__$$__stringtable_lang_ar","az":"__$$__stringtable_lang_az","bg":"__$$__stringtable_lang_bg","ca":"__$$__stringtable_lang_ca","cs":"__$$__stringtable_lang_cs","da":"__$$__stringtable_lang_da","de":"__$$__stringtable_lang_de","el":"__$$__stringtable_lang_el","es":"__$$__stringtable_lang_es","et":"__$$__stringtable_lang_et","eu":"__$$__stringtable_lang_eu","fa":"__$$__stringtable_lang_fa","fi":"__$$__stringtable_lang_fi","fo":"__$$__stringtable_lang_fo","fr":"__$$__stringtable_lang_fr","ga":"__$$__stringtable_lang_ga","gl":"__$$__stringtable_lang_gl","he":"__$$__stringtable_lang_he","hr":"__$$__stringtable_lang_hr","hu":"__$$__stringtable_lang_hu","id":"__$$__stringtable_lang_id","is":"__$$__stringtable_lang_is","it":"__$$__stringtable_lang_it","ja":"__$$__stringtable_lang_ja","ka":"__$$__stringtable_lang_ka","ko":"__$$__stringtable_lang_ko","ku":"__$$__stringtable_lang_ku","lt":"__$$__stringtable_lang_lt","lv":"__$$__stringtable_lang_lv","mk":"__$$__stringtable_lang_mk","mn":"__$$__stringtable_lang_mn","ms":"__$$__stringtable_lang_ms","nb":"__$$__stringtable_lang_nb","nl":"__$$__stringtable_lang_nl","pl":"__$$__stringtable_lang_pl","pt":"__$$__stringtable_lang_pt","pt_BR":"__$$__stringtable_lang_pt_BR","ro":"__$$__stringtable_lang_ro","ru":"__$$__stringtable_lang_ru","si":"__$$__stringtable_lang_si","sk":"__$$__stringtable_lang_sk","sl":"__$$__stringtable_lang_sl","sq":"__$$__stringtable_lang_sq","sr":"__$$__stringtable_lang_sr","sv":"__$$__stringtable_lang_sv","sw":"__$$__stringtable_lang_sw","th":"__$$__stringtable_lang_th","tr":"__$$__stringtable_lang_tr","uk":"__$$__stringtable_lang_uk","ur":"__$$__stringtable_lang_ur","vi":"__$$__stringtable_lang_vi","zh_CN":"__$$__stringtable_lang_zh_CN","zh_TW":"__$$__stringtable_lang_zh_TW","hi":"__$$__stringtable_lang_hi","tl":"__$$__stringtable_lang_tl","en":"__$$__stringtable_lang_en"},"strings":["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","Would you like to rate this chat?","Chat rated Good","Chat rated Bad","Chat rating removed","Skip","Leave a Comment","(Optional)","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","Comment submitted","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Zendesk","Send Message","Start Chatting","Any Department","Closed","<start_time> to <end_time>","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","Drop files here","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Customer support","Good","Bad","Remove","This widget uses @cookies@.","<name> is typing ...","<name> are typing ...","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","Rate This Chat"]},d=b.Module=(function(){var x=[],y=/^function *\( *\) *{ *([\s\S]*) *}$/
function z(D,E){var F=b[D]
F.module_function=new Function('$Modules',E.toString().replace(y,'$1'))
F.ready()}
function A(D){var E,F,G,H
for(E=x.length-1;E>=0;E--){G=x[E]
H=G.dependencies
for(F=H.length-1;F>=0;F--){if(H[F]==D){H.splice(F,1)
break}}
G.ready()}}
function B(){var D=Array.prototype.slice.call(arguments),E=D.shift()
this.fqname=E
this.name=E.split('.').pop()
this.callbacks=[]
this.dependencies=D
x.push(this)}
B.ensureLoaded=function(D,E){if(D instanceof B)D.ensureLoaded(E)
else E()}
B.prototype.ensureLoaded=function(D){this.ifLoaded(D)
this.load()}
B.prototype.ifLoaded=function(D){this.callbacks.push(D)}
B.prototype.load=function(){var D=this.getDependencies(),E,F
function G(H){z(H[0],H[1])}
for(E=0;E<D.length;E++){F=D[E]
if(F.loader)continue
F.loader=new t(c.baseURL+'/lib/'+c.build_number+'/'+F.fqname+'.js',b,G)}}
B.prototype.getDependencies=function(){var D=this.dependencies,E,F=[this]
for(E=0;E<D.length;E++){var G=b[D[E]]
F=F.concat(G.getDependencies())}
return F}
B.prototype.ready=function(){if(this.dependencies.length||!this.module_function)return
for(E=x.length-1;E>=0;E--)if(x[E]==this){x.splice(E,1)
break}
this.module_function(b)
var D=b[this.fqname],E
D.ifLoaded=D.ensureLoaded=C
for(E=0;E<this.callbacks.length;E++)this.callbacks[E](D)
A(this.fqname)
delete this.callbacks
delete this.fqname
delete this.name
delete this.dependencies
delete this.loader}
function C(D){D()}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core_Module"].join('')
B.prototype.__jx__fqname="jx_core_Module"}
return B})(),e=b.clone=(function(){function x(){}
function y(z){x.prototype=z
return new x()}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_core_globals_clone"].join('')
y.prototype.__jx__fqname="jx_core_globals_clone"}
return y})(),f=b.indexOf=(function(){var x=Array.prototype.indexOf
if(typeof x!='function'||!/\[native code\]/.test(x.toString()))x=y
function y(A){"use strict"
if(this==null){throw new TypeError()}
var B=Object(this),C=B.length>>>0
if(C===0){return -1}
var D=0
if(arguments.length>0){D=Number(arguments[1])
if(D!=D){D=0}
else if(D!=0&&D!=Infinity&&D!=-Infinity){D=(D>0||-1)*Math.floor(Math.abs(D))}}
if(D>=C){return -1}
var E=D>=0?D:Math.max(C-Math.abs(D),0)
for(;E<C;E++){if(E in B&&B[E]===A){return E}}
return -1}
function z(A,B,C){return x.call(B,A,C)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_core_globals_indexOf"].join('')
z.prototype.__jx__fqname="jx_core_globals_indexOf"}
return z})(),g=b.isArray=(function(){function x(y){return Object.prototype.toString.call(y)=='[object Array]'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isArray"].join('')
x.prototype.__jx__fqname="jx_core_globals_isArray"}
return x})(),h=b.isFunction=(function(){function x(y){return typeof y=='function'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isFunction"].join('')
x.prototype.__jx__fqname="jx_core_globals_isFunction"}
return x})(),i=b.isString=(function(){function x(y){return typeof (y)=='string'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isString"].join('')
x.prototype.__jx__fqname="jx_core_globals_isString"}
return x})(),j=b.isNumber=(function(){function x(y){return typeof (y)=='number'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isNumber"].join('')
x.prototype.__jx__fqname="jx_core_globals_isNumber"}
return x})(),k=b.isUndefined=(function(){var x=(function(y){return function(z,A){return A?z==null:z===y}})()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isUndefined"].join('')
x.prototype.__jx__fqname="jx_core_globals_isUndefined"}
return x})(),l=b.nextTick=(function(){var x=100,y,z=[]
function A(C,D,E){p.ok(typeof C=='function','1st argument to nextTick must be a function')
if(E){for(var F=z.length;F-->0;){if(z[F][0]===C&&z[F][1]===D)return}}
z.push([C,D])
if(!y)y=setTimeout(B,0)}
function B(){var C=(+new Date())+x,D=z
z=[]
if(y)y=clearTimeout(y)
for(var E=0,F=D.length;E<F;E++){try {D[E][0].apply(D[E][1])}catch(G){r.fire('error',G)}
if((+new Date())>C){if(E<F-1){D.splice(0,E+1)
if(z.length){z=D.concat(z)}
else{z=D
y=setTimeout(B,0)}}
break}}}
A.tick=B
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_core_globals_nextTick"].join('')
A.prototype.__jx__fqname="jx_core_globals_nextTick"}
return A})(),m=b.Polyfill=(function(){if(!h(String.prototype.trim)){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'')}}
var x={}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Polyfill"].join('')
x.prototype.__jx__fqname="jx_core_Polyfill"}
return x})(),n=b.parseBoolean=(function(){function x(y){return !!y&&y!='false'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_parseBoolean"].join('')
x.prototype.__jx__fqname="jx_core_globals_parseBoolean"}
return x})(),o=b.StackTrace=(function(){var x
try {(0)()}catch(A){x=A.arguments?'chrome':A.stack?'firefox':window.opera&&!('stacktrace' in A)?'opera':'other'}
function y(){this.stack=this[x]()}
y.prototype.toString=function(){return this.stack.join('\n')}
y.prototype.chrome=function(){try {(0)()}catch(A){return A.stack.replace(/^(.*?\n){2}/,'').replace(/^[^\(]+?[\n$]/g,'').replace(/^\s+at\s+/g,'').replace(/^Object.<anonymous>\s*\(/g,'{anonymous}()@').split('\n')}}
y.prototype.firefox=function(){try {(0)()}catch(A){return A.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/,'').replace(/^\(/g,'{anonymous}(').split('\n')}}
y.prototype.opera=function(){try {(0)()}catch(A){var B=A.message.split('\n'),C='{anonymous}',D=/Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,E,F,G
for(E=4,F=0,G=B.length;E<G;E+=2){if(D.test(B[E])){B[F++]=(RegExp.$3?RegExp.$3+'()@'+RegExp.$2+RegExp.$1:C+'()@'+RegExp.$2+':'+RegExp.$1)+' -- '+B[E+1].replace(/^\s+/,'')}}
B.splice(F,B.length-F)
return B}}
y.prototype.other=function(){var A=arguments.callee,B='{anonymous}',C=/function\s*([\w\-$]+)?\s*\(/i,D=[],E=0,F,G,H=20
while(A&&D.length<H){F=C.test(A.toString())?RegExp.$1||B:B
G=Array.prototype.slice.call(A['arguments'])
D[E++]=F+'('+z(G)+')'
if(A===A.caller&&window.opera){break}
A=A.caller}
return D}
function z(A){for(var B=0;B<A.length;++B){var C=A[B]
if(typeof C=='object'){A[B]='#object'}
else if(typeof C=='function'){A[B]='#function'}
else if(typeof C=='string'){A[B]='"'+C+'"'}}
return A.join(',')}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_core_StackTrace"].join('')
y.prototype.__jx__fqname="jx_core_StackTrace"}
return y})(),p=b.Assert=(function(){var x={ok:y,isFunction:function(z,A){y(h(z),A)}}
x.log=function(){}
function y(z,A){if(!z)x.log(A)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Assert"].join('')
x.prototype.__jx__fqname="jx_core_Assert"}
return x})(),q=b.Browser=(function(){var x=navigator,y=x.userAgent.toLowerCase(),z=+(/trident.*rv:? *([0-9]+)/.exec(y)||[])[1]||!1,A=eval("/*@cc_on(function(v,m){return v>=9?v:v>=5.8?8:v>=5.7&&m?7:v>=5.6?6:v>=5.5?5.5:v>=5.1?5:v>=3?4:3})(@_jscript_version,'maxHeight' in document.createElement('a').style)@*/"),B=A==8,C=A==7,D=A==6,E=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]",F=navigator.vendor=='Google Inc.',G=navigator.vendor=='Apple Computer, Inc.',H=!A&&!E&&(F||G||/webkit|khtml/.test(y)),I=+/\d+/.exec(/firefox\/\d+/i.exec(navigator.userAgent)||''),J=y.indexOf('firefox/2')>-1,K=y.indexOf('firefox/3')>-1,L=y.indexOf("iphone")!=-1,M=y.indexOf("ipod")!=-1,N=y.indexOf("ipad")!=-1,O=L||N||M,P=y.indexOf("android")!=-1,Q=y.indexOf("wp7")!=-1,R=O||P||Q,S,T=A&&'msie'||I&&'firefox'||E&&'opera'||F&&'chrome'||G&&'safari',U,V=A&&!W,W=document.compatMode=="CSS1Compat",X=!W,Y=A&&X&&document.documentElement&&!!document.documentElement.style.setExpression,Z=document.documentMode||A,$$=(y.indexOf("windows")!=-1||y.indexOf("win32")!=-1),$_=(y.indexOf("macintosh")!=-1||y.indexOf("mac os x")!=-1),$a=document.location.protocol=='https:',$b=x.language||x.browserLanguage||x.userLanguage||x.systemLanguage,$c={noBoxSizing:Z<=7,ie:{cssBottomRight:D,cssFixed:D||Y,buggyCSS:D||Y}},$d=('textContent' in document.createElement('div')),$e=!1
try {if(window.CustomEvent&&/\[native code\]/.test(window.CustomEvent.toString())){new window.CustomEvent('testevent',{bubbles:!1,cancelable:!0,detail:!0})
$e=!0}}catch($s){;}
switch(T){case 'msie':case 'firefox':case 'chrome':U=+/\d+/.exec(new RegExp(T+'[ /]\\d+').exec(y)||'')
break
default:U=+/\d+/.exec(/version[ \/]\d+/.exec(y)||'')}
function $f($s){return $s.replace(/^http:/,$a?'https:':'http:')}
function $g(){if(window.innerHeight!==a)return window.innerHeight
if(document.documentElement)return document.documentElement.offsetHeight
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientHeight
return 0}
function $h(){if(window.innerWidth!==a)return window.innerWidth
if(document.documentElement)return document.documentElement.offsetWidth
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientWidth
return 0}
if(D){var $i=[]
$c.leaksMemory=function($s){p.isFunction($s)
$i.push($s)}
var $j=function(){for(var $s=0;$s<$i.length;$s++)$i[$s]()}
$c.leaksMemory.remove=function($s){for(var $t=$i.length-1;$t>=0;$t--)if($s==$i[$t])$i.splice($t,1)}
window.attachEvent('onunload',$j)}
var $k='Shockwave Flash',$l='ShockwaveFlash.ShockwaveFlash',$m='application/x-shockwave-flash',$n='application/x-java-vm'
function $o(){var $s=x.plugins&&x.plugins[$k],$t
if($s){$t=x.mimeTypes&&x.mimeTypes[$m]
if($t&&!$t.enabledPlugin)return null
return $s.description}
else if(window.ActiveXObject){try {$s=new window.ActiveXObject($l)
$s.AllowScriptAccess='always'
return $s.GetVariable('$version')}catch($u){;}}}
function $p(){var $s=x.mimeTypes
if(A)return Q?!1:('javaEnabled' in x)&&x.javaEnabled()
if($s&&($s=$s[$n])&&($s=$s.enabledPlugin))return $s.name}
function $q(){if(!k(S))return S
var $s=document.createElement('div'),$t=document.createElement('div'),$u=$s.style,$v=$t.style
$u.overflow='auto'
$u.width=$u.height='100px'
$u.position='absolute'
$u.top='-1000px'
$v.width='100%'
$v.height='200px'
$s.appendChild($t)
document.body.appendChild($s)
S=$s.offsetWidth-$s.clientWidth
document.body.removeChild($s)
return S}
var $r={browser:T,version:U,isStrict:W,isQuirks:X,isOpera:E,isSafari:G,isWebKit:H,isChrome:F,isAndroid:P,isIPhone:L,isIPod:M,isIPad:N,isIOS:O,isWP7:Q,isMobile:R,isNewIE:z,isIE:A,isIE6:D,isIE7:C,isIE8:B,isFF:I,isFF2:J,isFF3:K,isBorderBox:V,isCustomEvents:$e,engineIE:Z,bugs:$c,isWindows:$$,isMac:$_,isSecure:$a,secureURL:$f,hasFlash:$o(),hasJava:$p(),language:$b,getScrollbarSize:$q,getWindowClientHeight:$g,getWindowClientWidth:$h,isTextContent:$d}
if((typeof $r==='function')&&$r.prototype&&!$r.__jx__no_fqname){$r.prototype.__jx__fqname_chain=[($r.prototype.__jx__fqname_chain||"")," ","jx_core_Browser"].join('')
$r.prototype.__jx__fqname="jx_core_Browser"}
return $r})(),r=b.Events=(function(){var x={extend:y,body:y(document.body,!0),window:y(window,!0),document:y(document,!0),runAfterScriptReady:B,runAfterFirstChildReady:C,runAfterDomReady:D}
x.extend(x)
function y(J,K){var L={},M={},N=function(X){if(!J.nodeType&&J!=window&&J!=document)return !0
if(J.tagName=='FORM'&&X=='submit')return !1
return !q.isCustomEvents&&(q.isFF&&q.isFF<9?!document.createEvent('event')[X.toUpperCase()]:typeof (J['on'+X])=='undefined')},O=function(X,Y,Z){if(!X&&typeof Y!='function')throw 'bad arguments to on / addEventListener'
if(!(X in L)){L[X]=[]
if(!N(X))P(X)}
L[X].push(Y)
return J},P=function(X){if(X in M)return
M[X]=function(Y){Y&&(Y.stopPropagation||U(Y))
var Z,$$=L[X],$_=$$.length,$a=!0
$$._active=!0
for(Z=0;Z<$_;Z++){try {if(!$$[Z])continue
if($$[Z].call(J,(q.isCustomEvents&&(Y instanceof window.CustomEvent))?Y.detail:Y)===!1)$a=!1}catch($b){x.fire('error',$b)}}
$$._active=!1
if($$._dirty){for(Z=0;Z<$_;Z++){if(!$$[Z]){if(Z==$_-1)$$.pop()
else $$[Z--]=$$.pop()
$_--}}
$$._dirty=!1}
if($a===!1){if(Y){Y.preventDefault()
Y.returnValue=!1}
return !1}}
if(J.attachEvent)J.attachEvent('on'+X,M[X])
else if(J.addEventListener)J.addEventListener(X,M[X],!1)},Q=function(X){var Y=M[X]
if(!Y)return
if(J.attachEvent)J.detachEvent('on'+X,Y)
else if(J.addEventListener)J.removeEventListener(X,Y,!1)
delete M[X]
delete L[X]},R=function(X,Y){var Z=L[X]
if(!Z)return
for(var $$=0,$_=Z.length;$$<$_;$$++)if(Z[$$]===Y){if(Z.length==1){if(M[X])Q(X)
else delete L[X]}
else if(Z._active)Z[$$]=null,Z._dirty=!0
else if($$==$_-1)Z.pop()
else Z[$$]=Z.pop()
break}
return J},S=function(){if(L&&M){for(var X in M)if(M.hasOwnProperty(X))Q(X)
L=M=null}},T=function(X,Y){if(!q.isCustomEvents||N(X)){var Z=L[X],$$=!0
if(Z&&Z.length){Z._active=!0
var $_,$a,$b
for($_=0,$a=Z.length;$_<$a;$_++){try {$b=Z[$_].call(J,Y)
if($b===!1)$$=!1}catch($c){x.fire('error',$c)}}
Z._active=!1
if(Z._dirty){for($_=0;$_<$a;$_++){if(!Z[$_]){if($_==$a-1)Z.pop()
else Z[$_--]=Z.pop()
$a--}}
Z._dirty=!1}}
return $$}
else{return J.dispatchEvent(new window.CustomEvent(X,{bubbles:!1,cancelable:!0,detail:Y}))}},U=function(X){X.preventDefault=U.preventDefault
X.stopPropagation=U.stopPropagation
X.target=X.srcElement}
U.preventDefault=function(){this.returnValue=!1}
U.stopPropagation=function(){this.cancelBubble=!0}
var V={fire:T,on:O,un:R,unextendEvents:S}
if(K)return V
for(var W in V)if(V.hasOwnProperty(W))J[W]=V[W]
if(q.bugs.leaksMemory)q.bugs.leaksMemory(function(){for(var X in V)if(V.hasOwnProperty(X))J[X]=null})
return J}
var z=0,A=[[],[],[],[]]
function B(J){E(0,J)}
function C(J){E(1,J)}
function D(J){E(2,J)}
function E(J,K){if(J<=z)K()
else A[J].push(K)}
function F(J){while(z<J){z++
for(var K=0;K<A[z].length;K++)A[z][K]()
A[z]=null}}
function G(){if(z>0)return
if(document.body&&document.body.firstChild)F(1)
else window.setTimeout(G,200)}
function H(){F(2)}
function I(){var J
if(q.isSafari){J=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){window.clearInterval(J)
H()}},20)}
else if(document.addEventListener){if(/loaded|complete/i.test(document.readyState))H()
else document.addEventListener("DOMContentLoaded",H,!1)}
else if(q.isIE){window.attachEvent('onload',H)
var K=document.createElement('document:ready')
J=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){K=null
window.clearInterval(J)
H()
return}
try {K.doScroll('left')}catch(L){return}
K=null
window.clearInterval(J)
H()},200)}}
G()
I()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Events"].join('')
x.prototype.__jx__fqname="jx_core_Events"}
return x})(),s=b.DataIFrame=(function(){function x(y){var z,A,B=r.extend(this)
if(window.ActiveXObject){z=new window.ActiveXObject('htmlfile')
z.open()
z.write('<script>document.win = window</script>')
z.close()
A=z.win}
else{var C=this.iframe=document.createElement('iframe'),D=C.style
B.allowTransparency='true'
B.frameBorder='0'
D.backgroundColor='transparent'
D.position='absolute'
D.width=D.height='1px'
D.left=D.top='-9999px'
D.border=0
document.body.appendChild(C)
try {A=C.contentWindow
z=A.document}catch(E){B.fire('error')
B.destroy()
return}}
B.doc=z
B.win=A
B.$Loader={cleanup:function(){l(function(){if(B.$Loader.payload)B.fire('success',B.$Loader.payload)
else B.fire('error')
B.$Loader.payload=null
if(!y)B.destroy()})}}
B.reusable=y}
x.prototype.setScope=function(y){this.scope=y}
x.prototype.load=function(y){try {this.doc.open()
this.win.$Loader=this.$Loader
this.win.$Loader.scope=this.scope||{}
this.doc.write('<html><head><script src="'+y+'"></script></head><body onload="try { $Loader.cleanup() } catch(e) {}"></body></html>')
this.doc.close()}catch(z){this.$Loader.cleanup()}}
x.prototype.destroy=function(){try {this.iframe&&document.body.removeChild(this.iframe)
this.doc=this.win=this.iframe=this.win.$Loader=null}catch(y){;}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_DataIFrame"].join('')
x.prototype.__jx__fqname="jx_io_DataIFrame"}
return x})(),t=b.ScriptLoader=(function(){function x(y,z,A){var B=this
r.extend(B)
var C=new s()
z=z||{}
C.setScope(z)
C.on('success',A)
C.on('error',function(D){B.onError(D)})
C.load(y)}
x.prototype.onError=function(y){y}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_ScriptLoader"].join('')
x.prototype.__jx__fqname="jx_io_ScriptLoader"}
return x})(),u=b.JCSS=(function(){var x={space:/ /g,repeatingLinearGradient:/^\s*repeating-linear-gradient/,prependFQName:/^(\*\*self|)(?!.+?keyframes)/,prePrependFQName:/^(?!\*\*self)/g,replacePseudo:/\:\:\:([A-Za-z_\-.]+)/g,replaceAppend:/ +?&/g,placeholder:/::placeholder$/,replaceVariables:/(?:(?:([A-Za-z\-]+):)??(?:& *:)?\$\$([A-Za-z_\.]+))(?=;)/g,replaceLeftovers:/(?:(?:[A-Za-z\-]+:)??(?:& *:)?(\$\$[A-Za-z_\.]*?)??)(?=;)/g,replaceMedia:/(.*)(@media.*)@mediaend(.*)/,commaStart:/^,/,selectorCase:/([A-Z]+)/g,removePrefix:/^\$\$/,isVariable:/\$\$[A-Za-z_]+/},y={placeholder:['::-webkit-input-placeholder',':-moz-placeholder','::-moz-placeholder',':-ms-input-placeholder','.placeholder']},z,A=[],B={},C={},D={},E={},F='__jcss__default',G=0,H={},I=[],J,K={},L=q.isTextContent
r.extend(K)
K.setIFrameOnly=function($$){z=n($$)}
K.generateAll=function($$){var $_
for(var $a in b)if(b.hasOwnProperty($a)){$_=b[$a]
if($_&&$_.prototype&&$_.__jx__jcss&&!$_.__jx__jcss_generated){K.generate(null,$_.prototype.__jx__fqname,$_.__jx__jcss,null,$_)
$_.__jx__jcss_generated=!0}}
$$||K.writeChanges()}
K.generate=function($$,$_,$a,$b,$c,$d){if(!$a)return
if(!$$&&!$c){return}
$_=$_?'.'+$_.trim().replace(x.space,'.'):''
$a=$a||{}
$b='_'+($b||'')
var $e=[]
$c=$c||$$.__jx__constructor
while($c&&$c.prototype.__jx__super){$c=$c.prototype.__jx__super
if($c.__jx__jcss)$e.unshift(S($c.__jx__jcss,null,$_,!0).join('\n'))}
try {$e.push(S($a,null,$_,!0).join('\n'))}catch($g){;}
var $f=$e.join('')
if(($b in B)&&!$d){B[$b]=[B[$b],$f].join('')
if(!($b in D))D[$b]=''
D[$b]=[D[$b],$f].join('')
E[$b]=!1}
else{B[$b]=$f
D[$b]=$f
E[$b]=!0}
if(!J)J=window.setTimeout(K.writeChanges,0)}
K.setPalette=function($$,$_,$a){$$=Z($$)||{}
$_=$_||F
$a=parseInt($a,10)
if(!H[$_]&&isNaN($a)){return}
if(!isNaN($a)&&$a<0){return}
if($_==F&&!isNaN($a)&&$a!=G){return}
if(I[$a]&&I[$a]!=$_){return}
var $b
for(var $c in $$)if($$.hasOwnProperty($c)){$b=typeof $$[$c]
if($b=='boolean'||$b=='number'||$b=='string')continue
$$[$c]=S($$[$c],null,null,null,!0).join('')}
H[$_]=$$
if(!isNaN($a)){var $d=f($_,I)
if($d!=-1){I[$d]=a}
I[$a]=$_}}
K.delPalette=function($$){if(!$$)return
var $_
if(j($$)){if(!I[$$])return
delete H[I[$$]]
I[$$]=a}
else{if(!H[$$])return
$_=f($$,I)
delete H[$$]
I[$_]=a}}
K.delPalettes=function(){H={}
I.length=0
M()}
function M(){K.setPalette({},F,G)}
M()
K.appendPalette=function(){}
K.getPalette=function($$){$$=$$||F
return H[$$]||{}}
K.getVariable=function($$){for(var $_=I.length-1;$_>=0;$_--){if(I[$_]&&H[I[$_]]&&(H[I[$_]][$$]||j(H[I[$_]][$$]))){if(x.isVariable.test(H[I[$_]][$$])){return K.getVariable(H[I[$_]][$$].toString().slice(2))}
return H[I[$_]][$$]}}}
K.reload=function(){K.writeChanges(!0)}
var N,O
function P($$,$_,$a){while(N[$a]||j(N[$a])){$a=N[$a].toString().replace(x.removePrefix,'')}
if($_){return T($_,$a)}
return $a||''}
K.writeChanges=function($$){if(J)window.clearTimeout(J)
J=null
var $_=$$?B:D,$a,$b,$c,$d
N={}
O={}
for($c in H)if(H.hasOwnProperty($c)){$d=f($c,I)
for($b in H[$c])if(H[$c].hasOwnProperty($b)){if((isNaN(O[$b])||$d>O[$b])&&(H[$c][$b]||j(H[$c][$b]))){N[$b]=H[$c][$b]
O[$b]=$d}}}
for($b in $_)if($_.hasOwnProperty($b)){if(!$_[$b])continue
$a=$_[$b].replace(x.replaceVariables,P)
$a=$a.replace(x.replaceLeftovers,'')
if(!z)Q(document,'jcss'+$b,$a,$$||E[$b])
for(var $e=0;$e<A.length;$e++)Q(A[$e].idoc,'jcss'+$b,$a,$$||E[$b])
C[$b]=$a
$$||($_[$b]='')
E[$b]=!1}
K.fire('write',$a)}
K.bindIFrame=function($$){for(var $_=0,$a=A.length;$_<$a;$_++)if($$===A[$_])return
A.push($$)
for(var $b in B)if(B.hasOwnProperty($b))Q($$.idoc,'jcss'+$b,C[$b])}
K.unbindIFrame=function($$){for(var $_=0,$a=A.length;$_<$a;$_++)if($$===A[$_])A.splice($_,1)}
function Q($$,$_,$a,$b){if(!$$)$$=document
var $c=R($$,$_)
if(!$c){$c=$$.createElement('style')
$$.getElementsByTagName('head')[0].appendChild($c)
$c.type='text/css'
$_&&$c.setAttribute('__jx__stylesheet_id',$_)
if($c.styleSheet!==a){if(!$c.styleSheet){$$.getElementsByTagName('head')[0].removeChild($c)
$c=null
return}
$c.styleSheet.cssText=$a}
else{$c[L?'textContent':'innerText']=$a}}
else{if($b){if($c.styleSheet){$c.styleSheet.cssText=$a}
else{$c[L?'textContent':'innerText']=$a}}
else{if($c.styleSheet){$c.styleSheet.cssText=[$c.styleSheet.cssText,$a].join('')}
else{var $d=document.createTextNode($a)
$c.appendChild($d)}}}}
function R($$,$_){if(!$_)return
if(!$$)$$=document
for(var $a=0,$b=$$.styleSheets.length;$a<$b;$a++){if((($$.styleSheets[$a].ownerNode&&$$.styleSheets[$a].ownerNode.getAttribute('__jx__stylesheet_id'))||($$.styleSheets[$a].owningElement&&$$.styleSheets[$a].owningElement.getAttribute('__jx__stylesheet_id')))==$_){return (($$.styleSheets[$a].ownerNode&&$$.styleSheets[$a].ownerNode)||($$.styleSheets[$a].owningElement&&$$.styleSheets[$a].owningElement))}}}
K.transform2CSS=S
function S($$,$_,$a,$b,$c){var $d=[],$e=[],$f,$g,$h,$i,$j,$k
for($f in $$)if($$.hasOwnProperty($f)){$g=$$[$f]
$h=a
if($f=='@keyframes'){$k=[]
for(var $l in $g)if($g.hasOwnProperty($l)){$k=S($g[$l])
$e.push(Y(['@-webkit-keyframes ',$l,' { ',$k.join(' '),' } ']))
$e.push(Y(['@-moz-keyframes ',$l,' { ',$k.join(' '),' } ']))
$e.push(Y(['@-ms-keyframes ',$l,' { ',$k.join(' '),' } ']))
$e.push(Y(['@-o-keyframes ',$l,' { ',$k.join(' '),' } ']))
$e.push(Y(['@keyframes ',$l,' { ',$k.join(' '),' } ']))}
continue}
if($f.slice(0,6)=='@media'){$f=[$f,'@mediaend'].join('')}
switch(typeof $g){case 'boolean':case 'number':case 'string':$h=$f.split(',')
for($i=0,$j=$h.length;$i<$j;$i++)$d.push(T($h[$i],$g))
break
default:if(g($g)){for($i=0,$j=$g.length;$i<$j;$i++)$d.push(T($f,$g[$i]))
break}
if(x.placeholder.test($f)){$k=$f.replace(x.placeholder,'')
$h=[]
for($i=0,$j=y.placeholder.length;$i<$j;$i++)$h.push(Y([$k,y.placeholder[$i]]))}
if(!g($h))$h=$f.split(',')
for($i=0,$j=$h.length;$i<$j;$i++)$e=$e.concat(S($g,$h[$i].trim()))
break}}
if($d.length){if(!$c){$d.unshift('{')
$d.push('}')}
$e.push($d.join(''))}
if($_||$a||($b&&!(q.isIE<9))){for($i=0,$j=$e.length;$i<$j;$i++){$_&&($e[$i]=[$_.replace(x.replacePseudo,'\.$1'),' ',$e[$i]].join(''))
$a&&($e[$i]=$e[$i].replace(x.prePrependFQName,' ').replace(x.prependFQName,$a))
$b&&($e[$i]=$e[$i].replace(x.replaceAppend,''))
$b&&($e[$i]=$e[$i].replace(x.replaceMedia,"$2 { $1 $3 }"))}}
return $e}
K.toStyle=T
function T($$,$_){function $a($h){$c.push(Y([$h,($d?' !important;':';')]))}
function $b($h){$c.push($h?$$:$$.replace(x.selectorCase,"-$1").replace(x.commaStart,"").toLowerCase())
$a(Y([':',$_]))}
var $c=[],$d,$e=$_&&$_.split&&$_.split(' ')
if(x.isVariable.test($_)){$b(!0)
return $c.join('')}
if($e&&$e.length&&$e[$e.length-1]=='!important'){$d=!0
$e.pop()
$_=$e.join(' ')}
switch($$){case 'background':$c.push(Y([$$,':']))
switch($e[0]){case 'linear-gradient':$e.splice(0,1)
$_=$e.join(' ')
$a(Y(['-webkit-linear-gradient',$_]))
$a(Y(['background:-o-linear-gradient',$_]))
$a(Y(['background:-moz-linear-gradient',$_]))
$a(Y(['background:-ms-linear-gradient',$_]))
$a(Y(['background:-linear-gradient',$_]))
break
case 'gradient':var $f,$g
$a(X($e[2],$e[3]));($e[1]=='top')&&($f='bottom');($e[1]=='left')&&($f='right');($e[1]=='right')&&($f='left');($e[1]=='bottom')&&($f='top')
$g=Y([$e[1],',',$e[2],',',$e[3],')'])
$a(Y(['background:-o-linear-gradient(',$g]))
$a(Y(['background:-moz-linear-gradient(',$g]))
$a(Y(['background:-ms-linear-gradient(',$g]))
$a(Y(['background:linear-gradient(',$g]))
if($e[1]=='left'||$e[1]=='right'){$a(Y(['background:-webkit-gradient(linear,',$e[1],' center,',$f,' center,from(',$e[2],'),to(',$e[3],'))']))
$a(Y(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',U($e[2]),', endColorstr=',U($e[3]),', GradientType=1)']))
$a(Y(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',U($e[2]),', endColorstr=',U($e[3]),', GradientType=1)']))}
else{$a(Y(['background:-webkit-gradient(linear,center ',$e[1],',center ',$f,',from(',$e[2],'),to(',$e[3],'))']))
$a(Y(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',U($e[2]),', endColorstr=',U($e[3]),')']))
$a(Y(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',U($e[2]),', endColorstr=',U($e[3]),')']))}
break
default:if($_.slice(0,4)=='rgba'){$a(V($_,!0))
if(q.bugs.noBoxSizing){break}
$c.push(Y([$$,':']))}
$a($_)
break}
break
case 'radius':case 'borderRadius':switch($e.length){case 1:$e[1]=$e[0]
case 2:$e[2]=$e[0]
case 3:$e[3]=$e[1]
default:$a(Y(['-moz-border-radius-topleft:',$e[0]]))
$a(Y(['-moz-border-radius-topright:',$e[1]]))
$a(Y(['-moz-border-radius-bottomleft:',$e[2]]))
$a(Y(['-moz-border-radius-bottomright:',$e[3]]))
$a(Y(['border-top-left-radius:',$e[0]]))
$a(Y(['border-top-right-radius:',$e[1]]))
$a(Y(['border-bottom-left-radius:',$e[2]]))
$a(Y(['border-bottom-right-radius:',$e[3]]))
$a(Y(['-webkit-border-top-left-radius:',$e[0]]))
$a(Y(['-webkit-border-top-right-radius:',$e[1]]))
$a(Y(['-webkit-border-bottom-left-radius:',$e[2]]))
$a(Y(['-webkit-border-bottom-right-radius:',$e[3]]))
break}
break
case 'boxShadow':$a(Y(['-moz-box-shadow:',$_]))
$a(Y(['-webkit-box-shadow:',$_]))
$a(Y(['box-shadow:',$_]))
break
case 'userSelect':$a(Y(['-moz-user-select:',$_]))
$a(Y(['-webkit-user-select:',$_]))
$a(Y(['-o-user-select:',$_]))
$a(Y(['user-select:',$_]))
break
case 'appearance':$a(Y(['-webkit-appearance:',$_]))
$a(Y(['-moz-appearance:',$_]))
$a(Y(['appearance:',$_]))
break
case 'animation':$a(Y(['-webkit-animation:',$_]))
$a(Y(['-moz-animation:',$_]))
$a(Y(['-ms-animation:',$_]))
$a(Y(['-o-animation:',$_]))
$a(Y(['animation:',$_]))
break
case 'transform':$a(Y(['-webkit-transform:',$_]))
$a(Y(['-moz-transform:',$_]))
$a(Y(['-ms-transform:',$_]))
$a(Y(['-o-transform:',$_]))
$a(Y(['transform:',$_]))
break
case 'transformOrigin':$a(Y(['-webkit-transform-origin:',$_]))
$a(Y(['-moz-transform-origin:',$_]))
$a(Y(['-ms-transform-origin:',$_]))
$a(Y(['-o-transform-origin:',$_]))
$a(Y(['transform-origin:',$_]))
break
case 'transition':$a(Y(['-webkit-transition:',$_]))
$a(Y(['-moz-transition:',$_]))
$a(Y(['-o-transition:',$_]))
$a(Y(['transition:',$_]))
break
case 'rotate':$a(Y(['-webkit-transform:rotate(',$_,'deg)']))
$a(Y(['-moz-transform:rotate(',$_,'deg)']))
$a(Y(['-ms-transform:rotate(',$_,'deg)']))
$a(Y(['-o-transform:rotate(',$_,'deg)']))
break
case 'opacity':$a(Y(['opacity:',$_]))
$a(Y(['-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=',$_*100,')"']))
$a(Y(['filter:alpha(opacity=',$_*100,')']))
$a(Y(['-moz-opacity:',$_]))
$a(Y(['-webkit-opacity:',$_]))
$a(Y(['-o-opacity:',$_]))
break
case 'textOverflow':$a(Y(['text-overflow:',$_]))
$a(Y(['-o-text-overflow:',$_]))
$a(Y(['-ms-text-overflow:',$_]))
break
case 'display':if(q.bugs.noBoxSizing&&$_=='inline-block'){$a('display:inline')
$a('zoom:1')}
else $a(Y(['display:',$_]))
break
case 'backgroundImage':if(x.repeatingLinearGradient.test($_)){$c.push('background-image:')
$_=$_.replace(x.repeatingLinearGradient,'');(q.isChrome||q.isIOS||q.isSafari)?$a(Y(['-webkit-repeating-linear-gradient',$_])):q.isFF?$a(Y(['-moz-repeating-linear-gradient',$_])):q.isOpera?$a(Y(['-o-repeating-linear-gradient',$_])):q.isIE?$a(Y(['-ms-repeating-linear-gradient',$_])):$a(Y(['repeating-linear-gradient',$_]))
break}
default:$b()
break}
return $c.join('')}
function U($$){if(typeof $$!='string')return ''
var $_
$_=$$.charAt(0)=='#'?$$.substring(1):$$
if($_.slice(0,3)=='rgb')return V($_)
if($_.length==3)$_=$_.charAt(0)+$_.charAt(0)+$_.charAt(1)+$_.charAt(1)+$_.charAt(2)+$_.charAt(2)
return '#'+$_}
function V($$,$_){$$=$$.slice(5,-1)
$$=$$.split(',')
if($$.length==3||$_)return '#'+W($$[0])+W($$[1])+W($$[2])
$$[3]=(parseFloat($$[3],10)*255).toFixed()
return '#'+W($$[3])+W($$[0])+W($$[1])+W($$[2])}
function W($$){$$=parseInt($$,10).toString(16)
if($$.length==1)$$='0'+$$
return $$}
function X($$,$_){($$.slice(0,3)=='rgb')&&($$=V($$,!0));($_.slice(0,3)=='rgb')&&($_=V($_,!0))
$$=U($$).substring(1)
$_=U($_).substring(1)
var $a=$d(0),$b=$d(2),$c=$d(4)
return ('#'+$a+$b+$c)
function $d($e){return (Math.round((parseInt($$.substring($e,$e+2),16)+parseInt($_.substring($e,$e+2),16))/32)*16).toString(16)}}
function Y($$){return $$.join('')}
function Z($$,$_,$a){if(!$$)return
if(!$_)$_={}
if($a)$a+='.'
else $a=''
for(var $b in $$)if($$.hasOwnProperty($b)){if(typeof $$[$b]=='object'){Z($$[$b],$_,$a+$b)}
else{$_[$a+$b]=$$[$b]}}
return $_}
if((typeof K==='function')&&K.prototype&&!K.__jx__no_fqname){K.prototype.__jx__fqname_chain=[(K.prototype.__jx__fqname_chain||"")," ","jx_core_JCSS"].join('')
K.prototype.__jx__fqname="jx_core_JCSS"}
return K})(),v=b._=(function(){var x=[],y='_',z=[],A=[]
function B(R,S){if(isNaN(R)){return R}
if(R==-1)R=x.length
var T=x[R]
if(!T)x[R]=T=new C()
if(typeof (S)=='string')T.add('_',S)
else for(var U in S)if(S.hasOwnProperty(U))T.add(U,S[U])
return T}
function C(){var R={},S=[],T={add:W,bind:X,onTranslate:Y,toJSON:Z,toString:$$,update:$_},U=['concat','replace','toLowerCase','toUpperCase']
for(var V=0;V<U.length;V++)T[U[V]]=$b(U[V])
return T
function W($c,$d){R[$c]=$d}
function X($c){D($c,T)}
function Y($c){S.push($c)}
function Z(){return $$()}
function $$($c){return R[$c||y]||R._}
function $_($c){var $d=$$($c),$e
for($e=0;$e<S.length;$e++)S[$e]($d)}
function $a($c,$d){var $e=new C(),$f
x[R._]=$e
for(var $g in R)if(R.hasOwnProperty($g)){$f=R[$g]
if(typeof ($f)!='string')continue
$f=$f[$c].apply($f,$d)
$e.add($g,$f)}
return $e}
function $b($c){return function(){return $a($c,arguments)}}}
function D(R,S){for(var T=0;T<z.length;T++)if(z[T]==R){A[T]=S
return}
z.push(R)
A.push(S)}
function E(R){for(var S=0;S<z.length;S++)if(z[S]==R){z.splice(S,1)
A.splice(S,1)
return}}
var F=[],G=q.isTextContent
function H(R){R=R.split(/-|_/).slice(0,2)
var S=R[0]=R[0].toLowerCase()
if(R[1])R[1]=R[1].toUpperCase()
R=R.join('_')
if(R in c.languages)return R
if(S in c.languages)return S
return null}
function I(R){var S,T,U,V,W,X
R=H(R)
if(!R)return
W=c.languages[R]
if(!W)return
X=b[c.languages[R]]
if(!X)return
B.language=y=R
d.ensureLoaded(X,function(Y){if(Y)J(R)
if(R!=y)return
for(S=0,T=x.length;S<T;S++)if(x[S].update instanceof Function)x[S].update(R)
for(S=0,T=z.length;S<T;S++){U=z[S]
V=A[S].toString()
if(G){U.textContent=V}
else{if(typeof (U.innerText)=='string')U.innerText=V
else if(typeof (U.nodeValue)=='string')try {U.data=V}catch(Z){;}}}
F._active=!0
T=F.length
for(S=0;S<T;S++){try {F[S]&&F[S](R)}catch(Z){;}}
F._active=!1
if(F._dirty){for(S=0;S<T;S++){if(!F[S]){if(S==T-1)F.pop()
else F[S--]=F.pop()
T--}}
F._dirty=!1}})}
function J(R){var S=b[c.languages[R]],T
for(T=0;T<S.length;T++)if(S[T]!==0)x[T].add(R,S[T])}
function K(R){F.push(R)}
function L(R){for(var S=0,T=F.length;S<T;S++){if(F[S]==R){if(F._active)F[S]=null,F._dirty=!0
else if(S==T-1)F.pop()
else F[S]=F.pop()
break}}}
var M=/^ar|^fa|^he/
function N(){return !(y.search(M)==-1)}
function O(R){if(!N())return R
return R.replace(/left/,'%left%').replace(/right/,'left').replace(/%left%/,'right').replace(/ltr/,'%ltr%').replace(/rtl/,'ltr').replace(/%ltr%/,'rtl')}
var P=c.strings
for(var Q=0;Q<P.length;Q++)B(Q,P[Q])
B.bind=D
B.flip=O
B.onLanguage=K
B.unLanguage=L
B.update=I
B.unbind=E
B.rtl=N
B.findClosestLanguage=H
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core__"].join('')
B.prototype.__jx__fqname="jx_core__"}
return B})(),w=b.Element=(function(){var x={create:N,extend:U,appendChild:P,addChildren:Q,hasParentNode:O,id:D,get:I,set:G,unset:H,mangleIDs:J,generateID:D,nativeGenerator:K,getStyles:R,processDeferredStyles:B}
function y($_,$a,$b){try {$_.style[$$($a)]=$b}catch($c){if(console)console.log('Failed to set style.'+$a+' to "'+$b+'": '+$c.description)}}
var z=y
function A(){}
function B(){}
var C=1
function D(){return '___$_'+C++}
var E='__JX__ID',F={}
function G($_,$a){var $b=$a.getAttribute(E)
$b=$b?$b.split(' '):[]
$_||($_=D())
F[$_]=$a
$b.push($_)
$a.setAttribute(E,$b.join(' '))}
function H($_){var $a=$_.getAttribute(E)
if(!$a)return
$a=$a.split(' ')
for(var $b=0;$b<$a.length;$b++)delete F[$a[$b]]}
function I($_){return F[$_]}
if(q.bugs.leaksMemory)q.bugs.leaksMemory(function(){for(var $_=0,$a=F.length,$b;$_<$a;$_++){$b=F[$_]
$b.plugLeakage&&$b.plugLeakage()}})
function J($_,$a){var $b
for(var $c=0;$c<$a.length;$c++){$b=$a[$c]
if(typeof ($b)!='string'){if($b[1])$b[1]=$_+'__'+$b[1]
if($b[3])J($_,$b[3])}}
return $a}
function K($_){var $a=function($b,$c,$d,$e,$f){$c=$c||D()
var $g=$b.ownerDocument,$h=x.create($g,$_,$c)
$h.__jx__constructor=$a
$h.__jx__native=!0
var $i=!1
$h.appendToParent=function($j){if(!x.hasParentNode($h))x.appendChild($b,$h)
if($j&&!$i){if($b.appendToParent)$b.appendToParent(!0)
$i=!0}}
$h.setStyle($d)
$h.setAttributes($f)
x.addChildren($h,$e)
$h.appendToParent()
return $h}
return $a}
function L($_){while($_.defaultPlacement)$_=$_.defaultPlacement
return $_}
function M($_){if($_.createElement)return $_
return L($_).ownerDocument}
function N($_,$a,$b,$c){var $d=M($_).createElement($a)
if(q.isSafari&&$a.toLowerCase()=='textarea'){$d.style.resize='none'}
switch($a.toLowerCase()){case 'textarea':case 'input':$d.style.outlineStyle='none'}
A($d)
G($b,$d)
U($d)
r.extend($d)
$d.setStyle($c)
if(q.buggyCSS)$d.setOverflow('auto')
return $d}
function O($_){return ($_.parentNode&&$_.parentNode.nodeType&&$_.parentNode.nodeType!=11)}
function P($_,$a){if($_==document.body&&($a.style.position=='absolute'||$a.style.position=='fixed')){$_.insertBefore($a,$_.firstChild)
$a.applyConstraints()
return}
var $b=$_
while($b.defaultPlacement)$b=$b.defaultPlacement
$b.appendChild($a)
$a.applyConstraints()}
function Q($_,$a){if(!$a||!$a.length)return
$_=L($_)
var $b,$c,$d=$_.ownerDocument,$e
for(var $f=0;$f<$a.length;$f++){$c=$a[$f]
if(g($c))$b=$c[0]($_,$c[1],$c[2],$c[3],$c[4])
else{$e=$d.createTextNode($c)
$_.appendChild($e)
if(typeof $c.bind=='function')$c.bind($e)}}
return $b}
function R($_){var $a=$_.ownerDocument
if($a.defaultView&&$a.defaultView.getComputedStyle)return $a.defaultView.getComputedStyle($_,null)||{}
if($_.currentStyle)return $_.currentStyle
return {}}
function S($_,$a){return R($_)[$a]}
var T=q.isTextContent
function U($_,$a){var $b=$_.style,$c=$_.ownerDocument,$d=$c.compatMode=='BackCompat',$e=!!($c.documentElement&&$c.documentElement.style.setExpression),$f=q.isIE6||(q.isIE&&$d&&$e)
function $g($3){var $4
for(var $5 in $3)if($3.hasOwnProperty($5)){$4='set'+$5.substr(0,1).toUpperCase()+$5.substr(1)
if(typeof $_[$4]=='function')$_[$4]($3[$5])}}
function $h(){return $_.textContent||$_.innerText||''}
function $i($3){v&&v.unbind&&v.unbind($_)
if($3&&typeof $3.bind=='function')$3.bind($_)
if(T)$_.textContent=$3
else $_.innerText=$3}
function $j($3){var $4,$5
if(arguments.length==1&&i($3)){if(!$3)return
$3=$3.split(';')
for($4=0;$4<$3.length;$4++){if($3[$4].match(/^\s*$/))continue
$5=$3[$4].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!$5&&$3[$4].length){if(console)console.log('Bad style: "'+$3[$4]+'"')
continue}
$7($5[1],$5[2])}}
else if(arguments.length==1&&typeof ($3)=='object'){for(var $6 in $3)if($3.hasOwnProperty($6))$7($6,$3[$6])}
else if(arguments.length>1){for($4=0;$4<arguments.length;$4+=2)$7(arguments[$4],arguments[$4+1])}
function $7($8,$9){var _$=$$('set-'+$8)
if(typeof $_[_$]=='function')$_[_$]($9)
else z($_,$8,$9)}}
function $k($3){function $4(){var $5=(v&&v.flip)?v.flip($3):$3
if(q.isIE)$b.styleFloat=$5
else $b.cssFloat=$5}
;
v&&v.onLanguage&&v.onLanguage($4)
$4()
return $_}
var $l,$m,$n,$o,$p,$q,$r,$s,$t
$l=$m=$n=$o=$p=$q=NaN
$r=null
function $u($3){$l=$A($3)
$C()
return $_}
function $v($3){$n=$A($3)
$C()
return $_}
function $w($3){$m=$A($3)
$C()
return $_}
function $x($3){$o=$A($3)
$C()
return $_}
function $y($3){$p=$A($3)
$C()
return $_}
function $z($3){$q=$A($3)
$C()
return $_}
function $A($3){return (i($3)&&$3.substr($3.length-1)=='%')?parseInt($3,10)+'%':parseInt($3,10)}
function $B($3){switch($3){case 'static':case 'relative':case 'absolute':case 'fixed':$r=$3}
if($r!==null)z($_,'position',($f&&$r=='fixed')?'absolute':$r)
return $_}
function $C(){if(!isNaN($l)&&!isNaN($q))$m=NaN
if(!isNaN($n)&&!isNaN($p))$o=NaN
if($p<0)$p=0
if($q<0)$q=0
$D()}
function $D(){if(!x.hasParentNode($_))return
if(q.bugs.ie.cssFixed&&$r=='fixed'){l($E,$_,!0)
return}
if(q.bugs.ie.cssBottomRight&&((!isNaN($n)&&!isNaN($o))||(!isNaN($l)&&!isNaN($m)))){$G()
return}
$H()}
function $E(){$F()
if($_.appendToParent)$_.appendToParent(!0)
if($m<0)$m=0
if($o<0)$o=0
p.ok(isNaN($n)!=isNaN($o),'One and only one of left/right must be set')
p.ok(isNaN($l)!=isNaN($m),'One and only one of top/bottom must be set')
p.ok(!isNaN($p),'Width must be set')
p.ok(!isNaN($q),'Height must be set')
p.ok($_.ownerDocument==document,'Fixed element must be top level element')
if($q!=$t){$b.height=$q+'px'
$t=$q}
if($p!=$s){$b.width=$p+'px'
$s=$p}
var $3,$4,$5,$6
if(q.isQuirks){$6='document.body.clientHeight'
$5='document.body.clientWidth'
$3='(dummye34cf6=document.body.scrollLeft)+'
$4='(dummye34cf6=document.body.scrollTop )+'}
else{$6='document.documentElement.clientHeight'
$5='document.documentElement.clientWidth'
$3='(dummye34cf6=document.documentElement.scrollLeft)+'
$4='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN($n))$3+=$n
else if(i($n))$3+=parseInt($n,10)/100*(q.isQuirks?document.body:document.documentElement).clientWidth
else $3+=$5+'-'+($p+$o)
if(!isNaN($l))$4+=$l
else if(i($l))$4+=parseInt($l,10)/100*(q.isQuirks?document.body:document.documentElement).clientHeight
else $4+=$6+'-'+($q+$m)
if(q.isIE6&&document.body.currentStyle.direction=='rtl'){if(q.isQuirks)$3+='-(document.body.scrollWidth-document.body.clientWidth)'
else $3+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
$b.setExpression('left',$3+'+"px"')
$b.setExpression('top',$4+'+"px"')}
function $F(){if($F.alreadyHacked)return
$F.alreadyHacked=1
if(q.isStrict)document.body.parentNode.style.background='#fff url(https://) fixed'
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var $3=document.createElement('div'),$4=$3.style,$5=document.body.currentStyle
$4.backgroundAttachment=$5.backgroundAttachment
$4.backgroundColor=$5.backgroundColor
$4.backgroundImage=$5.backgroundImage
$4.backgroundPositionX=$5.backgroundPositionX
$4.backgroundPositionY=$5.backgroundPositionY
$4.backgroundRepeat=$5.backgroundRepeat
$4.position='absolute'
$4.zIndex=-1
$4.top=$4.left=0
$4.width='100%'
document.body.insertBefore($3,document.body.firstChild)
var $6=!1,$7=0,$8,$9,_$=function(){if(!$6&&$7){$8+=document.body.clientWidth-$7
$4.width=$8+'px'
$7=document.body.clientWidth}
if($9)return
$9=setTimeout(function(){$4.width=0
document.body.className=document.body.className
$8=Math.max(document.body.scrollWidth,document.body.clientWidth)
$4.width=$8+'px'
$7=document.body.clientWidth
$6=document.body.scrollWidth>document.body.clientWidth
$9=null},0)}
setTimeout(_$,0)
$4.setExpression('height','document.body.scrollHeight+"px"')
_$()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function $G(){if($_.appendToParent)$_.appendToParent(!0)
$F()
var $3=isNaN($n)?'':$n,$4=isNaN($o)?'':$o,$5=isNaN($p)?'':$p,$6,$7=isNaN($l)?'':$l,$8=isNaN($m)?'':$m,$9=isNaN($q)?'':$q,_$,__=$_.ownerDocument.compatMode=='BackCompat'
if($r=='fixed'&&$_.ownerDocument==document){if(__){_$='document.body.clientHeight'
$6='document.body.clientWidth'}
else{_$='document.documentElement.clientHeight'
$6='document.documentElement.clientWidth'}}
else{_$='this.offsetParent.clientHeight'
$6='this.offsetParent.clientWidth'}
if(q.isIE6){if(!isNaN($n)&&!isNaN($o)){$4=''
$5=[$6,$n,$o].join('-')}
if(!isNaN($l)&&!isNaN($m)){$8=''
$9=[_$,$l,$m].join(' - ')}}
if($r=='fixed'&&$_.ownerDocument==document){if(__){if(!isNaN($n)||isNaN($o))$3+='+(dummye34cf6=document.body.scrollLeft)'
else{$3+='+(dummye34cf6=document.body.scrollLeft)+document.body.clientWidth-this.offsetWidth-'+$o
$4=''}
if(!isNaN($l)||isNaN($m))$7+='+(dummye34cf6=document.body.scrollTop)'
else{$7+='+(dummye34cf6=document.body.scrollTop)+document.body.clientHeight-this.offsetHeight-'+$m
$8=''}}
else{if(!isNaN($n)||isNaN($o))$3+='+(dummye34cf6=document.documentElement.scrollLeft)'
else if(q.isIE6){$3+='+(dummye34cf6=document.documentElement.scrollLeft)+document.documentElement.clientWidth-this.offsetWidth-'+$o
$4=''}
else $4+='+document.documentElement.scrollWidth-(dummye34cf6=document.documentElement.scrollLeft)-document.documentElement.clientWidth'
if(!isNaN($l)||isNaN($m))$7+='+(dummye34cf6=document.documentElement.scrollTop)'
else if(q.isIE6){$7+='+(dummye34cf6=document.documentElement.scrollTop)+document.documentElement.clientHeight-this.offsetHeight-'+$m
$8=''}
else $8+='+document.documentElement.scrollHeight - (dummye34cf6=document.documentElement.scrollTop) - document.documentElement.clientHeight'}}
var _a,_b
if(0&&$_.parentNode==document.body)window.attachEvent('onscroll',function(){if(!_a){_d('left',$3)
_d('right',$4)
_d('width',$5)
_d('top',$7)
_d('bottom',$8)
_d('height',$9)
_a=setInterval(function(){_b--
if(!_b)_c()},200)}
_b=5})
function _c(){$b.removeExpression('left')
$b.removeExpression('right')
$b.removeExpression('width')
$b.removeExpression('top')
$b.removeExpression('bottom')
$b.removeExpression('height')
clearInterval(_a)
_a=!1}
_d('left',$3)
_d('right',$4)
_d('width',$5)
_d('top',$7)
_d('bottom',$8)
_d('height',$9)
function _d(_e,_f){$b[_e]=''
$b.removeExpression(_e)
if(typeof (_f)=='number')$b[_e]=_f+'px'
else if(i(_f)&&_f.substr(_f.length-1)=='%')$b[_e]=_f
else if(i(_f)&&_f.length)$b.setExpression(_e,_f)}}
function $H(){$J()
$I()}
function $I(){$b.top=i($l)?$l:isNaN($l)?'':$l+'px'
$b.bottom=i($m)?$m:isNaN($m)?'':$m+'px'
if($q!=$t){$b.height=i($q)?$q:isNaN($q)?'':$q+'px'
$t=$q}}
function $J(){$b.left=i($n)?$n:isNaN($n)?'':$n+'px'
$b.right=i($o)?$o:isNaN($o)?'':$o+'px'
if($p!=$s){$b.width=i($p)?$p:isNaN($p)?'':$p+'px'
$s=$p}}
var $K='',$L=0,$M=0
$_.dock=function($3,$4,$5){$K=$3
if(j($4))$L=$4
if(j($5))$M=$5
$N()
$_.on('jx:resize',$N)}
function $N(){var $3=isNaN($p)?$_.offsetWidth:$p,$4=isNaN($q)?$_.offsetHeight:$q,$5,$6,$7,$8,$9,_$
$5=$6=$7=$8=NaN
$9=_$=0
switch($K.charAt(0)){case 't':$5=0
break
case 'm':$5='50%'
break
case 'b':$6=0
break}
switch($K.charAt(1)){case 'l':$7=0
break
case 'c':$7='50%'
break
case 'r':$8=0
break}
if($5=='50%')$9=-($4/2)
if($7=='50%')_$=-($3/2)
var __=0
if($M>=0||!isNaN($5)||typeof ($5)=="string"){$9+=$M}
else{__=-$M}
_$+=$L
$_.setMargin([$9+'px',0,__+'px',_$+'px'].join(' ')).setTop($5).setBottom($6).setLeft($7).setRight($8)}
var $O,$P=[0,0,0,0]
function $Q($3){if(!g($3)){$3=$3.split(' ')
$3[0]=parseInt($3[0],10)
$3[1]=parseInt($3[1],10)
$3[2]=parseInt($3[2],10)
$3[3]=parseInt($3[3],10)}
if($f){$3[1]=Math.max(0,$3[1])
$3[2]=Math.max(0,$3[2])}
$O=$3
return $_}
function $R($3){if(!g($3)){$3=$3.split(' ')
$3[0]=parseInt($3[0],10)
$3[1]=parseInt($3[1],10)
$3[2]=parseInt($3[2],10)
$3[3]=parseInt($3[3],10)}
$P=[Math.max(0,$3[0]),Math.max(0,$3[1]),Math.max(0,$3[2]),Math.max(0,$3[3])]
return $_}
function $S(){if(!$O)return
if($n<$O[3]+$P[3])$n=$O[3]
if($o<$O[1]+$P[1])$o=$O[1]
if($l<$O[0]+$P[0])$l=$O[0]
if($m<$O[2]+$P[2])$m=$O[2]
var $3=q.isQuirks?document.body:document.documentElement,$4=isNaN($p)?$_.offsetWidth:$p,$5=$3.clientWidth-$4,$6=$3.clientHeight-$_.offsetHeight
if($5-$n<=$O[1]+$P[1])$n=$5-$O[1]
if($5-$o<=$O[3]+$P[3])$o=$5-$O[3]
if($6-$l<=$O[2]+$P[2])$l=$6-$O[2]
if($6-$m<=$O[0]+$P[0])$m=$6-$O[0]}
function $T($3,$4){$m=$o=NaN
$l=$4
$n=$3
$S()
$D()
return $_}
function $U($3,$4){if(isNaN($n)&&isNaN($o))$n=0
if(isNaN($l)&&isNaN($m))$l=0
if(!isNaN($n))$n+=$3
if(!isNaN($o))$o-=$3
if(!isNaN($l))$l+=$4
if(!isNaN($m))$m-=$4
$S()
$D()}
function $V($3,$4,$5,$6){if($3){if(isNaN($p))$p=$_.offsetWidth
$p=Math.max($5||0,$p+$3)}
if($4){if(isNaN($q))$q=$_.offsetHeight
$q=Math.max($6||0,$q+$4)}
$S()
$D()
$_.fire('jx:resize')
return $_}
var $W=!1
function $X($3){if($3=='none'||$3=='block')$W=!0
if($3=='none'||$3=='hidden'||$3=='false'||!$3)$Y()
else $0()
return $_}
function $Y(){if($W){if($b.display!='none'){$b.display='none'
$_.fire('hide')}}
else{if($b.visibility!='hidden'){$b.visibility='hidden'
$_.fire('hide')}}
return $_}
function $Z(){if($W)return $_.getStyle('display')!='none'
else return $_.getStyle('visibility')=='visible'}
function $0(){if($W){if($b.display!='block'){$b.display='block'
$_.fire('show')}}
else{if($b.visibility!='visible'){$b.visibility='visible'
$_.fire('show')}}
return $_}
$_.getStyles=function(){return R($_)}
$_.getStyle=function($3){return S($_,$3)}
$_.setAttributes=$g
$_.getText=$h
$_.setText=$i
$_.setStyle=$j
$_.setFloat=$k
$_.setPosition=$B
$_.setTop=$u
$_.setBottom=$w
$_.setLeft=$v
$_.setRight=$x
$_.setHeight=$z
$_.setWidth=$y
$_.applyConstraints=$D
$_.setVisible=$X
$_.setBounds=$Q
$_.setSnaps=$R
$_.move=$U
$_.moveTo=$T
$_.resizeBy=$V
$_.hide=$Y
$_.show=$0
$_.isVisible=$Z
for(var $1 in V)if(V.hasOwnProperty($1))$_[$1]=V[$1]
if($a){var $2=$_.firstChild
while($2){U($2,!0)
$2=$2.nextSibling}}
return $_}
var V=x.proto={$:function($_){return I(this.id+'__'+$_)},destroy:function(){if(this._destructors){for(var $_=this._destructors,$a=$_.length,$b=0;$b<$a;$b++)$_[$b].call(this)}
this.parentNode&&this.parentNode.removeChild(this)
this._autobinds&&this.autounbind()
typeof this.empty=='function'&&this.empty()
typeof this.unextendEvents=='function'&&this.unextendEvents()
H(this)
if(q.bugs.leaksMemory)typeof this.plugLeakage=='function'&&this.plugLeakage()},empty:function(){var $_
while(($_=this.firstChild)){if(typeof $_.destroy=='function')$_.destroy()
else if($_.jx_wrapper)$_.jx_wrapper.destroy()
else if($_.nodeType==1)V.destroy.call($_)
else this.removeChild($_)}},onDestruction:function($_){(this._destructors||(this._destructors=[])).push($_)},autobind:function($_,$a,$b){$_.on($a,$b)
this._autobinds||(this._autobinds=[])
this._autobinds.push([$_,$a,$b])},autounbind:function($_,$a,$b){var $c=this._autobinds,$d,$e
if($_&&$a&&$b){for($d=$c.length-1;$d>=0;$d--){$e=$c[$d]
if($e[0]==$_&&$e[1]==$a&&$e[2]==$b){$c.splice($d,1)
$e[0].un($e[1],$e[2])
return}}
return}
if(!$_&&!$a&&!$b){if(!$c)return
for($d=$c.length-1;$d>=0;$d--){$e=$c[$d]
$e[0].un($e[1],$e[2])}
return}},getXY:function(){var $_,$a,$b=this.offsetParent
$_=this.offsetLeft
$a=this.offsetTop
while($b){$_+=$b.offsetLeft
$a+=$b.offsetTop
$b=$b.offsetParent}
return [$_,$a]},getFixedXY:function(){var $_=0,$a=0,$b=this
if("getBoundingClientRect" in this){var $c=this.ownerDocument,$d=$c.body,$e=$c.defaultView||$b.parentWindow||!1,$f=$b.getBoundingClientRect(),$g=$c.clientTop||$d.clientTop||0,$h=$c.clientLeft||$d.clientLeft||0,$i=$e.pageYOffset||$d.scrollTop,$j=$e.pageXOffset||$d.scrollLeft
$a=$f.top+$i-$g
$_=$f.left+$j-$h}
else{$a=$b.offsetTop
$_=$b.offsetLeft
while(($b=$b.offsetParent)){$a-=$b.scrollTop,$_-=$b.scrollLeft
$a+=$b.offsetTop,$_+=$b.offsetLeft}}
return [$_,$a]},toggle:function(){this.isVisible()?this.hide():this.show()
return this},setOpacity:function($_){$_=Math.max(Math.min($_,1),0)
if(q.isIE)this.style.filter=(this.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+($_>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+$_*100+'), ')
else this.style.opacity=$_
return this},setBackgroundImage:function($_){var $a=$_
if($a&&q.isIE)this.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+$a+'",sizingMethod="scale"), '
else this.style.backgroundImage='url("'+$_+'")'
return this},setClass:function($_){this.className=$_
return this},addClass:function($_){this.removeClass($_)
this.className+=' '+$_
return this},removeClass:function($_){var $a=this.className.split(' ')
for(var $b=0;$b<$a.length;$b++){if($a[$b]==$_){$a[$b]=""}}
this.className=$a.join(' ')
return this},setRotation:function($_){if(q.isFF)this.style.MozTransform=$_?'rotate('+$_+'deg)':''
else if(q.isSafari)this.style.WebkitTransform=$_?'rotate('+$_+'deg)':''
else if(q.isIE){this.style.filter=$_?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round($_/90)+')':''
if(q.isIE8&&$_){var $a=this.getElementsByTagName('iframe')
if(q.isIE8&&$a.length){$a[0].style.filter=$_?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round($_/90)+')':''
this.style.overflow='visible'}}}
return this},setSelectable:function($_){function $a(){return !1}
if($_&&$_!='false'){this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.un('selectstart',$a)}
else{this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.on('selectstart',$a)}
return this},setScrollTop:function($_){this.scrollTop=$_
return this}}
if(q.leaksMemory)V.plugLeakage=function(){this.unextendEvents&&this.unextendEvents()
this.$=this.plugLeakage=this.destroy=this.empty=this.autobind=this.autounbind=this._autobinds=this._destructors=this.onDestruction=this.getXY=this.appendToParent=this.defaultPlacement=this.getStyles=this.getStyle=this.setAttributes=this.getText=this.setText=this.setStyle=this.setFloat=this.setPosition=this.setTop=this.setBottom=this.setLeft=this.setRight=this.setHeight=this.setWidth=this.applyConstraints=this.setVisible=this.setBounds=this.setSnaps=this.move=this.moveTo=this.resizeBy=this.hide=this.show=this.isVisible=this.toggle=this.setOpacity=this.setBackgroundImage=this.setClass=this.addClass=this.removeClass=this.setRotation=this.setSthisectable=this.setScrollTop=this.setBackground=this.setBackgroundPosition=this.setBorder=this.setBorderColor=this.setBorderStyle=this.setBorderWidth=this.setBorderTop=this.setBorderRight=this.setBorderBottom=this.setBorderLeft=this.setClear=this.setColor=this.setPadding=this.setMargin=this.setMarginTop=this.setMarginRight=this.setMarginBottom=this.setMarginLeft=this.setDisplay=this.setLineHeight=this.setLetterSpacing=this.setVisibility=this.setOutline=this.setOverflow=this.setOverflowX=this.setOverflowY=this.setFontFamily=this.setFontSize=this.setFontWeight=this.setFontStyle=this.setTextAlign=this.setTextDecoration=this.setTextTransform=this.setVerticalAlign=this.setZIndex=this.setCursor=this.setHref=this.setSrc=this.setChecked=this.setMedia=this.setName=this.setType=this.setValue=this.setDataNode=this.__jx__constructor=this.__jx__native=null}
var W,X
W='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor'.split(' ')
for(X=0;X<W.length;X++)V[$$('set-'+W[X])]=Y($$(W[X]))
W='checked href media name src target type value'.split(' ')
for(X=0;X<W.length;X++)V[$$('set-'+W[X])]=Z(W[X])
function Y($_){return (function($a){try {this.style[$_]=$a}catch($b){;}
return this})}
function Z($_){return (function($a){this.setAttribute($_,$a)
return this})}
function $$($_){$_=$_.split(/[^a-zA-Z0-9]/)
for(var $a=1;$a<$_.length;$a++)if($_[$a].length)$_[$a]=$_[$a].substr(0,1).toUpperCase()+$_[$a].substr(1)
return $_.join('')}
if(q.isIE)document.execCommand("BackgroundImageCache",!1,!0)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_Element"].join('')
x.prototype.__jx__fqname="jx_core_Element"}
return x})()
b.__$$__div=(function(){var x=w.nativeGenerator("div")
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","div"].join('')
x.prototype.__jx__fqname="div"}
return x})()
b.__$$__meshim_common_Color=(function(){var x=['red','green','blue']
function y(G){if(!(this instanceof y))return new y(G)
var H=''
if(typeof G=='object')H='object'
else if(/#/.test(G))H='hex'
else if(/hsl\(.+\)/.test(G))H='hsl'
else if(/hsv\(.+\)/.test(G))H='hsv'
else if(/rgba\(.+\)/.test(G))H='rgba'
switch(H){case 'object':A.call(this,G)
break
case 'hex':z.call(this,G)
break
case 'hsl':B.call(this,G)
break
case 'hsv':E.call(this,G)
break
case 'rgba':D.call(this,G)
break}
if(typeof this.alpha!=='number')this.alpha=1}
y.prototype.lighten=function(G){var H=this.toHSL()
H.l=H.l+(1-H.l)*G
return new y(H)}
y.prototype.darken=function(G){var H=this.toHSL()
H.l=H.l-H.l*G
return new y(H)}
y.prototype.blend=function(G,H){if(!(G instanceof y))G=new y(G)
var I={}
for(var J=0;J<3;J++){var K=this[x[J]],L=G[x[J]]
I[x[J]]=Math.round(K+(L-K)*H)}
return new y(I)}
y.prototype.complement=function(){var G=this.red,H=this.blue,I=this.green,J=Math.max(G,H,I),K=Math.min(G,H,I),L={}
L.red=J+K-G
L.green=J+K-I
L.blue=J+K-H
return new y(L)}
y.prototype.toStrRGB=y.prototype.toRGB=function(){var G=[]
for(var H=0;H<3;H++){var I=this[x[H]].toString(16)
G[H]=(I.length<2)?'0'+I:I}
return '#'+G.join('')}
y.prototype.toStrRGBA=function(){return 'rgba('+[this.red,this.green,this.blue,this.alpha].join(',')+')'}
y.prototype.toHSL=function(){var G=this.red/255,H=this.green/255,I=this.blue/255,J=Math.max(G,H,I),K=Math.min(G,H,I),L=J-K,M,N,O,P
if(L===0)P=0
else if(J==G)P=((H-I)/L)%6
else if(J==H)P=(I-G)/L+2
else if(J==I)P=(G-H)/L+4
M=60*P
M=(M<0)?360+M%360:M%360
O=0.5*(J+K)
N=(L===0)?0:L/(1-Math.abs(2*O-1))
return {h:M,s:N,l:O}}
y.prototype.toHSV=function(){var G=this.red/255,H=this.green/255,I=this.blue/255,J=Math.max(G,H,I),K=Math.min(G,H,I),L=J-K,M,N,O,P
if(L===0)P=0
else if(J==G)P=((H-I)/L)%6
else if(J==H)P=(I-G)/L+2
else if(J==I)P=(G-H)/L+4
M=60*P
M=(M<0)?360+M%360:M%360
O=J
N=(L===0)?0:L/O
return {h:M,s:N,v:O}}
y.prototype.toArray=function(){return [this.red,this.green,this.blue]}
y.prototype.clone=function(){return new y(this)}
y.prototype.validate=function(){for(var G=0;G<3;G++){var H=this[x[G]]
if(!(typeof H=='number'&&H>=0&&H<=255))return !1}
if(!(typeof this.alpha=='number'&&this.alpha>=0&&this.alpha<=1))return !1
return !0}
function z(G){G=G.replace(/#/g,'').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
if(/^\w{3}/.test(G))G=G.replace(/^(\w)(\w)(\w)$/,'$1$1$2$2$3$3')
this.red=parseInt(G.substr(0,2),16)
this.green=parseInt(G.substr(2,2),16)
this.blue=parseInt(G.substr(4,2),16)}
function A(G){if('red' in G&&'green' in G&&'blue' in G){this.red=G.red
this.green=G.green
this.blue=G.blue
this.alpha=G.alpha}
else if('h' in G&&'s' in G&&'l' in G){C.call(this,G)}
else if('h' in G&&'s' in G&&'v' in G){F.call(this,G)}}
function B(G){G=G.replace(/[A-Za-z]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' '),I={h:(parseFloat(H[0])<0)?(360+parseFloat(H[0])%360):parseFloat(H[0])%360,s:(H[1].indexOf('%')<0)?parseFloat(H[1]):parseInt(H[1],10)/100,l:(H[2].indexOf('%')<0)?parseFloat(H[2]):parseInt(H[2],10)/100}
C.call(this,I)}
function C(G){var H,I=G.h,J=G.s,K=G.l,L=(1-Math.abs(2*K-1))*J,M=I/60,N=L*(1-Math.abs(M%2-1)),O=K-0.5*L
switch(Math.floor(M)){case 0:H=[L,N,0]
break
case 1:H=[N,L,0]
break
case 2:H=[0,L,N]
break
case 3:H=[0,N,L]
break
case 4:H=[N,0,L]
break
case 5:H=[L,0,N]
break}
this.red=Math.round(255*(H[0]+O))
this.green=Math.round(255*(H[1]+O))
this.blue=Math.round(255*(H[2]+O))}
function D(G){G=G.replace(/[A-Za-z(,]+/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' ')
this.red=parseInt(H[0],10)
this.green=parseInt(H[1],10)
this.blue=parseInt(H[2],10)
this.alpha=parseFloat(H[3])}
function E(G){G=G.replace(/[A-Za-z%]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var H=G.split(' '),I={h:(parseFloat(H[0])<0)?(360+parseFloat(H[0]))%360:parseFloat(H[0])%360,s:(H[1].indexOf('%')<0)?parseFloat(H[1]):parseInt(H[1],10)/100,v:(H[2].indexOf('%')<0)?parseFloat(H[2]):parseInt(H[2],10)/100}
F.call(this,I)}
function F(G){var H,I=G.h,J=G.s,K=G.v,L=K*J,M=I/60,N=L*(1-Math.abs(M%2-1)),O=K-L
switch(Math.floor(M)){case 0:H=[L,N,0]
break
case 1:H=[N,L,0]
break
case 2:H=[0,L,N]
break
case 3:H=[0,N,L]
break
case 4:H=[N,0,L]
break
case 5:H=[L,0,N]
break}
this.red=Math.round(255*(H[0]+O))
this.green=Math.round(255*(H[1]+O))
this.blue=Math.round(255*(H[2]+O))}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_Color"].join('')
y.prototype.__jx__fqname="meshim_common_Color"}
return y})()
b.__$$__jx_io_socket_ChunkedXHR=(function(){var x=q.isIE?window.XDomainRequest:!q.isOpera&&!q.isAndroid&&window.XMLHttpRequest,y=x?A:null,z=q.isIE?'//':'https://'
A.protocol='cxhr'
function A(C){var D=this.xhr=new x(),E=this,F='',G=0,H
this.url=z+C
D.open('GET',this.url+['c',+new Date()].join('/'),!0)
D.onerror=function(J){E.abort(J)}
if(q.isIE){D.onprogress=function(){I(+new Date())}
D.onload=function(){E.abort('close')}}
else{D.onreadystatechange=function(){switch(D.readyState){case 3:I(+new Date())
break
case 4:E.abort('close')
break}}}
B('CXHR connecting to: '+this.url)
D.send()
function I(J){B('extracting data')
!H&&E.onopen&&E.onopen()
H=J
F+=D.responseText.substr(G)
G=D.responseText.length
F=F.split('\n\n')
for(var K=0;K<F.length-1;K++)E.onmessage&&E.onmessage(F[K],H)
F=F[F.length-1]
if(G>1*1024*1024&&!F.length||G>4*1024*1024)E.abort()}}
A.prototype.send=function(C){var D=this.url+['d',+new Date()].join('/'),E=new x(),F=this,G
E.open('POST',D,!0)
E.send(C)
if(q.isIE){E.onerror=H
E.onload=I}
else{E.onreadystatechange=function(){if(E.readyState!=4)return
if(E.status!=200)H()
I()}}
G=setTimeout(H,5000)
function H(){F.abort('send failed')}
function I(){F.xhr_sender=null
clearTimeout(G)
F.ondrain&&F.ondrain()}
this.xhr_sender=E
return !1}
A.prototype.abort=function(C){if(this._abort)return
this._abort=!0
B(C)
this.xhr&&this.xhr.abort()
this.xhr_sender&&this.xhr_sender.abort()
this.onclose&&this.onclose(C)
this.onerror=this.onload=this.onprogress=this.onreadystatechange=this.xhr=this.xhr_sender=null}
var B=function(){}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_io_socket_ChunkedXHR"].join('')
y.prototype.__jx__fqname="jx_io_socket_ChunkedXHR"}
return y})()
b.__$$__meshim_common_Sanitize=(function(){var x={html:function(y){return y&&y.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Sanitize"].join('')
x.prototype.__jx__fqname="meshim_common_Sanitize"}
return x})()
b.__$$__jx_io_socket_StreamingPostMessage=(function(){var x=window.postMessage?!q.isAndroid&&y:null
y.protocol='spm'
function y(B){var C=this,D,E,F=this.iframe=z('iframe')
this.url='https://'+B
F.src=this.src=D=this.url+['c',+new Date()].join('/')
E=D.match(/https?:\/\/[^\/]+/)[0]
F.onload=function(I){C.abort(I)}
document.body.insertBefore(F,document.body.firstChild)
A('SPM connecting to: '+this.url)
window.addEventListener('message',H,!1)
this.remove_listeners=function(){window.removeEventListener('message',H,!1)}
var G
function H(I){!G&&C.onopen&&C.onopen()
G=+new Date()
if(I.origin!=E)return
if(I.data=='event-stream')F.onload=null
else C.onmessage&&C.onmessage(I.data,G)}}
y.prototype.send=function(B){this.iframe.contentWindow.postMessage(B,this.src)
return !0}
y.prototype.abort=function(B){if(this._abort)return
this._abort=!0
A(B)
this.iframe&&document.body.removeChild(this.iframe)
this.onclose&&this.onclose(B)
this.remove_listeners()
this.iframe=this.remove_listeners=null}
function z(B){var C=document.createElement(B),D=C.style
D.position='absolute'
D.width=D.height=0
D.overflow='hidden'
return C}
var A=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingPostMessage"].join('')
x.prototype.__jx__fqname="jx_io_socket_StreamingPostMessage"}
return x})()
b.__$$__jx_io_socket_StreamingHTMLFile=(function(){var x=q.isIE&&y
y.protocol='shtmlf'
function y(A){var B=this,C=new s(!0),D,E
D=new window.ActiveXObject('htmlfile')
D.open()
D.close()
E=D.createElement('iframe')
D.body.appendChild(E)
C.on('success',function(){B.ondrain&&B.ondrain()})
C.on('error',function(){B.abort()})
this.sender=C
this.htmlfile=D
this.remote_frame=E
this.url='https://'+A
r.window.on('unload',this.unload=function(){B.abort()})
this.connect()}
y.prototype.connect=function(){var A=this.remote_frame,B,C,D=this,E,F=200
this.timer=setTimeout(G,250)
function G(){try {B=A.contentWindow.frames[0]}catch(J){return D.abort()}
if(!B){D.timer=setTimeout(G,Math.min(800,F*=1.3))
return}
try {B.name
D.timer=setTimeout(G,Math.min(800,F*=1.3))
return}catch(J){;}
B.location.href='about:blank'
if(q.isIE<7)D.timer=setTimeout(I,20)
else B.onload=I}
var H=0
function I(){try {C=B.name}catch(L){if(!(H++%10))B.location.href='about:blank'
D.timer=setTimeout(I,20)
return}
H=0
if(C){C=C.split('\n\n')
!E&&D.onopen&&D.onopen()
E=+new Date()
for(var J=0;J<C.length-1;J++){var K=C[J]
if(K=='abort')return D.abort()
else D.onmessage&&D.onmessage(K,E)}
try {B.name=''
B.onload=null}catch(L){D.abort()}}
D.timer=setTimeout(G,F=200)}
z('SHF connecting to: '+this.url)
A.src=this.url+['c',+new Date()].join('/')}
y.prototype.send=function(A){var B=this.url+['d',+new Date(),window.encodeURIComponent(A)].join('/')
this.sender.load(B)
return !1}
y.prototype.abort=function(A){if(this._abort)return
this._abort=!0
z(A)
this.remote_frame.onload=this.remote_frame.onerror=null
this.htmlfile.open()
this.htmlfile.close()
this.sender.destroy()
r.window.un('unload',this.unload)
this.sender=this.htmlfile=this.remote_frame=this.unload=null
clearTimeout(this.timer)
this.onclose&&this.onclose(A)
window.CollectGarbage()}
var z=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingHTMLFile"].join('')
x.prototype.__jx__fqname="jx_io_socket_StreamingHTMLFile"}
return x})()
b.__$$__meshim_widget_themes_Overrides=(function(){var x={popout:{name$string:'simple'},mobile:{name$string:'simple',chat_button:{display_status$bool:!1}}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Overrides"].join('')
x.prototype.__jx__fqname="meshim_widget_themes_Overrides"}
return x})()
b.__$$__jx_io_socket_WebSocket=(function(){var x=window.WebSocket||window.MozWebSocket,y=x?z:null
function z(A){var B=new x('wss://'+A+['c',+new Date()].join('/')),C=this
B.onclose=function(D){C.onclose&&C.onclose(D)}
B.onerror=function(D){C.onerror&&C.onerror(D)}
B.onmessage=function(D){C.onmessage&&C.onmessage(D.data,+new Date())}
B.onopen=function(D){C.onopen&&C.onopen(D)}
this.ws=B}
z.prototype.abort=function(){if(this._aborted)return
this._aborted=!0
var A=this.ws
if(A.readyState==x.CONNECTING)A.onopen=function(){A.close()}
else A.close()}
z.prototype.send=function(A){this.ws.send(A)
return !0}
z.protocol='ws'
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_io_socket_WebSocket"].join('')
y.prototype.__jx__fqname="jx_io_socket_WebSocket"}
return y})()
b.__$$__meshim_common_AsyncUtils=(function(){var x={debounce:y,throttle:z,queue:A}
function y(B,C){var D,E,F
return function(){if(F)window.clearTimeout(F)
D=Array.prototype.slice.call(arguments)
E=this
F=window.setTimeout(G,C)}
function G(){B.apply(E,D)}}
function z(B,C){var D,E,F,G=0
return function(){D=Array.prototype.slice.call(arguments)
E=this
if(!F){var I=+new Date()-G
if(I>=C){H()}
else{F=window.setTimeout(H,C-I)}}}
function H(){G=+new Date()
F=null
B.apply(E,D)}}
function A(B,C){var D=[],E=[],F,G=0
return function(){D.push(Array.prototype.slice.call(arguments))
E.push(this)
if(!F){var I=+new Date()-G
if(I>=C){H()}
else{F=window.setTimeout(H,C-I)}}}
function H(){G=+new Date()
if(D.length>1){F=window.setTimeout(H,C)}
else{F=null}
B.apply(E.shift(),D.shift())}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_AsyncUtils"].join('')
x.prototype.__jx__fqname="meshim_common_AsyncUtils"}
return x})()
b.__$$__jx_io_Form=(function(){var x=(q.isIE6||q.isIE7||q.isIE8)?B:A
x.get=z
x.post=y
function y(C,D,E){if(h(D))E=D,D=null
D||(D={})
x('POST',C,D,E)}
function z(C,D,E){if(h(D))E=D,D=null
D||(D={})
x('GET',C,D,E)}
function A(C,D,E,F){var G='form'+~~(100000*Math.random()),H,I,J,K=E.timeout||10000,L=document.createElement('form'),M=document.createElement('iframe')
L.method=C
L.action=D
M.style.display='none'
if(E.params){for(I in E.params)if(E.params.hasOwnProperty(I)){J=document.createElement('input')
J.name=I
J.value=E.params[I]
L.appendChild(J)}}
document.body.appendChild(L)
document.body.appendChild(M)
L.target=M.contentWindow.name=G
l(function(){L.submit()
document.body.removeChild(L)
J=L=null
M.onload=function(){M.onload=null
M.contentWindow.location.href='about:blank'
M.onload=function(){M.onload=null
clearTimeout(H)
F&&F(null,M.contentWindow.name)
document.body.removeChild(M)
M=null}}})
H=setTimeout(function(){F&&F('timeout')
document.body.removeChild(M)
M=null},K)}
function B(C,D,E,F){var G=document
if(window.ActiveXObject)try {G=new window.ActiveXObject('htmlfile')
G.open(),G.close()}catch(Q){;}
var H='form'+~~(100000*Math.random()),I,J,K,L,M=E.timeout||10000,N=G.createElement('<form target="'+H+'"/>'),O=G.createElement('<iframe name="'+H+'"/>')
N.method=C
N.action=D
O.style.display='none'
if(E.params){for(K in E.params)if(E.params.hasOwnProperty(K)){L=G.createElement('<input name="'+K+'"/>')
L.value=E.params[K]
N.appendChild(L)}}
G.body.appendChild(N)
G.body.appendChild(O)
N.submit()
G.body.removeChild(N)
L=N=null
J=setTimeout(P,100)
function P(){if(!O.contentWindow.frames.length){J=setTimeout(P,100)
return}
O.contentWindow.location.href='about:blank'
clearTimeout(I)
setTimeout(function(){F&&F(null,O.contentWindow.name)
G.body.removeChild(O)
G=O=null},0)}
I=setTimeout(function(){F&&F('timeout')
clearTimeout(J)
G.body.removeChild(O)
G=O=null},M)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_Form"].join('')
x.prototype.__jx__fqname="jx_io_Form"}
return x})()
b.__$$__meshim_common_FileUtil=(function(){var x={}
x.ERR_SIZE='TOO_LARGE'
x.ERR_FORMAT='ILLEGAL_TYPE'
x.ERR_DISABLED='FILE_UPLOADS_TEMPORARILY_DISABLED'
var y=/^(x-|vnd\.)/i,z=/^(application\/(vnd.|x-)?pdf|image\/(p?jpeg|gif|png)|text\/plain)$/i,A=/\.(pdf|jpe?g|gif|png|txt)$/i,B={},C=v(88)
B[x.ERR_SIZE]=v(85)
B[x.ERR_FORMAT]=v(86)
B[x.ERR_DISABLED]=v(87)
x.prettySize=(function(){var D=1000,E=1024,F='B',G='iB',H=['','K','M','G','T','P'],I=[0,1,2,2,2,2]
return function J(K,L){K=Math.max(parseInt(K,10)||0,0)
L=L||{}
var M,N=L.base2?E:D
for(var O=0,P=H.length;O<P;O++){M=Math.pow(N,O)
if(K<(M*N)||H[O+1]===a){return (K/M).toFixed(I[O])+' '+H[O]+(L.suffixBase2?G:F)}}}})()
x.prettyType=function D(E,F,G){G=G||window.Infinity
var H=E.split('/')[1]
H=H&&H.replace(y,'')
if(H&&H.length<G){return H.toLowerCase()}
H=F.split('.').pop()
return (H||'').toLowerCase()}
x.isValidType=function(D,E){return (D&&z.test(D))||(E&&A.test(E))}
x.prettyError=function(D,E){var F=D in B?B[D]:C
if(!k(E))F.replace('<size>',x.prettySize(E||5000000))
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_FileUtil"].join('')
x.prototype.__jx__fqname="meshim_common_FileUtil"}
return x})()
b.__$$__meshim_common_System=(function(){var x={info:{gitCommit:c.git_commit,buildNumber:c.build_number,userAgent:window.navigator.userAgent,platform:window.navigator.platform,language:q.language,browser:q.browser,version:q.version,javaVersion:q.hasJava,flashVersion:q.hasFlash,url:window.location.toString()}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_System"].join('')
x.prototype.__jx__fqname="meshim_common_System"}
return x})()
b.__$$__meshim_common_Chroma=(function(){var x={},y={};(function(){var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$$,$_,$a,$b,$c,$d,$e,$f,$g,$h,$i,$j,$k,$l,$m,$n,$o,$p
$f=typeof x!=="undefined"&&x!==null?x:this
J=($k=$f.chroma)!=null?$k:$f.chroma={}
if(typeof y!=="undefined"&&y!==null){y.exports=J}
A=(function(){function $q($r,$s,$t,$u){var $v,$w,$x
$v=this
if(($r==null)&&($s==null)&&($t==null)&&($u==null)){$r=[255,0,255]}
if($g($r)==="array"&&$r.length===3){if($u==null){$u=$s}
$x=$r,$r=$x[0],$s=$x[1],$t=$x[2]}
if($g($r)==="string"){$u='hex'}
else{if($u==null){$u='rgb'}}
if($u==='rgb'){$v._rgb=[$r,$s,$t]}
else if($u==='hsl'){$v._rgb=Q($r,$s,$t)}
else if($u==='hsv'){$v._rgb=R($r,$s,$t)}
else if($u==='hex'){$v._rgb=O($r)}
else if($u==='lab'){$v._rgb=T($r,$s,$t)}
else if($u==='lch'){$v._rgb=W($r,$s,$t)}
else if($u==='hsi'){$v._rgb=P($r,$s,$t)}
$w=K($v._rgb)}
$q.prototype.rgb=function(){return this._rgb}
$q.prototype.hex=function(){return $$(this._rgb)}
$q.prototype.toString=function(){return this.hex()}
$q.prototype.hsl=function(){return $a(this._rgb)}
$q.prototype.hsv=function(){return $b(this._rgb)}
$q.prototype.lab=function(){return $c(this._rgb)}
$q.prototype.lch=function(){return $d(this._rgb)}
$q.prototype.hsi=function(){return $_(this._rgb)}
$q.prototype.luminance=function(){return Y(this._rgb)}
$q.prototype.name=function(){var $r,$s
$r=this.hex()
for($s in J.colors)if(J.colors.hasOwnProperty($s)){if($r===J.colors[$s]){return $s}}
return $r}
$q.prototype.interpolate=function($r,$s,$t){var $u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G
$B=this
if($t==null){$t='rgb'}
if($g($s)==="string"){$s=new $q($s)}
if($t==='hsl'||$t==='hsv'||$t==='lch'||$t==='hsi'){if($t==='hsl'){$F=$B.hsl()
$G=$s.hsl()}
else if($t==='hsv'){$F=$B.hsv()
$G=$s.hsv()}
else if($t==='hsi'){$F=$B.hsi()
$G=$s.hsi()}
else if($t==='lch'){$F=$B.lch()
$G=$s.lch()}
if($t.substr(0,1)==='h'){$w=$F[0],$D=$F[1],$z=$F[2]
$x=$G[0],$E=$G[1],$A=$G[2]}
else{$z=$F[0],$D=$F[1],$w=$F[2]
$A=$G[0],$E=$G[1],$x=$G[2]}
if(!isNaN($w)&&!isNaN($x)){if($x>$w&&$x-$w>180){$u=$x-($w+360)}
else if($x<$w&&$w-$x>180){$u=$x+360-$w}
else{$u=$x-$w}
$v=$w+$r*$u}
else if(!isNaN($w)){$v=$w
if($A===1||$A===0){$C=$D}}
else if(!isNaN($x)){$v=$x
if($z===1||$z===0){$C=$E}}
else{$v=void(0)}
if($C==null){$C=$D+$r*($E-$D)}
$y=$z+$r*($A-$z)
if($t.substr(0,1)==='h'){return new $q($v,$C,$y,$t)}
else{return new $q($y,$C,$v,$t)}}
else if($t==='rgb'){$F=$B._rgb
$G=$s._rgb
return new $q($F[0]+$r*($G[0]-$F[0]),$F[1]+$r*($G[1]-$F[1]),$F[2]+$r*($G[2]-$F[2]),$t)}
else if($t==='lab'){$F=$B.lab()
$G=$s.lab()
return new $q($F[0]+$r*($G[0]-$F[0]),$F[1]+$r*($G[1]-$F[1]),$F[2]+$r*($G[2]-$F[2]),$t)}
else{throw "color mode "+$t+" is not supported"}}
$q.prototype.darken=function($r){var $s,$t
if($r==null){$r=20}
$t=this
$s=$t.lch()
$s[0]-=$r
return J.lch($s)}
$q.prototype.darker=function($r){return this.darken($r)}
$q.prototype.brighten=function($r){if($r==null){$r=20}
return this.darken(-$r)}
$q.prototype.brighter=function($r){return this.brighten($r)}
$q.prototype.saturate=function($r){var $s,$t
if($r==null){$r=20}
$t=this
$s=$t.lch()
$s[1]+=$r
return J.lch($s)}
$q.prototype.desaturate=function($r){if($r==null){$r=20}
return this.saturate(-$r)}
return $q})()
O=function($q){var $r,$s,$t,$u,$v
if($q.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){if($q.length===4||$q.length===7){$q=$q.substr(1)}
if($q.length===3){$q=$q.split("")
$q=$q[0]+$q[0]+$q[1]+$q[1]+$q[2]+$q[2]}
$v=parseInt($q,16)
$t=$v>>16
$s=$v>>8&255
$r=$v&255
return [$t,$s,$r]}
if($u=N($q)){return $u}
throw "unknown color: "+$q}
N=function($q){var $r,$s,$t,$u
if((J.colors!=null)&&J.colors[$q]){return O(J.colors[$q])}
if($t=$q.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){return $t.slice(1,4)}
if($t=$q.match(/rgb\(\s*(\-?\d+)%,\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$u=$t.slice(1,4)
for($s in $u)if($u.hasOwnProperty($s)){$u[$s]=Math.round($u[$s]*2.55)}
return $u}
if($t=$q.match(/hsl\(\s*(\-?\d+),\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$r=$t.slice(1,4)
$r[1]*=0.01
$r[2]*=0.01
return Q($r)}}
$$=function(){var $q,$r,$s,$t,$u,$v
$v=$h(arguments),$s=$v[0],$r=$v[1],$q=$v[2]
$u=$s<<16|$r<<8|$q
$t="000000"+$u.toString(16)
return "#"+$t.substr($t.length-6)}
R=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G,$H
$B=$h(arguments),$t=$B[0],$y=$B[1],$A=$B[2]
$A*=255
if($y===0){$x=$s=$q=$A}
else{if($t===360){$t=0}
if($t>360){$t-=360}
if($t<0){$t+=360}
$t/=60
$u=Math.floor($t)
$r=$t-$u
$v=$A*(1-$y)
$w=$A*(1-$y*$r)
$z=$A*(1-$y*(1-$r))
switch($u){case 0:$C=[$A,$z,$v],$x=$C[0],$s=$C[1],$q=$C[2]
break
case 1:$D=[$w,$A,$v],$x=$D[0],$s=$D[1],$q=$D[2]
break
case 2:$E=[$v,$A,$z],$x=$E[0],$s=$E[1],$q=$E[2]
break
case 3:$F=[$v,$w,$A],$x=$F[0],$s=$F[1],$q=$F[2]
break
case 4:$G=[$z,$v,$A],$x=$G[0],$s=$G[1],$q=$G[2]
break
case 5:$H=[$A,$v,$w],$x=$H[0],$s=$H[1],$q=$H[2]}}
$x=Math.round($x)
$s=Math.round($s)
$q=Math.round($q)
return [$x,$s,$q]}
$b=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z
$z=$h(arguments),$w=$z[0],$s=$z[1],$q=$z[2]
$v=Math.min($w,$s,$q)
$u=Math.max($w,$s,$q)
$r=$u-$v
$y=$u/255.0
if($u===0){$t=void(0)
$x=0}
else{$x=$r/$u
if($w===$u){$t=($s-$q)/$r}
if($s===$u){$t=2+($q-$w)/$r}
if($q===$u){$t=4+($w-$s)/$r}
$t*=60
if($t<0){$t+=360}}
return [$t,$x,$y]}
Q=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D
$C=$h(arguments),$t=$C[0],$x=$C[1],$v=$C[2]
if($x===0){$w=$s=$q=$v*255}
else{$A=[0,0,0]
$r=[0,0,0]
$z=$v<0.5?$v*(1+$x):$v+$x-$v*$x
$y=2*$v-$z
$t/=360
$A[0]=$t+1/3
$A[1]=$t
$A[2]=$t-1/3
for($u=$B=0;$B<=2;$u=++$B){if($A[$u]<0){$A[$u]+=1}
if($A[$u]>1){$A[$u]-=1}
if(6*$A[$u]<1){$r[$u]=$y+($z-$y)*6*$A[$u]}
else if(2*$A[$u]<1){$r[$u]=$z}
else if(3*$A[$u]<2){$r[$u]=$y+($z-$y)*((2/3)-$A[$u])*6}
else{$r[$u]=$y}}
$D=[Math.round($r[0]*255),Math.round($r[1]*255),Math.round($r[2]*255)],$w=$D[0],$s=$D[1],$q=$D[2]}
return [$w,$s,$q]}
$a=function($q,$r,$s){var $t,$u,$v,$w,$x,$y
if($q!==void(0)&&$q.length===3){$y=$q,$q=$y[0],$r=$y[1],$s=$y[2]}
$q/=255
$r/=255
$s/=255
$w=Math.min($q,$r,$s)
$v=Math.max($q,$r,$s)
$u=($v+$w)/2
if($v===$w){$x=0
$t=void(0)}
else{$x=$u<0.5?($v-$w)/($v+$w):($v-$w)/(2-$v-$w)}
if($q===$v){$t=($r-$s)/($v-$w)}
else if($r===$v){$t=2+($s-$q)/($v-$w)}
else if($s===$v){$t=4+($q-$r)/($v-$w)}
$t*=60
if($t<0){$t+=360}
return [$t,$x,$u]}
C=18
F=0.95047
G=1
H=1.08883
T=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
if($q!==void(0)&&$q.length===3){$y=$q,$q=$y[0],$r=$y[1],$s=$y[2]}
if($q!==void(0)&&$q.length===3){$z=$q,$q=$z[0],$r=$z[1],$s=$z[2]}
$w=($q+16)/116
$v=$w+$r/500
$x=$w-$s/200
$v=U($v)*F
$w=U($w)*G
$x=U($x)*H
$u=$j(3.2404542*$v-1.5371385*$w-0.4985314*$x)
$t=$j(-0.969266*$v+1.8760108*$w+0.041556*$x)
$s=$j(0.0556434*$v-0.2040259*$w+1.0572252*$x)
return [X($u,0,255),X($t,0,255),X($s,0,255)]}
$c=function(){var $q,$r,$s,$t,$u,$v,$w
$w=$h(arguments),$s=$w[0],$r=$w[1],$q=$w[2]
$s=$e($s)
$r=$e($r)
$q=$e($q)
$t=$i((0.4124564*$s+0.3575761*$r+0.1804375*$q)/F)
$u=$i((0.2126729*$s+0.7151522*$r+0.072175*$q)/G)
$v=$i((0.0193339*$s+0.119192*$r+0.9503041*$q)/H)
return [116*$u-16,500*($t-$u),200*($u-$v)]}
V=function(){var $q,$r,$s,$t
$t=$h(arguments),$s=$t[0],$q=$t[1],$r=$t[2]
$r=$r*Math.PI/180
return [$s,Math.cos($r)*$q,Math.sin($r)*$q]}
W=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
$y=V($q,$r,$s),$t=$y[0],$u=$y[1],$v=$y[2]
$z=T($t,$u,$v),$x=$z[0],$w=$z[1],$v=$z[2]
return [X($x,0,255),X($w,0,255),X($v,0,255)]}
U=function($q){if($q>0.206893034){return $q*$q*$q}
else{return ($q-4/29)/7.787037}}
$i=function($q){if($q>0.008856){return Math.pow($q,1/3)}
else{return 7.787037*$q+4/29}}
$j=function($q){return Math.round(255*($q<=0.00304?12.92*$q:1.055*Math.pow($q,1/2.4)-0.055))}
$e=function($q){if(($q/=255)<=0.04045){return $q/12.92}
else{return Math.pow(($q+0.055)/1.055,2.4)}}
S=function(){var $q,$r,$s,$t,$u,$v
$v=$h(arguments),$u=$v[0],$q=$v[1],$r=$v[2]
$s=Math.sqrt($q*$q+$r*$r)
$t=Math.atan2($r,$q)/Math.PI*180
return [$u,$s,$t]}
$d=function(){var $q,$r,$s,$t,$u,$v,$w
$v=$h(arguments),$u=$v[0],$s=$v[1],$r=$v[2]
$w=$c($u,$s,$r),$t=$w[0],$q=$w[1],$r=$w[2]
return S($t,$q,$r)}
$_=function(){var $q,$r,$s,$t,$u,$v,$w,$x,$y
$y=$h(arguments),$w=$y[0],$s=$y[1],$r=$y[2]
$q=Math.PI*2
$w/=255
$s/=255
$r/=255
$v=Math.min($w,$s,$r)
$u=($w+$s+$r)/3
$x=1-$v/$u
if($x===0){$t=0}
else{$t=(($w-$s)+($w-$r))/2
$t/=Math.sqrt(($w-$s)*($w-$s)+($w-$r)*($s-$r))
$t=Math.acos($t)
if($r>$s){$t=$q-$t}
$t/=$q}
return [$t*360,$x,$u]}
P=function($q,$r,$s){var $t,$u,$v,$w
$w=$h(arguments),$q=$w[0],$r=$w[1],$s=$w[2]
$q/=360
if($q<1/3){$t=(1-$r)/3
$v=(1+$r*M(E*$q)/M(D-E*$q))/3
$u=1-($t+$v)}
else if($q<2/3){$q-=1/3
$v=(1-$r)/3
$u=(1+$r*M(E*$q)/M(D-E*$q))/3
$t=1-($v+$u)}
else{$q-=2/3
$u=(1-$r)/3
$t=(1+$r*M(E*$q)/M(D-E*$q))/3
$v=1-($u+$t)}
$v=X($s*$v*3)
$u=X($s*$u*3)
$t=X($s*$t*3)
return [$v*255,$u*255,$t*255]}
K=function($q){var $r
for($r in $q)if($q.hasOwnProperty($r)){if($q[$r]<0){$q[$r]=0}
if($q[$r]>255){$q[$r]=255}}
return $q}
Y=function($q,$r,$s){var $t
$t=$h(arguments),$q=$t[0],$r=$t[1],$s=$t[2]
$q=Z($q)
$r=Z($r)
$s=Z($s)
return 0.2126*$q+0.7152*$r+0.0722*$s}
Z=function($q){$q/=255
if($q<=0.03928){return $q/12.92}
else{return Math.pow(($q+0.055)/1.055,2.4)}}
J.Color=A
J.color=function($q,$r,$s,$t){return new A($q,$r,$s,$t)}
J.hsl=function($q,$r,$s){return new A($q,$r,$s,'hsl')}
J.hsv=function($q,$r,$s){return new A($q,$r,$s,'hsv')}
J.rgb=function($q,$r,$s){return new A($q,$r,$s,'rgb')}
J.hex=function($q){return new A($q)}
J.css=function($q){return new A($q)}
J.lab=function($q,$r,$s){return new A($q,$r,$s,'lab')}
J.lch=function($q,$r,$s){return new A($q,$r,$s,'lch')}
J.hsi=function($q,$r,$s){return new A($q,$r,$s,'hsi')}
J.interpolate=function($q,$r,$s,$t){if(($q==null)||($r==null)){return '#000'}
if($g($q)==='string'){$q=new A($q)}
if($g($r)==='string'){$r=new A($r)}
return $q.interpolate($s,$r,$t)}
J.contrast=function($q,$r){var $s,$t
if($g($q)==='string'){$q=new A($q)}
if($g($r)==='string'){$r=new A($r)}
$s=$q.luminance()
$t=$r.luminance()
if($s>$t){return ($s+0.05)/($t+0.05)}
else{return ($t+0.05)/($s+0.05)}}
$f=typeof x!=="undefined"&&x!==null?x:this
J=($l=$f.chroma)!=null?$l:$f.chroma={}
A=J.Color
B=(function(){function $q($r){var $s,$t,$u
if($r==null){$r={}}
$s=this
$s.range($r.colors,$r.positions)
$s._mode=($t=$r.mode)!=null?$t:'rgb'
$s._nacol=J.hex(($u=$r.nacol)!=null?$u:J.hex('#ccc'))
$s._spread=0
$s._fixed=!1
$s.domain([0,1])
$s}
$q.prototype.range=function($r,$s){var $t,$u,$v,$w,$x,$y,$z,$A
$v=this
if($r==null){$r=['#ddd','#222']}
if(($r!=null)&&$g($r)==='string'&&((($y=J.brewer)!=null?$y[$r]:void(0))!=null)){$r=J.brewer[$r].slice(0)}
for($t=$w=0,$z=$r.length-1;0<=$z?$w<=$z:$w>=$z;$t=0<=$z?++$w:--$w){$u=$r[$t]
if($g($u)==="string"){$r[$t]=new A($u)}}
$v._colors=$r
if($s!=null){$v._pos=$s}
else{$v._pos=[]
for($t=$x=0,$A=$r.length-1;0<=$A?$x<=$A:$x>=$A;$t=0<=$A?++$x:--$x){$v._pos.push($t/($r.length-1))}}
return $v}
$q.prototype.domain=function($r){var $s
if($r==null){$r=[]}
$s=this
$s._domain=$r
$s._min=$r[0]
$s._max=$r[$r.length-1]
if($r.length===2){$s._numClasses=0}
else{$s._numClasses=$r.length-1}
return $s}
$q.prototype.get=function($r){var $s,$t,$u,$v
$v=this
if(isNaN($r)){return $v._nacol}
if($v._domain.length>2){$s=$v.getClass($r)
$t=$s/($v._numClasses-1)}
else{$t=$u=($r-$v._min)/($v._max-$v._min)
$t=Math.min(1,Math.max(0,$t))}
return $v.fColor($t)}
$q.prototype.fColor=function($r){var $s,$t,$u,$v,$w,$x,$y
$v=this
$t=$v._colors
for($u=$x=0,$y=$v._pos.length-1;0<=$y?$x<=$y:$x>=$y;$u=0<=$y?++$x:--$x){$w=$v._pos[$u]
if($r<=$w){$s=$t[$u]
break}
if($r>=$w&&$u===$v._pos.length-1){$s=$t[$u]
break}
if($r>$w&&$r<$v._pos[$u+1]){$r=($r-$w)/($v._pos[$u+1]-$w)
$s=J.interpolate($t[$u],$t[$u+1],$r,$v._mode)
break}}
return $s}
$q.prototype.classifyValue=function($r){var $s,$t,$u,$v,$w,$x,$y
$v=this
$s=$v._domain
$y=$r
if($s.length>2){$x=$s.length-1
$t=$v.getClass($r)
$w=$s[0]+($s[1]-$s[0])*(0+$v._spread*0.5)
$u=$s[$x-1]+($s[$x]-$s[$x-1])*(1-$v._spread*0.5)
$y=$v._min+(($s[$t]+($s[$t+1]-$s[$t])*0.5-$w)/($u-$w))*($v._max-$v._min)}
return $y}
$q.prototype.getClass=function($r){var $s,$t,$u,$v
$v=this
$s=$v._domain
if($s!=null){$u=$s.length-1
$t=0
while($t<$u&&$r>=$s[$t]){$t++}
return $t-1}
return 0}
$q.prototype.validValue=function($r){return !isNaN($r)}
return $q})()
J.ColorScale=B
J.scale=function($q,$r){var $s,$t,$u
$s=new J.ColorScale()
$s.range($q,$r)
$u=!1
$t=function($v){var $w
$w=$s.get($v)
if($u&&$w[$u]){return $w[$u]()}
else{return $w}}
$t.domain=function($v,$w,$x,$y){var $z
if($x==null){$x='e'}
if(!arguments.length){return $s._domain}
if($w!=null){$z=J.analyze($v,$y)
if($w===0){$v=[$z.min,$z.max]}
else{$v=J.limits($z,$x,$w)}}
$s.domain($v)
return $t}
$t.mode=function($v){if(!arguments.length){return $s._mode}
$s._mode=$v
return $t}
$t.range=function($v,$w){$s.range($v,$w)
return $t}
$t.out=function($v){$u=$v
return $t}
$t.getColor=function($v){return $t($v)}
$t.spread=function($v){if(!arguments.length){return $s._spread}
$s._spread=$v
return $t}
return $t}
if(($m=J.scales)==null){J.scales={}}
J.scales.cool=function(){return J.scale([J.hsl(180,1,0.9),J.hsl(250,0.7,0.4)])}
J.scales.hot=function(){return J.scale(['#000','#f00','#ff0','#fff'],[0,0.25,0.75,1]).mode('rgb')}
J.analyze=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z
$v={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0}
if($s==null){$s=function(){return !0}}
$t=function($A){if(($A!=null)&&!isNaN($A)){$v.values.push($A)
$v.sum+=$A
if($A<$v.min){$v.min=$A}
if($A>$v.max){$v.max=$A}
$v.count+=1}}
$x=function($A,$B){if($s($A,$B)){if(($r!=null)&&$g($r)==='function'){return $t($r($A))}
else if(($r!=null)&&$g($r)==='string'||$g($r)==='number'){return $t($A[$r])}
else{return $t($A)}}}
if($g($q)==='array'){for($y=0,$z=$q.length;$y<$z;$y++){$w=$q[$y]
$x($w)}}
else{for($u in $q)if($q.hasOwnProperty($u)){$w=$q[$u]
$x($w,$u)}}
$v.domain=[$v.min,$v.max]
$v.limits=function($A,$B){return J.limits($v,$A,$B)}
return $v}
J.limits=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G,$H,$I,$J,$K,$L,$M,$N,$O,$P,$Q,$R,$S,$T,$U,$V,$W,$X,$Y,$Z,$0,$1,$2,$3,$4,$5,$6,$7,$8,$9,_$,__,_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k
if($r==null){$r='equal'}
if($s==null){$s=7}
if($q.values==null){$q=J.analyze($q)}
$F=$q.min
$D=$q.max
$P=$q.sum
$S=$q.values.sort(function(_l,_m){return _l-_m})
$C=[]
if($r.substr(0,1)==='c'){$C.push($F)
$C.push($D)}
if($r.substr(0,1)==='e'){$C.push($F)
for($z=$T=1,__=$s-1;1<=__?$T<=__:$T>=__;$z=1<=__?++$T:--$T){$C.push($F+($z/$s)*($D-$F))}
$C.push($D)}
else if($r.substr(0,1)==='l'){if($F<=0){throw 'Logarithmic scales are only possible for values > 0'}
$G=Math.LOG10E*Math.log($F)
$E=Math.LOG10E*Math.log($D)
$C.push($F)
for($z=$U=1,_a=$s-1;1<=_a?$U<=_a:$U>=_a;$z=1<=_a?++$U:--$U){$C.push(Math.pow(10,$G+($z/$s)*($E-$G)))}
$C.push($D)}
else if($r.substr(0,1)==='q'){$C.push($F)
for($z=$V=1,_b=$s-1;1<=_b?$V<=_b:$V>=_b;$z=1<=_b?++$V:--$V){$L=$S.length*$z/$s
$M=Math.floor($L)
if($M===$L){$C.push($S[$M])}
else{$N=$L-$M
$C.push($S[$M]*$N+$S[$M+1]*(1-$N))}}
$C.push($D)}
else if($r.substr(0,1)==='k'){$I=$S.length
$t=new Array($I)
$x=new Array($s)
$O=!0
$J=0
$v=null
$v=[]
$v.push($F)
for($z=$W=1,_c=$s-1;1<=_c?$W<=_c:$W>=_c;$z=1<=_c?++$W:--$W){$v.push($F+($z/$s)*($D-$F))}
$v.push($D)
while($O){for($A=$X=0,_d=$s-1;0<=_d?$X<=_d:$X>=_d;$A=0<=_d?++$X:--$X){$x[$A]=0}
for($z=$Y=0,_e=$I-1;0<=_e?$Y<=_e:$Y>=_e;$z=0<=_e?++$Y:--$Y){$R=$S[$z]
$H=Number.MAX_VALUE
for($A=$Z=0,_f=$s-1;0<=_f?$Z<=_f:$Z>=_f;$A=0<=_f?++$Z:--$Z){$y=Math.abs($v[$A]-$R)
if($y<$H){$H=$y
$u=$A}}
$x[$u]++
$t[$z]=$u}
$K=new Array($s)
for($A=$0=0,$3=$s-1;0<=$3?$0<=$3:$0>=$3;$A=0<=$3?++$0:--$0){$K[$A]=null}
for($z=$1=0,$4=$I-1;0<=$4?$1<=$4:$1>=$4;$z=0<=$4?++$1:--$1){$w=$t[$z]
if($K[$w]===null){$K[$w]=$S[$z]}
else{$K[$w]+=$S[$z]}}
for($A=$2=0,$5=$s-1;0<=$5?$2<=$5:$2>=$5;$A=0<=$5?++$2:--$2){$K[$A]*=1/$x[$A]}
$O=!1
for($A=_g=0,$6=$s-1;0<=$6?_g<=$6:_g>=$6;$A=0<=$6?++_g:--_g){if($K[$A]!==$v[$z]){$O=!0
break}}
$v=$K
$J++
if($J>200){$O=!1}}
$B={}
for($A=_h=0,$7=$s-1;0<=$7?_h<=$7:_h>=$7;$A=0<=$7?++_h:--_h){$B[$A]=[]}
for($z=_i=0,$8=$I-1;0<=$8?_i<=$8:_i>=$8;$z=0<=$8?++_i:--_i){$w=$t[$z]
$B[$w].push($S[$z])}
$Q=[]
for($A=_j=0,$9=$s-1;0<=$9?_j<=$9:_j>=$9;$A=0<=$9?++_j:--_j){$Q.push($B[$A][0])
$Q.push($B[$A][$B[$A].length-1])}
$Q=$Q.sort(function(_l,_m){return _l-_m})
$C.push($Q[0])
for($z=_k=1,_$=$Q.length-1;_k<=_$;$z=_k+=2){if(!isNaN($Q[$z])){$C.push($Q[$z])}}}
return $C}
$f=typeof x!=="undefined"&&x!==null?x:this
$g=(function(){var $q,$r,$s,$t,$u
$q={}
$u="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")
for($s=0,$t=$u.length;$s<$t;$s++){$r=$u[$s]
$q["[object "+$r+"]"]=$r.toLowerCase()}
return function($v){var $w
$w=Object.prototype.toString.call($v)
return $q[$w]||"object"}})()
if(($n=$f.type)==null){$f.type=$g}
Array.max=function($q){return Math.max.apply(Math,$q)}
Array.min=function($q){return Math.min.apply(Math,$q)}
X=function($q,$r,$s){if($r==null){$r=0}
if($s==null){$s=1}
if($q<$r){$q=$r}
if($q>$s){$q=$s}
return $q}
$h=function($q){if($q.length===3){return $q}
else{return $q[0]}}
E=Math.PI*2
D=Math.PI/3
M=Math.cos
$f=typeof x!=="undefined"&&x!==null?x:this
J=($o=$f.chroma)!=null?$o:$f.chroma={}
J.brewer=I={OrRd:['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#b30000','#7f0000'],PuBu:['#fff7fb','#ece7f2','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#045a8d','#023858'],BuPu:['#f7fcfd','#e0ecf4','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b'],Oranges:['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704'],BuGn:['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b'],YlOrBr:['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#993404','#662506'],YlGn:['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529'],Reds:['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'],RdPu:['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a'],Greens:['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],YlGnBu:['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58'],Purples:['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],GnBu:['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#0868ac','#084081'],Greys:['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000'],YlOrRd:['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'],PuRd:['#f7f4f9','#e7e1ef','#d4b9da','#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f'],Blues:['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],PuBuGn:['#fff7fb','#ece2f0','#d0d1e6','#a6bddb','#67a9cf','#3690c0','#02818a','#016c59','#014636'],Spectral:['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2'],RdYlGn:['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'],RdBu:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061'],PiYG:['#8e0152','#c51b7d','#de77ae','#f1b6da','#fde0ef','#f7f7f7','#e6f5d0','#b8e186','#7fbc41','#4d9221','#276419'],PRGn:['#40004b','#762a83','#9970ab','#c2a5cf','#e7d4e8','#f7f7f7','#d9f0d3','#a6dba0','#5aae61','#1b7837','#00441b'],RdYlBu:['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'],BrBG:['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'],RdGy:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#ffffff','#e0e0e0','#bababa','#878787','#4d4d4d','#1a1a1a'],PuOr:['#7f3b08','#b35806','#e08214','#fdb863','#fee0b6','#f7f7f7','#d8daeb','#b2abd2','#8073ac','#542788','#2d004b'],Set2:['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3'],Accent:['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17','#666666'],Set1:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'],Set3:['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'],Dark2:['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666'],Paired:['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'],Pastel2:['#b3e2cd','#fdcdac','#cbd5e8','#f4cae4','#e6f5c9','#fff2ae','#f1e2cc','#cccccc'],Pastel1:['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc','#e5d8bd','#fddaec','#f2f2f2']}
$f=typeof x!=="undefined"&&x!==null?x:this
J=($p=$f.chroma)!=null?$p:$f.chroma={}
J.colors=L={indigo:"#4b0082",gold:"#ffd700",hotpink:"#ff69b4",firebrick:"#b22222",indianred:"#cd5c5c",yellow:"#ffff00",mistyrose:"#ffe4e1",darkolivegreen:"#556b2f",olive:"#808000",darkseagreen:"#8fbc8f",pink:"#ffc0cb",tomato:"#ff6347",lightcoral:"#f08080",orangered:"#ff4500",navajowhite:"#ffdead",lime:"#00ff00",palegreen:"#98fb98",darkslategrey:"#2f4f4f",greenyellow:"#adff2f",burlywood:"#deb887",seashell:"#fff5ee",mediumspringgreen:"#00fa9a",fuchsia:"#ff00ff",papayawhip:"#ffefd5",blanchedalmond:"#ffebcd",chartreuse:"#7fff00",dimgray:"#696969",black:"#000000",peachpuff:"#ffdab9",springgreen:"#00ff7f",aquamarine:"#7fffd4",white:"#ffffff",orange:"#ffa500",lightsalmon:"#ffa07a",darkslategray:"#2f4f4f",brown:"#a52a2a",ivory:"#fffff0",dodgerblue:"#1e90ff",peru:"#cd853f",lawngreen:"#7cfc00",chocolate:"#d2691e",crimson:"#dc143c",forestgreen:"#228b22",darkgrey:"#a9a9a9",lightseagreen:"#20b2aa",cyan:"#00ffff",mintcream:"#f5fffa",silver:"#c0c0c0",antiquewhite:"#faebd7",mediumorchid:"#ba55d3",skyblue:"#87ceeb",gray:"#808080",darkturquoise:"#00ced1",goldenrod:"#daa520",darkgreen:"#006400",floralwhite:"#fffaf0",darkviolet:"#9400d3",darkgray:"#a9a9a9",moccasin:"#ffe4b5",saddlebrown:"#8b4513",grey:"#808080",darkslateblue:"#483d8b",lightskyblue:"#87cefa",lightpink:"#ffb6c1",mediumvioletred:"#c71585",slategrey:"#708090",red:"#ff0000",deeppink:"#ff1493",limegreen:"#32cd32",darkmagenta:"#8b008b",palegoldenrod:"#eee8aa",plum:"#dda0dd",turquoise:"#40e0d0",lightgrey:"#d3d3d3",lightgoldenrodyellow:"#fafad2",darkgoldenrod:"#b8860b",lavender:"#e6e6fa",maroon:"#800000",yellowgreen:"#9acd32",sandybrown:"#f4a460",thistle:"#d8bfd8",violet:"#ee82ee",navy:"#000080",magenta:"#ff00ff",dimgrey:"#696969",tan:"#d2b48c",rosybrown:"#bc8f8f",olivedrab:"#6b8e23",blue:"#0000ff",lightblue:"#add8e6",ghostwhite:"#f8f8ff",honeydew:"#f0fff0",cornflowerblue:"#6495ed",slateblue:"#6a5acd",linen:"#faf0e6",darkblue:"#00008b",powderblue:"#b0e0e6",seagreen:"#2e8b57",darkkhaki:"#bdb76b",snow:"#fffafa",sienna:"#a0522d",mediumblue:"#0000cd",royalblue:"#4169e1",lightcyan:"#e0ffff",green:"#008000",mediumpurple:"#9370db",midnightblue:"#191970",cornsilk:"#fff8dc",paleturquoise:"#afeeee",bisque:"#ffe4c4",slategray:"#708090",darkcyan:"#008b8b",khaki:"#f0e68c",wheat:"#f5deb3",teal:"#008080",darkorchid:"#9932cc",deepskyblue:"#00bfff",salmon:"#fa8072",darkred:"#8b0000",steelblue:"#4682b4",palevioletred:"#db7093",lightslategray:"#778899",aliceblue:"#f0f8ff",lightslategrey:"#778899",lightgreen:"#90ee90",orchid:"#da70d6",gainsboro:"#dcdcdc",mediumseagreen:"#3cb371",lightgray:"#d3d3d3",mediumturquoise:"#48d1cc",lemonchiffon:"#fffacd",cadetblue:"#5f9ea0",lightyellow:"#ffffe0",lavenderblush:"#fff0f5",coral:"#ff7f50",purple:"#800080",aqua:"#00ffff",whitesmoke:"#f5f5f5",mediumslateblue:"#7b68ee",darkorange:"#ff8c00",mediumaquamarine:"#66cdaa",darksalmon:"#e9967a",beige:"#f5f5dc",blueviolet:"#8a2be2",azure:"#f0ffff",lightsteelblue:"#b0c4de",oldlace:"#fdf5e6"}}).call(this)
var z=x.chroma
z.Color.prototype.lighten=function(A){return this.brighten(A)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_Chroma"].join('')
z.prototype.__jx__fqname="meshim_common_Chroma"}
return z})()
b.__$$__jx_language_Detect=(function(){var x={guess:F},y=[],z={en:[/\b(up|me|submit|offers?|about|rights?|more|contact|all|downloads?|how|search|to|do|i[nst]?|your?|that|was|one?|are|with|[bw]e|have|this|f?or|had|by|[hn]ot?|[bo]ut|so|some|what|can|[tw]here|why|other|over|die|ten)\b/ig,4,/\b(inn|set|end|about|pro|the|of|from|and|a|as|at)\b/ig,6],cs:[/[\u00e1\u010d\u010f\u00e9\u011b\u00ed\u0148\u00f3\u0159\u0161\u0165\u00fa\u016f\u00fd\u017e]/gi,5,/\b(by|do|to|[aikosvz])\b/ig,3,/\b(na|za|se|je|\u017ee|ve|jako|jsem|pro|tak|po|u\u017e|jsou|byl)\b/ig,6],de:[/[\u00df]/g,10,/[\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc]/g,7,/\b(de[mrs]|vo[nm]|zu[mr]?|da[s\u00df]?|eine[mnrs]?|a[lu]s|wir|[sw]ie|n[ao]ch|vor[ms]?|(\u00fcb|od|ab)er|und|im|mit|sich|auf|f\u00fcr|nicht|auch|es|bei|nur|bis|mehr|durch)\b/ig,6],es:[/[\u00f1]/g,10,/[\xE1\xE9\xED\xF3\xFA]/ig,6,/\b(que|nuestro|ingresar|inicio|qu[e\u00e9]|[dt]e|ser?|[ms]i|l?a|e[lns]|y|tu|los?|una?|por|con|para|est(\u00e1|ar))\b/ig,6],fr:[/[\u0153]/gi,15,/[\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc\u00ff]/ig,7,/\b(son)\b/ig,4,/\b(en)\b/ig,5,/\b([ado]u|aux?|[do]u|la|[cdls]es|es?t|une?|ne|qu[ei]|sur|dans|pa[rs]|il|sont|avec|voir)\b/ig,6],hr:[/[\u010d\u0107\u0111\u0161\u017e]/gi,10,/d\u017e|lj|nj/gi,3,/\b(ali|ja|je|mene|na|ne|od|ovo|se|sve|ti|u|za|znati)\b/ig,6],ms:[/\b(and)\b/ig,4,/\b((se)?(biji|buah|orang)|ada|anda|atau|boleh|bukan|dalam|dan|dari|di|ini|kami|ke|lagi|sila|tidak|tinggi|telah|untuk)\b/ig,6],da:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(ind|l\u00e6s|nyheder|[vt]il|s?om|og|[mv]ed|kan|har|var|tager|af|d?et|de[tn]{2}e|skal|den|set|noget|nogle|mange|hadde|eller|efter|end|blive|er|sekund|viser|ud|(a|vi|sku)lle)\b/ig,6],nb:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(passord|nyheter|inn|[vt]il|s?om|og|[mv]ed|kan|[htv]ar|av|d?et|de[tn]{2}e|skal|se(g|tt)|noen?|mange|hadde|e[lt]{2}er|enn|blir?|ble|andre|viser|ut|(a|vi|sku)lle)\b/ig,6],nl:[/\b(in|die)\b/ig,4,/\b(de|en)\b/ig,5,/\b(het|dat|van|ik|te|een|hij|niet|zijn)\b/ig,6],pt:[/[\u00e1\u00e2\u00e3\u00e0\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa]/ig,7,/\b(gr\u00e1fico|ao|como|das?|de|dos|ele|em?|mai?s|na|n\u00e3o|os?|para|por|que|se|uma?)\b/ig,6],sk:[/\u00e1\u00e4\u010d\u010f\u00e9\u00ed\u013e\u013a\u0148\u00f3\u00f4\u0155\u0161\u0165\u00fa\u00fd\u017e/ig,10,/dz|d\u017e/ig,5,/\b(ten|to|do|so)\b/ig,4,/\b(ja|na|za|c\u030co|t\u00e1|po|vo|zo|n\u00e1[s\u030cs])\b/ig,6],tr:[/[\u00c7\u011e\u0130\u00d6\u015e\u00dc\u00e7\u011f\u0131\u00f6\u015f\u00fc]/g,7,/\b(son)\b/ig,4,/\b(formu|bir|ve|ne|bu|i\u00e7in|o|b?en|\u00e7ok|(al|\u00e7\u0131k|ol|yap)mak|(de|gel|git|g\u00f6r|iste|ver)mek|gibi|daha|kendi|ile|ama|sonra|kadar|yer|insan|de\u011fil|y\u0131l|g\u00fcn|biz)\b/ig,6],vi:[/[\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5]/ig,8,/\b(v\u00e0|c\u00e1c|c\u1ee7a|c\u00f3|\u0111\u0103ng|\u0111\u00e2y|ho\u1eb7c|kh\u1ea9u|k\u00fd|m\u1ed9t|ng\u00e0y|l\u00e0|trong|cho)\b/ig,6],ja:[/[\u3041-\u30ff]/g,10],ko:[/[\uAC00-\uD7A3\u1100-\u11FF\u3131-\u318E\uFFA1-\uFFDC]/g,10],th:[/[\u0E00-\u0E7F]/g,10],zh_CN:[/[\u4e00-\u9fb4]/g,1,/[\u7684\u662f\u8fd9\u6709\u5728\u4e0d\u4e86\u6765\u4e2a\u5230\u4e3a\u548c\u9053\u4e5f\u65f6\u5f97\u5c31\u90a3\u8981\u4ee5\u7740\u53bb\u4e4b\u8fc7\u5bb6\u5bf9\u53ef\u91cc\u540e\u4e48\u591a\u800c\u80fd\u90fd\u7136\u6ca1\u8d77\u8fd8]/g,7],ru:[/[\u0410-\u042f\u0430-\u044f\u0401\u0451]/g,3],ar:[/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g,1]}
for(var A in z)if(z.hasOwnProperty(A))y.push(A)
function B(G,H){var I=H.match(G)
return I?I.length:0}
function C(G,H,I,J){return Math.pow(B(G,H)/I,1/J)}
function D(G){var H=(1-G[0]),I
for(I=1;I<G.length;I++)H*=(1-G[I])
return 1-H}
function E(G,H,I){if(!I)I=B(/ /g,H)
var J=H.length,K,L,M,N,O=[]
for(var P=0;P<z[G].length;P+=2){K=z[G][P]
L=z[G][P+1]
M=(K.toString().substr(1,2)=='\\\\b')?I:J
N=C(K,H,M,L)
O.push(N)}
if(G=='en')O.push(0.6/H.length)
return D(O)}
function F(G,H){var I=document.body.getAttribute('lang')||document.documentElement.getAttribute('lang')
if(I){return I}
if(!G)G=y
if(!H)H=document.body.innerHTML.replace(/\s+/g,' ').replace(/<script[^>]*?>.*?<\/script>/gi,' ').replace(/<style[^>]*?>.*?<\/style>/gi,' ').replace(/<!--.*?-->/g,' ').replace(/<\/?[^>]+?>/g,' ').replace(/[-_a-z0-9.@]+[.@][-_a-z0-9.@]+/gi,'').replace(/[\s\d!'#$%&'()*+,-.\/:;<=>?@^_{|}~\[\]\/]+/g,' ')
H=H.replace(/\s+/g,' ')
var J=B(/ +/g,H),K=[],L,M
for(L=0;L<G.length;L++)K.push([G[L],E(G[L],H,J)])
K.sort(function(N,O){return O[1]-N[1]})
M=K[0][0]
M.scores=K
window.__$z_results=J+' '+H.length+' '+(H.length/J)+'\n'+K.join('\n')
window.__$z_innerText=H
return M}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_language_Detect"].join('')
x.prototype.__jx__fqname="jx_language_Detect"}
return x})()
b.__$$__meshim_common_ArrayUtils=(function(){var x={shuffle:y,random_index:A,map:D}
function y(E,F){return F?B(E,F):z(E)}
function z(E){var F=E.length,G,H
while(F>1){G=Math.floor(F--*Math.random())
H=E[G]
E[G]=E[F]
E[F]=H}
return E}
function A(E,F){if(!E||E.length<=0)return -1
if(!F){return Math.floor(Math.random()*E.length)}
F=C(E,F)
var G=0,H
for(H=F.length;H--;){G+=F[H]}
var I=Math.random()*G,J=0,K=F.length
for(H=0;H<K-1;H++){J+=F[H]
if(I<=J)return H}
return H}
function B(E,F){var G=E.concat(),H,I,J,K,L
F=C(E,F)
E.length=0
L=0
for(H=F.length;H--;){L+=F[H]}
J=Math.random()*L
K=0
H=0
while(G.length){K+=F[H]
if(J<=K){L-=F[H]
I=G.splice(H,1)[0]
F.splice(H,1)
E.push(I)
J=Math.random()*L
K=0
H=0}
else{H++}}
return E}
function C(E,F){if(g(F)){if(F.length===E.length){return F.concat()}
else{throw new window.Error('Invalid weights array: length does not match')}}
else if(h(F)){return D(E,F)}
else{throw new window.Error('Invalid weights supplied')}}
function D(E,F,G){var H,I,J
if(!g(E)){throw new TypeError(' arr is not an array')}
var K=Object(E),L=K.length>>>0
if(!h(F)){throw new TypeError(F+' is not a function')}
if(arguments.length>2){H=G}
I=new Array(L)
J=0
while(J<L){var M,N
if(J in K){M=K[J]
N=F.call(H,M,J,K)
I[J]=N}
J++}
return I}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_ArrayUtils"].join('')
x.prototype.__jx__fqname="meshim_common_ArrayUtils"}
return x})()
b.__$$__meshim_widget_utils_BrowserQuirks=(function(){var x={testSafariFocusBug:y,ieQuirksModeFix:A}
function y(){if(!q.isWebKit||q.isChrome)return !1
var B=document.activeElement
return (B&&B.tagName.toLowerCase()==='select')}
function z(){if(!q.isIE||!document.documentMode||(q.isStrict&&document.documentMode>7))return
var B=document.getElementsByTagName('select'),C=B.length
while(C--){var D=B[C].style,E=D.display
D.display='none'
D.display=E}}
function A(){z()}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_BrowserQuirks"].join('')
x.prototype.__jx__fqname="meshim_widget_utils_BrowserQuirks"}
return x})()
b.__$$__meshim_widget_controllers_DefaultDataNode=(function(){var x={livechat:{timestamp$int:+new Date(),settings:{behavior:{do_not_display$bool:!1},theme:{name$string:'simple',message_type$string:'bubble_avatar',colors:{placeholder$string:'_'},chat_button:{position$string:'br',position_mobile$string:'br'},chat_window:{position$string:'br',size$string:'medium',hide_profile_card$bool:!1,hide_profile_avatar$bool:!1,use_banner$bool:!0,title_bar:{hide_minimize$bool:!1,hide_popout$bool:!1}},branding:{type$string:'icon_font_zopim'}},greetings:{online$string:v(2),offline$string:v(3)},banner:{enabled$bool:!0,layout$string:'image_right',text$string:v(2),image_path$string:'',image_data$string:''},chat_button:{hide_when_offline$bool:!1},chat_window:{title_bar:{title$string:v(4),status_messages:{online$string:v(5),away$string:v(6),offline$string:v(7)}}},login:{allowed_types:{email$bool:!0,facebook$bool:!0,twitter$bool:!1,google$bool:!0},phone_display$bool:!1,restrict_profile$bool:!1},concierge:{display_name$string:v(8),title$string:v(9),avatar_path$string:'',avatar_data$string:'',greeting:{enabled$bool:!1,message$string:v(10)}},branding:{hide_branding$bool:!1,hide_favicon$bool:!1,custom_favicon_path$string:''},language:{language$string:'--'},cookie_law:{enabled$bool:!1},sound:{disabled$bool:!1},popout:{enabled$bool:!0},rating:{enabled$bool:!0},end_chat_menu:{enabled$bool:!0,message$string:''},emoticons:{enabled$bool:!1},bubble:{enabled$bool:!0,title$string:v(11),text$string:v(12)},forms:{pre_chat_form:{required$bool:!1,profile_required$bool:!1,message$string:'',form:{0:{name$string:'name',required$bool:0},1:{name$string:'email',required$bool:0},2:{label$string:v(13),name$string:'department',required$bool:0,type$string:'department'},3:{label$string:v(14),name$string:'message',required$bool:0,type$string:'textarea'},4:{label$string:v(15),name$string:'phone',required$bool:0,type$string:'text',hidden$bool:!0}}},offline_form:{message$string:v(16),message_disabled$string:v(17),post_submit_message$string:v(18),profile_required$bool:!0,form:{0:{name$string:'name',required$bool:1},1:{name$string:'email',required$bool:1},2:{label$string:v(14),name$string:'message',required$bool:1,type$string:'textarea'},3:{label$string:v(15),name$string:'phone',required$bool:0,type$string:'text',hidden$bool:!0}}},post_chat_form:{header$string:v(19),message$string:v(20),comments_enabled$bool:!0,comments_messages:{good:{message$string:v(21),placeholder$string:v(22)},bad:{message$string:v(23),placeholder$string:v(24)}}},card_form:{}}}}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DefaultDataNode"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_DefaultDataNode"}
return x})()
b.__$$__jx_data_SetDataNode=(function(){var x={applySetDataNode:z}
function y(A){var B,C
if(A.leaf){B=this
B.autobind(A,'value',function(D){if('value' in B)B.value=D
else B.setText(D)})}
else{B=this.firstChild
while(B){if(B.getAttribute){C=B.getAttribute('name')
if(C)B.setDataNode(A.descend(C))
else B.setDataNode(A)}
B=B.nextSibling}}}
function z(A){if(A.setDataNode)return
A.setDataNode=y
var B=A.firstChild
while(B){z(B)
B=B.nextSibling}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_SetDataNode"].join('')
x.prototype.__jx__fqname="jx_data_SetDataNode"}
return x})()
b.__$$__jx_data_JSON=(function(){var x=(!k(window)&&window.JSON)||{parse:M,stringify:C}
x={parse:M,stringify:C}
var y=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,z={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\','"':'\\"'}
function A(N){return '"'+N.replace(y,B)+'"'}
function B(N){return z[N]||'\\u'+('0000'+N.charCodeAt(0).toString(16)).slice(-4)}
function C(N){switch(typeof N){case 'string':return A(N)
case 'number':return isFinite(N)?N.toString():'null'
case 'boolean':return String(N)
case 'object':if(!N)return 'null'
var O=[],P,Q
if(g(N)){for(P=0,Q=N.length;P<Q;P++)O[P]=C(N[P])||'null'
return '['+O.join(',')+']'}
var R,S=[],T
for(R in N)if(N.hasOwnProperty(R))S.push(R)
S.sort()
for(P=0,Q=S.length;P<Q;P++){R=S[P]
T=C(N[R])
if(T)O.push(A(R)+':'+T)}
if(O.length)return '{'+O.join(',')+'}'}}
var D='(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)',E='(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'+'|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',F='(?:\"'+E+'*\")',G=new RegExp('(?:false|true|null|[\\{\\}\\[\\]]'+'|'+D+'|'+F+')','g'),H=new RegExp('\\\\(?:([^u])|u(.{4}))','g'),I={'"':'"','/':'/','\\':'\\','b':'\b','f':'\f','n':'\n','r':'\r','t':'\t'},J=new String(''),K='\\'
function L(N,O,P){return O?I[O]:String.fromCharCode(parseInt(P,16))}
function M(N){var O=N.match(G),P=O.length,Q=O[0],R,S,T,U,V
if(Q=='{')R={},V=1
else if(Q=='[')R=[],V=1
else R=[],V=0,S=!0
var W=[R]
for(P=O.length;V<P;++V){Q=O[V]
switch(Q.charCodeAt(0)){case 91:U=W[0]
W.unshift(U[T||U.length]=[])
T=void(0)
break
case 93:W.shift()
break
case 123:U=W[0]
W.unshift(U[T||U.length]={})
T=void(0)
break
case 125:W.shift()
break
case 102:U=W[0]
U[T||U.length]=!1
T=void(0)
break
case 110:U=W[0]
U[T||U.length]=null
T=void(0)
break
case 116:U=W[0]
U[T||U.length]=!0
T=void(0)
break
case 34:Q=Q.substring(1,Q.length-1)
if(Q.indexOf(K)!==-1)Q=Q.replace(H,L)
U=W[0]
if(T==void(0)){if(U instanceof Array)T=U.length
else{T=Q||J
break}}
U[T]=Q
T=void(0)
break
default:U=W[0]
U[T||U.length]=+(Q)
T=void(0)
break}}
if(S){if(W.length==1)return R[0]}
else if(!W.length)return R
throw 'error'}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_JSON"].join('')
x.prototype.__jx__fqname="jx_data_JSON"}
return x})()
b.__$$__jx_io_socket_XDomainDynScript=(function(){var x=y
y.protocol='xdds'
function y(A){var B=this,C=this.longpoll=new s(!0),D=this.sender=new s(!0)
C.on('success',function(E){B.process_data(E)})
C.on('error',function(){B.abort('longpoll error')})
D.on('success',function(){B.ondrain&&B.ondrain()})
D.on('error',function(){B.abort('sender error')})
this.url='https://'+A
r.window.on('unload',this.unload=function(){B.abort('unload')})
this.longpoll.load(this.url+['c',+new Date()].join('/'))}
y.prototype.process_data=function(A){if(!A||this._abort)return
!this.ts&&this.onopen&&this.onopen()
this.ts=+new Date()
this.onmessage&&this.onmessage(A,this.ts)
this.longpoll&&this.longpoll.load(this.url+['p',+new Date()].join('/'))}
y.prototype.send=function(A){if(this._abort)return !1
var B=this.url+['d',+new Date(),window.encodeURIComponent(A)].join('/')
this.sender&&this.sender.load(B)
return !1}
y.prototype.abort=function(A){if(this._abort)return
this._abort=!0
z('XDDS - abort: '+A)
r.window.un('unload',this.unload)
this.longpoll.destroy()
this.sender.destroy()
this.longpoll=this.sender=this.unload=null
this.onclose&&this.onclose(A)
window.CollectGarbage&&window.CollectGarbage()}
var z=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_XDomainDynScript"].join('')
x.prototype.__jx__fqname="jx_io_socket_XDomainDynScript"}
return x})()
b.__$$__meshim_common_SvgCanvas=(function(){function x(y,z,A,B,C){z=z||w.generateID()
var D=y.ownerDocument,E
E=D.createElementNS("http://www.w3.org/2000/svg",'svg')
E.vectorType='svg'
w.extend(E)
r.extend(E)
w.set(z,E)
var F=!1
E.appendToParent=function(G){if(!w.hasParentNode(E))w.appendChild(y,E)
if(G&&!F){if(y.appendToParent)y.appendToParent(!0)
F=!0}}
E.setClass=function(G){E.setAttribute('class',G)
return E}
E.addClass=function(G){E.setAttribute('class',E.getAttribute('class')+' '+G)
return E}
E.removeClass=function(G){var H=E.getAttribute('class'),I=new RegExp('\\b'+G+'\\b','g')
H.replace(I,'')
E.setAttribute('class',H)
return E}
E.setViewBox=function(G){E.setAttribute('viewBox',G)
return E}
E.setStyle(A)
E.setAttributes(C)
w.addChildren(E,B)
E.appendToParent()
return E}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgCanvas"].join('')
x.prototype.__jx__fqname="meshim_common_SvgCanvas"}
return x})()
b.__$$__meshim_common_sounds_AudioTag=(function(){var x=10
function y(A){var B=document.createElement('audio'),C=this,D=function(){z.call(C)}
if(!B.canPlayType)return
var E=/^(probably|maybe)$/i
try {if(B.canPlayType('audio/mpeg').match(E))this.type='mp3'
else if(B.canPlayType('audio/ogg; codecs="vorbis"').match(E))this.type='ogg'
else if(B.canPlayType('audio/wav').match(E))this.type='wav'
else return}catch(F){return}
B.setAttribute('autobuffer','true')
B.setAttribute('preload','')
this.dom=B
this.remainingLoop=1
this.loop=1
this.load(A)
this.dom.addEventListener('ended',D,!1)}
function z(){if(this.remainingLoop>1){this.remainingLoop--
if(q.isSafari){this.dom.load()}
this.dom.play()}}
y.prototype.load=function(A){this.dom.setAttribute('src',A+'.'+this.type)
this.remainingLoop=0}
y.prototype.play=function(A){if(q.isSafari){this.dom.load()}
if(this.dom.currentTime)this.dom.currentTime=0
this.remainingLoop=A?A:this.loop
this.dom.play()}
y.prototype.stop=function(){this.dom.pause()
if(this.dom.currentTime)this.dom.currentTime=0}
y.prototype.setVolume=function(A){A=parseInt(A,10)
if(isNaN(A))return;(A>x)&&(A=x);(A<0)&&(A=0)
this.dom.volume=A/x}
y.prototype.setLoop=function(A){this.loop=A}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_AudioTag"].join('')
y.prototype.__jx__fqname="meshim_common_sounds_AudioTag"}
return y})()
b.__$$__meshim_common_sounds_FlashSound=(function(){var x=10
function y(z){var A,B=+new Date()+Math.round(Math.random()*10000),C=z.substring(0,z.lastIndexOf('/')+1)+'JSMP3.swf'
if(q.isIE){try {new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')}catch(F){return}
A=document.createElement('div')
document.body.insertBefore(A,document.body.firstChild)
var D='<object id="__zopimSoundPlayer'+B+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">'+'<param name="movie" value="'+C+'" />'+'<param name="allowScriptAccess" value="always" />'+'</object>'
A.innerHTML=D
A=A.firstChild
var E=document.title.split('#')[0]
l(function(){if(document.title!==E)document.title=E})}
else{if(!navigator.mimeTypes['application/x-shockwave-flash'])return
A=document.createElement('embed')
A.id='__zopimSoundPlayer'+B
A.src='/dashboard/sounds/JSMP3.swf'
A.setAttribute('allowScriptAccess','always')
document.body.insertBefore(A,document.body.firstChild)}
A.style.left=A.style.top='-9999px'
A.style.position='absolute'
this.dom=A
this.loop=1
this.load(z)}
y.prototype.load=function(z){if(this.dom.loadSound){this.dom.loadSound(z+'.mp3')
this.loaded=!0}
else{var A=this
setTimeout(function(){A.load(z)},1000)}}
y.prototype.play=function(z){if(this.loaded){try {this.dom.playSound(z||this.loop)}catch(B){;}}
else{var A=this
setTimeout(function(){A.play(z)},1000)}}
y.prototype.stop=function(){if(this.loaded){try {this.dom.stopSound()}catch(z){;}}}
y.prototype.setVolume=function(z){z=parseInt(z,10)
if(isNaN(z))return
if(z>x)z=x
if(z<0)z=0
if(this.loaded){try {this.dom.setVolume(z/x)}catch(B){;}}
else{var A=this
setTimeout(function(){A.setVolume(z)},500)}}
y.prototype.setLoop=function(z){this.loop=z
if(this.loaded){try {this.dom.setLoop(z)}catch(B){;}}
else{var A=this
setTimeout(function(){A.setLoop(z)},500)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_FlashSound"].join('')
y.prototype.__jx__fqname="meshim_common_sounds_FlashSound"}
return y})()
b.__$$__meshim_common_QueryString=(function(){var x=/^(1|on|true)$/i,y={'boolean':!1,'integer':0,'float':0.0,'string':''},z=null
function A(D){if(this instanceof A){if(D){return A.parseQuery(D)}
else{this.store={}}}
else{if(!z)A._initSingleton(window)
return z}}
A._initSingleton=function(D){z=new A(D.location.search)}
A.buildQuery=function(D){var E=[]
for(var F in D)if(D.hasOwnProperty(F)){E.push(window.encodeURIComponent(F)+'='+window.encodeURIComponent(D[F]+''))}
return E.join('&')}
A.parseQuery=function(D){var E=new A()
D=D.replace(/^\?|\/+$/g,'')
var F,G,H=D.split('&')
for(var I=0,J=H.length;I<J;I++){var K=H[I]
if(!K.length)continue
var L=K.indexOf('=')
if(L<=-1){F=K
G='1'}
else{F=K.slice(0,L)
G=K.slice(L+1)}
E.add(window.decodeURIComponent(F),window.decodeURIComponent(G))}
return E}
var B=A.prototype
B.add=function(D,E){if(!this.has(D))this.store[D]=[E]
else this.store[D].push(E)}
B.has=function(D){return (D in this.store)}
B.getLast=function(D,E,F){if(!this.has(D))return C(a,E,F)
var G=this.store[D]
return C(G[G.length-1],E,F)}
B.getFirst=function(D,E,F){return this.getAt(D,0,E,F)}
B.getAt=function(D,E,F,G){return C(this.has(D)?this.store[D][E]:a,F,G)}
B.getRaw=function(D){if(!this.has(D))return a
else return this.store[D].concat()}
B.get=B.getLast
B.toString=function(){return A.buildQuery(this.store)}
function C(D,E,F){if(E===a&&F===a)return D
if(E===a)E='string'
if(!(E in y))throw ('invalid type requested')
if(D===a){if(F!==a)return F
return y[E]}
if(E==='boolean')return x.test(D)
if(E==='integer')return parseInt(D,10)
if(E==='float')return parseFloat(D)
return D}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_QueryString"].join('')
A.prototype.__jx__fqname="meshim_common_QueryString"}
return A})()
b.__$$__jx_core_ObjectUtil=(function(){var x=function(C,D){return C===D||C&&D&&typeof C=='object'&&typeof D=='object'&&y(C,D)},y=function(C,D){var E
for(E in C)if(C.hasOwnProperty(E))if(!x(C[E],D[E]))return !1
for(E in D)if(D.hasOwnProperty(E))if(!x(C[E],D[E]))return !1
return !0},z=function(C){if(typeof (C)!='object'||!C)return C
var D={}
for(var E in C)if(C.hasOwnProperty(E))D[E]=z(C[E])
return D},A=function(C){if(C){for(var D=1,E=arguments.length;D<E;D++){var F=arguments[D]
if(!F)continue
for(var G in F)if(F.hasOwnProperty(G)){C[G]=F[G]}}}
return C},B={equal:x,clone:z,extend:A}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_core_ObjectUtil"].join('')
B.prototype.__jx__fqname="jx_core_ObjectUtil"}
return B})()
b.__$$__meshim_common_Instrumentation=(function(){var x=15*1000,y=x*0.2,z=!0,A=+new Date(),B=setInterval(D,x),C=[]
function D(){var J=+new Date(),K=J-A,L=Math.abs(K-x)
if(L>y){F()}
A=J}
function E(){for(var J=C.length;J--;){var K=C[J]
for(var L=K.queue.length;L--;){var M=K.queue[L]
if(M.method==='histogram'){K.queue.splice(L,1)}}
K.start_ts={}}}
function F(){B=clearInterval(B)
z=!1
E()}
function G(){this.ref_ts=null
this.from_ref_ts={}
this.start_ts={}
this.tags=[]
this.queue=[]
C.push(this)}
var H=G.prototype
H.flush=function(){}
H.setTags=function(J){if(g(J))this.tags=J.concat()}
H.addTag=function(J){if(i(J)&&J)this.tags.push(J)}
H.setRefTime=function(J){if(j(this.ref_ts)){I('Global start time has already been set - ignoring')
return}
if(!j(J)){I('Invalid ref time - ignoring')
return}
this.ref_ts=J}
H.fromRefTime=function(J,K,L){if(!z)return
if(!j(this.ref_ts)){I('Global start time has not been set - ignoring')
return}
if(!i(J)||!J){I('Event name is not provided or invalid')
return}
if(this.from_ref_ts[J]){I(J+' has already been tracked - ignoring')
return}
this.from_ref_ts[J]=!0
var M=+new Date()
if(M<this.ref_ts){F()
return}
this._queueHistogram(J,(M-this.ref_ts)/1000,K,L)}
H.start=function(J,K){if(!z)return
if(!i(J)||!J){I('Event name is not provided or invalid')
return}
if(J in this.start_ts){I('Start time of '+J+' has already been set - ignoring')
return}
this.start_ts[J]=j(K)?K:+new Date()}
H.end=function(J,K,L){if(!z)return
if(!i(J)||!J){I('Event name is not provided or invalid')
return}
if(!(J in this.start_ts)){I('Start time of '+J+' has not been set - ignoring')
return}
var M=+new Date()
if(M<this.start_ts[J]){F()
return}
this._queueHistogram(J,(M-this.start_ts[J])/1000,K,L)
delete this.start_ts[J]}
H.restart=function(J,K){delete this.start_ts[J]
this.start(J,K)}
H.increment=function(J,K){this._queue({method:'increment',name:J,value:1,tags:this.tags.concat(K||[])})}
H._queueHistogram=function(J,K,L,M){if(g(L)){M=L
L=a}
var N={method:'histogram',name:J,value:K,tags:this.tags.concat(M||[])}
if(j(L)){N.sample_rate=L}
this._queue(N)}
H._queue=function(J){this.queue.push(J)
this.flush()}
function I(J){if(!J)return}
if((typeof G==='function')&&G.prototype&&!G.__jx__no_fqname){G.prototype.__jx__fqname_chain=[(G.prototype.__jx__fqname_chain||"")," ","meshim_common_Instrumentation"].join('')
G.prototype.__jx__fqname="meshim_common_Instrumentation"}
return G})()
b.__$$__meshim_common_sounds_BGSoundTag=(function(){function x(y){if(!q.isIE)return
if(q.isIE>=9)return
var z=document.createElement('bgsound')
if(document.body)document.body.insertBefore(z,document.body.firstChild)
else document.documentElement.appendChild(z)
this.dom=z
this.loop=0
this.load(y)}
x.prototype.load=function(y){this.src=y+'.wav'}
x.prototype.play=function(y){this.dom.src=this.src
this.dom.loop=y?y:this.loop}
x.prototype.stop=function(){this.dom.src=''}
x.prototype.setVolume=function(){}
x.prototype.setLoop=function(y){this.loop=parseInt(y,10)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_BGSoundTag"].join('')
x.prototype.__jx__fqname="meshim_common_sounds_BGSoundTag"}
return x})()
b.__$$__jx_ui_HTMLEvent=(function(){function x(z){z.preventDefault=x.preventDefault
z.stopPropagation=x.stopPropagation
z.target=z.srcElement}
x.preventDefault=function(){this.returnValue=!1}
x.stopPropagation=function(){this.cancelBubble=!0}
function y(){this.allCallbacks={}
this.nativeHandlers={}}
y.prototype.useCustomHandling=function(z){if(!this.dom.nodeType&&this.dom!=window&&this.dom!=document)return !0
if(this.tagName.toLowerCase()=='form'&&z=='submit')return !1
return !q.isCustomEvents&&(q.isFF&&q.isFF<9?!document.createEvent('event')[z.toUpperCase()]:typeof (this.dom['on'+z])=='undefined')}
y.prototype.addEventListener=function(z,A){if(!z&&typeof A!='function')throw 'bad arguments to on / addEventListener'
if(!(z in this.allCallbacks)){this.allCallbacks[z]=[]
if(!this.useCustomHandling(z))this.setupNativeEventListener(z)}
this.allCallbacks[z].push(A)
return this}
y.prototype.setupNativeEventListener=function(z){if(z in this.nativeHandlers)return
var A=this
this.nativeHandlers[z]=function(B){B&&(B.stopPropagation||x(B))
var C,D=A.allCallbacks[z],E=D.length,F=!0
D._active=!0
for(C=0;C<E;C++){try {if(!D[C])continue
if(D[C].call(A,(q.isCustomEvents&&(B instanceof window.CustomEvent))?B.detail:B)===!1)F=!1}catch(G){r.fire('error',G)}}
D._active=!1
if(D._dirty){for(C=0;C<E;C++){if(!D[C]){if(C==E-1)D.pop()
else D[C--]=D.pop()
E--}}
D._dirty=!1}
if(F===!1){if(B){B.preventDefault()
B.returnValue=!1}
return !1}}
if(this.dom.attachEvent)this.dom.attachEvent('on'+z,this.nativeHandlers[z])
else if(this.dom.addEventListener)this.dom.addEventListener(z,this.nativeHandlers[z],!1)}
y.prototype.teardownNativeEventListener=function(z){var A=this.nativeHandlers[z]
if(!A)return
if(this.dom.attachEvent)this.dom.detachEvent('on'+z,A)
else if(this.dom.addEventListener)this.dom.removeEventListener(z,A,!1)
delete this.nativeHandlers[z]
delete this.allCallbacks[z]}
y.prototype.removeEventListener=function(z,A){var B=this.allCallbacks[z]
if(!B)return
for(var C=0,D=B.length;C<D;C++)if(B[C]===A){if(B.length==1){if(this.nativeHandlers[z])this.teardownNativeEventListener(z)
else delete this.allCallbacks[z]}
else if(B._active)B[C]=null,B._dirty=!0
else if(C==D-1)B.pop()
else B[C]=B.pop()
break}
return this}
y.prototype.unextendEvents=function(){if(!this.allCallbacks||!this.nativeHandlers)return
for(var z in this.nativeHandlers)if(this.nativeHandlers.hasOwnProperty(z))this.teardownNativeEventListener(z)
this.allCallbacks=this.nativeHandlers=null}
y.prototype.fireCustomEvent=function(z,A){if(!q.isCustomEvents||this.useCustomHandling(z)){var B=this.allCallbacks[z],C=!0
if(B&&B.length){B._active=!0
var D,E,F
for(D=0,E=B.length;D<E;D++){try {F=B[D].call(this,A)
if(F===!1)C=!1}catch(G){r.fire('error',G)}}
B._active=!1
if(B._dirty){for(D=0;D<E;D++){if(!B[D]){if(D==E-1)B.pop()
else B[D--]=B.pop()
E--}}
B._dirty=!1}}
return C}
else{return this.dom.dispatchEvent(new window.CustomEvent(z,{bubbles:!1,cancelable:!0,detail:A}))}}
y.prototype.fire=y.prototype.fireCustomEvent
y.prototype.on=y.prototype.addEventListener
y.prototype.un=y.prototype.removeEventListener
y.__jx__no_fqname=!0
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLEvent"].join('')
y.prototype.__jx__fqname="jx_ui_HTMLEvent"}
return y})()
b.__$$__jx_data_DataNode=(function(){function x(z,A){this.name=z
this.leaf=/\$[a-z]+$/.test(z)
this.parentNode=A
this.listeners_value=[]
this.listeners_write=[]
if(!this.leaf){this.listeners_keys=[]
this.childNodes={}
this.keys={}}}
x.prototype.fqname=function(){return y(this.path())}
x.prototype.path=function(){var z=this,A=[this.name]
while((z=z.parentNode))A.unshift(z.name)
return A}
x.prototype.descend=function(z){var A=this,B,C,D
if(typeof z=='string')z=z.split('.')
for(C=0,D=z.length;C<D;C++){B=z[C]
if(!(B in A.childNodes))A.childNodes[B]=new x(B,A)
A=A.childNodes[B]}
return A}
x.prototype.$$=x.prototype.descend
x.prototype.$=function(z){if(!(z in this.childNodes))return (this.childNodes[z]=new x(z,this))
return this.childNodes[z]}
x.prototype.update=function(z,A,B){var C,D
if(z!==null){delete this.deleted
D=this.parentNode
while(D&&D.deleted){delete D.deleted
D=D.parentNode}}
if(this.leaf){this.value=z
this.notifyListeners(z,A,B)}
else{if(z==null){this.deleted=!0
for(C in this.childNodes)if(this.childNodes.hasOwnProperty(C))this.childNodes[C].update(null,!0,B)}
else{for(C in z)if(z.hasOwnProperty(C))this.$(C).update(z[C],!0,B)}
this.notifyListeners(z,A,B)}}
x.prototype.write=function(z,A){this.update(z,A||!1,{path:this.path(),value:z})}
x.prototype.bindWrite=function(z){this.listeners_write.push(z)}
x.prototype.bindValue=function(z){this.listeners_value.push(z)
try {z.call(this,this.getValue())}catch(A){r.fire('error',A)}}
x.prototype.bindKeys=function(z){if(this.leaf){return}
this.listeners_keys.push(z)
try {z.call(this,this.getKeys(),[])}catch(A){r.fire('error',A)}}
x.prototype.unbindValue=function(z){for(var A=this.listeners_value.length;A--;)if(this.listeners_value[A]==z){this.listeners_value.splice(A,1)
return}}
x.prototype.unbindKeys=function(z){if(this.leaf)return
for(var A=this.listeners_keys.length;A--;)if(this.listeners_keys[A]==z){this.listeners_keys.splice(A,1)
return}}
x.prototype.on=function(z,A){switch(z){case 'value':this.bindValue(A)
break
case 'keys':this.bindKeys(A)
break}}
x.prototype.un=function(z,A){switch(z){case 'value':this.unbindValue(A)
break
case 'keys':this.unbindKeys(A)
break}}
x.prototype.addListener=function(z,A){this.listeners[z].push(A)}
x.prototype.removeListener=function(z,A){var B=this.listeners[z]
for(var C=B.length;C--;)if(B[C]==A)B.splice(C,1)}
x.prototype.notifyListeners=function(z,A,B){for(var C=0;C<this.listeners_value.length;C++)try {this.listeners_value[C].call(this,z)}catch(H){r.fire('error',H)}
if(B){for(C=0;C<this.listeners_write.length;C++)try {this.listeners_write[C].call(this,B)}catch(H){r.fire('error',H)}}
if(this.leaf)return
var D=[],E=[],F
if(z){for(F in z)if(z.hasOwnProperty(F)){if(z[F]!==null){if(!(F in this.keys)){this.keys[F]=1
D.push(F)}}
else{if(F in this.keys){delete this.keys[F]
E.push(F)}}}}
else{for(F in this.keys)if(this.keys.hasOwnProperty(F)){delete this.keys[F]
E.push(F)}}
for(C=0;C<this.listeners_keys.length;C++)try {this.listeners_keys[C].call(this,D,E)}catch(H){r.fire('error',H)}
if(!A&&this.parentNode){var G={}
G[this.name]=z
this.parentNode.notifyListeners(G,A,B)}}
x.prototype.getValue=function(z){if(z)return this.descend(z).getValue()
if(this.leaf)return this.value
if(this.deleted)return null
var A,B={},C
for(var D in this.childNodes)if(this.childNodes.hasOwnProperty(D)){if((C=this.childNodes[D].getValue())!=null){B[D]=C
A=!0}}
return A?B:null}
x.prototype.getKeys=function(){if(this.leaf){return null}
var z=[]
for(var A in this.keys)if(this.keys.hasOwnProperty(A))z.push(A)
return z}
x.prototype.gc=function(){var z=!0
for(var A in this.childNodes)if(this.childNodes.hasOwnProperty(A)){var B=this.childNodes[A]
if(B.leaf){z=!B.listeners_value.length&&B.value==null&&(delete this.keys[A],delete this.childNodes[A])&&z}
else{z=B.gc()&&(delete this.keys[A],delete this.childNodes[A])&&z}}
return z&&this.deleted&&!this.listeners_keys.length&&!this.listeners_value.length}
function y(z){var A=''
for(var B=0;B<z.length;B++){if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(z[B]))A+='.'+z[B]
else A+='['+JSON.stringify(z[B])+']'}
return A.substr(1)}
if(typeof exports!='undefined')exports.DataNode=x
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_data_DataNode"].join('')
x.prototype.__jx__fqname="jx_data_DataNode"}
return x})()
b.__$$__meshim_common_Regex=(function(){var x='[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])',y='(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)',z={email:new RegExp('^'+x+'$','i'),ip_token:new RegExp('^'+y+'$'),ip:new RegExp('^(?:'+y+'\\.){3}'+y+'$'),tld:/^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,search:{email:new RegExp('(^|\\s+)'+x,'ig'),hurl:/(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/ig,url:/(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g},file_upload:/uploaded.+\n.+https?:\/\/v2uploads\.zopim\.(com|io)\//i}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_Regex"].join('')
z.prototype.__jx__fqname="meshim_common_Regex"}
return z})()
b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition=(function(){var x={CLUSTERS:{US:['us08','us10','us12','us14','us16','us18','us20','us22','us24','us26','us28','us30','us32','us34','us36'],DE:['de04','de06','de08','de10','de12','ie02','ie04','ie06','ie08','ie10','ie12','ie14','ie16','de14','de16','de18','de20'],SG:['sg06','sg08','sg10','sg12','sg14','sg16','sg18','sg20'],JP:['jp02','jp04','jp06','jp08'],AU:['au02','au04'],BR:['br02','br04','br06','br08','br10','br12']},FALLBACKS:{US:['DE'],DE:['US'],SG:['US'],JP:['US'],AU:['SG','US'],BR:['US']},NEAR_MAP:{AL:'DE',AD:'DE',AM:'DE',AT:'DE',BY:'DE',BE:'DE',BA:'DE',BG:'DE',CH:'DE',CY:'DE',CZ:'DE',DE:'DE',DK:'DE',EE:'DE',ES:'DE',EU:'DE',FO:'DE',FI:'DE',FR:'DE',GB:'DE',GE:'DE',GI:'DE',GR:'DE',HU:'DE',HR:'DE',IE:'DE',IM:'DE',IS:'DE',IT:'DE',LT:'DE',LU:'DE',LV:'DE',MC:'DE',MK:'DE',MT:'DE',NO:'DE',NL:'DE',PO:'DE',PT:'DE',RO:'DE',SE:'DE',SI:'DE',SK:'DE',SM:'DE',TR:'DE',UA:'DE',VA:'DE',ZA:'DE',AP:'SG',BD:'SG',BN:'SG',CN:'SG',ID:'SG',IN:'SG',LA:'SG',KH:'SG',LK:'SG',MM:'SG',MY:'SG',SG:'SG',PK:'SG',TH:'SG',VN:'SG',AU:'AU',NZ:'AU',HK:'JP',KR:'JP',JP:'JP',PH:'JP',RU:'JP',TW:'JP',AR:'BR',BO:'BR',BR:'BR',CL:'BR',PE:'BR',PY:'BR',UY:'BR',DEFAULT:'US'}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_config_geo_WidgetMediatorsAccessDefinition"].join('')
x.prototype.__jx__fqname="meshim_config_geo_WidgetMediatorsAccessDefinition"}
return x})()
b.__$$__meshim_widget_controllers_GoogleAnalytics=(function(){var x=(function(){var y={OLD:'ga.js',NEW:'analytics.js'},z='Zopim Livechat',A,B,C,D
function E(){if(A||B)return !0
var K,L=window[window['GoogleAnalyticsObject']||'ga']
if(h(L)){B=L
K=!0}
if(window._gaq&&window._gat){A=window._gaq
C=window._gat
K=!0}
return K}
function F(K){if(K==y.NEW&&B){if(h(B.getAll)){return B.getAll()}}
else if(K==y.OLD&&C){if(h(C._getTrackers)){return C._getTrackers()}
else if(h(C._getTrackerByName)){return [C._getTrackerByName()]}}
return []}
function G(K,L,M){if(!E()||!K)return
if(B)H(K,L,M)
if(A)I(K,L,M)}
function H(K,L,M){D=F(y.NEW)
if(D.length){for(var N=0,O=D.length;N<O;N++){if(h(D[N].send)){if(L)D[N].send('event',M||z,K,L)
else D[N].send('event',M||z,K)}}}
else{if(L)B('send','event',M||z,K,L)
else B('send','event',M||z,K)}}
function I(K,L,M){D=F(y.OLD)
A.push(function(){for(var N=0,O=D.length;N<O;N++){if(!h(D[N]._trackEvent))continue
if(L)D[N]._trackEvent(M||z,K,L)
else D[N]._trackEvent(M||z,K)}})}
var J={trackEvent:G}
return J})()
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_GoogleAnalytics"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_GoogleAnalytics"}
return x})()
b.__$$__jx_controls_List=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__div,null,null,[[b.__$$__div,"template",null,[[b.__$$__div,null,null,[],{}]],{"id":"template","container":"default","display":"none"}],[b.__$$__div,"content",null,[],{"id":"content"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__template'),H=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var I=(function(){var K=b.__$$__jx_data_SetDataNode
F.setDataNode=T
F.setRenderer=function($m){S=$m}
F.getID=Z
F.getNextID=X
F.getPrevID=Y
F.getRowIDs=$$
F.clearList=U
F.select=$b
F.deselect=$c
F.setSort=$f
var L,M={},N={},O={},P=[],Q=0,R=!1,S=function($m){if(G.lastChild.__jx__native){var $n=G.lastChild.cloneNode(!0)
w.extend($n,!0)
return $n}
return G.lastChild.__jx__constructor($m)}
function T($m){if(L)F.autounbind(L,'keys',V)
L=$m
U()
F.autobind(L,'keys',V)}
function U(){H.empty()
M={}
P=[]
if(Q){Q=0
F.fire('jx:list:length',Q)}}
function V($m,$n){var $o=($m.length+$n.length)>2
if($o)F.removeChild(H)
var $p=Q,$q,$r,$s,$t
for($r=0;$r<$m.length;$r++){$q=$m[$r]
if($q in M)continue
var $u=S(H),$v=L.$($q)
M[$q]=$u
Q++
K.applySetDataNode($u)
$s=$d?$h($q):$q
$t=$k($s,$u)
$u.setAttribute('jx:list:rowID',$q)
$u.setDataNode($v)
W($t)}
for($r=0;$r<$n.length;$r++){$q=$n[$r]
if(!($q in M))continue
$s=$d?$h($q,!0):$q
$t=$j($s)
delete N[$s]
if(M[$q]===$_)$_=null
M[$q].destroy()
delete M[$q]
W($t)
Q--}
if($o)F.appendChild(H)
if($p!=Q)F.fire('jx:list:length',Q)
if($m.length)F.fire('jx:list:added',$m)}
function W($m){if($m<0||!(P[$m]))return
var $n=P[$m],$o=M[$n],$p,$q
if(!$o)return
if(P[$m+1]){$o.setAttribute('jx:list:nextID',P[$m+1])
$p=M[P[$m+1]]
$p.setAttribute('jx:list:prevID',$n)
$o.fire('update.neighbour',{next:P[$m+1]})
$p.fire('update.neighbour',{prev:$n})}
else{$o.removeAttribute('jx:list:nextID')
$o.fire('update.neighbour',{next:null})}
if(P[$m-1]){$o.setAttribute('jx:list:prevID',P[$m-1])
$q=M[P[$m-1]]
$q.setAttribute('jx:list:nextID',$n)
$o.fire('update.neighbour',{prev:P[$m-1]})
$q.fire('update.neighbour',{next:$n})}
else{$o.removeAttribute('jx:list:prevID')
$o.fire('update.neighbour',{prev:null})}}
function X($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:nextID')
if($n)return $n
$m=$m.parentNode}}
function Y($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:prevID')
if($n)return $n
$m=$m.parentNode}}
function Z($m){while($m.parentNode&&$m!=F){var $n=$m.getAttribute('jx:list:rowID')
if($n)return $n
$m=$m.parentNode}}
function $$(){var $m=[],$n,$o
for($n in M)if(M.hasOwnProperty($n)){$o=M[$n].getAttribute('jx:list:rowID')
if($o)$m.push($o)}
return $m}
var $_=null
function $a($m){$b($m.target)}
function $b($m){var $n,$o
if(i($m)){$o=$m
$n=M[$o]}
else if(typeof $m=='number'){$n=H.childNodes[$m]
if($n)$o=$n.getAttribute('jx:list:rowID')}
else{$n=$m
while($n.parentNode&&$n!=H){$o=$n.getAttribute('jx:list:rowID')
if($o){$n.jx_wrapper&&($n=$n.jx_wrapper)
break}
$n=$n.parentNode}}
if(!$n||$n==$_)return
$c()
$_=$n.jx_wrapper||$n
$_.addClass('active')
$_.fire('jx:list:selected')
F.fire('jx:list:select',$o)}
function $c(){$_&&$_.removeClass('active')
$_&&$_.fire('jx:list:deselected')
$_=null}
var $d,$e
function $f($m,$n){if($d!=$m||$e!=$n){$e=$n
$d=$m
if($d){if(!R){F.autobind(L,'value',$i)
R=!0}}
else{if(R){F.autounbind(L,'value',$i)
R=!1}
$e=!1}
N={}
O={}
if(Q>1)$g()}}
function $g(){var $m,$n,$o
H.innerHTML=""
P=[]
for($n in M)if(M.hasOwnProperty($n)){$m=$d?$h($n):$n
$o=$k($m,M[$n])
O[$n]=$m
N[$m]=$n
W($o)}}
function $h($m,$n){return $n?O[$m]:(L.$($m).getValue($d)+'\0'+$m).replace(/ /g,'').toLowerCase()}
function $i($m){if(!$d)return
var $n,$o,$p,$q,$r,$s
for($p in $m)if($m.hasOwnProperty($p)){$o=$m[$p]
if(O[$p]&&$o&&$o[$d]){$n=M[$p]
H.removeChild($n)
$r=O[$p]
$q=$h($p)
delete N[$r]
$s=$j($r)
W($s)
N[$q]=$p
O[$p]=$q
$s=$k($q,$n,$o[$d])
W($s)}}}
function $j($m){var $n=$l(P,$m)
if($n<0){console.log('Could not find '+$m+' in List')
return $n}
P.splice($n,1)
return $n}
function $k($m,$n){var $o=(-$l(P,$m)>>0)-1
if($o<0)if(typeof console!='undefined'&&'log' in console)console.log($m+' is already in List')
P.splice($o,0,$m)
$e&&($o=P.length-$o-1)
H.insertBefore($n.dom||$n,H.childNodes[$o]||null)
return $o}
function $l($m,$n){var $o=$m.length,$p=0,$q=$o-1,$r,$s
while($p<=$q){$r=($p+$q)/2>>0
$s=$m[$r]
if($s<$n)$p=$r+1
else if($s>$n)$q=$r-1
else return $r}
return -($p+1)}
H.on('click',$a)})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__jx_controls_List
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_controls_List"].join('')
x.prototype.__jx__fqname="jx_controls_List"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_io_Socket=(function(){var x=b.__$$__jx_data_JSON,y=b.__$$__jx_io_socket_ChunkedXHR,z=b.__$$__jx_io_socket_StreamingPostMessage,A=b.__$$__jx_io_socket_StreamingHTMLFile,B=b.__$$__jx_io_socket_WebSocket,C=b.__$$__jx_io_socket_XDomainDynScript,D=B||y||z||A||C,E=C,F=45000,G={INITIAL_RTT:1000,RECONNECT_DELAY_MS:30000,FAST_RECONNECT_MS:100,FLUSH_DELAY_MS:75,MAX_BLOCKING_TIME_MS:40}
function H(U,V,W,X){if(!D)throw 'No available transports'
this.provider=D
this.options=X=X||{}
for(var Y in G)if(G.hasOwnProperty(Y))if(!(Y in X))X[Y]=G[Y]
r.extend(this)
this.id=W||H.generateID()
this.host=U
this.ns=V
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.status='connecting'
this.connected=!1
this.quality=0
this.rtt=X.INITIAL_RTT
this.clock_skew=0
this.connect_attempts=0
this.connections=0
this.disconnects=0
this.sent_bytes=0
this.recv_bytes=0
this.sent_messages=0
this.recv_messages=0
this.sent_frames=0
this.recv_frames=0
this.lost_frames=0
this.ooo_frames=0
this.remote_seq=0
this.local_seq=0
this.timeout_server=0
this.timeout_response_soft=0
this.timeout_response_hard=0
this.bytes_at_connect=-1
this.time_last_alive=-1
this.time_last_open=-1
this.starttime=+new Date()
this.uptime=0
this.connected_time=new R()
this.idle_time=new R()
this.last_frame_time=0
this.raw_clock_skew=0
this.smooth_skewed_transit_time_in=0
this.remote_smooth_skewed_transit_time_out=0
this.drained=!0
this.buffer=[]
this.glitch_timer=this.reconnect_timer=null
this.reconnect_delay=X.RECONNECT_DELAY_MS*(Math.random()*0.2+0.8)
this.keep_alive_interval=15000
this.data_packet_queue=new S(this)
this.connect()
var Z=this
r.window.on('offline',function(){Z.onoffline()})
r.window.on('online',function(){Z.ononline()})}
H.available=function(){return !!D}
H.generateID=function(){return P(16)}
H.prototype.connect=function(U){this.debug('connect('+(U&&'glitch'||'')+')')
if(this.reconnect_timer)return
var V=this,W=this.options
if(!this.connections)this.provider=this.connect_attempts&1?E:D
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(this.socket){this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('connect')
this.socket=null}
this.connected=!1
if(U){this.reconnect_delay=W.RECONNECT_DELAY_MS*(Math.random()*0.2+0.9)
this.glitch_timer=setTimeout(function(){V.quality=0
V.glitch_timer=setTimeout(function(){V.status='reconnecting'
V.fire_break()},Q(V.rtt*3,1000,5000))},Q(this.rtt*3,1000,5000))}
this.debug('reconnect_delay: '+this.reconnect_delay)
clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.reconnect_delay=Math.min(V.reconnect_delay*1.4+1000,60000)
V.reconnect_delay*=Math.random()*0.2+0.9
V.connect()},this.reconnect_delay)
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.debug('connecting: '+this.url)
this.socket=new this.provider(this.url)
this.transport=this.provider.protocol
this.connect_attempts++
this.socket.onopen=function(){V.glitch_timer=clearTimeout(V.glitch_timer)
V.reconnect_timer=clearTimeout(V.reconnect_timer)
V.connections++
V.drained=!0
V.connected=!0
V.time_last_open=V.time_last_alive=+new Date()
if(V.uptime>=0)V.uptime-=V.time_last_open
if(V.connections==1)V.fire('open')
else V.fire_resume()
V.status='connected'
V.flush()
V.keep_alive()
V.debug('connected')
if(V.bytes_at_connect==-1)setTimeout(function(){V.bytes_at_connect=V.recv_bytes},50)}
this.socket.onmessage=function(X,Y){V.onmessage(X,Y)}
this.socket.onclose=function(X){V._onclose(X)}
this.socket.ondrain=function(X){V._ondrain(X)}
this.socket.onerror=function(X){V._onerror(X)}}
H.prototype.reconnect=function(){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.broken_reason='FORCED_RECONNECT'
this.connect()}
H.prototype.send=function(U,V){if(this.status=='disconnected')return
if(this.buffer[0]=='null')this.buffer=[]
this.buffer.push(x.stringify(U))
this.schedule_flush()
V&&this.response_timeout()}
H.prototype.close=function(U){this.debug('close()')
this.flush_scheduled=clearTimeout(this.flush_scheduled)
this.keep_alive_timer=clearTimeout(this.keep_alive_timer)
this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(!this.broken_reason)this.broken_reason='CLOSE'
this.fire_break()
this.status=U?'reconnecting':'disconnected'
this.connected=!1
this.quality=0
if(!this.socket)return
this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('close')
this.socket=null}
H.prototype.hibernate=function(){}
H.prototype.onoffline=function(){this.broken_reason='OFFLINE'
this.debug('onoffline')
this.close(!0)}
H.prototype.ononline=function(){this.debug('ononline')
if(!this.connected){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.connect()}}
H.prototype.schedule_flush=function(){if(this.flush_scheduled||!this.drained||!this.connected)return
var U=this,V=this.options
this.flush_scheduled=setTimeout(function(){U.flush()},V.FLUSH_DELAY_MS)}
H.prototype.flush=function(){if(!this.buffer.length||!this.drained||!this.connected)return
var U=this.buffer
this.sent_messages+=U.length
this.sent_frames++
U=this.generate_frame(U.join('\n'))
this.drained=this.socket.send(U)
this.sent_bytes+=U.length
this.flush_scheduled=!1
this.buffer=[]
this.keep_alive()
this.time_last_alive=+new Date()}
H.prototype.keep_alive=function(){clearTimeout(this.keep_alive_timer)
var U=this
this.keep_alive_timer=setTimeout(function(){U.debug('pong!')
U.send(null)},this.keep_alive_interval)}
H.prototype.response_timeout=function(){if(this.response_timer)return
var U=this,V=Q(this.rtt*4+this.options.FLUSH_DELAY_MS,2000,20000)
this.response_timer=setTimeout(function(){U.timeout_response_soft++
U.debug('response timeout, '+V+'ms')
U.fire_break('SOFT_RESPONSE_TIMEOUT')
U.response_timer=setTimeout(function(){U.timeout_response_hard++
U.debug('response timeout - reconnecting')
U.broken_reason='HARD_RESPONSE_TIMEOUT'
U.connect(!0)},V*2)},V)}
H.prototype.reset_server_timeout=function(){clearTimeout(this.timeout_timer)
var U=this,V=this.keep_alive_interval*4+Q(U.rtt*4,2000,20000)
this.timeout_timer=setTimeout(function(){U.timeout_server++
U.debug('server '+V+'ms timeout, reconnecting')
U.broken_reason='SERVER_TIMEOUT'
U.connect(!0)},V)}
H.prototype.fire_break=function(U){this.broken||this.fire('break',U||this.broken_reason)
this.broken=!0
this.broken_reason=''
if(this.uptime<0)this.uptime+=+new Date()}
H.prototype.fire_resume=function(){this.broken_reason=''
this.broken&&this.fire('resume')
this.broken=!1
if(this.uptime>=0)this.uptime-=+new Date()}
H.prototype.onmessage=function(U,V){this.recv_bytes+=U.length
U=U.split('\n')
if(U.length<6){this.debug('Bad data: '+U.join('\n'))
return}
var W=+new Date(),X=+U[0],Y=+U[1],Z=+U[2],$$=+U[3],$_=U[4]
this.calculate_clocks(V||+new Date(),X,Y)
this.reset_server_timeout()
$$
switch($_){case 'a':this.broken_reason='ABORT'
this.close()
break
case 'd':this.response_timer=clearTimeout(this.response_timer)
this.fire_resume()
this.check_sequence(Z)
this.data_packet_queue.queueFrame(U,5,W)
break
case 'e':this.debug('server: Are you still there?')
this.send(null)
break
case 'n':this.remote_seq=Z
this.keep_alive_interval=+U[5]||15000
this.debug('keep_alive is '+this.keep_alive_interval+'ms')
if(this.connections>1)this.fire('reopen')
break
case 'p':this.debug('ping!')
break}}
H.prototype._onclose=function(U){var V=this,W=this.options
if(this.connections==0&&this.disconnects==0)this.fire('close')
this.debug('_onclose')
this.disconnects++
this.broken_reason='HANGUP'
if(this.connected)this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.connect(!0)},W.FAST_RECONNECT_MS)
else if(!this.connections&&this.connect_attempts==1){clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){V.reconnect_timer=null
V.connect()},0)}
this.connected=!1
clearTimeout(this.keep_alive_timer)
if(this.time_last_alive>0)this.idle_time.add(+new Date()-this.time_last_alive)
if(this.time_last_open>0)this.connected_time.add(+new Date()-this.time_last_open)
this.time_last_alive=this.time_last_open=-1
if(this.uptime<0)this.uptime+=+new Date()}
H.prototype._ondrain=function(){this.drained=!0
this.flush()}
H.prototype._onerror=function(U){this.debug('_error')
this.fire('error',U)}
H.prototype.generate_frame=function(U,V){return [+new Date(),this.smooth_skewed_transit_time_in,(++this.local_seq),this.remote_seq,V||'d',U].join('\n')}
var I=0.1,J=50,K=1000,L=Math.pow(J,I),M=Math.pow(K,I)-L
H.prototype.calculate_clocks=function(U,V,W){var X=U-V,Y=U-this.last_frame_time,Z=1/(Y/F+1)
if(this.smooth_skewed_transit_time_in)this.smooth_skewed_transit_time_in=Z*this.smooth_skewed_transit_time_in+(1-Z)*X
else this.smooth_skewed_transit_time_in=X
this.remote_smooth_skewed_transit_time_out=W
if(this.smooth_skewed_transit_time_in&&this.remote_smooth_skewed_transit_time_out){this.rtt=this.smooth_skewed_transit_time_in+this.remote_smooth_skewed_transit_time_out
this.quality=~~(100*(1-(Math.pow(this.rtt,I)-L)/M))
this.quality=Math.min(100,Math.max(0,this.quality))
this.raw_clock_skew=X-this.rtt/2
if(this.clock_skew)this.clock_skew=0.9*this.clock_skew+0.1*this.raw_clock_skew
else this.clock_skew=this.raw_clock_skew}
this.time_last_alive=this.last_frame_time=U}
H.prototype.check_sequence=function(U){if(this.remote_seq+1==U)this.remote_seq=U
else if(this.remote_seq<U){var V=U-this.remote_seq+1
this.lost_frames+=V
this.fire('lost',V)
this.remote_seq=U}
else{this.ooo_frames++
this.fire('out_of_order')}}
D&&(H.prototype.transport=D.protocol)
H.prototype.debug=function(){}
var N="+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function O(){var U=N,V=new Date(),W=V.getUTCFullYear()-2000,X=V.getUTCMonth()+1,Y=V.getUTCDate(),Z=V.getUTCHours(),$$=V.getUTCMinutes(),$_=V.getUTCSeconds(),$a=V.getUTCMilliseconds()
return U[W]+U[X]+U[Y]+U[Z]+U[$$]+U[$_]+U[$a>>6]+U[$a&63]}
function P(U){var V='',W=N
while(U-->0)V+=W.charAt(Math.floor(Math.random()*W.length))
return V}
H.genDate=O
H.genID=P
function Q(U,V,W){return Math.min(W,Math.max(V,U))}
function R(){this.count=0
this.sum=0
this.sq_sum=0
this.mean=0
this.stddev=0}
R.prototype.add=function(U){this.count++
this.sum+=U
this.sq_sum+=U*U
this.mean=this.sum/this.count
this.stddev=Math.sqrt(this.sq_sum/this.count-this.mean*this.mean)}
function S(U){this.socket=U
this.queue=[]
this.curFrame=null
this.curIdx=0
this.processing=!1}
var T=S.prototype
T.queueFrame=function(U,V,W){this.queue.push({msgs:U,start_idx:V,receive_time:W})
this.process()}
T.process=function(){if(this.processing)return
this.processing=!0
this.work()}
T.work=function(){var U=(+new Date())+this.socket.options.MAX_BLOCKING_TIME_MS,V=!1,W,X,Y,Z=this.socket.recv_frames
for(var $$=0;$$<this.queue.length;$$++){W=this.queue[$$]
if(!('start_time' in W)){W.start_time=+new Date()
W.ticks=0
W.idx=W.start_idx}
W.ticks++
X=W.msgs
Y=X.length
while(W.idx<Y){var $_=+new Date(),$a
if($_>U){V=!0
break}
this.socket.dispatch_delay=$_-W.receive_time
try {$a=x.parse(X[W.idx])
W.idx++}catch($b){this.socket.debug("Invalid json message: "+X[W.idx])
continue}
this.socket.fire('message',$a)
this.socket.recv_messages++}
if(W.idx>=Y){this.socket.recv_frames++}
if(V)break}
this.queue.splice(0,this.socket.recv_frames-Z)
if(this.queue.length){l(this.work,this)}
else{this.processing=!1}}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","jx_io_Socket"].join('')
H.prototype.__jx__fqname="jx_io_Socket"}
return H})()
b.__$$__meshim_common_ChainedValueDataNode=(function(){var x=b.__$$__jx_data_DataNode
function y(){var B=[].slice.call(arguments)
if(B.length<1)throw 'Invalid chain: <empty>'
var C=null
if(typeof (B[B.length-1])==='string')C=B.pop()
x.call(this,'chained$value')
this._chain=B
this._default_primitive=C
this._leafNodeValueCheck=A(this._leafNodeValueCheck,this)}
var z=y.prototype=e(x.prototype)
z.bindValue=function(){if(this.listeners_value.length===0)for(var B=this._chain.length;B--;)this._chain[B].bindValue(this._leafNodeValueCheck)
x.prototype.bindValue.apply(this,arguments)}
z.unbindValue=function(){x.prototype.unbindValue.apply(this,arguments)
if(this.listeners_value.length===0)for(var B=this._chain.length;B--;)this._chain[B].unbindValue(this._leafNodeValueCheck)}
z.getChainedValue=function(){for(var B=0,C=this._chain.length;B<C;B++){var D=this._chain[B].getValue()
if(D)return D}
return this._default_primitive}
z._leafNodeValueCheck=function(){this.update(this.getChainedValue())}
function A(B,C){return function(){B.apply(C,arguments)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_ChainedValueDataNode"].join('')
y.prototype.__jx__fqname="meshim_common_ChainedValueDataNode"}
return y})()
b.__$$__meshim_widget_controllers_Cookie=(function(){var x=b.__$$__jx_data_JSON,y={set:F,get:D,getJSONCookie:E,setJSONCookie:G,remove:H},z=window.encodeURIComponent,A=window.decodeURIComponent
function B(I){if(typeof I!='string'||I==='')return !1
return !0}
function C(){var I=document.cookie,J={},K,L,M,N,O
if(typeof I!=='string'||I==='')return {}
I=I.split(/;\s/g)
for(K=0,L=I.length;K<L;K++){try {M=I[K].match(/([^=]+)=/i)
if(M instanceof Array){N=A(M[1])
O=A(I[K].substr(M[1].length+1))}
else{N=A(M)
O=""}
J[N]=O}catch(P){;}
;}
return J}
function D(I){if(!B(I))return null
var J=C()
if(J[I])return J[I]
else return null}
function E(I){var J=D(I),K={}
try {K=x.parse(J)}catch(L){;}
if(!K||typeof K!='object')return {}
else return K}
function F(I,J,K){K=K||{}
var L=z(I)+'='+z(J)
if('ttl' in K){var M=new Date(),N=K.ttl*24*60*60*1000
M.setTime(M.getTime()+N)
L+='; expires='+M.toGMTString()}
if('path' in K)L+='; path='+K.path
if('domain' in K)L+='; domain='+K.domain
if(K.secure)L+='; secure'
document.cookie=L}
function G(I,J,K){if(typeof J!='object')J=={}
F(I,x.stringify(J),K)}
function H(I,J){J=J||{}
J.ttl=-1
F(I,"",J)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Cookie"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_Cookie"}
return y})()
b.__$$__meshim_widget_controllers_DOMStorage=(function(){var x=b.__$$__jx_data_JSON,y={},z=window,A=z.document,B='localStorage',C='__storejs__',D
y.disabled=!1
y.set=function(){}
y.get=function(){}
y.remove=function(){}
y.clear=function(){}
y.transact=function(L,M,N){var O=y.get(L)
if(N==null){N=M
M=null}
if(typeof O=='undefined'){O=M||{}}
N(O)
y.set(L,O)}
y.getAll=function(){}
y.serialize=function(L){return x.stringify(L)}
y.deserialize=function(L){if(typeof L!='string'){return a}
try {return x.parse(L)}catch(M){return L||a}}
function E(){try {return (B in z&&z[B])}catch(L){return !1}}
if(E()){D=z[B]
y.set=function(L,M){if(M===a){return y.remove(L)}
D.setItem(L,y.serialize(M))
return M}
y.get=function(L){return y.deserialize(D.getItem(L))}
y.remove=function(L){D.removeItem(L)}
y.clear=function(){D.clear()}
y.getAll=function(){var L={}
for(var M=0;M<D.length;++M){var N=D.key(M)
L[N]=y.get(N)}
return L}}
else if(A.documentElement.addBehavior){var F,G
try {G=new window.ActiveXObject('htmlfile')
G.open()
G.write('<s'+'cript>document.w=window</s'+'cript><iframe src="/favicon.ico"></frame>')
G.close()
F=G.w.frames[0].document
D=F.createElement('div')}catch(L){D=A.createElement('div')
F=A.body}
function H(L){return function(){try {var M=Array.prototype.slice.call(arguments,0)
M.unshift(D)
F.appendChild(D)
D.addBehavior('#default#userData')
D.load(B)
var N=L.apply(y,M)
F.removeChild(D)
return N}catch(O){;}}}
var I=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")
function J(L){return L.replace(I,'___')}
y.set=H(function(L,M,N){M=J(M)
if(N===a){return y.remove(M)}
L.setAttribute(M,y.serialize(N))
L.save(B)
return N})
y.get=H(function(L,M){M=J(M)
return y.deserialize(L.getAttribute(M))})
y.remove=H(function(L,M){M=J(M)
L.removeAttribute(M)
L.save(B)})
y.clear=H(function(L){var M=L.XMLDocument.documentElement.attributes
L.load(B)
for(var N=0,O;O=M[N];N++){L.removeAttribute(O.name)}
L.save(B)})
y.getAll=H(function(L){var M=L.XMLDocument.documentElement.attributes,N={}
for(var O=0,P;P=M[O];++O){var Q=J(P.name)
N[P.name]=y.deserialize(L.getAttribute(Q))}
return N})}
try {y.set(C,C)
if(y.get(C)!=C){y.disabled=!0}
y.remove(C)}catch(L){y.disabled=!0}
y.enabled=!y.disabled
var K=y
if((typeof K==='function')&&K.prototype&&!K.__jx__no_fqname){K.prototype.__jx__fqname_chain=[(K.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DOMStorage"].join('')
K.prototype.__jx__fqname="meshim_widget_controllers_DOMStorage"}
return K})()
b.__$$__meshim_widget_Config=(function(){var x=b.__$$__meshim_common_QueryString,y=E(),z=document.location.protocol+'//v2.zopim.com/widget',A=z+'/images',B=z+'/sounds',C=z+'/fonts'
c.baseURL=q.secureURL(y.baseURL)
var D={ASSETS_URL:z,IMAGES_URL:A,SOUNDS_URL:B,FONTS_URL:C,ASSETS_LEGACY:document.location.protocol+'//cdn.zopim.com/assets',BRANDING_URL:'https://www.zopim.com',AVATARS:{CONCIERGE:A+'/avatar_simple_agent.png',AGENT:A+'/avatar_simple_agent.png',VISITOR:A+'/avatar_simple_visitor.png',DEFAULT:A+'/avatar_simple_visitor.png'},ACCOUNT_KEY:y.accountKey,BRAND_DOMAIN:y.brandDomain,COUNTRY_CODE:G(),AUTH_URL:'https://www.zopim.com/auth/$NAME/$KEY-$MID',AUTH_LOGOUT_URL:'https://www.zopim.com/auth/logout/$KEY-$MID',IS_POPOUT:window.$zopim_popout,POPOUT_WINDOW_PREFIX:'zlivechatpopout_',POPOUT_URL:'https://v2.zopim.com/widget/livechat.html',FILE_UPLOAD_PATH:'/client/widget/uploads',FILE_UPLOAD_MAX:5*1024*1024,RESEND_MSG_TIMEOUT:5000,FILE_REPLACE_SOURCE:/^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,FILE_REPLACE_RESULT:'$1io$2',CHAT_LOG_REMEMBER_COUNT:10}
function E(){var H=F(),I=[/\/?[?]/,/\/livechat\//],J=[]
for(var K=0;K<I.length;K++){J=H.split(I[K])
if(J.length)break}
var L=J[1],M=J[0],N=M.replace(/^(https?:)?\/\//i,'').split('/')[0],O=N.replace(/(.+\.)(?=.+\..+)/,''),P=J[0].split('/')
if(P.pop()==N){P=J[0]}
else{P=P.join('/')}
var Q=x.parseQuery(window.location.hash.replace(/^#/,'')).get('__zopim_widget_key')
if(Q)L=Q
return {accountKey:L,brandDomain:O,baseURL:P}}
function F(){if(window.$zopim&&window.$zopim.s)return window.$zopim.s.src
var H,I=document.getElementsByTagName('script'),J=/.*zopim.(com|net)\//
for(var K=0,L=I.length;K<L;K++){H=I[K].src||''
if(J.test(H))return H}
return ''}
function G(){var H='VN'.toUpperCase()
if(H.charAt(0)=='<')H='geo'
return H}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_Config"].join('')
D.prototype.__jx__fqname="meshim_widget_Config"}
return D})()
b.__$$__jx_ui_HTMLElement=(function(){var x=b.__$$__jx_ui_HTMLEvent
if(q.isIE)document.execCommand('BackgroundImageCache',!1,!0)
var y='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor min-height min-width max-height max-width'.split(' '),z='title checked href media name src target'.split(' '),A=q.bugs.ie.cssFixed
function B(K){return (function(L){try {this.dom.style[K]=L}catch(M){;}
return this})}
function C(K){return (function(L){this.dom.setAttribute(K,L)
return this})}
function D(K){return (i(K)&&K.substr(K.length-1)=='%')?parseInt(K,10)+'%':parseInt(K,10)}
function E(){if(E.alreadyHacked)return
E.alreadyHacked=1
if(q.isStrict){document.body.parentNode.style.background='#fff url(https://) fixed'
document.body.className=document.body.className}
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var K=document.createElement('div'),L=K.style,M=document.body.currentStyle,N=!1,O=0,P,Q
L.backgroundAttachment=M.backgroundAttachment
L.backgroundColor=M.backgroundColor
L.backgroundImage=M.backgroundImage
L.backgroundPositionX=M.backgroundPositionX
L.backgroundPositionY=M.backgroundPositionY
L.backgroundRepeat=M.backgroundRepeat
L.position='absolute'
L.zIndex=-1
L.top=L.left=0
L.width='100%'
document.body.insertBefore(K,document.body.firstChild)
var R=function(){if(!N&&O){P+=document.body.clientWidth-O
L.width=P+'px'
O=document.body.clientWidth}
if(Q)return
Q=setTimeout(function(){L.width=0
document.body.className=document.body.className
P=Math.max(document.body.scrollWidth,document.body.clientWidth)
L.width=P+'px'
O=document.body.clientWidth
N=document.body.scrollWidth>document.body.clientWidth
Q=null},0)}
setTimeout(R,0)
L.setExpression('height','document.body.scrollHeight+"px"')
R()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function F(K){K=K.split(/[^a-zA-Z0-9]/)
for(var L=1;L<K.length;L++)if(K[L].length)K[L]=K[L].substr(0,1).toUpperCase()+K[L].substr(1)
return K.join('')}
function G(K){while(K.defaultPlacement)K=K.defaultPlacement
return K}
function H(K,L,M,N,O){if(!(this instanceof H))return new H(K,L,M,N,O)
if(!K){return}
if(!O){O={}}
this.jx_id=L=L||w.generateID()
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=K.ownerDocument
this.parentNode=K
this.attributes=O
this.tagName=O.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
x.call(this)
N&&this.addChildren(N)
K.appendChild(K instanceof H?this:this.dom)
this.setStyle(M)
this.setAttributes(O)
this.__jx__fqname&&this.addClass(this.__jx__fqname)
L&&w.set(L,this)}
H.prototype=e(x.prototype)
H.prototype.addChildren=function(K){var L=K&&K.length
if(!K||!L)return
var M=G(this),N,O=M.ownerDocument,P
for(var Q=0;Q<L;Q++){N=K[Q]
if(g(N))M.appendChild(N)
else{P=O.createTextNode(N)
M.appendChild(P)
if(typeof N.bind=='function')N.bind(P)}}}
H.prototype.appendChild=function(K){if(g(K)){return K[0](this,K[1],K[2],K[3],K[4])}
if(f(K,this.children)==-1&&K.nodeType!=3)this.children.push(K)
if(K.parentNode&&K.parentNode!=this)K.parentNode.removeChild(K.parentNode instanceof H?K:(K.dom||K))
K.dom&&(K.parentNode=this)
this.dom.appendChild(K.dom||K)
return K}
H.prototype.removeChild=function(K){try {if(K.dom){this.dom.removeChild(K.dom)
K.parentNode=null}
else this.dom.removeChild(K)
var L=f(K,this.children)
if(L!=-1)return this.children.splice(L,1)}catch(M){;}}
H.prototype.insertBefore=function(K,L){var M=f(L,this.children)
if(L&&M==-1){L=null}
if(K.parentNode){var N=f(K,this.children)
if(N!=-1){this.children.splice(N,1)
if(M>N)M--}
else{K.parentNode.removeChild(K)}}
K.dom&&(K.parentNode=this)
if(!L)this.children.push(K)
else this.children.splice(M,0,K)
this.dom.insertBefore(K.dom||K,L?(L.dom||L):null)}
H.prototype.insertAfter=function(K,L){this.insertBefore(K,L&&L.getNextSibling())}
H.prototype.prependTo=function(){}
H.prototype.cloneNode=function(K){return this.dom.cloneNode(K)}
H.prototype.getNextSibling=function(){return this.dom.nextSibling&&this.dom.nextSibling.jx_wrapper}
H.prototype.getPreviousSibling=function(){return this.dom.previousSibling&&this.dom.previousSibling.jx_wrapper}
H.prototype.getFirstChild=function(){return this.dom.firstChild&&this.dom.firstChild.jx_wrapper}
H.prototype.getLastChild=function(){return this.dom.lastChild&&this.dom.lastChild.jx_wrapper}
var I=q.isTextContent
H.prototype.getText=function(){return this.dom.textContent||this.dom.innerText||''}
H.prototype.setText=function(K){if(!this.dom)return
v&&v.unbind&&v.unbind(this.dom)
if(K&&typeof K.bind=='function')K.bind(this.dom)
if(I)this.dom.textContent=K
else this.dom.innerText=K
return this}
H.prototype.getHTML=function(){return this.dom.innerHTML}
H.prototype.setHTML=function(K){this.dom.innerHTML=K
return this}
H.prototype.destroy=function(){if(this._destructors){for(var K=this._destructors,L=K.length,M=0;M<L;M++)K[M].call(this)}
this._autobinds&&this.autounbind()
this.dom.jx_wrapper=null
typeof this.empty=='function'&&this.empty()
this.parentNode&&this.parentNode.removeChild(this.parentNode instanceof H?this:this.dom)
this.parentNode=null
w.unset(this)}
H.prototype.empty=function(){var K
while(this.children.length){K=this.children.pop()
if(typeof K.destroy=='function')K.destroy()
else if(K.nodeType==1)w.proto.destroy.call(K)}}
H.prototype.onDestruction=function(K){(this._destructors||(this._destructors=[])).push(K)}
H.prototype.getClassName=H.prototype.getClass=function(){return this.dom.className}
H.prototype.setClassName=H.prototype.setClass=function(K,L){this.dom.className=(L?K:this.__jx__fqname+' '+K)+(this._pseudo?' '+this._pseudo:'')
return this}
H.prototype.setAddClass=H.prototype.addClass=function(K){if(!K)return this
if(this.dom.className){if(!this.hasClass(K)){this.dom.className+=' '+K}}
else{this.dom.className=K}
return this}
H.prototype.removeClass=function(K){if(!K||!this.dom.className||!this.hasClass(K))return this
this.dom.className=(' '+this.dom.className+' ').replace(' '+K+' ',' ').slice(1,-1)
return this}
H.prototype.hasClass=function(K){return !!K&&!!this.dom.className&&(' '+this.dom.className+' ').indexOf(' '+K+' ')!=-1}
H.prototype.autobind=function(K,L,M){if(!this._autobinds){return}
this._autobinds.push([K,L,M])
K.on(L,M)}
H.prototype.autounbind=function(K,L,M){if(!this._autobinds){return}
var N=this._autobinds,O,P
if(K&&L&&M){for(O=N.length-1;O>=0;O--){P=N[O]
if(P[0]==K&&P[1]==L&&P[2]==M){N.splice(O,1)
P[0].un(P[1],P[2])
return}}
return}
if(!K&&!L&&!M){if(!N)return
for(O=N.length-1;O>=0;O--){P=N[O]
P[0].un(P[1],P[2])}
delete this._autobinds
return}}
H.prototype.getAttribute=function(K){return this.dom.getAttribute(K)||this.dom[K]}
H.prototype.setAttribute=function(K,L){this.dom.setAttribute(K,L)
return this}
H.prototype.removeAttribute=function(K){this.dom.removeAttribute(K)
return this}
H.prototype.setAttributes=function(K){var L,M
for(M in K)if(K.hasOwnProperty(M)){L='set'+M.substr(0,1).toUpperCase()+M.substr(1)
if(typeof this[L]=='function')this[L](K[M])}
return this}
H.prototype.getStyle=function(K){return this.dom.style[F(K)]}
H.prototype.getComputedStyle=function(K){K=K&&F(K)
var L
if(window.getComputedStyle)L=window.getComputedStyle(this.dom,null)
else if(this.dom.currentStyle)L=this.dom.currentStyle
else return
return K?L[K]:L}
H.prototype.setStyle=function(K){var L,M
if(arguments.length==1&&i(K)){if(!K)return this
K=K.split(';')
for(L=0;L<K.length;L++){if(K[L].match(/^\s*$/))continue
M=K[L].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!M&&K[L].length){continue}
this.setOneStyle(M[1],M[2])}}
else if(arguments.length==1&&typeof (K)=='object'){for(var N in K)if(K.hasOwnProperty(N))this.setOneStyle(N,K[N])}
else if(arguments.length>1){for(L=0;L<arguments.length;L+=2)this.setOneStyle(arguments[L],arguments[L+1])}
return this}
H.prototype.setOneStyle=function(K,L){var M=F('set-'+K)
if(typeof this[M]=='function')this[M](L)
else this.setCSSStyle(K,L)
return this}
H.prototype.setCSSStyle=function(K,L){try {this.dom.style[F(K)]=L}catch(M){;}
return this}
H.prototype.getScrollWidth=function(){return this.dom.scrollWidth}
H.prototype.getScrollHeight=function(){return this.dom.scrollHeight}
H.prototype.getClientWidth=function(){return this.dom.clientWidth}
H.prototype.getClientHeight=function(){return this.dom.clientHeight}
H.prototype.getTop=function(){return this.dom.offsetTop}
H.prototype.getLeft=function(){return this.dom.offsetLeft}
H.prototype.getWidth=function(){return this.dom.offsetWidth}
H.prototype.getHeight=function(){return this.dom.offsetHeight}
H.prototype.setTop=function(K){this._top=D(K)
this.solveConstraints()
return this}
H.prototype.setLeft=function(K){this._left=D(K)
this.solveConstraints()
return this}
H.prototype.setBottom=function(K){this._bottom=D(K)
this.solveConstraints()
return this}
H.prototype.setRight=function(K){this._right=D(K)
this.solveConstraints()
return this}
H.prototype.setWidth=function(K){this._width=D(K)
this.solveConstraints()
return this}
H.prototype.setHeight=function(K){this._height=D(K)
this.solveConstraints()
return this}
H.prototype.getScrollLeft=function(){return this.dom.scrollLeft}
H.prototype.setScrollLeft=function(K){this.dom.scrollLeft=K
return this}
H.prototype.getScrollTop=function(){return this.dom.scrollTop}
H.prototype.setScrollTop=function(K){this.dom.scrollTop=K
return this}
H.prototype.setFloat=function(K){var L=this
if(v&&v.onLanguage&&!this._onLanguageFloat){v.onLanguage&&v.onLanguage(M)
this.onDestruction(function(){v.unLanguage&&v.unLanguage(M)})
this._onLanguageFloat=!0}
M()
function M(){var N=(v&&v.flip)?v.flip(K):K
if(q.isIE)L.dom.style.styleFloat=N
else L.dom.style.cssFloat=N}
return this}
H.prototype.solveConstraints=function(){if(!isNaN(this._top)&&!isNaN(this._height))this._bottom=NaN
if(!isNaN(this._left)&&!isNaN(this._width))this._right=NaN;(this._width<0)&&(this._width=0);(this._height<0)&&(this._height=0)
this.applyConstraints()}
H.prototype.applyConstraints=function(){var K=this.dom.style,L=this
if(!w.hasParentNode(this.dom))return
if(q.bugs.ie.cssFixed&&this._position=='fixed'){l(function(){L.dom&&L.hackFixed()})
return}
if(q.bugs.ie.cssBottomRight&&((!isNaN(this._left)&&!isNaN(this._right))||(!isNaN(this._top)&&!isNaN(this._bottom)))){if(this.appendToParent)this.appendToParent(!0)
E()
var M=isNaN(this._left)?'':this._left,N=isNaN(this._right)?'':this._right,O=isNaN(this._width)?'':this._width,P,Q=isNaN(this._top)?'':this._top,R=isNaN(this._bottom)?'':this._bottom,S=isNaN(this._height)?'':this._height,T,U=this.dom.ownerDocument.compatMode=='BackCompat'
if(this._position=='fixed'&&this.dom.ownerDocument==document){if(U){T='document.body.clientHeight'
P='document.body.clientWidth'}
else{T='document.documentElement.clientHeight'
P='document.documentElement.clientWidth'}}
else{T='this.offsetParent.clientHeight'
P='this.offsetParent.clientWidth'}
if(q.isIE6){if(!isNaN(this._left)&&!isNaN(this._right)){N=''
O=[P,this._left,this._right].join('-')}
if(!isNaN(this._top)&&!isNaN(this._bottom)){R=''
S=[T,this._top,this._bottom].join(' - ')}}
var V=function(Y,Z){K[Y]=''
K.removeExpression(Y)
if(typeof (Z)=='number')K[Y]=Z+'px'
else if(i(Z)&&Z.substr(Z.length-1)=='%')K[Y]=Z
else if(i(Z)&&Z.length)K.setExpression(Y,Z)}
V('left',M)
V('right',N)
V('width',O)
V('top',Q)
V('bottom',R)
V('height',S)}
X()
W()
function W(){K.top=i(L._top)?L._top:isNaN(L._top)?'':L._top+'px'
K.bottom=i(L._bottom)?L._bottom:isNaN(L._bottom)?'':L._bottom+'px'
if(L._height!=L.__height){K.height=i(L._height)?L._height:isNaN(L._height)?'':L._height+'px'
L.__height=L._height}}
function X(){K.left=i(L._left)?L._left:isNaN(L._left)?'':L._left+'px'
K.right=i(L._right)?L._right:isNaN(L._right)?'':L._right+'px'
if(L._width!=L.__width){K.width=i(L._width)?L._width:isNaN(L._width)?'':L._width+'px'
L.__width=L._width}}}
H.prototype.hackFixed=function(){var K=this.dom.style
E()
if(this.appendToParent)this.appendToParent(!0)
if(this._bottom<0)this._bottom=0
if(this._right<0)this._right=0
p.ok(isNaN(this._left)!=isNaN(this._right),'One and only one of left/right must be set')
p.ok(isNaN(this._top)!=isNaN(this._bottom),'One and only one of top/bottom must be set')
p.ok(!isNaN(this._width),'Width must be set')
p.ok(!isNaN(this._height),'Height must be set')
p.ok(this.ownerDocument==document,'Fixed element must be top level element')
if(this._height!=this.__height){K.height=this._height+'px'
this.__height=this._height}
if(this._width!=this.__width){K.width=this._width+'px'
this.__width=this._width}
var L=this.getHeight(),M=this.getWidth(),N,O,P,Q
if(q.isQuirks){Q='document.body.clientHeight'
P='document.body.clientWidth'
N='(dummye34cf6=document.body.scrollLeft)+'
O='(dummye34cf6=document.body.scrollTop )+'}
else{Q='document.documentElement.clientHeight'
P='document.documentElement.clientWidth'
N='(dummye34cf6=document.documentElement.scrollLeft)+'
O='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN(this._left))N+=this._left
else if(i(this._left))N+=parseInt(this._left,10)/100*(q.isQuirks?document.body:document.documentElement).clientWidth
else N+=P+'-'+(M+this._right)
if(!isNaN(this._top))O+=this._top
else if(i(this._top))O+=parseInt(this._top,10)/100*(q.isQuirks?document.body:document.documentElement).clientHeight
else O+=Q+'-'+(L+this._bottom)
if(q.isIE6&&document.body.currentStyle.direction=='rtl'){if(q.isQuirks)N+='-(document.body.scrollWidth-document.body.clientWidth)'
else N+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
K.setExpression('left',N+'+"px"')
K.setExpression('top',O+'+"px"')}
H.prototype.dock=function(K,L,M){this.pos=K
if(j(L))this.offsetx=L
if(j(M))this.offsety=M
this.doDock()
this.on('jx:resize',this.doDock)}
H.prototype.doDock=function(){var K=isNaN(this._width)?this.dom.offsetWidth:this._width,L=isNaN(this._height)?this.dom.offsetHeight:this._height,M,N,O,P,Q,R,S
M=N=O=P=NaN
Q=R=S=0
switch(this.pos.charAt(0)){case 't':M=0
break
case 'm':M='50%'
break
case 'b':N=0
break}
switch(this.pos.charAt(1)){case 'l':O=0
break
case 'c':O='50%'
break
case 'r':P=0
break}
if(M=='50%')Q=-(L/2)
if(O=='50%')R=-(K/2)
if(this.offsety>=0||!isNaN(M)||typeof (M)=="string")Q+=this.offsety
else S=-this.offsety
R+=this.offsetx
this.setMargin([Q+'px',0,S+'px',R+'px'].join(' ')).setTop(M).setBottom(N).setLeft(O).setRight(P)}
H.prototype.setBounds=function(K){if(!g(K)){K=K.split(' ')
K[0]=parseInt(K[0],10)
K[1]=parseInt(K[1],10)
K[2]=parseInt(K[2],10)
K[3]=parseInt(K[3],10)}
if(A){K[1]=Math.max(0,K[1])
K[2]=Math.max(0,K[2])}
this._bounds=K
return this}
H.prototype.setSnaps=function(K){if(!g(K)){K=K.split(' ')
K[0]=parseInt(K[0],10)
K[1]=parseInt(K[1],10)
K[2]=parseInt(K[2],10)
K[3]=parseInt(K[3],10)}
this._snaps=[Math.max(0,K[0]),Math.max(0,K[1]),Math.max(0,K[2]),Math.max(0,K[3])]
return this}
H.prototype.applyBounds=function(){if(!this._bounds)return
if(this._left<this._bounds[3]+this._snaps[3])this._left=this._bounds[3]
if(this._right<this._bounds[1]+this._snaps[1])this._right=this._bounds[1]
if(this._top<this._bounds[0]+this._snaps[0])this._top=this._bounds[0]
if(this._bottom<this._bounds[2]+this._snaps[2])this._bottom=this._bounds[2]
var K=q.isQuirks?document.body:document.documentElement,L=isNaN(this._width)?this.dom.offsetWidth:this._width,M=K.clientWidth-L,N=K.clientHeight-this.dom.offsetHeight
if(M-this._left<=this._bounds[1]+this._snaps[1])this._left=M-this._bounds[1]
if(M-this._right<=this._bounds[3]+this._snaps[3])this._right=M-this._bounds[3]
if(N-this._top<=this._bounds[2]+this._snaps[2])this._top=N-this._bounds[2]
if(N-this._bottom<=this._bounds[0]+this._snaps[0])this._bottom=N-this._bounds[0]}
H.prototype.moveTo=function(K,L){this._bottom=this._right=NaN
this._top=L
this._left=K
this.applyBounds()
this.applyConstraints()
return this}
H.prototype.move=function(K,L){if(isNaN(this._left)&&isNaN(this._right))this._left=0
if(isNaN(this._top)&&isNaN(this._bottom))this._top=0
if(!isNaN(this._left))this._left+=K
if(!isNaN(this._right))this._right-=K
if(!isNaN(this._top))this._top+=L
if(!isNaN(this._bottom))this._bottom-=L
this.applyBounds()
this.applyConstraints()}
H.prototype.resizeBy=function(K,L,M,N){if(K){if(isNaN(this._width))this._width=this.dom.offsetWidth
this._width=Math.max(M||0,this._width+K)}
if(L){if(isNaN(this._height))this._height=this.dom.offsetHeight
this._height=Math.max(N||0,this._height+L)}
this.applyBounds()
this.applyConstraints()
this.fire('jx:resize')
return this}
H.prototype.setVisible=function(K){if(K=='none'||K=='block')this.useDisplay=!0
if(K=='none'||K=='hidden'||K=='false'||!K)this.hide()
else this.show()
return this}
H.prototype.isVisible=function(){var K=this.dom.style
if(this.useDisplay)return K.display!='none'
else return K.visibility=='visible'}
H.prototype.show=function(){var K=this.dom.style
if(this.useDisplay){if(K.display!=(this._initialDisplay||'block')){K.display=this._initialDisplay||'block'
this.fire('show')}}
else{if(K.visibility!='visible'){K.visibility='visible'
this.fire('show')}}
return this}
H.prototype.hide=function(){var K=this.dom.style
if(this.useDisplay){if(K.display!='none'){this._initialDisplay=(K.display!='none')&&K.display
K.display='none'
this.fire('hide')}}
else{if(K.visibility!='hidden'){K.visibility='hidden'
this.fire('hide')}}
return this}
H.prototype.toggle=function(){return this.isVisible()?this.hide():this.show()}
H.prototype.getXY=function(){var K,L,M=this.dom.offsetParent
K=this.dom.offsetLeft
L=this.dom.offsetTop
while(M){K+=M.offsetLeft
L+=M.offsetTop
M=M.offsetParent}
return [K,L]}
H.prototype.getFixedXY=function(){var K,L,M=this.dom,N=this.dom.ownerDocument,O=N.documentElement,P=N.defaultView||M.parentWindow||!1,Q={top:0,left:0},R=O.clientTop||0,S=O.clientLeft||0,T=P.pageYOffset||O.scrollTop,U=P.pageXOffset||O.scrollLeft
if('getBoundingClientRect' in M)Q=M.getBoundingClientRect()
L=Q.top+T-R
K=Q.left+U-S
return [K,L]}
H.prototype.setOpacity=function(K){K=Math.max(Math.min(K,1),0)
if(q.isIE<9)this.dom.style.filter=(this.dom.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+(K>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+K*100+'), ')
else this.dom.style.opacity=K
return this}
H.prototype.setPosition=function(K){switch(K){case 'static':case 'relative':case 'absolute':case 'fixed':this._position=K}
if(this._position!==null)this.setCSSStyle('position',(A&&this._position=='fixed')?'absolute':this._position)
return this}
H.prototype.setBackgroundImage=function(K){var L=K
if(L&&q.isIE)this.dom.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+L+'",sizingMethod="scale"), '
else this.dom.style.backgroundImage='url("'+K+'")'
return this}
H.prototype.setRotation=function(K){if(q.isFF)this.dom.style.MozTransform=K?'rotate('+K+'deg)':''
else if(q.isSafari)this.dom.style.WebkitTransform=K?'rotate('+K+'deg)':''
else if(q.isIE){this.dom.style.filter=K?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(K/90)+')':''
if(q.isIE8&&K){var L=this.parentNode.getElementsByTagName('iframe')
if(q.isIE8&&L.length){L[0].style.filter=K?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(K/90)+')':''
this.dom.style.overflow='visible'}}}
return this}
H.prototype.appendToParent=function(K){if(!w.hasParentNode(this.dom))this.parentNode.appendChild(this.parentNode instanceof H?this:this.dom)
if(this.parentNode==document.body&&(this.style.position=='absolute'||this.style.position=='fixed')){this.parentNode.insertBefore(this.dom,this.parentNode.firstChild)}
if(K&&!this.inDOM){this.parentNode.appendToParent&&this.parentNode.appendToParent(K)
this.inDOM=!0}}
H.prototype.focus=function(){try {this.dom.focus()}catch(K){;}
;
return this}
H.prototype.blur=function(){try {this.dom.blur()}catch(K){;}
;
return this}
H.prototype.click=function(){this.dom.click&&this.dom.click()
return this}
H.prototype.validate=function(K){var L=!0
for(var M=0,N=this.children.length;M<N;M++){var O=this.children[M]
if(O instanceof H&&typeof O.validate=='function')if(!O.validate(K?L:!1))L=!1}
return L}
H.prototype.getSelectable=function(){return this.selectable}
H.prototype.setSelectable=function(K){function L(){return !1}
if(n(K)){this.selectable=!0
this.setStyle('user-select','text')
q.isFF&&this.setStyle('-moz-user-select','text')
q.isWebKit&&this.setStyle('-webkit-user-select','text')
q.isIE>9&&this.setStyle('-ms-user-select','text');(q.isIE<10||q.isOpera)&&this.un('selectstart',L)}
else{this.selectable=!1
this.setStyle('user-select','none')
q.isFF&&this.setStyle('-moz-user-select','none')
q.isWebKit&&this.setStyle('-webkit-user-select','none')
q.isIE>9&&this.setStyle('-ms-user-select','none');(q.isIE<10||q.isOpera)&&this.on('selectstart',L)}
return this}
H.prototype.getDisabled=function(){return this.dom.disabled}
H.prototype.setDisabled=function(K){K=n(K)
for(var L=0,M=this.children.length;L<M;L++)if(this.children[L] instanceof H)this.children[L].setDisabled(K)
this[K?'addClass':'removeClass']('disabled')
this.dom.disabled=K
return this}
H.prototype.getReadOnly=function(){return this.dom.readOnly}
H.prototype.setReadOnly=function(K){K=n(K)
for(var L=0,M=this.children.length;L<M;L++)if(this.children[L] instanceof H)this.children[L].setReadOnly(K)
this.dom.readOnly=K
return this}
H.prototype.getValue=function(){return this.dom.value}
H.prototype.setValue=function(K){this.dom.value=k(K,'allowNull')?'':K
return this}
H.prototype.getType=function(){return this.getAttribute('type')}
H.prototype.setType=function(K){try {this.dom.setAttribute('type',K)}catch(L){;}
return this}
H.prototype.getName=function(){return this.getAttribute('name')}
H.prototype.setName=function(K){return this.setAttribute('name',K)}
H.prototype.getTabIndex=H.prototype.getTabindex=function(){try {return this.dom.tabIndex}catch(K){;}}
H.prototype.setTabIndex=H.prototype.setTabindex=function(K){try {this.dom.tabIndex=K}catch(L){;}
return this}
H.prototype.setPlacement=function(K){if(!K||!this.parentNode||!(this.parentNode instanceof H))return
var L=this.parentNode.getContainer(K)
if(!L)return
if(n(this.attributes.discardPlacement)){while(this.children.length)L.appendChild(this.children[0])
this.destroy()
return}
L.appendChild(L instanceof H?this:this.dom)
return this}
H.prototype.setContainer=function(K){this.attributes.container=K
return this}
H.prototype.getContainer=function(K){if(!K)return
if(this.attributes.container==K)return this
var L,M=this.children.length
for(var N=0;N<M;N++)if(typeof this.children[N].getContainer=='function'){L=this.children[N].getContainer(K)
if(L)return L}
return}
H.prototype.getPseudo=function(){return this._pseudo}
H.prototype.setPseudo=function(K){if(this._pseudo)this.removeClass(K)
this._pseudo=K
if(this._pseudo)this.addClass(K)
return this}
H.prototype.setUseDisplay=function(K){this.useDisplay=n(K)
return this}
H.prototype.getElement=function(K){return w.get(this.jx_id+'__'+K)}
H.prototype.setLabel=function(K){this.label=K
return this}
H.prototype.getLabel=function(){return this.label||''}
for(var J=0;J<y.length;J++)H.prototype[F('set-'+y[J])]=B(F(y[J]))
for(J=0;J<z.length;J++)H.prototype[F('set-'+z[J])]=C(F(z[J]))
H.__jx__no_fqname=!0
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLElement"].join('')
H.prototype.__jx__fqname="jx_ui_HTMLElement"}
return H})()
b.__$$__meshim_widget_utils_Color=(function(){var x=b.__$$__meshim_common_Chroma,y={white:"#FFF",black:"#000",grey:"#808080"}
y.clampLuminance=function(A,B,C){A=y.getChromaObj(A)
if(!A)return
if(B<0)B=0
if(C>1)C=1
var D=A.luminance(),E=D<B?B:D>C?C:D
return D===E?A:y.getColorAtLuminance(A,E)}
y.lighten=function(A,B,C){return x.interpolate(A,y.white,B,C||'rgb')}
y.darken=function(A,B,C){return x.interpolate(A,y.black,B,C||'rgb')}
var z=100
y.getColorAtLuminance=function(A,B){if(B<0||B>1)return
A=y.getChromaObj(A)
if(!A)return
var C=0
if(A.luminance()>=B){for(;;){C++
if(A.luminance()<=(B+0.05)||C>=z)return A
A=y.darken(A,0.05)}}
else{for(;;){C++
if(A.luminance()>=(B-0.05)||C>=z)return A
A=y.lighten(A,0.05)}}}
y.getColorAtContrast=function(A,B,C){if(C<1)return
A=y.getChromaObj(A)
B=y.getChromaObj(B)
if(!A||!B)return
var D=0
if(x.contrast(A,B)>=C){for(;;){D++
if(x.contrast(A,B)<=(C+0.5)||D>=z)return B
if(B.luminance()>=A.luminance()){B=y.darken(B,0.05)}
else{B=y.lighten(B,0.05)}}}
else{var E=x.contrast(A,y.white),F=x.contrast(A,y.black)
for(;;){D++
if(x.contrast(A,B)>=(C-0.5)||D>=z)return B
if(B.luminance()>=A.luminance()){if(E>=(C-0.5)){B=y.lighten(B,0.05)}
else if(F>=(C-0.5)){B=y.darken(B,0.05)}
else{return E>F?y.getChromaObj(y.white):y.getChromaObj(y.black)}}
else{if(F>=(C-0.5)){B=y.darken(B,0.05)}
else if(E>=(C-0.5)){B=y.lighten(B,0.05)}
else{return E>F?y.getChromaObj(y.white):y.getChromaObj(y.black)}}}}}
y.getContrastColor=function(A,B,C,D,E,F,G){A=y.getChromaObj(A)
B=y.getChromaObj(B)
C=y.getChromaObj(C)
if(!A||!B||!C)return
var H=A.luminance()
if(E==='bright'){if(H<D){return B}
else{return y.getColorAtContrast(A,C,G?G:2.5)}}
else if(E==='dark'){if(H>D){return C}
else{return y.getColorAtContrast(A,B,F?F:4.5)}}}
y.isHexColor=function(A){if(typeof A=='string'&&/^#[0-9A-F]{3}([0-9A-F]{3})?$/i.test(A)){return !0}
else{return !1}}
y.getChromaObj=function(A){if(y.isHexColor(A)){return x.hex(A)}
else if(A instanceof x.constructor){return A}
else{return !1}}
y.rgbaColor=function(A,B){A=y.getChromaObj(A)
if(!A)return
if(typeof B=='undefined'){B=1}
else{B=parseFloat(B)
if(isNaN(B)||B>1)B=1
if(B<0)B=0}
return 'rgba('+y.toRGB(A).join(',')+','+B+')'}
y.toRGB=function(A){A=y.getChromaObj(A)
if(!A)return
var B=A.rgb()
B[0]=parseInt(B[0],10)
B[1]=parseInt(B[1],10)
B[2]=parseInt(B[2],10)
return B}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Color"].join('')
y.prototype.__jx__fqname="meshim_widget_utils_Color"}
return y})()
b.__$$__meshim_common_Graphic=(function(){var x={parseViewBox:A,parseShadow:B,detectedGraphicType:C(),getGradColors:D,parseCanvasData:I,CanvasData:J,generateVmlLinearGradient:F,generateSvgLinearGradient:G,generateCanvasGradient:Q,generate_drawing_function:H,generateRectPath:R,createVMLNode:z},y=b.__$$__meshim_common_Color
function z(V,W){if(!V._vmlstyled){var X=V.createElement('style')
X.setAttribute("type","text/css")
X.styleSheet.cssText="v\\:*{behavior:url(#default#VML); display: inline-block;} .vml{behavior:url(#default#VML); display: inline-block;}"
V.getElementsByTagName('head')[0].appendChild(X)
X=null
V._vmlstyled=!0}
return V.createElement('<'+W+' xmlns="urn:schemas-microsoft.com:vml">')}
function A(V){var W=V.split(/\s+/)
if(W.length!==4)throw ('bad viewBox: '+V)
for(var X=0;X<4;X++){W[X]=parseInt(W[X],10)
if(isNaN(W[X]))throw ('bad viewBox: '+V)}
return {x:W[0],y:W[1],width:W[2],height:W[3]}}
function B(V){var W=V.split(' ')
return {offsetX:parseInt(W[0],10),offsetY:parseInt(W[1],10),blurRadius:parseInt(W[2],10),color:W[3],opacity:parseFloat(W[4]),rgba:'rgba('+y(W[3]).toArray().join(',')+','+W[4]+')'}}
function C(){var V=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),W=document.createElement('canvas').getContext
if(W)return 'canvas'
else if(document.createElementNS&&V)return 'svg'
else if(q.isIE)return 'vml'
else return 'none'}
function D(V){var W=/from\(([^)]+\){0,1})\)/.exec(V),X=/to\(([^)]+\){0,1})\)/.exec(V),Y=[]
if(W)Y.push({stop:'0%',color:new y(W[1])})
V.replace(/color-stop\(([^)]+\){0,1})\)/g,function(Z,$$){$$=E($$)
Y.push({stop:$$.substring(0,$$.indexOf(' ')),color:new y($$.substring($$.indexOf(' ')))})})
if(X)Y.push({stop:'100%',color:new y(X[1])})
return Y}
function E(V){return V.replace(/[,\s]+/g,' ').trim()}
function F(V,W){W=E(W)
var X=W.split(' '),Y,Z,$$,$_,$a=[]
Y=X.shift()
switch(X[0]){case 'left':X.shift()
Z='270'
break
case 'top':X.shift()
Z='180'
break
case 'right':X.shift()
Z='90'
break
case 'bottom':X.shift()
Z='0'
break
default:Z=$e.apply(null,X.splice(0,4))
break}
$$=D(W)
for(var $b=0,$c=$$.length;$b<$c;$b++){$_=$$[$b]
$a.push($_.stop+' '+$_.color.toStrRGB())}
var $d=x.createVMLNode(V,'fill')
$d.className='vml'
$d.setAttribute('on','true')
$d.setAttribute('type','gradient')
$d.setAttribute('angle',Z)
$d.setAttribute('colors',$a.join(','))
$d.setAttribute('method','sigma')
if($_&&$_.color.alpha!==1){$d.setAttribute('opacity',$_.color.alpha)}
function $e($f,$g,$h,$i){for(var $j=0;$j<arguments.length;$j++)arguments[$j]=parseFloat(arguments[$j])
var $k=($i-$g)/($h-$f)
return Math.round(270-Math.atan($k)*180/Math.PI)}
return $d}
function G(V,W){W=E(W)
var X=W.split(' '),Y,Z
Y=X.shift()
switch(X[0]){case 'left':X.shift()
Z='0% 0% 100% 0%'.split(' ')
break
case 'top':X.shift()
Z='0% 0% 0% 100%'.split(' ')
break
case 'right':X.shift()
Z='100% 0% 0% 0%'.split(' ')
break
case 'bottom':X.shift()
Z='0% 100% 0% 0%'.split(' ')
break
default:Z=X.splice(0,4)}
var $$=V.createElementNS('http://www.w3.org/2000/svg','linearGradient'),$_='grad_'+new Date().getTime()+Math.round(Math.random()*1001)
$$.setAttribute('id',$_)
$$.setAttribute('x1',Z[0])
$$.setAttribute('y1',Z[1])
$$.setAttribute('x2',Z[2])
$$.setAttribute('y2',Z[3])
$$.setAttribute('gradientUnits','objectBoundingBox')
var $a=D(W),$b,$c
for(var $d=0;$d<$a.length;$d++){$c=$a[$d]
if($c.stop.indexOf('%')>-1)$c.stop=parseFloat($c.stop)/100
else $c.stop=parseFloat($c.stop)
$b=V.createElementNS('http://www.w3.org/2000/svg','stop')
$b.setAttribute('offset',$c.stop)
$b.setAttribute('stop-color',$c.color.toStrRGB())
$b.setAttribute('stop-opacity',$c.color.alpha)
$$.appendChild($b)}
return $$}
function H(V){V=V.replace(/[A-Za-z]/g,' $& ').replace(/,/g,' ').replace(/-/g,' -').replace(/\s+/g,' ').trim()
var W=V.split(' '),X=[0,0],Y='ctx.beginPath();',Z={M:'moveTo',L:'lineTo',C:'bezierCurveTo',Z:'closePath'}
for(var $$=0,$_=W.length;$$<$_;$$++){if(!/^[A-Za-z]/.test(W[$$])){W[$$]=parseFloat(W[$$])
if(isNaN(W[$$]))throw 'Bad path after '+W.slice(0,$$).join(' ')}}
var $a='',$b=[],$c={x:[],y:[]}
while(W.length){if(/^[A-Za-z]/.test(W[0])){$a=W.shift()}
switch($a){case ('M'):$b=W.splice(0,2)
$g($b)
Y+=$f('M',$b)
X=$b
break
case ('m'):$b=$e(W.splice(0,2))
Y+=$f('M',$b)
X=$b
break
case ('Z'):case ('z'):Y+=$f('Z',[])
break
case ('l'):$b=$e(W.splice(0,2))
Y+=$f('L',$b)
X=$b
break
case ('L'):$b=W.splice(0,2)
$g($b)
Y+=$f('L',$b)
X=$b
break
case ('c'):$b=$e(W.splice(0,6))
Y+=$f('C',$b)
X=[$b[4],$b[5]]
break
default:throw ("unknown canvas' command: "+$a)}}
var $d=new Function('ctx',Y)
$d.bBox={minX:Math.min.apply(null,$c.x),minY:Math.min.apply(null,$c.y),maxX:Math.max.apply(null,$c.x),maxY:Math.max.apply(null,$c.y)}
return $d
function $e($j){for(var $k=0,$l=$j.length;$k<$l;$k++)$j[$k]=$j[$k]+($k%2?X[1]:X[0])
$g($j)
return $j}
function $f($j,$k){var $l='ctx.'+Z[$j]+'('+$k.join(',')+');'
return $l}
function $g($j){if($j.length==2){$c.x.push($j[0])
$c.y.push($j[1])}
else if($j.length==6){var $k=$h(X.concat($j))
$c.x.push($k.minX,$k.maxX)
$c.y.push($k.minY,$k.maxY)}
else{throw ('problem with updateBBox')}}
function $h($j){var $k=$j[0],$l=$j[1],$m=$j[2],$n=$j[3],$o=$j[4],$p=$j[5],$q=$j[6],$r=$j[7],$s=[$k,$q].concat($i($k,$m,$o,$q)),$t=[$l,$r].concat($i($l,$n,$p,$r))
return {minX:Math.min.apply(null,$s),minY:Math.min.apply(null,$t),maxX:Math.max.apply(null,$s),maxY:Math.max.apply(null,$t)}}
function $i($j,$k,$l,$m){var $n=[],$o=[],$p,$q,$r
if(($j-3*$k+3*$l-$m)!==0){$q=(Math.sqrt(-$j*$l+$j*$m+$k*$k-$k*$l-$k*$m+$l*$l)-$j+2*$k-$l)/(-$j+3*$k-3*$l+$m)
$r=(-Math.sqrt(-$j*$l+$j*$m+$k*$k-$k*$l-$k*$m+$l*$l)-$j+2*$k-$l)/(-$j+3*$k-3*$l+$m)
$n.push($q,$r)}
else if(($j-3*$k+3*$l-$m)===0&&($j-2*$k+$l)!==0){$p=($j-$k)/(2*($j-2*$k+$l))
$n.push($p)}
for(var $s=0;$s<$n.length;$s++){$p=$n[$s]
if($p<0||$p>1)continue
$o.push(Math.pow(1-$p,3)*$j+3*(1-$p)*(1-$p)*$p*$k+3*(1-$p)*$p*$p*$l+$p*$p*$p*$m)}
return $o}}
function I(V){var W=new J(V)
r.extend(W)
X(W,'ignore-id')
function X(Y,Z){Y=new Y.constructor(Y,W)
if(Y.id&&!Z)w.set(Y.id,Y)
if(Y.attributes)Y.setAttributes(Y.attributes)
if(Y.childrens)for(var $$=0,$_=Y.childrens.length;$$<$_;$$++)Y.childrens[$$]=X(Y.childrens[$$])
return Y}
return W}
function J(V,W){if(!V)V={}
this.id=V.id
if(W)this.root=W
this.attributes=V.attributes
this.childrens=V.childrens}
J.prototype.setAttribute=function(V,W){this.attributes[V]=O(V,W)
this.refresh()
return this}
J.prototype.setAttributes=function(V){for(var W in V)if(V.hasOwnProperty(W)){var X='set'+N(W)
if(typeof this[X]=='function'){this[X](V[W])}}}
J.prototype.refresh=function(){this.root?this.root.fire('update'):this.fire('update')
return this}
J.prototype.getAttribute=function(V){return this.attributes[V]}
J.prototype.destroy=function(){if(this.id)w.unset(this)
this.root=null
var V=this.childrens
if(V){for(var W=0,X=V.length;W<X;W++){if(V[W] instanceof J)V[W].destroy()}}}
var K='opacity fill stroke strokeWidth d path shadow viewBox'.split(' ')
for(var L=0;L<K.length;L++){var M=K[L]
J.prototype['set'+N(M)]=(function(V){return function(W){return this.setAttribute(V,W)}})(M)}
function N(V){return V.replace(/^\w/,function(W){return W.toUpperCase()})}
function O(V,W){switch(V){case 'viewBox':return A(W)
case 'path':return H(W)
case 'fill':return P(W)
case 'shadow':return B(W)
default:return W}}
function P(V){V=E(V)
if(/linear/.test(V))return function(W,X){return Q(V,W,X)}
else return function(){return V}}
function Q(V,W,X){V=V.replace(/,/g,' ').replace(/\s+/g,' ')
var Y=V.split(' '),Z,$$
$$=Y.shift()
switch(Y.shift()){case 'left':Z=W.createLinearGradient(X.minX,X.minY,X.maxX,X.minY)
break
case 'top':Z=W.createLinearGradient(X.minX,X.minY,X.minX,X.maxY)
break
case 'right':Z=W.createLinearGradient(X.maxX,X.minY,X.minX,X.minY)
break
case 'bottom':Z=W.createLinearGradient(X.minX,X.maxY,X.minX,X.minY)
break}
var $_=D(V),$a
for(var $b=0;$b<$_.length;$b++){$a=$_[$b]
if($a.stop.indexOf('%')>-1)$a.stop=parseFloat($a.stop)/100
else $a.stop=parseFloat($a.stop)
Z.addColorStop($a.stop,$a.color.toStrRGBA())}
return Z}
function R(V){var W=S(V)
if(V.border){var X={},Y=V.border
for(var Z in V)if(V.hasOwnProperty(Z))X[Z]=V[Z]
X.x+=Y
X.y+=Y
X.width-=2*Y
X.height-=2*Y
if(X.rx)X.rx=Math.max(X.rx-Y,1)
if(X.ry)X.ry=Math.max(X.ry-Y,1)
W+=S(X,'CCW')}
return W}
function S(V,W){var X=V.rx,Y=V.ry,Z=V.width,$$=V.height,$_=V.x,$a=V.y,$b=Math.round($a+$$/2),$c=''
if(!X&&!Y){if(W)$$=-$$
$c=U('M',$_,$b)+U('l',0,W?($a-$$-$b):($a-$b))+U('l',Z,0)+U('l',0,$$)+U('l',-Z,0)+'z'}
else{var $d=0.5522848*X,$e=0.5522848*Y,$f=Z-2*X,$g=$$-2*Y
if(W)$c=U('M',$_+Z,$a+Y)+(V.corner2?T(-X,-Y,$d,$e,1):U('l',0,-Y,-X,0))+U('l',-$f,0)+(V.corner1?T(-X,Y,$d,$e,1):U('l',-X,0,0,Y))+U('l',0,$g)+(V.corner4?T(X,Y,$d,$e,1):U('l',0,Y,X,0))+U('l',$f,0)+(V.corner3?T(X,-Y,$d,$e,1):U('l',X,0,0,-Y))+'z'
else $c=U('M',$_,$a+Y)+(V.corner1?T(X,-Y,$d,$e):U('l',0,-Y,X,0))+U('l',$f,0)+(V.corner2?T(X,Y,$d,$e):U('l',X,0,0,Y))+U('l',0,$g)+(V.corner3?T(-X,Y,$d,$e):U('l',0,Y,-X,0))+U('l',-$f,0)+(V.corner4?T(-X,-Y,$d,$e):U('l',-X,0,0,-Y))+'z'}
return $c}
function T(V,W,X,Y,Z){var $$=V>0?1:-1,$_=W>0?1:-1,$a=Z?-$$*$_:$$*$_,$b=($a==1)?$$*X:0,$c=($a==1)?0:$_*Y,$d=($a==1)?V:V-$$*X,$e=($a==1)?W-$_*Y:W
return U('c',$b,$c,$d,$e,V,W)}
function U(V){var W=' ',X=Array.prototype.slice.apply(arguments)
if(typeof X[0]=='string'&&/^[A-Za-z]$/.test(X[0])){W+=V
X.shift()}
for(var Y=0,Z=X.length;Y<Z;Y++)W+=Math.round(X[Y])+' '
return W}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Graphic"].join('')
x.prototype.__jx__fqname="meshim_common_Graphic"}
return x})()
b.__$$__meshim_common_Sounds=(function(){var x=b.__$$__meshim_common_sounds_AudioTag,y=b.__$$__meshim_common_sounds_FlashSound,z=b.__$$__meshim_common_sounds_BGSoundTag
function A(E){var F
this.url=E
F=new x(E)
if(F.dom)return F
F=new y(E)
if(F.dom)return F
F=new z(E)
if(F.dom)return F}
A.prototype.play=A.prototype.setVolume=A.prototype.setLoop=B
function B(){return this}
var C='/dashboard/sounds/'
function D(E){if(!/\/$/.test(E))E+='/'
this.repo_url=E||C
this.repo={}}
D.prototype.create=function(E,F,G,H){var I=new A(this.repo_url+F)
G&&I.setVolume(G)
H&&I.setLoop(H)
I.title=F
this.repo[E]=I
return this}
D.prototype.getSound=function(E){var F=this.repo[E]
if(F)return F
throw ('you have not created '+E+' sound yet')}
D.prototype.hasSound=function(E){try {this.getSound(E)
return !0}catch(F){return !1}}
D.prototype.setSrc=function(E,F){this.getSound(E).load(C+F)
return this}
D.prototype.getTitle=function(E){this.getSound(E).title}
D.prototype.play=function(E,F){this.getSound(E).play(parseInt(F,10)||0)
return this}
D.prototype.stop=function(E){this.getSound(E).stop()
return this}
D.prototype.setVolume=function(E,F){this.getSound(E).setVolume(F)
return this}
D.prototype.setLoop=function(E,F){this.getSound(E).setLoop(F)
return this}
D.prototype.getLoop=function(E){this.getSound(E).loop}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_common_Sounds"].join('')
D.prototype.__jx__fqname="meshim_common_Sounds"}
return D})()
b.__$$__meshim_common_GeoAccess=(function(){var x=b.__$$__meshim_common_ArrayUtils,y=/^([a-z][a-z0-9_-]*)(:\d+)?$/i
function z(B,C,D){this.CLUSTERS=B.CLUSTERS
this.WEIGHTS=B.WEIGHTS
this.NEAR_MAP=B.NEAR_MAP
this.FALLBACKS=B.FALLBACKS
this.geo_code=C||'geo'
this.cluster_hosts=[]
this.priority_hosts=[]
this.host_list=[]
this.host_index=0
this.addPriorityHosts(D)
this.init()}
var A=z.prototype
A.init=function B(){var C=(this.geo_code&&(this.geo_code in this.NEAR_MAP))?this.NEAR_MAP[this.geo_code]:this.NEAR_MAP.DEFAULT
if(!C){throw 'Error: no cluster code found for '+this.geo_code}
var D,E
if(C in this.CLUSTERS){D=this.CLUSTERS[C]
E=this.getWeights(C)
this.cluster_hosts=this.cluster_hosts.concat(x.shuffle(D,E))}
else if(this.priority_hosts.length<=0){throw 'Error: '+C+' has no cluster definition'}
else;
if(C in this.FALLBACKS){var F=this.FALLBACKS[C]
for(var G=0,H=F.length;G<H;G++){var I=F[G]
if(!(I in this.CLUSTERS))continue
D=this.CLUSTERS[I]
E=this.getWeights(I)
this.cluster_hosts=this.cluster_hosts.concat(x.shuffle(D,E))}}
this._makeHostList()}
A.getWeights=function B(C){if(!(C in this.CLUSTERS))return []
var D=this.CLUSTERS[C],E=D.length,F=new Array(E),G
if(this.WEIGHTS&&this.WEIGHTS[C]){var H=this.WEIGHTS[C]
for(G=E;G--;){var I=D[G]
F[G]=j(H[I])?H[I]:1}}
else{for(G=E;G--;){F[G]=1}}
return F}
A.addPriorityHosts=function B(C){if(!g(C))C=[C]
var D=[]
for(var E=0,F=C.length;E<F;E++){var G=C[E]
if(G&&y.test(G))D.push(G)}
this.priority_hosts=D.concat(this.priority_hosts)
this._makeHostList()}
A._makeHostList=function B(){this.host_list=this.priority_hosts.concat(this.cluster_hosts)
this.host_index=0}
A.getHostList=function B(){return this.host_list}
A.getNextHost=function B(){if(this.host_index>=this.host_list.length)return ''
return this.host_list[this.host_index++]}
A.hasNext=function B(){return (this.host_index<this.host_list.length)}
A.rewind=function B(){this.host_index=0}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccess"].join('')
z.prototype.__jx__fqname="meshim_common_GeoAccess"}
return z})()
b.__$$__jx_ui_Widget=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='div')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Widget"].join('')
y.prototype.__jx__fqname="jx_ui_Widget"}
return y})()
b.__$$__meshim_common_VmlCanvas=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F,G,H,I,J
F=E.createElement('span')
F.style.display='inline-block'
F.style.overflow='hidden'
F.style.position='relative'
F.vectorType='vml'
G=D.createVMLNode(E,'group')
G.className='vml'
G.style.width="100px"
G.style.height="100px"
G.style.border="0px none"
G.style.padding="0px"
G.style.margin="0px"
G.style.position="absolute"
G.style.top="0px"
G.style.left="0px"
F.groupshape=G
H=D.createVMLNode(E,'shape')
H.className='vml'
H.stroked=!1
H.fill=!1
H.style.width="1px"
H.style.height="1px"
G.appendChild(H)
F.appendChild(G)
F.graphicType='vml'
F.defaultPlacement=G
w.extend(F)
r.extend(F)
w.set(z,F)
var K=!1
F.appendToParent=function(N){if(!w.hasParentNode(F))w.appendChild(y,F)
if(N&&!K){if(y.appendToParent)y.appendToParent(!0)
K=!0}}
F.setCanvasScale=function(N){N=parseFloat(N)
I=N
if(J)F.setViewBox(J)
return F}
F.setViewBox=function(N){J=N
N=D.parseViewBox(N)
var O=F.getElementsByTagName('*'),P=N.x+', '+N.y,Q='1, 1'
if(I)Q=(1/I)+','+(1/I)
G.coordorigin=P
for(var R=0,S=O.length;R<S;R++){var T=O[R].tagName
if(T!=='shape'&&T!=='group')continue
O[R].coordsize=Q}
H.style.left=N.x+'px'
H.style.right=N.y+'px'
return F}
var L=F.setWidth,M=F.setHeight
F.setWidth=function(N){if(typeof L==='function')L.call(F,N)
G.style.width='1px'
return F}
F.setHeight=function(N){if(typeof M==='function')M.call(F,N)
G.style.height='1px'
return F}
F.setStyle(A)
F.setAttributes(C)
w.addChildren(F,B)
F.appendToParent()
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlCanvas"].join('')
x.prototype.__jx__fqname="meshim_common_VmlCanvas"}
return x})()
b.__$$__jx_ui_html_p=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='p'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_p"].join('')
y.prototype.__jx__fqname="jx_ui_html_p"}
return y})()
b.__$$__jx_ui_html_span=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='span'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_span"].join('')
y.prototype.__jx__fqname="jx_ui_html_span"}
return y})()
b.__$$__meshim_common_Canvas=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F,G,H,I=new D.parseCanvasData({type:'canvas',attributes:{},childrens:[]})
G=E.createElement('canvas')
G.width=0
G.height=0
G.vectorType='canvas'
if(G.getContext)H=G.getContext('2d')
w.extend(G)
r.extend(G)
w.set(z,G)
var J=!1
G.appendToParent=function(U){if(!w.hasParentNode(G))w.appendChild(y,G)
if(U&&!J){if(y.appendToParent)y.appendToParent(!0)
J=!0}}
G.setData=function(U){if(typeof I.destroy=='function')I.destroy()
I=new D.parseCanvasData(U)
L()
M()
I.on('update',M)}
function K(){if(F)window.clearInterval(F)
var U=Math.floor(Math.random()*201)-100
F=window.setTimeout(M,1000+U)}
function L(){if(F)window.clearTimeout(F)}
G.onDestruction(function(){L()
if(typeof I.destroy=='function')I.destroy()})
G.setViewBox=function(U){I.setAttribute('viewBox',U)
return G}
function M(){if(!I)return
if(!I.attributes.viewBox)return
S()
N()
O(I.childrens)}
function N(){var U=I.attributes.viewBox,V=I.attributes.canvasScale?parseFloat(I.attributes.canvasScale):1
if(G.width!=U.width)G.width=U.width*V
if(G.height!=U.height)G.height=U.height*V
H.scale(V,V)
H.transform(1,0,0,1,-U.x*V,-U.y*V)
if(q.isWebKit&&U.width*U.height>200*200)K()
else L()
P(I)}
function O(U){for(var V=0,W=U.length;V<W;V++){var X=U[V]
H.save()
if(X.childrens)O(X.childrens)
P(X)
H.restore()}}
function P(U){var V=U.attributes
Q()
if(V.left&&typeof U.translateX=='function')U.translateX(H,V.left)
if(V.top&&typeof U.translateY=='function')U.translateY(H,V.right)
if('opacity' in V)H.globalAlpha=V.opacity*H.globalAlpha
if(!V.path)return
if(V.stroke)H.strokeStyle=V.stroke
if(V.strokeWidth)H.lineWidth=V.strokeWidth
if(V.fill)H.fillStyle=V.fill(H,V.path.bBox)
if(V.shadow&&!q.isOpera){var W=V.shadow
H.shadowOffsetX=W.offsetX
H.shadowOffsetY=W.offsetY
H.shadowBlur=W.blurRadius
H.shadowColor=W.rgba}
V.path(H)
H.fill()
if(V.shadow)R()
H.stroke()}
function Q(){H.strokeStyle='rgba(0, 0, 0, 0)'
H.fillStyle='rgba(0, 0, 0, 1)'
H.lineWidth=0}
function R(){H.shadowOffsetX=0
H.shadowOffsetY=0
H.shadowBlur=0
H.shadowColor='#000'}
function S(){H.setTransform(1,0,0,1,0,0)
H.clearRect(0,0,G.width,G.height)}
G.setStyle(A)
G.setAttributes(C)
I={type:'canvas',attributes:C,childrens:T(B)}
function T(U){var V=[]
for(var W=0,X=U.length;W<X;W++){var Y=U[W]
V.push({constructor:Y[0],id:Y[1],attributes:Y[4],childrens:T(Y[3])})}
return V}
G.setData(I)
G.appendToParent()
return G}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Canvas"].join('')
x.prototype.__jx__fqname="meshim_common_Canvas"}
return x})()
b.__$$__meshim_common_VmlShape=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F
F=D.createVMLNode(E,'shape')
F.className="vml"
F.style.width="100%"
F.style.height="100%"
F.stroked=!1
F.filled=!0
F.fillColor="#000000"
F.vectorType='vml'
var G=D.createVMLNode(E,'skew')
G.className='vml'
G.setAttribute('on','true')
G.setAttribute('matrix','1,0,0,1,0,0')
G.setAttribute('offset','-0.5,-0.5')
F.appendChild(G)
w.extend(F)
r.extend(F)
w.set(z,F)
var H=!1
F.appendToParent=function(K){if(!w.hasParentNode(F))w.appendChild(y,F)
if(K&&!H){if(y.appendToParent)y.appendToParent(!0)
H=!0}
if(F.vectorType=='vml'){F.style.width='100%'
F.style.height='100%'}}
F.moveRight=function(K){var L=parseInt(K,10)
if(isNaN(L))return F
F.style.left=(parseInt(F.style.left,10)||0)+L
var M=F.style.display
F.style.display='none'
F.style.display=M}
F.setLeft=F.moveRight
F.moveDown=function(K){var L=parseInt(K,10)
if(isNaN(L))return F
F.style.top=(parseInt(F.style.top,10)||0)+L
var M=F.style.display
F.style.display='none'
F.style.display=M}
F.setTop=F.moveDown
F.setPath=function(K){var L,M
K=K.replace(/c/g,'v').replace(/z/g,'x').replace(/m/g,'t').replace(/l/g,'r').replace(/L/g,'l')+'e'
M=F.getElementsByTagName('v:path')[0];(M)?L=M:L=D.createVMLNode(E,'path')
L.className='vml'
L.setAttribute('v',K)
F.appendChild(L)
return F}
F.setOpacity=function(K){var L=parseFloat(K),M=D.createVMLNode(E,'fill')
M.className='vml'
M.setAttribute('opacity',L)
M.setAttribute('o:opacity2',L)
F.appendChild(M)
return F}
F.setFill=function(K){var L=D.createVMLNode(E,'fill')
L.className='vml'
if(/linear/.test(K)){L=D.generateVmlLinearGradient(E,K)}
else{L=D.createVMLNode(E,'fill')
L.className='vml';(K=='none')?L.setAttribute('on','false'):L.setAttribute('on','true')
L.setAttribute('color',K)}
F.appendChild(L)
return F}
F.setStroke=function(K){var L=D.createVMLNode(E,'stroke')
L.className='vml';(K=='none')?L.setAttribute('on','false'):L.setAttribute('on','true')
L.setAttribute('color',K)
F.appendChild(L)
return F}
F.setStrokeWidth=function(K){var L=D.createVMLNode(E,'stroke')
L.className='vml'
K=parseInt(K,10)
L.setAttribute('on','true')
L.setAttribute('weight',K)
F.appendChild(L)
return F}
var I=1,J=1
F.resetTransform=function(){I=J=1
F.style.left=F.style.top=NaN
return F}
F.flipAlong=function(K){K=K.split('')
for(var L=0;L<K.length;L++)switch(K[L]){case 'x':I=-I
break
case 'y':J=-J
break}
var M=''
if(I==-1)M+='x'
if(J==-1)M+='y'
F.style.flip=M
return F}
F.setShadow=function(K){var L=D.createVMLNode(E,'shadow')
L.className='vml'
K=D.parseShadow(K)
L.setAttribute('on','true')
L.setAttribute('opacity',K.opacity)
L.setAttribute('color',K.color)
L.setAttribute('offset',K.offsetX+'px,'+K.offsetY+'px')
F.appendChild(L)
return F}
w.addChildren(F,B)
F.appendToParent()
F.setStyle(A)
F.setAttributes(C)
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlShape"].join('')
x.prototype.__jx__fqname="meshim_common_VmlShape"}
return x})()
b.__$$__jx_ui_html_div=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='div'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_div"].join('')
y.prototype.__jx__fqname="jx_ui_html_div"}
return y})()
b.__$$__jx_ui_html_td=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='td'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_td"].join('')
y.prototype.__jx__fqname="jx_ui_html_td"}
return y})()
b.__$$__meshim_common_SvgShape=(function(){function x(y,z,A,B,C){var D=b.__$$__meshim_common_Graphic
z=z||w.generateID()
var E=y.ownerDocument,F
F=E.createElementNS("http://www.w3.org/2000/svg",'path')
F.vectorType='svg'
w.extend(F)
r.extend(F)
w.set(z,F)
var G=!1
F.appendToParent=function(O){if(!w.hasParentNode(F))w.appendChild(y,F)
if(O&&!G){if(y.appendToParent)y.appendToParent(!0)
G=!0}}
F.setClass=function(O){F.setAttribute('class',O)
return F}
F.addClass=function(O){F.setAttribute('class',F.getAttribute('class')+' '+O)
return F}
F.removeClass=function(O){var P=F.getAttribute('class'),Q=new RegExp('\\b'+O+'\\b','g')
P.replace(Q,'')
F.setAttribute('class',P)
return F}
F.setPath=function(O){F.setAttribute('d',O)
return F}
F.setOpacity=function(O){F.style.opacity=parseFloat(O)
return F}
F.setFill=function(O){if(/linear/.test(O)){L(O)}
else{F.setAttribute('fill',O)}
return F}
F.setStroke=function(O){F.setAttribute('stroke',O)
return F}
F.setStrokeWidth=function(O){F.setAttribute('stroke-width',O)
return F}
var H=[[1,0,0],[0,1,0],[0,0,1]]
function I(O,P){return [[O,0,0],[0,P,0],[0,0,1]]}
function J(O,P){return [[1,0,O],[0,1,P],[0,0,1]]}
function K(O){return [O[0][0],O[1][0],O[0][1],O[1][1],O[0][2],O[1][2]].join(' ')}
F.resetTransform=function(){F.setAttribute('transform','')
H=[[1,0,0],[0,1,0],[0,0,1]]
return F}
F.moveRight=function(O){var P=parseInt(O,10)
if(isNaN(P))return F
H=N(H,J(P,0))
F.setAttribute('transform','matrix('+K(H)+')')
return F}
F.setLeft=F.moveRight
F.moveDown=function(O){var P=parseInt(O,10)
if(isNaN(P))return F
H=N(H,J(0,P))
F.setAttribute('transform','matrix('+K(H)+')')
return F}
F.setTop=F.moveDown
F.flipAlong=function(O){O=O.split('')
for(var P=0;P<O.length;P++){var Q=F.getBBox()
switch(O[P]){case 'x':H=N(H,I(-1,1),J(-(2*Q.x+Q.width),0))
F.setAttribute('transform','matrix('+K(H)+')')
break
case 'y':H=N(H,I(1,-1),J(0,-(2*Q.y+Q.height)))
F.setAttribute('transform','matrix('+K(H)+')')
break}}
if(q.isWebkit){var R=F.getAttribute('filter')
F.setAttribute('filter','')
F.setAttribute('filter',R)}
return F}
F.setShadow=function(O){O=D.parseShadow(O)
var P,Q
if(q.isOpera)return
var R={'feOffset':{'result':'offset-out','in':'SourceGraphic','dx':O.offsetX,'dy':O.offsetY},'feColorMatrix':{'result':'matrix-out','in':'offset-out','type':'matrix','values':'0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0'},'feGaussianBlur':{'result':'blur-out','in':'matrix-out','stdDeviation':O.blurRadius/2},'feBlend':{'in':'SourceGraphic','in2':'blur-out','mode':'normal'}}
P=E.createElementNS('http://www.w3.org/2000/svg','filter'),Q='sha_'+new Date().getTime()
P.setAttribute('id',Q)
var S=M(R,'http://www.w3.org/2000/svg')
for(var T=0;T<S.length;T++)P.appendChild(S[T])
var U=E.createElementNS('http://www.w3.org/2000/svg','defs')
U.appendChild(P)
F.parentNode.appendChild(U)
F.setAttribute('filter','url(#'+Q+')')
return F}
function L(O){var P=D.generateSvgLinearGradient(E,O),Q=E.createElementNS('http://www.w3.org/2000/svg','defs')
Q.appendChild(P)
F.parentNode.appendChild(Q)
F.setAttribute('fill','url(#'+P.id+')')
return F}
function M(O,P){var Q=[],R,S
for(var T in O)if(O.hasOwnProperty(T)){(P)?R=E.createElementNS(P,T):R=E.createElement(T)
S=O[T]
for(var U in S)if(S.hasOwnProperty(U))R.setAttribute(U,S[U])
Q.push(R)}
return Q}
function N(){var O=[[1,0,0],[0,1,0],[0,0,1]]
for(var P=0;P<arguments.length;P++){var Q=[],R=arguments[P]
for(var S=0;S<3;S++){Q[S]=[]
for(var T=0;T<3;T++){var U=0
for(var V=0;V<3;V++){U+=O[S][V]*R[V][T]}
Q[S][T]=U}}
O=Q}
return O}
w.addChildren(F,B)
F.appendToParent()
F.setStyle(A)
F.setAttributes(C)
return F}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgShape"].join('')
x.prototype.__jx__fqname="meshim_common_SvgShape"}
return x})()
b.__$$__jx_ui_html_tr=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='tr'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tr"].join('')
y.prototype.__jx__fqname="jx_ui_html_tr"}
return y})()
b.__$$__jx_ui_html_tbody=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='tbody'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tbody"].join('')
y.prototype.__jx__fqname="jx_ui_html_tbody"}
return y})()
b.__$$__jx_ui_html_img=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='img'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_img"].join('')
y.prototype.__jx__fqname="jx_ui_html_img"}
return y})()
b.__$$__jx_ui_html_a=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='a'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_a"].join('')
y.prototype.__jx__fqname="jx_ui_html_a"}
return y})()
b.__$$__jx_ui_html_table=(function(){var x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='table'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_html_table"].join('')
y.prototype.__jx__fqname="jx_ui_html_table"}
return y})()
b.__$$__meshim_widget_themes_Base=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_utils_Color,z={}
z._super=null
z.defaults={colors:{primary$string:'#000000',banner$string:'#000000',bubble$string:'#000000'}}
z.overrides={avatars:{concierge$string:x.IMAGES_URL+'/avatar_simple_agent.png',agent$string:x.IMAGES_URL+'/avatar_simple_agent.png',visitor$string:x.IMAGES_URL+'/avatar_simple_visitor.png'},chat_button:{display_status$bool:!1,use_bubble$bool:!1},chat_window:{hide_profile_card$bool:!1,hide_profile_avatar$bool:!1,use_banner$bool:!0}}
z.generate=function(){var A={fontFamily:'Verdana, Geneva, sans-serif',fontSizeXS:'10px',fontSizeS:'11px',fontSize:'12px',fontSizeL:'14px',fontSizeXL:'16px',fontSizeXXL:'18px',marginXS:'3px',marginS:'5px',margin:'10px',marginL:'15px',marginXL:'20px',paddingS:'3px',padding:'6px',paddingL:'8px',paddingXL:'10px',borderWidth:'1px',borderStyle:'solid',borderColor:y.black,radiusS:'3px',radius:'5px',headColor:y.white,headBg:y.black,headLowContrastColor:y.grey,contentColor:y.black,contentHeaderColor:y.black,contentBg:y.white,contentBlockBg:y.grey,contentBlockRadius:'$$radius',placeholderColor:y.grey,inputMenuBg:y.white,errorColor:'#CC0000',dividerColor:y.grey,inputColor:y.black,inputBg:'$$inputMenuBg',inputBorderWidth:'$$borderWidth',inputBorderStyle:'$$borderStyle',inputBorderColor:'$$borderColor',inputPadding:'$$padding',inputRadius:'$$radius',inputShadow:'',inputFocusColor:'',inputFocusBg:'',inputFocusBorderColor:'',inputFocusShadow:'',inputPlaceholderColor:'$$placeholderColor',inputPlaceholderFontStyle:'italic',inputInvalidColor:'',inputInvalidBg:'',inputInvalidBorderColor:'$$errorColor',inputInvalidShadow:'',buttonColor:y.white,buttonBg:y.black,buttonBorderWidth:'$$borderWidth',buttonBorderStyle:'$$borderStyle',buttonBorderColor:'',buttonPadding:'$$padding',buttonPaddingHorizontal:'$$paddingS',buttonRadius:'$$radiusS',buttonShadow:'',buttonFontWeight:'bold',buttonHoverColor:'',buttonHoverBg:'',buttonHoverBorderColor:'',buttonHoverShadow:'',buttonActiveColor:'',buttonActiveBg:'',buttonActiveBorderColor:'',buttonActiveShadow:'',buttonSecColor:y.white,buttonSecBg:y.grey,buttonSecBorderColor:'',buttonSecShadow:'',buttonSecHoverColor:'',buttonSecHoverBg:'',buttonSecHoverBorderColor:'',buttonSecHoverShadow:'',buttonSecActiveColor:'',buttonSecActiveBg:'',buttonSecActiveBorderColor:'',buttonSecActiveShadow:'',buttonShortPadding:'$$paddingS',formSubmittedBg:'$$contentBlockBg',formSubmittedRadius:'$$radius',formSubmittedBorderWidth:0,formSubmittedBorderStyle:'',formSubmittedBorderColor:'',errorMessageColor:'$$errorColor',errorMessageFontWeight:'bold',errorMessageFontStyle:'italic',scrollableFrameInnerPaddingSmall:'$$margin',scrollableFrameInnerPaddingMedium:'$$marginXL',scrollableFrameInnerPaddingLarge:'$$marginXL',scrollableFrameTopHeight:'',scrollableFrameTopBackground:'',scrollableFrameTopBackgroundColor:'',scrollableFrameBottomHeight:'',scrollableFrameBottomBackground:'',scrollableFrameBottomBackgroundColor:'',toastColor:y.white,toastBg:y.black,toastPadding:'$$paddingXL',toastBorderWidth:'$$borderWidth',toastBorderStyle:'$$borderStyle',toastBorderColor:'$$borderColor',toastRadius:'$$radius',toastShadow:'',avatarBorderWidth:0,avatarBorderStyle:'$$borderStyle',avatarBorderColor:'$$borderColor',avatarRadius:'$$radiusS',avatarShadow:'',profileCardAvatarBorderWidth:'',profileCardAvatarBorderStyle:'',profileCardAvatarBorderColor:'',profileCardAvatarRadius:'',profileCardAvatarShadow:'',profileCardNameColor:y.black,profileCardTitleColor:y.grey,bottomHeight:'40px',bottomHeightBottomPadding:'50px',bottomBorderWidth:'',bottomBorderStyle:'$$borderStyle',bottomBorderColor:'$$borderColor',bottomNoteBorderWidth:0,bottomNoteBorderStyle:'$$borderStyle',bottomNoteBorderColor:'$$borderColor',brandingLinkColor:'$$actionBarColor',chatMotifHill:'',chatMotifBubble:'',facebook:'#3B5998',twitter:'#00ACEE',google:'#DD4B39',externalIconColor:'$$placeholderColor',authButtonColor:'',authButtonBg:'',authButtonBorderColor:'',authButtonShadow:'',authButtonHoverColor:'',authButtonHoverBg:'',authButtonHoverBorderColor:'',authButtonHoverShadow:'',authButtonActiveColor:'',authButtonActiveBg:'',authButtonActiveBorderColor:'',authButtonActiveShadow:'',chatRatingsEmoticonColor:'#999',chatRatingsEmoticonActive:'#DDD',chatRatingsEmoticonHover:'#EEE',chatRatingsThumbLight:'#999',chatRatingsThumbDark:'#666',chatRatingsThumbActive:'#EEE',chatRatingsThumbBGHover:'#DDD',chatButtonMinWidth:'180px',chatButtonMaxWidth:'300px',chatButtonHeight:'30px',chatButtonColor:'$$headColor',chatButtonBg:'$$headBg',chatButtonBorderWidth:'$$borderWidth',chatButtonBorderStyle:'$$borderStyle',chatButtonBorderColor:'$$dividerColor',chatButtonRadius:'$$radius',chatButtonShadow:'',chatButtonPadding:'$$paddingXL',chatButtonPaddingFavicon:'$$chatButtonPadding',chatButtonFontWeight:'bold',chatButtonStatusFontWeight:'bold',faviconWidth:'36px',faviconColor:'$$chatButtonColor',faviconOnlineColor:'',faviconOfflineColor:'',faviconBg:'$$chatButtonBg',faviconDotsColor:'',chatBubbleTitle:'',chatBubbleText:'',chatBubbleClose:'',windowMiniWidth:'240px',windowMiniHeight:'200px',windowSmallWidth:'240px',windowSmallHeight:'335px',windowMediumWidth:'290px',windowMediumHeight:'400px',windowLargeWidth:'350px',windowLargeHeight:'450px',windowColor:'$$contentColor',windowBg:'$$contentBg',windowPadding:'',windowRadius:'$$radius',windowShadow:'',windowContentBg:'$$contentBg',windowContentBorderWidth:'$$borderWidth',windowContentBorderStyle:'$$borderStyle',windowContentBorderColor:'$$dividerColor',menuColor:'$$contentColor',menuBg:'$$inputMenuBg',menuBorderWidth:'$$borderWidth',menuBorderStyle:'$$borderStyle',menuBorderColor:'$$dividerColor',menuRadius:'$$radius',menuShadow:'$$windowShadow',menuHeaderColor:'$$placeholderColor',menuItemPadding:'3px 20px',menuItemHoverBg:y.grey,titleBarHeight:'24px',titleBarPaddingBefore:'60px',titleBarPaddingAfter:'60px',titleBarFontSize:'$$fontSizeS',titleBarColor:'$$headLowContrastColor',titleBarBg:'$$headBg',titleBarBorderWidth:'',titleBarBorderStyle:'$$borderStyle',titleBarBorderColor:'$$borderColor',titleBarFontWeight:'bold',titleBarTextAlign:'center',actionBarWidth:'100%',actionBarHeight:'24px',actionBarColor:y.grey,actionBarColorDiabled:'#AAA',actionBarBg:'$$windowContentBg',actionBarBorderWidth:'',actionBarBorderStyle:'$$borderStyle',actionBarBorderColor:'$$borderColor',actionBarPadding:'10px',actionBarHoverColor:'',chatPanelProfileCardContainerHeight:'50px',chatPanelProfileCardContainerBackground:'',chatPanelProfileCardContainerBorderWidth:'',chatPanelProfileCardContainerBorderStyle:'$$borderStyle',chatPanelProfileCardContainerBorderColor:'$$borderColor',chatPanelProfileCardAvatarBorderWidth:'',chatPanelProfileCardAvatarBorderStyle:'',chatPanelProfileCardAvatarBorderColor:'',chatPanelProfileCardAvatarRadius:'',chatPanelProfileCardAvatarShadow:'',chatLogMargin:'$$margin',chatLogVisitorNameColor:'$$contentHeaderColor',chatLogVisitorBubbleBg:'',chatLogVisitorBubbleBorderWidth:'$$borderWidth',chatLogVisitorBubbleBorderStyle:'$$borderStyle',chatLogVisitorBubbleBorderColor:'$$borderColor',chatLogAgentNameColor:'$$contentHeaderColor',chatLogAgentBubbleBg:'',chatLogAgentBubbleBorderWidth:'$$borderWidth',chatLogAgentBubbleBorderStyle:'$$borderStyle',chatLogAgentBubbleBorderColor:'$$borderColor',chatLogAvatarBorderWidth:'',chatLogAvatarBorderStyle:'',chatLogAvatarBorderColor:'',chatLogAvatarRadius:'',chatLogAvatarShadow:'',chatLogSystemMsgColor:'$$placeholderColor',chatLogSystemMsgBg:'',chatLogSystemMsgBorderWidth:0,chatLogSystemMsgBorderStyle:'$$borderStyle',chatLogSystemMsgBorderColor:'$$borderColor',chatLogSystemMsgPadding:'',chatLogFileProgressBg:'$$headBg',chatTextAreaBorderWidth:'',chatTextAreaBorderStyle:'$$borderStyle',chatTextAreaBorderColor:'$$borderColor',chatTextAreaPadding:'10px 10px 0',chatTextAreaInputFontSize:'',chatTextAreaInputMinHeight:'42px',chatTextAreaInputMaxHeight:'64px',chatTextAreaInputLineHeight:'',chatTextAreaInputColor:'',chatTextAreaInputBg:'',chatTextAreaInputBorderWidth:'',chatTextAreaInputBorderStyle:'',chatTextAreaInputBorderColor:'',chatTextAreaInputPadding:'',chatTextAreaInputRadius:'',chatTextAreaInputShadow:'',chatTextAreaInputFocusColor:'',chatTextAreaInputFocusBg:'',chatTextAreaInputFocusBorderColor:'',chatTextAreaInputFocusShadow:'',chatTextAreaSubmitMargin:'6px',chatTextAreaSubmitPadding:'5px 10px',chatTextAreaDropColor:'',chatTextAreaDropBg:'',chatTextAreaDropBorderWidth:'',chatTextAreaDropBorderStyle:'',chatTextAreaDropBorderColor:'',agentBubbleBg:'',visitorBubbleBg:'',badgeBg:'',badgeBorderWidth:'',badgeBorderStyle:'$$borderStyle',badgeBorderColor:'$$borderColor',badgeContentColor:'$$headColor',badgeContentBg:'',badgeContentBorderWidth:'$$borderWidth',badgeContentBorderStyle:'$$borderStyle',badgeContentBorderColor:'$$borderColor',badgeFormHeight:'36px',badgeFormBg:'',badgeFormBorderWidth:'$$borderWidth',badgeFormBorderStyle:'$$borderStyle',badgeFormBorderColor:'$$borderColor',badgeInputColor:'',badgeInputBorderWidth:'',badgeInputBorderStyle:'',badgeInputBorderColor:'',badgeInputPadding:'$$paddingXL',badgeInputRadius:'$$radius',badgeInputShadow:'',badgeInputFocusColor:'',badgeInputFocusBg:'',badgeInputFocusBorderColor:'',badgeInputFocusShadow:'',badgeInputPlaceholderColor:'',badgeIconColor:''},B={windowRadius:0},C={fontSizeXS:'12px',fontSizeS:'13px',fontSize:'14px',fontSizeL:'16px',fontSizeXL:'18px',fontSizeXXL:'20px',mobileMaxWidthS:'360px',mobileMaxWidth:'480px',mobileMaxWidthL:'640px',inputPadding:'$$paddingXL',buttonPadding:'$$paddingXL',menuItemPadding:'14px',titleBarHeight:'44px',actionBarWidth:'$$titleBarHeight',actionBarHeight:'$$titleBarHeight',menuRadius:0,brandingLinkColor:y.grey}
return {standard:A,popout:B,mobile:C}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Base"].join('')
z.prototype.__jx__fqname="meshim_widget_themes_Base"}
return z})()
b.__$$__meshim_widget_utils_Utils=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_Cookie,z='-webkit- -moz- -o- -ms- '.split(' '),A='webkit Moz O ms '.split(' '),B=['transition','MozTransition','OTransition','WebkitTransition'],C=['transitionend','transitionend','otransitionend','webkitTransitionEnd'],D=['animationend','animationend','oanimationend','webkitAnimationEnd'],E={contains:F(),onTransitionEnd:G(!0,C),unTransitionEnd:G(!1,C),onAnimationEnd:G(!0,D),unAnimationEnd:G(!1,D),css_prefixes:z,cssom_prefixes:A,isStyleSupported:H(),shallowExtend:I,fullyExtend:J,computedHeightBoxSizingBug:L,getComputedHeight:N,hoverFix:O,getEffectiveTLD:S,descendsObj:P,insertObj:Q,isDefaultName:W,getKeys:X,supportsDataURI:Y,isIE:Z(),hackTitleLocalization:$_,pad:$a,formatMinutesAsHours:$b,replaceFileHostname:$c,getLastLogEntries:$d,writeNode:$e,isAgentNick:V,refocusActiveElement:$f}
function F(){var $g=document.documentElement
if($g.compareDocumentPosition)return function($h,$i){$h=$h.dom||$h
$i=$i.dom||$i
return !!($h.compareDocumentPosition($i)&16)}
else if($g.contains)return function($h,$i){$h=$h.dom||$h
$i=$i.dom||$i
var $j=$h.nodeType===9?$h.documentElement:$h,$k=$i.parentNode
return $h===$k||!!($k&&$k.nodeType===1&&$j.contains&&$j.contains($k))}
else return function($h,$i){$h=$h.dom||$h
$i=$i.dom||$i
while(($i=$i.parentNode)){if($i===$h)return !0}
return !1}}
function G($g,$h){var $i=document.createElement('div'),$j
for(var $k=0,$l=B.length;$k<$l;$k++){if($i.style[B[$k]]!==a){$j=$h[$k]
break}}
if(!$j){return function(){}}
if($g){return function($m,$n,$o){$m.autobind($n,$j,$o)}}
else{return function($m,$n,$o){if(!C)return
$m.autounbind($n,$j,$o)}}}
function H(){var $g=document.createElement('div'),$h=$g.style
function $i($j){var $k=$j.charAt(0).toUpperCase()+$j.slice(1),$l=($j+' '+A.join($k+' ')+$k).split(' ')
for(var $m=0;$m<$l.length;$m++){if($h[$l[$m]]!==a)return !0}
return !1}
return $i}
function I(){var $g=arguments.length,$h=1,$i=arguments[0]||{},$j,$k
for(;$h<$g;$h++){if(($j=arguments[$h])==null)continue
for($k in $j)if($j.hasOwnProperty($k))if($i!==$j[$k])$i[$k]=$j[$k]}
return $i}
function J($g,$h){for(var $i in $h)if($h.hasOwnProperty($i)){if($h[$i]&&$h[$i].constructor&&$h[$i].constructor===Object){$g[$i]=$g[$i]||{}
J($g[$i],$h[$i])}
else{$g[$i]=$h[$i]}}
return $g}
var K
function L(){if(K===a)try {K=M()}catch($g){;}
return K}
function M(){if(!window.getComputedStyle)return !1
var $g=document.createElement('div'),$h='border-box'
document.body.appendChild($g)
$g.style.height='10px'
$g.style.padding='5px'
$g.style.boxSizing=$h
$g.style.webkitBoxSizing=$h
$g.style.mozBoxSizing=$h
var $i=parseInt(window.getComputedStyle($g).height,10)
document.body.removeChild($g)
return $i!=10}
function N($g){var $h=$g.getComputedStyle()
if($h.height=='auto')return $g.getHeight()
var $i=parseInt($h.height,10)||0
if(E.computedHeightBoxSizingBug())$i+=(parseInt($h.paddingTop,10)||0)+(parseInt($h.paddingBottom,10)||0)+(parseInt($h.borderTopWidth,10)||0)+(parseInt($h.borderBottomWidth,10)||0)
return $i+'px'}
function O($g){if(!q.bugs.noBoxSizing)return
$g.on('mouseover',$h)
$g.on('mouseout',$i)
function $h(){this.addClass('hover')}
function $i(){this.removeClass('hover')}}
function P($g,$h){var $i=$h.split('.'),$j
while($i.length){$j=$i.shift()
if(!$g[$j])$g[$j]={}
$g=$g[$j]}
return $g}
function Q($g,$h,$i){$g=$g.split('.')
var $j=$g.pop()
if(!$j)return
for(var $k=0,$l=$g.length;$k<$l;$k++){if(!($g[$k] in $i)){$i[$g[$k]]={}}
$i=$i[$g[$k]]}
$i[$j]=$h}
var R=/^(com|net|mil|gov|edu|eu)$/
function S(){var $g='zte2095',$h=window.location.hostname.split('.'),$i=$h.length
if(R.test($h[$i-1])){return '.'+$h.splice($i-2,2).join('.')}
var $j='.'+$h[$i-1]
$h.pop()
while($h.length){$j='.'+$h.pop()+$j
var $k={domain:$j,path:'/'}
y.set($g,'1',$k)
if(y.get($g)=='1'){y.remove($g,$k)
break}}
return $j}
var T=/^Visitor [0-9]{3,}$/,U=/^agent:[0-9]+/i
function V($g){return U.test($g)}
function W($g){return T.test($g)}
function X($g){if(!$g||typeof $g!='object')return
var $h=[]
for(var $i in $g)if($g.hasOwnProperty($i)){$h.push($i)}
return $h}
function Y($g){if(!window.Image){$g()
return}
try {var $h=new window.Image()
$h.onload=$h.onerror=function(){$g(!(this.width!=1||this.height!=1))}
$h.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}catch($i){$g()}}
function Z(){return q.isIE||/Trident\//.test(window.navigator.userAgent)}
var $$=b.__$$__jx_ui_HTMLElement
function $_(){$_=function(){}
if(!(v&&v.onLanguage))return
$$.prototype.setTitle=function($g){var $h=this
if(v&&v.onLanguage&&!this._l10nTitleBound){this._l10nTitleBound=!0
v.onLanguage($i)
this.onDestruction($j)}
this._l10nTitleValue=$g
this.dom.title=this._l10nTitleValue||''
return this
function $i(){$h.setTitle($h._l10nTitleValue)}
function $j(){v.unLanguage($i)}}}
function $a($g,$h){$g=parseInt($g,10)
if(isNaN($g))$g=0
var $i=$g<0
$g=Math.abs($g).toString().split('')
var $j=Math.max($h-$g.length,0)
while($j--)$g.unshift('0')
if($i)$g.unshift('-')
return $g.join('')}
function $b($g){var $h=24
return [E.pad($i(Math[$g>0?'floor':'ceil']($g/60)),2),E.pad(Math.abs($g)%60,2)].join(':')
function $i($j){return $j-(Math[$j>0?'floor':'ceil']($j/$h)*$h)}}
function $c($g){return $g&&$g.replace(x.FILE_REPLACE_SOURCE,x.FILE_REPLACE_RESULT)}
function $d($g,$h){$h=parseInt($h,10)
if(!$h)return $g.getValue()
var $i=$g.getKeys(),$j=$i.length,$k={}
if($j<=$h)return $g.getValue()||$k
for(var $l=0;$l<$j;$l++){$i[$l]=parseInt($i[$l],10)}
$i=$i.sort().slice(-$h)
var $m=$g.getValue(),$n
if(!$m)return $k
for($l=0,$j=$i.length;$l<$j;$l++){$n=$i[$l]
$k[$n]=$m[$n]}
return $k}
function $e($g,$h){var $i
if($g.leaf&&$g.parentNode){$i={}
$i[$g.name]=$h
$g.parentNode.write($i)}
else{$g.write($h)}}
function $f(){if(q.isNewIE){try {if(document.activeElement.nodeName.toLowerCase()!=="body"){document.activeElement.focus()}}catch($g){;}}}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Utils"].join('')
E.prototype.__jx__fqname="meshim_widget_utils_Utils"}
return E})()
b.__$$__meshim_widget_utils_Mobile=(function(){var x=b.__$$__jx_ui_HTMLElement,y=/google inc\./i,z=/chrome/i,A=/apple computer, inc\./i,B=/crios/i,C=window.navigator.userAgent||'',D=window.navigator.vendor||'',E=G(),F={isMobileBrowser:E,isMobileWhitelist:H(),isMobileTablet:K(),isAndroid:P(),isIOS:Q(),isWP:R(),isIEMobile:R(),isChromeIOSMobile:X(),isSafariIOSMobile:W(),isChromeAndroidMobile:S(),isOperaAndroidMobile:V(),isNativeAndroidMobile:T(),isUCBrowserMobile:U(),hideVirtualKeyboard:M,checkLandscape:L,hackFastButtons:O,getZoomLevel:Y,getOffset:Z}
function G(){var $$=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i,$_=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,$a=C||D||window.opera,$b=$$.test($a)||$_.test($a.substr(0,4))
return $b}
function H(){var $$,$_=[/(android [2-9])|(iemobile\/(?![5-9]))|(ucbrowser)|(Webkit.+Chrome)|(ipod|iphone|ipad).+applewebkit.+(CriOS|Version\/[5-9]|Mobile)/i]
for(var $a=0,$b=$_.length;$a<$b;$a++){if($_[$a].test(C)){$$=!0
break}}
if(/android.+ucbrowser/i.test(C)){$$=!1}
if(!$$);
return $$}
var I=640,J=320
function K(){var $$,$_=window.document.documentElement.clientWidth
if(L()){$$=$_>I}
else{$$=$_>J}
return $$}
function L(){return window.document.documentElement.clientWidth>window.document.documentElement.clientHeight}
function M($$){if(!$$)return}
var N
function O(){if(N)return
N=!0
var $$=x.prototype.on,$_=x.prototype.un
x.prototype.on=function($i){if($i=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.addEventListener('touchstart',$a,!1)
this.dom.addEventListener('click',$c,!1)}
return $$.apply(this,arguments)}
x.prototype.un=function($i){var $j=$_.apply(this,arguments)
if($i=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.removeEventListener('touchstart',$a,!1)
this.dom.removeEventListener('click',$c,!1)}
return $j}
N=!0
function $a($i){if(this.jx_wrapper)return $a.call(this.jx_wrapper,$i)
$i.stopPropagation()
this.dom.addEventListener('touchend',$c,!1)
this.doc.body.addEventListener('touchmove',$b,!1)
this.startX=$i.touches[0].clientX
this.startY=$i.touches[0].clientY}
function $b($i){if(this.jx_wrapper)return $b.call(this.jx_wrapper,$i)
if(Math.abs($i.touches[0].clientX-this.startX)>10||Math.abs($i.touches[0].clientY-this.startY)>10){$d.call(this)}}
function $c($i){if(this.jx_wrapper)return $c.call(this.jx_wrapper,$i)
$i.stopPropagation()
$d.call(this)
this.nativeHandlers['click']($i)
if($i.type=='touchend'&&!this.allowGhostClick){$f(this.startX,this.startY)}}
function $d(){if(this.jx_wrapper)return $d.call(this.jx_wrapper)
this.dom.removeEventListener('touchend',$c,!1)
this.doc.body.removeEventListener('touchmove',$b,!1)}
var $e=[]
function $f($i,$j){$e.push($i,$j)
window.setTimeout($g,2500)}
function $g(){$e.splice(0,2)}
function $h($i){for(var $j=0;$j<$e.length;$j+=2){var $k=$e[$j],$l=$e[$j+1]
if(Math.abs($i.clientX-$k)<25&&Math.abs($i.clientY-$l)<25){$i.stopPropagation()
$i.preventDefault()}}}
window.document.addEventListener('click',$h,!0)}
function P(){return E&&y.test(D)}
function Q(){return E&&A.test(D)}
function R(){return E&&/(iemobile|windows phone)/i.test(C)}
function S(){return E&&y.test(D)&&z.test(C)}
function T(){return E&&y.test(D)&&(!z.test(C)||/samsung/i.test(C))}
function U(){return E&&/ucbrowser/i.test(C)}
function V(){return E&&/(opera|opr).*android|android.*(opera|opr)/i.test(C)}
function W(){return E&&A.test(D)&&!B.test(C)}
function X(){return E&&A.test(D)&&B.test(C)}
function Y(){var $$=1.2,$_=640,$a=window.document.documentElement.clientWidth,$b=window.document.documentElement.clientHeight,$c=($a/$b)>$$,$d=window.screen.width,$e=window.screen.height,$f=!1
if($c&&$d<$e){$f=!0
$d=window.screen.height
$e=window.screen.width}
var $g=window.innerWidth,$h=$a/$d
if(window.devicePixelRatio&&T()&&$d>$_){$h*=window.devicePixelRatio}
else if(R()){$h*=1.5}
var $i=($a/$g)/$h
$i=($i/$$).toFixed(2)
return $i}
function Z(){var $$=window,$_=$$.document.documentElement,$a=$$.document.body,$b=null,$c={top:0,left:0}
if(!h($_.getBoundingClientRect));
else if(h($$.getComputedStyle)){if($$.getComputedStyle($a).position=='relative'){$b=$a}
else if($$.getComputedStyle($_).position=='relative'){$b=$_}}
else if($a.currentStyle){if($a.currentStyle.position=='relative'){$b=$a}
else if($_.currentStyle.position=='relative'){$b=$_}}
else if($a.style.position=='relative'){$b=$a}
else if($_.style.position=='relative'){$b=$_}
if($b){var $d=$b.getBoundingClientRect()
$c.top=$d.top+$$.pageYOffset-$_.clientTop
$c.left=$d.left+$$.pageXOffset-$_.clientLeft}
return $c}
if((typeof F==='function')&&F.prototype&&!F.__jx__no_fqname){F.prototype.__jx__fqname_chain=[(F.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Mobile"].join('')
F.prototype.__jx__fqname="meshim_widget_utils_Mobile"}
return F})()
b.__$$__meshim_common_GeoAccessFactory=(function(){var x=b.__$$__meshim_common_GeoAccess,y='VN'.toUpperCase(),z='VN'.toUpperCase()
if(y.charAt(0)=='<')y='geo'
if(z.charAt(0)=='<')z='geo'
A.countryCode=(y==='geo')?z:y
function A(C,D){this.clusters_config=C
this.countryCode=(y==='geo')?z:y
try {if(D.length<=0)throw 'SSI cluster definition not found'
if(D.charAt(0)=='<')throw 'SSI not processed'
this.clusters_config=JSON.parse(D)}catch(E){;}}
var B=A.prototype
B.getGeoCode=function C(){return this.countryCode}
B.getGeoAccess=function C(D){return new x(this.clusters_config,this.countryCode,D||[])}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccessFactory"].join('')
A.prototype.__jx__fqname="meshim_common_GeoAccessFactory"}
return A})()
b.__$$__jx_ui_FullFrame=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(q.bugs.noBoxSizing){var E=this.table=new x(z,null,null,null,{tagName:'table'}),F=this.tbody=new x(E,null,null,null,{tagName:'tbody'}),G=this.tr=new x(F,null,null,null,{tagName:'tr'}),H=this.td=new x(G,null,null,null,{tagName:'td'}),I=this
this.table.destroy=function(){I.destroy()}
this.table.empty=function(){I.empty()}
this.setPadding=function(J){this.td.setPadding(J)
return this}
this.show=function(){this.table&&this.table.show()
return this}
this.hide=function(){this.table&&this.table.hide()
return this}
x.call(this,H,A,B,C,D)
E.style.tableLayout='fixed',E.style.borderCollapse='collapse'
F.style.height=F.style.width=this.style.height=this.style.width='100%'
E.setTop(0).setLeft(0).setWidth('100%').setHeight('100%').setPosition('absolute').applyConstraints()
this.style.position='relative',this.style.overflow='auto'
E.defaultPlacement=this}
else{this.setPadding=function(J){if(!i(J))return this
J=J.split(' ')
J[0]=parseInt(J[0],10)
J[1]=parseInt(J[1],10)
J[2]=parseInt(J[2],10)
J[3]=parseInt(J[3],10)
if(isNaN(J[0])){J[3]=J[2]=J[1]=J[0]=0}
else if(isNaN(J[3])){if(isNaN(J[1])){J[3]=J[2]=J[1]=J[0]}
else if(isNaN(J[2])){J[3]=J[1]
J[2]=J[0]}
else{J[3]=J[1]}}
this.setTop(parseInt(J[0],10)).setRight(parseInt(J[1],10)).setBottom(parseInt(J[2],10)).setLeft(parseInt(J[3],10))
return this}
x.call(this,z,A,B,C,D)
this.setStyle({top:0,bottom:0,left:0,right:0,overflow:'auto',position:'absolute'})}
this.setStyle(B)
this.setAttributes(D)}
y.prototype=e(x.prototype)
y.prototype.destroy=function(){x.prototype.destroy.call(this)
if(this.table){x.prototype.empty.call(this.table)
this.table.empty=null
x.prototype.destroy.call(this.table)
this.table=this.tbody=this.tr=this.td=null}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_FullFrame"].join('')
y.prototype.__jx__fqname="jx_ui_FullFrame"}
return y})()
b.__$$__meshim_widget_widgets_Body=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"lineHeight":"1.2","marginBottom":"$$marginL"},"&.short":{"marginBottom":"0"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Body"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Body"}
return y})()
b.__$$__meshim_widget_widgets_profileCard_MemberName=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=null
function J(L){F.setText(L||'')}
function K(L){if(I===L)return
I&&F.autounbind(I,'value',J)
I=L
I&&F.autobind(I,'value',J)}
F.setDataNode=K})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_MemberName
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis","fontWeight":"bold","height":"15px","lineHeight":"12px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_MemberName"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_profileCard_MemberName"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_menu_Header=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Header
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"marginBottom":"$$margin","color":"$$menuHeaderColor"},"&.item":{"margin":"$$menuItemPadding"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Header"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Header"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ErrorMessage=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"marginTop":"$$marginS","marginBottom":"$$margin","color":"$$errorMessageColor","fontWeight":"$$errorMessageFontWeight","fontStyle":"$$errorMessageFontStyle"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ErrorMessage"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_ErrorMessage"}
return y})()
b.__$$__meshim_widget_widgets_Emoticon=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
this.on('focus',function(){this.addClass('focus')})
this.on('blur',function(){this.removeClass('focus')})}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Emoticon"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Emoticon"}
return y})()
b.__$$__jx_ui_Localizer=(function(){var x=b.__$$__jx_ui_Widget
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
this.childConstructors=[]
this.childAttributes=[]
this.delimiter='@'
x.call(this,A,B,C,D,E)
var F=this
this._updateContent=function(){F.updateContent()}
v&&v.onLanguage&&v.onLanguage(this._updateContent)
this.onDestruction(function(){v&&v.unLanguage&&v.unLanguage(F._updateContent)})}
y.prototype=e(x.prototype)
y.prototype.appendChild=function(A){if(g(A)){this.childConstructors.push(A[0])
this.childAttributes.push(A[4])
this._localizer_appendchild_override||this.updateContent()}
else x.prototype.appendChild.call(this,A)}
y.prototype.updateContent=function(){this.setContent(this.getContent())}
y.prototype.getContent=function(){return this.content}
y.prototype.setContent=function(A){this.content=A
this.empty()
if(!A)return
A.toString&&(A=A.toString())
var B=A,C=B.length,D=0,E,F=this.delimiter,G=F.length,H=0
while(D<C&&D!=-1){E=B.indexOf(F,D)
if(E==-1){E=C}
if(E>D){this._localizer_appendchild_override=!0
x.prototype.appendChild.call(this,[x,null,null,[z(B.slice(D,E))],{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
D=E}
if(E==D&&E!=C){var I=B.indexOf(F,E+G)
if(I==-1)I=C
this._localizer_appendchild_override=!0
x.prototype.appendChild.call(this,[this.childConstructors[H]||x,null,null,[z(B.slice(D+G,I))],this.childAttributes[H]||{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
D=I+G
H++}}
return this}
y.prototype.setChildProperties=function(A,B,C){this.childConstructors[A]=B
this.childAttributes[A]=C}
y.prototype.clearChildProperties=function(){this.childConstructors.length=this.childAttributes.length=0}
y.prototype.getDelimiter=function(){return this.delimiter}
y.prototype.setDelimiter=function(A){this.delimiter=A
this.updateContent()
return this}
function z(A){return A.replace(/&#([0-9]{1,4});/g,function(B,C){return String.fromCharCode(C)})}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Localizer"].join('')
y.prototype.__jx__fqname="jx_ui_Localizer"}
return y})()
b.__$$__jx_ui_Application=(function(){var x=b.__$$__jx_ui_Widget
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='div')
E.position||(E.position='absolute')
E.visible||(E.visible='hidden')
E.margin||(E.margin='0')
E.padding||(E.padding='0')
E.border||(E.border='0')
E.height||(E.height='0')
E.width||(E.width='0')
x.call(this,A,B,C,D,E)}
y.prototype=e(x.prototype)
y.prototype.setDesktop=function(A){if(!n(A))return
var B=document.getElementsByTagName('head')[0]
B.appendChild(z('viewport','user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1'))
if(q.isIOS){B.appendChild(z('apple-mobile-web-app-capable','yes'))
B.appendChild(z('apple-mobile-web-app-status-bar-style','black-translucent'))}}
function z(A,B){var C=document.createElement('meta')
C.name=A
C.content=B
return C}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Application"].join('')
y.prototype.__jx__fqname="jx_ui_Application"}
return y})()
b.__$$__jx_ui_Image=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='img')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.getAlt=function(){return this.dom.alt}
y.prototype.setAlt=function(z){this.dom.alt=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Image"].join('')
y.prototype.__jx__fqname="jx_ui_Image"}
return y})()
b.__$$__jx_ui_StyleSheet=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
var E=z.ownerDocument
if(!D)D={}
D.tagName||(D.tagName='style')
x.call(this,E.getElementsByTagName('head')[0],A,B,null,D)
this.dom.type='text/css'
this.addChildren(C)}
y.prototype=e(x.prototype)
y.prototype.getText=function(){return this.dom.styleSheet?this.dom.styleSheet.cssText:x.prototype.getText.call(this)}
y.prototype.addChildren=function(z){if(!z||!z.length)return
if('styleSheet' in this.dom){if(!this.dom.styleSheet){this.destroy()
return}
this.dom.styleSheet.cssText+=z.join('')}
else x.prototype.addChildren.call(this,[z.join('')])}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_StyleSheet"].join('')
y.prototype.__jx__fqname="jx_ui_StyleSheet"}
return y})()
b.__$$__meshim_widget_widgets_Toast=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Toast
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"color":"$$toastColor","background":"$$toastBg","padding":"$$toastPadding","borderWidth":"$$toastBorderWidth","borderStyle":"$$toastBorderStyle","borderColor":"$$toastBorderColor","radius":"$$toastRadius","boxShadow":"$$toastShadow"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Toast"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Toast"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_Form=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='form')
x.call(this,z,A,B,C,D)
this.on('submit',function(E){if(!this.validate()){E.preventDefault()
return}})
this.on('reset',function(E){E.preventDefault()
this.reset()})}
y.prototype=e(x.prototype)
y.prototype.submit=function(){this.dom.submit()
return this}
y.prototype.reset=function(){var z=this.getElements()
for(var A=0;A<z.length;A++)z[A].reset&&z[A].reset()
return this}
y.prototype.getElements=function(){var z=[]
for(var A=0,B=this.dom.elements.length;A<B;A++)z.push(this.dom.elements[A].jx_wrapper||this.dom.elements[A])
return z}
y.prototype.getAutocomplete=y.prototype.getAutoComplete=function(){return this.dom.autocomplete}
y.prototype.setAutocomplete=y.prototype.setAutoComplete=function(z){if(this.dom.autocomplete===a)return this
if(z==='on'||z==='off'){this.dom.autocomplete=z
return this}
z=n(z)
this.dom.autocomplete=z?'on':'off'
return this}
y.prototype.getNoValidate=function(){return this.dom.noValidate}
y.prototype.setNoValidate=function(z){this.dom.noValidate=n(z)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Form"].join('')
y.prototype.__jx__fqname="jx_ui_Form"}
return y})()
b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","display":"inline-block","width, height":"6px","background":"$$toastColor","borderRadius":"50%","opacity":"0.5","transition":"all 0.3s","&.dark":{"opacity":"1"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_image_Dot"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_image_Dot"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_profileCard_TitleHolder=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{"class":"titleHolder"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I
function J(L){F.setText(L||'')}
function K(L){if(I===L)return
I&&F.autounbind(I,'value',J)
I=L
I&&F.autobind(I,'value',J)}
F.setDataNode=K})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_TitleHolder
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_TitleHolder"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_profileCard_TitleHolder"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_IconFont=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false","class":"icon_font"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I={'zopim':'&#xe000;','message':'&#x1f4ac;','tick':'&#x2714;','cross':'&#x2716;','popout':'&#x2197;','popin':'&#x2199;','minimize':'&#x2212;','plus':'&#x002b;','smiley':'&#x263a;','happy':'&#xe001;','happier':'&#xe002;','sad':'&#xe003;','thumbsup':'&#x1f44d;','thumbsdown':'&#x1f44e;','sadder':'&#xe004;','brand':'&#xe005;','brand_suffix':'&#xe006;','brand_extended':'&#xe005;&#xe006;','avatar_placeholder':'&#xe007;','email':'&#x1f4e7;','facebook':'&#xe008;','twitter':'&#xe009;','google':'&#xe00a;','facebook_out':'&#xe00d;','twitter_out':'&#xe00c;','google_out':'&#xe00b;','badge_default':'&#xe00e;','warning_sign':'&#x26a0;','arrow_left':'&#x2190;','arrow_up':'&#x2191;','arrow_down':'&#x2193;','arrow_right':'&#x2192;','pencil':'&#x270e;','dustbin':'&#xe00f;','sound_on':'&#x1f50a;','sound_off':'&#x1f507;','send':'&#x000BB;','exclamation':'&#x0021;','brand_zendesk':'&#xe010;'}
F.setIcon=function(J){F.setHTML(I[J]||J||'')}
F.setFont=function(J){F.setFontFamily(J||'')}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_IconFont
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","speak":"none","fontStyle":"normal","fontWeight":"normal","lineHeight":1,"WebkitFontSmoothing":"antialiased"},"&:focus":{"outline":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_IconFont"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_IconFont"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_StorageController=(function(){var x=b.__$$__meshim_widget_controllers_DOMStorage,y=b.__$$__meshim_widget_controllers_Cookie,z=b.__$$__meshim_widget_Config,A=b.__$$__meshim_widget_utils_Utils,B='__zlcstore',C='__zlcmid',D='__zlcprivacy',E
if(/\b(?:\d{1,3}\.){3}\d{1,3}/.test(document.location.hostname)){E=document.location.hostname}
else{E=A.getEffectiveTLD()}
var F=8*60*1000,G=z.ACCOUNT_KEY,H={init:I,DOM:{saveVariable:S,getVariable:T},Cookie:y,clearAll:N,setIdentity:K,getIdentity:J,getAllowCookieLaw:L,setAllowCookieLaw:M}
function I(){}
function J(){if(z.IS_POPOUT){return R('mid')}
var U=O()
if(U){return U}
return y.get(C)||''}
function K(U){y.set(C,U,{path:'/',ttl:365,domain:E})}
function L(){var U=P()
if(typeof U=='boolean')return U
var V=y.get(D)
V=parseInt(V,10)
if(V===0)return !1
else if(V===1)return !0
else return a}
function M(U){U=n(U)
if(U)U=1
else U=0
y.set(D,U,{path:'/',ttl:365,domain:E})}
function N(){y.remove(C,{path:'/',domain:E})
x.remove(B)}
function O(){var U=y.getJSONCookie('__zlcid')
y.remove('__zlcid',{path:'/'})
if(U['mID']){return U['mID']}
var V=Q('__zlcstore')
y.remove('__zlcstore',{path:'/',domain:E})
if(V&&V['mID']){return V['mID']}}
function P(){var U,V=Q('__zlcprivacy')
if(typeof V=='boolean'){U=V
M(V)}
return U}
function Q(U){var V=y.getJSONCookie(U)
return V[G]}
function R(U){var V=window.location.search.slice(1).split('&'),W
for(var X=0;X<V.length;X++){W=V[X].split('=')
if(W[0]==U){try {return window.decodeURIComponent(W[1]||'')}catch(Y){return ''}}}
return ''}
function S(U,V){var W=x.get(B)||{}
if(!W[G])W[G]={}
var X=W[G]
X[U]=V
X['timestamp']=+new Date()
x.set(B,W)}
function T(U){var V=x.get(B)||{}
if(!V[G])return {}
var W=V[G]
if(!W.timestamp)return W[U]||{}
var X=+new Date()
if(X-W.timestamp>F)return {}
else return W[U]}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_StorageController"].join('')
H.prototype.__jx__fqname="meshim_widget_controllers_StorageController"}
return H})()
b.__$$__jx_ui_Frame=(function(){var x=b.__$$__jx_ui_Widget,y=q.isQuirks,z=q.bugs.noBoxSizing,A=z?'block':'table'
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!G)G={}
this.iframe_quirks=(C.ownerDocument!=document)
this.container=new x(C,null,null,null,{})
this.container.addClass('container')
var H=this
this.container.destroy=function(){H.destroy()}
this.container.empty=function(){H.empty()}
this.container_middle=new x(this.container,null,null,null,{})
this.container_middle.addClass('container_middle')
x.call(this,this.container_middle,D,E,F,G)
this.useDisplay=!0
if(z){this.container.setStyle('position','relative')
this.container_middle.setStyle('position','absolute')
this.setStyle('position','relative')
if(y||this.iframe_quirks)this.container_middle.setStyle('width','100%').setStyle('left',0)}
else{G.visible||this.container.setStyle('display','table')
this.container_middle.setStyle('display','table-cell').setStyle('width','100%')
this.setStyle('display','table')}
this.container.setStyle('overflow','hidden').setStyle('width','100%').setStyle('height','100%')
G.hAlign||this.setHAlign()
G.vAlign||this.setVAlign()}
B.prototype=e(x.prototype)
B.prototype.show=function(){if(this.container&&this.container.dom.style.display!=A){this.container.setVisible(A)
this.fire('show')}
return this}
B.prototype.hide=function(){if(this.container&&this.container.dom.style.display!='none'){this.container.setVisible('none')
this.fire('hide')}
return this}
B.prototype.isVisible=function(){return this.container&&this.container.dom.style.display==A}
B.prototype.setZIndex=function(C){this.container&&this.container.setZIndex(C)
return this}
B.prototype.destroy=function(){x.prototype.destroy.call(this)
if(this.container){x.prototype.empty.call(this.container)
this.container.empty=null
x.prototype.destroy.call(this.container)
this.container=this.container_middle=null}}
B.prototype.getHAlign=function(){return this.hAlign}
B.prototype.setHAlign=function(C){switch(C){case 'left':if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','left')}
else if(z){this.setStyle('margin-left','0').setStyle('margin-right','auto')}
else{this.container_middle.setStyle('left','0%').setStyle('right','')}
this.hAlign=C
break
case 'right':if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','right')}
else if(z){this.setStyle('margin-left','auto').setStyle('margin-right','0')}
else{this.container_middle.setStyle('left','').setStyle('right','0%')}
this.hAlign=C
break
default:if(y||this.iframe_quirks){this.container_middle.setStyle('text-align','center')}
else if(z){this.container_middle.setStyle('left','').setStyle('right','')}
this.setStyle('margin-left','auto').setStyle('margin-right','auto')
this.hAlign='center'}}
B.prototype.getVAlign=function(){return this.vAlign}
B.prototype.setVAlign=function(C){switch(C){case 'top':if(z){this.container_middle.setStyle('top','0%').setStyle('bottom','')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','top')}
this.vAlign=C
break
case 'bottom':if(z){this.container_middle.setStyle('top','').setStyle('bottom','0%')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','bottom')}
this.vAlign=C
break
default:if(z){this.container_middle.setStyle('top','50%').setStyle('bottom','')
this.setStyle('top','-50%')}
else{this.container_middle.setStyle('vertical-align','middle')}
this.vAlign='middle'}
return this}
B.prototype.getAlign=function(){return this.hAlign+' '+this.vAlign}
B.prototype.setAlign=function(C){if(typeof C!='string')return
C=C.replace(/^\s*|\s*$/,'').replace(/\s+/g,' ').split(' ')
this.setHAlign(C[0])
this.setVAlign(C[1])}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_ui_Frame"].join('')
B.prototype.__jx__fqname="jx_ui_Frame"}
return B})()
b.__$$__meshim_widget_themes_Simple=(function(){var x=b.__$$__meshim_common_Chroma,y=b.__$$__meshim_widget_utils_Color,z=b.__$$__meshim_widget_themes_Base,A={}
A._super=z
A.defaults={colors:{primary$string:'#555555',banner$string:'#EEEEEE',bubble$string:'#E59341'}}
A.generate=function(B){var C="#444",D="#666",E="#999",F="#AAA",G="#DDD",H="#EEE",I="#FBFBFB",J=x.hex(B['colors']['primary$string']),K=J.luminance(),L=x.hex(B['colors']['banner$string']||B['colors']['primary$string']),M=120/255,N=200/255
function O(Z){var $$={},$_=Z.luminance(),$a=Z.darken(10),$b=Z.lighten(10),$c=x.interpolate(Z,y.black,0.5,'rgb'),$d=x.interpolate(Z,y.black,0.7,'rgb')
$$.color=new x.ColorScale({colors:[y.white,y.white,$c.darken(10),$c,$c],positions:[0,M-0.001,M+0.001,N,1],mode:"rgb"}).get($_).hex()
$$.bg=new x.ColorScale({colors:[Z,Z,Z.darken(10)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
$$.iconColor=new x.ColorScale({colors:[Z,Z,$d,$d.lighten(10)],positions:[0,M-0.001,M+0.001,1],mode:"rgb"}).get($_).hex()
$$.borderColor=new x.ColorScale({colors:[$a,$a,Z.darken(20)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
$$.hoverBg=new x.ColorScale({colors:[$b,Z,Z.darken(5)],positions:[0,N,1],mode:"rgb"}).get($_).hex()
return $$}
var P=O(J),Q=O(J.lighten(15)),R=O(L),S=120/255,T=220/255
function U(Z,$$){var $_={},$a=Z.luminance(),$b=x.interpolate(Z,y.black,$$?0.7:0.5,'rgb'),$c=$$?x.color(y.white):x.interpolate(Z,y.white,0.5,'rgb')
$_.color=new x.ColorScale({colors:[$c,$c.lighten(50),$b,$b.lighten(10)],positions:[0,S-0.001,S+0.001,1],mode:"rgb"}).get($a).hex()
$_.bg=Z.hex()
return $_}
var V=U(J),W=U(L,!0),X={borderColor:G,headColor:V.color,headBg:J,contentColor:C,contentBlockBg:H,placeholderColor:F,inputColor:D,inputBorderColor:G,inputFocusBorderColor:y.clampLuminance(J,0.2,0.4).hex(),buttonColor:P.color,buttonBg:P.bg,buttonBorderColor:P.borderColor,buttonHoverBg:P.hoverBg,buttonShadow:"0px 1px 2px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,0.25)",buttonSecColor:Q.color,buttonSecBg:Q.bg,buttonSecBorderColor:Q.borderColor,buttonSecHoverBg:Q.hoverBg,scrollableFrameTopHeight:"5px",scrollableFrameTopBackground:"gradient top rgba(0,0,0,0.05) rgba(0,0,0,0)",scrollableFrameTopBackgroundColor:"transparent",scrollableFrameBottomHeight:"5px",scrollableFrameBottomBackground:"gradient top rgba(0,0,0,0) rgba(0,0,0,0.05)",scrollableFrameBottomBackgroundColor:"transparent",toastColor:D,toastBg:"rgba(255, 255, 255, 0.9)",toastBorderColor:G,toastShadow:"$$windowShadow",avatarBorderColor:G,profileCardAvatarBorderWidth:0,profileCardAvatarShadow:"0px 1px 2px rgba(0,0,0,0.2)",profileCardNameColor:y.clampLuminance(J,0,0.2).hex(),profileCardTitleColor:F,bottomBorderWidth:"1px 0 0",bottomBorderColor:H,chatMotifHill:H,chatMotifBubble:"#BBB",chatButtonColor:P.color,chatButtonBg:J.hex(),chatButtonBorderWidth:K>N?"":0,chatButtonBorderColor:K>N?G:"",faviconBg:new x.ColorScale({colors:[J.lighten(15),J.lighten(5),J.darken(5),J.darken(5)],positions:[0,0.05,0.0501,1],mode:"rgb"}).get(K).hex(),windowColor:D,windowPadding:"3px",windowShadow:"0px 0px 3px 2px rgba(0,0,0,0.1)",windowContentBorderWidth:"0 1px",windowContentBorderColor:G,menuBorderColor:G,menuItemHoverBg:H,titleBarColor:V.color,titleBarBg:V.bg,titleBarBorderWidth:K>T?'1px':0,titleBarBorderColor:K>T?G:'',titleBarIconsColor:'',actionBarColor:E,actionBarBorderWidth:"0 1px 1px 1px",actionBarBorderColor:G,actionBarHoverColor:D,chatPanelProfileCardContainerBorderWidth:"0 0 1px",chatPanelProfileCardContainerBorderColor:H,chatLogVisitorBubbleBg:I,chatLogVisitorBubbleBorderColor:H,chatLogAgentBubbleBg:x.interpolate(y.clampLuminance(J,0.4,0.8),y.white,0.8,'rgb').hex(),chatLogAgentBubbleBorderColor:x.interpolate(y.clampLuminance(J,0.4,0.8),y.white,0.4,'rgb').hex(),chatLogAvatarBorderWidth:"$$borderWidth",chatLogFileProgressBg:V.bg,chatTextAreaBorderWidth:"1px 0 0",chatTextAreaBorderColor:H,chatTextAreaInputShadow:"inset 0px 1px 3px rgba(0,0,0,0.1)",chatTextAreaInputFocusShadow:"inset 0px 1px 3px "+x.interpolate(y.clampLuminance(J,0.2,0.4),y.white,0.5,'rgb').hex(),chatTextAreaDropColor:C,chatTextAreaDropBg:H,chatTextAreaDropBorderWidth:"1px",chatTextAreaDropBorderStyle:"dashed",chatTextAreaDropBorderColor:C,badgeBg:W.bg,badgeBorderWidth:0,badgeContentColor:W.color,badgeContentBg:W.bg,badgeContentBorderWidth:0,badgeFormBg:y.white,badgeFormBorderWidth:"1px 0",badgeFormBorderColor:G,badgeIconColor:R.iconColor},Y={authButtonColor:C,authButtonBg:"gradient top rgb(251,251,251) rgb(227,227,227)",authButtonBorderColor:G,authButtonHoverBg:"gradient top rgb(227,227,227) rgb(251,251,251)",bottomBorderWidth:0,menuBg:H,menuHeaderColor:E,menuItemHoverBg:G,actionBarColor:V.color,actionBarBg:J.darken(10).hex(),actionBarBorderWidth:0,actionBarHoverColor:V.color,chatPanelProfileCardContainerBorderColor:G,chatTextAreaBorderColor:G,chatTextAreaInputShadow:"none",chatTextAreaInputBorderWidth:0,chatTextAreaInputRadius:0,chatTextAreaInputFocusShadow:"none",brandingLinkColor:E}
return {standard:X,mobile:Y}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Simple"].join('')
A.prototype.__jx__fqname="meshim_widget_themes_Simple"}
return A})()
b.__$$__jx_ui_ViewStack=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
this.index=a
this.length=0
this.currentChild=null
var E=this
this._onChildHide=function(){switch(E.onChildHide){case 'next':E.next(!0)
break
case 'prev':E.prev(!0)
break
case 'first':E.first(!0)
break
case 'last':E.last(!0)
break
default:var F=parseInt(E.onChildHide,10)
if(isNaN(F))break
E.setIndex(F,!0)}}
this.onDestruction(function(){E.currentChild=null})}
y.prototype=e(x.prototype)
y.prototype.addChildren=function(z){var A=z&&z.length
if(!z||!A)return
for(var B=0;B<A;B++)if(g(z[B]))this.appendChild(z[B])
else ;}
y.prototype.appendChild=function(z){if(g(z)){this.children.push(z)}
else if(z.dom){x.prototype.appendChild.call(this,z)
z.setVisible('none')}
else{this.dom.appendChild(z)}
return z}
y.prototype.removeChild=function(z){try {if(g(z));
else if(z.dom){this.dom.removeChild(z.dom)
z.parentNode=null}
else{this.dom.removeChild(z)}
var A=f(z,this.children)
if(A!=-1)this.children.splice(A,1)}catch(B){;}}
y.prototype.setIndex=function(z,A){z=parseInt(z,10)
if(!this.validIndex(z)||z==this.index)return
var B=this.currentChild,C
if(!A&&(B?B.fire('beforeIndexChange',z):1)+this.fire('beforeIndexChange',z)<2){return !1}
if(B){this.autounbind(B,'hide',this._onChildHide)
B.setVisible('none')}
this.fire('indexChanging',z)
if(z==-1){this.currentChild=null
this.index=z
this.fire('indexChange',z)
return !0}
B=this.children[z]
if(g(B)){B=this.instantiateChild(B)
C=!0}
B.setVisible('block')
this.autobind(B,'hide',this._onChildHide)
this.currentChild=B
this.index=z
C&&this.fire('instantiate',z)
this.fire('indexChange',z)
return !0}
y.prototype.instantiateChild=function(z){if(!g(z)){return}
var A=f(z,this.children)
if(A==-1){return}
z=new z[0](this,z[1],z[2],z[3],z[4])
this.children[A]=z
this.children.pop()
return z}
y.prototype.validIndex=function(z){return (z!=null)&&(z<this.getLength())&&(z>=-1)}
y.prototype.next=function(z){return k(this.index,!0)?this.setIndex(0,z):this.setIndex(this.index+1,z)}
y.prototype.prev=function(z){return k(this.index,!0)?this.setIndex(this.getLength()-1,z):this.setIndex(Math.max(this.index-1,0),z)}
y.prototype.first=function(z){return this.setIndex(0,z)}
y.prototype.last=function(z){return this.setIndex(this.getLength()-1,z)}
y.prototype.getName=function(){return this.currentChild&&this.currentChild.getName()}
y.prototype.setName=function(z){if(!z)return this.setIndex(-1)
for(var A=0,B=this.children.length;A<B;A++){if(g(this.children[A])){if(this.children[A][4]&&this.children[A][4].name===z){return this.setIndex(A)}}
else{if(this.children[A].getName&&this.children[A].getName()===z){return this.setIndex(A)}}}}
y.prototype.isFirst=function(){return this.index<=0}
y.prototype.isLast=function(){return this.index>=this.getLength()-1}
y.prototype.getLength=function(){return this.children.length}
y.prototype.getChildren=function(){return this.children}
y.prototype.getCurrentChild=function(){return this.currentChild}
y.prototype.getIndex=function(){return this.index}
y.prototype.getOnChildHide=function(){return this.onChildHide}
y.prototype.setOnChildHide=function(z){this.onChildHide=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_ViewStack"].join('')
y.prototype.__jx__fqname="jx_ui_ViewStack"}
return y})()
b.__$$__meshim_widget_widgets_BorderOverlay=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"border_overlay"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_BorderOverlay
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width, height":"100%","borderRadius":"inherit"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_BorderOverlay"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_BorderOverlay"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_Label=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='label')
x.call(this,z,A,B,C,D)
if(D.selectable==null)this.setSelectable(!1)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Label"].join('')
y.prototype.__jx__fqname="jx_ui_Label"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_Sanitize,J=b.__$$__meshim_common_Regex,K=b.__$$__meshim_widget_utils_Mobile,L,M=[{name:'email_test',rx:J.search.email,cb:function(T){var U=T[0],V=T[1],W=T[2]
if(!J.tld.test(W))return U
U=U.replace(V,'')
return {original:U,processed:V+'<a href="mailto:'+U+'" target="_top">'+U+'</a>'}}},{name:'url_test',rx:J.search.url,cb:function(T){var U=T[0],V=T[1],W=T[2]
if(!J.tld.test(W))return U
U=U.replace(V,'')
return {original:U,processed:V+'<a href="//'+U+'" target="_blank">'+U+'</a>'}}},{name:'protocol_test',rx:J.search.hurl,cb:function(T){var U=T[0],V=T[1]
U=U.replace(V,'')
return {original:U,processed:V+'<a href="'+U+'" target="_blank">'+U+'</a>'}}},{name:'tel_test',rx:/(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi,cb:function(T){var U=T[0],V=T[1],W=T[2],X=U.replace(V,'').replace(W,'')
return {original:U,processed:(K.isMobileBrowser?'<a href="tel:':'<a href="callto:')+X+'">'+U+'</a>'}}}]
function N(){F.setDataNode=O
F.formatChatMessage=Q}
function O(T){if(L){F.autounbind(L,'value',P)}
L=T.$('msg$string')
F.autobind(L,'value',P)}
function P(T){T=T||''
if(J.file_upload.test(T)){return}
T=Q(T)
F.setHTML(T)}
function Q(T){if(!T)return ''
T=I.html(T)
if(T.onTranslate)T=T.toString()
var U=[T]
for(var V=0;V<M.length;V++){R(U,M[V])}
return S(U)}
function R(T,U){for(var V=T.length;V-->0;){var W=T[V]
if(typeof W==='object')continue
var X=0,Y=[],Z
while(Z=U.rx.exec(W)){var $$=U.cb(Z)
if(typeof $$==='object'){if(Z.index>X)Y.push(W.substring(X,Z.index))
Y.push($$)
X=Z.index+Z[0].length}}
if(Y.length){Y.push(W.substring(X))
T.splice.apply(T,[V,1].concat(Y))}}}
function S(T){var U=''
for(var V=0;V<T.length;V++){if(typeof T[V]==='string')U+=T[V]
else U+=T[V].processed}
return U.replace(/\n/g,'<br>')}
N()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"display":"inline"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatMessage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatMessage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_IFrame=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_HTMLEvent,z=b.__$$__jx_ui_HTMLElement
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
if(!F)F={}
F.tagName||(F.tagName='iframe')
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=B.ownerDocument
this.parentNode=B
this.attributes=F
this.tagName=F.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
y.call(this);(this.dom.seamless!==a)&&(this.dom.seamless=!0)
this.dom.allowTransparency='true'
this.dom.frameBorder='0'
this.style.backgroundColor='transparent'
this.style.verticalAlign='text-bottom'
this.style.visibility='hidden'
B.appendChild(B instanceof z?this:this.dom)
C&&w.set(C,this)
var G
if(q.bugs.noBoxSizing)G='<html><head><style>html,body{height:100%;width:100%;background:none} *{border:0;padding:0;margin:0;}</style></head><body onload="window.isLoaded=true"></body></html>'
else G='<!DOCTYPE html><html><head><style>html,body{height:100%;width:100%;} *{border:0;padding:0;margin:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}</style></head><body onload="window.isLoaded = true"></body></html>'
if(q.isSafari||q.isChrome)this.dom.src='javascript:void(document.write(\''+G+'\'), document.close())'
else this.dom.src='javascript:false'
this.appendToParent(!0)
var H=this.iwin=this.dom.contentWindow,I=this.idoc=r.extend(H.document)
if(!q.isSafari&&!q.isChrome){I.write(G)
I.close()}
this.ihead=I.getElementsByTagName('head')[0]
var J=this.ibody=r.extend(I.body)
v&&v.onLanguage&&v.onLanguage(K)
function K(O){J.parentNode.setAttribute('lang',O)
J.parentNode.setAttribute('dir',v.flip('ltr'))}
v&&v.language&&K(v.language)
J.style.position='relative'
J.parentNode.style.overflowY=J.style.overflowY='hidden'
var L,M
if(q.bugs.noBoxSizing){L=new x(J,null,null,null,{position:'relative',width:'100%',height:'100%',overflow:'hidden'})
L.applyConstraints()
L.setPadding=function(O){J.style.padding=O}}
else{L=new x(J,null,null,null,{position:'absolute',top:0,right:0,bottom:0,left:0,overflow:'hidden'})
L.applyConstraints()}
var N='Background BackgroundImage Border BorderColor BorderStyle BorderWidth Color Cursor FontFamily FontSize FontWeight LetterSpacing LineHeight Opacity Padding Selectable TextAlign'.split(' ')
while((M=N.pop()))this['set'+M]=(function(O){return function(P){L['set'+O](P)
return this}})(M)
this.defaultPlacement=L
this.addChildren(E)
this.style.visibility=''
this.setStyle(D)
this.setAttributes(F)
u.bindIFrame(this)}
A.prototype=e(x.prototype)
A.prototype.destroy=function(){u.unbindIFrame(this)
this.defaultPlacement&&this.defaultPlacement.destroy()
x.prototype.destroy.call(this)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_IFrame"].join('')
A.prototype.__jx__fqname="jx_ui_IFrame"}
return A})()
b.__$$__meshim_widget_widgets_form_Field=(function(){var x=b.__$$__jx_ui_Widget
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.validate=function(z){var A=x.prototype.validate.call(this,z)
A?this.removeClass('invalid'):this.addClass('invalid')
return A}
y.prototype.setRequired=function(z){z=n(z)
this.label_required&&this.label_required.setText(z?' *':'')
this.input&&this.input.setRequired(z)
!z&&this.input&&this.input.hideErrorMessage()
return this}
y.prototype.destroy=function(){this.label=this.label_name=this.label_required=this.input=this.error_message=null
return x.prototype.destroy.call(this)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Field"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_form_Field"}
return y})()
b.__$$__meshim_widget_widgets_Motif=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__jx_ui_Widget
F.setItems=function(J){J=J.split(',')
for(var K=0,L=J.length;K<L;K++)new I(F,null,null,null,{className:J[K]})}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Motif
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Motif"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Motif"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_common_GShape=(function(){var x=b.__$$__meshim_common_VmlShape,y=b.__$$__meshim_common_SvgShape,z=b.__$$__meshim_common_Graphic,A,B=z.detectedGraphicType
switch(B){case 'canvas':A=z.CanvasData
break
case 'vml':A=x
break
case 'svg':A=y
break
case 'div':A=C
break}
function C(){return null}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_GShape"].join('')
A.prototype.__jx__fqname="meshim_common_GShape"}
return A})()
b.__$$__meshim_common_GCanvas=(function(){var x=b.__$$__meshim_common_VmlCanvas,y=b.__$$__meshim_common_SvgCanvas,z=b.__$$__meshim_common_Canvas,A=b.__$$__meshim_common_Graphic,B,C=A.detectedGraphicType
switch(C){case 'canvas':B=z
break
case 'vml':B=x
break
case 'svg':B=y
break
case 'div':B=D
break}
function D(E,F,G,H,I){F=F||w.generateID()
var J=E.ownerDocument,K
K=J.createElement('div')
w.extend(K)
r.extend(K)
w.set(F,K)
var L=!1
K.appendToParent=function(M){if(!w.hasParentNode(K))w.appendChild(E,K)
if(M&&!L){if(E.appendToParent)E.appendToParent(!0)
L=!0}}
K.setViewBox=function(){return}
K.setStyle(G)
K.setAttributes(I)
w.addChildren(K,H)
K.appendToParent()
return K}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_common_GCanvas"].join('')
B.prototype.__jx__fqname="meshim_common_GCanvas"}
return B})()
b.__$$__meshim_widget_widgets_EmoticonPicker=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_Emoticon,J=b.__$$__jx_ui_Widget,K={'ambivalent':':|','angry':':(','blush':':?','confused':':?','crazy':':?','crying':':?','frown':':?','gasp':':?'},L=6,M,N,O=[]
F.setDataNode=function(R,S){if(M)F.autounbind(M,'value',P)
M=R
N=S
if(M)F.autobind(M,'value',P)}
function P(R){F.setDisplay(R?'':'none')}
function Q(){var R,S=0
for(var T in K)if(K.hasOwnProperty(T)){R=new I(F,null,null,null,{className:'meshim_widget_widgets_Emoticon '+T,title:T,value:K[T],tabIndex:0})
R.setAttribute('data-index',S)
O.push(R)
if((++S)%L==0)new J(F,null,null,null,{tagName:'br'})}
F.on('click',function(U){var V=U.target.jx_wrapper
if(V==F)return
while(V.parentNode!==F)V=V.parentNode
var W=V.getValue()
if(W){N&&N.update(V.getValue())
M&&M.update(!1)}})
F.on('keydown',function(U){var V
U.target.jx_wrapper
switch(U.keyCode){case 13:V=U.target.jx_wrapper.getValue()
if(V){N&&N.update(U.target.jx_wrapper.getValue())
M&&M.update(!1)}
break
case 27:M&&M.update(!1)
break
case 9:return
case 38:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)-L]
V&&V.focus()
break
case 40:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)+L]
V&&V.focus()
break
case 37:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)-1]
V&&V.focus()
break
case 39:V=O[parseInt(U.target.jx_wrapper.getAttribute('data-index'),10)+1]
V&&V.focus()
break
default:return}
U.preventDefault()})}
Q()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_EmoticonPicker
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".meshim_widget_widgets_Emoticon":{"&:focus":{"outline":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmoticonPicker"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_EmoticonPicker"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_FileUploader=(function(){var x=b.__$$__jx_ui_Form
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
x.call(this,z,A,B,C,D)
this.setAttribute('method','post')
this.setAttribute('enctype','multipart/form-data')}
y.prototype=e(x.prototype)
y.prototype.submit=function(){if(!this.path)return
this.setAttribute('action',this.path)
var z='_widget_fileuploader_'+(+new Date()),A
if(q.bugs.noBoxSizing){A=this.doc.createElement('<iframe name="'+z+'">')}
else{A=this.doc.createElement('iframe')
A.setAttribute('name',z)}
A.setAttribute('id',z)
A.style.display='none'
this.dom.target=z
this.appendChild(A)
x.prototype.submit.call(this)}
y.prototype.setPath=function(z){this.path=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FileUploader"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_FileUploader"}
return y})()
b.__$$__meshim_widget_widgets_motif_Chat=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Motif,null,null,[],{"items":"hill, bubble b1, bubble b2, bubble b3, bubble b4, bubble b5"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){if(q.isOpera){I('b3')
I('b4')
I('b5')}
if(q.isIE8){F.setDisplay('none')}
function I(J){var K=F.dom.getElementsByClassName(J)[0]
if(!K)return
K.style.OTransform='none'
K.style.transform='none'}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_motif_Chat
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Motif.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Motif
x.__jx__jcss={"**self":{"width":"100%","height":"50px","fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","*display":"none"},"*":{"position":"absolute"},".hill":{"width":"95%","height":"20px","bottom":0,"left":"2.5%","borderTopLeftRadius":"50% 100%","borderTopRightRadius":"50% 100%","background":"$$chatMotifHill"},".bubble":{"top":0,"color":"$$chatMotifBubble","&:before":{"content":"'\\1f4ac'"}},".b1":{"fontSize":"24px","top":"12px","left":"10%","opacity":0.4},".b2":{"fontSize":"16px","top":"16px","left":"21%"},".b3":{"fontSize":"16px","top":"13px","right":"33.5%","opacity":0.4},".b4":{"fontSize":"16px","top":"14px","right":"26%"},".b5":{"fontSize":"35px","top":0,"right":"11%","opacity":0.2},".b3, .b4, .b5":{"transform":"scale(-1, 1)"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_motif_Chat"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_motif_Chat"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Header=(function(){var x=b.__$$__meshim_widget_widgets_Body
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)}
y.__jx__jcss={"**self":{"fontWeight":"bold"}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Header"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Header"}
return y})()
b.__$$__meshim_widget_components_chatButton_BubbleVector=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_common_GCanvas,null,null,[[b.__$$__meshim_common_GShape,"content",null,[],{"id":"content","fill":"linear, top, from(#E0741B), to(#E0981B)","stroke":"#c2c2c2"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=8,K=8,L=8,M=12,N=19,O=2,P=[['tl','M',0,K],['cs',J,-K,0],['tr','L',-J,0],['cs',J,K,0],['br','L',0,-K-L],['cs',-J,K,0],['bl','L',J+N+M,-L],['bl','L',J+N+M/2,0],['bl','L',J+N,-L],['bl','L',J,-L],['cs',-J,-K,0],['z']]
function Q(){G.setStrokeWidth(O)
F.setDimension=V
F.setFill=function(W){G.setFill(W)}}
function R(W,X){var Y=/^t[lr]|b[lr]$/,Z={'tl':[W.x,W.y],'tr':[W.x+W.width,W.y],'br':[W.x+W.width,W.y+W.height],'bl':[W.x,W.y+W.height]}
X=X.slice()
for(var $$=0;$$<X.length;$$++){var $_=X[$$],$a=$_[0]
if(Y.test($a))X[$$]=S(Z[$a],$_)}
return X}
function S(W,X){var Y=W[0],Z=W[1],$$=[]
X=X.slice()
X.shift()
$$.push(X.shift())
while(X.length>1){var $_=X.splice(0,2)
$$.push(Y+$_[0])
$$.push(Z+$_[1])}
return $$}
function T(W){var X='',Y={"cs":U}
for(var Z=0,$$=W.length;Z<$$;Z++){var $_=W[Z],$a=$_[0]
if(Y[$a]){$_=Y[$a].apply(null,$_.slice(1))}
X+=' '+$_.join(' ')}
return X}
function U(W,X,Y){var Z=W,$$=X,$_=Math.round(0.5522848*Z),$a=Math.round(0.5522848*$$),$b=Y?-Z*$$:Z*$$
if($b>0)return ['c',$_,0,Z,$$-$a,Z,$$]
else return ['c',0,$a,Z-$_,$$,Z,$$]}
function V(W,X){var Y={x:O-1,y:O-1,width:W-2*O+2,height:X-2*O-3},Z=T(R(Y,P))
F.setWidth(W+'px').setHeight(X+'px').setViewBox('0 0 '+W+' '+X)
G.setPath(Z)
return F}
Q()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleVector
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_common_GCanvas.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_common_GCanvas
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleVector"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleVector"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_DataController=(function(){var x=b.__$$__jx_data_DataNode,y=b.__$$__meshim_widget_Config,z=b.__$$__meshim_widget_controllers_DefaultDataNode,A=b.__$$__meshim_widget_controllers_StorageController,B=b.__$$__meshim_widget_utils_Utils,C=b.__$$__meshim_widget_utils_Mobile,D={'last_host':'connection.server$string','chatting':'livechat.channel.chatting$bool','account_status':'livechat.account.status$string','settings':'livechat.settings','ui':'livechat.ui','notification':'livechat.profile.notification','departments':'livechat.departments','log':'livechat.channel.log','features':'livechat.features'},E=['livechat.settings.cached$bool','livechat.ui.chat_window.menu_stack_name$string','livechat.ui.chat_window.pre_chat_form.submitted$bool','livechat.ui.post_chat_form.stack_index$int','livechat.ui.offline_form.stack_index$int','livechat.ui.theme_reload$bool','livechat.ui.theme_loaded$bool','livechat.ui.popout$bool','livechat.ui.mobile$bool','livechat.ui.chat_window.chat_panel.file_toast.error$string','livechat.ui.departments.filter_enabled$bool'],F,G,H=0,I,J
function K($_,$a,$b){Y.root=F=$_ instanceof x?$_:new x('root')
I=$b
if(!y.ACCOUNT_KEY&&!$a)return
if($a){G=$a
F.$$('livechat.ui.mockup$bool').update(!0)}
if(C.isMobileBrowser){F.$$('livechat.ui.mobile$bool').update(!0)
if(C.isMobileWhitelist){F.$$('livechat.ui.mobile_whitelist$bool').update(!0)}
if(C.isMobileTablet){F.$$('livechat.ui.tablet$bool').update(!0)}}
if(window.$zopim_popout){F.$$('livechat.ui.popout$bool').update(!0)}
else if(!$a){u.setIFrameOnly(!0)}
var $c=$$(z),$d
if(!G){for(var $e in D)if(D.hasOwnProperty($e)){var $f=A.DOM.getVariable($e)
if($e=='log'&&$f&&(typeof $f=='object')){F.$('livechat').$('temp').update({prev_log:$f})}
if($e=='settings'&&$f&&B.getKeys($f).length){F.$('livechat').$('settings').update({cached$bool:!0})}
if(typeof $f=='object'){$d=B.getKeys($f)
if($d&&$d.length)B.fullyExtend(B.descendsObj($c,D[$e]),$f)}
else{B.insertObj(D[$e],$f,$c)}}}
F.update($c)
if(!G){r.window.on('unload',function(){if(!L.canStoreCookie())return
for(var $h=0,$i=E.length;$h<$i;$h++){F.$$(E[$h]).update(null)}
var $j,$k
for($j in D)if(D.hasOwnProperty($j)){switch($j){case 'settings':$k=I.getServerSettings()
break
case 'log':$k=F.$('livechat').$('channel').$('chatting$bool').getValue()?B.getLastLogEntries(F.$$(D[$j]),y.CHAT_LOG_REMEMBER_COUNT):null
break
default:$k=F.$$(D[$j]).getValue()}
A.DOM.saveVariable($j,$k)}})}
var $g=A.getAllowCookieLaw()
if(typeof $g=='boolean')F.$$('livechat.profile').update({allow_cookies$bool:$g})
F.$$('livechat.settings.package').on('value',function($h){if(!$h)return
if('color_customization_enabled$int' in $h){if($h['color_customization_enabled$int'])H=1}
if('widget_customization_enabled$int' in $h){if($h['widget_customization_enabled$int'])H=2}})
F.$('livechat').$('channel').$('department_id$int').on('value',function($h){if($h)J=$h})
Y.fire('init')}
var L={sendChatMsg:M,sendFile:N,updateProfile:O,clearAll:P,reconnect:R,canStoreCookie:Q,doExternalLogin:U,doExternalLogout:V,endChat:W,getLimit:X}
function M($_,$a){var $b=$a||I.getServerTime().toFixed(0),$c=F.$('livechat').$('profile'),$d=J
if('department' in $_){$d=$_.department}
F.$('livechat').$('channel').$('log').$($b).write({'timestamp$int':$b,'type$string':'chat.msg','msg$string':$_.msg||'','nick$string':$c.$('nick$string').getValue()||'','display_name$string':$c.$('display_name$string').getValue()||'','department_id$int':$d,'unverified$bool':!0,'__client$bool':!0})}
function N($_){var $a=I.getServerTime().toFixed(0)
F.$('livechat').$('channel').$('log').$($a).write({'timestamp$int':$a,'nick$string':F.$('livechat').$('profile').$('nick$string').getValue()||'','display_name$string':F.$('livechat').$('profile').$('display_name$string').getValue()||'','type$string':'chat.file.upload','file_name$string':$_.file_name||'','file_type$string':$_.file_type||'','file_size$int':$_.file_size||0,'unverified$bool':!0,'__client$bool':!0})
return $a}
function O($_){if(!$_)return
var $a={}
if('name' in $_)$a.display_name$string=$_.name+''
if('email' in $_)$a.email$string=$_.email+''
if('phone' in $_)$a.phone$string=$_.phone+''
F.$$('livechat.profile').write($a)
return !0}
function P(){A.clearAll()
F.$$('livechat.channel').update(null)
F.$$('profile').update(null)}
function Q(){var $_=F.$$('livechat.settings.cookie_law.enabled$bool').getValue(),$a=F.$$('livechat.profile.allow_cookies$bool').getValue()
if($_&&$a===!1)return !1
else return !0}
function R(){F.$$('connection').update({reconnect$bool:!0})}
var S='zlivechatexternallogin_',T='width=500,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
function U($_){if(G)return
var $a=F.$$('livechat.account.key$string').getValue(),$b=F.$$('livechat.profile.mid$string').getValue()
if(!$_||!$a||!$b)return
window.open(y.AUTH_URL.replace('$NAME',$_).replace('$KEY',$a).replace('$MID',$b),S+$a,F.$$('livechat.ui.mobile$bool').getValue()?'':T)}
function V(){if(F.$$('livechat.profile.auth.type$string').getValue()){F.$$('livechat.profile.auth').write({'type$string':null})
F.$$('livechat.profile').update({'display_name$string':'','email$string':''})}
else{F.$$('livechat.profile').write({'display_name$string':'','email$string':''})}}
function W(){F.$$('livechat.channel').write({'chatting$bool':!1})}
function X(){if(F.$$('livechat.ui.mockup$bool').getValue()){return 100}
return H}
var Y=r.extend({init:K,root:F,livechat:L}),Z='toString'
function $$($_){if(typeof ($_)!='object'||!$_)return $_
var $a={}
for(var $b in $_)if($_.hasOwnProperty($b))$a[$b]=$$($_[$b])
if($_.hasOwnProperty(Z))$a[Z]=$$($_[Z])
return $a}
if((typeof Y==='function')&&Y.prototype&&!Y.__jx__no_fqname){Y.prototype.__jx__fqname_chain=[(Y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DataController"].join('')
Y.prototype.__jx__fqname="meshim_widget_controllers_DataController"}
return Y})()
b.__$$__jx_ui_Input=(function(){var x=b.__$$__jx_ui_Label,y=b.__$$__jx_ui_Widget,z=b.__$$__jx_ui_Form,A=b.__$$__jx_ui_HTMLElement,B=/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9][a-z0-9-]*[a-z0-9])$/i,C=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,D={required:1,pattern:2,maxlength:4,min:8,max:16,step:32},E={button:1,checkbox:1,email:7,hidden:0,number:57,password:3,radio:1,range:25,reset:0,search:7,select:1,submit:0,tel:7,text:63,textarea:1,url:7}
function F(H,I,J,K,L){if(!(this instanceof F))return new F(H,I,J,K,L)
if(!L)L={}
L.tagName||(L.tagName='input')
y.call(this,H,I,J,K,L)
if(q.engineIE<=8&&L.type&&L.tagName&&L.tagName.toLowerCase()=='input'){var M=this.parentNode
this.parentNode.removeChild(this.parentNode instanceof A?this:this.dom)
this.dom=H.doc.createElement('<'+L.tagName+' type="'+L.type+'" name="'+(L.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
M.appendChild(M instanceof A?this:this.dom)
this.setStyle(J)
this.setAttributes(L)
this.addClass(this.__jx__fqname)}
L.initialValue&&this.setValue(L.initialValue)
this.setAttribute('id',this.jx_id)
L.label&&this.setLabel(L.label)
L.errorMessage&&this.setErrorMessage(L.errorMessage)
this.on('blur',function(){this.onAutoValidate()})}
F.prototype=e(y.prototype)
F.prototype.getLabel=function(){return this.label&&this.label.getText()}
F.prototype.setLabel=function(H){H&&this.createLabel(H)
this.label&&this.label.setText(H)
return this}
F.prototype.createLabel=function(H){if(this.label instanceof A)return this
if(!this.dom.parentNode)return this
this.label=new x(this.parentNode,null,null,null,{tagName:'label'})
if(this.getNextSibling()!=this.label)this.parentNode.insertBefore(this.label,this.getNextSibling())
this.label.setAttribute('for',this.jx_id||'')
this.label.addClass('label')
this.label.addClass(this.attributes.type||this.getInputType()||'')
this.label.setText(H||this.attributes.label||'')
this.defaultLabel=!0
return this}
F.prototype.getLabelElement=function(){return this.label}
F.prototype.setLabelElement=function(H){if(!(H instanceof A))return this
if(this.defaultLabel)this.label.destroy()
this.label=H
this.label.setAttribute('for',this.jx_id||'')
this.defaultLabel=!1
return this}
F.prototype.getErrorMessage=function(){return this.errorMessage&&this.errorMessage.getText()}
F.prototype.setErrorMessage=function(H){H&&this.createErrorMessage(H)
this.errorMessage&&this.errorMessage.setText(H)
return this}
F.prototype.showErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!0).setDisplay('')
return this}
F.prototype.hideErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!1)
return this}
F.prototype.createErrorMessage=function(H){if(this.errorMessage instanceof A)return this
if(!this.dom.parentNode)return this
this.errorMessage=new x(this.parentNode,null,null,null,{tagName:'label'})
if((this.label?this.label.getNextSibling():this.getNextSibling())!=this.errorMessage)this.parentNode.insertBefore(this.errorMessage,this.label?this.label.getNextSibling():this.getNextSibling())
this.errorMessage.setAttribute('for',this.jx_id||'')
this.errorMessage.addClass('error_message')
this.errorMessage.addClass(this.attributes.type||this.getInputType()||'')
this.setErrorMessage(H||this.attributes.errorMessage||'')
this.hideErrorMessage()
this.defaultErrorMessage=!0
return this}
F.prototype.getErrorMessageElement=function(){return this.errorMessage}
F.prototype.setErrorMessageElement=function(H){if(!(H instanceof A))return this
if(this.defaultErrorMessage)this.errorMessage.destroy()
this.errorMessage=H
this.errorMessage.setAttribute('for',this.jx_id||'')
this.defaultErrorMessage=!1
return this}
F.prototype.validate=function(H){var I=this.getInputType(),J=this.getValue(),K=E[I],L=this.dom,M=(!(K&D.required)||(!L.required||(J||'').trim()!==''&&J!=null))&&(!(K&D.pattern)||(!L.pattern||new RegExp(L.pattern).test(J)))&&(!(K&D.maxlength)||(!(L.maxLength&&L.maxLength>=0)||J.length<=L.maxLength))&&(!(K&D.min)||(!L.min||parseFloat(J)>=parseFloat(L.min)))&&(!(K&D.max)||(!L.max||parseFloat(J)<=parseFloat(L.max)))&&((I!='email')||(L.required?B.test(J):(J===''||B.test(J))))&&((I!='url')||(L.required?C.test(J):(J===''||C.test(J))))
!M&&H&&this.focus()
this.setValidity(M)
return M}
F.prototype.getValidity=function(){return this.validity}
F.prototype.setValidity=function(H){this.validity=n(H)
this.validity?(this.hideErrorMessage(),this.addClass('valid'),this.removeClass('invalid')):(this.showErrorMessage(),this.removeClass('valid'),this.addClass('invalid'))
return this}
F.prototype.getAutoValidate=function(){return this.autoValidate}
F.prototype.setAutoValidate=function(H){this.autoValidate=n(H)
return this}
F.prototype.onAutoValidate=function(){if(!this.autoValidate||this.getDisabled()||this.getReadOnly())return
return this.validate()}
F.prototype.reset=function(){var H=this.getType()
if(H=='submit'||H=='reset')return this
this.setValue(this.getInitialValue()||'').setValidity(!0)
return this}
var G='textarea button select'.split(' ')
F.prototype.getInputType=function(){if(f(this.tagName,G)!=-1)return this.tagName
return this.getType()}
F.prototype.getType=function(){return this.validationType||y.prototype.getType.call(this)}
F.prototype.setType=function(H){this.validationType=H
y.prototype.setType.call(this,H)}
F.prototype.getInitialValue=function(){return q.engineIE<=8?this._initialValue:this.dom.getAttribute('value')}
F.prototype.setInitialValue=function(H){if(q.engineIE<=8)this._initialValue=H&&(H.toString?H.toString():H)
else this.setAttribute('value',H)
return this}
F.prototype.getRequired=function(){return this.dom.required}
F.prototype.setRequired=function(H){this.dom.required=n(H)
return this}
F.prototype.getPattern=function(){return this.dom.pattern}
F.prototype.setPattern=function(H){this.dom.pattern=H
return this}
F.prototype.getMin=function(){return this.dom.min}
F.prototype.setMin=function(H){this.dom.min=H
return this}
F.prototype.getMax=function(){return this.dom.max}
F.prototype.setMax=function(H){this.dom.max=H
return this}
F.prototype.getMaxLength=function(){return this.dom.maxLength}
F.prototype.setMaxLength=function(H){this.dom.maxLength=parseInt(H,10)
return this}
F.prototype.getStep=function(){return this.dom.step}
F.prototype.setStep=function(H){this.dom.step=H
return this}
F.prototype.getMultiple=function(){return this.dom.multiple}
F.prototype.setMultiple=function(H){this.dom.multiple=n(H)
return this}
F.prototype.getAutocomplete=F.prototype.getAutoComplete=z.prototype.getAutocomplete
F.prototype.setAutocomplete=F.prototype.setAutoComplete=z.prototype.setAutocomplete
F.prototype.select=function(){this.dom.select&&this.dom.select()
return this}
F.prototype.getForm=function(){return this.dom.form&&(this.dom.form.jx_wrapper||this.dom.form)}
if((typeof F==='function')&&F.prototype&&!F.__jx__no_fqname){F.prototype.__jx__fqname_chain=[(F.prototype.__jx__fqname_chain||"")," ","jx_ui_Input"].join('')
F.prototype.__jx__fqname="jx_ui_Input"}
return F})()
b.__$$__meshim_widget_widgets_ViewStack=(function(){var x=b.__$$__jx_ui_ViewStack,y=x
x=function(z,A,B,C,D){if(!(this instanceof x))return new x(z,A,B,C,D)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
if(!D)D={}
y.call(this,z,A,B,C,D)}
x.__jx__jcss={"**self":{"width, height":"100%","overflow":"hidden"}}
x.prototype=e(y.prototype)
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ViewStack"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ViewStack"}
return x})()
b.__$$__meshim_widget_widgets_FontLoader=(function(){var x=b.__$$__jx_ui_StyleSheet,y=b.__$$__meshim_widget_Config,z=['eot','woff','ttf','svg'],A=['eot','svg','woff','ttf'],B={eot:"src:url(@@DATA@@);src:url(@@DATA_SPECIAL@@)format('embedded-opentype')",woff:"url(@@DATA@@)format('woff')",ttf:"url(@@DATA@@)format('truetype')",svg:"url(@@DATA@@)format('svg')"},C={eot:'application/vnd.ms-fontobject',woff:'application/font-woff',ttf:'font/ttf',svg:'font/svg'},D="@font-face{font-family:'@@NAME@@';@@FORMATS@@;font-weight:normal;font-style:normal;}",E="data:@@MIME@@;base64,@@B64DATA@@ ",F="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@'",G="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@?#iefix'"
function H(I,J,K,L,M){if(!(this instanceof H))return new H(I,J,K,L,M)
x.call(this,I,J,K,L,M)}
H.prototype=e(x.prototype)
H.prototype.setFont=function(I){var J,K=[],L,M,N=z,O=this.getBase64()
if(q.isIE<=8||q.isQuirks||(window.document.documentMode&&window.document.documentMode<=8)){O={}}
if(q.isChrome&&q.isWindows){N=A}
for(var P=0,Q=N.length;P<Q;P++){M=N[P]
L=B[M]
try {K.push(L.replace(/@@DATA@@/g,O[M]?E:F).replace(/@@DATA_SPECIAL@@/g,O[M]?E:G).replace(/@@FONTS_URL@@/g,y.FONTS_URL).replace(/@@FORMAT@@/g,M).replace(/@@MIME@@/g,C[M]).replace(/@@B64DATA@@/g,O[M]))}catch(S){;}}
J=D.replace(/@@FORMATS@@/g,K.join(',')).replace(/@@NAME@@/g,I)
var R=this
l(function(){if(!R.dom)return
R.addChildren([J])})
return this}
H.prototype.getBase64=function(){return this.base64||{}}
H.prototype.setBase64=function(I){this.base64=I}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FontLoader"].join('')
H.prototype.__jx__fqname="meshim_widget_widgets_FontLoader"}
return H})()
b.__$$__meshim_widget_themes_Classic=(function(){var x=b.__$$__meshim_common_Chroma,y=b.__$$__meshim_widget_utils_Color,z=b.__$$__meshim_widget_themes_Simple,A={}
A._super=z
A.defaults={colors:{bubble$string:'#e59341'}}
A.overrides={chat_button:{display_status$bool:!0,use_bubble$bool:!0},chat_window:{hide_profile_avatar$bool:!0,use_banner$bool:!1},message_type$string:'basic'}
A.generate=function(B){var C=y.clampLuminance(x.hex(B['colors']['primary$string']),0,0.8),D=y.clampLuminance(x.hex(B['colors']['bubble$string']),0,0.8),E=y.clampLuminance(y.darken(C,0.2,'rgb'),0,0.8),F=y.clampLuminance(y.lighten(C,0.2,'rgb'),0,0.8),G='gradient top '+y.rgbaColor(C,1)+' '+y.rgbaColor(E,1),H=y.clampLuminance(y.darken(D,0.2,'rgb'),0,0.8),I=y.clampLuminance(y.lighten(D,0.2,'rgb'),0,0.8),J=y.getColorAtContrast(C,y.white,5),K=y.getContrastColor(D,y.white,y.black,0.7,'bright',3,5)
C=C.hex()
D=D.hex()
E=E.hex()
F=F.hex()
H=H.hex()
I=I.hex()
J=J.hex()
K=K.hex()
var L='#DDD',M='#666',N='#f7f7f7',O={contentBg:N,actionBarBg:N,actionBarBorderColor:L,titleBarBg:G,titleBarBorderWidth:0,inputRadius:0,inputBorderColor:L,inputFocusBorderColor:I,inputFocusShadow:'none',chatTextAreaInputFocusShadow:'none',windowContentBorderColor:L,menuRadius:0,menuBorderColor:L,buttonColor:K,buttonBg:D,buttonHoverBg:D,buttonBorderColor:H,buttonSecBg:I,buttonSecHoverBg:I,buttonSecBorderColor:D,formSubmittedBg:y.white,formSubmittedRadius:'0px',formSubmittedBorderWidth:'1px',chatLogVisitorNameColor:M,chatLogAgentNameColor:H,chatLogSystemMsgBg:y.white,chatLogSystemMsgBorderWidth:'1px',chatLogSystemMsgPadding:'5px 0',chatLogSystemMsgBorderColor:L,chatLogFileProgressBg:G,chatButtonMinWidth:'190px',chatButtonBg:G,chatButtonShadow:'inset 0 1px 0px 0 rgba(0,0,0,0.4), inset 0 2px 0px 0 rgba(255,255,255,0.7)',chatButtonFontWeight:'normal',chatButtonStatusFontWeight:'bold',chatButtonPaddingFavicon:0,chatButtonBorderWidth:0,faviconBg:'transparent',faviconColor:D.toUpperCase()==C.toUpperCase()?'$$chatButtonColor':D,faviconDotsColor:C,chatBubbleTitleColor:K,chatBubbleTextColor:K,chatBubbleCloseColor:K,chatBubbleCloseShadow:'0px -1px 0px #999',chatBubbleCloseHoverBg:'rgba(0, 0, 0, 0.1)'},P={actionBarColor:J,actionBarBg:'transparent',actionBarBorderColor:'transparent'}
return {standard:O,mobile:P}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Classic"].join('')
A.prototype.__jx__fqname="meshim_widget_themes_Classic"}
return A})()
b.__$$__meshim_widget_widgets_iconFont_Auth=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Auth
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"&:hover, &:focus":{"&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Auth"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Auth"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_themes_Zendesk=(function(){var x=b.__$$__meshim_widget_themes_Simple,y={}
y._super=x
y.defaults={colors:{primary$string:'#85ae19'},branding:{type$string:'icon_font_zendesk'}}
y.overrides={chat_window:{use_banner$bool:!1,title_bar:{hide_popout$bool:!0}},branding:{type$string:'icon_font_zendesk'}}
y.generate=function(){var z={fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',fontSizeXS:"11px",fontSizeS:"12px",fontSize:"13px",buttonPadding:"5px"},A={}
return {standard:z,mobile:A}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Zendesk"].join('')
y.prototype.__jx__fqname="meshim_widget_themes_Zendesk"}
return y})()
b.__$$__meshim_widget_widgets_toast_disconnected_Image=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot,J=100,K='dark',L=3,M=-1,N=2,O,P=M,Q=[]
for(var R=0;R<L;R++){Q[R]=new I(F)
Q[R].addClass('dot')}
F.play=function(){if(O)return F
S()
O=window.setInterval(S,J)
return F}
F.stop=function(){if(!O)return F
window.clearInterval(O)
O=null
return F}
F.reset=function(){Q[P]&&Q[P].removeClass(K)
P=M
return F}
F.reset()
function S(){Q[P]&&Q[P].removeClass(K)
P++
if(P>=L+N)P=M
Q[P]&&Q[P].addClass(K)}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_Image
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{".dot":{"marginRight":"3px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_Image"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_Image"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_FloatingFrame=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_IFrame,z=b.__$$__jx_ui_FullFrame,A=16000000,B;(function E(){var F=['','WebKit'],G='MutationObserver'
for(var H=0;H<F.length;H++)if((F[H]+G) in window)B=window[F[H]+G]})()
function C(E,F,G,H,I){if(!(this instanceof C))return new C(E,F,G,H,I)
var J=this
this._onAutoResize=function(){J.onAutoResize()}
x.call(this,E,F,G,null,I)
x.prototype.setMargin.call(this,'0')
x.prototype.setPadding.call(this,'0')
x.prototype.setBorder.call(this,'0')
x.prototype.setBackground.call(this,'transparent')
x.prototype.setOverflow.call(this,'hidden')
x.prototype.setPosition.call(this,'fixed')
this.appendToParent()
this.iframe=new y(this,null,null,null,{tagName:'iframe',position:'relative',width:'100%',height:'100%',border:'0',margin:'0',padding:'0',background:'transparent',overflow:'hidden'})
this.iwin=this.iframe.iwin
this.idoc=this.iframe.idoc
this.ibody=this.iframe.ibody
this.ihead=this.iframe.ihead
this.content=new z(this.iframe.defaultPlacement)
this.content.setOverflow('hidden')
this.wrapper=new x(this.content,null,null,null,{display:'inline-block'})
this.wrapper.__jx__fqname=this.__jx__fqname
this.wrapper.__jx__fqname_chain=this.__jx__fqname_chain
if(q.bugs.noBoxSizing){this.wrapper.style.display='inline'
this.wrapper.style.zoom='1'}
this.setAttributes(I)
this.defaultPlacement=this.wrapper
this.addChildren(H)
if(q.isIE<9){this.on('hide',function(){J.iframe.setDisplay('none')})
this.on('show',function(){J.iframe.setDisplay('block')})}
this.raise()}
C.prototype=e(x.prototype)
C.prototype.fire=function(E,F){x.prototype.fire.call(this,E,F)
this.iframe&&this.iframe.fire(E,F)
this.wrapper&&this.wrapper.fire(E,F)}
C.prototype.on=function(E,F){if(E=='init')x.prototype.on.call(this,E,F)
else this.wrapper&&this.wrapper.on(E,F)}
C.prototype.raise=function(E){E=parseInt(E,10)||1
this.setZIndex(A+=E)}
C.prototype.normalize=function(){var E=this.getXY()
this.moveTo(E[0],E[1]).setMargin(0)}
C.prototype.getXY=function(){var E=this.dom.offsetLeft,F=this.dom.offsetTop
if(q.isIE){if(q.isStrict){if(q.isIE6){E-=document.documentElement.scrollLeft
F-=document.documentElement.scrollTop}}
else{E-=document.body.scrollLeft
F-=document.body.scrollTop}}
else if(q.isSafari){var G=w.getStyles(this.iframe.offsetParent)
E+=parseInt(G.borderLeftWidth,10)
F+=parseInt(G.borderTopWidth,10)}
return [E,F]}
C.prototype.fitToContents=function E(F,G,H){F=F||this
var I=0,J=0
while(F.defaultPlacement)F=F.defaultPlacement
F.dom&&(F=F.dom)
J=F.scrollWidth-F.clientWidth
I=F.scrollHeight-F.clientHeight
this.resizeBy(J,I,H||0,G||0)}
C.prototype.destroy=function(){this.setAutoResize(!1)
x.prototype.destroy.call(this)
this.iframe=this.iwin=this.idoc=this.ibody=this.ihead=this.content=null}
C.prototype.setBackground=function(E){return this.iframe&&this.iframe.setBackground(E)}
C.prototype.setBackgroundImage=function(E){return this.iframe&&this.iframe.setBackgroundImage(E)}
C.prototype.setBorder=function(E){return this.iframe&&this.iframe.setBorder(E)}
C.prototype.setBorderColor=function(E){return this.iframe&&this.iframe.setBorderColor(E)}
C.prototype.setBorderStyle=function(E){return this.iframe&&this.iframe.setBorderStyle(E)}
C.prototype.setBorderWidth=function(E){return this.iframe&&this.iframe.setBorderWidth(E)}
C.prototype.setCursor=function(E){return this.iframe&&this.iframe.setCursor(E)}
C.prototype.setOpacity=function(E){return this.iframe&&this.iframe.setOpacity(E)}
C.prototype.setSelectable=function(E){return this.iframe&&this.iframe.setSelectable(E)}
C.prototype.setColor=function(E){return this.content&&this.content.setColor(E)}
C.prototype.setPadding=function(E){return this.content&&this.content.setPadding(E)}
C.prototype.setFontFamily=function(E){return this.content&&this.content.setFontFamily(E)}
C.prototype.setFontSize=function(E){return this.content&&this.content.setFontSize(E)}
C.prototype.setFontWeight=function(E){return this.content&&this.content.setFontWeight(E)}
C.prototype.setTextAlign=function(E){return this.content&&this.content.setTextAlign(E)}
C.prototype.setLetterSpacing=function(E){return this.content&&this.content.setLetterSpacing(E)}
C.prototype.setLineHeight=function(E){return this.content&&this.content.setLineHeight(E)}
C.prototype.setOverflow=function(E){return this.content&&this.content.setOverflow(E)}
var D=200
C.prototype.getAutoResize=function(){return this.autoResize}
C.prototype.setAutoResize=function(E){E=n(E)
this.autoResize=E
if(!this.wrapper)return
var F=this
if(this.autoResize){if(B){this._autoResizer=new B(function(){F.onAutoResize()})
this._autoResizer.observe(this.wrapper.dom,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}
else{if(this._autoResizer)window.clearInterval(this._autoResizer)
this._autoResizer=window.setInterval(this._onAutoResize,D)}
this.onAutoResize()}
else if(this._autoResizer){if(B){this._autoResizer.disconnect()
this._autoResizer=null}
else{window.clearInterval(this._autoResizer)
this._autoResizer=null}}
return this}
C.prototype.onAutoResize=function(){if(q.bugs.noBoxSizing){this.style.width='10px'
this.style.height='10px'}
var E=this.wrapper.getWidth(),F=this.wrapper.getHeight()
this.setWidth(E)
this.setHeight(F)
if(q.bugs.noBoxSizing){this.style.width=E+'px'
this.style.height=F+'px'
this.iframe.dom.className=this.iframe.dom.className}}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","jx_ui_FloatingFrame"].join('')
C.prototype.__jx__fqname="jx_ui_FloatingFrame"}
return C})()
b.__$$__meshim_widget_widgets_Favicon=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Image,"image",null,[],{"id":"image","addClass":"custom_icon"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","addClass":"default_icon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"dots",null,[],{"id":"dots","addClass":"dots","selectable":"false"}]],{"addClass":"dots_container"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image'),H=w.get(z+'__icon'),I=w.get(z+'__dots')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=1000,N=3,O=L.root.$('livechat').$('account'),P=L.root.$('livechat').$('settings').$('branding'),Q=O.$('status$string'),R,S=P.$('hide_favicon$bool'),T,U=P.$('custom_favicon_path$string'),V,W=L.root.$('livechat').$('ui').$('chat_button').$('unread_count$int'),X,Y,Z,$$
function $_(){if(Y)try {Y.abort()}catch($h){;}
Y=null
if(!T){$e(!0)}
else{if(V){G.setSrc(V)
$e(!1)
return}
var $d=$f()
if($d){G.setSrc($d)
$e(!1)
return}
Y=$g(function($h){if($h){G.setSrc($h)
$e(!1)}
else{$e(!0)}})}
function $e($h){Z=!$h
if($h){G.setDisplay('none')
H.setDisplay('')}
else{G.setDisplay('')
H.setDisplay('none')}
$b()}
function $f(){var $h=window.document.getElementsByTagName('head')[0],$i=$h.getElementsByTagName('link')
for(var $j=0,$k=$i.length;$j<$k;$j++)if($i[$j].rel=='icon'||$i[$j].rel=='shortcut icon')return $i[$j].href}
function $g($h){var $i,$j=window.location.protocol+'//'+window.location.host+'/favicon.ico'
try {if(window.ActiveXObject){$i=new window.ActiveXObject("Msxml2.XMLHTTP")
if(!$i)$i=new window.ActiveXObject("Microsoft.XMLHTTP")}}catch($k){;}
if(!$i&&typeof window.XMLHttpRequest!='undefined')$i=new window.XMLHttpRequest()
if($i){$i.onreadystatechange=function(){if($i.readyState===4){if($i.status===200||($i.status>=300&&$i.status<400))$h($j)
else $h()}}
$i.open('HEAD',$j,!0)
$i.send(null)}
return $i}}
function $a(){F.autobind(S,'value',function($d){T=$d
$_()})
F.autobind(U,'value',function($d){V=$d
$_()})
F.autobind(Q,'value',function($d){if($d==R)return
R=$d
$b()})
F.autobind(W,'value',function($d){if($d==X)return
X=$d
$b()})}
function $b(){if(R=='offline'&&!X){H.setIcon('email')
H.removeClass('default_icon_online')
H.addClass('default_icon_offline')}
else{H.setIcon('message')
H.removeClass('default_icon_offline')
H.addClass('default_icon_online')}
if(X&&!Z){if(!$$){$c()
$$=window.setInterval($c,M)}
I.setDisplay('')}
else{if($$){window.clearInterval($$)
$$=null}
I.setDisplay('none')}}
function $c(){var $d=I.getText()
I.setText($d.length==N?'':($d+'.'))}
$a()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Favicon
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".custom_icon":{"width, height":"16px"},".default_icon":{"fontSize":"16px","width":"16px","display":"inline-block","&.default_icon_online":{"lineHeight":"20px","verticalAlign":"top","color":"$$faviconOnlineColor"},"&.default_icon_offline":{"lineHeight":"18px","verticalAlign":"top","color":"$$faviconOfflineColor"}},".dots_container":{"fontFamily":"Arial","position":"absolute","width":"100%","textAlign":"center","fontSize":"20px","letterSpacing":"-2px","top":"-3px","left":"-1px","lineHeight":"24px"},".dots":{"display":"inline-block","width":"12px","lineHeight":"22px","textAlign":"left","color":["$$chatButtonBg","$$faviconBg","$$faviconDotsColor"],"background":"transparent"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Favicon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Favicon"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_utils_Strings=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_DefaultDataNode,z=b.__$$__meshim_widget_utils_Utils,A=b.__$$__jx_data_DataNode,B
B={get:function(C){if(!C)return ''
var D,E
if(C instanceof A){D=C.getValue()
E=z.descendsObj(y,C.path().slice(1).join('.'))}
else{D=x.root.$$(C).getValue()
E=z.descendsObj(y,C)}
if((D&&D.toString(10))==(E&&E.toString(10))){return E}
else{return D||''}},status:{online:v(44),away:v(45),offline:v(46)},error_message:{text:v(47),email:v(48),textarea:v(47),select:v(49),radio:v(49),checkbox:v(50),checkbox_multiple:v(51),department:v(52),'default':v(53)},placeholder:{phone:v(54)},end_chat_menu_message:v(55),external_login:{facebook:v(56),twitter:v(57),google:v(58)},chat_log:{'chat.memberjoin':v(59),'chat.memberleave':v(60),'chat.changename':v(61),'chat.visitorjoin':v(62),'chat.visitorleave':v(63),'chat.comment':v(64),'chat.rating':{good:v(32),bad:v(33),cancel:v(34)}},chat_button:{unread_one:v(65),unread_many:v(66),unread_mobile:v(67),mobile_greeting:{online:v(68),offline:v(14)}},connection_status:{reconnecting:v(69),idle_disconnect:v(70),disconnected:v(69),resuming:v(71),fast_init:v(72)},cookie_law:{disabled:v(73),disabled_mobile:v(74)},popout_title:v(75),profile:{unlink:v(76)},system_msg:{queue:v(77)},branding:{title:v(78),title_zendesk:v(79)},pre_chat_offline_form:{button_message:v(80),button_chat:v(81),department_any:v(82),department_any_required:v(13),button_disabled:v(43),operating_hours:{closed:v(83),period:v(84)}},file_upload:{error:{size:v(85),type:v(86),disabled:v(87),'default':v(88)}},datetime:{days:[v(89),v(90),v(91),v(92),v(93),v(94),v(95)],weekday:v(96),weekend:v(97),everyday:v(98),all_day:v(99)}}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Strings"].join('')
B.prototype.__jx__fqname="meshim_widget_utils_Strings"}
return B})()
b.__$$__meshim_widget_controllers_Tracker=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={init:C},z,A=1,B=20*1000
function C(){z=x.root.$$('livechat.profile')
r.document.on('mousemove',D)
r.window.on('click',D)
r.window.on('scroll',D)
r.window.on('keypress',D)
E()}
function D(){A++}
function E(){if(A)z.write({"active$int":+new Date()})
A=0
window.setTimeout(E,B)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Tracker"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_Tracker"}
return y})()
b.__$$__meshim_widget_controllers_SoundController=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_common_Sounds,A=x.SOUNDS_URL,B={new_message:"triad_gbd"},C,D,E,F,G,H,I
function J(){C=y.root.$$('livechat.settings.sound.disabled$bool')
D=y.root.$$('livechat.profile.notification.sound$bool')
E=y.root.$$('connection.reattached_timestamp$int')
G=y.root.$$('livechat.ui.sounds')
I=y.root.$('livechat').$('ui').$('mobile$bool')
if(I.getValue()){D.update(!1)}
r.runAfterFirstChildReady(function(){if(H)return
H=new z(A)
G.bindValue(K)})}
function K(N){if(!N)return
if(!L())return
F=E.getValue()||0
if(F===0)return
for(var O in N)if(N.hasOwnProperty(O)){if(!N[O]||N[O]<F)continue
O=O.substring(0,O.indexOf('$'))
if(!H.hasSound(O))H.create(O,B[O])
H.play(O,1)}}
function L(){var N=C.getValue(),O=D.getValue()
if(typeof O==="boolean")return O
if(typeof N=="boolean")return !N
return !0}
var M={init:J,isSoundEnabled:L,play:function(){}}
if((typeof M==='function')&&M.prototype&&!M.__jx__no_fqname){M.prototype.__jx__fqname_chain=[(M.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_SoundController"].join('')
M.prototype.__jx__fqname="meshim_widget_controllers_SoundController"}
return M})()
b.__$$__meshim_widget_controllers_ProfileListener=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils,z={init:L},A,B,C,D,E,F,G,H,I,J,K
function L(){A=x.root.$('livechat').$('profile')
B=A.$('display_name$string')
D=A.$('email$string')
F=A.$('auth').$('type$string')
H=A.$('logged_in$bool')
B.on('value',function(O){C=O
M()})
D.on('value',function(O){E=O
M()})
F.on('value',function(O){G=O
M()})
I=x.root.$('livechat').$('settings')
J=I.$('login').$('allowed_types')
K=I.$('login').$('allowed_types_count$int')
J.on('value',function(){var O=J.getValue(),P=0
for(var Q in O)if(O.hasOwnProperty(Q)){if(Q=='email$bool')continue
if(O[Q])P++}
if(P==K.getValue())return
K.update(P)})}
function M(){H.update(N())}
function N(){if(G){return !0}
if(E&&E.trim()){return !0}
if(C&&C.trim()&&!y.isDefaultName(C)){return !0}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ProfileListener"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_ProfileListener"}
return z})()
b.__$$__jx_ui_TextField=(function(){var x=b.__$$__jx_ui_Input,y=b.__$$__jx_core_ObjectUtil,z={tagName:"input",autoValidate:!0}
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
F=y.extend({},z,F)
if(F.tagName=='input'&&!F.type)F.type='text'
x.call(this,B,C,D,E,F)
if(!this.getValue())this.showPlaceholder()
this.on('blur',this.handlePlaceholderBlur)
this.on('focus',this.handlePlaceholderFocus)
this.on('click',this.handleAutoSelect)
var G=this
this._handlePlaceholder=function(){G.setPlaceholder(G.getPlaceholder())}
v&&v.onLanguage&&v.onLanguage(this._handlePlaceholder)}
A.prototype=e(x.prototype)
A.prototype.getPlaceholder=function(){return this.internalPlaceholder||''}
A.prototype.setPlaceholder=function(B){if(!('placeholder' in this.dom))this.emulatePlaceholder=!0
this.internalPlaceholder=B
this.emulatePlaceholder||(this.dom.placeholder=B)
this.placeholderActive&&this.showPlaceholder()
return this}
A.prototype.handlePlaceholderFocus=function(){if(this.placeholderActive)this.hidePlaceholder()}
A.prototype.handlePlaceholderBlur=function(){if(!this.getValue())this.showPlaceholder()}
A.prototype.showPlaceholder=function(){this.addClass('placeholder')
this.placeholderActive=!0
var B=this
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue(this.getPlaceholder())
this._setValueOverride=!1
if(this.getType()=='password'){this.realTypePassword=!0
if(q.engineIE<9){if(!this.fakePlaceholderPasswordIE){var C={'class':this.getClass(),type:'text',visible:'none',value:this.getPlaceholder(),autoValidate:!1,tabIndex:this.attributes.tabIndex}
this.fakePlaceholderPasswordIE=new x(this.parentNode,null,null,null,C)
this.parentNode.insertAfter(this.fakePlaceholderPasswordIE,this)
this.autobind(this.fakePlaceholderPasswordIE,'focus',function(){B.hidePlaceholder()})}
this.getComputedStyle('display')!='none'&&(this.originalDisplay=this.getComputedStyle('display'))
this.fakePlaceholderPasswordIE.show().setOneStyle('display',this.originalDisplay).setClass(this.getClass())
this.setVisible('none')}
else this.setType('text',!0)}}}
A.prototype.hidePlaceholder=function(){this.removeClass('placeholder')
this.placeholderActive=!1
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue('')
this._setValueOverride=!1
if(this.realTypePassword){this.realTypePassword=!1
if(q.engineIE<9){if(this.fakePlaceholderPasswordIE instanceof x)this.setVisible('block').setOneStyle('display',this.originalDisplay)
this.fakePlaceholderPasswordIE.setVisible('none')
this.focus()}
else this.setType('password',!0)}}}
A.prototype.setValue=function(B){var C=(B===0||!!B)
if(!this._setValueOverride)C&&this.hidePlaceholder()
x.prototype.setValue.call(this,B)
if(!this._setValueOverride){try {if(this.doc.activeElement.jx_wrapper!=this){C||this.showPlaceholder()}}catch(D){;}}
return this}
A.prototype.getValue=function(){if(this.placeholderActive&&this.emulatePlaceholder)return ""
return x.prototype.getValue.call(this)}
A.prototype.setAutocomplete=A.prototype.setAutoComplete=function(B){if(!('autocomplete' in this.dom))return this
if(B=='on'||B=='off'){this.dom.autocomplete=B
return this}
B=n(B)
this.dom.autocomplete=B?'on':'off'
return this}
A.prototype.getAutocomplete=A.prototype.getAutoComplete=function(){return this.dom.autocomplete}
A.prototype.getAutoSelect=function(){return this.autoSelect}
A.prototype.setAutoSelect=function(B){this.autoSelect=n(B)
return this}
A.prototype.handleAutoSelect=function(){if(!this.autoSelect)return
this.dom.select()}
A.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._updatePlaceholder)
this.un('blur',this.handlePlaceholderBlur)
this.un('focus',this.handlePlaceholderFocus)
this.un('click',this.handleAutoSelect)
if(this.fakePlaceholderPasswordIE instanceof x){this.fakePlaceholderPasswordIE.destroy()
this.fakePlaceholderPasswordIE=null}
x.prototype.destroy.call(this)}
A.prototype.reset=function(){x.prototype.reset.call(this)
this.handlePlaceholderBlur()
return this}
A.prototype.insertAtCaret=function(B){if(!B)return
if(this.placeholderActive)this.hidePlaceholder()
if(this.dom.selectionStart!==a&&q.engineIE!=9){var C=this.dom.selectionStart,D=this.dom.selectionEnd,E=this.getScrollTop(),F=this.getValue()
this.setValue(F.substring(0,C)+B+F.substring(D,F.length))
this.focus()
this.dom.selectionStart=this.dom.selectionEnd=C+B.length
this.setScrollTop(E)}
else if(document.selection){this.focus()
var G=document.selection.createRange()
G.text=B
this.focus()}
else{this.setValue(this.getValue()+B)
this.focus()}}
A.prototype.getCaret=function(){var B=0
if(this.dom.selectionStart!==a){B=this.dom.selectionStart}
else if(document.selection){this.focus()
var C=document.selection.createRange()
C.moveStart('character',-this.getValue().length)
B=C.text.length}
return B}
A.prototype.setCaret=function(B){if(this.dom.selectionStart!==a){this.dom.selectionStart=B
this.dom.selectionEnd=B
this.focus()}
else if(document.selection){this.focus()
var C=document.selection.createRange()
C.moveStart('character',-this.getValue().length)
C.moveEnd('character',-this.getValue().length)
C.moveStart('character',B)
C.moveEnd('character',0)
C.select()}
return this}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_TextField"].join('')
A.prototype.__jx__fqname="jx_ui_TextField"}
return A})()
b.__$$__jx_ui_Button=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='button')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Button"].join('')
y.prototype.__jx__fqname="jx_ui_Button"}
return y})()
b.__$$__meshim_widget_widgets_AbsolutePaddingContainer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('theme_loaded$bool'),K,L
F.setAbsPaddingTop=function(P){K=P
M()}
function M(){var P=u.getVariable(K)
F.setStyle('padding-top',(K&&P)||'')}
F.setAbsPaddingBottom=function(P){L=P
N()}
function N(){var P=u.getVariable(L)
F.setStyle('padding-bottom',(L&&P)||'')}
function O(){F.autobind(J,'value',function(P){if(!P)return
M()
N()})
F.updatePaddingTop=M
F.updatePaddingBottom=N}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","*overflow":"visible","width":"100%","height":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AbsolutePaddingContainer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_AbsolutePaddingContainer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_Select=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
this.navStack=null
if(!D)D={}
D.tagName||(D.tagName='select')
x.call(this,z,A,B,C,D)
this.addClass('select')
this.onDestruction(function(){this.navStack=null})}
y.prototype=e(x.prototype)
y.prototype.getSelectedIndex=function(){return this.dom.selectedIndex}
y.prototype.setSelectedIndex=function(z){this.dom.selectedIndex=z
return this}
y.prototype.getOptions=function(){var z=[],A=this.dom.options.length
for(var B=0;B<A;B++)z.push(this.dom.options[B].jx_wrapper)
return z}
y.prototype.setValue=function(z){this.setSelectedIndex(-1)
return x.prototype.setValue.call(this,z)}
y.prototype.reset=function(){var z=this.getOptions()
for(var A=0,B=z.length;A<B;A++){if(z[A].getSelected()){this.setSelectedIndex(A)
return this}}
this.setSelectedIndex(0)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Select"].join('')
y.prototype.__jx__fqname="jx_ui_Select"}
return y})()
b.__$$__meshim_widget_widgets_CookieLawNotice=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_html_a,null,null,[],{"class":"cookie_link"}]],{"id":"localizer","content":v(150)}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__localizer')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$$('livechat.ui.chat_window')
function L(){G.on('click',function(M){if(M.target.jx_wrapper.hasClass('cookie_link')){K.update({'main_stack_name$string':'cookie_form'})}})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_CookieLawNotice
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={".cookie_link":{"textDecoration":"underline","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_CookieLawNotice"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_CookieLawNotice"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper=(function(){var x=b.__$$__meshim_common_QueryString,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_utils_Utils,A=b.__$$__jx_data_JSON,B,C,D,E,F=[],G=[],H=[],I=[],J=[],K=[],L=[],M,N={},O={init:P,callNow:$$,handleDelayed:Y,callOnFastInit:V,callOnRegistered:W,callOnReattached:X,isHexColor:$b,getCallbackCaller:$_,saveAPISettings:$c,savePopoutAPICalls:$d,getPopoutAPICalls:$e,parseAPIFromQuery:$f}
function P(){B=y.root
B.$('connection').$('status$string').bindValue(Q)
B.$('connection').$('message$string').bindValue(R)
M=B.$('tmp').$('api_settings')}
function Q($g){if($g=='reattached'){E=!0
U()}
else if($g=='registered'||$g=='cookie_law'){D=!0
T()}}
function R($g){if($g=='fast_init'){C=!0
S()}}
function S(){Y(F)
F.length=0
Y(I)}
function T(){Y(G)
G.length=0
Y(J)}
function U(){Y(H)
H.length=0
Y(K)}
function V($g,$h){if(C){$$($g)}
else{if($h)I.push($g)
else F.push($g)}}
function W($g,$h){if(D){$$($g)}
else{if($h)J.push($g)
else G.push($g)}}
function X($g,$h){if(E){$$($g)}
else{if($h)K.push($g)
else H.push($g)}}
function Y($g){if(!$g||!g($g))return
for(var $h=0;$h<$g.length;$h++){$$($g[$h])}}
var Z=Array.prototype.slice
function $$($g){var $h=Z.call(arguments,1)
try {$g.apply(null,$h)}catch($i){if(!window.console)return
if(!h(window.console.log))return
var $j='Error in LiveChatAPI call',$k=[]
if($i.name)$k.push($i.name)
if($i.message)$k.push($i.message)
if($k.length)$j+=': '+$k.join(' - ')
window.console.log($j)
if(h(window.console.dir)){window.console.dir($i)}
window.console.log($g.toString())}}
function $_($g){return (new Function('callback','return function() {'+'var args = Array.prototype.slice.call(arguments);'+'setTimeout(function() { '+'callback.apply(null, args);'+'}, 0);'+'}'))($g)}
var $a=/^#[0-9A-F]{6}$/i
function $b($g){return $a.test($g)}
function $c($g){z.fullyExtend(N,$g)
M&&M.update(N)}
function $d($g,$h){L.push([$g,$h])}
function $e(){return L}
function $f(){var $g
try {$g=A.parse(x().get('api_calls'))}catch($h){;}
return g($g)?$g:[]}
if((typeof O==='function')&&O.prototype&&!O.__jx__no_fqname){O.prototype.__jx__fqname_chain=[(O.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_APIHelper"].join('')
O.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_APIHelper"}
return O})()
b.__$$__meshim_widget_controllers_liveChatAPI_Debug=(function(){var x=b.__$$__jx_data_JSON,y=b.__$$__meshim_widget_controllers_DataController,z={}
z.init=function(){var A=y.root,B=q.isIE||q.isNewIE
z.connection=function(){C(A.$('connection').getValue())}
z.livechat=function(){C(A.$('livechat').getValue())}
z.all=function(){C(A.getValue())}
function C(D){window.console&&window.console.log(B?x.stringify(D):D)}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Debug"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Debug"}
return z})()
b.__$$__jx_ui_CheckBox=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='input')
D.type||(D.type='checkbox')
x.call(this,z,A,B,C,D)
this.on('click',function(){this.onAutoValidate()})
if(q.engineIE<9)this.on('click',function(){this.fire('change')})}
y.prototype=e(x.prototype)
y.prototype.getChecked=function(){return this.dom.checked}
y.prototype.setChecked=function(z){this.dom.checked=n(z)
return this}
y.prototype.toggleChecked=function(){this.setChecked(!this.getChecked())
return this}
y.prototype.getInitialChecked=function(){return q.engineIE<=8?this._initialChecked:this.dom.getAttribute('checked')}
y.prototype.setInitialChecked=function(z){if(q.engineIE<=8)this._initialChecked=z
else this.setAttribute('checked',z)
return this}
y.prototype.reset=function(){this.setChecked(this.getInitialChecked()).setValidity(!0)
x.prototype.reset.call(this)}
y.prototype.validate=function(z){var A=!this.dom.required||this.getChecked()
!A&&z&&this.focus()
this.setValidity(A)
return A}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_CheckBox"].join('')
y.prototype.__jx__fqname="jx_ui_CheckBox"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"exclamation","title":v(155)}],[b.__$$__jx_ui_Widget,null,null,[v(156)],{"class":"resend"}]],{"display":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_DataController,K,L
function M(){F.setDataNode=N
F.on('click',P)}
function N(R){if(R==K)return
if(K){F.autounbind(K,'value',O)}
K=R
if(K){F.autobind(K,'value',O)}}
function O(R){if(!R)return
if(R.failed$bool)Q()
if('unverified$bool' in R){window.clearTimeout(L)
if(R.unverified$bool){L=window.setTimeout(Q,I.RESEND_MSG_TIMEOUT)}}}
function P(R){if(R&&h(R.stopPropagation)){R.stopPropagation()}
J.livechat.sendChatMsg({msg:K.getValue('msg$string')},K.name)
F.setDisplay('none')}
function Q(){F.setDisplay('')}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{".resend":{"textDecoration":"underline"},".icon_font":{"position":"relative","top":"2px","marginRight":"3px"}},"**self, .icon_font, .resend":{"color":"$$errorColor","display":"inline-block","*display":"inline","*zoom":"1","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ResendChatMessage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ResendChatMessage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_thumb_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"thumbs",null,[],{"id":"thumbs","addClass":"rating_icon"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__thumbs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_utils_Utils,K=b.__$$__meshim_widget_controllers_DataController
F.setType=function(M){switch(M){case 'thumbs_up':G.setIcon('thumbsup')
break
case 'thumbs_down':G.setIcon('thumbsdown')
break
default:G.setDisplay('none')}}
J.hoverFix(F)
function L(){var M=K.root.$('livechat').$('ui').$('mobile$bool')
F.autobind(M,'value',function(N){if(!N)F.addClass('desktop')})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_thumb_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_span.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_span
x.__jx__jcss={"**self":{"width":"50%","display":"inline-block","border":"1px solid transparent",".default_value":{"display":"inline"},"&.desktop.hover, &.desktop:hover":{"color":"$$chatRatingsThumbDark"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_thumb_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_thumb_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_Sanitize,J=b.__$$__meshim_widget_controllers_DataController,K,L
function M(){F.setDataNode=N}
function N(S){if(K)F.autounbind(K,'value',O)
K=S.$('options$string')
F.autobind(K,'value',O)}
function O(S){S=S||''
S=P(S)
if(S){F.setHTML(S)
Q()}}
function P(S){if(!S)return ''
var T=S.split('/'),U='<form>',V
for(var W=0,X=T.length;W<X;W++){V=I.html(T[W])
U+='<input type="radio" name="option" value="'+V+'">'+V+'</br>'}
U+='</form>'
return U}
function Q(){var S=F.dom.getElementsByTagName('input')
for(var T=0,U=S.length;T<U;T++){S[T].onclick=function(){if(this.value!==L)R(this.value)}}}
function R(S){if(!S)return
J.livechat.sendChatMsg({msg:S})
L=S}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatOption"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatOption"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_LanguageController=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_common_QueryString,z=b.__$$__jx_language_Detect,A={}
A.init=function(){var B=x.root.$('livechat').$('ui').$('mockup$bool'),C=x.root.$('livechat').$('ui').$('popout$bool'),D=x.root.$('livechat').$('settings').$('language').$('language$string')
D.bindValue(function(E){if(B.getValue()||!(v&&v.update)){return}
if(C.getValue()){var F=y().get('lang')
F&&(E=F)}
if(E==='--'||!E){E=z.guess()
D.update(E)
return}
v.update(E)})}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LanguageController"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_LanguageController"}
return A})()
b.__$$__meshim_widget_controllers_CookieLaw=(function(){var x=b.__$$__meshim_widget_controllers_StorageController,y=b.__$$__meshim_widget_controllers_DataController,z,A,B,C,D,E={init:F,enableCookieLaw:G,setUserChoice:H,isCookieDenied:L,setDefaultImplicitConsent:M}
function F(){z=y.root
A=z.$$('livechat.settings.cookie_law')
B=A.$('enabled$bool')
C=z.$$('livechat.profile')
D=C.$('allow_cookies$bool')
var N=x.getAllowCookieLaw()
if(typeof N=='boolean')C.write({'allow_cookies$bool':N})}
function G(){var N=z.$$('connection.status$string').getValue()
if(N){window.console&&window.console.log&&window.console.log('Zopim livechat: Cookie Law mode must be enabled '+'immediately after embedding script')
return}
A.write({'enabled$bool':!0})}
function H(N){N=n(N)
var O=J(),P=K()
if(N===O)return
x.setAllowCookieLaw(N)
C.write({'allow_cookies$bool':N})
var Q=I()
if(!Q)return
if(N===!1){y.livechat.clearAll()}
if(N!==P){y.livechat.reconnect()}}
function I(){var N=B.getValue()
return !!N}
function J(){return D.getValue()}
function K(){var N=J()
if(typeof N!=='boolean')return !0
else return N}
function L(){var N=I(),O=K()
return N&&(O===!1)}
function M(){var N=J()
if(typeof N!=='boolean')H(!1)}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_CookieLaw"].join('')
E.prototype.__jx__fqname="meshim_widget_controllers_CookieLaw"}
return E})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_div,"file_progress_container",null,[[b.__$$__jx_ui_html_p,"progress_text",null,[],{"id":"progress_text","class":"progress_text"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"progress_bar",null,[],{"id":"progress_bar","class":"progress_bar"}]],{"class":"progress_container"}]],{"id":"file_progress_container"}],[b.__$$__jx_ui_html_div,"file_details_container",null,[[b.__$$__jx_ui_html_a,"a_thumb",null,[[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"file_image",null,[],{"id":"file_image","class":"file_image"}],[b.__$$__jx_ui_html_p,"file_other_type",null,[],{"id":"file_other_type","class":"file_other_type"}]],{"class":"file_image_container"}]],{"id":"a_thumb","target":"_blank"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_a,"a_name",null,[[b.__$$__jx_ui_html_p,"file_name",null,[],{"id":"file_name","class":"file_name"}]],{"id":"a_name","target":"_blank"}],[b.__$$__jx_ui_html_p,"file_size",null,[],{"id":"file_size","class":"file_size"}]],{"class":"file_info_container"}]],{"id":"file_details_container","class":"file_details_container","visible":"none"}],[b.__$$__jx_ui_html_div,"file_status",null,[],{"id":"file_status","class":"file_status"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__file_progress_container'),H=w.get(z+'__progress_text'),I=w.get(z+'__progress_bar'),J=w.get(z+'__file_details_container'),K=w.get(z+'__a_thumb'),L=w.get(z+'__file_image'),M=w.get(z+'__file_other_type'),N=w.get(z+'__a_name'),O=w.get(z+'__file_name'),P=w.get(z+'__file_size'),Q=w.get(z+'__file_status')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var R=(function(){var T=b.__$$__meshim_common_FileUtil,U=b.__$$__meshim_widget_Config,V=b.__$$__meshim_widget_controllers_DataController,W=b.__$$__meshim_widget_utils_Utils,X,Y=V.root.$$('livechat.ui.chat_window'),Z='file_name$string',$$='file_type$string',$_='file_url$string',$a='thumbnail_url$string',$b='s3_progress$int',$c='file_size$int',$d='msg$string',$e='status$string',$f='error$string',$g=v(157),$h=v(158),$i=/image/i,$j=/uploaded: (.+)\nURL: (.+)\nType: (.+)\nSize: (.+)(\nThumb: (.+))?/i,$k=100,$l
function $m(){F.setDisplay('none')
I.setSrc(U.IMAGES_URL+'/loadingbar.gif')}
F.setDataNode=function($s){if(X)F.autounbind(X,'value',$n)
X=$s
if(X)F.autobind(X,'value',$n)}
function $n($s){if(!$s)return
var $t
if($d in $s){$j.lastIndex=0
var $u=$j.exec($s[$d])
if(!$u)return
$s[Z]=$u[1]
$s[$_]=$u[2]
$s[$$]=$u[3]
$s[$c]=$u[4]
$s[$a]=$u[6]
$s[$e]='ok'
$s[$b]=100
if($o($s)){if($p($s)){$q($s)
$r($s)}}
$t=!0
Y.update({'file_upload_scroll$bool':!0})}
if(Z in $s||$f in $s){F.setDisplay('')}
if($t)return
if($o()){if($p()){$q()
$r()}}
Y.update({'file_upload_scroll$bool':!0})}
function $o($s){$s=$s||X.getValue()
if($e in $s){var $t=$s[$e].toLowerCase()=='ok'
G.setDisplay('none')
if($t){J.setDisplay('')
Q.removeClass('fail')
if(!(Z in $s))return !0
var $u=($s[Z].length>15)?$s[Z].substring(0,12)+'...':$s[Z]
Q.setText($h.replace('<file_name>',$u)).setDisplay('')
return !0}
else{J.setDisplay('none')
Q.addClass('fail')
if(!($f in $s))return !0
Q.setText(T.prettyError($s[$f])).setDisplay('')
return !1}}
else{return !0}}
function $p($s){$s=$s||X.getValue()
if(!($b in $s)||!(Z in $s))return !1
var $t=$s[$b]<$k,$u=($s[Z].length>15)?$s[Z].substring(0,12)+'...':$s[Z]
H.setText(($t?$g:$h).replace('<file_name>',$u))
G.setDisplay($t?'':'none')
J.setDisplay($t?'none':'')
Q.setDisplay($t?'none':'')
return $t?!1:!0}
function $q($s){$s=$s||X.getValue()
if(!($_ in $s)||!($$ in $s))return !1
if($i.test($s[$$])){L.setSrc(W.replaceFileHostname($s[$a]||$s[$_]||'')).setDisplay('')
M.setText('').setDisplay('none')}
else{L.setSrc('').setDisplay('none')
M.setText(T.prettyType($s[$$],$s[Z],5).toUpperCase()).setDisplay('table-cell')}}
function $r($s){$s=$s||X.getValue()
if(!(Z in $s)||!($$ in $s)||!($_ in $s))return !1
$s[$_]=W.replaceFileHostname($s[$_])
K.setHref($s[$_])
N.setHref($s[$_])
$l=$s[$_]
O.setText($s[Z])
P.setText(T.prettySize($s[$c],{base2:!0}))}
$m()})()
for(var S in R)if(R.hasOwnProperty(S))F[S]=R[S]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"width":"100%","a":{"verticalAlign":"middle","color":"inherit","textDecoration":"none","cursor":"pointer"}},".progress_text":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic"},".progress_container":{"position":"relative","height":"8px","marginTop":"3px","borderRadius":"5px","background":"$$chatLogFileProgressBg","overflow":"hidden",".progress_bar":{"position":"absolute","top":"0px","left":"0px","height":"100%"}},".file_details_container":{"overflow":"hidden","marginTop":"5px"},".file_image_container":{"float":"left","display":"table","margin":"0 10px 2px 2px","width":"50px","height":"40px","borderWidth":"1px","borderStyle":"solid","borderColor":"$$chatLogSystemMsgColor","textAlign":"center","background":"$$chatTextAreaBorderColor",".file_image":{"width":"100%","height":"100%"},".file_other_type":{"display":"table-cell","verticalAlign":"middle","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatLogSystemMsgColor","maxWidth":"50px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}},".file_info_container":{"float":"left","padding":"0px",".file_name":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic","textDecoration":"underline"},".file_size":{"marginTop":"2px","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor"}},".file_status":{"marginTop":"5px","textAlign":"center","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","&.fail":{"color":"$$errorMessageColor"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatFile"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatFile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_ChatLogListener=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils,z={init:$$},A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
function $$(){A=x.root.$('livechat')
Q=x.root.$('connection').$('registered_timestamp$int')
S=x.root.$('connection').$('status$string')
B=A.$('channel')
C=B.$('chatting$bool')
G=B.$('log')
Y=B.$('served$bool')
E=B.$('rating$string'),K=A.$('profile').$('nick$string')
D=A.$('ui')
I=D.$('chat_button').$('unread_count$int')
M=D.$('chat_window').$('display$bool')
O=D.$('chat_window').$('main_stack_name$string')
U=D.$('mobile$bool')
W=D.$('popout$bool')
V=U.getValue()
X=W.getValue()
F=0
Y.on('value',function($h){Z=$h})
S.on('value',function($h){T=$h})
C.on('value',$b)
I.on('value',function($h){J=$h})
K.on('value',function($h){L=$h})
Q.on('value',function($h){R=$h})
M.on('value',function($h){N=$h
$_()})
O.on('value',function($h){P=$h
$_()})
G.on('value',function($h){H=$h})
G.on('keys',$_)}
function $_($h){var $i=!1,$j=N&&P=='chat_panel'&&!V&&!X
if(T!='registered'&&T!='reattached'){$i=!0}
if($j){I.update(0)
$i=!0}
if(!$h||!$h.length||!L)return
var $k,$l,$m,$n,$o=0
for(var $p=0,$q=$h.length;$p<$q;$p++){$k=H[$h[$p]]
if(!$k)continue
$l=$k['timestamp$int']
$m=$k['type$string']
$n=$k['nick$string']
if(!$i){if(!$j)$o=$a($l,$m,$n,$o)}
switch($m){case 'chat.comment':B.update({last_comment_ts$int:$l})
break
case 'chat.rating':B.update({last_rating_ts$int:$l})
break
case 'chat.memberjoin':case 'chat.join':if(y.isAgentNick($n)){$c($l)}
break
case 'chat.memberleave':if(y.isAgentNick($n)){$d($l)}
else{$f($l)}
break
default:if(y.isAgentNick($n)&&F===0){$c($l)}
break}}
if(!$i){I.update((J||0)+$o)}}
function $a($h,$i,$j,$k){if(($j!=L)&&($h>R)&&($i=='chat.msg')){return $k+1}
else{return $k}}
function $b($h){if($h===!1&&B.getValue('served$bool')){$g()}}
function $c($h){F++
$e($h)}
function $d($h){F=Math.max(F-1,0)
$e($h)}
function $e($h){if(F===0){B.update({last_agent_leave_ts$int:$h})}
else{if(F===1){B.update({served$bool:!0})}
if(B.getValue('last_agent_leave_ts$int')){B.update({last_agent_leave_ts$int:null})}}}
function $f(){$g()}
function $g(){F=0
B.update({served$bool:!1,last_agent_leave_ts$int:null,last_comment_ts$int:null,last_rating_ts$int:null})}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ChatLogListener"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_ChatLogListener"}
return z})()
b.__$$__meshim_widget_Themes=(function(){var x=b.__$$__meshim_widget_themes_Base,y=b.__$$__meshim_widget_themes_Simple,z=b.__$$__meshim_widget_themes_Classic,A=b.__$$__meshim_widget_themes_Zendesk,B={'base':x,'simple':y,'classic':z,'zendesk':A}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_Themes"].join('')
B.prototype.__jx__fqname="meshim_widget_Themes"}
return B})()
b.__$$__jx_ui_DraggableFrame=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_FloatingFrame,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__jx_ui_Application,J=b.__$$__jx_ui_Widget,K=F.iwin,L=F.idoc,M
F.on('mousedown',F.raise)
L.onmousedown=$_
var N=0,O
F.__jx__constructor.prototype.setResizableNode=function($e){$e&&$e.dom&&($e=$e.dom)
if(O)O.onmousedown=null
if($e){$e.onmousedown=function($f){if(N===0){N=1
setTimeout(function(){N=0},300)
$_($f,!0)}
else{F.fitToContents(F,1000,1000)}}
O=$e}}
F.__jx__constructor.prototype.getDraggableNode=function(){return M}
F.__jx__constructor.prototype.setDraggableNode=function($e){$e&&$e.dom&&($e=$e.dom)
if($e){F.setBounds([0,0,0,0])
M=$e
L.onmousedown=null
$e.onmousedown=$_
$e.style.cursor='move'
if(q.isIE<9){$e.style.backgroundImage='url("'+I.assetsURL+'/jxml/images/blank.png")'}}
else{if(M){M.onmousedown=null
M.style.cursor='default'
M=null}
L.onmousedown=null}}
var P,Q,R,S,T,U,V,W=!1,X,Y,Z
function $$($e){return new J($e,null,null,null,{position:'absolute',top:0,left:0,width:'100%',height:'100%',margin:0,padding:0})}
function $_($e,$f){if($e&&$e.button)return
F.raise($e,2)
if(!X)X=$$(document.body)
X.style.zIndex=F.style.zIndex-1
X.style.display='block'
W=!1
if(!$e)$e=K.event
if(!$e)return
S=$e.clientX
T=$e.clientY
U=F.getWidth()
V=F.getHeight()
P=$f
Y=document.onmousemove
Z=document.onmouseup
L.onmousemove=$a
document.onmousemove=$b
L.onmouseup=document.onmouseup=$c
L.onselectstart=function(){return !1}
$e.preventDefault&&$e.preventDefault()
F.fire('jx:activate')
return !1}
function $a($e){if(!W){F.fire('startdrag')
W=!0}
if(!$e)$e=window.event
if(!$e)$e=K.event
if(q.isIE<9&&!$e.button){$c()
return}
Q=$e.clientX-S
R=$e.clientY-T
if(P){F.setWidth(U+Q).setHeight(V+R)}
else{F.move(Q,R)
F.fire('jx:drag')
l.tick()}
return !1}
function $b($e){if(!W){F.fire('startdrag')
W=!0}
if(!$e)$e=window.event
if(!$e)$e=K.event
if(q.isIE<9&&!$e.button){$c()
return}
Q=$e.clientX-S
R=$e.clientY-T
if(q.isIE){Q-=$d(document.body.currentStyle.borderLeftWidth)
R-=$d(document.body.currentStyle.borderTopWidth)}
if(P){F.setWidth(U+Q-F.offsetLeft)
F.setHeight(V+R-F.offsetTop)}
else{F.moveTo(Q,R)}
F.fire('jx:drag')
return !1}
function $c(){X.style.display='none'
document.onmousemove=Y
document.onmouseup=Z
L.onmousemove=null
L.onmouseup=null
L.onselectstart=null
if(W){F.fire('enddrag')
W=!1}}
function $d($e){return parseInt($e,10)||0}})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__jx_ui_DraggableFrame
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_DraggableFrame"].join('')
x.prototype.__jx__fqname="jx_ui_DraggableFrame"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_ErrorHandler=(function(){var x=b.__$$__meshim_common_System,y=b.__$$__jx_core_ObjectUtil,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__jx_data_JSON,B=b.__$$__jx_io_Form,C=/^($|about:blank$|(https?:\/\/)?([\w_-]+\.)*zopim\.com)/i,D=/Script error/,E=/^en/i,F=(q.isIE||q.isNewIE)&&((('language' in window.navigator)&&!E.test(window.navigator.language))||(('userLanguage' in window.navigator)&&!E.test(window.navigator.userLanguage))||(('browserLanguage' in window.navigator)&&!E.test(window.navigator.browserLanguage))),G,H={init:M,post:R,bind:N},I,J=['zopim'],K=0.1,L={}
function M(S){I=z.root.$('livechat').$('account').$('key$string')
G=S
r.on('error',P)
if(f(I.getValue(),J)!=-1){r.window.on('error',O)
r.window.on('unload',function(){r.window.un('error',O)})}}
function N(S){if(!S)return
S.onerror=P}
function O(S,T,U){Q(S,T,U)
return !1}
function P(S,T,U){Q(S,T,U)
return !0}
function Q(S,T,U){if(!S)return
if(F)return
if(D.test(S))return
if((typeof T=='string')&&!C.test(T))return
var V=S.stack?[S.toString(),S.stack].join('\n'):S.toString(),W=[V,T,U].join(' ')
if(L[W])return
L[W]=!0
R(S.toString(),{script:T+'',line:U+'',stack:S.stack})}
function R(S,T){if(Math.random()>K)return
if(!S)return
if(!G)return
var U=G.getHost()
if(!U)return
T=y.extend({},T,{error:S,system:A.stringify(x.info),connection:A.stringify(G.getConnectionStats())})
if(T.stack){T.stack=T.stack.toString()}
B.post('https://'+U+'/client/widget/errors',{params:T})}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ErrorHandler"].join('')
H.prototype.__jx__fqname="meshim_widget_controllers_ErrorHandler"}
return H})()
b.__$$__meshim_widget_widgets_ImagePreloader=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Utils
function z(A,A,A,A,B){if(!(this instanceof z))return new z(A,A,A,A,B)
B&&B.path&&this.setPath(B.path)
var C=this
this._update=function(D){C.update(D)}}
z.prototype.setDataNode=function(A){if(A==this.node)return
if(this.node)this.node.unbindValue(this._update)
this.node=A
if(this.node)this.node.bindValue(this._update)
return this}
z.prototype.setPath=function(A){return this.setDataNode(x.root.$$(A))}
z.prototype.update=function(A){if(!window.Image||!A||A==this.last_image)return
this.last_image=A
var B=new window.Image()
B.src=y.replaceFileHostname(this.last_image.toString())}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ImagePreloader"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_ImagePreloader"}
return z})()
b.__$$__meshim_widget_widgets_form_InputMultiple=(function(){var x=b.__$$__jx_ui_Label,y=b.__$$__jx_ui_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!E)E={}
E.tagName='div'
this.options=[]
this.labels=[]
y.call(this,A,B,C,D,E)
this.on('click',function(){this.validate()})}
z.prototype=e(y.prototype)
z.prototype.getRequired=function(){return this.required}
z.prototype.setRequired=function(A){this.required=n(A)
return this}
z.prototype.setReadOnly=function(A){this.readOnly=n(A)
return y.prototype.setReadOnly.call(this,A)}
z.prototype.setOptions=function(A,B){this.empty()
this.options.length=this.labels.length=0
var C=this.getName(),D,E
for(var F in A)if(A.hasOwnProperty(F)){D=new this.optionConstructor(this,null,null,null,{name:C,value:A[F]['value$string'],checked:A[F]['checked$bool'],initialChecked:A[F]['checked$bool'],disabled:this.readOnly,display:(this.readOnly&&!A[F]['checked$bool'])?'none':'',className:'input_input_'+this.inputSuffix});(D.container||D).addClass('input')
E=new x(this,null,null,[A[F]['label$string']||A[F]['value$string']],{className:'option_label',display:(this.readOnly&&!A[F]['checked$bool'])?'none':''})
if(B)D.setChecked(A[F]['checked_user$bool'])
D.setLabelElement(E)
this.options.push(D)
this.labels.push(E)}
return this}
z.prototype.getOptions=function(A){var B={},C=A?'checked_user$bool':'checked$bool'
for(var D=0,E=this.options.length;D<E;D++){B[D]={}
B[D][C]=this.options[D].getChecked()}
return B}
z.prototype.focus=function(){this.options[0]&&this.options[0].focus()
return this}
z.prototype.validate=function(A){if(this.required){for(var B=0,C=this.options.length;B<C;B++)if(this.options[B].getChecked()){this.hideErrorMessage()
return !0}
A&&this.options[0]&&this.options[0].focus()
this.showErrorMessage()
return !1}
else{this.hideErrorMessage()
return !0}}
z.prototype.reset=function(){for(var A=0,B=this.options.length;A<B;A++){this.options[A].reset()}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_InputMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_InputMultiple"}
return z})()
b.__$$__meshim_widget_widgets_fontLoader_ZopimFont=(function(){var x={eot:'IyQAAGMjAAACAAIABAAAAAIABQMAAAAAAAABAJABAAAEAExQAwAAAGDAABIAAAAAAAAAAAEAAAAAAAAALZ7mnAAAAAAAAAAAAAAAAAAAAAAAAAoAegBvAHAAaQBtAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAaAHoAbwBwAGkAbQAgAFIAZQBnAHUAbABhAHIAAAAAAEJTR1AAAAAAAAAAAAAAAAAAAAAAAwBBmAAa3gAa4gASzBLN6YrIYNhXyWhLcUp/eCJVOnIsL5Y0XJvcFQ4MbGnRXen4xGVNB4NOoGOmIybaDttACoOFihnyouMDrvczBIrckswCvuDKcgzrU8+gktQf1rEl6RmfVNsOn+8xtUVBuFmN5ipueNB6IZb8VIMtiL9UGS0AXRdUKqgwehvYkgEA4M97MucsqFYc9ChM21FtdqrFrtsy0vKdF5VcDwydLXaXKzx1gu9JDwahqLQ4xGHhdINnKAjgzpSGzyJgnODzCAQCGmDlfm2PabC2EsjecnmDJyh3vyJR8BXzUjYysH8VFg8eqPxfcJfpNRlqhSZAYV24jEV02Yc2uRkD8I5IV03XnrE06TDWMX4xD6yUXkGkhYHuNIENcXi6HpkljsT9Gg3aNZKyO+KMRGqkHkdcHBW2EhsHtLTPC35wHtIRmLzcyQfa0pnRRvcZrYeCprtisiawpCLjggwiwhDyaq4w8wLVC0EXFkF29VdDflcxLmkpHcilVCtBnWLctIWgYnTUWZytd9zhnX0cKmPQotCtHquovLMpAzMDBoSLlsfUwH4u9pCkQsrg3BynvMAFJvpihoizL4c8QBto+4JfuhRGj+AKe4HxPACAqegBXJnCDoBrjwBgR7mg73mxLmgLLYGlx54cPV5ALjaREYG6mAD3DTx6lD3AlcYyIeoeo5RCmblQF9uduSDu5PvYVJCnSYtEWsE/HuIbSaQUFJTYqGsTitE4FjeHChnOMAgx6e6BUWW6IHgxCOAqBY1LoMHw+ChjEiBw8JEBPjUpA4QaUxQg1OybSNIG4CzQOZAaRU+iVanCXVYijVmtEDwGGtZAn+VY02GLCAsbWw9pBLFpzg44GZSLV3lXcQCzYLKW+1yq/0cH6B4AatW0IO9eEqrlZl8nKQWVRNOIk6u91bLSJA4qVarbGpfIZgAO4RrqLM/jDCKYNmx7IUrdZVkkRBRgwaisrNRw6iTao2vsQkNOFwQJvBPYwL2KGXa4xpIREDgDJuzBAQoTGyZlUHX00NeJpx0H3htGAtNU1UKEUc9VMXsiI4lK5w+036lWKsJROPslxIILhKh+ZYBGAqTAwCBftWrnEL8ZcjJ5eaVrgBjA0kxUJPZDCIkPU4wEhQiDRZK7KMl6bM8lCAckBJIjEPoQ3lIjbSODJvGafos499YFeG0Jg0bdeoTIrKAjXwyREWONXuJxK6o4GmkCeQdJAR9hac3xsg7xVo/7hlNPBjaKhS1IewhHCkGScDGzYX0gFh2sOuuYkwvI18pLS/jdQ3N1eX6FMkxjJPoDbsBUcncFre5OI4Y7hOgpuwpLq/BhxrQdU9azkPgVzxmatzPdqbcksbL73TYlMpfZtTxdLNh1OnN5huOyfdnJQZWtMYkd+NrxRucYU0XoGYTdFAFd2lB5gbLdC0oqU3w3BNPCKsgjjEzrQMChrgYOc9B55BCIlHAfZtpv4+dGEgzEp3IX3AmBkSO27dwjAWcAgLR8ktTqoR41Q+Haen+jI0uILi+uu3XZ/qIF+uiY8YgK+gr4H3giDjDpdx4vQTDDo1EDOvhvszM1jfcIKNdgSA9G4CH5Ey7dmdBJOMK3WIMCtFwXmyc7gbTKJbEA3JK1ZDKti4yghFDY7U4qKsSHi12jx612KDakKMgUnFVSGlUzEwmvxcge9QIbSNrW8bvM8RI7boPsFnfVSO6OEbpBIQm0ffG3BfQNBoJhwgpHuv6EWoCYzmeE3naBxIjUR/WeR+Ay7V7qadnHsHM4cEB2jCt4D4P3w41T19ylrY0Y9gOdJi2oA8NmjNEhwFwJAMtGOite/NhQAN3AhHE72gYS7O2UQaysAhmZwRgveWSMVpEXBr/rF/8aF7Q1bDcb4Lcf6UiVcppbje6FK7Azny61H8yUNs5ZIfJ7gXTO+hjEoL3DzTHwaQgU9cgdyK2oBJWtEUgUwMcIdAB1qoHWLQNyn9gobnFujhDd0jCLaxab5rZu18g3noZki1qEyHgkHYODCeKjQXyXOkBAOmZXVxN5iCAVjCMMnRdA9iJQ+ynGXo318f6KG3ktorP2XEDN2MR1VgX9Gm/mlMQoBRjxlxNhleyHyKvv5G2FBTKDGeM29AQ5E6x84KA8KEZ+o1yePVXvRVDnSGXxx3iIFEZaaio6OBnwSH1Ee6ZdQAyqmfvYyfJ8x/k82+Q2aAR8e+zK1ZSyrJA68O67zdGxHT9Y4JYc0nQdM4s4BfkC04j/X0An2Z7GdwEtdCD5GozszisZUbn65t1gZKKtcak1gmWCE5ELJBnMsYtGuBbFGXTVB0CCz5nL5zPtolOU3oRKXQpEW9H5NYsT0CfJeWH6QyWXDwROok2C3KGBkTTEo6u9dPQJU6EraXdH/YYeaiufgzMyORu0JqkRBabHF8YJjyH/EZRR/It2isxAM9rARfUzNdaZ2aq6FhFQ5oC8ihYR6+MWFgiGeQx73jKqsdHGroTW+wUSM0WX0jG7vwY289/OL82HBSLOA3V1DyPJ5pzwL4zwUBDBYsC3/zYZB8f9j1RORAySAB6vkrCEVAbO9oNNd+II9JkYtBHg5or6EWJsuxk9hJLgMXxgU3iJOIFDTcDK6GACC7XLggObxi0lNxSGN/cH/k+xyuyDsXATWVlnG1SOVWP7KtwRAGjTGTlPnWRtP6EdiRSMJ/eZgHkPUr8B/PNbti3rCpNnO8YoKOXEJ46Y+iQ8iTQsFkQOMKev7SuG7iBDQLrlA3pgWHSStN9t0UhEB4R3jWA/1TIDQfrCegaz88sl8Rm3XAqLTSIoUOmLnsF9V6XBqVCv7Ka0P4iQCQ4R7cQCZK/Lb6S2mf4dd+R0TzqGXEh3xo/dWlJLdlqWF5kxL2132NNEmSUFUhaMIwx1KZacoYiN2d2tg9HojvU1GEq7nbClJ91PoZhliigQ2Fu9CyBYbjG7NMM2d4LmNtAN6+NU1A0D3lianpILyFvCkRQjBI0eWFmvRd68gtfA9ZMHljVkU8VeIYIg69+wZSNDZFii+KYDs/XPq0t9kIGaNO2dJyx6rEcaNgha/TMaZVhK2ekSNKuK7EszSj9LWnLfkOU4VWbRL/wgl3cKoQU2p541dv8klbitOCZzT3SqLVBZPzEzBeJYwJmpCNj78MWMSJk2Ut7pLhULisO5JjmMpsO56qhbOclUn1PmC2bnIr9Y4Za/KTV2adsDMAsSFRZ06ytop9RsefhtjDXLvKlcVMg+LX4NTSzjKzS+A+Ua9N9W18hY1rpuNa6a7Gj2AAtuGOLSLagdAIUWVIm5XubfBVHgFaJOH8OFM3wmHfNbJ10jLWY4xEIvq7B5ourNwmKL5reoLJWKRW8cpWi6LlStZrUZlk2HGClvKjtalKQX5TPJkqj4ez1FBDSc93jdJ8wUo7EFalSVcQs382gFuUhQ1YkJ/PzpggC/q5yoMme2jVPGdekCG9csVq/2T/UP/5Mic8Wlq7gm1eyItejOxIRIB/BpFKPMK3+n6+jWvly+nyiU8Z1A3re+2XXNYxHbUsxfxMQ3mgiJqlRVZQZ4nOUrDL7rDYDC4V/z69vKT057vvc+3qZZyo/7vmJz1nRnXApwl3cfesRgcG2tcDG5bKV097OVI5yXvc3V3Uftx/ToVLLvA9ajMyaSn9pHduE9hSIujCFltr++xdy6na6TmRe0qTsA0ajsLjJDIUY6czrNRteQDlPKH9Rv04b67EsB01+duzWwpKPhl+P11dEi2mGjFMCqYfuDlN2oPJWT1/UfiN146+6WB6B/EHT+VKWN3ENVqunIIWQMlpeEfs/lRVKflxuUjhHHdOThToUALxGFQGol2l0bDau9LAUs4RFPCTbC7FkhHmZWaFMCr/VR7KUNusALDFyQg2mmcxh9iyk7x+Y6BUZDzkaYQGLSA6qekt+XI6Jh6cliD6ZfEgbE4jWUgUzoCsyOQmcnMTMeEO5V0muV2HBDFMk4/kl4nhRt8tYpwIIqv2EqFt0YBwNt1eNozx87A3p1siELoZ8nturNspCpDGY2EQYK2FJNPf6kDCKtKgvl0M1wYSotZoGjYO1NGToGhifvqfDZAumFbKgtS9WlVv+MuBaNVboSIOmsanO3WtwSw0HVct/KDayUEuil8gM7Eg4dbTKkHUf83XFKNnN9aJim7ZL0XsLVQfRxUBimYYjuVKil2uwTtWggVmIyaWrZispU5OQNV1w+W5aASMYEkJwhD54kN6B8fhZ2R4KA7LkhRBKHeTjKWk2IG34F4TMVpPo3Oh8Wa1qf+df04L4QwRi1s0Gj64eUKaFruGSyzwMo9fMyYdwD8ig0vuM+aVvdPvg2TPwYYPmnYnop9mEAVEqP2t+A8wM2n+B2KrDYrI2CiOp94gxYv9oZupgmFELg341jJPwQ+GafsaDUXfFD7tOBGpnIgZzU6SSJ11E9b53M8FhdFNdSVDML4+b0tO+lXaiVEuQeEHHh52ukvAjngKkGvxSqWwgLVcttgGWkFH8qxnIp28wJgJV0/GAywAsw/X+ctjdSkQDa5AHGdtGQPtsJKTA3pyVJE3OFSQnMQaawdtmHTLoExQvnXVCE1NVH50hRhnNXURic+KMoavXKS9ARYSRYuJzIllvKl4sOO8/Y4jzMaiKpLNBSlxNB2jlTRnwUK0f6SFfHc8nWM0LTIoBEYZfRnEW6IkoBEKFBOVRI4K4phS7sVDKkszIB9d9UrBb8aUpxf/iDm9KEb0hj/1LL66SOhIaeFGPddsJeqjswPPUmZAVeH7NWcJHHp5/CAEfrArVlOWOWWOuVAfXloxQWQ/J68f1o4+gQEvmfSrvCo4WXiUYe6fflqCKjwu30VQ30Qo1DEYGlTEQ/EAzrHh8tLALD+mbJzNgdL6MqGhlAEEQmqFaYQg6XwYrHoog7AhE/X/Iu6Ll0gLRdyLDFLT9Kb8fyJgV2AvJuGzXIHCEsqZtg9OryXZJaJZXbt3d1ghlQzCFDG6hA6ksKQrt2S3eh1bD4fq4OEJIf4az22f7fJYFz6zsL8+8wPMC2onJJYd2ALeY9N67OHIfl3hfomUBc4ERNtdAvn0Pqh5aCUam2ukhjFFSmoAnSvn5bJ05TF55dsPpgbeIAZR2rx/BSB3f7ePLC8zzjQRsHoI7qqN7bBWoPD5yvV4WXxNOGTUHw42WzG9AnMKFXHLCJxkF85ggIKcrcoIImAGc1jamEamFcA//FN+yT4jGbC4SSXsI/Xg2oo/gfvAUlX/e8YKD75qT4cmO0ozQWRid+jiTYPcldom49zSnLoeFYxltTegexZtGArx6v0CkydiMxY0/9jFLmtront5XSxZc3m8sIYU/2J62QgHFulR5tm7BFKl6so3Uq8iC5KCiegU3ERBDynmOKMb0PPBuZEkyUwyrrwgmc4dIWZnYMpuyTZpWbogM+PkdsDWuJCWOBthGLAupAqfI3NqJgAJwNDsYnoMFUy1uqsW9fIAWzaFrADCiBTwFuKiHUgM5RhyAD2KGVFv90hXiozt2xOdrmi7AIRKWQ8fO4DaR9AkwDTbADLUNnUvCOUOxA8vc3eI/VmQqjY3j6XXNxteGAJrwKMRQAsQ/Vb87RdfUPsMsCklRSMWRo1ucINm5lwp5KqtWq0WizT29jRvV5RMyNMgUzoiv3m7QmLHZCGsv6r+9BjhXqNSlaE5I7j5EOC1L9KAW4guH983//q9dAFkMO5GrQCzNPgtdHgqEw7E2PAYt1rKaNW37T7kE5Duy65etzfLby5K01BOzjNutmm8aBdS+frThLTC/arvcBPPeV7Bx/xJ1OEZjQDMwHy9WdflpFvm4Bvb7DKgB09U2B81mBBJvZVP6UZKPwdrwSD7taTTQC7tCUVA4qpF1hRBfsnH/nmVivaK1Z/BEBCVhRDYflmxAyhDRMOdhDEgaDL8zh5YQucGfNppRcO+tAWsS3Ds5vCEEHAMtj7BOhhm8BOdUm1KIYza+TYiOC0dEx574haTcc9IqRO2fvOQLcxQVeJ6MhKdnyFU4J9gNIo4FoR5AwIBytkkS8LL7MP4uWn7xvYY2//wQObm3Nv2SbbVuo+Zjvamc0nD8Si+HXSSQdpIjl8IdrkPAjZnHQpNSDN5sL9owzpyEXKioBVc0ixMVK10q1TlsoZpRv8nAeOY66SWRy1FhfO2eDRJCkqyY3VafkbQxR4Wf+0zN0B/swprbfzDC3zFSluE3AGSuHYz1Vmc10myK7dWGhvPz2idLRQwKYcuZ0ot2da0WK30KyTvLSXaUE5WvGouh2PyiFLiZswCpCI/7dg1eQ0tWDr/X+N4dp46sycptTNrPht6CMnfYhDzUICb5FiXRWktXYBTIpaWUgh8W/EbRYlwKrVumFcUowngBGEM+GwjDOeMUQJh3suihEqFQZ5C2o8i1soqPIJJO4y3pmhEeUcQXD5iOCs0sF2yxlsKuVHJInzizbIFFyw2YEQArMtiZYwdbtBsHH8Ryx1FYwN3ynnF6JD0PvCpuLCML94NrmW+SnW+5VvlHSNQJXHddT01JoXC4TCn20tf6xdA94L5tWy1WC1XrRDXt/lcugS+td3Nz9zFhCXr92S4ZpacI2AX0n7CPsSXmBlvpFEIuJwU7+st9Is/11nqnX2hZQ4Q3uKvWVt2zQJ+eUrQY0P031v48TgVgFGhIEzLiU2v7VDI1q047ri9l+SwXKJbW8Z9pQRT9ZY8fSd5GJSdSg+F80ASETDAdtvWZhClrMbhPWDH2J9UAlb3vUB5hLeTfEsKePskBjaRE6A3qdFhcNF9pIZKjhCJaPqMRgK5+Y0GtJYl9navQlgA7o6MO6t5AxhMDyeAJDZw5J6CK0x29X9AjtMDNArtjTBP2oo8PY6C25OxpmcmsnjcR85wllQ9LueiLMKJhgCcuhEi8gfu7AElCGLgMgXXLpNcSyeEKTMCDUh2h6KL6Gt0VQKYiBqTDoHVWNpowApaY4N+6x+2KlAJ2AHMSeAAjwsRPkc4rrGlkymnl49wg8iRlwljpXyBy7JOCpB8DPpEFOrF3FwSJW59GqEUgPbajH1EDFeUf1hq9BvICGXGegls0ohiXvOjqN9cumwiUoM4gvRxhKK1Y3phztqVQ3E9nvS5KowytvzuNheoVH8f/gXsgsf6anJQ5Xg4MgZd07nLt/Dm3BjDsxeMpGBNKu22mFQH3dH+2DMxmD95hCIL2Q30M9Krs6MtwH6hWePEBC7dgJaW7g7pwTr4chRZNJ24xkJPsBty2aHhJ9TYhBcEXgc7eKtKM7C4k36QYzRKkXFFMx/QAAew6cSYXIxW9TOqAJk/fE6xS0EIUktp8/I3LOQOCg29eywX+oq+BZu8TBa1QYuBP7V2jOcxYhGeT1qABzjjn/46Iase65+8An41lnjY5q7sz+L2ZKOqP9S/cU6Q5Plz/DTe5aljggYbMo9e7RlBYohIKA0C8/9aFB/kBBp78gNXzWlvOX/GsdeQW1+IOm7xoQJdwHp14hyY0+4z4Jhm0d4SpcIdM9Qdc8AxCYQIA9VRkg52FC5N6S7x1ufdRK+ll3jLy1C59aG59dQOyB7OxmaXKqKZBjsDTtdvmkstNoquStGCBCEVaIvWaTGb+wSvJ9Bs4JtWwCCkOQTP0o+DbPpcLb42ifWI6+ExwqmUKKboQ9XRYZp93EzbsRYbVpEoTRQJ3Fmq4rAMlBOe+Mi87D9LKjjhAc7VDt6R6L4E0y//EIYgMtfj7+mbNUW6T2tiQNai9R8E5jehR1/Uy/0aOIqhCAHVVjAD62PJvAV4QF2Z7zp6I3981nCfW6bTX3oVr/Cnl8MnbmtmR6suukRmuYAWd3Ep5S4tebJGXCsEupuwG9EWRupwW4cxQnznGDzpyBxJJJQ0vyJX4MPc+OtrWaDQrfdlS0NeMz8QOpwUi4rR8n3UKj37TFcUEboC016O7vgY9znGPLwJhMQQoRr/nUvuMEakMSiRuf6Mqo1OPLD4QmRS1xeEvvywookzhvMc2qRKJUIMGSiQ0LA2/IYk/fuhDE7W0GhB53BBn+QDMmlEYV6pIkO5IiDQ4i/qx2VUBiIeA0qBmiZj/TgswVPpelOS5S6dRGyjzmzKxWtFGIPKkof6KHZQlvJBA+k4RC1pTfwNrofHidLm/lYayTmw9btxX14eROLOUxxxJAIWgmAhDYzRnsGp9CEn9BoT8N2s134wCnMiYnl0q1IHtvDLoJibhGqxryjEFNgZ1RpF5WzYVzrfH44T3n7UOdLBvD3ymsR0GX+J6F6b4Mq9MHiywYYyxHnwoj31LcwawYm8uwUGlGTb2eAO0LVra4Yv9okiANRMf93R3WhBeFIAwYf0INI7xhVQ+H4DXpuaA9ATwdKP+5z0O4fgCmfMgET5gUpbQFiJiCCHaw13jBLr2SxOtkKrJe4/I8cYb/XYeTe/qS0ovKanXgYeC1ejBCncqnWUqoCKtA2Kga2SnCyoAdxsQ7gFJjq829pH90MEhe+FfhhEoIDYWCYYqETQOHvPopylBFzA+XJa64bWY0kGVdDVOETEzrt4rMZutTQs6OMaXQcQybeuo4BOXgSMDxPFEAa3dhsuVRfaegzQQwES/IPXjw+0ve2q9nTymednBaF0wis7phe4jH75a3utmyKYYhxJez3vYY3zqeFXWUht77FLCzeImXEXIzdGhjipHuLPtKqu3dj2tkeW65gpTCdxqWVpnf9+erA86SvYkjZYi4aeQUStpF0r+hBomkeDyENdX8QdeSrWcLlARP3TLxyyinbvV4dcK2Rbc6qVAEnXqxNE5MQu4KJJIxa0EqkFxLEl3TCujnMEHBoNhJS4J1BadbieLFeDviTU3B7E/eOgGuG+RByguEEm0zsT/oe7BS9QC2HsWewATNzyYBPjwREN3hXiVyWD8x/LQn7Ab4hTmUModTVJp0FDINuU1AzPK/MNOlIQ4pH320G0Jrp7cKIA8cX5IwGDfpOooVfF2WRkk24wpZSLSeXX6KqNyKgwcsCJDiJBw7gPw2bBdBHWuQKBhQdI+o/Ep20o7rXlDI3kL8ZdRBIYEAd3LXvD+e3ExX+SoMuGT3rD0sNNnKxVVxEEhcx2TMWnylW7xRCpNmdYLAegoZmXvj8ZvCJTBXkZgqhgwQoyaYmC6SwYhllsJ4Mmwcym61oM9GAcC152sEcNQjj5ORbmNrNID60dRgtI7Mvo1Jp2eO2dcKVyEccgAAAAAAAAX7CPTIikaFrwIpOI4WzUSIE8/S/5JOkTyqfB2oSjw/Kj8iKCcaIpITo6xHlhO0oyZMRYCI2rHTGBtEipc8tUBMdBPdyUzFsyQKTMSLt8SSPI5TYfBtaxYwmkNWYRoOMss+PQpYxU0s97QeX51IoUXdGN33TxpBzLwUs0i6a6xfmxxwjZNIZFlDazpeCamx5hjUUP00ZM+udRcVoYIu75Rwl0UBGphIRTmxGdLd93v3wtsfrJe0Ry+JRvjsxiFX++EtOHt+ug1DMwofqsSJ5tIqezQvqnKz9hgOWcE8eS3ABxY0lmyYcOYBFbjFrr+zCGEdpBsComA5/8lSYhoJnZAnc6tz6FBAkaymgPTCqoUGNYB4JJ2yg2zKwBHfjDPpCPFRFaJEu0krFh/po5EkFVqLhl54hwCTVK0YIVCKzoD12WEKuKf5LBJcSjTXsw6oJeDwIKH8M23zJzhyLEH8Yg8iSUcpjq6LS6XckmblcEJzYLZacgMfKjWATFgcwjVSrBTJMiBVZjIMD0yAtqYWMjY9niQmmRMpmQOR6KxWiCYwgim7xWW/sXLRcLkmQ6Is9eSbNUtUizAX2M425szP5ehdy9kBLxHctUbxzRDIr9qTrq0m0qkcXxpRtqwHNbUhSWrwxWEQmr3ImsSkMP9Ib9IG8qiQ+3LH5Po0olnSR70MWiSTx7P8oeBB76QnkgRZWkBC1rasw5omEq6rx/JRFZ52OBR+kxvA5fwFV5WgLEAJJ42HA2tfC/UIa4TmSj2AuBN7I/pRgt9jaU3vTyhiihvGXG8MUczQ1aCSk7Q48gRHVZpuy4HGKR+nIk2cXz8SZyqufaDw3CpGQwVZsv0ZnOfCInB5GZXm8ePa6jFnjWXAofE1VfxCgBAO1/RCnDKdFG/4AZatcBI1W1QvdqPb9JjmBjESjyPRijMCvOZBaeRbapkIRnoqlBvhs3QyyyQpBmUEBgg5DL5v15mou8fjQ1ejeDg2A0N4kqzU9KRPy+GWxvLJmJG09vJ5LKOOC0aEj2XW80ajUoDmWDLuHWyXrc7GOTypgLU+COShFYA1p5KA5IyWEvBAbAGVZwfyCGb5FIFqMz0iBsJysXEh7qXTlJleVsXyzP0LmoiUvExsHy/oRtsJ+rtNVrdgBgzUjrklLPIfpOCkMBKxIqirKTwHXtU0RM4BvgdRExDQlTfvYzwMuaRsMJ/oM9VYw9zkVsz1aoW1Dk/e34vUKg3DrpdKVysoAuUiGIWqWqmnVUSJf5O5rkMalz6CaF86K30sTvvdZPde0EOfI+6b7MpVX2FM27JswZC4okNFhRM2aUhj7WZ8x4eCAJUNkYzHmXjh0YA0albJK7YYwnbbOsBwi6zU1UBz/RGoDvbWj4yLcCgsdSSjr+5HRzMtAIMm8an2UfQvG23ISraNKUBJFnH96rjCO98lQrS4Aq5HJtispxh1xDlH8jo7ZGyAHzgCt5b1977D75VG2gNKjvkYdSB8YIf7BzfDThEDv0lyPTnkzwVeB2smgAFCUsSRzJc5UJSIyRFq1Plqb509CoswcSEUcsMvMY7rIRPY6DQYRgKkheZ4CMBxWlAzG/qCaStw/3zDET+QcAr9fmw/DrwWh8jCVF/z0Al5qrEKe+hkzauvRLgHPjJSdys7Wt2sL24ZDPPcYVO2EGaoeAQwcXw19mYewXje3hjNGuU5p4tvx106wBrVWtV6kQJVrsx0ORs2cNjn+5sNYNqJQJM5JtErKl/sm8NS9xew1Bo4mHpkMmEo08K4N3wQhZ8voAT/zRAxzYOEi44qyyCbXMdx6d0+oAWTjFaFedY+f1+EAgIH6R1oNHt2BGwYDVpBy4uD7hNg9b3cknmDNKB0Qcl6riaN/txXBR521UoFRxsXyP6ptLAGatPX8GUGh0gjA/bXVtDq6zC+dhSO4g8dT6zuETo8LC9hZMHxJ1L9EAnzWPJkqmyxlDVsqihiqC6JmM52hWbdc/dmmhA2viK5sY8jri21jbc2Pe4dl5MYo6xnhrF66mQav9AF4HQlvrI6jkKVtAAdmu34s6qZw1z7Lstm4z0+bLT5rkopzahaUegu1fZa2sasDay88TKse9MA2voJfEuloUqkx34JOvaDNGb22RnnPX3uLPNlWKvmSz8uxym21758l4rmwxYE4HAuIlCHT4cn0TsZIUDRRpPOocQ0NB0OAhpz1RtO9oNM4LRaxmHoTJt7e4ELUWDotcDISPNnKuUcYEflQXtoXa7kUYNtqP3cU6GR1Tv0K6yKCA0mYejCl+163EzIa2CZNAZTOESS6Z63scJxM6LbwMymv9wBC3GSgKckLMdh8AUxzDhCKk5igIJj0tcBd8Qz7I0hZ6lM+ENO4YdoYXkQRNjM1623LWULXuii9klW+rXg2NMwFOnJpGabGeMZGZWLzYzrX2GhGK23duimApIGe5LmeMSAQy9Jy6msOzD8zQVK4VJTyaCoJ2A8oM1h3pSHddDzosDKdfJFgSYpY3hoKYd4RmdCsm2yEn9caE4g0U+xPEOxOmF/uZJzRPAjOtFyfyCcw8oOfKacRN81AqS1v4sihF5/yP1lGGIfNstpV3MjPWgEw1gkPqqgxLCqnaTcMJJrhFYM76HqdMVHu+phadBNFkboxMjB6pWSQoUBrsDwTDMqAMaG5SZH8KP3pAa04/hEd48Cr1h6xl55EDrTZcBhYeeT08WMFiVp72eocNhYqwUtxcrWwUkOHIyqGplTbSQQQbpKpfkYoeJVMjpmtIhxIH11XZq8WFQuPm4EuLzLnwOpRAGKoUytthXUEvOut61MZlwXNpBj4WjWpQo3G4MMngYn46Ic8AlFAgKgkKMTyLTWEsLoN2754pdMEP7vQAOHQB/TRHcm+0tb7mrElei5/CibOn27A89DDukOK4A=',woff:'d09GRgABAAAAACkcABEAAAAAN5AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABsAAAAcco423EdERUYAAAGcAAAAHAAAAB4AJwA+T1MvMgAAAbgAAABKAAAAViQhgGtjbWFwAAACBAAAATUAAAMS+dC7jWN2dCAAAAM8AAAADAAAAAwBNAGCZnBnbQAAA0gAAAGxAAACZVO0L6dnYXNwAAAE/AAAAAgAAAAIAAAAEGdseWYAAAUEAAAgwwAAKmCji360aGVhZAAAJcgAAAAvAAAANiSaia1oaGVhAAAl+AAAACAAAAAkK6Uh4WhtdHgAACYYAAAAdgAAANZ3tQySbG9jYQAAJpAAAABcAAAAcqC8lUBtYXhwAAAm7AAAACAAAAAgAWUDUW5hbWUAACcMAAAA5wAAAZb3kUMEcG9zdAAAJ/QAAADwAAACVwfgde1wcmVwAAAo5AAAAC4AAAAusPIrFHdlYmYAACkUAAAABgAAAAbu0FS8eNpjYGBgZACCCyd+fAbTj+bNhNDz/QFnVgkOAHjaY2BkYGDgAWIxIGZiYARCcyBmAfMYAAX7AGZ42mNgZO9hnMDAysDCasw6k4GBUQ5CM19nSGMSYmBgYmBlZoABZiGGAwkwTkCaawqDAwPv//9saf/SGBg4GJjEgMKMIDkAzZULKAAAeNrNkE1KA0EQhV/nnzEJYQzB/0wHkhEiRMQfyBVEr5CTCAoeIJBFyC4HcOHCXU4yQSaDWXgBdRUYX3e1IuJCXFnw9auuqenuegDyALLkgHjkEYorMmVWla1nXT2He+o+AmYlZhVodDELvKAXDPRIj/Wk5bdXnX5nGlbDethIamlqzvrshO0c/tAJ05m+pct0np4nxcVy8RDfxjfxdVyaN6On6CqqRWuRF2h53a+ibBZ16HYb375WHGZ27ciRrsP4MnMUwKGJ8aFI7QnwqQMB6zxiSEbM69SxYO7VEwGbQMsXsAW0VwK2gU5fwA51KmAXCKsC9qh1AU1qQzAPSyhJzc6gXi7IJfMj6p0FOKY+W4ATqNeiBTilehbgjF5xzg97VcZ58zWU80gij38chT/+9w7TGk/PAAAAAAAAeQCxAJcAgwByeNpdUbtOW0EQ3Q0PA4HE2CA52hSzmZDGe6EFCcTVjWJkO4XlCGk3cpGLcQEfQIFEDdqvGaChpEibBiEXSHxCPiESM2uIojQ7O7NzzpkzS8qRqnfpa89T5ySQwt0GzTb9Tki1swD3pOvrjYy0gwdabGb0ynX7/gsGm9GUO2oA5T1vKQ8ZTTuBWrSn/tH8Cob7/B/zOxi0NNP01DoJ6SEE5ptxS4PvGc26yw/6gtXhYjAwpJim4i4/plL+tzTnasuwtZHRvIMzEfnJNEBTa20Emv7UIdXzcRRLkMumsTaYmLL+JBPBhcl0VVO1zPjawV2ys+hggyrNgQfYw1Z5DB4ODyYU0rckyiwNEfZiq8QIEZMcCjnl3Mn+pED5SBLGvElKO+OGtQbGkdfAoDZPs/88m01tbx3C+FkcwXe/GUs6+MiG2hgRYjtiKYAJREJGVfmGGs+9LAbkUvvPQJSA5fGPf50ItO7YRDyXtXUOMVYIen7b3PLLirtWuc6LQndvqmqo0inN+17OvscDnh4Lw0FjwZvP+/5Kgfo8LK40aA4EQ3o3ev+iteqIq7wXPrIn07+xWgAAAAABAAH//wAPeNqVegl8E9e199wZzYxly7JmtNmyJWuxJcuyJVuSJcuyZeMFL+xg1rCDscFsYQ8EQggJgUBiFpMQmqWhKSThJXdslkCzkDRN8hLU0DSPV1qa5jVtk9emCV9fmgawhu/ckaE0r7/v10/g0d3mzL33nPM//3NHFKLgw1/IoCiGoiodgoO/8G2FUsulwvyr/CUqhzJT+ZSfwkwAm5NYH8C5SYQLApi6CCWsC+JcnZSPfNgQxHxSsiIfVVGpN5hCjmCkSgi7XQ4nZ6TCkaDJwDkZwSHk9nWxryzse6TrWnNXHyPe+fSd8B9tQ96uPuj5UVff3oXXLimNdDFTPPQrCuZ4Y4i/wJ+nsigKBNz6x9hRH2Mf+kReOfQJUwB/w3VYEqI4qoI/xn9IsRQVVdPZiOOf+XY2amRqh96qYN5mLg+d6OuCcWjPjetcM5+kDHCXwYxMwWikKuxRo0jY4+Y5HgbEGVf8aLy2NrWUfiger5syITb0B1X8h/Ghy/F47aSJtXQ/tB+N19E0dJBn37iBzvIfcCspgaLocBRFgiDXwLmcIJZzojiTB8OZovi6zknxVG9qbfwoHYMGSzw+9Ov40XVx+gC0kbk9eGOIS8C6QU5xOKpG7nBaFA9i3OjB9MB1t9369qR4ejbr4kN/gIdA4zrYC4Re5X/GraFEihLTa1SW53LyIDM9oWNklcpy0jNivz5KRPzD2pV9/Yz6LfcJ9ynRhRiBOTkENdIiz2e6JvqGbFftkNtSlsZDjWjh0Sb65+jN67PQ5ym2UV1P7r1Cfc79kftvcm8Ubksgs4mDKVxBZ+g/wD0JXVMKoU8+Vx2Rc+nrcE/T0aZUuZxQnksxBfwF1XGwTJHCVAAzYIWqgMQq9iYMWy5TgPooxaZvfiopsIBpYD8bwKrzqHIqRo2gRlM/p3B2ABclcV0ANyRxNICbQ7gyiTuC2BbAJpA9RrFwSxJbdJIfzDucxGGd1Ail1iRu1UkOKIlJaSx8RSxn61+6eowy+jK1WKXDzDnJi67i0nPUIKPylvrhg26VcIMFSX6LIOKMGA4Lp0zWLI+7prbIHMON4kBRdl0sFsOtwoDRVg8lSirKhqFZMVwnSJ4y6GoQsSOGo8KgYKFqyF2VoiTaYzHidKKZ4cymEKgXLkURUUe7i+wqjjaHRfiGqgps0M2z+ojHjcKRUNBkJGbp1ttQMBJ1OJHBBE4LPuvkps2bEWYcWp0hB23a98QZNPHrvXu/ll+UH5Zf/Hrvxo/QUnQcLf3oI/nAxUd32S3yL7yM7iV0tjUUbGsLhlqrxSO/OKJP/YxDD7QuaiUtqpUH5N+tT31Tos/IQtpw39doIlp1U+qZi2lZcqd84OdRjf7n6Mk8/S+RpAhra5Mv9eze1YNmQpHIJ2plbnx84zr/Fa+mNJSFssHfAACYjyCUEMA20F9hQLIrtuFWoMiD/AABCNwIlm1Oe6NbH2JczqWHOO7QstFDqeCOB4NDKabTVlhdZbfVRmPWQub3jmdOv/LK/Wz11ERi6rV3S6oLrDbbklroeTp1UJnHjRvX+J/xr1A0II4ZsLQYAdxEUULlR7DVWoZH9IXUH7tpgXlftk9ClzmxwpXPVAa7N5XNaKrSci/T4rzU/zBfo8vj5BLW0NA4b+byykU0yne7tQRLvkWl/EXuXVgjJbqjEZOZ+A24DTgdr6V5zuP2+BkPytLXxF9uRY8zo9pe35LdOtTG5DCIVdEjlrYH4FtNpz5lvjpTU6NvlbthjGbLOTJGQ9McS48wZgRoTsXTtJVSfO1D8FOZNwDuU+It3AFIBAwHdyVAriDZh7XolNxRu+E4fKNTtcc31Mod8L3hhTq5A9qPo7nf7Tlem+7ZkL6TuoXtr4MGC6kBM9GhmBwQzZm+wQZRpfYhnB+QCtJOrkOUw47MiLdlRGmelCnkQSXoCfQ9VKKW521jNL5g56ytu/Ecz1X5F/JCeQFcLzH/gV5ENmSTf6uWW3eptH5PTYk/Ry3Ig1fk35IOokdqLNXO9/F/gn0upWqouyjMBrAxiasD2BHCgST2BBGOD2PCYKGFyvAR+ABw8CngMKgL+6ApKynVIp9USIHTWmPYIuCCGC4SJUcJuK5PkIxsLCaFddCrjeEsAWeDh1cbBXGQysouAG8mXmxBKvDeBBLBEyF2GkA1LmeRm1aqeuKidUjpYavCkTgKmqzIwPmQ0z324HU09cyjKP/3x2dHRkfWvSt/8egB+c//vqFqbGRx72O98J+le0ej0UuWwKVXhV6Tn75BPT7npc+R/XF3JOJ+XP7D+bvuvoAKDrkrKujJo3t7R7+sXF6+WVR8jzpFdfAe/gvgBgVUGTWewsYAzk8ShuANYU0SO2CvypW94pOY1xFSgN1JnBfEbh3WAWkIEEiVeLIP+TFsFSSDEfbHLWJLLM0eYFnKKmFZnBGAzaSyA55VeRwc+s6iT/19Qdy2X6IKNBpV/GobffUpWjVEunqVC7f51mKGJj0nJz/evv03KPRcrkD/+TtrGwVre5j/krJSXogVSymcGcB5SoSwh7A/id2wthplbWxy0MYSO3AlMauTSmGRoeRgTqgUmgxJKQ4rtBE7oGOYFTATwy5RsntgnaWClJcJdhDKgV4hhg0CFsm6o2n4FSNFoaDKJBrT1UxU5HICiP+/ND9KUTcyPtqP9ETdVQevycfOvCofu7b/puKZv2/GMUXXyJK86+4P5E8PuSsr3a+huYh6/GBKfoY1/zO1M9RJagxfzH+l6LyE6qQIzuYpOncrOrfDvni/o3NwEGCFRTd1XnpT54Ki89y8GPGNAdHhJpHun+jd7ID1D8cwovf0gp3uk0turmUJS3PzmG2/ki/IJ+QLv9qmSqWXy229tYqr5blCxnMoRFQuJ9lV/6DvDArLYu6v+CFKDezAC57fQc2hFlA7EU8NQL9v0L9w1T1F5hBZVWtwwEQAypbEGwISfX8ohJclsSqIl+mw1n5RwItDxMzHBvAsCEC7AjjzJoFwKmQBi2kr8SWl6ngwiH06qQmqwSQO6qSFUNqZxIuCeKdO2gqVe5L4Hp20GkqrktJDsHVOIA2SSQuG0+SDkj8CpYVBwI5RE+fOA+yQtu6EvV0cw/cIuDeGV4t4GaALZYLGuTFsEwZQ2TzYaGkDL4gnM0WLM9hE+INbwA0xvEw8xVXPX9DV3UvatMJAJFYTI6zCXIUcVQ4jchj1umjEYTebBB3POezAIAwK1yB0mVBJDqjg7fUqBxKUaAskg1fCLdAL0h/l/HQA1SMyitMXCzDOYSRRWYnMRuBywwJ57lYFSpiuTH3GPJO6RAcf/MERgH7myA+eekr+Wv7y8OOoMNZ+7JcRY6Tj6IHxzapaJL780Jd7NvcfuDK4Qv4SiTNnt/Ufm3XH9+sndTITPjywf/H07Pq5LWVZmf4DzOL9Bz68jLTyX2gHyj7+5ql7By+d394vf1WfWDmxpdWmk7+sS6xc9gz3Nv3Tv/w4FfqGHoHQ8eefPy7fkL85+izMJPvxqRvONC5/YurGFfOv19KNU1976eqVp596/vmUBdlampqPPXrkjjtqatji/ecXTV2boSm0azSVTzCLzn/73j7my+tbVVt3Pbl+xZyl76Q4um/FqI4yf5vHkhpH963sGHVwRWolsVOWwjc+1d3NBSBK1lB3UIuobehdasAO5jiQX74pFAoNWEl54vTNUAYCi9cFlRY8O4knBLFdB84qzdsIVpcZkCJNMIZJSu6OYHCAySSxlnGofThTh7vBjgcyWpcTKT1JiVsKI3q6yYieXhjRrcNtYNv3KY6ek8Q5OsKycE0SO4O4Js2Uy5O4XEfgD89M4pk6aT7Ybv0CePJY8A2ddC90LA7ilUncGxxYeS8RvXK52jdw70pSvLdb7ZO2p0l1zj1vfEZINXb7tbjoHCtF6KtaXH3uLLfi3CTSocL10JM4p5IWMNCz8NzZnI/eSEFPFoDOYHGRW+/D1brBaHVE7xuAqn2XfZeL0wpibADa4Is6XZ2oX7CwqDjqH/4gaIG6O3KrRSHsdoDqQYbPtxI/89eAS3li0sw4uGFrG6DYfGGgqWM6Ye5jRTw5hu8VpAkTCXufbRdIg9SdJ4inqJxYfMy4mcTBMgXcEsNtInaRkK8TwUsKEQ+GrqWNBhvE/0g9MnMuO80KISFBh4I22ii4hLAfCCuXgwRg79HiNFPPQZ4i4mSCDZl5p9ujpYHRRw2KCIHVIlQVAhkOo0Mw2Jibgp1+VCXgS1eDT1dH1XjyzDUtFrXF1zJrhHtbwM9fWibL76usPzM0v5BY3d/p+JnaEuiIRPf4yph3XzyFqqdOb/5wZKsa5Zx4+aQqElEv3Bo1tr/T+dQPLvbHDgUq5P+aOp7Z0f8hapXPsNrCSk/BbKcjq3/s5h11dDXh4WKG+rSh+I77F49dPqvGK6hV7GkX0n7DhVPfZpjdiYffPpQ6SzdPWDorVGDRZA89gEY+e0hrnThrWjbPf7/qxCupKzDJI66AuiAw+NJAgVaLWq0Zk5H8GhorD7wmW5pGj7SLLMOcym/HR2hzOidXeOafqNUUZXQnUDShiibYsNnjV5H/FR63OZhgPO5ogokmSDaUQKFoELbUFDHbWEgYeM5kJmrIQVoVr0U5iDPynE1FOm2oECE638LUl89+cFr9gmq3lqMzWCHg9Wdbi/Qsh3hVBa3K5oBjZ9J6Z31JiZvNytKUl/TZagM5mpbSfI9BwyDE8qwmI8NcADkDrVLnaUPZxg5LfhaN6CxX1bz6jrvHttoDvMXFsirr9ON5TIszVpKtdhaXFtt0qJ/Jcvta3Rp9QVYpN2Y7g1SZeu0bM3Pr2qIZPA8TzDNXhmhak8Ha3VFPOCP4RLnRhEpr64xGHWQVhRm1y3PzenI1GhtMz6HOcjmDtko+74mmRtg/+tYZTA7lo4wUzg3gghDQXYTLAlK5ws+rvnPoA4ZXFSa2O2zanJVx8A6w4n097OWefft6rhX17GN6rxWN3T23YpbJzI+f1lSGCjXyn699Q7rTg4b6r/1u5Lr5UZah/4ZidYz69LWUSH/5nTk1QWafzgAbkzgQUCbWHMA5F0mwLg5KLYSMgQ9LOlGhGv9rriQyQcaW/qqDSGUGDwlHwQDcVWElOEU5nvwZIJxpwQtvXwQ6lZ///S2j1pnMBo9t3Lx6R0XcOvWvD3M75nQ1d7RZRo2sD7SgyIrH/3PT67et7DpmFqAZI9kM3ZbJjEaH7Itqmip77+Etlrk72rWlk8rU+S0hVs/OOvP8fWNhvapb682F1XZTm6grw2seFyJJk1I0JQdMDAFS01S174TPykzNJoQDLwvg8hBen8RVQRwK4JkhvBC26O4A7rkI/AKXA+xLlB9A35nEq9LoPT2Jp+ukMVCalMRzgtJm2MOecsCzihh2CpJvPcDdKrFBnSNabd7G5rZlBNjiwilVVUZkRHsHqU0X8biYNGkMgGd46rQ7oImSTAyoIWMM3CwKUg7hgFYRd5DsaMDT3E4wdJk44B3RSErrhdP+injnjDtmz1GSI0VtCciE/CxhBZACc3wVeKwfmsChCcsQwLcjXsS7bAxRFOTIBuKfJjOhIYrKiQkCpSGgWDWsfr3BBnYKPg+SAT6Beezvpo8jNSf4POOrVzjNZeYJ+6I76v2PdD2rs1kKGVpNa1CDdXAPI6h+juz0oiMDhg6/O7+kKe7LKyjIt5gWr3H1Wejt3fvlnZvlnWj9ZrR+f/e1ou79q7wT9kzfNqLYE5j6yJTYSmfsm+79KrM5u7C62ldXMjqXYXPFisnHikvVLPIUjy/V5GotvJXm1tDvMBbVi5td8xvXtNQvnzA+4shz1tRWWcRJ8137Ds+v3t+t6hp+krzzWvf+/d3y+2Of6Z/T7ustnnjq2d4qXyulUs4rPuD+g6qgWiDnnUEdoQZUxHCakjgcwGVJ7AqQQJ0XwG0hXJDEU4HX36GE+8okrtRJHrCHdOBvgJI6Kc0Es6gkeY49hj3CgKuslWguRzyhKvZGFIbZIJzQ6POqR5OyWpSMFhIZw02COECpKwkjdZVBWZPjUQKogItjOE88KdonTJ4yXVE7AyoMBYne3R7ilpG0ppArFHWAERgVXgmZstnJkQhqDkfMJrONMw8fb4l0hAA550ZppSsGgA4NPbb5g/vaJvVWzPGMGNnp7oz828bUbzZcfuDz03p7QUdOQlj+73smvfXlk60jtPV5flNBDsu9cuFwckfRpg9fEsVNHzIZyN5HjhX65E9Qzdz9Y5pWPDRqw5Ojnd2O8tpQ9NHOtr7FbcvO9Bz9lI5UjG1DTUsf0a15nkbGTJ/oMjsc+nzrvY8/z/wEGX7E/WTnrtc5VE7OI/YRkelzGMON6/w5LkKFKSpqCtn/GUCZVMMAZbqFULDqTKRFKpfdUOVDuZfv+6nH5a2v2oVXxSd1hR9DL/4t64ujkw9VP7DRv33j8onrUfPWd7+VXz0h45fY4/QTd/Hagl/vY435dLW0aPW0sx9n+/1H/9RUa2l7ZHxO5aYpgusB+coN6uMfziVzRF/cGGI/4Z8DXhqkBmzEkqgAzg9hpOT7OQGckcQasCF7ANsuYjqIrSQpJMenAMOI8PvhEMEo7MfKOhhyuI++QCWhnpc31m0qLFTNuLMsksuhaTr5ZXk3cw6VIO30R+9u5RlGfguJ5eVeGhzyI/kXQ7XMWxSVncZJ7jygZBVVR42kJlI91HJqI/UAtY96knqFegvFyfsMKXsJAF5tkuTzuSG8iKAcbkniEQE8IYnvChBgfD2I7w/g74XwliQ+GMRbdDhMMr2OJN4bwLvAI0jNC24SwC4A1J8onhJNSolWILxRnRQCJ/EEcWcSd+qk16DyZhK/qSNOA84lvQ2+EyW+44/hkCCpCCp2ilJjM3y/JjSIfG5NfO7i3hVrN927Y8/+Q08PnCU+9KY4cPzki8RZZgqDPzz6wmkFV2sBVwdM85YSh7prAiDu2NYfv0WGdwin28asWPfqa2+8SaqrRGnlWrj3fkF6AYTgLSJ+npxED/hPniIyK0X8oxjeK+CzMewVB3Y8fIa07hIGHtxzRMkIBZKmk4BZjyBXV2CzHnHAK0PpgOohmArQbCQAbYTeOIIiDUYKJNTpJt8ms1IgRxjKAUaxQFoJiSVVtko5AHDrgUAYeTrdBZ78j/e4b2tX3S4LuHsE3B8p0YGEBD9EBJgGeZ/jFoffRJ3dfj9azWdnqsdpcw15KpHPYM7Mnv3WoV/fOXfNwdQj8/9tCVrZffauvqo9bSvPzxf0GvpCqkKj12vQxHy7vFqjF7PPZ4vkgk6+t4e+c/uLL+w4L59wZXt3JV8uK2YNWtqhNRq1qd9oDQZt8tblVisaYdCeJ+XzWjSD1WQ3LbEZGWeuvignI5fjsrNYU9it1TpmavMqTXaz2U737/pP+accV5uV/TGLMjmW3tvR8cfnkH3dy+WjO/unT+vYN/uUN+BP9VqMze9bjCUF71kMBouhF9nve/f13fIn978nf5DtfGfow9+jCy5mW4HBUGB4b/hqMhWYnlbKp7UWVZ7RZ4sFTNr8IiPDWrKjxQWOnICD1cjPkYmY0vnoeogj0/lXqQB42BjISLup/dSAhvg/8IauYLoYT+KJATwmKeWXgTuM0WED0JTwnCBUmgK4GBymJ4DZi7giiX1BXKGTqsEvEjczxSnpFHJUkGSRC4jHBLE+KS0Gp5k5BZymNYYXCLgwhvUiOUCTxkwEZkHlgv0XQ3CBjuEjJSXx8SIIIJARhZQ3HD4k+FUuLwLEgWyKd3JISL8PEdIvRABS68Fua5CNtiIH8w+dxFjTFad7faKMYXQFNR56Lb3GU5Mv0Igpq6st/w2CmFXnkVfJd3rqCvU0/Ul5LWof6SttHFNakvh1MC/v889UWqfFJJ9c0VLqbWnxlrags82dLW2dI9hH/Y3XJ7BCmSPfUlycna16qdVfHkc5vLmmvNgVDIqC/H+Yuusx5h1fTY1vKFbW0c6Gd7tLEOJznLm7r9PMO2X19WVDMV9Dg/PmIF9dLdEbMPcbv3W9lUFROspORQEb26hR1GhqDrWSuo/aCWzgDepd6r+oIcShIuRD89B2itJD9ARWReIuOZfRIn365AcCT9TtAR/TB5UABMMi0SoFAJweCMfIYE7fSV6FeDh9FOK1HpGgbAR3JaPJYJeTiUSJuJvnRH6kNymoAsIhn+WViKYn8c6D0rSdsDYUGSZvpAlmq1CEyN9Po0BRHkL3wpTLScEkyATT77dAfcDrQX/pitvOGVmDSG5WiEQ6KSAnTkAwnLSoqJ4o/l98hFkZBfQEskkPbBE51Lp5G5EIG0O2yph+BUXksMpj61AUmRRi40HFN5+BhueChSWdiWMzV0/dfqCyctnp1frND7c0GXpWFL6zcMQfGY3qzvOjG1fbXfVzZz75kY7Zi5jK8sNz5xwsW3zYe2BTophDiLOh+E7kdHFNG4rHj2/L+MnuhxePmd+/rVG8b1/DyN6XhkrsbxycslS36bwqS4UsvfwWNofOVqEtYTu90FlZ6ZTvQJ8Zo6WpHzqDQSc6Juebma1bLm3tPT+iQJdXYhfXHlz+aAa9yVYmp978sfw/H+keWLTwIS1aXdNZu3bJknW1nTVX5Se/Zf5y/cdzD/tqvaU1NaXeWs+T897+9r3+DRv379+4gaHT8qxCnreQyHssg77b5pNlRV7Og4sW7MpBjcHWwbEnPrCHp0xN7LR6pXVrtFqLT81Xt++e89g7995/bP7dU+7bKJrL9RnMBzXe0tgi1Gn1FYfM8mmIDSZ7iTVfnhwr9dawiUWnGictFcSlj5jHqA2rh95vG9esax93cv/6ezpe2cT0o85R7Mj6Fpt+3S8n7KafuqS6/taG3q4DXu+B+b4n5nesWi8/wtCqteipvX9ijZyaboxvP7zindHXdo+dXdhx966OllYh/x40gl3X/KNF3w+rkOrYWpf1OToTQRFdCzjDweYKut7kdEcqmoOpc4WofeulzZ0jC9x5Joe4amdPccE7CJLhNV13bZkr15L9Qk8te4imH1omz1Nqz578619PVr4vfz2po8Ibj3tVJ7w1Nd7UV21T5L/KZ7557ln5WVSkyCx0mXMVmUXWtMyFG0HmtkpracWTa8tHRYIuY5mQWzYjylvzxKygxeXauXLWPeU1kbJopE0TMLR64zWlX42XtzgZOlRcZEEbf1fotVqdBvkk/cvSmrg3/e6Eon4A+ekkKgT5+EbUrvxmJCeERyTxyiDOCODmJJ4dwNOSBPUtyrs1AP7xaea0SWFO6bfsdYD1fFLyNUOc4HVSJ1TT5+hLEclwpbvT54MJ8cri9Et3rw67z0ntqqt4zDnS3J0+HVzq1+Jl5yQjexUbzsGgQY/XrfcNlpDr2cRnX1cqR4XtusGO9jHQPopcB6D37+eE2BMbgE5SGhWjGjQGo3vM0mWeEm97xyj/bR/UkEW6/nePcnrYyQviiWzXjNnrCAGzCFJXD0mBRgBjw9kxnCHgdTHcLOL1MWnabGhrieEeAftgqIg704yLwF4dwUxIZOMIKlF9lOCfAKkwSVgh072VzN5GpghnKhYSXFRBJ6OgpQG+FYQiB11BItZkZrTI5eAAnDx+pmskmjKyq6bTX8zE1+Wj872PWPbRP7hTfhKpc+xlrWWz12QyBZGFDQtb5edbF65ymtEUs9Nplp83O+mappVtMZtBhVhfTYMbwpXLbOJZm17DlrX58zJoQKH5DXOZvcKUhBzssnO5TIFn5AQ0vrWrq1XFV5YUMv7D3XSLdu0LKGGyxrzBQtOCGTWPHN2mf2NkV9fI67KKJs+6Lptdrj56kmbC4gfuXFup9ZTXjZE3C8XhTN5r0pvo7MqaUgO9oDn1Zks3nccamDxrmWXYPp8B+5xCVVLTqcXU3yisDuDRSWwO4O6k8mOS8ZAPTE3iemKSOBLAs0PkNLsQ0pclinmmX9W0gflpk1irkwxARVz1YKUzknhGmqPkJ6XeYfNkrpSl7TAIdhg6J1WCHVacO1sf+Ss5o85kMQvt3DlWGs9e1eJx56iTXEVlMDRu2KROsVANjRt/uyW1BYHiqCfFlFc08dqRhJobyGE0JZlHA//P0bYR/l8/FYbpG6DTJeDaGI6IOB7D5QJ2K9YE+ncwhnSQ9YAdCP94GsYr8dpP8yyUGbMebKdYyahps6Dl0lHa7dGH0oHY6UbfMbjWbaNRf2jL8rWNuRaGyQ1Miy1sRVNaFxKbGbmArp5UbtXq44GgbJp/sGDfyr26yQ3oi+laY447sjye6GkM5wuswVFf1YzCiVynMzd1tn4e67jd1FRi++5Z8mvrHmi3NOU2fO/MQZssE/kqunXhvBZ1yJufmZNNI7TjztRbRrqqaQ6ieUHrLA1xqf8W56zr33JvjaA3OqpGo1GOCsda+ZNbluV0Kr9JuM5/xGMqj6IEGw0EEjlCwSIRYrIQpotIvkEb2cfk/kZ0Hs1XPYbog6qDsvzYUN9jsnyQuXLg2z7Zgy4dRPRjbiuKkX7STaXPLJEOctMvKIHKJb9kggSZA/TLC0gWJSPOQ+Go8gOtW7upVyOyy35miWuGi1niv3z4uu3w5c8YxKDW9uu2dnoH/eWMyakyq5X+aPKMlHj48mXVp6n76M3W4efl8+9zv4VcuB1WY4Dl0EEbTQ7EbIgkboKf4ZTzbK3Kh0qRljZSQIyiaphEJP07OHf6Z2KcwaxG9rJyne7hko5Kt1q9Z7YlUmJXZzBZRe6opXSt281oSgOjSh7mjFUlDtW0xORCxKOMwsmJQvkq4guhLn8rXyV1xMtXmRnlI/JzjFZrVmb/WkdutjFLw05htQVqsyP8QIlXYcfagoZyOTx8AxGAMkDQ7QKvyt8Oxx5Y5wVlndMgz/dRCO+ANP4ijiVxLO2ZG5PSg+CvMciNT06/Y/GyVfeRvFnxh39hU2yMOaECVqcKQNLAwUCVgeQOWkSRoyaDVgVlGiSZE5wyiNz1/7FbU5HWWuvVlHSPbXBGRjRGBIHOyDUXmPVqJjMjt6GyBLJavR6xCCFtRsG49un1ZaXNEyc2G420KkNTECvJdC2auXJCdWRKT8+U/HxVdrHd+S/vsMbuKTAhLnfyvO911q2dPj5akqlGHJ8jWp2BfCY7EJu/ckHCn5nJaJhXY0WMtrJmXm//04+umDeiIjOLyXIUugvMjEpX177l4fc+fq9v49jqLA2nAe/5v3dFrEUAeNpjYGRgYADiWxI1V+P5bb4yyHMwgMCFR/P9YfT/e/+ElI+AxTkYmEAUAGvxDTIAeNpjYGRg4GD4+4qBQfnI/3v//ysfYQCKoABjALhcB8542uNggAAOIGZaBaYlOCB8NhaoOAuSPBOQZgyFYhB7JpAohNBMYHWMvRwM//8D6Q6gHkYgfg7EH0D6Gb+AzYkAyt+DqPn/A8i/BLXPD4i3AbE3EG+VuMWwQaCGYQNEHcR+CAbzRYDmv4GKlSsfAalDBgAxBx2wAAB42mNgYOCBwiCGHIYGPHAVwzmGT4wSjGaMIYxZjEVMMUwLmC4wczE7MLewSLF0sIqwNrBd4SjhFOGM47zG9YP7HI8CTxafDN8PQTWhMuEu4R3CH0RSRA0ALtMaGgABAAAAOAGFABUAAAAAAAIAAQACABYAAAEAAcgAAAAAeNpdjk9OwkAUh79aMFEMYWUIq7lATan/0AMQQsIGE90qCZAmWLXSDUdgxRE4hWdQOYEX8ACegF/x0RAW8+ab37z53gAV5vh4pSM8jsH4gKpO/+zToW5cosGjcZlTZsaH1FgYfypfGn8R8mH8Lfuv8YqTLf/4cv7J9MIrMc/0GTImY8ITKW3lCdPNniof4og4k9dxqzWy+3OaWi1Lm9wQqAbqDbVf7vjd3oR7nVLedZeb8re5fd/7oK5BkW67evamK1Nic53yK/3igmvVSNUVv5iqL9O0TPPaheuONyWx8lRTJmsvSDabAHjafZHHTsRAEET3meAl55yWnGGCx+s9IpB/BZAQ4sKBv2eRu+aIJeu1e6qma8a9ovf/04xfegUFE0wyxTQlfWaYZY55FlhkiWVWWGWNdTbYZIttdthlj30OOOSIAceccMoZ51xwyRXX3HDLHfc88IjDE4hUJOry+/PdOffSf/34+XobxFRaoUb1pwhjidEbgzEapUvG2jg0NsaR8aljaDum1gYGTQ6ViqSitnBeDW+NLkxqn+27yQIdw9nKyBreqQi2Uhl1Axo2lFDWkK2K6hXVK6qvJZY95Ex5n6BwOaVcUa4ol88x1In5F4Vfd+SK37gB/4WwAY0AS7AIUFixAQGOWbFGBitYIbAQWUuwFFJYIbCAWR2wBitcWFmwFCsAAAABVLzuzwAA'},y=b.__$$__meshim_widget_widgets_FontLoader
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
y.call(this,A,B,C,D,E)
this.setBase64(x)
this.setFont('zopim')}
z.prototype=e(y.prototype)
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_fontLoader_ZopimFont"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_fontLoader_ZopimFont"}
return z})()
b.__$$__meshim_widget_utils_BindClass=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y={}
function z(){var E=x.root,F=E.$('livechat').$('ui').$('mobile$bool'),G=E.$('livechat').$('ui').$('popout$bool'),H=E.$('livechat').$('ui').$('mockup$bool'),I=E.$('livechat').$('ui').$('tablet$bool')
y.popout=C(G)
y.mockup=C(H)
y.tablet=C(I)
y.mobile=function(J){var K=F.getValue()
if(K){J.addClass('mobile')
J.removeClass('desktop')}
else{J.addClass('desktop')
J.removeClass('mobile')}}
y.rtl=function(J){if(v&&v.onLanguage){v.onLanguage(L)
L()
J.onDestruction(K)}
else{J.addClass('ltr')}
function K(){v.unLanguage(L)}
function L(){if(v.rtl()){J.addClass('rtl')
J.removeClass('ltr')}
else{J.addClass('ltr')
J.removeClass('rtl')}}}
y.windowPosition=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('position$string'))
y.windowPositionMobile=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('position_mobile$string'))
y.windowSize=A(E.$('livechat').$('settings').$('theme').$('chat_window').$('size$string'))
y.buttonPosition=A(E.$('livechat').$('settings').$('theme').$('chat_button').$('position$string'))}
x.on('init',z)
function A(E,F){F=F||''
return function(G,H,I){H=H||''
G.autobind(E,'value',B(G,F+H,I))}}
function B(E,F,G){var H
return function I(J){if(H==J)return
if(H)E.removeClass(F+H)
H=J
if(H)E.addClass(F+H)
if(typeof G=='function')G(H)}}
function C(E,F){F=F||E.name.split('$')[0]
return function(G,H){G.autobind(E,'value',D(G,F,H))}}
function D(E,F,G){return function H(I){E[I?'addClass':'removeClass'](F)
if(typeof G=='function')G(I)}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_BindClass"].join('')
y.prototype.__jx__fqname="meshim_widget_utils_BindClass"}
return y})()
b.__$$__meshim_widget_widgets_ConnAwareForm=(function(){var x=b.__$$__jx_ui_Form,y=b.__$$__meshim_widget_controllers_DataController
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
x.call(this,A,B,C,D,E)
var F=this
this.$connection_message=y.root.$('connection').$('message$string')
this.connected_submits=[]
this.on('submit',function(G){F.handleSubmit(G)})
this.onDestruction(function(){F.connected_submits=null})}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=x
z.prototype.onConnectedAndSubmit=function(A){this.connected_submits.push(A)}
z.prototype.handleSubmit=function(A){var B=!!this.$connection_message.getValue()
if(B){A.preventDefault()
return}
for(var C=0;C<this.connected_submits.length;C++){this.connected_submits[C](A)}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ConnAwareForm"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_ConnAwareForm"}
return z})()
b.__$$__meshim_widget_widgets_gravatar_GravatarImage=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_img,"img",null,[],{"id":"img","class":"img"}],[b.__$$__meshim_widget_widgets_IconFont,"auth_type",null,[],{"id":"auth_type","addClass":"auth_type"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__img'),H=w.get(z+'__auth_type')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_Config,L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Utils,N=L.root.$('livechat').$('settings').$('theme').$('name$string'),O=L.root.$('livechat').$('settings').$('concierge').$('avatar_path$string'),P=L.root.$('livechat').$('settings').$('theme').$('avatars$string'),Q='',R='',S='',T='',U='',V='',W,X,Y,Z
F.setDataNode=$_
function $$(){F.autobind(N,'value',function($f){if(Y&&$f!=Y){$b()}})}
function $_($f){$a()
if(W){F.autounbind(W,'value',$b)}
W=$f
Z=!1
if(W){F.autobind(W,'value',$b)}}
function $a(){Q=R=S=T=''}
function $b(){if(!W)return
if(Z)return
switch(W.name){case 'profile':X='visitor'
break
case 'concierge':X='concierge'
break
default:X='agent'}
var $f=W.getValue()
if(!$f){H.setDisplay('none')
S=K.AVATARS.AGENT
$d()
return}
if($f['nick$string'])U=$f['nick$string']
if($f['display_name$string']&&!M.isDefaultName($f['display_name$string']))$c($f['display_name$string'])
if($f['email$string']){R=$f['email$string']}
if($f['auth']&&$f['auth']['avatar$string']){S=$f['auth']['avatar$string']}
else if($f['avatar_data$string']){S=$f['avatar_data$string']}
else if($f['avatar_path$string']){S=$f['avatar_path$string']
if(X=='agent')Z=!0}
else{S=''}
if(X=='agent'&&!S){S=O.getValue()}
if($f['auth']&&('type$string' in $f['auth'])){if(V)H.removeClass(V)
V=$f['auth']['type$string']||''
if(V)H.addClass(V)
H.setIcon(V)}
H.setDisplay(V?'':'none')
$d()}
function $c($f){if($f&&$f!=Q){F.setTitle($f)
Q=$f}}
function $d(){var $f=S||$e()
if($f&&$f!=T){G.setSrc(M.replaceFileHostname($f))
T=$f}}
function $e(){var $f=N.getValue(),$g=P.getValue()||{}
Y=$f
var $h
switch(X){case 'visitor':$h=$g.visitor$string||K.AVATARS.VISITOR
break
case 'concierge':$h=$g.concierge$string||K.AVATARS.CONCIERGE
break
case 'agent':$h=O.getValue()||$g.agent$string||K.AVATARS.AGENT
break}
return $h||K.AVATARS.DEFAULT}
$$()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarImage
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".img":{"width, height":"100%"},".auth_type":{"position":"absolute","bottom, left":0,"background":"#FFF","fontSize, width, height":"12px","line-height":"16px","overflow":"hidden","borderRadius":"2px","&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarImage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarImage"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_span,null,null,[[b.__$$__jx_ui_html_span,null,null,[],{"class":"default_value","container":"default_value"}],[b.__$$__jx_ui_html_span,null,null,[],{"class":"selected_value","container":"selected_value"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Utils,J=b.__$$__meshim_widget_controllers_DataController
I.hoverFix(F)
function K(){var L=J.root.$('livechat').$('ui').$('mobile$bool')
F.autobind(L,'value',function(M){if(!M)F.addClass('desktop')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_span.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_span
x.__jx__jcss={"**self":{"width":"50%","display":"inline-block",".default_value":{"display":"inline"},".selected_value":{"display":"none"},"&.desktop.hover, &.desktop:hover, &.active":{".default_value":{"display":"none"},".selected_value":{"display":"inline"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_emoticon_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_emoticon_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand_extended"}]],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('settings').$('branding').$('hide_branding$bool')
function K(){F.autobind(J,'value',function(L){F.setVisibility(L?'hidden':'')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"display":"inline-block","lineHeight":1.3,"letterSpacing":"1px","fontSize":"11px","&:focus":{"outline":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_Branding"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_Branding"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_Option=(function(){var x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='option')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.getLabel=function(){return this.dom.label}
y.prototype.setLabel=function(z){this.dom.label=z
return this}
y.prototype.getSelected=function(){return this.dom.defaultSelected}
y.prototype.setSelected=function(z){this.dom.defaultSelected=n(z)
return this}
y.prototype.getPlaceholder=function(){return this.placeholder}
y.prototype.setPlaceholder=function(z){this.placeholder=z
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_Option"].join('')
y.prototype.__jx__fqname="jx_ui_Option"}
return y})()
b.__$$__meshim_widget_widgets_menu_IconFont=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass,J={'true':'tick','false':'cross'},K=F.setIcon
F.setIcon=function(M,N){if(!N)M=n(M).toString()
return K.call(F,J[M]||M)}
function L(){I.rtl(F)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_IconFont
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"**self":{"float":"right","lineHeight":1,"position":"relative","top":"3px","verticalAlign":"middle","&.rtl":{"float":"left"}},"&.left":{"float":"left","&.rtl":{"float":"right"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_IconFont"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_IconFont"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Bottom=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"bottom"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.windowSize(F,'bottom_')}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Bottom
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"width":"100%","textAlign":"center","*overflow":"hidden","paddingTop":"$$margin","paddingBottom":0,"height":"$$bottomHeight","borderWidth":"$$bottomBorderWidth","borderStyle":"$$bottomBorderStyle","borderColor":"$$bottomBorderColor","&.bottom_padding_bottom":{"paddingBottom":"$$margin","height":"$$bottomHeightBottomPadding"},"&.bottom_small":{"paddingLeft, paddingRight":"10px"},"&.bottom_medium":{"paddingLeft, paddingRight":"20px"},"&.bottom_large":{"paddingLeft, paddingRight":"50px"}},"&.note":{"height":"auto","fontSize":"$$fontSizeXS","padding":"$$margin","borderWidth":"$$bottomNoteBorderWidth","borderStyle":"$$bottomNoteBorderStyle","borderColor":"$$bottomNoteBorderColor"},"&.padding_bottom":{"height":"$$bottomHeightBottomPadding"},"&.mobile":{"position":"relative","padding":"$$margin","height":"auto"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Bottom"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Bottom"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Concierge=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(D){A=D
B=x.root
z.setAvatar=A.generateLimitedFunction('concierge.setAvatar',1,function(G){G=G||''
if(!i(G)){window.console&&window.console.log('Zopim: concierge.setAvatar() expects passed argument to be a string')
return}
C({avatar_path$string:G})
y.savePopoutAPICalls('concierge.setAvatar',[G])})
function E(G){G=G||''
if(!i(G)){window.console&&window.console.log('Zopim: concierge.setName() expects passed argument to be a string')
return}
C({display_name$string:G})
y.savePopoutAPICalls('concierge.setName',[G])}
z.setName=E
function F(G){G=G||''
if(!i(G)){window.console&&window.console.log('Zopim: concierge.setTitle() expects passed argument to be a string')
return}
C({title$string:G})
y.savePopoutAPICalls('concierge.setTitle',[G])}
z.setTitle=F}
function C(D){function E(){y.saveAPISettings({concierge:D})
B.$('livechat').$('settings').$('concierge').update(D)}
y.callOnFastInit(E,!0)
y.callOnRegistered(E,!0)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Concierge"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Concierge"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_CookieLaw,z={},A
z.init=function(){A=x.root}
function B(){y.enableCookieLaw()}
z.comply=B
function C(){y.setDefaultImplicitConsent()}
z.setDefaultImplicitConsent=C
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_CookieLawAPI"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_CookieLawAPI"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_Departments=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B,C,D,E,F
z.init=function(){A=x.root
B=A.$('livechat').$('departments')
C=A.$('livechat').$('profile').$('department_id$int')
D=A.$('livechat').$('ui').$('departments').$('filter_enabled$bool')}
var G
function H(){if(!arguments.length){D.update(!1)
B.unbindValue(J)
G=!1
return}
E=Array.prototype.slice.call(arguments)
if(G){J()
return}
D.update(!0)
B.bindValue(J)
G=!0}
function I(S){var T={},U=B.getValue(),V
if(!U)return T
for(var W=S.length;W--;){V=S[W]
if(typeof V!='number')V=Q(V)
if(!U[V])continue
T[V]=!0}
return T}
function J(){if(F)return
if(!E)return
var S={},T=B.getValue(),U=I(E)
if(!T)return
for(var V in T)if(T.hasOwnProperty(V)){S[V]={display$bool:V in U}}
F=!0
B.update(S)
F=!1}
z.filter=H
function K(S){function T(){L(S)}
y.callOnFastInit(T)
y.callOnRegistered(T)}
function L(S){if(typeof S!='number')S=Q(S)
if(!S)return
C.parentNode.write({department_id$int:S})}
z.setVisitorDepartment=K
function M(){y.callOnFastInit(N)
y.callOnRegistered(N)}
function N(){C.parentNode.write({department_id$int:null})}
z.clearVisitorDepartment=M
function O(S){if(typeof S!='number')S=Q(S)
if(!S)return
var T=B.$(S).getValue()
if(!T)return
return {id:S,name:T.name$string,status:T.status$string}}
z.getDepartment=O
function P(){var S=B.getValue(),T=[]
for(var U in S)if(S.hasOwnProperty(U)){T.push({id:parseInt(U,10),name:S[U].name$string,status:S[U].status$string})}
return T}
z.getAllDepartments=P
function Q(S){S=S&&S.toString()
if(!S)return
var T=B.getValue()
for(var U in T)if(T.hasOwnProperty(U)){if(T[U].name$string==S){return parseInt(U,10)}}}
function R(S){if(!S||typeof S!='string')return
function T(){y.saveAPISettings({forms:{pre_chat_form:{form:{2:{label$string:S}}}}})
A.$('livechat').$('settings').$('forms').$('pre_chat_form').$('form').$('2').update({label$string:S})}
y.callOnFastInit(T,!0)
y.callOnRegistered(T,!0)}
z.setLabel=R
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Departments"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Departments"}
return z})()
b.__$$__meshim_widget_widgets_ScrollableFrame=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"inner",null,[[b.__$$__jx_ui_Widget,"inside",null,[],{"id":"inside","addClass":"scrollable_inside","container":"default"}]],{"id":"inner","addClass":"scrollable_inner"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_top"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_bottom"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__inner'),H=w.get(z+'__inside')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=H
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_BindClass,M=K.root.$('livechat').$('ui').$('theme_loaded$bool'),N=K.root.$$('livechat.ui.mobile$bool'),O
G.on('scroll',P)
function P(){if(O)window.clearTimeout(O)
O=window.setTimeout(Q,10)}
function Q(){if(O)window.clearTimeout(O)
O=null
if(!F.dom)return
F[(R()?'addClass':'removeClass')]('scroll_top')
F[(S()?'addClass':'removeClass')]('scroll_bottom')
F[(T()?'addClass':'removeClass')]('scrollable')}
function R(){return !G.getScrollTop()}
function S(){return G.getScrollTop()+G.getHeight()>=G.getScrollHeight()}
function T(){return G.getScrollHeight()>G.getHeight()}
function U(){F.autobind(M,'value',P)
P()
L.mobile(F)
L.popout(F)
L.windowSize(F,'sf_')
if(N.getValue()){F.addClass('mobile')}
if(v&&v.onLanguage){v.onLanguage(V)
V()
F.onDestruction(W)}
function V(){H.style.direction=v.rtl()?'rtl':'ltr'}
function W(){v.unLanguage(V)}}
F.updateScrollStyles=P
F.getScrollHeight=function(){return G.getScrollHeight()}
F.getScrollTop=function(){return G.getScrollTop()}
F.getHeight=function(){return G.getHeight()}
F.setScrollTop=function(V){return G.setScrollTop(V)}
U()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ScrollableFrame
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self, .scrollable_inner":{"position":"relative","width, height":"100%"},".scrollable_inner":{"overflowX":"hidden","overflowY":"auto","paddingBottom":"0 !important","direction":"ltr"},".scrollable_fixed_top, .scrollable_fixed_bottom":{"position":"absolute","left, right":0,"pointerEvents":"none"},".scrollable_fixed_top":{"top":0,"height":"$$scrollableFrameTopHeight","background":"$$scrollableFrameTopBackground","backgroundColor":"$$scrollableFrameTopBackgroundColor"},".scrollable_fixed_bottom":{"bottom":0,"height":"$$scrollableFrameBottomHeight","background":"$$scrollableFrameBottomBackground","backgroundColor":"$$scrollableFrameBottomBackgroundColor"},"&.scroll_top .scrollable_fixed_top":{"display":"none"},"&.scroll_bottom .scrollable_fixed_bottom":{"display":"none"},"&.scroll .scrollable_inner":{},"&.sf_small":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"&.sf_medium":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"&.sf_large":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}},"&.popout":{"@media only screen and (max-width: 300px)":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"@media only screen and (min-width: 300px) and (max-width: 500px)":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"@media only screen and (min-width: 500px)":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}}},"&.mobile":{"borderBottom":"none"},"&.popout.mobile":{".scrollable_inner":{"padding":"10px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ScrollableFrame"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ScrollableFrame"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Theme=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(C){A=C
B=x.root
z.setTheme=A.generateLimitedFunction('theme.setTheme',2,function(G){function H(){y.saveAPISettings({theme:{name$string:G.toString()}})
B.$('livechat').$('settings').$('theme').update({name$string:G.toString()})}
y.savePopoutAPICalls('theme.setTheme',[G.toString()])
y.callOnFastInit(H,!0)
y.callOnRegistered(H,!0)})
function D(G,H){if(!G||!y.isHexColor(G))throw 'Invalid color. Must be in hexadecimal format ("#AABBCC")'
H=H||''
var I={}
I[H]=G
z.setColors(I)}
z.setColor=D
function E(G){if(!G||typeof G!='object')throw 'Must pass an object containing the desired colors in hexadecimal format (#AABBCC)'
function H(){var I,J={}
for(var K in G)if(G.hasOwnProperty(K)){I=K||'primary'
if(!x.livechat.getLimit()&&I!='primary'){continue}
if(I=='badge'){I='banner'}
I=I+'$string'
if(G[K]&&i(G[K])&&y.isHexColor(G[K])){J[I]=G[K]}}
y.saveAPISettings({theme:{colors:J}})
B.$('livechat').$('settings').$('theme').update({colors:J})}
y.savePopoutAPICalls('theme.setColors',[G])
y.callOnFastInit(H,!0)
y.callOnRegistered(H,!0)}
z.setColors=A.generateLimitedFunction('theme.setColors',1,E)
function F(){function G(){y.savePopoutAPICalls('theme.reload',[])
B.$('livechat').$('ui').update({theme_reload$bool:!0})}
y.callOnFastInit(G)
y.callOnRegistered(G)}
z.reload=F}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Theme"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Theme"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_PreChatForm=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A
z.init=function(){A=x.root}
function B(C){if(!i(C)){window.console&&window.console.log('Zopim: prechatForm.setGreetings() expects passed argument to be a string')
return}
function D(){y.saveAPISettings({forms:{pre_chat_form:{message$string:C}}})
A.$('livechat').$('settings').$('forms').$('pre_chat_form').update({message$string:C})}
y.callOnFastInit(D,!0)
y.callOnRegistered(D,!0)}
z.setGreetings=B
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_PreChatForm"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_PreChatForm"}
return z})()
b.__$$__meshim_widget_widgets_input_InvalidIcon=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"warning_sign"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.rtl(F)})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_input_InvalidIcon
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
x.__jx__jcss={"**self":{"position":"absolute","top":"12px","right":"10px","color":"red","fontSize":"$$fontSizeXL"},"&.rtl":{"right":"auto","left":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_input_InvalidIcon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_input_InvalidIcon"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_OfflineForm=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A
z.init=function(){A=x.root}
function B(C){if(!i(C)){window.console&&window.console.log('Zopim: offlineForm.setGreetings() expects passed argument to be a string')
return}
function D(){y.saveAPISettings({forms:{offline_form:{message$string:C}}})
A.$('livechat').$('settings').$('forms').$('offline_form').update({message$string:C})}
y.callOnFastInit(D,!0)
y.callOnRegistered(D,!0)}
z.setGreetings=B
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_OfflineForm"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_OfflineForm"}
return z})()
b.__$$__meshim_widget_widgets_Menu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.tablet(F)
I.rtl(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Menu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","minWidth":"180px","maxWidth":"360px","zIndex":"100","bottom":"$$actionBarHeight","marginBottom":"-2px","left, right":"10px","color":"$$menuColor","background":"$$menuBg","borderWidth":"$$menuBorderWidth","borderStyle":"$$menuBorderStyle","borderColor":"$$menuBorderColor","borderRadius":"$$menuRadius","boxShadow":"$$menuShadow"},"&.rtl":{"left, right":"10px"},"&.mobile":{"left":"0","top":"$$titleBarHeight","bottom":"auto","width":"100%","maxWidth":"$$mobileMaxWidthS","&.tablet":{"maxWidth":"$$mobileMaxWidth"}},"&.mobile.rtl":{"right":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Menu"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Menu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_menu_Section=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Section
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"padding":"5px 0","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor","*borderTop":"none","*zoom":1,"*position":"relative"},"&:first-child":{"borderTop":"none"},"&.flow":{"padding":"0","margin":"10px"},"&.mobile":{"padding":"0","borderTop":"none"},"&.border_top":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Section"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Section"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_emoticon_Bad=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sad","addClass":"rating_icon"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sadder","addClass":"rating_icon"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Bad
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_emoticon_Bad"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_emoticon_Bad"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_emoticon_Good=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happy","addClass":"rating_icon"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happier","addClass":"rating_icon"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Good
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Button
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_emoticon_Good"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_emoticon_Good"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_PrettySelect=(function(){var x=b.__$$__jx_ui_Select,y=b.__$$__jx_ui_Widget
function z(B,C,D,E,F){if(!(this instanceof z))return new z(B,C,D,E,F)
if(!F)F={}
F.tagName=null
F.position='relative'
if(q.bugs.noBoxSizing){x.call(this,B,C,D,E,F)
this.addClass('select_ie6')
return}
this.container=new y(B,null,null,null,F)
this.container.addClass('select_container')
this.container.removeAttribute('tabindex')
var G=this
this.container.destroy=function(){G.destroy()}
this.container.empty=function(){G.empty()}
this.button=new y(this.container,null,null,null,{})
this.button.addClass('select_button')
this.placeholder=new y(this.container,null,null,null,{})
this.placeholder.addClass('select_placeholder')
F.tagName='select'
F.opacity='0'
F.position='absolute'
F.width='100%'
F.height='100%'
F.top='0'
F.left='0'
F.margin=F.marginLeft=F.marginRight=F.marginTop=F.marginBottom='0'
if(q.engineIE<9)F.filter='alpha(opacity=0)'
x.call(this,this.container,C,D,E,F)
if(q.isIE)l(function(){G.dom&&G.updatePlaceholder()})
else this.updatePlaceholder()
this.on('change',function(){this.updatePlaceholder()})
this.on('keyup',function(){this.updatePlaceholder()})
this.on('focus',function(){this.container.addClass('focus')})
this.on('blur',function(){this.container.removeClass('focus')})
this._updatePlaceholder=function(){G.updatePlaceholder()}
v&&v.onLanguage&&v.onLanguage(this._updatePlaceholder)}
z.prototype=e(x.prototype)
z.prototype.appendChild=function(B){var C=!this.getOptions().length
x.prototype.appendChild.call(this,B)
if(C&&this.getOptions().length){this.setSelectedIndex(0)
var D=this
l(function(){D.dom&&D.updatePlaceholder()})}}
z.prototype.getPrefix=function(){return this.prefix}
z.prototype.setPrefix=function(B){this.prefix=B
return this}
var A=' '
z.prototype.getPrefixSeparator=function(){return this.prefixSeparator}
z.prototype.setPrefixSeparator=function(B){this.prefixSeparator=B
return this}
z.prototype.updatePlaceholder=function(){if(!this.container||!this.dom)return this
var B=this.getSelectedIndex()
if(B<0&&this.prompt){this.placeholder.setText(this.prompt)
return this}
var C=this.getOptions()[B],D=''
if(this.prefix){D+=this.prefix+((this.prefixSeparator||this.prefixSeparator==='')?this.prefixSeparator:A)}
if(C){D+=(typeof C.getPlaceholder=='function'&&C.getPlaceholder())||(typeof C.getLabel=='function'&&C.getLabel())||C.getText()}
this.placeholder.setText(D)
return this}
z.prototype.getPrompt=function(){return this.prompt}
z.prototype.setPrompt=function(B){this.prompt=B
this.setSelectedIndex(-1)
return this}
z.prototype.setValue=function(B){x.prototype.setValue.call(this,B)
this.updatePlaceholder()
return this}
z.prototype.setSelectedIndex=function(B){x.prototype.setSelectedIndex.call(this,B)
this.updatePlaceholder()
return this}
z.prototype.show=function(){this.container?this.container.show():x.prototype.show.call(this)}
z.prototype.hide=function(){this.container?this.container.hide():x.prototype.hide.call(this)}
z.prototype.setDisabled=function(B){this.container&&(n(B)?this.container.addClass('disabled'):this.container.removeClass('disabled'))
return x.prototype.setDisabled.call(this,B)}
z.prototype.createLabel=function(B){this.container&&(this.parentNode=this.container.parentNode)
x.prototype.createLabel.call(this,B)
this.container&&(this.parentNode=this.container)}
z.prototype.createErrorMessage=function(B){this.container&&(this.parentNode=this.container.parentNode)
x.prototype.createErrorMessage.call(this,B)
this.container&&(this.parentNode=this.container)}
z.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._updatePlaceholder)
x.prototype.destroy.call(this)
if(this.container){x.prototype.empty.call(this.container)
this.container.empty=null
x.prototype.destroy.call(this.container)
this.container=this.button=this.placeholder=null}}
z.prototype.empty=function(){x.prototype.empty.call(this)
this.updatePlaceholder()}
z.prototype.reset=function(){if(!this.container)return x.prototype.reset.call(this)
var B=this.getOptions()
for(var C=0,D=B.length;C<D;C++){if(B[C].getSelected()){this.setSelectedIndex(C)
this.updatePlaceholder()
return this}}
this.setSelectedIndex(-1)
this.updatePlaceholder()
return this}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_PrettySelect"].join('')
z.prototype.__jx__fqname="jx_ui_PrettySelect"}
return z})()
b.__$$__jx_ui_RadioButton=(function(){var x=b.__$$__jx_ui_CheckBox,y=b.__$$__jx_ui_HTMLElement
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='input')
E.type||(E.type='radio')
x.call(this,A,B,C,D,E)
if(q.bugs.noBoxSizing){this.parentNode.removeChild(A instanceof y?this:this.dom)
this.dom=A.doc.createElement('<'+E.tagName+' type="'+E.type+'" name="'+(E.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
this.parentNode.appendChild(A instanceof y?this:this.dom)
this.setStyle(C)
this.setAttributes(E)
this.addClass(this.__jx__fqname)}}
z.prototype=e(x.prototype)
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_RadioButton"].join('')
z.prototype.__jx__fqname="jx_ui_RadioButton"}
return z})()
b.__$$__meshim_widget_widgets_branding_Link=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_a,null,null,[],{"target":"_blank"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_BindClass,K=I.root.$('livechat'),L=K.$('ui').$('mobile$bool')
function M(){J.mobile(F)
if(L.getValue()){F.on('click',function(N){N.preventDefault()
window.open(F.getAttribute('href'))})}}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Link
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_a.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_a
x.__jx__jcss={"**self":{"color":"inherit","textDecoration":"inherit"},"&.mobile":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Link"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Link"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarOne=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image",null,[],{"id":"image","addClass":"avatar"}]],{"class":"gravatarOne"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){F.setImages=J
F.setNodes=K
function J(L){if(!(L instanceof Array))return
G.setSrc(L[0])}
function K(L){if(!(L instanceof Array))return
G.setDataNode(L[0])}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarOne
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%",".avatar":{"width":"100%","height":"100%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarOne"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarOne"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatButton_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Favicon,null,null,[],{"addClass":"favicon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"status_text_wrapper",null,[[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text"}],[b.__$$__jx_ui_Label,null,null,[],{"text":" - "}]],{"addClass":"status","id":"status_text_wrapper"}],[b.__$$__jx_ui_Label,"greeting",null,[],{"id":"greeting","addClass":"greeting"}]],{"addClass":"blinds blinds_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"unread",null,[],{"id":"unread","addClass":"unread","text":"XX new messages"}]],{"addClass":"blinds blinds_bottom"}]],{"addClass":"button_text"}],[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}]],{"visibility":"hidden"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__status_text_wrapper'),H=w.get(z+'__status_text'),I=w.get(z+'__greeting'),J=w.get(z+'__unread')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_utils_BindClass,O=b.__$$__meshim_widget_utils_Strings,P=b.__$$__meshim_widget_utils_BrowserQuirks,Q=M.root.$('livechat'),R=Q.$('ui'),S=R.$('chat_button'),T=S.$('display$bool'),U,V=S.$('unread_count$int'),W=0,X=Q.$('account').$('status$string'),Y,Z=Q.$('settings').$('theme').$('chat_button').$('display_status$bool'),$$=-1,$_=Q.$('settings').$('greetings'),$a=$_.$('online$string'),$b,$c=$_.$('offline$string'),$d,$e=Q.$('settings').$('cookie_law').$('enabled$bool'),$f,$g=Q.$('profile').$('allow_cookies$bool'),$h,$i=S.$('button_width$int'),$j=S.$('button_height$int'),$k=R.$('theme_loaded$bool'),$l=R.$('mobile$bool').getValue(),$m,$n
function $o(){N.rtl(F)
N.mobile(F)
if($l){J.setText('')}
F.autobind(T,'value',function($v){if(U===$v)return
U=$v
$u()})
F.autobind(V,'value',function($v){if(W===$v)return
W=$v
$u($s)})
F.autobind($a,'value',function($v){$b=$v
$u($r)})
F.autobind($c,'value',function($v){$d=$v
$u($r)})
F.autobind($g,'value',function($v){$h=$v
$u($r)})
F.autobind($e,'value',function($v){$f=$v
$u($r)})
function $r(){var $v
if($f&&(typeof $h!='undefined')&&!$h){$v=O.cookie_law[$l?'disabled_mobile':'disabled']}
else if($l){$v=Y=='offline'?O.chat_button.mobile_greeting.offline:O.chat_button.mobile_greeting.online}
else{$v=Y=='offline'?O.get($c):O.get($a)}
if($m==$v)return
$m=$v
I.setText($v)}
function $s(){if(W){F.addClass('unread')
if($l){J.setText(O.chat_button.unread_mobile.replace('<number>',W))}
else{J.setText(O.chat_button[W==1?'unread_one':'unread_many'].replace('<number>',W))}}
else{F.removeClass('unread')}}
F.autobind($k,'value',$p)
if(v&&v.onLanguage){v.onLanguage($t)
F.onDestruction(function(){v.unLanguage($t)})}
function $t(){$u($s,$r)}
function $u(){for(var $v=0,$w=arguments.length;$v<$w;$v++){if(h(arguments[$v])){arguments[$v]()}}
$p()}
F.autobind(Z,'value',function($v){if($$===$v)return
$$=$v
G.setDisplay($v?'':'none')
$u()})
F.autobind(X,'value',function($v){if(Y===$v)return
Y=$v
H.setText(O.status[Y||'offline'])
$u($r)})
l(P.ieQuirksModeFix)}
function $p(){l($q,F,!0)}
function $q(){$i.update(parseInt(F.getWidth(),10)||u.getVariable('chatButtonMinWidth'))
$j.update(parseInt(u.getVariable('chatButtonHeight'),10))
if(!$n&&$m){F.setVisibility('')
$n=!0}}
$o()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"margin":"0 auto","position":"absolute","bottom, left":0,"overflow":"hidden","minWidth, *width":"$$chatButtonMinWidth","maxWidth":"$$chatButtonMaxWidth","height":"$$chatButtonHeight","color":"$$chatButtonColor","background":"$$chatButtonBg","boxShadow":"$$chatButtonShadow","paddingLeft":"$$faviconWidth"},"&.mobile":{"position":"relative","bottom, left":"auto","minWidth":0},"&.rtl":{"paddingLeft":0,"paddingRight":"$$faviconWidth"},".border_overlay":{"borderWidth":"$$chatButtonBorderWidth","borderStyle":"$$chatButtonBorderStyle","borderColor":"$$chatButtonBorderColor"},"**self, **self *":{"cursor":"pointer"},"&.unread":{".button_text":{"bottom":"100%"}},".blinds":{"width, height":"100%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},"&.mobile .blinds":{"textOverflow":"clip"},".favicon":{"position":"absolute","height":"100%","left":0,"verticalAlign":"text-top","textAlign":"center","paddingTop":"8px","width":"$$faviconWidth","background":"$$faviconBg","color":"$$faviconColor"},"&.rtl .favicon":{"left":"auto","right":0},".button_text":{"position":"relative","overflow":"hidden","textOverflow":"ellipsis","verticalAlign":"text-top","whiteSpace":"nowrap","width":"100%","transition":"bottom 0.3s ease-in-out","fontWeight":"$$chatButtonFontWeight","lineHeight":"$$chatButtonHeight","paddingLeft":"$$chatButtonPaddingFavicon","paddingRight":"$$chatButtonPadding",".status":{"fontWeight":"$$chatButtonStatusFontWeight"},".unread":{}},"&.mobile .button_text":{"textOverflow":"clip"},"&.rtl .button_text":{"paddingLeft":"$$chatButtonPadding","paddingRight":"$$chatButtonPaddingFavicon"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J=I.pre_chat_offline_form.operating_hours.period,K,L
function M(){F.setStart=N
F.setEnd=O
if(v&&v.onLanguage){v.onLanguage(P)
F.onDestruction(function(){v.unLanguage(P)})}}
function N(Q){K=Q
P()}
function O(Q){L=Q
P()}
function P(){var Q=J.replace('<start_time>',K||'').replace('<end_time>',L||'')
F.setText(Q)}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"$$defaultplacement$$",null,[],{"class":"arrow_content","container":"default","position":"relative","id":"$$defaultplacement$$"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_border"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_background"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){F.setArrowPointing=function(L){F.removeClass('left').removeClass('right')
F.addClass(L)}
J.rtl(F)}
K()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","border":"1px solid #000000","background":"#ffffff",".arrow":{"position":"absolute","border":"0px solid transparent","height":0,"width":0,"fontSize":0,"lineHeight":0,"pointerEvents":"none"},".arrow_border":{"borderWidth":"8px","marginTop":"8px"},".arrow_background":{"borderWidth":"7px","marginTop":"9px"},"&.ltr.left, &.rtl.right":{".arrow":{"right":"100%","top":0,"borderLeftColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}},"&.rtl.left, &.ltr.right":{".arrow":{"left":"100%","top":0,"borderRightColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ArrowBubble"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ArrowBubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarTwo=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarTwo"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image2'),H=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){F.setImages=K
F.setNodes=L
function K(M){if(!(M instanceof Array))return
H.setSrc(M[0])
G.setSrc(M[1])}
function L(M){if(!(M instanceof Array))return
H.setDataNode(M[0])
G.setDataNode(M[1])}})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar":{"width":"100%","height":"100%"},".avatar1":{"position":"absolute","top":"0","left":"-33%","borderTop":"0px none","borderLeft":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","left":"33%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarTwo"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarTwo"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Controls=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Controls
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"marginTop":"10px"},"&.mobile":{"textAlign":"center"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Controls"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Controls"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarThree=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarThree"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image3'),H=w.get(z+'__image2'),I=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){F.setImages=L
F.setNodes=M
function L(N){if(!(N instanceof Array))return
I.setSrc(N[0])
H.setSrc(N[1])
G.setSrc(N[2])}
function M(N){if(!(N instanceof Array))return
I.setDataNode(N[0])
H.setDataNode(N[1])
G.setDataNode(N[2])}})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarThree
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar1":{"position":"absolute","top":"0","left":"-33%","width":"100%","height":"100%","borderLeft":"0px none","borderTop":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","right":"-8%","width":"50%","height":"50%","borderLeft":"0px none","borderTop":"0px none","borderRight":"0px none"},".avatar3":{"position":"absolute","bottom":"0","right":"-8%","width":"50%","height":"50%","border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarThree"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarThree"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_gravatar_GravatarFour=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image4",null,[],{"id":"image4","addClass":"avatar avatar4"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarFour"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__image4'),H=w.get(z+'__image3'),I=w.get(z+'__image2'),J=w.get(z+'__image1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){F.setImages=M
F.setNodes=N
function M(O){if(!(O instanceof Array))return
J.setSrc(O[0])
I.setSrc(O[1])
H.setSrc(O[2])
G.setSrc(O[3])}
function N(O){if(!(O instanceof Array))return
J.setDataNode(O[0])
I.setDataNode(O[1])
H.setDataNode(O[2])
G.setDataNode(O[3])}})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarFour
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden","lineHeight":"0px",".avatar":{"position":"absolute","width":"50%","height":"50%"},".avatar1":{"top":0,"left":0,"borderTop":"0px none","borderLeft":"0px none"},".avatar2":{"top":0,"right":0,"borderTop":"0px none","borderRight":"0px none","borderLeft":"0px none"},".avatar3":{"bottom":0,"left":0,"borderTop":"0px none","borderBottom":"0px none","borderLeft":"0px none"},".avatar4":{"bottom":0,"right":0,"border":"0px none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarFour"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarFour"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_ButtonBar=(function(){var x=b.__$$__jx_ui_Button,y=b.__$$__jx_ui_Widget,z=b.__$$__jx_ui_HTMLElement
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
this.navStack=null
y.call(this,B,C,D,E,F)
this.addClass('button_bar')
F.initialValue&&this.setValue(F.initialValue)
this.on('click',function(G){var H=G&&G.target&&G.target.jx_wrapper
if(!H||H===this)return
while(H.parentNode&&(H.parentNode!=this))H=H.parentNode
if(this.getDisabled()||H.getDisabled())return
var I=H.getValue()
if(I===''||I==null)return
this.setValue(I)
this.fire('change')})
this.onDestruction(function(){this.navStack=null})}
;
A.prototype=e(y.prototype)
A.prototype.appendChild=function(B){var C=this.children.length
if(g(B)){if(this.attributes&&!n(this.attributes['noMangle']))B[0]=x}
z.prototype.appendChild.call(this,B)
if(g(B)){this.children[C].addClass('option')
j(this.tabIndex)&&this.children[C].setTabIndex(this.tabIndex+C)}}
A.prototype.setNoMangle=function(B){this.attributes.noMangle=n(B)}
A.prototype.setValue=function(B){for(var C=0,D=this.children.length;C<D;C++){if(this.children[C].getValue()==B){this.dom.value=this.children[C].getValue()
this.children[C].addClass('active')}
else{this.children[C].removeClass('active')}}}
A.prototype.getInitialValue=function(){return this._initialValue}
A.prototype.setInitialValue=function(B){this._initialValue=B}
A.prototype.reset=function(){this.setValue(this.getInitialValue())}
A.prototype.setLabel=function(B,C){for(var D=0,E=this.children.length;D<E;D++)if(this.children[D].getValue()==B)this.children[D].setText(C)}
A.prototype.getTabIndex=function(){return this.tabIndex}
A.prototype.setTabIndex=function(B){this.tabIndex=parseInt(B,10)||0
for(var C=0,D=this.children.length;C<D;C++)this.children[C].setTabIndex(this.tabIndex+C)
return this}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_ButtonBar"].join('')
A.prototype.__jx__fqname="jx_ui_ButtonBar"}
return A})()
b.__$$__meshim_widget_controllers_InstrumentationController=(function(){var x=b.__$$__jx_core_ObjectUtil,y=b.__$$__meshim_widget_Config,z=b.__$$__meshim_common_Instrumentation,A=b.__$$__meshim_widget_utils_Mobile,B=b.__$$__meshim_widget_controllers_DataController,C=b.__$$__meshim_widget_controllers_ErrorHandler,D,E,F=[]
function G(){D=new z()
D.setTags(L())
D.bindToConnectionStatus=H
D._queue=J
D.flush=K}
function H(M){M.bindValue(I)}
function I(M){if(M=='registered'||M=='reattached'||M=='cookie_law'){E=!0
D.flush()}
else{E=!1}}
function J(M){if(M.method==='histogram'){if((M.value<0)||(M.value>2400)){F.push({msg:'Instrumentation: '+(M.value<0?'negative timing value':'overly large value'),data:x.extend({ref_time:new Date(this.ref_ts),now:new Date(),account_key:y.ACCOUNT_KEY},M)})}}
z.prototype._queue.call(this,M)}
function K(){if(!E)return
if(!this.queue.length)return
if(!B.root.$('livechat').$('ui').$('mockup$bool').getValue()){if(h(D.send)){D.send({__type:'instrumentation',metrics:this.queue})}
for(var M=F.length;M--;){var N=F[M]
C.post(N.msg,N.data)}}
F=[]
this.queue=[]}
function L(){var M=[]
M.push('browser:'+q.browser)
var N,O
if(A.isMobileBrowser){N=A.isMobileTablet?'tablet':'mobile'
if(A.isAndroid)O='android'
else if(A.isIOS)O='ios'
else if(A.isWP)O='wp'
else O='other'}
else{N='desktop'
if(q.isWindows)O='win'
else if(q.isMac)O='mac'
else O='other'}
M.push('device:'+N)
M.push('platform:'+O)
return M}
G()
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_InstrumentationController"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_InstrumentationController"}
return D})()
b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"log_message",null,[],{"id":"log_message"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__log_message')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_Strings,L=b.__$$__meshim_widget_controllers_GoogleAnalytics,M=K.chat_log,N,O=J.root.$$('connection.reattached_timestamp$int'),P
function Q(){F.setDataNode=R
O.on('value',function(T){P=T})}
function R(T){if(N)F.autounbind(N,'value',S)
N=T.$('display_name$string')
F.autobind(N,'value',S)}
function S(T){var U=N.parentNode.getValue('nick$string')||''
U=U.split(':')[0]
var V=N.parentNode.getValue('type$string')
if(!U||!T){if(V==='chat.memberleave'&&U==='visitor');
else{F.parentNode.setDisplay('none')
return}}
F.parentNode.setDisplay('')
var W=N.parentNode.getValue('timestamp$int'),X=M[V]||''
X=X.replace('<name>',T)
if(U=='visitor'){if(V!='chat.memberleave'){X=K.chat_log['chat.visitorjoin']
F.parentNode.addClass('visitor_join')}
else{X=K.chat_log['chat.visitorleave']
F.parentNode.addClass('visitor_leave')}}
if(U=='agent'&&V=='chat.memberjoin'){if(P&&W>P){L.trackEvent('Served by Operator',T)}}
G.setText(X)}
Q()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_MemberChange"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_MemberChange"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_EmailField=(function(){var x=b.__$$__jx_ui_TextField
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='input')
E.type||(E.type='email')
x.call(this,A,B,C,D,E)}
y.prototype=e(x.prototype)
var z=x.prototype.getValue
y.prototype.getValue=function(){return (z.call(this)||'').trim()}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_EmailField"].join('')
y.prototype.__jx__fqname="jx_ui_EmailField"}
return y})()
b.__$$__meshim_widget_widgets_menu_ButtonLabel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Button,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_ButtonLabel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Button
x.__jx__jcss={"**self":{"background":"transparent","border":"0px none","color":"$$menuColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_ButtonLabel"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_ButtonLabel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J
F.setDataNode=function(M){if(M==J)return
if(J)F.autounbind(J,'value',K)
J=M
if(J)F.autobind(J,'value',K)}
function K(M){if(!M)return
if('msg$string' in M){var N=M.msg$string,O=N.match(/There are currently ([0-9]+) visitor/)
if(O){N=I.system_msg.queue.replace('<number>',O[1])}
F.setText(N||'')}}
function L(){}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_menu_Item=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{"type":"button"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)
I.rtl(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Item
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"background":"transparent","border":"none","position":"relative","width":"100%","overflow":"hidden","cursor":"pointer","*zoom":1,"textAlign":"left","padding":"$$menuItemPadding","*":{"cursor":"pointer"}},"&.rtl":{"textAlign":"right"},"&:hover":{"background":"$$menuItemHoverBg"},"&.mobile":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Item"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_menu_Item"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_PopoutController=(function(){var x=b.__$$__jx_data_JSON,y=b.__$$__meshim_common_QueryString,z=b.__$$__meshim_widget_Config,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,C=b.__$$__meshim_widget_utils_Mobile,D={}
D.init=function E(){var F=A.root,G=F.$('connection').$('status$string'),H=F.$('livechat').$('ui').$('popout$bool'),I=F.$('livechat').$('ui').$('mobile$bool'),J=F.$('livechat').$('ui').$('mockup$bool'),K=F.$('livechat').$('account').$('key$string'),L=F.$('livechat').$('profile').$('mid$string'),M=F.$('livechat').$('settings').$('language').$('language$string'),N,O=I.getValue()?'dialog=no,fullscreen=yes':'width=400,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
D.openPopout=function P(Q){if(q.bugs.noBoxSizing)return
var R=K.getValue()||z.ACCOUNT_KEY,S=I.getValue()
if(J.getValue()||H.getValue())return
if(!R)return
if(C.isIEMobile)return
var T=D.getPopoutURL()
if((N&&!N.closed&&N.focus)){if((!S&&q.isChrome)||C.isNativeAndroidMobile||C.isSafariIOSMobile){N.focus()}
else{N.close()
N=window.open(T,z.POPOUT_WINDOW_PREFIX+R+new Date(),O)
if(!N||N.closed){return}}
return !0}
else if(S||Q){try {N=window.open(T,z.POPOUT_WINDOW_PREFIX+R,O)}catch(U){;}
if(C.isChromeIOSMobile){return !0}
if(!N||N.closed){return}
try {N.focus()}catch(U){;}
return !0}}
D.getPopoutURL=function P(){var Q={key:K.getValue()||z.ACCOUNT_KEY,mid:L.getValue(),lang:M.getValue(),hostname:window.location.hostname,api_calls:x.stringify(B.getPopoutAPICalls())},R=[z.POPOUT_URL,'?',y.buildQuery(Q)]
return R.join('')}
D.isReady=function P(){var Q=G.getValue()
if(Q=='registered'||Q=='reattached'||Q=='cookie_law'){return !0}
else{return !1}}}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_PopoutController"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_PopoutController"}
return D})()
b.__$$__meshim_widget_widgets_chatLogRenderer_Comment=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J=b.__$$__meshim_widget_controllers_DataController,K=I.chat_log['chat.comment'],L=J.root.$('livechat'),M=L.$('features').$('rating$bool'),N=L.$('settings').$('rating').$('enabled$bool')
F.setDataNode=function(){}
function O(){F.setText(K)
F.autobind(M,'value',P)
F.autobind(N,'value',P)}
function P(){if(M.getValue()&&N.getValue()){F.setDisplay('')}
else{F.setDisplay('none')}}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_Comment
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_Comment"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_Comment"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_form_CheckBoxMultiple=(function(){var x=b.__$$__jx_ui_CheckBox,y=b.__$$__meshim_widget_widgets_form_InputMultiple
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
this.optionConstructor=x
this.inputSuffix='checkbox'
y.call(this,A,B,C,D,E)}
z.prototype=e(y.prototype)
z.prototype.setValue=function(A){var B=g(A)?A:A.split(','),C,D
for(var E=0,F=this.options.length;E<F;E++){C=!1
for(var G=0,H=B.length;G<H;G++){if(this.options[E].getValue()==B[G]){this.options[E].setChecked(!0);(this.options[E].container||this.options[E]).setDisplay('')
this.labels[E].setDisplay('').addClass('label_checked')
C=!0
break}}
if(C){D=E}
else{(this.options[E].container||this.options[E]).removeClass('last-checked')
this.labels[E].removeClass('last-checked')
this.options[E].setChecked(!1)
if(this.readOnly){(this.options[E].container||this.options[E]).setDisplay('none')
this.labels[E].setDisplay('none').removeClass('label_checked')}}}
if(D!=a){(this.options[D].container||this.options[D]).addClass('last-checked')
this.labels[D].addClass('last-checked')}}
z.prototype.getValue=function(){var A=[]
for(var B=0,C=this.options.length;B<C;B++)if(this.options[B].getChecked())A.push(this.options[B].getValue())
return A.join(',')}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_CheckBoxMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_CheckBoxMultiple"}
return z})()
b.__$$__meshim_widget_widgets_ChatWindowContent=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_BindClass,K=I.root.$('livechat').$('ui').$('mobile$bool').getValue()
function L(){J.mobile(F)
J.tablet(F)}
var M=F.setAbsPaddingBottom
F.setAbsPaddingBottom=function(){if(K)return
M.apply(F,arguments)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowContent
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_AbsolutePaddingContainer.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
x.__jx__jcss={"**self":{},"&.mobile":{"margin":"0 auto","height":"auto","border":"none","maxWidth":"$$mobileMaxWidthS"},"&.tablet":{"maxWidth":"$$mobileMaxWidth"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowContent"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowContent"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_toast_File=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__jx_ui_html_div,"message",null,[],{"id":"message"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_common_FileUtil,L=b.__$$__meshim_widget_Config,M=b.__$$__meshim_widget_utils_Utils,N=b.__$$__meshim_widget_utils_Strings,O=N.file_upload.error,P=K.prettySize(L.FILE_UPLOAD_MAX,{base2:!0}),Q=3100,R=M.isStyleSupported('transition')
if(q.isFF)R=!1
var S=J.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),T,U=J.root.$('livechat').$('ui').$('popout$bool')
function V(){M.onTransitionEnd(F,F,W)
U&&r.window.on('click',W)
F.onDestruction(function(){U&&r.window.un('click',W)})
F.autobind(S,'value',function(X){if(!X){W()
return}
if(X=='size'){G.setText(O[X].replace('<size>',P))}
else{G.setText(O[X]||O['default'])}
if(T)window.clearTimeout(T)
R&&F.removeClass('fade_out')
F.setDisplay('')
R&&l(function(){F.addClass('fade_out')})
T=window.setTimeout(W,Q)})}
function W(){F.setDisplay('none')}
V()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_File
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
x.__jx__jcss={"**self":{"top":"50%","left":"50%","width":"160px","height":"auto","marginTop":"-32px","marginLeft":"-80px","padding":"10px","textAlign":"center","fontWeight":"bold","transition":"opacity 0.5s linear 2.5s","opacity":1,"&":"$$fileToast","&.fade_out":{"opacity":0}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_File"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_File"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_iconFont_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Button,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"i",null,[],{"id":"i"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__i')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
J.mobile(F)
var K
F.setIcon=function(L){if(K)G.removeClass(K)
K=L
if(K)G.addClass(K)
return G.setIcon.apply(G,arguments)}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Button
x.__jx__jcss={"**self":{"background":"transparent","border":"none","color":"inherit",".icon_font":{"display":"inline","lineHeight":"inherit","verticalAlign":"middle","fontSize":"$$fontSizeL"}},"&.mobile":{".icon_font":{"position":"relative","fontSize":"$$fontSizeXXL","&.pencil":{"top":"4px"},"&.cross":{"top":"5px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__jx_ui_TextArea=(function(){var x=b.__$$__jx_ui_TextField
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='textarea')
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.setCols=function(z){this.dom.cols=z
return this}
y.prototype.getCols=function(){return this.dom.cols}
y.prototype.setRows=function(z){this.dom.rows=z
return this}
y.prototype.getRows=function(){return this.dom.rows}
y.prototype.setResize=function(z){if(!('resize' in this.style))return
this.style.resize=z}
y.prototype.getInitialValue=function(){return q.engineIE<=8?this._initialValue:this.getText()}
y.prototype.setInitialValue=function(z){if(q.engineIE<=8)this._initialValue=z&&(z.toString?z.toString():z)
else this.setText(z)
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_TextArea"].join('')
y.prototype.__jx__fqname="jx_ui_TextArea"}
return y})()
b.__$$__meshim_widget_widgets_toast_Disconnected=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__meshim_widget_widgets_toast_disconnected_Image,"img",null,[],{"id":"img","addClass":"reconnecting_toast_image"}],[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"reconnecting_toast_text"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__img'),H=w.get(z+'__message')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('connection').$('message$string'),N,O=L.connection_status,P={'idle_disconnect':1}
function Q(){F.autobind(M,'value',function(R){N=R
if(!R){F.setDisplay('none')
G.stop().reset()
return}
if(P[R]){G.stop().reset()
F.addClass('toast_disconnected')}
else{G.play()
F.removeClass('toast_disconnected')}
H.setDisplay(R=='fast_init'?'none':'')
H.setText(O[R]||v(69))
F.setDisplay('')})
F.on('click',function(R){R.preventDefault()
P[N]&&K.livechat.reconnect()})}
Q()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_toast_Disconnected
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
x.__jx__jcss={"**self":{"textAlign":"center","&.toast_disconnected":{"cursor":"pointer"}},".reconnecting_toast_text":{"display":"block","marginLeft":"34px","fontWeight":"bold","textAlign":"left"},".reconnecting_toast_image":{"float":"left","marginTop":"-2px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_Disconnected"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_toast_Disconnected"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,"tr",null,[[b.__$$__jx_ui_html_td,"text_cell",null,[[b.__$$__jx_ui_Widget,"text",null,[],{"id":"text"}]],{"id":"text_cell","class":"text_cell"}],[b.__$$__jx_ui_html_td,"image_cell",null,[[b.__$$__jx_ui_Widget,"image_container",null,[[b.__$$__jx_ui_Widget,"image",null,[],{"id":"image","tagName":"img","addClass":"banner_image"}]],{"id":"image_container","addClass":"banner_image_container"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","icon":"badge_default","addClass":"banner_icon"}]],{"id":"image_cell","class":"image_cell"}]],{"id":"tr"}]],{}]],{"class":"banner_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__tr'),H=w.get(z+'__text_cell'),I=w.get(z+'__text'),J=w.get(z+'__image_cell'),K=w.get(z+'__image_container'),L=w.get(z+'__image'),M=w.get(z+'__icon')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var N=(function(){var P=b.__$$__meshim_widget_controllers_DataController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_Strings,S=P.root,T=S.$('livechat').$('settings').$('banner'),U=T.$('layout$string'),V,W=T.$('text$string'),X=T.$('image_path$string'),Y,Z=T.$('image_data$string'),$$,$_=S.$('livechat').$('ui').$('mockup$bool').getValue(),$a=S.$('livechat').$('ui').$('chat_window').$('display$bool'),$b,$c=S.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),$d,$e=100
function $f(){if(q.bugs.noBoxSizing){L.dom.onload=$h
F.autobind($a,'value',function($j){$b=$j
$h()})
F.autobind($c,'value',function($j){$d=$j
$h()})}
function $h(){if(!$b)return
if($d!='new_chat_form')return
if(!q.bugs.noBoxSizing)return
L.setWidth('')
L.setHeight('')
l($i,F,!0)}
function $i(){var $j=parseInt(L.getWidth()||L.dom.width,10),$k=parseInt(L.getHeight()||L.dom.height,10)
if(!$j||!$k)return
var $l=$j>$k,$m,$n,$o
$m=$l?$j:$k
$n=$l?$k:$j
if($m>$e){$o=$m/$e
$m=$m/$o
$n=$n/$o
L.setWidth($l?$m:$n)
L.setHeight($l?$n:$m)}
F.dom.className=F.dom.className}
F.autobind(U,'value',function($j){if(V)F.removeClass(V)
V=$j
if(!P.livechat.getLimit()&&V=='image_only'){V='image_right'}
if(V)F.addClass(V)
$g()})
F.autobind(W,'value',function(){I.setText(R.get(W))})
F.autobind(X,'value',function($j){Y=$j
$g()})
if($_){Q.supportsDataURI(function($j){if(!$j)return
F.autobind(Z,'value',function($k){$$=$k
$g()})})}}
function $g(){F.setStyle('background','')
var $h=Q.replaceFileHostname($$||Y||'')
switch(V){case 'image_right':L.setSrc($h)
G.insertBefore(H,J)
break
case 'image_left':L.setSrc($h)
G.insertBefore(J,H)
break
case 'image_only':F.setStyle('background','url('+$h+') center center no-repeat')
break
default:F.setStyle('background','')
break}
if($h){K.setDisplay('')
M.setDisplay('none')}
else{K.setDisplay('none')
M.setDisplay('')}}
$f()})()
for(var O in N)if(N.hasOwnProperty(O))F[O]=N[O]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{".banner_table":{"width":"100%","height":"100%","tableLayout":"fixed","direction":"ltr","color":"$$badgeContentColor"},".text_cell, .image_cell":{"verticalAlign":"middle"},".text_cell":{"wordWrap":"break-word","whiteSpace":"pre-wrap"},".image_cell":{"width":"100px","textAlign":"center"},".banner_image_wrapper":{"width":"100px"},".banner_image":{"maxWidth":"100px","maxHeight":"100px","verticalAlign":"top","border":"none"},".banner_icon":{"width":"100px","fontSize":"90px","marginTop":"10px","marginLeft":"5px","textAlign":"center"}},"&.image_right":{".text_cell":{"paddingRight":"3px"},".image_cell":{}},"&.image_left":{".text_cell":{"paddingLeft":"3px"},".image_cell":{}},"&.image_only":{".text_cell":{"display":"none"},".image_cell":{"display":"none"}},"&.text_only":{".text_cell":{"fontSize":"26px","textAlign":"center","width":"100%"},".image_cell":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_Banner"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_Banner"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings,J=I.chat_log['chat.changename'],K
function L(){F.setDataNode=M}
function M(O){if(K)F.autounbind(K,'value',N)
K=O
F.autobind(K,'value',N)}
function N(){var O=K.getValue()
if(!O)return
var P=O['display_name$string'],Q=O['new_display_name$string'],R=''
if(P&&Q){R=J.replace('<old_name>',P).replace('<new_name>',Q)}
F.parentNode.setDisplay(R?'':'none')
F.setText(R)}
L()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_NameChange"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_NameChange"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Button=(function(){var x=b.__$$__jx_ui_Button,y=x,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_utils_BindClass
x=function(D,E,F,G,H){if(!(this instanceof x))return new x(D,E,F,G,H)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
if(!H)H={}
H.type||(H.type='button')
y.call(this,D,E,F,G,H)
B.mobile(this)
B.rtl(this)
var I=this
if(G&&G.length==1&&(typeof G[0]=='string'||G[0].bind)){if(v&&v.onLanguage){v.onLanguage(J)
this.onDestruction(function(){v.unLanguage(J)})}
this.autobind(A.root.$('livechat').$('ui').$('theme_loaded$bool'),'value',function(K){if(K)I.fixOverflowTitle()})}
function J(){I.fixOverflowTitle()}}
x.__jx__jcss={"**self":{"appearance":"none","width":"48%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","color":"$$buttonColor","background":"$$buttonBg","paddingTop, paddingBottom":"$$buttonPadding","paddingLeft, paddingRight":"$$buttonPaddingHorizontal","borderWidth":"$$buttonBorderWidth","borderStyle":"$$buttonBorderStyle","borderColor":"$$buttonBorderColor","borderRadius":"$$buttonRadius","boxShadow":"$$buttonShadow","fontWeight":"$$buttonFontWeight","wordWrap":"normal","*overflow":"visible","cursor":"pointer","&:hover, &:focus":{"color":"$$buttonHoverColor","background":"$$buttonHoverBg","borderColor":"$$buttonHoverBorderColor","boxShadow":"$$buttonHoverShadow"},"&:active":{"color":"$$buttonActiveColor","background":"$$buttonActiveBg","borderColor":"$$buttonActiveBorderColor","boxShadow":"$$buttonActiveShadow"}},"&.secondary":{"margin":"0 0 0 4%","color":"$$buttonSecColor","background":"$$buttonSecBg","borderColor":"$$buttonSecBorderColor","boxShadow":"$$buttonSecShadow","&:hover, &:focus":{"color":"$$buttonSecHoverColor","background":"$$buttonSecHoverBg","borderColor":"$$buttonSecHoverBorderColor","boxShadow":"$$buttonSecHoverShadow"},"&:active":{"color":"$$buttonSecActiveColor","background":"$$buttonSecActiveBg","borderColor":"$$buttonSecActiveBorderColor","boxShadow":"$$buttonSecActiveShadow"}},"&.rtl.secondary":{"margin":"0 4% 0 0","*margin":"0 0 0 4%"},"&.disabled":{"opacity":"0.5","cursor":"default","&:hover, &:focus":{"color":"$$buttonColor","background":"$$buttonBg","borderColor":"$$buttonBorderColor","boxShadow":"$$buttonShadow"}},"&.fit":{"width":"auto","paddingLeft, paddingRight":"$$buttonPadding"},"&.wide":{"width":"100%"},"&.short":{"paddingTop, paddingBottom":"$$buttonShortPadding"},"&.short.mobile":{"paddingTop, paddingBottom":"$$buttonPadding"},"&.short.mobile.short_mobile":{"paddingTop, paddingBottom":"$$buttonShortPadding"}}
x.prototype=e(y.prototype)
var C=['fontFamily','fontSize','fontWeight','fontStyle']
x.prototype.fixOverflowTitle=function(){if(v.language=='en'){this.setTitle('')
return}
if(!x.dummy){x.dummy=new z(this.doc.body,null,null,null,{position:'absolute',visibility:'hidden'})}
var D=this.getText(),E=this.getComputedStyle()
if(!E)return
for(var F=0,G=C.length;F<G;F++){x.dummy.style[C[F]]=E[C[F]]}
x.dummy.setText(D)
var H=x.dummy.getWidth(),I=parseInt(E.width,10)||0-(parseInt(E.paddingLeft,10)||0)-(parseInt(E.paddingRight,10)||0)-(parseInt(E.borderLeftWidth,10)||0)-(parseInt(E.borderRightWidth,10)||0)
this.setTitle(H>0&&I>0&&H>I?D:'')}
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Button"}
return x})()
b.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_toast_Disconnected,null,null,[],{"addClass":"toast"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(F)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","zIndex":"1000","top":"40px","left":"0","width":"100%","height":"0","textAlign":"center",".toast":{"display":"inline-block","maxWidth":"80%"}},"**self.mobile":{"position":"fixed","top":"60px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowDisconnectedToast"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowDisconnectedToast"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_Button=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Button,null,null,[],{"addClass":"secondary chat_log_button"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_Button
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Button
x.__jx__jcss={"**self.chat_log_button":{"width":"auto","maxWidth":"100%","padding":"6px","margin":"0"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_Button"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_Button"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_ButtonLabel,"logged_out",null,[v(129)],{"id":"logged_out"}],[b.__$$__jx_ui_Label,"name",null,[],{"id":"name","addClass":"logged_in_name"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__logged_out'),H=w.get(z+'__name')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Utils,M=K.root.$('livechat'),N=M.$('profile'),O=N.$('logged_in$bool'),P,Q=N.$('display_name$string'),R,S=M.$('ui').$('chat_window').$('menu_stack_name$string'),T=M.$('settings').$('login').$('restrict_profile$bool')
function U(){F.on('click',function(W){W.stopPropagation()
S.update('profile_menu')})
F.autobind(O,'value',function(W){P=W
V()})
F.autobind(Q,'value',function(W){R=W||''
V()})
F.autobind(T,'value',function(W){F.setDisplay(W?'none':'')})
v&&v.onLanguage&&v.onLanguage(V)}
function V(){if(P){if(R&&!L.isDefaultName(R)){H.setText(v(127).replace('<name>',R))}
else{H.setText(v(128))}
G.setDisplay('none')
H.setDisplay('')}
else{G.setDisplay('')
H.setDisplay('none')}}
U()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{"display":"none"},"&.mobile":{"display":"block"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Profile"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Profile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon_sound",null,[],{"id":"icon_sound"}],[b.__$$__meshim_widget_widgets_menu_ButtonLabel,null,null,[v(130)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__icon_sound')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_SoundController,L=J.root.$('livechat').$('profile'),M=L.$('notification').$('sound$bool')
function N(){F.on('click',function(){M.update(!K.isSoundEnabled())})
F.autobind(M,'value',function(){G.setIcon(K.isSoundEnabled()?'sound_on':'sound_off',!0)})}
N()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{},"&.mobile":{"display":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Sound"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Sound"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ButtonBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_ButtonBar,null,null,[],{"selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ButtonBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_ButtonBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_ButtonBar
x.__jx__jcss={".option":{"cursor":"pointer","display":"inline-block","textAlign":"center","&:first-child":{},"&:last-child":{},"&.active":{"cursor":"default"},"&:hover":{},"&.disabled":{"cursor":"default","&.active":{"cursor":"default"},"&:hover":{"cursor":"default"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ButtonBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ButtonBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon",null,[],{"id":"icon"}],[b.__$$__jx_ui_Label,null,null,[v(131)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__icon')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat'),L=K.$('profile'),M=L.$('allow_cookies$bool'),N=K.$('settings').$('cookie_law').$('enabled$bool'),O=K.$('ui').$('chat_window').$('main_stack_name$string')
function P(){F.on('click',function(){if(M.getValue())O.update('cookie_form')})
F.autobind(M,'value',function(R){G.setIcon(R)
Q()})
F.autobind(N,'value',Q)}
function Q(){if(N.getValue()&&M.getValue()){F.setDisplay('')}
else{F.setDisplay('none')}}
P()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Cookies"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Cookies"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_About=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_ButtonLabel,null,null,[v(132)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function K(){F.on('click',function(){J.update('about_panel')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_About
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_About"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_About"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,"days_el",null,[],{"id":"days_el","addClass":"short"}],[b.__$$__meshim_widget_widgets_Body,"periods_el",null,[],{"id":"periods_el"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__days_el'),H=w.get(z+'__periods_el')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_utils_Utils,L=b.__$$__meshim_widget_utils_Strings,M=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period,N=b.__$$__jx_ui_Label,O=b.__$$__jx_ui_Widget,P=7,Q=L.datetime.days,R=0,S=24*60
F.setData=function(V){if(!V||!V.days||!V.periods)return
G.empty()
var W=V.days
if(W.length==P){G.setText(L.datetime.everyday)}
else{W=T(U(W))
for(var X=0,Y=W.length;X<Y;X++){new N(G,null,null,null,{text:W[X]})}}
H.empty()
var Z=V.periods,$$
if(!V.enabled$bool){H.setText(L.pre_chat_offline_form.operating_hours.closed)}
else{for(var $_ in Z)if(Z.hasOwnProperty($_)){if(Z[$_].start$int===R&&Z[$_].end$int===S){$$=new O(H)
$$.setText(L.datetime.all_day)}
else{$$=new M(H)
$$.setStart(K.formatMinutesAsHours(Z[$_].start$int))
$$.setEnd(K.formatMinutesAsHours(Z[$_].end$int))}}}}
function T(V){for(var W=0,X=V.length;W<X;W++){if(!j(V[W]))continue
V[W]=Q[V[W]]}
return V}
function U(V){var W=[],X,Y,Z
for(var $$=0,$_=V.length;$$<$_;$$++){if(typeof V[$$]!='number')return V
X=V[$$]
Y=V[$$-1]
Z=V[$$+1]
if($$>V[$$])X+=P
if($$-1>V[$$-1])Y+=P
if($$+1>V[$$+1])Z+=P
if($$&&(Y==X-1)){if(($$==$_-1)||(Z!=X+1)){W.push(' — ',V[$$])}
else{continue}}
else{$$&&W.push(', ')
W.push(V[$$])}}
return W}})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_branding_Zopim=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_branding_Link,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_common_QueryString,J=b.__$$__meshim_widget_Config,K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('livechat'),N=M.$('ui').$('popout$bool'),O=M.$('account').$('key$string')
function P(){F.autobind(N,'value',R)
F.autobind(O,'value',R)
if(v&&v.onLanguage){v.onLanguage(Q)
F.onDestruction(function(){v.unLanguage(Q)})}
Q()}
function Q(){R(),F.setTitle(L.branding.title)}
function R(){var S={'utm_campaign':'Iref','utm_source':N.getValue()?I().get('hostname'):window.location.hostname,'utm_medium':'widget','utm_term':'new-widget','utm_content':O.getValue(),'iref':O.getValue(),'lang':v.language},T=I.buildQuery(S)
F.setHref([J.BRANDING_URL,'?',T].join(''))}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Zopim
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_branding_Link.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_branding_Link
x.__jx__jcss={"**self":{"fontSize":"11px"},"&.mobile":{"fontSize":"12px"},".meshim_widget_widgets_IconFont":{"lineHeight":"inherit","paddingTop":"1px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Zopim"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Zopim"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_branding_Zendesk=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_branding_Link,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"brand_zendesk"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_Strings
function J(){if(v&&v.onLanguage){v.onLanguage(K)
F.onDestruction(function(){v.unLanguage(K)})}
K()}
function K(){L()
F.setTitle(I.branding.title_zendesk)}
function L(){F.setHref('https://www.zendesk.com/embeddables/?utm_source=webwidgetchat&utm_medium=poweredbyzendesk&utm_campaign=image')}
J()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_branding_Zendesk
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_branding_Link.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_branding_Link
x.__jx__jcss={"**self":{"fontSize":"14px"},"&.mobile":{},".meshim_widget_widgets_IconFont":{"lineHeight":"inherit","paddingTop":"1px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_branding_Zendesk"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_branding_Zendesk"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_ConnectionController=(function(){var x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_CookieLaw,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__meshim_widget_controllers_StorageController,B=b.__$$__meshim_widget_controllers_InstrumentationController,C=b.__$$__meshim_widget_utils_Utils,D=b.__$$__jx_data_DataNode,E=b.__$$__jx_io_Socket,F=b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition,G=b.__$$__meshim_common_GeoAccessFactory,H=b.__$$__meshim_common_QueryString,I={FLUSH_DELAY_MS:0,RECONNECT_DELAY_MS:10000},J=2000,K='.zopim.com',L=new G(F,'{"CLUSTERS":{"US":["us08","us10","us12","us14","us16","us18","us20","us22","us24","us26","us28","us30","us32","us34","us36"],"DE":["de04","de06","de08","de10","de12","ie02","ie04","ie06","ie08","ie10","ie12","ie14","ie16","de14","de16","de18","de20"],"SG":["sg06","sg08","sg10","sg12","sg14","sg16","sg18","sg20"],"JP":["jp02","jp04","jp06","jp08"],"AU":["au02","au04"],"BR":["br02","br04","br06","br08","br10","br12"]},"FALLBACKS":{"US":["DE"],"DE":["US"],"SG":["US"],"JP":["US"],"AU":["SG","US"],"BR":["US"]},"NEAR_MAP":{"AL":"DE","AD":"DE","AM":"DE","AT":"DE","BY":"DE","BE":"DE","BA":"DE","BG":"DE","CH":"DE","CY":"DE","CZ":"DE","DE":"DE","DK":"DE","EE":"DE","ES":"DE","EU":"DE","FO":"DE","FI":"DE","FR":"DE","GB":"DE","GE":"DE","GI":"DE","GR":"DE","HU":"DE","HR":"DE","IE":"DE","IM":"DE","IS":"DE","IT":"DE","LT":"DE","LU":"DE","LV":"DE","MC":"DE","MK":"DE","MT":"DE","NO":"DE","NL":"DE","PO":"DE","PT":"DE","RO":"DE","SE":"DE","SI":"DE","SK":"DE","SM":"DE","TR":"DE","UA":"DE","VA":"DE","ZA":"DE","AP":"SG","BD":"SG","BN":"SG","CN":"SG","ID":"SG","IN":"SG","LA":"SG","KH":"SG","LK":"SG","MM":"SG","MY":"SG","SG":"SG","PK":"SG","TH":"SG","VN":"SG","AU":"AU","NZ":"AU","HK":"JP","KR":"JP","JP":"JP","PH":"JP","RU":"JP","TW":"JP","AR":"BR","BO":"BR","BR":"BR","CL":"BR","PE":"BR","PY":"BR","UY":"BR","DEFAULT":"US"}}'),M=[],N='',O=!1,P=[],Q,R,S,T,U,V,W
function X(){Q=z.root
R=Q.$('connection')
T=Q.$('livechat').$('ui').$('mockup$bool').getValue()
if(T){R.$('status$string').update('reattached')
return}
Q.$('livechat').$('profile').bindValue(function($t){if(!$t)return
if(y.isCookieDenied())return
if(x.IS_POPOUT)return
$t.mid$string&&A.setIdentity($t.mid$string)})
R.$('status$string').bindValue(function($t){O=($t=='reattached')
O&&$p()
if($t=='idle_disconnect')S&&S.close()
$k()})
R.$('socket_status$string').bindValue($k)
U=Q.$('tmp').$('api_settings')
U.bindValue(function(){V=U.getValue()})
Q.bindWrite($p)
if(!window.__z_sdk)$b()
Q.$('connection').$('reconnect$bool').bindValue($_)}
function Y($t){S&&S.send($t)}
function Z(){S&&S.close()
S=null
$b()}
function $$(){R.update({status$string:'idle_disconnect'})}
function $_($t){if($t)Z()}
function $a($t){var $u=$t.split(':'),$v=$u[0],$w=$u[1],$x=new E($v+K+($w?':'+$w:''),'W',null,I)
$x.on('open',function(){$e($t,$x)})
return $x}
function $b(){var $t=$c()
try {W=L.getGeoAccess([$t])}catch($u){window.console&&window.console.log('Unable to compute host list')
return}
$d(J)}
function $c(){var $t=R.$('server$string').getValue()||''
return $t.replace(/\.zopim\.com/i,'')}
function $d($t){if(S)return
var $u=W.getNextHost(),$v=H.parseQuery(window.location.hash.replace(/^#/,'')).get('__zopim_widget_proxy')
if($v)$u=$v
if(!$u)return
var $w=$a($u)
M.push($w)
if(!W.hasNext())return
var $x=setTimeout($y,$t)
$w.on('close',$y)
function $y(){clearTimeout($x)
$w.un('close',$y)
$d($t)}}
function $e($t,$u){R.update({socket_status$string:null})
N=$t
if(T)return
if(S){$u.close()
return}
B.start('conn_open',$u.starttime)
B.end('conn_open',0.25,['proxy:'+$t])
S=$u
S.on('break',$g)
S.on('message',$f)
S.on('reopen',$i)
S.on('resume',$h)
$j()}
function $f($t){if(!$t)return
var $u=Q
if('update' in $t){if(/^livechat.settings/.test($t.path)){var $v=$t.path.split('.')
$v.splice(0,2)
$v=$v.join('.')
C.fullyExtend($t.update,V);($v?$q.descend($v):$q).update($t.update)}
$t.path&&($u=$u.descend($t.path))
$u.update($t.update)}}
function $g(){R.update({socket_status$string:'break'})}
function $h(){R.update({socket_status$string:'resume'})}
function $i(){R.update({socket_status$string:'reconnect'})
O=!1
$j()}
function $j(){if(!S)$b()
var $t=A.getIdentity(),$u=y.isCookieDenied()
if(!x.ACCOUNT_KEY)return
var $v={__type:'register',accountKey:x.ACCOUNT_KEY,mID:$t,ua:window.navigator.userAgent,cookie_law:$u}
if(Q.$('livechat').$('ui').$('popout$bool').getValue()){$v.popout=!0}
else{$v.title=document.title
$v.url=window.location.href
$v.ref=window.document.referrer}
if(this._register){var $w=this._register
for(var $x in $w)if($w.hasOwnProperty($x)){$v[$x]=$w[$x]}
;
$v.from='widget_sdk'}
S.send($v)}
function $k(){var $t=R.getValue('status$string'),$u=R.getValue('socket_status$string')
window.clearTimeout($l.timer)
if($t=='error'){$l.timer=window.setTimeout($l,5*1000)
return}
if($u=='break'){if($t=='idle_disconnect'){R.update({message$string:'idle_disconnect'})}
else{R.update({message$string:'reconnecting'})
$l.timer=window.setTimeout($l,60*1000)}}
else if($u===null&&$t=='registered'){R.update({message$string:'resuming'})}
else if(k($t)&&k($u)){R.update({message$string:'fast_init'})}
else{R.update({message$string:null})}}
function $l(){R.update({message$string:'disconnected'})}
function $m(){var $t=S
if(!$t)return {status:'not connected'}
return {connect_attempts:$t.connect_attempts,connections:$t.connections,disconnects:$t.disconnects,timeout_server:$t.timeout_server,timeout_response_soft:$t.timeout_response_soft,timeout_response_hard:$t.timeout_response_hard,sent_bytes:$t.sent_bytes,recv_bytes:$t.recv_bytes,sent_messages:$t.sent_messages,recv_messages:$t.recv_messages,sent_frames:$t.sent_frames,recv_frames:$t.recv_frames,lost_frames:$t.lost_frames,ooo_frames:$t.ooo_frames,bytes_at_connect:$t.bytes_at_connect,rtt:$t.rtt,clock_skew:$t.clock_skew,reconnect_delay:$t.reconnect_delay,quality:$t.quality,host:$t.host,status:$t.status,zone:window.__$__GEO,last_frame_time:$t.last_frame_time,local_time:+new Date()}}
function $n(){return N+K}
function $o(){return +new Date()-(S?S.clock_skew:0)}
function $p($t){$t&&P.push($t)
if(S&&O){while(P.length){S.send(P.shift())}}}
var $q=new D('server_settings')
function $r(){return $q.getValue()}
var $s={init:X,send:Y,connect:$b,reconnect:Z,disconnect:$$,getConnectionStats:$m,getHost:$n,getServerTime:$o,getServerSettings:$r}
if((typeof $s==='function')&&$s.prototype&&!$s.__jx__no_fqname){$s.prototype.__jx__fqname_chain=[($s.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ConnectionController"].join('')
$s.prototype.__jx__fqname="meshim_widget_controllers_ConnectionController"}
return $s})()
b.__$$__meshim_widget_components_chatWindow_EndChatMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"message"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"end_chat",null,[v(38)],{"id":"end_chat","addClass":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message'),H=w.get(z+'__end_chat'),I=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=L.root.$('livechat'),O=N.$('ui').$('chat_window').$('menu_stack_name$string'),P=N.$('ui').$('chat_window').$('main_stack_name$string'),Q=N.$('settings').$('end_chat_menu').$('message$string'),R=N.$('features').$('rating$bool'),S=N.$('settings').$('rating').$('enabled$bool'),T=N.$('channel'),U=T.$('served$bool'),V=T.$('rating$string'),W=N.$('ui').$('chat_window').$('rating_panel').$('end_chat$bool')
function X(){F.autobind(Q,'value',function(Y){G.setText(Y||M.end_chat_menu_message||'')})
H.on('click',function(){if(R.getValue()&&S.getValue()&&U.getValue()&&!V.getValue()){W.update(!0)
P.update('rating_panel')}
else{L.livechat.endChat()}
O.update('')})
I.on('click',function(){O.update('')})}
X()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EndChatMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={".message":{"marginBottom":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EndChatMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EndChatMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_ButtonLabel,null,null,[v(134)],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string')
function K(){F.on('click',function(){J.update('email_transcript_menu')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_iconFont_AuthButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Button,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Auth,"i",null,[],{"id":"i","addClass":"if"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__i')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){F.setIcon=function(){G.setIcon.apply(G,arguments)}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_AuthButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Button.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Button
x.__jx__jcss={"**self":{"overflow":"hidden","paddingTop":"10px","paddingBottom":"6px","color":"$$authButtonColor","background":"$$authButtonBg","borderColor":"$$authButtonBorderColor","boxShadow":"$$authButtonShadow","&:hover, &:focus":{"color":"$$authButtonHoverColor","background":"$$authButtonHoverBg","borderColor":"$$authButtonHoverBorderColor","boxShadow":"$$authButtonHoverShadow"},"&:active":{"color":"$$authButtonActiveColor","background":"$$authButtonActiveBg","borderColor":"$$authButtonActiveBorderColor","boxShadow":"$$authButtonActiveShadow"}},"&.float":{"width":"30%","margin":"0 3% 0 0"},"&:hover, &:focus":{"&.facebook .icon_font":{"color":"$$facebook"},"&.twitter .icon_font":{"color":"$$twitter"},"&.google .icon_font":{"color":"$$google"}},"&.mobile":{".if":{"textAlign":"center","fontSize":"22px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_AuthButton"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_iconFont_AuthButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Gravatar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_gravatar_GravatarOne,J=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo,K=b.__$$__meshim_widget_widgets_gravatar_GravatarThree,L=b.__$$__meshim_widget_widgets_gravatar_GravatarFour,M=[I,J,K,L],N,O
function P(){F.setImages=W
F.setDataNode=R
F.setMemberNode=S
F.setGroupNode=T
F.setHideAuthType=Q}
function Q(Z){F[n(Z)?'addClass':'removeClass']('hide_auth_type')
return F}
function R(Z){F.autounbind()
if(Z.name=='agents')T(Z)
else S(Z)}
function S(Z){var $$=Y([Z])
$$.setNodes([Z])}
function T(Z){N&&F.autounbind(N,'keys',U)
N=Z
N&&F.autobind(N,'keys',U)}
function U(){var Z=N.getKeys(),$$=[]
for(var $_=0,$a=Math.min(3,Z.length);$_<$a;$_++){$$.push(N.$(Z[$_]))}
V($$)}
function V(Z){var $$=Y(Z)
$$&&$$.setNodes(Z)}
function W(Z){var $$=Y(Z)
$$&&$$.setImages(Z)}
var X
function Y(Z){if(!(Z instanceof Array)||!Z.length)return
var $$=Math.min(Z.length,4),$_=M[$$-1]
if($$!==X){F.empty()
O=new $_(F)
X=$$}
return O}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Gravatar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"60px","height":"60px","position":"relative","overflow":"hidden","borderWidth":"$$avatarBorderWidth","borderStyle":"$$avatarBorderStyle","borderColor":"$$avatarBorderColor","borderRadius":"$$avatarRadius","boxShadow":"$$avatarShadow",".avatar":{"background":"#FFF"},"&.hide_auth_type":{".auth_type":{"display":"none !important"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Gravatar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Gravatar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_Button,null,null,[v(135)],{"addClass":"end_chat wide short"}],[b.__$$__jx_ui_Label,null,null,[v(135)],{"addClass":"end_chat_mobile"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('settings').$('end_chat_menu').$('enabled$bool'),L=J.$('ui').$('chat_window').$('menu_stack_name$string'),M=I.root.$('connection').$('message$string')
function N(){F.on('click',function(){L.update('end_chat_menu')})
F.autobind(K,'value',function(O){F.setDisplay(O?'':'none')})
F.autobind(M,'value',function(O){var P=!!O
F.setDisabled(P)})}
N()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={"**self":{"cursor":"default","&:hover":{"background":"transparent !important"},".end_chat":{"display":"block","textAlign":"center","cursor":"pointer","&.disabled":{"cursor":"default"}},".end_chat_mobile":{"display":"none"}},"&.mobile":{".end_chat":{"display":"none"},".end_chat_mobile":{"display":"block"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EndChat"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EndChat"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_UIController=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_PopoutController,z=b.__$$__meshim_widget_controllers_InstrumentationController,A=b.__$$__meshim_widget_utils_Utils,B=b.__$$__meshim_widget_utils_Mobile,C={UNDEFINED:'undefined',NONE:'none',BUTTON:'button',BANNER:'banner',WINDOW:'window'},D={NEW_CHAT_FORM:'new_chat_form',PRE_CHAT_OFFLINE_FORM:'pre_chat_offline_form',CHAT_PANEL:'chat_panel',POST_CHAT_FORM:'post_chat_form',COOKIE_FORM:'cookie_form',CARD_FORM:'card_form',AGENT_LIST:'agent_list',ABOUT_PANEL:'about_panel',RATING_PANEL:'rating_panel'},E={COOKIE_LAW:'cookie_law',REATTACHED:'reattached',REGISTERED:'registered',FAST_INIT:'fast_init'},F={ONLINE:'online',AWAY:'away',OFFLINE:'offline',BANNED:'banned'},G,H,I,J,K,L,M,N,O,P,Q={},R,S,T,U,V,W,X,Y={api_display:!1,api_stack:!1,api_bubble:!1},Z,$$,$_,$a,$b,$c,$d,$e,$f,$g,$h,$i,$j,$k,$l,$m,$n,$o,$p,$q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D=r.extend({init:$E})
function $E(){_c('UIController init')
if(Q.mobile&&Q.popout){B.hackFastButtons()}
A.hackTitleLocalization()
$F()
$D.userShowBadgeOrWindow=$P
$D.userShowWindow=$Q
$D.userHideWindow=$R
$D.userHideBanner=$S
$D.userHideBubble=$T
$D.showWindow=$U
$D.hideWindow=$V
$D.toggleWindow=$W
$D.showBanner=$X
$D.hideBanner=$Y
$D.showButton=$Z
$D.hideButton=$0
$D.hideAll=$1
$D.showBubble=$2
$D.hideBubble=$3
$D.resetBubble=$4
$D.setWindowUserHidden=$5
$D.setBannerUserHidden=$6
$D.setBubbleUserHidden=$7
$D.resetBubbleUserHidden=$8
$D.setHideWhenOffline=$9
$D.showMenu=_$
$D.showProfileMenu=__
$D.getAPIState=_a}
function $F(){R=!1
G=x.root
H=G.$('livechat')
I=H.$('settings')
J=I.$('theme')
K=H.$('ui')
L=K.$('chat_window')
M=K.$('chat_button')
$u=H.$('profile').$('logged_in$bool')
$v=H.$('profile').$('auth').$('type$string')
$w=I.$('login').$('allowed_types_count$int')
$x=H.$('settings').$('login').$('restrict_profile$bool')
$s=L.$('menu_stack_name$string')
$t=L.$('profile_menu').$('index$int')
N=K.$('popout$bool')
O=K.$('mobile$bool')
P=K.$('mockup$bool')
_b(N,'popout',function(){$L()
$K()})
_b(O,'mobile',function(){$L()
$K()})
_b(P,'mockup')
$_=G.$('connection').$('message$string')
_b($_,'connection_message',$K)
$a=G.$('connection').$('status$string')
_b($a,'connection_status',function(){if(i(Q.connection_status)&&Q.connection_status){if(!/disconnect|shutdown/.test(Q.connection_status)){z.fromRefTime('conn_status_'+Q.connection_status,0.25)}}
$G()
$K()})
$b=H.$('account').$('status$string')
_b($b,'account_status',function(){$L()
$K()})
$c=H.$('channel').$('chatting$bool')
$o=K.$('chat_window').$('pre_chat_form').$('submitted$bool')
_b($c,'chatting',function(){$G()
$K()})
$d=H.$('channel').$('served$bool')
_b($d,'chat_served',$K)
$e=I.$('behavior').$('do_not_display$bool')
$f=I.$('banner').$('enabled$bool')
$h=I.$('bubble').$('enabled$bool')
$k=I.$('chat_button').$('hide_when_offline$bool')
$l=L.$('user_hidden$bool')
$m=L.$('user_hidden_banner$bool')
$n=L.$('user_hidden_bubble$bool')
$g=J.$('chat_window').$('use_banner$bool')
$j=M.$('bubble').$('display$bool')
$i=J.$('chat_button').$('use_bubble$bool')
_b($e,'do_not_display',$K)
_b($f,'banner_enabled',$K)
_b($h,'bubble_enabled',$K)
_b($k,'hide_when_offline',$K)
_b($l,'chat_window_user_hidden',$K)
_b($m,'banner_user_hidden',$K)
_b($n,'bubble_user_hidden',$L)
_b($g,'use_banner',$K)
_b($j,'bubble_display',$L)
_b($i,'use_bubble',$L)
$p=H.$('settings').$('forms').$('pre_chat_form').$('required$bool')
$p.bindValue($H)
$o.bindValue($H)
$y=M.$('display$bool')
$z=L.$('display$bool')
$A=L.$('main_stack_name$string')
$y.bindValue($I)
$z.bindValue($I)
$A.bindValue($I)
$r=H.$('agents')
$r.bindKeys($J)
R=!0}
function $G(){if(Q.chatting&&Q.connection_status==E.REATTACHED){_c('UIController: setting pre_chat_form_submitted to true')
$o.update(!0)}}
function $H(){var _e=$p.getValue(),_f=$o.getValue(),_g=_e&&!_f
if(_g==$q)return
$q=_g
$K()}
function $I(){var _e=$y.getValue(),_f=$z.getValue(),_g=$A.getValue(),_h,_i
if(k(_e)&&k(_f)){_h=C.UNDEFINED}
else if(!_f){_h=_e?C.BUTTON:C.NONE}
else{if(_g==D.NEW_CHAT_FORM){_h=C.BANNER}
else{_h=C.WINDOW}}
_i=_g
if(_h==$B&&_i==$C)return
$B=_h
$C=_i
$K()}
function $J(){if(Q.mockup)return
var _e=$b.getValue(),_f=$r.getKeys().length,_g=$c.getValue()
if(_g&&!_f&&_e==F.OFFLINE){x.livechat.endChat()}}
function $K(){if(!R){_c('UIController update: abort - binding not complete')
return}
if(W){_c('UIController update: abort - display settings updating')
return}
if(U){_c('UIController update: abort - api updating')
return}
if(V){_c('UIController update: abort - user updating')
return}
if(S){_c('UIController update: abort - updating loop')
return}
S=!0
var _e=[]
if(Q.account_status==F.BANNED){_d(_e,F.BANNED)
if(Q.popout){_d(_e,'popout')
$M(C.WINDOW)
$N([D.PRE_CHAT_OFFLINE_FORM])}
else{_d(_e,'!popout')
$M(C.UNDEFINED)}}
else if(Y.api_display&&Y.api_stack){_d(_e,'api_display && api_stack')}
else if(Q.do_not_display&&!Q.popout&&!Y.api_display&&!Q.chatting&&$B==C.UNDEFINED){_d(_e,'do not display, !popout, !api_display')}
else if(Q.mobile&&!Q.popout){_d(_e,'mobile')
if(Y.api_display){_d(_e,'api_display')}
else{_d(_e,'!api_display')
if($B==C.NONE){_d(_e,'none')}
else{_d(_e,'!none')
if(Q.do_not_display||(Q.account_status==F.OFFLINE&&Q.hide_when_offline)){_d(_e,'do_not_display || (account_status == offline && hide_when_offline)')
$M(C.UNDEFINED)}
else{_d(_e,'!(do_not_display || (account_status == offline && hide_when_offline))')
$M(C.BUTTON)}}}}
else if(Q.connection_status==E.COOKIE_LAW){_d(_e,'cookie_law')
if(Y.api_display){_d(_e,'api_display')}
else if($B==C.NONE){_d(_e,'none')}
else{if(Q.popout){_d(_e,'popout')
$M(C.WINDOW)}
else{_d(_e,'!popout')
if($B==C.UNDEFINED){_d(_e,'undefined')
$M(C.BUTTON)}
else{_d(_e,'!undefined')}}}
$N([D.COOKIE_FORM])}
else if(Q.connection_status==E.REGISTERED||Q.connection_status==E.REATTACHED||Q.connection_message==E.FAST_INIT){_d(_e,'registered/reattached/fast_init')
if(Q.chatting){_d(_e,'chatting')
if(Y.api_display){_d(_e,'api_display')}
else{_d(_e,'!api_display')
if(Q.chat_window_user_hidden){_d(_e,'user hidden')
if(Q.popout){_d(_e,'popout')
$M(C.WINDOW)}
else{_d(_e,'!popout')
if($B==C.UNDEFINED){_d(_e,'undefined')
$M(C.BUTTON)}
else{_d(_e,'!undefined')}}}
else{_d(_e,'!user hidden')
$M(C.WINDOW)}}
if(Q.chat_served){$N([D.CHAT_PANEL,D.AGENT_LIST,D.CARD_FORM,D.ABOUT_PANEL,D.RATING_PANEL])}
else{$N([D.CHAT_PANEL,D.AGENT_LIST,D.CARD_FORM,D.ABOUT_PANEL])}}
else if(Q.account_status==F.ONLINE||Q.account_status==F.AWAY){_d(_e,'online/away')
if(Y.api_display){_d(_e,'api_display')
_f()}
else if(Q.popout||$B==C.WINDOW){_d(_e,'popout/window')
if(Q.popout){_d(_e,'popout')
$M(C.WINDOW)}
else{_d(_e,'window')}
_f()}
else if($B==C.NONE){_d(_e,'none')}
else if(Q.banner_enabled&&Q.use_banner){_d(_e,'show banner')
switch($B){case C.UNDEFINED:_d(_e,'none')
if(Q.banner_user_hidden){_d(_e,'user hidden')
$M(C.BUTTON)}
else{_d(_e,'!user hidden')
$M(C.BANNER)}
break
case C.BUTTON:_d(_e,'button')
if(Q.banner_user_hidden){_d(_e,'user hidden')}
else{_d(_e,'!user hidden')
$M(C.BANNER)}
break
case C.BANNER:_d(_e,'banner')
break}}
else{_d(_e,'!show banner')
switch($B){case C.UNDEFINED:_d(_e,'undefined')
$M(C.BUTTON)
break
case C.BUTTON:_d(_e,'button')
break
case C.BANNER:_d(_e,'banner')
$M(C.BUTTON)
break}}}
else if(Q.account_status==F.OFFLINE){_d(_e,F.OFFLINE)
if(Y.api_display){_d(_e,'api_display')}
else if(Q.popout){_d(_e,'popout')
$M(C.WINDOW)}
else if($B==C.NONE){_d(_e,'none')}
else if(Q.hide_when_offline){_d(_e,'hide when offline')
$M(C.UNDEFINED)}
else{_d(_e,'!hide when offline')
if($B==C.WINDOW){_d(_e,'window')}
else{_d(_e,'!window')
$M(C.BUTTON)}}
$N([D.PRE_CHAT_OFFLINE_FORM])}}
_c('UIController update: '+(_e.join(' > ')||'no path'))
S=!1
function _f(){if($q){_d(_e,'pre_chat_form_required')
$N([D.PRE_CHAT_OFFLINE_FORM])}
else{_d(_e,'!pre_chat_form_required')
$N([D.CHAT_PANEL,D.AGENT_LIST,D.CARD_FORM,D.POST_CHAT_FORM,D.ABOUT_PANEL])}}}
function $L(){if(!R){_c('UIController Bubble update: abort - binding not complete')
return}
if(X){_c('UIController Bubble update: abort - bubble settings updating')
return}
if(U){_c('UIController Bubble update: abort - api updating')
return}
if(V){_c('UIController Bubble update: abort - user updating')
return}
if(T){_c('UIController Bubble update: abort - updating loop')
return}
T=!0
var _e=[]
if(Q.mobile||Q.popout){_d(_e,'mobile || popout')
$O(!1)}
else{_d(_e,'!mobile && !popout')
if(Q.use_bubble){_d(_e,'use_bubble')
if(Y.api_bubble){_d(_e,'bubble_api')}
else{_d(_e,'!bubble_api')
if(Q.bubble_enabled){_d(_e,'bubble_enabled')
if(Q.account_status==F.ONLINE||Q.account_status==F.AWAY){_d(_e,'online || away')
if(Q.bubble_user_hidden){_d(_e,'user_hidden_bubble')
$O(!1)}
else{_d(_e,'!user_hidden_bubble')
if(k(Q.bubble_display)){_d(_e,'undefined')
$O(!0)}
else{_d(_e,'!undefined')}}}
else{_d(_e,F.OFFLINE)
$O(a)}}
else{_d(_e,'!bubble_enabled')
$O(!1)}}}
else{_d(_e,'!use_bubble')
$O(a)}}
_c('UIController Bubble update: '+(_e.join(' > ')||'no path'))
T=!1}
function $M(_e){_c('UIController setDisplay: '+_e)
Z=$z.getValue()
W=!0
switch(_e){case C.UNDEFINED:$y.update(a)
$z.update(a)
break
case C.NONE:$y.update(!1)
$z.update(!1)
break
case C.BUTTON:$y.update(!0)
$z.update(!1)
break
case C.BANNER:if($A.getValue()!=D.NEW_CHAT_FORM){$$=$A.getValue()
$A.update(D.NEW_CHAT_FORM)}
$y.update(!1)
$z.update(!0)
break
case C.WINDOW:if($A.getValue()==D.NEW_CHAT_FORM){$N($$?[$$]:[D.PRE_CHAT_OFFLINE_FORM,D.CHAT_PANEL,D.POST_CHAT_FORM,D.COOKIE_FORM,D.CARD_FORM,D.AGENT_LIST,D.RATING_PANEL])
$$=null}
$y.update(!1)
$z.update(!0)
break}
if(!U){if(Z&&_e!=C.WINDOW){$D.fire('API:window:hide')}
else if(!Z&&_e==C.WINDOW){$D.fire('API:window:show')}}
W=!1}
function $N(_e){if(!_e||!_e.length)return
if(f($C,_e)==-1){$A.update(_e[0])}}
function $O(_e){_c('UIController setBubble: '+_e)
X=!0
$j.update(_e)
X=!1}
function $P(){if(Q.mobile)return
V=!0
var _e=$A.getValue()
if(Q.banner_enabled&&_e==D.NEW_CHAT_FORM&&Q.use_banner){$M(C.BANNER)}
else{$M(C.WINDOW)}
Y.api_display=!1
Y.api_stack=!1
V=!1
$K()}
function $Q(){if(Q.mobile||$B==C.WINDOW)return
V=!0
$M(C.WINDOW)
Y.api_display=!1
Y.api_stack=!1
V=!1
$K()}
function $R(){if(Q.mobile||$B==C.BUTTON)return
V=!0
$D.setWindowUserHidden()
if(Q.do_not_display){$M(C.NONE)}
else{$M(C.BUTTON)}
Y.api_display=!1
Y.api_stack=!1
V=!1
$K()}
function $S(){if(Q.mobile||$B==C.BUTTON)return
V=!0
$D.setBannerUserHidden()
if(Q.do_not_display){$M(C.NONE)}
else{$M(C.BUTTON)}
Y.api_display=!1
Y.api_stack=!1
V=!1
$K()}
function $T(){if(Q.mobile)return
V=!0
$D.setBubbleUserHidden()
$O(!1)
Y.api_bubble=!1
V=!1
$L()}
function $U(){_c('API update: showWindow')
if(Q.mobile){y.openPopout(!0)}
else{U=!0
$M(C.WINDOW)
Y.api_display=C.WINDOW
U=!1
$K()}}
function $V(){if(Q.mobile)return
_c('API update: hideWindow')
U=!0
if(Q.do_not_display){$M(C.NONE)
Y.api_display=C.NONE}
else{$M(C.BUTTON)
Y.api_display=C.BUTTON}
U=!1
$K()}
function $W(){if(Q.mobile)return
_c('API update: toggleWindow')
if($B==C.WINDOW){$D.hideWindow()}
else{$D.showWindow()}}
function $X(){if(Q.mobile||!Q.use_banner)return
_c('API update: showBanner')
U=!0
$M(C.BANNER)
Y.api_display=C.BANNER
Y.api_stack=C.BANNER
U=!1
$K()}
function $Y(){if(Q.mobile)return
_c('API update: hideBanner')
U=!0
if(Q.do_not_display){$M(C.NONE)
Y.api_display=C.NONE}
else{$M(C.BUTTON)
Y.api_display=C.BUTTON}
Y.api_stack=!1
U=!1
$K()}
function $Z(){_c('API update: showButton')
U=!0
$M(C.BUTTON)
Y.api_display=C.BUTTON
U=!1
$K()}
function $0(){_c('API update: hideButton')
U=!0
if(Q.mobile){Y.api_display=C.NONE
$M(C.NONE)}
else{Y.api_display=C.WINDOW
$M(C.WINDOW)}
U=!1
$K()}
function $1(){_c('API update: hideAll')
U=!0
$M(C.NONE)
Y.api_display=C.NONE
U=!1
$K()}
function $2(){if(Q.mobile)return
_c('API update: showBubble')
U=!0
$O(!0)
Y.api_bubble=!0
U=!1
$L()}
function $3(){if(Q.mobile)return
_c('API update: hideBubble')
U=!0
$O(!1)
Y.api_bubble=!0
U=!1
$L()}
function $4(){if(Q.mobile)return
_c('API update: resetBubble')
U=!0
$D.resetBubbleUserHidden()
$O(!0)
Y.api_bubble=!0
U=!1
$L()}
function $5(){$l.update(!0)}
function $6(){$m.update(!0)}
function $7(){$n.update(!0)}
function $8(){$n.update(!1)}
function $9(_e){$k.update(_e)}
function _$(_e){$s.update(_e)}
function __(){if($x.getValue())return
$D.showMenu('profile_menu')
$t.update($u.getValue()?($v.getValue()?1:2):(Q.mobile?2:($w.getValue()?0:2)))}
function _a(){return Y}
function _b(_e,_f,_g){if(!_e||!h(_e.bindValue))return
_e.bindValue(function(_h){if(Q[_f]==_h)return
Q[_f]=_h
h(_g)&&_g()})}
function _c(_e){typeof _e}
function _d(_e,_f){typeof _e
typeof _f}
if((typeof $D==='function')&&$D.prototype&&!$D.__jx__no_fqname){$D.prototype.__jx__fqname_chain=[($D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_UIController"].join('')
$D.prototype.__jx__fqname="meshim_widget_controllers_UIController"}
return $D})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_Label,null,null,[],{"addClass":"email"}]],{"id":"localizer","delimiter":"@@@@"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__localizer')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_Utils,L=3100,M=K.isStyleSupported('transition')
if(q.isFF)M=!1
var N=J.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),O,P=J.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),Q
function R(){F.autobind(N,'value',function(T){O=T
if(Q)window.clearTimeout(Q)
if(T==F.getName()){M&&l(function(){F.addClass('fade_out')})
Q=window.setTimeout(S,L)}
else{M&&l(function(){F.removeClass('fade_out')})}})
F.autobind(P,'value',function(T){G.setContent(v(42).replace('<email>',T))})
K.onTransitionEnd(F,F,S)}
function S(){if(O=='email_transcript_notification')N.update('')}
R()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={"**self":{"transition":"opacity 0.5s linear 2.5s","opacity":1,"&.fade_out":{"opacity":0}},".email":{"fontWeight":"bold"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptNotification"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptNotification"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Input=(function(){var x=b.__$$__jx_ui_Input,y=x,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_widgets_input_InvalidIcon,C=b.__$$__meshim_widget_utils_BindClass
x=function(D,E,F,G,H){if(!(this instanceof x))return new x(D,E,F,G,H)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,D,E,F,G,H)
x.__constructor.call(this)}
x.__constructor=function(){C.mobile(this)
C.rtl(this)
var D=A.root.$('livechat').$('ui').$('mobile$bool').getValue(),E=this
if(D&&this.hasClass('mobile_error_icon')){this.pContainer=new z(this.parentNode,null,null,null,{position:"relative"})
this.pContainer.appendChild(this)
this.invalidIcon=new B(this.pContainer)
this.on('blur',F)
F()}
function F(){l(G)}
function G(){E.invalidIcon.setDisplay(E.getValidity()?'none':'')}}
x.__jx__jcss={"**self":{"display":"block","appearance":"none","*overflow":"visible","width":"100%","color":"$$inputColor","background":"$$inputBg","padding":"$$inputPadding","borderWidth":"$$inputBorderWidth","borderStyle":"$$inputBorderStyle","borderColor":"$$inputBorderColor","borderRadius":"$$inputRadius","boxShadow":"$$inputShadow"},"&:focus, &.focus":{"color":"$$inputFocusColor","background":"$$inputFocusBg","borderColor":"$$inputFocusBorderColor","boxShadow":"$$inputFocusShadow","outline":"none"},"&::placeholder":{"color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"},"&.invalid":{"color":"$$inputInvalidColor","background":"$$inputInvalidBg","borderColor":"$$inputInvalidBorderColor","boxShadow":"$$inputInvalidShadow"},"&.invalid.mobile":{"paddingRight":"30px"},"&.invalid.rtl.mobile":{"paddingRight":"$$inputPadding","paddingLeft":"30px"},"&.unstyled":{"border":"none","background":"transparent","boxShadow":"none"},"&.standalone":{"marginTop":"10px","marginBottom":"5px"}}
x.prototype=e(y.prototype)
x.prototype.__jx__super=y
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Input"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Input"}
return x})()
b.__$$__meshim_widget_widgets_form_RadioButtonMultiple=(function(){var x=b.__$$__jx_ui_RadioButton,y=b.__$$__meshim_widget_widgets_form_InputMultiple
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
this.optionConstructor=x
this.inputSuffix='radio'
y.call(this,A,B,C,D,E)}
z.prototype=e(y.prototype)
z.prototype.setValue=function(A){for(var B=0,C=this.options.length;B<C;B++){if(this.options[B].getValue()==A){this.options[B].setChecked(!0);(this.options[B].container||this.options[B]).setDisplay('')
this.labels[B].setDisplay('').addClass('label_checked')}
else{this.options[B].setChecked(!1)
if(this.readOnly){(this.options[B].container||this.options[B]).setDisplay('none')
this.labels[B].setDisplay('none').removeClass('label_checked')}}}}
z.prototype.getValue=function(){for(var A=0,B=this.options.length;A<B;A++)if(this.options[A].getChecked())return this.options[A].getValue()}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_RadioButtonMultiple"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_form_RadioButtonMultiple"}
return z})()
b.__$$__meshim_widget_widgets_Submit=(function(){var x=b.__$$__meshim_widget_widgets_Button
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
if(!D)D={}
D.tagName||(D.tagName='input')
D.type||(D.type='submit')
x.call(this,z,A,B,C,D)
this.setValue(this._value)
var E=this
this._setValue=function(){E.setValue(E._value)}
v&&v.onLanguage&&v.onLanguage(this._setValue)}
y.__jx__jcss={"**self":{}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
y.prototype.setValue=function(z){this._value=z
return x.prototype.setValue.call(this,z)}
y.prototype.destroy=function(){v&&v.unLanguage&&v.unLanguage(this._setValue)
x.prototype.destroy.call(this)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Submit"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_Submit"}
return y})()
b.__$$__meshim_widget_widgets_Select=(function(){var x=b.__$$__jx_ui_PrettySelect,y=b.__$$__meshim_widget_widgets_Input,z=b.__$$__meshim_widget_widgets_IconFont,A=b.__$$__meshim_widget_utils_BindClass
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!B.__jx__jcss_generated){u.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
if(!G)G={}
G.tagName||(G.tagName='select')
x.call(this,C,D,E,F,G)
if(this.container){this.container.addClass(this.__jx__fqname)
this.iconFont=new z(this.container,null,null,null,{addClass:'select_icon',icon:'arrow_down'})
this.container.insertBefore(this.iconFont,this.container.getFirstChild())
A.mobile(this.container)
A.rtl(this.container)}
y.__constructor.call(this)}
B.__jx__jcss={"&.mobile.invalid, &.rtl.mobile.invalid":{"paddingRight, paddingLeft":"$$inputPadding"},".select_placeholder":{"overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},".select_icon":{"float":"right","marginTop":"3px"},"&.rtl .select_icon":{"float":"left"},"&.mobile":{".select_placeholder":{"lineHeight":"26px"},".select_icon":{"marginTop":"8px"}}}
B.prototype=e(x.prototype)
B.prototype.__jx__super=y
B.prototype.setValidity=function(C){if(this.container){C=n(C)
this.container[C?'removeClass':'addClass']('invalid')}
return x.prototype.setValidity.apply(this,arguments)}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Select"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_Select"}
return B})()
b.__$$__meshim_widget_controllers_liveChatAPI_Badge=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C
A.init=function(E){B=E
C=x.root
A.setLayout=(function(){var I=['image_right','image_left','text_only','image_only'],J=I.join(', ')
return B.generateLimitedFunction('badge.setLayout',1,function(K){function L(){if(!K||f(K,I)==-1){window.console&&window.console.log('Invalid layout. Valid layouts: '+J)
return}
D({layout$string:K})}
z.callOnFastInit(L,!0)
z.callOnRegistered(L,!0)})})()
A.setImage=B.generateLimitedFunction('badge.setImage',1,function(I){function J(){I=I||''
if(!i(I)){window.console&&window.console.log('Zopim: badge.setImage() expects passed argument to be a string')
return}
D({image_path$string:I})}
z.callOnFastInit(J,!0)
z.callOnRegistered(J,!0)})
A.setColor=B.generateLimitedFunction('badge.setColor',1,function(I){return B.theme.setColor(I,'badge')})
function F(I){function J(){I=I||''
if(!i(I)){window.console&&window.console.log('Zopim: badge.setText() expects passed argument to be a string')
return}
D({text$string:I})}
z.callOnFastInit(J,!0)
z.callOnRegistered(J,!0)}
A.setText=F
function G(){function I(){y.showBanner()}
z.callOnFastInit(I)
z.callOnRegistered(I)}
A.show=G
function H(){function I(){y.hideBanner()}
z.callOnFastInit(I)
z.callOnRegistered(I)}
A.hide=B.generateLimitedFunction('badge.hide',1,H)}
function D(E){function F(){z.saveAPISettings({banner:E})
C.$('livechat').$('settings').$('banner').update(E)}
z.callOnFastInit(F,!0)
z.callOnRegistered(F,!0)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Badge"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Badge"}
return A})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[v(105)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":v(109)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[v(110)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(111)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary"}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_controllers_CookieLaw,M=K.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function N(){G.on('submit',function(O){O.preventDefault()
L.setUserChoice(!1)})
H.on('click',function(){M.update('chat_panel')})}
N()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Decline"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Decline"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Window=(function(){var x=b.__$$__meshim_widget_controllers_CookieLaw,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_UIController,A=b.__$$__meshim_widget_controllers_PopoutController,B=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,C={},D,E
C.init=function(O){D=O
E=y.root
C.setColor=D.generateDeprecatedFunction('window.setColor','$zopim.livechat.theme.setColor',function(){return D.theme.setColor.apply(this,arguments)})
C.setSize=D.generateLimitedFunction('window.setSize',1,function(R){if(!i(R)||!R){window.console&&window.console.log('Zopim: window.setSize expects passed argument to be a non-empty string')
return}
function S(){B.saveAPISettings({theme:{chat_window:{size$string:R}}})
E.$('livechat').$('settings').$('theme').$('chat_window').update({size$string:R})}
B.callOnFastInit(S)
B.callOnRegistered(S)})
function P(){function R(){z.showWindow()}
B.callOnFastInit(R)
B.callOnRegistered(R)}
C.show=P
function Q(){function R(){z.hideWindow()}
B.callOnFastInit(R)
B.callOnRegistered(R)}
C.hide=Q}
function F(O){if(!h(O))return
z.on('API:window:show',function(){O()})}
C.onShow=F
function G(O){if(!h(O))return
z.on('API:window:hide',function(){O()})}
C.onHide=G
function H(O){O=O&&O.toString()
if(!i(O)){window.console&&window.console.log('Zopim: window.setTitle expects passed argument to be a string')
return}
function P(){B.saveAPISettings({chat_window:{title_bar:{title$string:O}}})
E.$('livechat').$('settings').$('chat_window').$('title_bar').update({title$string:O})}
B.savePopoutAPICalls('window.setTitle',[O])
B.callOnFastInit(P)
B.callOnRegistered(P)}
C.setTitle=H
function I(){B.callOnRegistered(function(){z.toggleWindow()})}
C.toggle=I
function J(){return E.$('livechat').$('ui').$('chat_window').$('display$bool').getValue()}
C.getDisplay=J
function K(O){O=parseInt(O,10)
if(isNaN(O)||O<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function P(){B.saveAPISettings({theme:{chat_window:{v_offset$int:O}}})
E.$('livechat').$('settings').$('theme').$('chat_window').update({v_offset$int:O})}
B.callOnFastInit(P,!0)
B.callOnRegistered(P,!0)}
C.setOffsetBottom=C.setOffsetVertical=K
function L(O){O=parseInt(O,10)
if(isNaN(O)||O<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function P(){B.saveAPISettings({theme:{chat_window:{h_offset$int:O}}})
E.$('livechat').$('settings').$('theme').$('chat_window').update({h_offset$int:O})}
B.callOnFastInit(P,!0)
B.callOnRegistered(P,!0)}
C.setOffsetHorizontal=L
function M(O){if(!i(O)){window.console&&window.console.log('Zopim: window.setPosition() expects passed argument to be a string')
return}
function P(){B.saveAPISettings({theme:{chat_window:{position$string:O}}})
E.$('livechat').$('settings').$('theme').$('chat_window').update({position$string:O})}
B.callOnFastInit(P,!0)
B.callOnRegistered(P,!0)}
C.setPosition=M
function N(){if(h(A.isReady)&&A.isReady()){if(x.isCookieDenied()){if(window.confirm(v(0)+'\n\n'+v(1)+': https://www.zopim.com/privacy#cookie')){x.setUserChoice(!0)
return A.openPopout(!0)}}
else{return A.openPopout(!0)}}
else{return !1}}
C.openPopout=N
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Window"].join('')
C.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Window"}
return C})()
b.__$$__meshim_widget_widgets_TextArea=(function(){var x=b.__$$__jx_ui_TextArea,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextArea"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TextArea"}
return x})()
b.__$$__meshim_widget_widgets_ConnAwareSubmit=(function(){var x=b.__$$__meshim_widget_widgets_Submit,y=b.__$$__meshim_widget_controllers_DataController
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
x.call(this,A,B,C,D,E)
var F=y.root.$('connection').$('message$string'),G=this
G.autobind(F,'value',function(H){G.setDisabled(!!H)})}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=x
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ConnAwareSubmit"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_ConnAwareSubmit"}
return z})()
b.__$$__meshim_widget_widgets_ratingBar_emoticon_Emoticon=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ButtonBar,null,null,[[b.__$$__meshim_widget_widgets_ratingBar_emoticon_Good,"good_option",null,[],{"id":"good_option","addClass":"rating_button"}],[b.__$$__meshim_widget_widgets_ratingBar_emoticon_Bad,"bad_option",null,[],{"id":"bad_option","addClass":"rating_button"}]],{"noMangle":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__good_option'),H=w.get(z+'__bad_option')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_utils_BindClass,L={GOOD:'good',BAD:'bad'},M={GOOD:v(147),BAD:v(148),REMOVE:v(149)}
function N(){F.updateTitle=O
G.setValue(L.GOOD)
H.setValue(L.BAD)
P()
K.mobile(F)}
function O(Q){if(Q===L.GOOD){G.setTitle(M.REMOVE)
H.setTitle(M.BAD)}
else if(Q===L.BAD){H.setTitle(M.REMOVE)
G.setTitle(M.GOOD)}
else{P()}}
function P(){G.setTitle(M.GOOD)
H.setTitle(M.BAD)}
N()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_emoticon_Emoticon
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ButtonBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ButtonBar
x.__jx__jcss={".rating_button":{"borderRadius":"50%",".rating_icon":{"display":"inline"},"&.active":{"backgroundColor":"$$chatRatingsEmoticonActive","cursor":"pointer"}},"&.small":{".rating_button":{"width, height":"24px","border":"1px solid $$chatRatingsEmoticonColor","padding":"6px 3px 3px",".rating_icon":{"lineHeight":1.1},"&:first-child":{"marginRight":"3px"}}},"&.big":{".rating_button":{"width, height":"50px","border":"2px solid $$chatRatingsEmoticonColor","fontSize":"25px","paddingTop":"14px","&:first-child":{"marginRight":"10px"}}},"&.desktop":{".rating_button.active:hover":{"backgroundColor":"$$chatRatingsEmoticonHover"}},"&.mobile":{"&.small .rating_button":{"width, height":"40px","fontSize":"18px","padding":"12px 3px 3px","&:first-child":{"marginRight":"5px"}},"&.big":{".rating_button":{"width, height":"62px","fontSize":"26px","paddingTop":"20px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_emoticon_Emoticon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_emoticon_Emoticon"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ratingBar_thumb_Thumb=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ButtonBar,null,null,[[b.__$$__meshim_widget_widgets_ratingBar_thumb_Button,"good_option",null,[],{"id":"good_option","type":"thumbs_up","addClass":"rating_button"}],[b.__$$__meshim_widget_widgets_ratingBar_thumb_Button,"bad_option",null,[],{"id":"bad_option","type":"thumbs_down","addClass":"rating_button"}]],{"noMangle":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__good_option'),H=w.get(z+'__bad_option')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_utils_BindClass,L={GOOD:'good',BAD:'bad'},M={GOOD:v(147),BAD:v(148),REMOVE:v(149)}
function N(){F.updateTitle=O
G.setValue(L.GOOD)
H.setValue(L.BAD)
P()
K.mobile(F)}
function O(Q){if(Q===L.GOOD){G.setTitle(M.REMOVE)
H.setTitle(M.BAD)}
else if(Q===L.BAD){H.setTitle(M.REMOVE)
G.setTitle(M.GOOD)}
else{P()}}
function P(){G.setTitle(M.GOOD)
H.setTitle(M.BAD)}
N()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_thumb_Thumb
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ButtonBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ButtonBar
x.__jx__jcss={".rating_button":{".rating_icon":{"display":"inline-block","verticalAlign":"middle"},"color":"$$chatRatingsThumbLight","&.active":{"backgroundColor":"$$chatRatingsThumbActive","border":"1px solid $$chatRatingsThumbBGHover","borderRadius":"5px","color":"$$chatRatingsThumbDark","cursor":"pointer"}},"&.small":{".rating_button":{"width, height":"24px","fontSize":"18px",".rating_icon":{"lineHeight":"22px","paddingLeft":"1px"},"&:first-child":{"marginRight":"3px"}}},"&.big":{".rating_button":{"width, height":"50px","fontSize":"40px",".rating_icon":{"lineHeight":"48px"},"&:first-child":{"marginRight":"10px"}}},"&.desktop":{".rating_button.active:hover":{"color":"$$chatRatingsThumbLight"}},"&.mobile":{"&.small .rating_button":{"width, height":"40px","fontSize":"25px","padding":"6px 3px 3px","&:first-child":{"marginRight":"5px"}},"&.big":{".rating_button":{"width, height":"62px","fontSize":"40px","paddingTop":"12px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_thumb_Thumb"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_thumb_Thumb"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_Rating=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"rating_msg",null,[],{"id":"rating_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_Button,"leave_a_comment",null,[v(36)],{"id":"leave_a_comment","addClass":"leave_a_comment"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__rating_msg'),H=w.get(z+'__leave_a_comment')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_utils_Strings,L=b.__$$__meshim_widget_controllers_DataController,M=K.chat_log['chat.rating'],N=L.root.$('livechat'),O=N.$('features').$('rating$bool'),P=N.$('settings').$('rating').$('enabled$bool'),Q=N.$('channel').$('start$time'),R=N.$('channel').$('chatting$bool'),S=N.$('channel').$('last_comment_ts$int'),T=N.$('ui').$('chat_window').$('main_stack_name$string'),U
function V(){F.setDataNode=$$
F.disableLeaveComment=Z
F.autobind(O,'value',X)
F.autobind(P,'value',X)
F.autobind(Q,'value',Y)
F.autobind(R,'value',Y)
F.autobind(S,'value',Y)
if(x.last_instance)x.last_instance.disableLeaveComment()
x.last_instance=F
H.on('click',W)}
function W(){T.update('rating_panel')}
function X(){var $b=O.getValue()&&P.getValue()
F.setDisplay($b?'':'none')}
function Y(){if(!H||!U)return
var $b=Q.getValue(),$c=R.getValue(),$d=U.getValue('timestamp$int'),$e=$c&&$d>$b,$f=S.getValue(),$g=$f&&$d<=$f
if(!$e||$g){Z()}}
function Z(){if(!H)return
F.autounbind(S,'value',Y)
H.un('click',W)
H.destroy()
H=null}
function $$($b){if(U===$b)return
if(U)F.autounbind(U,'value',$_)
U=$b
if($b)F.autobind(U,'value',$_)}
function $_(){var $b=U.getValue()
if(!$b)return
var $c=$b['new_rating$string']
G.setText($a($c))
Y()}
function $a($b){if(!$b){return M['cancel']}
else{return M[$b]}}
V()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_Rating
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"padding":"0px 10px",".leave_a_comment":{"margin":"5px 0px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_Rating"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_Rating"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_TitleBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"title_text",null,[],{"id":"title_text","addClass":"title_text"}],[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text","addClass":"status_text","display":"none"}]],{"addClass":"title"}],[b.__$$__jx_ui_Widget,"icons",null,[[b.__$$__meshim_widget_widgets_IconFont,"popout_button",null,[],{"id":"popout_button","icon":"popout","title":v(143)}],[b.__$$__meshim_widget_widgets_IconFont,"minimize_button",null,[],{"id":"minimize_button","icon":"minimize","title":v(25),"addClass":"last_child"}]],{"id":"icons","addClass":"icons"}]],{"class":"title_bar","selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__title_text'),H=w.get(z+'__status_text'),I=w.get(z+'__icons'),J=w.get(z+'__popout_button'),K=w.get(z+'__minimize_button')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=b.__$$__meshim_widget_controllers_PopoutController,P=b.__$$__meshim_widget_controllers_UIController,Q=b.__$$__meshim_widget_utils_Strings,R=b.__$$__meshim_widget_utils_BindClass,S=N.root.$('livechat'),T=S.$('settings').$('chat_window').$('title_bar').$('title$string'),U=S.$('settings').$('chat_window').$('title_bar').$('status_messages'),V,W=S.$('settings').$('popout').$('enabled$bool'),X,Y,Z=S.$('ui').$('popout$bool'),$$,$_=S.$('account').$('status$string'),$a,$b=S.$('settings').$('theme').$('chat_window').$('title_bar').$('hide_minimize$bool'),$c,$d=S.$('settings').$('theme').$('chat_window').$('title_bar').$('hide_popout$bool'),$e
F.setHidePopout=function($j){Y=n($j)
$g()}
function $f(){R.mobile(F)
R.rtl(F)
R.windowPosition(F)
F.autobind(Z,'value',function($j){$$=$j
$g()
$h()
F[$j?'addClass':'removeClass']('title_bar_popout')})
F.autobind(T,'value',function(){G.setText(Q.get(T))})
F.autobind(U,'value',function(){V=U.getValue()
$i()})
F.autobind($_,'value',function($j){$a=$j
$i()})
F.autobind(W,'value',function($j){X=$j
$g()})
F.autobind($b,'value',function($j){$c=$j
$h()})
F.autobind($d,'value',function($j){$e=$j
$g()})
I.on('mousedown',function($j){$j.stopPropagation()})
J.on('click',function(){O.openPopout(!0)
P.userHideWindow()})
K.on('click',function(){P.userHideWindow()})}
function $g(){var $j=X&&!Y&&!$$&&!$e&&!q.bugs.noBoxSizing
J.setDisplay($j?'':'none')}
function $h(){var $j=$c||$$
K.setDisplay($j?'none':'')
if($j){J.addClass('last_child')}
else{J.removeClass('last_child')}}
function $i(){if(!V)return
H.setText(Q.get(U.$$($a+'$string')))}
$f()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_TitleBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width":"100%","overflow":"hidden","zIndex":10,"height":"$$titleBarHeight","color":"$$titleBarColor","background":"$$titleBarBg","&.title_bar_popout":{"cursor":"default"}},".border_overlay":{"borderWidth":"$$titleBarBorderWidth","borderStyle":"$$titleBarBorderStyle","borderColor":"$$titleBarBorderColor"},".title":{"whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","cursor":"inherit","textAlign":"$$titleBarTextAlign","fontSize":"$$titleBarFontSize","lineHeight":"$$titleBarHeight","fontWeight":"$$titleBarFontWeight",".title_text, .status_text":{"cursor":"inherit"},".title_text":{"display":["inline","$$titleBarTitleDisplay"]},".status_text":{"display":["none","$$titleBarStatusDisplay"]}},"&.ltr .title":{"paddingLeft":"$$titleBarPaddingBefore","paddingRight":"$$titleBarPaddingAfter"},"&.rtl .title":{"paddingLeft":"$$titleBarPaddingAfter","paddingRight":"$$titleBarPaddingBefore"},".icons":{"position":"absolute","cursor":"default","color":"$$titleBarIconsColor","fontSize":"$$fontSizeXS",".meshim_widget_widgets_IconFont":{"display":"inline-block","cursor":"pointer","textAlign":"center","paddingRight, paddingLeft":"6px","paddingTop":"2px","verticalAlign":"middle","lineHeight":"$$titleBarHeight","&:hover":{"&":"$$titleBarItemHover"}}},"&.ltr .icons":{"top, right":0,".meshim_widget_widgets_IconFont":{"&.last_child":{"paddingRight":"9px"}}},"&.rtl .icons":{"top, left":0,".meshim_widget_widgets_IconFont":{"&.last_child":{"paddingLeft":"9px"}}},"&.br, &.bm, &.bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.tr, &.tm, &.tl":{},"&.mobile":{"zIndex":101,"borderRadius":"0",".title":{"fontSize":"$$fontSizeXL"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TitleBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TitleBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_MultiProfilesCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","pseudo":"profile_avatar"}]],{"pseudo":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent0",null,[],{"id":"agent0"}],[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent1",null,[],{"id":"agent1"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__gravatar'),H=w.get(z+'__content_cell'),I=w.get(z+'__agent0'),J=w.get(z+'__agent1')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=M.root.$('livechat'),O=N.$('settings').$('theme').$('chat_window').$('hide_profile_avatar$bool'),P=N.$('ui').$('mobile$bool'),Q
function R(){F.setDataNode=S
G.on('click',function(){F.onGravatarClick&&F.onGravatarClick()})
H.on('click',function(){F.onContentClick&&F.onContentClick()})
if(P.getValue()){F.addClass('mobile')}
F.autobind(O,'value',function(U){F[U?'addClass':'removeClass']('no_avatar')})}
function S(U){if(Q){if(Q===U)return
F.autounbind(Q,'keys',T)}
Q=U
if(!Q)return
G.setGroupNode(U)
F.autobind(Q,'keys',T)}
function T(){var U=Q.getKeys()
I.setDataNode(U.length<=0?null:Q.$(U[0]).$('display_name$string'))
J.setDataNode(U.length<=1?null:Q.$(U[1]).$('display_name$string'))}
R()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_MultiProfilesCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","&":"$$profileCardAvatar"},".profile_name":{"lineHeight":"1.2"}},"**self.mobile":{".profile_table":{"height":"100%"}},"**self.no_avatar .profile_table":{".avatar_cell":{"display":"none"},".content_cell":{"paddingLeft":"0px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_MultiProfilesCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_MultiProfilesCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_PhoneField=(function(){var x=b.__$$__jx_ui_TextField,y=b.__$$__meshim_widget_widgets_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
if(!E)E={}
E.pattern||(E.pattern='(^$|[0-9]+)')
x.call(this,A,B,C,D,E)
y.__constructor.call(this)}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=y
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_PhoneField"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_PhoneField"}
return z})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"text",null,[],{"id":"text","addClass":"text_name"}],[b.__$$__jx_ui_html_div,"change_name",null,[v(153),[b.__$$__jx_ui_html_span,"click_to_change",null,[[b.__$$__jx_ui_html_span,null,null,[" - "],{}],v(154)],{"id":"click_to_change"}]],{"id":"change_name"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__text'),H=w.get(z+'__change_name'),I=w.get(z+'__click_to_change')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_controllers_UIController,N=b.__$$__meshim_widget_utils_Utils,O,P='',Q='',R=L.root.$$('livechat.profile.display_name$string'),S=L.root.$$('connection.reattached_timestamp$int'),T=L.root.$$('livechat.ui.mobile$bool'),U=L.root.$('livechat').$('settings').$('login').$('restrict_profile$bool'),V='chat.file.update'
function W(){F.setDataNode=X
F.autobind(R,'value',$_)
F.autobind(U,'value',function($b){F.setStyle('cursor',$b?'auto':'')
I.setDisplay($b?'none':'')})}
function X($b){if(O)F.autounbind(O,'value',Y)
O=$b
F.autobind(O,'value',Y)}
function Y($b){if(!$b)return
if($b['type$string']==V)return
if($b['nick$string'])Z($b['nick$string'],$b['timestamp$int'])
if($b['display_name$string'])$$($b['display_name$string'])}
function Z($b,$c){if(!$b)return
P=$b.split(':')[0]
if(P=='visitor'&&Q)$$(Q)
if((P=='agent')&&S.getValue()&&($c>S.getValue())){L.root.$$('livechat.ui.sounds').update({'new_message$int':+new Date()})}
if(P=='visitor'&&!$a.bounded){F.addClass('cursor_pointer')
F.on('click',$a)
$a.bounded=!0}}
function $$($b){if(P=='visitor'){if(!Q){if(N.isDefaultName($b)){$b=''
H.setDisplay('')}
else{H.setDisplay('none')}
Q=$b}
G.setText(Q)}
else{G.setText($b)
H.setDisplay('none')}}
function $_($b){if(!$b||(typeof $b!='string')||(P&&P!='visitor'))return
if(N.isDefaultName($b)){$b=''
H.setDisplay('')}
else{H.setDisplay('none')}
Q=$b
G.setText(Q)}
function $a($b){if(T.getValue()){if(!N.isDefaultName(R.getValue()))return
else window.scrollTo(0,0)}
$b.stopPropagation()
M.showProfileMenu()}
W()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"&.cursor_pointer":{"cursor":"pointer"},".text_name":{"*display":"inline","wordWrap":"break-word"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatName"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatName"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_ThemeController=(function(){var x=b.__$$__jx_core_ObjectUtil,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_ConnectionController,A=b.__$$__meshim_widget_controllers_DefaultDataNode,B=b.__$$__meshim_widget_Themes,C=b.__$$__meshim_widget_themes_Overrides,D=b.__$$__meshim_widget_utils_Utils,E={},F={},G,H='standard',I='popout',J='mobile',K=20,L=!1
E.init=function(){var M=y.root.$('livechat').$('settings').$('theme'),N=M.$('name$string'),O,P=y.root.$('livechat').$('ui'),Q=P.$('theme_reload$bool'),R=P.$('theme_loaded$bool'),S=y.root.$('connection').$('message$string'),T=y.root.$('connection').$('status$string')
G=y.root.$$('tmp.api_settings.theme')
var U=P.$('popout$bool').getValue(),V=P.$('mobile$bool').getValue(),W=P.$('mockup$bool').getValue()
if(!(V&&!U)){u.generateAll('no_reload')}
S.bindValue(X)
function X($a){if($a!='fast_init'||L)return
Z()}
T.bindValue(Y)
function Y($a){if(($a!='reattached'&&$a!='cookie_law')||L)return
L=!0
Z()}
function Z(){$$(!0)}
M.bindValue(function(){$$()})
N.bindValue(function(){$$()})
Q.bindValue(function($a){$a&&$$(!0)})
function $$($a){var $b=M.getValue()
if(!$b||!$b['name$string'])return
if(O==$b['name$string']&&!$a)return
var $c=B[$b['name$string']]
if(!$c||!$c.generate)return
var $d=K,$e,$f=[],$g=[]
do {$f.push($c.defaults||{})
$g.push($c.overrides||{})} while($c._super&&($c=$c._super))

var $h=x.clone(A.livechat.settings.theme),$i={},$j
while($f.length){$j=$f.pop()
D.fullyExtend($h,$j)
D.fullyExtend($i,$j)}
var $k=z.getServerSettings()
$k=$k&&$k.theme
D.fullyExtend($h,$k||$b)
D.fullyExtend($h,G.getValue())
while($g.length){D.fullyExtend($h,$g.pop())}
$h['name$string']=$b['name$string']
if(U)D.fullyExtend($h,C.popout)
if(V)D.fullyExtend($h,C.mobile)
if(!y.livechat.getLimit()){$h.colors.banner$string=$h.colors.primary$string
if($i.colors&&$i.colors.bubble$string){$h.colors.bubble$string=$i.colors.bubble$string}}
O=$h['name$string']
var $l
if(x.equal($h,F)){$l=!0}
F=$h
M.update($h)
if($l)return
$c=B[O]
var $m=K
if(W){do {u.delPalette($m)} while($m--)
}
else{u.delPalettes()}
do {$e=$c.generate($h)
V&&$e[J]&&u.setPalette($e[J],'widget_mobile_'+$d,($d--))
U&&$e[I]&&u.setPalette($e[I],'widget_popout_'+$d,($d--))
u.setPalette($e[H],'widget_'+$d,($d--))} while($c._super&&($c=$c._super))

u.on('write',$_)
u.reload()}
function $_(){R.update(!0)
u.un('write',$_)}}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ThemeController"].join('')
E.prototype.__jx__fqname="meshim_widget_controllers_ThemeController"}
return E})()
b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_Button,"rate_this_chat",null,[v(159)],{"id":"rate_this_chat"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__rate_this_chat')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function L(){if(x.last_instance)x.last_instance.destroy()
x.last_instance=F
F.autobind(G,'click',M)}
function M(){K.update('rating_panel')}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"marginTop":"5px","marginBottom":"5px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_RatingPrompt"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_RatingPrompt"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Branding=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_widgets_branding_Zopim,K=b.__$$__meshim_widget_widgets_branding_Zendesk,L={'icon_font_zopim':J,'icon_font_zendesk':K},M=I.root.$('livechat'),N=M.$('ui').$('mobile$bool'),O=M.$('settings').$('theme').$('branding').$('type$string'),P,Q=M.$('settings').$('branding').$('hide_branding$bool'),R,S
F.setHideOnMobile=function(X){R=n(X)
V()}
F.setHideOnDesktop=function(X){S=n(X)
V()}
function T(){F.autobind(O,'value',U)
F.autobind(N,'value',V)
F.autobind(Q,'value',W)}
function U(X){var Y=L[X]
if(!Y||(P instanceof Y))return
if(P)P.destroy()
P=new Y(F)}
function V(){var X=N.getValue()
if(X&&R){F.setDisplay('none')
return}
if(!X&&S){F.setDisplay('none')
return}
F.setDisplay('')}
function W(X){F.setVisibility(X?'hidden':'')}
T()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Branding
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"display":"inline-block","color":"$$brandingLinkColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Branding"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Branding"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_EmailField=(function(){var x=b.__$$__jx_ui_EmailField,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmailField"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_EmailField"}
return x})()
b.__$$__meshim_widget_widgets_FakeInput=(function(){var x=b.__$$__jx_ui_Widget,y=b.__$$__meshim_widget_widgets_Input
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!z.__jx__jcss_generated){u.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
if(!E)E={}
E.tagName||(E.tagName='div')
x.call(this,A,B,C,D,E)
y.__constructor.call(this)}
z.__jx__jcss={}
z.prototype=e(x.prototype)
z.prototype.__jx__super=y
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FakeInput"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_FakeInput"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_Button=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,A=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,B={},C,D,E
B.init=function(N){C=N
D=x.root
E=D.$('livechat').$('ui').$('mobile$bool').getValue()
B.setColor=C.generateDeprecatedFunction('button.setColor','$zopim.livechat.theme.setColor',function(){return z.setColor.apply(this,arguments)})
function O(P){P=n(P)
function Q(){y.setHideWhenOffline(P)}
A.callOnFastInit(Q,!0)
A.callOnRegistered(Q,!0)}
B.setHideWhenOffline=C.generateLimitedFunction('button.setHideWhenOffline',1,O)}
function F(){function N(){y.hideButton()}
A.callOnFastInit(N)
A.callOnRegistered(N)}
B.hide=F
function G(){function N(){y.showButton()}
A.callOnFastInit(N)
A.callOnRegistered(N)}
B.show=G
function H(N){N=parseInt(N,10)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function O(){A.saveAPISettings({theme:{chat_button:{v_offset$int:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({v_offset$int:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setOffsetBottom=B.setOffsetVertical=H
function I(N){N=parseInt(N,10)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function O(){A.saveAPISettings({theme:{chat_button:{v_offset_mobile$int:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({v_offset_mobile$int:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setOffsetVerticalMobile=I
function J(N){N=parseInt(N,10)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function O(){A.saveAPISettings({theme:{chat_button:{h_offset$int:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({h_offset$int:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setOffsetHorizontal=J
function K(N){N=parseInt(N,10)
if(isNaN(N)||N<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
function O(){A.saveAPISettings({theme:{chat_button:{h_offset_mobile$int:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({h_offset_mobile$int:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setOffsetHorizontalMobile=K
function L(N){if(E)return
if(!i(N)){window.console&&window.console.log('Zopim: button.setPosition() expects passed argument to be a string')
return}
function O(){A.saveAPISettings({theme:{chat_button:{position$string:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({position$string:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setPosition=L
function M(N){if(!i(N)){window.console&&window.console.log('Zopim: button.setPositionMobile() expects passed argument to be a string')
return}
function O(){A.saveAPISettings({theme:{chat_button:{position_mobile$string:N}}})
D.$('livechat').$('settings').$('theme').$('chat_button').update({position_mobile$string:N})}
A.callOnFastInit(O,!0)
A.callOnRegistered(O,!0)}
B.setPositionMobile=M
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Button"].join('')
B.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Button"}
return B})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_TextArea,"comments",null,[],{"id":"comments","addClass":"comments"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(28)}],[b.__$$__meshim_widget_widgets_Button,"skip",null,[v(35)],{"id":"skip","addClass":"secondary"}]],{"addClass":"padding_bottom"}]],{"id":"form"}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__message'),I=w.get(z+'__comments'),J=w.get(z+'__skip')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_utils_Strings,O=M.root.$('livechat'),P=O.$('settings').$('forms').$('post_chat_form'),Q=O.$('channel').$('rating$string'),R,S=M.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),T=P.$('comments_messages')
function U(){I.setLabelElement(H)
F.autobind(T,'value',function(){V()})
F.autobind(Q,'value',function(W){R=W
V()})
G.on('submit',function(W){W.preventDefault()
if(!F.validate())return
P.write({'comments_user$string':I.getValue().trim()})
S.update('chat_panel')})
J.on('click',function(){S.update('chat_panel')})}
function V(){H.setText(N.get(T.$$(R+'.message$string')))
I.setPlaceholder(N.get(T.$$(R+'.placeholder$string')))}
U()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".comments":{"width":"100%","height":"25%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_CommentsForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_CommentsForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[v(105)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":v(106)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[v(107)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"addClass":"wide","value":v(108)}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_CookieLaw,L=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function M(){G.on('submit',function(N){N.preventDefault()
L.update('chat_panel')
K.setUserChoice(!0)})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Accept"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Accept"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,null,null,[v(133)],{}],[b.__$$__meshim_widget_widgets_FileUploader,"file_form",null,[[b.__$$__jx_ui_Input,"file_input",null,[],{"id":"file_input","name":"file[]","type":"file","multiple":"true","addClass":"file_input"}]],{"id":"file_form"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__file_form'),H=w.get(z+'__file_input')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_Config,L=b.__$$__meshim_common_FileUtil,M=b.__$$__meshim_common_QueryString,N=b.__$$__meshim_widget_controllers_ConnectionController,O=b.__$$__meshim_widget_controllers_DataController,P=O.root.$('livechat'),Q=P.$$('profile.mid$string'),R=P.$$('profile.uid$string'),S=P.$('settings').$('package'),T,U=P.$('ui').$('chat_window').$('chat_panel').$('file_toast'),V=P.$('ui').$('chat_window').$('menu_stack_name$string')
function W(){H.on('change',function(){if(!T||!H.getValue())return
var Y=[],Z=[],$$=0,$_=H.dom.files
if($_){for(var $a=0,$b=$_.length;$a<$b;$a++){if(L.isValidType($_[$a].type)){Y.push($_[$a].name)
Z.push($_[$a].type)
$$+=$_[$a].size||0}
else{U.update({'error$string':'type'})
H.setValue('')
return}}
if($$>K.FILE_UPLOAD_MAX){U.update({'error$string':'size'})
H.setValue('')
return}
Y=Y.join(', ')
Z=Z.join(', ')}
else{$_=H.dom.value||''
if(!$_)return
Y=$_.substr($_.lastIndexOf('\\')+1)
Z=Y.substr(Y.lastIndexOf('.')+1)
if(!L.isValidType(!1,Y)){U.update({'error$string':'type'})
H.setValue('')
return}}
var $c=O.livechat.sendFile({file_name:Y,file_type:Z,file_size:$$}),$d={ts:$c,mid:Q.getValue(),uid:R.getValue()},$e='https://'+N.getHost()+K.FILE_UPLOAD_PATH+'?'+M.buildQuery($d)
G.setPath($e)
V.update('')
G.submit()
H.setValue('')})
var X
F.autobind(S,'value',function(Y){if(!Y)return
X=S.getValue()
if(X['color_customization_enabled$int']||X['widget_customization_enabled$int']){T=!0
F.setDisplay('')}
else{T=!1
F.setDisplay('none')}})}
W()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
x.__jx__jcss={".file_input":{"position":"absolute","bottom, right":0,"fontSize":"1000px","outline":"none","opacity":"0"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_SendFile"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_SendFile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_TextField=(function(){var x=b.__$$__jx_ui_TextField,y=x,z=b.__$$__meshim_widget_widgets_Input
x=function(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
if(!x.__jx__jcss_generated){u.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
y.call(this,A,B,C,D,E)
z.__constructor.call(this)}
x.__jx__jcss={}
x.prototype=e(y.prototype)
x.prototype.__jx__super=z
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextField"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_TextField"}
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[[b.__$$__jx_ui_Label,null,null,[v(103)],{}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,"timezone_container",null,[],{"id":"timezone_container","addClass":"timezone_container"}]],{}],[b.__$$__jx_ui_Widget,"days",null,[],{"id":"days"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(101)],{"id":"back","addClass":"wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__timezone_container'),H=w.get(z+'__days'),I=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Utils,N=b.__$$__meshim_widget_utils_Strings,O=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group,P=L.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int'),Q=L.root.$('livechat').$('settings'),R=Q.$('timezone$string'),S=Q.$('operating_hours'),T=S.$('enabled$bool'),U,V=S.$('mode$string'),W,X=S.$('schedule'),Y,Z=S.$('display_notice$bool'),$$,$_={'weekday_weekend':[[1,N.datetime.weekday],[0,N.datetime.weekend]],'daily':[1,2,3,4,5,6,0]}
function $a(){F.autobind(T,'value',function($d){if(U==$d)return
U=$d
$b()})
F.autobind(V,'value',function($d){if(W==$d)return
W=$d
$b()})
F.autobind(R,'value',function($d){if(!$d)return
G.setText('('+$d+')')})
F.autobind(X,'value',function($d){Y=$d
$b()})
F.autobind(Z,'value',function($d){if($$==$d)return
$$=$d
$b()})
I.on('click',function(){P.update(0)})}
function $b(){if(!U)return
if(!$$)return
if(!W||!$_[W])return
if(!Y)return
var $d=$_[W],$e=[],$f
for(var $g in $d)if($d.hasOwnProperty($g)){if(g($d[$g])){$e.push({enabled$bool:Y[$d[$g][0]].enabled$bool,periods:Y[$d[$g][0]].periods,days:[$d[$g][1]]})}
else{$f=!1
for(var $h=0,$i=$e.length;$h<$i;$h++){if($c($e[$h],Y[$d[$g]])){$e[$h].days.push($d[$g])
$f=!0
break}}
if(!$f){$e.push({enabled$bool:Y[$d[$g]].enabled$bool,periods:Y[$d[$g]].periods,days:[$d[$g]]})}}}
H.empty()
for(var $j=0,$k=$e.length;$j<$k;$j++){new O(H).setData($e[$j])}}
function $c($d,$e){if(!$d.enabled$bool&&!$e.enabled$bool)return !0
if($d.enabled$bool!=$e.enabled$bool)return
var $f=$d.periods,$g=$e.periods,$h=0,$i=0,$j
for($j in $f)if($f.hasOwnProperty($j)){if($f[$j].start$int!==($g[$j]&&$g[$j].start$int)||$f[$j].end$int!==($g[$j]&&$g[$j].end$int)){return}
else{$h++}}
for($j in $g)if($g.hasOwnProperty($j)){$i++}
if($h!=$i)return
return !0}
$a()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".timezone_container":{"fontWeight":"normal"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","addClass":"profile_avatar"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"name_holder",null,[],{"id":"name_holder","addClass":"profile_name"}],[b.__$$__meshim_widget_widgets_profileCard_TitleHolder,"title_holder",null,[],{"id":"title_holder","addClass":"profile_title"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__gravatar'),H=w.get(z+'__content_cell'),I=w.get(z+'__name_holder'),J=w.get(z+'__title_holder')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=M.root.$('livechat'),O=N.$('settings').$('theme').$('chat_window').$('hide_profile_avatar$bool'),P=N.$('ui').$('mobile$bool'),Q,R
function S(){G.on('click',function(){F.onGravatarClick&&F.onGravatarClick()})
H.on('click',function(){F.onContentClick&&F.onContentClick()})
if(P.getValue()){F.addClass('mobile')}
F.autobind(O,'value',function(V){F[V?'addClass':'removeClass']('no_avatar')})
F.setDataNode=T
F.setTitleNode=U}
function T(V){G.setMemberNode(V)
if(V){Q=V.$('display_name$string')
I.setDataNode(Q)
R=V.$('title$string')
U(R)}
else{I.setDataNode(null)
U(null)}}
function U(V){R=V
J.setDataNode(R)}
S()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","borderWidth":"$$profileCardAvatarBorderWidth","borderStyle":"$$profileCardAvatarBorderStyle","borderColor":"$$profileCardAvatarBorderColor","borderRadius":"$$profileCardAvatarRadius","boxShadow":"$$profileCardAvatarShadow"},".profile_name":{"fontWeight":"bold","color":"$$profileCardNameColor"},".profile_title":{"color":"$$profileCardTitleColor"},".profile_name, .profile_title":{"lineHeight":"1.2"}},"**self.no_avatar .profile_table":{".avatar_cell":{"display":"none"},".content_cell":{"paddingLeft":"0px"}},"**self.mobile":{".profile_table":{"height":"100%"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Avatar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Gravatar,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=/^agent/gi,K=/^visitor/gi,L=/^agent:trigger$/
function M(){F.setMemberId=N}
function N(O){if(L.test(O)){F.setDataNode(I.root.$$('livechat.settings.concierge'))}
else if(J.test(O)){F.setDataNode(I.root.$$('livechat.agents').$(O))}
else if(K.test(O)){F.setDataNode(I.root.$$('livechat.profile'))}
else{F.setDataNode(I.root.$$('livechat.settings.concierge'))}
return F}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Avatar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Gravatar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Gravatar
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Avatar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Avatar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Bubble=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C
A.init=function(I){B=I
C=x.root
A.setColor=B.generateLimitedFunction('bubble.setColor',1,function J(K){return B.theme.setColor(K,'bubble')})}
function D(){function I(){y.showBubble()}
z.callOnFastInit(I)
z.callOnRegistered(I)}
A.show=D
function E(){function I(){y.hideBubble()}
z.callOnFastInit(I)
z.callOnRegistered(I)}
A.hide=E
function F(){function I(){y.resetBubble()}
z.callOnFastInit(I)
z.callOnRegistered(I)}
A.reset=F
function G(I){if(!I||!i(I)){window.console&&window.console.log('Zopim: bubble.setTitle() expects passed argument to be a non-empty string')
return}
function J(){z.saveAPISettings({bubble:{title$string:I}})
C.$('livechat').$('settings').$('bubble').update({title$string:I})}
z.callOnFastInit(J,!0)
z.callOnRegistered(J,!0)}
A.setTitle=G
function H(I){if(!I||!i(I)){window.console&&window.console.log('Zopim: bubble.setText() expects passed argument to be a non-empty string')
return}
function J(){z.saveAPISettings({bubble:{text$string:I}})
C.$('livechat').$('settings').$('bubble').update({text$string:I})}
z.callOnFastInit(J,!0)
z.callOnRegistered(J,!0)}
A.setText=H
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Bubble"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Bubble"}
return A})()
b.__$$__meshim_widget_components_chatButton_BubbleRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleVector,"bubble_vector",null,[],{"id":"bubble_vector","position":"absolute"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","icon":"cross","addClass":"close","title":v(43)}],[b.__$$__jx_ui_Widget,"bubble_title_container",null,[],{"id":"bubble_title_container","class":"bubble_title"}],[b.__$$__jx_ui_Widget,"bubble_text_container",null,[],{"id":"bubble_text_container","class":"bubble_text"}]],{"class":"bubble_text_wrapper"}]],{"visibility":"hidden"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__bubble_vector'),H=w.get(z+'__close'),I=w.get(z+'__bubble_title_container'),J=w.get(z+'__bubble_text_container')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_controllers_UIController,O=b.__$$__meshim_widget_utils_BindClass,P=b.__$$__meshim_widget_utils_Strings,Q=b.__$$__meshim_common_Color,R=M.root.$('livechat'),S=R.$('settings'),T=R.$('ui'),U=T.$('chat_button'),V=U.$('display$bool'),W,X=U.$('bubble').$('display$bool'),Y,Z=T.$('theme_loaded$bool'),$$=S.$('bubble'),$_=$$.$('title$string'),$a,$b=$$.$('text$string'),$c,$d=S.$('theme').$('colors').$('bubble$string'),$e,$f,$g=U.$('button_width$int'),$h=U.$('bubble_height$int'),$i,$j
function $k(){O.rtl(F)
F.autobind(V,'value',function($n){if(W==$n)return
W=$n
$l()})
F.autobind(X,'value',function($n){if(Y==$n)return
Y=$n
$l()})
F.autobind($_,'value',function($n){if($a==$n)return
$a=$n
I.setText(P.get($_))
$l()})
F.autobind($b,'value',function($n){if($c==$n)return
$c=$n
J.setText(P.get($b))
J.setDisplay($n?'':'none')
$l()})
F.autobind($d,'value',function($n){if(!$n)return
if($e==$n)return
$e=$n})
F.autobind(Z,'value',function($n){if(!$n)return
if($f!=$e){$f=$e
var $o=new Q($f)
G.setFill('linear top '+'from('+$o.lighten(0.1).toRGB()+') '+'to('+$o.darken(0.2).toRGB()+') ')}
$l()})
F.autobind($g,'value',function($n){if(!$n)return
$l()})
H.on('click',function($n){$n.stopPropagation()
N.userHideBubble()})}
function $l(){if($i)return
$i=window.setTimeout($m,0)
if(q.isIE==8){F.setVisibility('')}}
function $m(){$i=null
if(!W||!Y){return}
var $n=$g.getValue()
if(!$n){return}
var $o=F.getHeight()
if(!$o){return}
G.setDimension($n,$o)
$h.update(F.getHeight())
if(!$j){F.setVisibility('')
$j=!0}}
$k()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".bubble_text_wrapper":{"position":"relative","padding":"10px 12px 26px"},".bubble_title":{"position":"relative","zIndex":"1","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatBubbleTitleColor","whiteSpace":"pre-wrap"},".bubble_text":{"position":"relative","zIndex":"1","marginTop":"5px","fontSize":"12px","fontStyle":"italic","color":"$$chatBubbleTextColor","whiteSpace":"pre-wrap"},".close":{"float":"right","position":"relative","top":"-1px","left":"5px","padding":"6px 4px 2px","zIndex":"2","color":"$$chatBubbleCloseColor","textShadow":"$$chatBubbleCloseShadow","radius":"$$radius","&:hover":{"background":"$$chatBubbleCloseHoverBg"}},"&.rtl .close":{"float":"left","left":"auto","right":"5px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Login=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"external_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,null,null,[v(136)],{"addClass":"item"}],[b.__$$__jx_ui_Widget,"types",null,[],{"id":"types","addClass":"external_types"}]],{"id":"external_section"}],[b.__$$__meshim_widget_widgets_menu_Section,"email",null,[[b.__$$__meshim_widget_widgets_menu_Item,null,null,[v(137)],{}]],{"id":"email","addClass":"border_top"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__external_section'),H=w.get(z+'__types'),I=w.get(z+'__email')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_widgets_iconFont_Auth,N=b.__$$__meshim_widget_widgets_iconFont_AuthButton,O=b.__$$__meshim_widget_widgets_menu_Item,P=b.__$$__meshim_widget_utils_Strings,Q=b.__$$__meshim_widget_utils_BindClass,R=b.__$$__jx_ui_Label,S=L.root.$('livechat').$('settings').$('login').$('allowed_types'),T=L.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),U=L.root.$$('livechat.ui.mobile$bool'),V,W={'facebook':null,'twitter':null,'google':null}
function X(){Q.mobile(F)
V=U.getValue()
for(var Z in W)if(W.hasOwnProperty(Z)){if(V){W[Z]=new N(H,null,null,null,{name:Z,addClass:'float '+Z,icon:Z+'_out'})}
else{W[Z]=new O(H,null,null,null,{name:Z})
new M(W[Z],null,null,null,{addClass:'menu_icon',icon:Z})
new R(W[Z],null,null,[P.external_login[Z]||Z],{addClass:'label'})}}
F.autobind(S,'value',Y)
H.on('click',function($$){var $_=$$.target.jx_wrapper
if($_==H)return
while($_.parentNode!=H)$_=$_.parentNode
var $a=$_.getName&&$_.getName()
$a&&L.livechat.doExternalLogin($a)})
I.on('click',function(){T.update(2)})}
function Y(){var Z=S.getValue()
if(!Z)return
V=U.getValue()
I.setDisplay(Z['email$bool']?'':'none')
var $$,$_
for(var $a in W)if(W.hasOwnProperty($a)){$_=Z[$a+'$bool']
W[$a].setDisplay($_?'':'none')
V&&$_&&W[$a].setDisplay('inline-block')
$_&&($$=!0)}
G.setDisplay($$?'':'none')}
X()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Login
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".meshim_widget_widgets_menu_Item":{".label":{"marginLeft":"10px"},"&:hover":{"&[name=facebook] .menu_icon":{"color":"$$facebook"},"&[name=twitter]  .menu_icon":{"color":"$$twitter"},"&[name=google]   .menu_icon":{"color":"$$google"}},"&[name=facebook] .menu_icon":{"top":"1px"},"&[name=google]   .menu_icon":{"top":"2px"}},".menu_icon":{"position":"relative","float":"left","fontSize":"$$fontSizeXL","color":"$$menuHeaderColor"},"&.mobile":{".external_types":{"margin":"$$menuItemPadding"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Login"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Login"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatButton_Bubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleRenderer,null,null,[],{"addClass":"bubble_renderer"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_button'),K=J.$('bubble').$('display$bool'),L=-1
function M(){F.autobind(K,'value',function(N){if(L==N)return
L=N
F.setDisplay(L?'':'none')})}
M()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Bubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","width":"100%","top, left":0,"cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Bubble"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatButton_Bubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ConnAwareForm,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"internal_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[v(138)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__jx_ui_Widget,"name_email_container",null,[[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":v(112),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[v(139)],{"id":"name_error","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":v(40),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[v(140)],{"id":"email_error","useDisplay":"true"}]],{"id":"name_email_container"}],[b.__$$__jx_ui_Widget,"phone_container",null,[[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","placeholder":v(15),"addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[v(141)],{"id":"phone_error","useDisplay":"true"}]],{"id":"phone_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareSubmit,null,null,[],{"value":v(142),"addClass":"save short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"cancel secondary"}]],{}]],{"id":"internal_section","addClass":"flow"}]],{"noValidate":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__internal_section'),H=w.get(z+'__label'),I=w.get(z+'__name_email_container'),J=w.get(z+'__name'),K=w.get(z+'__name_error'),L=w.get(z+'__email'),M=w.get(z+'__email_error'),N=w.get(z+'__phone_container'),O=w.get(z+'__phone'),P=w.get(z+'__phone_error'),Q=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var R=(function(){var T=b.__$$__meshim_widget_controllers_DataController,U=b.__$$__meshim_widget_utils_Utils,V=b.__$$__meshim_widget_utils_BindClass,W=T.root.$('livechat'),X=W.$('profile'),Y=W.$('ui'),Z=X.$('auth').$('type$string'),$$,$_=Y.$('chat_window'),$a=X.$('logged_in$bool'),$b,$c=X.$('display_name$string'),$d=X.$('email$string'),$e=X.$('phone$string'),$f=$_.$('menu_stack_name$string'),$g=$_.$('profile_menu').$('index$int'),$h=W.$('settings').$('login'),$i=$h.$('allowed_types'),$j=$h.$('phone_display$bool'),$k
function $l(){V.mobile(F)
J.setLabelElement(H).setErrorMessageElement(K).setValidity(!0)
L.setErrorMessageElement(M).setValidity(!0)
O.setErrorMessageElement(P).setValidity(!0)
F.autobind($a,'value',function($o){$b=$o})
F.autobind(Z,'value',function($o){$$=$o
I.setDisplay($o?'none':'')})
F.autobind($c,'value',function($o){if(U.isDefaultName($o))$o=''
$o=$o||''
J.setValue($o)
J.setInitialValue($o)
$o&&J.hidePlaceholder()})
F.autobind($d,'value',function($o){$o=$o||''
L.setValue($o)
L.setInitialValue($o)
$o&&L.hidePlaceholder()})
F.autobind($e,'value',function($o){$o=$o||''
O.setValue($o)
O.setInitialValue($o)
$o&&O.hidePlaceholder()})
F.autobind($j,'value',function($o){$k=$o
N.setDisplay($o?'':'none')})
F.autobind($f,'value',function($o){if($o=='profile_menu'){$m()}})
F.autobind($g,'value',function($o){if($o==2){$m()}})
Q.on('click',function($o){$o.preventDefault()
$f.update('')})
F.onConnectedAndSubmit(function($o){$o.preventDefault()
if(!F.validate(!0))return
var $p={}
if(!$$){$p.name=J.getValue().trim()
$p.email=L.getValue().trim()}
if($k){$p.phone=O.getValue().trim()}
T.livechat.updateProfile($p)
$f.update('')})
F.autobind($i,'value',$n)}
function $m(){J.reset()
L.reset()
O.reset()}
function $n(){var $o=$i.getValue()
if(!$o)return
G.setDisplay($o['email$bool']?'':'none')}
$l()})()
for(var S in R)if(R.hasOwnProperty(S))F[S]=R[S]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ConnAwareForm.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ConnAwareForm
x.__jx__jcss={".cancel":{"display":"none"},"&.mobile":{".cancel":{"display":"inline-block"},".external":{"marginBottom":"20px",".header":{"padding":"10px 0","borderTop":"none"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Edit"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Edit"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName,"chat_name",null,[],{"id":"chat_name","addClass":"chat_name"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage,"chat_msg",null,[],{"id":"chat_msg","addClass":"chat_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage,"resend",null,[],{"id":"resend","addClass":"resend_chat_msg"}]],{"class":"chat_msg_holder"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption,"chat_option",null,[],{"id":"chat_option","addClass":"chat_option"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile,"chat_file",null,[],{"id":"chat_file","addClass":"chat_file"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_name'),H=w.get(z+'__chat_msg'),I=w.get(z+'__resend'),J=w.get(z+'__chat_option'),K=w.get(z+'__chat_file')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){function N(){F.setDataNode=O}
function O(P){G.setDataNode(P)
H.setDataNode(P)
I.setDataNode(P)
J.setDataNode(P)
K.setDataNode(P)}
N()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"marginTop":"10px",".chat_name":{"fontWeight":"bold","&":"$$chatLogName"},"&.visitor .chat_name":{"color":"$$chatLogVisitorNameColor"},"&.agent .chat_name":{"color":"$$chatLogAgentNameColor"},".chat_msg_holder":{"whiteSpace":"pre-wrap","wordWrap":"break-word",".chat_msg":{"&":"$$chatLogMsg"},".resend_chat_msg":{"marginLeft":"6px"}},".chat_option":{"input":{"margin":"2px 5px"}},".chat_file":{"marginTop, marginBottom":"5px","&":"$$chatLogFile"}},"**self.group_children":{"marginTop":"0px",".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_TextField,null,null,[],{"addClass":"unstyled"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_TextField.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_TextField
x.__jx__jcss={"**self":{"color":"$$badgeInputColor","padding":"$$badgeInputPadding","borderWidth":"$$badgeInputBorderWidth","borderStyle":"$$badgeInputBorderStyle","borderColor":"$$badgeInputBorderColor","borderRadius":"$$badgeInputRadius","boxShadow":"$$badgeInputShadow"},"&:focus, &.focus":{"color":"$$badgeInputFocusColor","background":"$$badgeInputFocusBg","borderColor":"$$badgeInputFocusBorderColor","boxShadow":"$$badgeInputFocusShadow"},"&::placeholder":{"color":"$$badgeInputPlaceholderColor"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_TextField"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_TextField"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_AutoResizeTextArea=(function(){var x=b.__$$__meshim_widget_widgets_TextArea
function y(B,C,D,E,F){if(!(this instanceof y))return new y(B,C,D,E,F)
this.$node
if(!y.__jx__jcss_generated){u.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
this.minHeight=0
this.maxHeight=window.Infinity
this.vBoxOffset=0
this.hBoxOffset=0
if(!F)F={}
F.overflow||(F.overflow='hidden')
F.overflowY||(F.overflowY='hidden')
x.call(this,B,C,D,E,F)
this.style.wordWrap='break-word'
this.style.resize='none'
this.compatMode=q.bugs.noBoxSizing&&this.doc.compatMode!="CSS1Compat"&&this.doc!=document
if(!this.compatMode){this.fakeTextArea=new x(this.doc.body,null,null,null,{className:this.getClassName(),tabIndex:"-1"})
try {this.fakeTextArea.setStyle("position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; word-wrap:break-word; height:0 !important; overflow:hidden; min-height:0 !important; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box;")}catch(H){;}
this.onDestruction(function(){this.fakeTextArea.destroy()})}
this._updateHeight=function(){this.updateHeight()}
if('onpropertychange' in this.dom){if('oninput' in this.dom){this.on('input',this._updateHeight)
this.on('keyup',this._updateHeight)}
else{this.on('propertychange',this._updateHeight)}}
else{this.on('input',this._updateHeight)}
var G=this
l(function(){if(!G.dom)return
G.updateStyles()})
this._updateValueNode=function(){this.updateValueNode()}
this._readValueNode=function(H){G.readValueNode(H)}
this.on('input',this._updateValueNode)
this.on('change',this._updateValueNode)
this.on('keyup',this._updateValueNode)}
y.__jx__jcss={"**self":{}}
y.prototype=e(x.prototype)
y.prototype.__jx__super=x
y.prototype.updateValueNode=function(){if(!this.$node)return
this._updatingValueNode=!0
this.$node.$('value$string').update(this.getValue())
this._updatingValueNode=!1}
y.prototype.readValueNode=function(B){if(!this.$node)return
if(this._updatingValueNode)return
if(B==null)return
this.setValue(B)}
y.prototype.updateHeight=function(){if(!this.compatMode&&!this.fakeTextArea)return
if(this.active)return
var B,C,D
this.active=!0
if(this.compatMode){this.style.height=0
B=this.dom.offsetHeight-this.vBoxOffset}
else{this.fakeTextArea.setValue(this.getValue())
this.fakeTextArea.style.overflowY=this.style.overflowY
D=parseInt(this.style.height,10)
this.fakeTextArea.style.width=Math.max(Math.max(this.dom.offsetWidth,0)-this.hBoxOffset,0)+'px'
this.fakeTextArea.dom.scrollTop=0
this.fakeTextArea.dom.scrollTop=90000.0
B=this.fakeTextArea.dom.scrollTop}
var E=this.maxHeight-this.vBoxOffset,F=this.minHeight-this.vBoxOffset
if(B>E){B=E
C='scroll'}
else if(B<F){B=F}
B+=this.vBoxOffset
B=Math.max(B,0)
this.style.overflowY=C||'hidden'
this.style.height=B+'px'
this.$node&&this.$node.update({'height$int':B,'overflow$bool':!!C})
var G=this
l(function(){G.active=!1})}
var z=['Top','Bottom'],A=['Left','Right']
y.prototype.updateBoxOffset=function(){var B=this.getComputedStyle()
if(!B)return
this.vBoxOffset=0
this.hBoxOffset=0
var C
if(B.boxSizing==='border-box'||B.MozBoxSizing==='border-box'||B.webkitBoxSizing==='border-box'||(q.isIE<=7&&this.doc.compatMode!="CSS1Compat")){for(C=0;C<2;C++){this.vBoxOffset+=(parseInt(B['padding'+z[C]],10)||0)+(parseInt(B['border'+z[C]+'Width'],10)||0)}
for(C=0;C<2;C++){this.hBoxOffset+=(parseInt(B['padding'+A[C]],10)||0)+(parseInt(B['border'+A[C]+'Width'],10)||0)}}
return this}
y.prototype.setDataNode=function(B){if(this.$node){this.autounbind(this.$node.$('value$string'),'value',this._readValueNode)}
this.$node=B
if(this.$node){this.autobind(this.$node.$('value$string'),'value',this._readValueNode)
this.updateValueNode()
this.updateHeight()}
return this}
y.prototype.setValue=function(B){x.prototype.setValue.call(this,B)
this.updateValueNode()
this.updateHeight()
return this}
y.prototype.updateMinMaxHeight=function(){var B=this.getComputedStyle()
if(!B)return
this.minHeight=parseInt(B.minHeight,10)
this.maxHeight=parseInt(B.maxHeight,10)
if(!this.minHeight&&isNaN(this.maxHeight)){this.style.height=''
this.minHeight=this.maxHeight=this.dom.offsetHeight}
if(isNaN(this.maxHeight)){this.maxHeight=this.minHeight}
this.$node&&this.$node.update({'min_height$string':this.minHeight,'max_height$string':this.maxHeight})
return this}
y.prototype.updateClonedStyles=function(){if(!this.fakeTextArea)return
var B=['fontFamily','fontSize','fontWeight','letterSpacing','textTransform','wordSpacing','textIndent']
this.fakeTextArea.style.lineHeight='99px'
if(this.fakeTextArea.style.lineHeight==='99px')B.push('lineHeight')
this.fakeTextArea.style.lineHeight=''
var C=this.getComputedStyle()
if(!C)return
for(var D=0,E=B.length;D<E;D++){this.fakeTextArea.style[B[D]]=C[B[D]]}}
y.prototype.updateStyles=function(){if(q.isIE8)this.style.minHeight=''
this.updateMinMaxHeight()
this.updateClonedStyles()
this.updateBoxOffset()
if(q.isIE8)this.style.minHeight=(this.minHeight-this.vBoxOffset)+'px'
this.updateHeight()
var B=this
if(q.isIE8)l(function(){B.updateHeight()})
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AutoResizeTextArea"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_AutoResizeTextArea"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J,K=I.root.$('livechat'),L=K.$('features').$('rating$bool'),M=K.$('settings').$('rating').$('enabled$bool'),N=K.$('channel'),O=N.$('chatting$bool'),P=N.$('start$time')
function Q(){F.setDataNode=R
F.autobind(L,'value',S)
F.autobind(M,'value',S)
F.autobind(O,'value',S)
F.autobind(P,'value',S)}
function R(T){var U=T.$('timestamp$int')
if(J===U)return
if(J)F.autounbind(J,'value',S)
J=U
if(J)F.autobind(J,'value',S)}
function S(){if(!J){F.setDisplay('none')
return}
var T=L.getValue(),U=M.getValue(),V=J.getValue(),W=O.getValue(),X=P.getValue()
if(U&&T&&W&&X&&X<=V){F.setDisplay('')}
else{F.setDisplay('none')}}
Q()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt
x.__jx__jcss={"**self":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","background":"$$chatLogSystemMsgBg","borderWidth":"$$chatLogSystemMsgBorderWidth","borderStyle":"$$chatLogSystemMsgBorderStyle","borderColor":"$$chatLogSystemMsgBorderColor","padding":"$$chatLogSystemMsgPadding","textAlign":"center"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_VisitorProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I
function J(L){I.call(F,L)
if(L)F.setTitleNode(L.$('email$string'))}
function K(){I=F.setDataNode||function(){}
F.setDataNode=J}
K()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_VisitorProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_VisitorProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_VisitorProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J,K=I.root.$('livechat'),L=K.$('features').$('rating$bool'),M=K.$('settings').$('rating').$('enabled$bool'),N=K.$('channel'),O=N.$('chatting$bool'),P=N.$('start$time'),Q=N.$('rating$string'),R=N.$('last_agent_leave_ts$int')
function S(){F.setDataNode=T
F.autobind(L,'value',U)
F.autobind(M,'value',U)
F.autobind(Q,'value',U)
F.autobind(O,'value',U)
F.autobind(P,'value',U)}
function T(V){var W=V.$('timestamp$int')
if(J===W)return
if(J)F.autounbind(J,'value',U)
J=W
if(J)F.autobind(J,'value',U)}
function U(){if(!J){F.setDisplay('none')
return}
var V=L.getValue(),W=M.getValue(),X=J.getValue(),Y=P.getValue(),Z=R.getValue(),$$=O.getValue()&&Y&&Y<=X
if(V&&W&&$$&&Z===X&&!Q.getValue()){F.setDisplay('')}
else{F.setDisplay('none')}}
S()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ActionBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"addClass":"actions","container":"default","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"branding","hideOnMobile":"true"}]],{"class":"action_bar","selectable":"false"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){J.mobile(F)
J.rtl(F)}
K()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ActionBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"overflow":"hidden","zIndex":10,"width":"$$actionBarWidth","height":"$$actionBarHeight","color":"$$actionBarColor","background":"$$actionBarBg","paddingLeft, paddingRight":"$$actionBarPadding"},".border_overlay":{"borderWidth":"$$actionBarBorderWidth","borderStyle":"$$actionBarBorderStyle","borderColor":"$$actionBarBorderColor"},".actions":{"float":"left"},".branding":{"position":"relative","float":"right","color":"$$actionBarColor","lineHeight":"$$actionBarHeight",".meshim_widget_widgets_IconFont":{"*color":"$$actionBarColor","*lineHeight":"$$actionBarHeight","*textDecoration":"none"},"&:hover":{"color":"$$actionBarHoverColor"}},"&.rtl":{".actions":{"float":"right"},".branding":{"float":"left"}},"&.mobile":{"top":0,"bottom":"auto","display":"none","zIndex":102,".actions":{"float":"none","position":"absolute","width, height":"100%","top, left":0}},"&.mobile.rtl":{"left":"auto","right":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ActionBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ActionBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_SettingsMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_About,null,null,[],{}]],{}],[b.__$$__meshim_widget_widgets_menu_Section,"chat_actions",null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat,null,null,[],{}]],{"id":"chat_actions"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_actions')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat'),L=K.$('channel').$('chatting$bool')
function M(){F.autobind(L,'value',function(N){G.setDisplay(N?'':'none')})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_SettingsMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_SettingsMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_SettingsMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_RatingBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_ratingBar_emoticon_Emoticon,"emoticon_rating_options",null,[],{"id":"emoticon_rating_options","addClass":"button_bar","visible":"none"}],[b.__$$__meshim_widget_widgets_ratingBar_thumb_Thumb,"thumb_rating_options",null,[],{"id":"thumb_rating_options","addClass":"button_bar","visible":"none"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__emoticon_rating_options'),H=w.get(z+'__thumb_rating_options')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K,L,M,N
function O(){F.setDataNode=P
F.getValue=Q
F.setValue=R
F.setSize=V
U()
M.on('change',T)}
function P(W){if(K)F.autounbind(K,'value',S)
K=W
if(K)F.autobind(K,'value',S)}
function Q(){return N}
function R(W){N=W
M.setValue(W)
M.updateTitle(N)}
function S(W){if(N===W)return
R(W)}
function T(){var W=M.getValue()
if(N===W)W=null
R(W)
F.fire('change',W)}
function U(){L='thumb'
if(L==='thumb'){H.show()
G.hide()
M=H}
else if(L==='emoticon'){H.hide()
G.show()
M=G}
else{H.hide()
G.hide()
M=null}}
function V(W){M.addClass(W)}
O()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_RatingBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative",".button_bar":{"width":"100%","textAlign":"center"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_RatingBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_RatingBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_controllers_LiveChatAPI=(function(){var x=b.__$$__meshim_common_Regex,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_UIController,A=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,B=b.__$$__meshim_widget_controllers_liveChatAPI_Badge,C=b.__$$__meshim_widget_controllers_liveChatAPI_Bubble,D=b.__$$__meshim_widget_controllers_liveChatAPI_Button,E=b.__$$__meshim_widget_controllers_liveChatAPI_Concierge,F=b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI,G=b.__$$__meshim_widget_controllers_liveChatAPI_Departments,H=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,I=b.__$$__meshim_widget_controllers_liveChatAPI_Window,J=b.__$$__meshim_widget_controllers_liveChatAPI_Debug,K=b.__$$__meshim_widget_controllers_liveChatAPI_PreChatForm,L=b.__$$__meshim_widget_controllers_liveChatAPI_OfflineForm,M,N={badge:B,bubble:C,button:D,concierge:E,cookieLaw:F,departments:G,theme:H,window:I,debug:J,prechatForm:K,offlineForm:L,generateDeprecatedFunction:$z,generateLimitedFunction:$A,init:P,isChatting:T,set:U,getName:Q,getEmail:R,getPhone:S,setName:V,setEmail:W,setPhone:X,addTags:Y,removeTags:Z,setDisableSound:$$,setLanguage:$_,setGreetings:$a,clearAll:$b,hideAll:$c,say:$d,setOnConnected:$e,setOnChatStart:$i,setOnChatEnd:$j,setOnFlashReady:$k,setOnStatus:$l,setOnUnreadMsgs:$m,endChat:$n,setNotes:$o,appendNotes:$p},O={}
function P(){M=y.root
if(M.$('livechat').$('ui').$('mockup$bool').getValue()){return}
var $C=this
A.init($C)
B.init($C)
C.init($C)
D.init($C)
E.init($C)
F.init($C)
G.init($C)
H.init($C)
I.init($C)
J.init($C)
K.init($C)
L.init($C)
$q()
if(M.$('livechat').$('ui').$('popout$bool').getValue()){$r()}}
function Q(){return M.getValue('livechat.profile.display_name$string')||''}
function R(){return M.getValue('livechat.profile.email$string')||''}
function S(){return M.getValue('livechat.profile.phone$string')||''}
function T(){return M.getValue('livechat.channel.chatting$bool')||!1}
function U($C){if(typeof $C!='object')return
var $D,$E,$F=this
for($E in $C)if($C.hasOwnProperty($E)){$D='set'+$B($E)
if(h($F[$D])){$F[$D]($C[$E])}}
return $F}
function V($C){$C=$C&&$C.toString()
function $D(){y.livechat.updateProfile({name:$C})}
A.callOnFastInit($D)
A.callOnReattached($D)}
function W($C){$C=$C&&$C.toString().trim()
if(!x.email.test($C)){window.console&&window.console.log('Zopim: setEmail(): the email provided is not valid: ['+$C+']')
return}
function $D(){y.livechat.updateProfile({email:$C})}
A.callOnFastInit($D)
A.callOnReattached($D)}
function X($C){$C=$C&&$C.toString()
function $D(){y.livechat.updateProfile({phone:$C})}
A.callOnFastInit($D)
A.callOnReattached($D)}
function Y(){if(!arguments.length)return
var $C=arguments,$D=[],$E
for(var $F=0,$G=$C.length;$F<$G;$F++){$E=($C[$F]+'').trim()
if($E)$D.push($E)}
function $H(){M.$('livechat').$('channel').$('tags').write({added$string:$D.join(',')})}
A.callOnFastInit($H)
A.callOnReattached($H)}
function Z(){if(!arguments.length)return
var $C=arguments,$D=[],$E
for(var $F=0,$G=$C.length;$F<$G;$F++){$E=($C[$F]+'').trim()
if($E)$D.push($E)}
function $H(){M.$('livechat').$('channel').$('tags').write({removed$string:$D.join(',')})}
A.callOnFastInit($H)
A.callOnReattached($H)}
function $$($C){if(typeof $C!='boolean')return
function $D(){M.$('livechat').$('profile').$('notification').update({sound$bool:!$C})}
A.callOnFastInit($D)
A.callOnRegistered($D)}
function $_($C){if(!i($C)||!$C){window.console&&window.console.log('Zopim: setLanguage() expects passed argument to be a non-empty string')
return}
function $D(){A.saveAPISettings({language:{language$string:$C}})
M.$('livechat').$('settings').$('language').update({language$string:$C})}
A.callOnFastInit($D)
A.callOnRegistered($D)}
function $a($C){if(!$C||(typeof $C!='object'))return
var $D,$E
for(var $F in $C)if($C.hasOwnProperty($F)){switch($F){case 'online':if(g($C[$F])){$D=$C[$F][0]||''}
else{$D=$C[$F]||''}
break
case 'offline':if(g($C[$F])){$E=$C[$F][0]||''}
else{$E=$C[$F]||''}
break
default:break}}
function $G(){if(!$D||!i($D)){window.console&&window.console.log('Zopim: setGreetings() expects a non-empty string to be provided for "online"')}
else{A.saveAPISettings({greetings:{online$string:$D}})
M.$('livechat').$('settings').$('greetings').write({online$string:$D})}
if(!$E||!i($E)){window.console&&window.console.log('Zopim: setGreetings() expects a non-empty string to be provided for "offline"')}
else{A.saveAPISettings({greetings:{offline$string:$E}})
M.$('livechat').$('settings').$('greetings').write({offline$string:$E})}}
A.callOnFastInit($G,!0)
A.callOnReattached($G,!0)}
function $b(){function $C(){y.livechat.clearAll()
y.livechat.reconnect()}
A.callOnRegistered($C)}
function $c(){function $C(){z.hideAll()}
A.callOnFastInit($C)
A.callOnRegistered($C)}
function $d($C){if(!$C||(typeof $C!='string'))return
A.callOnReattached(function(){y.livechat.sendChatMsg({msg:$C})
N.window.show()})}
function $e($C){if(!h($C))return
A.callOnReattached($C,!0)}
var $f={listening:!1,last_chatting_state:null,start_settled:!1,start_ready:!1}
r.extend($f)
function $g($C){var $D=$f.last_chatting_state,$E=n($C)
if($E===$f.last_chatting_state)return
$f.last_chatting_state=$E
if($E){if($f.start_ready)$f.fire('chat_start')}
else{if($D)$f.fire('chat_end')}}
function $h(){if(!$f.listening){$f.listening=!0
M.$('livechat').$('channel').$('chatting$bool').bindValue($g)}}
function $i($C){if(!h($C))return
$f.on('chat_start',A.getCallbackCaller($C))
$h()
if(!$f.start_settled){$f.start_settled=!0
A.callOnReattached(function(){$f.last_chatting_state=n(M.$('livechat').$('channel').$('chatting$bool').getValue())
$f.start_ready=!0})}}
function $j($C){if(!h($C))return
$f.on('chat_end',A.getCallbackCaller($C))
$h()}
function $k($C){if(!h($C))return
A.callOnRegistered($C,!0)}
function $l($C){if(!h($C))return
M.$('livechat').$('account').$('status$string').bindValue(A.getCallbackCaller($C))}
function $m($C){if(!h($C))return
var $D
M.$('livechat').$('ui').$('chat_button').$('unread_count$int').bindValue(function($E){if(!j($E)||$D==$E)return
$D=$E
A.callNow($C,$D)})}
function $n(){y.livechat.endChat()}
function $o($C){if(!i($C)){window.console&&window.console.log('Zopim: setNotes() expects passed argument to be a string')
return}
function $D(){M.$('livechat').$('profile').write({notes$string:$C})}
A.callOnFastInit($D)
A.callOnReattached($D)}
function $p($C){if(!i($C)){window.console&&window.console.log('Zopim: appendNotes() expects passed argument to be a string')
return}
function $D(){M.$('livechat').$('profile').write({notes_append$string:$C})}
A.callOnReattached($D)}
function $q(){var $C=window.$zopim
window.$zopim=A.callNow
window.$zopim.livechat=N
A.handleDelayed($C&&$C._)}
function $r(){O={'theme.setColors':H.setColors,'theme.reload':H.reload,'theme.setTheme':H.setTheme,'concierge.setName':E.setName,'concierge.setTitle':E.setTitle,'concierge.setAvatar':E.setAvatar,'window.setTitle':I.setTitle}
var $C=A.parseAPIFromQuery(),$D=this
for(var $E=0,$F=$C.length;$E<$F;$E++){var $G=$C[$E][0],$H=$C[$E][1]
if($G in O){O[$G].apply($D,$H)}}}
var $s={global:'fire freeze setOnGreeting setStatus'.split(' '),bubble:'setImage'.split(' '),button:'setImage setTheme useFavicon'.split(' '),window:'getSettings setBg'.split(' '),cookieLaw:'showPrivacyPanel'.split(' '),unreadflag:'disable enable'.split(' ')}
for(var $t in $s)if($s.hasOwnProperty($t)){var $u=$s[$t],$v
if($t=='global'){$v=N}
else{if(!N[$t])N[$t]={}
$v=N[$t]}
for(var $w=0;$w<$u.length;$w++){var $x=$u[$w]
$v[$x]=$y($x)}}
function $y($C){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$C+'" is obsolete. Refer to http://api.zopim.com/ for the latest API documentation.')}}
function $z($C,$D,$E){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$C+'" is deprecated and may be removed in the future. '+($D?('Use "'+$D+'" instead.'):'Refer to http://api.zopim.com/ for the latest API documentation.'))
return $E.apply(this,arguments)}}
function $A($C,$D,$E){return function(){typeof $C
typeof $D
var $F=Array.prototype.slice.call(arguments,0)
return $E.apply(this,$F)}}
function $B($C){$C+=''
return $C.charAt(0).toUpperCase()+$C.substring(1)}
if((typeof N==='function')&&N.prototype&&!N.__jx__no_fqname){N.prototype.__jx__fqname_chain=[(N.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LiveChatAPI"].join('')
N.prototype.__jx__fqname="meshim_widget_controllers_LiveChatAPI"}
return N})()
b.__$$__meshim_widget_widgets_form_DepartmentSelect=(function(){var x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_DefaultDataNode,z=b.__$$__meshim_widget_widgets_Select,A=b.__$$__meshim_widget_utils_Utils,B=b.__$$__meshim_widget_utils_Strings,C=b.__$$__jx_ui_Option
function D(G,H,I,J,K){if(!(this instanceof D))return new D(G,H,I,J,K)
this.inputSuffix='select'
if(!D.__jx__jcss_generated){u.generate(this,D.prototype.__jx__fqname,D.__jx__jcss,null,D)
D.__jx__jcss_generated=!0}
z.call(this,G,H,I,J,K)
this.departments_label_path='livechat.settings.forms.pre_chat_form.form.2.label$string'
this.default_departments_label=A.descendsObj(y,this.departments_label_path)
this.$departments=x.root.$('livechat').$('departments')
this.$profile_department_id=x.root.$('livechat').$('profile').$('department_id$int')
this.$departments_label=x.root.$$(this.departments_label_path)
this.$filter_enabled=x.root.$('livechat').$('ui').$('departments').$('filter_enabled$bool')
this.prev_value=null
this.avail_departments={}
var L=this
this.autobind(this.$departments,'value',function(){L.setOptions()})
this.autobind(this.$filter_enabled,'value',function(){L.setOptions()})
this.autobind(this.$profile_department_id,'value',function(M){E.call(L,M)})
this.autobind(this.$departments_label,'value',function(){L.updateBlankOption()})
this.onDestruction(function(){if(L.blank_option){L.blank_option.destroy()
L.blank_option=null}})
this.on('change',function(){this.userSelected=!0})
this.reset()}
D.__jx__jcss={}
function E(G){if(!G)return
if(parseInt(this.getValue(),10)===G)return
if(this.userSelected)return
if(!this.avail_departments[G])return
this.setValue(G)}
D.prototype=e(z.prototype)
D.prototype.__jx__super=z
D.prototype.validate=function(){if(this.isBlank){this.setValidity(!0)
return !0}
return z.prototype.validate.call(this)}
D.prototype.reset=function(){var G=this.$profile_department_id.getValue()
if(!G||!this.avail_departments[G]){this.setSelectedIndex(0)}
else{this.setValue(G)}
this.userSelected=!1}
D.prototype.setHide=function(G){this.isHide=n(G)
this.setOptions()}
D.prototype.isHidden=function(){return (this.isBlank||this.isHide)}
D.prototype.setRequired=function(){var G=z.prototype.setRequired.apply(this,arguments)
this.updateBlankOption()
return G}
D.prototype.updateBlankOption=function(){if(!this.blank_option)return
if(this.getRequired()){if(this.children[0]==this.blank_option){this.removeChild(this.blank_option)}}
else{this.blank_option.setText(B.get(this.$departments_label)==this.default_departments_label?B.pre_chat_offline_form.department_any:'—')
if(this.children[0]!==this.blank_option){this.insertBefore(this.blank_option,this.children[0])}}}
D.prototype.setOptions=function(){var G=this.$departments.getValue(),H=this.$filter_enabled.getValue(),I={},J=''
if(!G){this.prev_value=this.getValue()}
else if(this.prev_value!==null){J=this.prev_value
this.prev_value=null}
else{J=this.getValue()}
this.isBlank=!0
for(var K in G)if(G.hasOwnProperty(K)){if(H&&!G[K]['display$bool'])continue
if(G[K]){this.isBlank=!1
I[K]=G[K]}}
if(this.isBlank||this.isHide){(this.container||this).parentNode.setDisplay('none')
return}
else{(this.container||this).parentNode.setDisplay('')}
this.empty()
var L=this.getName(),M
this.blank_option=M=new C(this,null,null,null,{name:'',value:'',className:'input_input_'+this.inputSuffix});(M.container||M).addClass('input')
this.avail_departments=I
I=F(I)
for(var N=0,O=I.length;N<O;N++){M=new C(this,null,null,[I[N]['name$string']+(I[N]['status$string']=='online'?'':' ('+v(46)+')')],{name:L,value:I[N]['id$int'],className:'input_input_'+this.inputSuffix});(M.container||M).addClass('input')
if(J==M.getValue()){this.setValue(J)}}
this.updateBlankOption()}
function F(G){var H=[],I=[]
for(var J in G)if(G.hasOwnProperty(J)){if(G.hasOwnProperty(J)){if(G[J]['status$string']=='offline'){I.push({id$int:J,name$string:G[J]['name$string'],status$string:'offline'})}
else{H.push({id$int:J,name$string:G[J]['name$string'],status$string:'online'})}}}
H.sort(K)
I.sort(K)
return H.concat(I)
function K(L,M){if(L['name$string']<M['name$string'])return -1
if(L['name$string']>M['name$string'])return 1
return 0}}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_DepartmentSelect"].join('')
D.prototype.__jx__fqname="meshim_widget_widgets_form_DepartmentSelect"}
return D})()
b.__$$__meshim_widget_widgets_form_Profile=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"available_types_el",null,[[b.__$$__jx_ui_Label,"label_logged_out",null,[v(114),[b.__$$__jx_ui_Label,"label_logged_out_required",null,[],{"id":"label_logged_out_required"}]],{"id":"label_logged_out","addClass":"label label_logged_out"}],[b.__$$__jx_ui_Label,"label_logged_in",null,[v(115)],{"id":"label_logged_in","addClass":"label label_logged_in"}],[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"avatar"}],[b.__$$__jx_ui_Label,"internal_placeholder",null,[v(116)],{"id":"internal_placeholder","addClass":"internal_placeholder"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"logged_in_name",null,[],{"id":"logged_in_name","addClass":"logged_in_name"}],[b.__$$__jx_ui_Label,"logged_in_email",null,[],{"id":"logged_in_email","addClass":"logged_in_email"}],[b.__$$__jx_ui_Label,"logged_in_phone",null,[],{"id":"logged_in_phone","addClass":"logged_in_phone"}],[b.__$$__jx_ui_Widget,"logged_in_actions",null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_edit",null,[],{"id":"logged_in_edit","icon":"pencil","title":v(117)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_clear",null,[],{"id":"logged_in_clear","icon":"dustbin","title":v(118)}]],{"id":"logged_in_actions","addClass":"logged_in_actions"}],[b.__$$__jx_ui_Label,"divider",null,[v(119)],{"id":"divider","addClass":"profile_divider"}],[b.__$$__jx_ui_Label,"external_placeholder_one",null,[],{"id":"external_placeholder_one","addClass":"external_placeholder_one"}],[b.__$$__jx_ui_Label,"external_placeholder_many_prefix",null,[v(120)],{"id":"external_placeholder_many_prefix","addClass":"external_placeholder_many_prefix"}],[b.__$$__jx_ui_Label,"external_placeholder_many",null,[],{"id":"external_placeholder_many","addClass":"external_placeholder_many"}]],{"addClass":"floater_inner_seriously"}]],{"addClass":"floater_inner"}]],{"addClass":"floater"}]],{"id":"fake_input","addClass":"fake_input","tabIndex":"0"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[v(121)],{"id":"error_message","addClass":"error_message","useDisplay":"true"}]],{"id":"available_types_el","addClass":"field profile_field"}],[b.__$$__jx_ui_Widget,"editing_el",null,[[b.__$$__jx_ui_Label,"label_edit_internal",null,[v(114),[b.__$$__jx_ui_Label,"label_edit_internal_required",null,[],{"id":"label_edit_internal_required"}]],{"id":"label_edit_internal","addClass":"label label_edit_internal"}],[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":v(112),"addClass":"input_name standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[v(122)],{"id":"name_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":v(40),"addClass":"input_email standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[v(123)],{"id":"email_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__jx_ui_Widget,"edit_external",null,[[b.__$$__jx_ui_Label,null,null,[v(124)],{"addClass":"edit_external_label"}],[b.__$$__jx_ui_Widget,"edit_external_types",null,[],{"id":"edit_external_types","addClass":"edit_external_types"}]],{"id":"edit_external","addClass":"edit_external"}]],{"id":"editing_el","addClass":"editing field profile_field"}],[b.__$$__jx_ui_Widget,"phone_field",null,[[b.__$$__jx_ui_Label,"phone_label",null,[v(125),[b.__$$__jx_ui_Label,"phone_required",null,[],{"id":"phone_required"}]],{"id":"phone_label","addClass":"label"}],[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","addClass":"input_phone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[v(126)],{"id":"phone_error","addClass":"error_message","useDisplay":"true"}]],{"id":"phone_field","addClass":"field field_phone"}]],{"class":"profile_form"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__available_types_el'),H=w.get(z+'__label_logged_out'),I=w.get(z+'__label_logged_out_required'),J=w.get(z+'__label_logged_in'),K=w.get(z+'__fake_input'),L=w.get(z+'__avatar'),M=w.get(z+'__internal_placeholder'),N=w.get(z+'__logged_in_name'),O=w.get(z+'__logged_in_email'),P=w.get(z+'__logged_in_phone'),Q=w.get(z+'__logged_in_actions'),R=w.get(z+'__logged_in_edit'),S=w.get(z+'__logged_in_clear'),T=w.get(z+'__divider'),U=w.get(z+'__external_placeholder_one'),V=w.get(z+'__external_placeholder_many_prefix'),W=w.get(z+'__external_placeholder_many'),X=w.get(z+'__error_message'),Y=w.get(z+'__editing_el'),Z=w.get(z+'__label_edit_internal'),$$=w.get(z+'__label_edit_internal_required'),$_=w.get(z+'__name'),$a=w.get(z+'__name_error'),$b=w.get(z+'__email'),$c=w.get(z+'__email_error'),$d=w.get(z+'__edit_external'),$e=w.get(z+'__edit_external_types'),$f=w.get(z+'__phone_field'),$g=w.get(z+'__phone_label'),$h=w.get(z+'__phone_required'),$i=w.get(z+'__phone'),$j=w.get(z+'__phone_error')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var $k=(function(){var $m=b.__$$__meshim_widget_controllers_DataController,$n=b.__$$__meshim_widget_utils_Utils,$o=b.__$$__meshim_widget_utils_Strings,$p=b.__$$__meshim_widget_widgets_iconFont_Auth,$q=b.__$$__meshim_widget_widgets_iconFont_AuthButton,$r={'facebook':a,'twitter':a,'google':a},$s={'facebook':a,'twitter':a,'google':a},$t={'name':v(112),'email':v(40)},$u={'name':$_,'email':$b,'phone':$i},$v=v(113),$w=$m.root.$('livechat').$('settings').$('login'),$x=$w.$('allowed_types'),$y=$w.$('phone_display$bool'),$z,$A=0,$B,$C,$D=$m.root.$('livechat').$('profile'),$E=$D.$('logged_in$bool'),$F,$G=$D.$('auth').$('type$string'),$H,$I=$m.root.$('livechat').$('ui').$('mobile$bool'),$J,$K,$L
F.submit=function(){var $U=$_.getValue().trim(),$V=$b.getValue().trim(),$W=$i.getValue().trim(),$X={}
if(!($F&&!$U&&!$V)){$X.name=$U
$X.email=$V}
if($z){$X.phone=$W}
$m.livechat.updateProfile($X)
$C=!1
$R()}
F.setHideLabel=function(){$L=!0
$R()}
F.setDisabled=function($U){$U=n($U)
F.disabled=$U
F[$U?'addClass':'removeClass']('disabled')
$_.setDisabled($U)
$b.setDisabled($U)
$f.setDisplay($U?'none':'')}
F.validate=function($U){var $V=!0,$W=[$_,$b]
for(var $X=0,$Y=$W.length;$X<$Y;$X++)if(!$W[$X].validate($U?$V:!1))$V=!1
$V?G.removeClass('invalid'):G.addClass('invalid')
X.setDisplay($V?'none':'')
if(!$i.validate($U?$V:!1))$V=!1
return $V}
F.setDataNode=function($U){if($K==$U)return
if($K)F.autounbind($K,'value',$M)
$K=$U
if($K)F.autobind($K,'value',$M)}
F.getValue=function(){var $U={},$V=$_.getValue()
if(!$n.isDefaultName($V))$U.name=$V
$U.email=$b.getValue()
$U.phone=$i.getValue()
return $U}
function $M(){var $U=$K.getValue(),$V,$W,$X
for($W in $U)if($U.hasOwnProperty($W)){$V=$U[$W]
$X=$u[$V['name$string']]
if(!$X)continue
$X.setRequired(('required$bool' in $V)?$V['required$bool']:!0)
$X.setPlaceholder($V['placeholder$string']||$t[$V['name$string']])}}
F.setRequired=function($U){$U=n($U)
$_.setRequired($U)
$b.setRequired($U)
I.setText($U?' *':'')
$$.setText($U?' *':'')
if(!$U){X.setDisplay('none')
$_.hideErrorMessage()
$b.hideErrorMessage()}}
F.setPhoneRequired=function($U){$U=n($U)
$i.setRequired($U)
$h.setText($U?' *':'')
if(!$U){$i.hideErrorMessage()}}
F.autobind($y,'value',function($U){$z=$U
$f.setDisplay($U?'':'none')})
function $N(){var $U=$x.getValue(),$V
$A=0
if(!$U)return
$B=$U['email$bool']
for(var $W in $r)if($r.hasOwnProperty($W)){if($U[$W+'$bool']){$A++
$V=$W
$r[$W].setDisplay('')
$s[$W].setDisplay('')}
else{$r[$W].setDisplay('none')
$s[$W].setDisplay('none')}}
if($A==1){U.setText($v.replace('<name>',$o.external_login[$V]||$V))}
$R()}
function $O($U){$F=$U
$R()}
function $P($U){$H=$U
$R()}
function $Q($U){if(!$U)return
if('display_name$string' in $U){if(!$n.isDefaultName($U['display_name$string'])){N.setText($U['display_name$string']||'')
$_.setValue($U['display_name$string']||'')}
else{N.setText('')
$_.setValue('')}}
if('email$string' in $U){O.setText($U['email$string']||'')
$b.setValue($U['email$string']||'')}
if('phone$string' in $U){P.setText($U['phone$string']||'')
$i.setValue($U['phone$string']||'')}
$R()}
function $R(){if($H){$C=!1}
H.setDisplay(!$F?'':'none')
J.setDisplay($F?'':'none')
G.setDisplay(!$C?'':'none')
L.setDisplay(!$F?'none':'')
M.setDisplay(!$F&&$B?'':'none')
U.setDisplay(!$F&&!$B&&($A==1)?'':'none')
V.setDisplay(!$F&&!$B&&($A>1)?'':'none')
W.setDisplay(!$F&&($B||($A>1))?'':'none')
T.setDisplay(!$F&&$B&&$A?'':'none')
Y.setDisplay($C?'':'none')
$d.setDisplay(((!$F||$C)&&$A)?'':'none')
if($L){H.setDisplay('none')
J.setDisplay('none')
Z.setDisplay('none')}
N.setDisplay($F?'':'none')
O.setDisplay($F?'':'none')
P.setDisplay(($F&&F.disabled)?'':'none')
Q.setDisplay($F&&!F.disabled?'':'none')
R.setDisplay($H?'none':'')
F.setClass('profile_form')
if(F.disabled){F.addClass('disabled')}
if($J){F.addClass('mobile')}
if(v&&v.onLanguage)$T()
F.addClass($F?'logged_in':'logged_out')
F.addClass($B?'internal_enabled':'internal_disabled')
F.addClass($C?'editing':'available_types')
if(!$A)F.addClass('external_none')
else if($A==1)F.addClass('external_one')
else F.addClass('external_many')}
function $S(){var $U
$J=$I.getValue()
if($J){F.addClass('mobile')}
L.setDataNode($D)
X.setDisplay('none')
F.removeClass('editing').addClass('available_types')
for($U in $r)if($r.hasOwnProperty($U)){$r[$U]=new ($J?$q:$p)(W,null,null,null,$J?{name:$U,addClass:'profile_form_icon '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$o.external_login[$U]||$U,tabIndex:0})
$s[$U]=new ($J?$q:$p)($e,null,null,null,$J?{name:$U,addClass:'float profile_form_edit_external '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$o.external_login[$U]||$U,tabIndex:0})}
W.on('keyup',$V)
W.on('click',$V)
$e.on('keyup',$W)
$e.on('click',$W)
function $V($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==W)return
while($0.parentNode!=W)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$m.livechat.doExternalLogin($1)}
function $W($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==$e)return
while($0.parentNode!=$e)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$m.livechat.doExternalLogin($1)}
function $X($Z){$Z&&$Z.preventDefault()
$_.setValidity(!0)
$b.setValidity(!0)
$C=!0
$R()
$_.focus()}
function $Y($Z){$Z&&$Z.preventDefault()
$m.livechat.doExternalLogout()
K.blur()
if($I.getValue()){$X()}}
K.on('focus',function(){if($F)return
if(F.disabled)return
if(!$B)return
$X()})
R.on('click',$X)
S.on('click',$Y)
$i.setLabelElement($g)
$_.setErrorMessageElement($a).hideErrorMessage()
$b.setErrorMessageElement($c).hideErrorMessage()
$i.setErrorMessageElement($j).hideErrorMessage()
F.autobind($x,'value',$N)
F.autobind($E,'value',$O)
F.autobind($D,'value',$Q)
F.autobind($G,'value',$P)
if(v&&v.onLanguage){v.onLanguage($T)
$T()}}
function $T(){F[v.rtl()?'addClass':'removeClass']('rtl')}
$S()})()
for(var $l in $k)if($k.hasOwnProperty($l))F[$l]=$k[$l]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_form_Profile
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={".label_logged_out":{},".label_logged_in":{},".fake_input":{"position":"relative","overflow":"hidden","*zoom":1},".avatar":{"float":"left","width, height":"32px","marginRight":"5px","&":"$$profileFormLoggedIn"},"&.rtl .avatar":{"float":"right","marginRight":0,"marginLeft":"5px"},".internal_placeholder":{"float":"left","vertical-align":"top","cursor":"pointer"},"&.rtl .internal_placeholder":{"float":"right"},".profile_divider":{"vertical-align":"top","marginRight":"5px"},"&.rtl .profile_divider":{"marginRight":0,"marginLeft":"5px"},".internal_placeholder, .profile_divider":{"lineHeight":"18px","*lineHeight":"18px !important"},".external_placeholder_one":{"vertical-align":"top"},".external_placeholder_many":{"vertical-align":"top"},".external_placeholder_many_prefix":{"vertical-align":"top"},".editing":{".input_name":{},".input_email":{},".input_phone":{}},".edit_external":{"marginTop":"5px","color":"$$menuHeaderColor",".edit_external_label":{},".edit_external_types":{"display":"inline-block",".profile_form_edit_external":{"display":"inline-block"}}},"&.rtl .edit_external":{".edit_external_types":{".profile_form_edit_external":{"marginLeft":0,"marginRight":"5px"}}},".logged_in_name":{"fontWeight":"bold"},".logged_in_name, .logged_in_email":{"display":"block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","paddingRight":"40px"},"&.rtl .logged_in_name, &.rtl .logged_in_email":{"paddingRight":0,"paddingLeft":"40px"},".logged_in_actions":{"position":"absolute","top, right":0,"color":"$$menuHeaderColor","marginTop":"5px","marginRight":"5px","button":{"marginLeft":"5px","&:hover, &:focus":{"color":"$$menuColor"}},".divider":{"fontSize":"$$fontSizeXS","lineHeight":"1.5","margin":"0 5px","cursor":"default","opacity":0.5}},"&.rtl .logged_in_actions":{"right":"auto","left":0},".floater":{"display":"block","overflow":"hidden","*position":"relative !important",".floater_inner":{"display":"table",".floater_inner_seriously":{"display":"table-cell","verticalAlign":"middle"}}},"&.internal_enabled":{".floater":{"float":"right","*float":"right !important"}},"&.rtl.internal_enabled":{".floater":{"float":"left"}},"&.logged_in, &.internal_disabled":{".floater":{".floater_inner":{"tableLayout":"fixed","width":"100%","height":"32px"}}},"&.logged_in":{".fake_input":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".floater":{"float":"none !important"}},"&.logged_out.internal_disabled, &.logged_in":{".fake_input":{}},".profile_form_icon":{"cursor":"pointer","display":"inline-block","marginLeft":"5px","height, fontSize":"17px","lineHeight":"21px","*padding":"0 !important","*marginLeft":"5px !important"},"&.rtl .profile_form_icon":{"marginLeft":0,"marginRight":"5px"},".field":{"marginBottom":"15px","&.last-child":{"marginBottom":0},"&.profile_field":{"*padding":"0 !important","&.invalid":{}}},".label":{"display":"block","marginBottom":"5px","fontWeight":"bold"},"&.mobile":{".avatar":{"width, height":"36px"},"&.available_types":{".fake_input":{".internal_placeholder":{"lineHeight":"25px"},".profile_divider":{"lineHeight":"44px","marginRight":"10px"}},".floater":{"position":"absolute","top":0,"right":"-2px","height":"100%"},".profile_form_icon":{"marginLeft, marginRight":0,"color":"$$menuColor","width":"auto","height":"46px","padding":"13px 12px 10px","borderWidth":"0 0 0 1px","borderRadius":"0",".icon_font":{"textAlign":"center"}},"&.logged_in":{".fake_input":{},".floater":{"position":"relative","top, right, left":0}}},".logged_in_name, .logged_in_email":{"paddingRight":"80px"},".logged_in_actions":{"margin":"0px","height":"100%","button":{"height":"100%","padding":"0 5px"}},".editing":{".name_container, .email_container":{"position":"relative","input.invalid ~ .error_icon":{"display":"block"}}},".edit_external":{".edit_external_types":{"display":"block","marginTop":"10px"}}},"&.rtl.mobile":{".floater":{"right":"auto","left":"-2px"},".profile_divider":{"marginRight":0,"marginLeft":"10px"},".logged_in_name, .logged_in_email":{"paddingRight":0,"paddingLeft":"80px"}},"&.disabled":{".field":{"marginBottom":0},".fake_input":{"border":"none","background":"transparent"},".field_phone":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Profile"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_form_Profile"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_AgentProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_common_ChainedValueDataNode,K=b.__$$__jx_data_DataNode,L=I.root.$$('livechat.settings.concierge'),M=new K('title$string'),N
M.update(v(146))
function O(Q){N.call(F,Q)
if(!Q||Q===L)return
var R=Q.$('title$string'),S=new J(R,M)
F.setTitleNode(S)}
function P(){N=F.setDataNode||function(){}
F.setDataNode=O}
P()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_AgentProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AgentProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_AgentProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareForm,"form",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[v(39)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","addClass":"email mobile_error_icon","placeholder":v(40),"required":"true"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[v(41)],{"id":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareSubmit,null,null,[],{"value":v(26),"class":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"id":"form","noValidate":"true"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__label'),I=w.get(z+'__email'),J=w.get(z+'__error_message'),K=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=N.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),P=N.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),Q=N.root.$('livechat').$('channel')
function R(){I.setLabelElement(H).setErrorMessageElement(J).setValidity(!0)
G.onConnectedAndSubmit(function(S){S.preventDefault()
if(!I.validate(!0))return
var T=I.getValue()
Q.write({'email_transcript$string':T})
P.update(T)
O.update('email_transcript_notification')
I.reset()})
K.on('click',function(){O.update('')})
F.autobind(O,'value',function(S){if(S==F.getName()){I.setValidity(!0)
I.focus()}})}
R()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_Form=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"container",null,[],{"id":"container"}]],{"class":"generated_form"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__container')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_widgets_form_Field,K=b.__$$__meshim_widget_widgets_form_CheckBoxMultiple,L=b.__$$__meshim_widget_widgets_form_RadioButtonMultiple,M=b.__$$__meshim_widget_widgets_form_DepartmentSelect,N=b.__$$__meshim_widget_widgets_TextField,O=b.__$$__meshim_widget_widgets_TextArea,P=b.__$$__meshim_widget_widgets_EmailField,Q=b.__$$__meshim_widget_widgets_Select,R=b.__$$__meshim_widget_widgets_ErrorMessage,S=b.__$$__meshim_widget_utils_Strings,T=b.__$$__jx_core_ObjectUtil,U=b.__$$__jx_ui_CheckBox,V=b.__$$__jx_ui_Label,W=b.__$$__jx_ui_Option,X={'text':N,'email':P,'textarea':O,'checkbox':U,'select':Q,'checkbox_multiple':K,'radio':L,'department':M},Y={'name':1,'email':1,'phone':1},Z,$$,$_={},$a={},$b
F.submitSelf=function(){if(!Z)return
var $d={},$e
for(var $f in $$)if($$.hasOwnProperty($f)){if($$[$f]['hidden$bool'])continue
$e=$_[$$[$f]['name$string']]
if(!$e)continue
$d[$f]={"value_user$string":$e.getValue()}
if($e.getChecked){$d[$f]['checked_user$bool']=$e.getChecked()}
if($e.getOptions&&!($e instanceof M)){$d[$f]['options']=$e.getOptions(!0)}}
Z.update($d)}
F.submit=function($d,$e,$f){if(!$d)return
var $g={},$h,$i
for($i in $$)if($$.hasOwnProperty($i)){if($$[$i]['hidden$bool'])continue
$h=$_[$$[$i]['name$string']]
if(!$h)continue
if($f){$g[$i]={"value_user$string":$h.getValue()}
if($h.getChecked){$g[$i]['checked_user$bool']=$h.getChecked()}
if($h.getOptions&&!($h instanceof M)){$g[$i]['options']=$h.getOptions(!0)}}
else{$g[$i]={"name$string":$$[$i]['name$string'],"value$string":$h.getValue()}
if($h.getChecked){$g[$i]['checked$bool']=$h.getChecked()}
if($h.getOptions&&!($h instanceof M)){$g[$i]['options']=$h.getOptions()}}}
if($e){var $j=$e.getValue()
for($i in $j)if($j.hasOwnProperty($i)){if(!$j[$i]||!Y[$i])continue
$g[$i]={'name$string':$i,'value$string':$j[$i]}}}
$d.write($g)}
F.setReadOnly=function($d){$b=n($d)
F[$b?'addClass':'removeClass']('read_only')
return F}
F.setDataNode=function($d){if(Z==$d)return
if(Z)F.autounbind(Z,'value',$c)
Z=$d
if(Z)F.autobind(Z,'value',$c)}
function $c(){var $d,$e,$f,$g
$d=Z.getValue()
if(T.equal($$,$d))return
G.empty()
$_={}
$a={}
$$=$d
var $h,$i,$j,$k,$l
for($f in $d)if($d.hasOwnProperty($f)){$e=$d[$f]
$j=null
if(Y[$e['name$string']])continue
if(!X[$e['type$string']]){continue}
if(!$e['name$string']){continue}
if(!$e['label$string']){continue}
if($b&&!$e['value_user$string']||($e['type$string']=='checkbox'&&!$e['checked$bool']))continue
$h=$a[$e['name$string']]=new J(G,null,null,null,{className:'field field_'+$e['type$string']})
$h.label=$i=new V($h,null,null,null,{className:'label'})
$h.label_name=new V($i,null,null,[S.get(Z.$$($f+'.label$string'))])
$h.label_required=new V($i,null,null,[($e['required$bool']&&!$b)?' *':''])
$h.input=$_[$e['name$string']]=$j=new X[$e['type$string']]($h,null,null,null,{name:$e['name$string'],required:$e['required$bool'],autoValidate:!0,readOnly:$b});($j.container||$j).addClass('input input_'+$e['type$string'])
$j&&$j.setLabelElement($i)
switch($e['type$string']){case 'checkbox_multiple':case 'radio':$e['options']&&$j.setOptions($e['options'])
break
case 'text':case 'email':case 'textarea':$e['placeholder$string']&&$j.setPlaceholder($e['placeholder$string'])
if($b){if(q.isIE<=7){$j.style.overflow='visible'
$j.style.height=0}
else{l((function($n){return function(){$n.setMinHeight('0')
$n.setHeight('0')
$n.setHeight($n.getScrollHeight())}})($j))}}
break
case 'checkbox':$e['checked$bool']&&$j.setChecked($e['checked$bool']).setInitialChecked($e['checked$bool'])
$h.insertBefore($j.container||$j,$i)
if($b)$j.setDisabled(!0)
break
case 'select':for($g in $e['options'])if($e['options'].hasOwnProperty($g)){$l=new W($j,null,null,[$e['options'][$g]['label$string']||$e['options'][$g]['value$string']],{value:$e['options'][$g]['value$string']})
if($e['value$string']==$e['options'][$g]['value$string']||$e['options'][$g]['checked$bool'])$l.setSelected(!0)}
if($b)$j.setDisabled(!0)
break
case 'department':$j.setSelectedIndex(0)
default:}
if(!$b){$h.error_message=$k=new R($h,null,null,[$e['error_message$string']||S.error_message[$e['type$string']]||S.error_message['default']],{className:'error_message'})
$k.setUseDisplay(!0)
$j&&$j.setErrorMessageElement($k).hideErrorMessage()
$k.setVisible('none')}
if($b&&$e['value_user$string']){$j.setValue&&$j.setValue($e['value_user$string']||'')
$j.setInitialValue&&$j.setInitialValue($e['value_user$string']||'')}
else if($e['value$string']){$j.setValue&&$j.setValue($e['value$string'])
$j.setInitialValue&&$j.setInitialValue($e['value$string'])}
if($e['hidden$bool']){$h.setDisplay('none')
$h.setRequired(!1)}}
var $m=G.getLastChild()
$m&&$m.addClass('last-child')}
F.populateSelf=function(){if(!Z)return
var $d=Z.getValue(),$e
for(var $f in $d)if($d.hasOwnProperty($f)){$e=$_[$$[$f]['name$string']]
if(!$e)continue
$e.setValue($d[$f]['value_user$string'])
if($e.setChecked){$e.setChecked($d[$f]['checked_user$bool'])}
if($e.setOptions){$e.setOptions($d[$f]['options'],!0)}}}
F.reset=function(){if(!Z)return
var $d=Z.getValue(),$e
for(var $f in $d)if($d.hasOwnProperty($f)){$e=$_[$$[$f]['name$string']]
if(!$e)continue
$e.reset&&$e.reset()}}
F.getField=function($d){return $a[$d]}
F.getInput=function($d){return $_[$d]}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_Form
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"*zoom":1},".input_text, .input_email, textarea, select":{"width":"100%"},".label, .error_message, .option_label":{"display":"block"},".input_checkbox, .input_input_radio, .input_input_checkbox":{"display":"inline-block","float":"left","clear":"both"},".field":{"marginBottom":"15px","&.field_radio .input, &.field_department .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"16px"},"label.disabled":{"color":"#ccc","&":"$$inputDisabled"}},"&.field_checkbox, &.field_checkbox_multiple .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"15px"}},"&.field_checkbox, &.field_checkbox_multiple, &.field_radio":{"&.invalid":{}}},".label":{"marginBottom":"5px","fontWeight":"bold"},"textarea":{"minHeight, *height":"70px","resize":"vertical"},".option_label":{"marginBottom":"5px","&:last-child":{"marginBottom":0}},".error_message":{"paddingBottom":"5px"},"&.read_only":{".field_radio, .field_checkbox_multiple":{".input_input_radio, .input_input_checkbox":{"display":"none"}},"textarea":{"overflow":"hidden"},".input_checkbox_multiple":{"label":{"display":"inline","marginRight":"0.5em","&:after":{"content":"','"},"&.last-checked":{"marginRight":0,"&:after":{"content":"none"}}}},".field":{"padding":"6px","marginBottom":0},".input_text, .input_email, textarea, .fake_input":{"border":"none","padding":0,"resize":"none","background":"transparent"},"select":{"padding":0,"border":"none","height":"auto","background":"transparent"},".option_label":{"marginBottom":0,"paddingLeft":"0 !important"},".label":{"display":"none"},"button":{"position":"relative","background":"transparent"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Form"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Form"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_AgentProfileCard,null,null,[],{"addClass":"profile_card"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_AgentProfileCard.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_AgentProfileCard
x.__jx__jcss={"**self":{"marginBottom":"10px",".avatar_cell":{"verticalAlign":"top","width":"32px",".profile_avatar":{"width, height":"32px","bottom":"auto"}},".profile_table .content_cell":{"padding":"0 10px","verticalAlign":"middle"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_agentList_AgentProfileCard"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_agentList_AgentProfileCard"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Button,"send",null,[v(26)],{"id":"send","addClass":"send primary fit"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_AutoResizeTextArea,"textarea",null,[],{"id":"textarea","addClass":"textarea unstyled","placeholder":v(27)}]],{"addClass":"textarea_wrapper"}]],{"addClass":"float_wrapper"}],[b.__$$__meshim_widget_widgets_IconFont,"toggle_picker",null,[],{"id":"toggle_picker","addClass":"toggle_picker","icon":"smiley","tabIndex":"0","tagName":"button"}],[b.__$$__meshim_widget_widgets_EmoticonPicker,"picker",null,[],{"id":"picker","addClass":"picker"}],[b.__$$__jx_ui_Label,null,null,[[b.__$$__jx_ui_Frame,null,null,[v(104)],{}]],{"addClass":"drop_label","tabIndex":"0"}]],{"id":"fake_input","addClass":"fake_input"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__fake_input'),H=w.get(z+'__send'),I=w.get(z+'__textarea'),J=w.get(z+'__toggle_picker'),K=w.get(z+'__picker')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_Config,O=b.__$$__meshim_common_FileUtil,P=b.__$$__meshim_common_QueryString,Q=b.__$$__meshim_widget_controllers_ConnectionController,R=b.__$$__meshim_widget_controllers_DataController,S=b.__$$__meshim_widget_controllers_CookieLaw,T=b.__$$__meshim_widget_controllers_InstrumentationController,U=b.__$$__meshim_widget_utils_BindClass,V=R.root.$('livechat').$('ui').$('chat_window').$('chat_panel'),W=R.root.$('livechat').$('ui').$('chat_button'),X=V.$('emoticon_picker').$('display$bool'),Y,Z=V.$('emoticon_picker').$('value$string'),$$=R.root.$('livechat').$('settings').$('emoticons').$('enabled$bool'),$_=V.$('textarea'),$a=R.root.$$('livechat.channel.typing'),$b=R.root.$('livechat').$('ui').$('theme_loaded$bool'),$c=R.root.$$('livechat.ui.hide_branding$bool'),$d=R.root.$('livechat').$('ui').$('popout$bool'),$e,$f=R.root.$('livechat').$('ui').$('mockup$bool'),$g,$h=R.root.$$('livechat.profile.mid$string'),$i=R.root.$$('livechat.profile.uid$string'),$j=R.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),$k=R.root.$('livechat').$('settings').$('package'),$l,$m,$n
function $o($A){$A.stopPropagation()
$A.preventDefault()
if(!$l)return
if(q.isWebKit){if($A.type=='dragover'){$m=!0
$n&&window.clearTimeout($n)
F.addClass('dragover')}
else{$m=!1
$n=window.setTimeout($B,200)}}
else{$A.type=='dragover'?F.addClass('dragover'):F.removeClass('dragover')}
function $B(){if(!F.dom)return
if($m)return
F.removeClass('dragover')}}
function $p($A,$B){if(!$l)return
$o($A)
var $C
if($B){$C=$A&&$A.dataTransfer&&$A.dataTransfer.files
if(!$C||!$C.length)return
$r($C)}
else;}
var $q
function $r($A){if(!$l||!window.FormData)return
var $B=new window.FormData(),$C=[],$D=[],$E=0
for(var $F=0,$G=$A.length;$F<$G;$F++){if(O.isValidType($A[$F].type)){$C.push($A[$F].name)
$D.push($A[$F].type)
$E+=$A[$F].size||0
$B.append('file_'+$A[$F].name,$A[$F])}
else{$j.update('type')
return}}
if($E>N.FILE_UPLOAD_MAX){$j.update('size')
return}
$C=$C.join(', ')
$D=$D.join(', ')
var $H=R.livechat.sendFile({file_name:$C,file_type:$D,file_size:$E}),$I=new window.XMLHttpRequest(),$J={ts:$H,mid:$h.getValue(),uid:$i.getValue()}
$q='https://'+Q.getHost()+N.FILE_UPLOAD_PATH+'?'+P.buildQuery($J)
if($I.upload){$I.open("POST",$q,!0)
$I.send($B)
T.increment('file_upload')}}
var $s
function $t(){$s=!0
$a.write({'typing$bool':$s})
S.setUserChoice(!0)}
function $u(){$s=!1
$a.write({'typing$bool':$s})}
function $v(){$e=$d.getValue()
$g=$f.getValue()
U.mobile(F)
U.rtl(F)
I.setDataNode($_)
K.setDataNode(X,Z)
I.on('focus',function(){$z()
$y()
G.addClass('focus')
$c.update(!0)})
I.on('blur',function(){G.removeClass('focus')
$c.update(!1)})
F.autobind($b,'value',function(){l(function(){if(!F.dom)return
I.updateStyles()})})
F.autobind($_,'value',function($E){if(!$E)return
if('overflow$bool' in $E){$E['overflow$bool']?F.addClass('overflow'):F.removeClass('overflow')}})
var $A=120000,$B=0
F.autobind($_.$('value$string'),'value',function($E){if(!$E){if($s){window.clearTimeout($B)
$u()}}
else{if(!$s){$t()}
window.clearTimeout($B)
$B=window.setTimeout($u,$A)}})
F.autobind(X,'value',function($E){$E?J.addClass('active'):J.removeClass('active')
Y=$E})
F.autobind($$,'value',function($E){J.setDisplay($E?'':'none')
$E?F.addClass('emoticons_enabled'):F.removeClass('emoticons_enabled')})
F.autobind(Z,'value',function($E){$E&&I.insertAtCaret($E)})
K.on('click',function(){F.focus()})
J.on('click',function($E){$E.stopPropagation()
X.update(!Y)
F.focus()})
var $C=F
while($C&&$C.parentNode&&$C.parentNode.tagName.toLowerCase()!='body'){$C=$C.parentNode}
$C&&$C.on('click',$x)
$e&&r.window.on('click',$x)
F.onDestruction(function(){$C&&$C.un('click',$x)
$e&&r.window.un('click',$x)})
var $D
F.autobind($k,'value',function($E){if(!$E)return
$D=$k.getValue()
if($D['color_customization_enabled$int']||$D['widget_customization_enabled$int']){$l=!0}
else{$l=!1}})
if(window.File&&window.FileList&&window.FileReader){F.on("dragover",$o)
F.on("dragleave",$o)
F.on("drop",function($E){$p($E,!0)})}
I.on('keydown',function($E){if($E.keyCode==13&&!$E.shiftKey&&!$E.ctrlKey&&!$E.altKey){$E.preventDefault()
$w()}})
H.on('click',function(){$z()
$y()
$w()})}
function $w(){var $A=I.getValue().trim()
if($A){R.livechat.sendChatMsg({msg:$A})
I.setValue('')}}
function $x($A){var $B=$A.target.jx_wrapper
while($B&&$B.parentNode&&$B.parentNode!=F){if($B==K)return
$B=$B.parentNode}
X.update(!1)}
function $y(){R.root.$$('livechat.ui.chat_window').update({'menu_stack_name$string':''})}
function $z(){if($e){W.write({'unread_count$int':0})}}
F.focus=function(){if($g)return
I.updateHeight()
I.focus()}
F.blur=function(){I.updateHeight()
I.blur()}
F.updateStyles=function(){I.updateStyles()}
$v()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","width":"100%","padding":"$$chatTextAreaPadding","height":"auto","*zoom":1,"borderWidth":"$$chatTextAreaBorderWidth","borderStyle":"$$chatTextAreaBorderStyle","borderColor":"$$chatTextAreaBorderColor","&.emoticons_enabled.overflow":{".toggle_picker":{}},"&.emoticons_enabled":{".textarea":{}},"&.dragover":{".fake_input":{"boxShadow":"none","border":"none"},".drop_label":{"display":"block"}}},".fake_input":{"position":"relative","overflow":"visible","*zoom":1,"padding":0,"color":"$$chatTextAreaInputColor","background":"$$chatTextAreaInputBg","borderWidth":"$$chatTextAreaInputBorderWidth","borderStyle":"$$chatTextAreaInputBorderStyle","borderColor":"$$chatTextAreaInputBorderColor","borderRadius":"$$chatTextAreaInputRadius","boxShadow":"$$chatTextAreaInputShadow"},".fake_input.focus":{"color":"$$chatTextAreaInputFocusColor","background":"$$chatTextAreaInputFocusBg","borderColor":"$$chatTextAreaInputFocusBorderColor","boxShadow":"$$chatTextAreaInputFocusShadow"},".drop_label, .file_input":{"display":"none","position":"absolute","top, left":0,"width, height":"100%"},".drop_label":{"textAlign":"center","color":"$$chatTextAreaDropColor","background":"$$chatTextAreaDropBg","borderWidth":"$$chatTextAreaDropBorderWidth","borderStyle":"$$chatTextAreaDropBorderStyle","borderColor":"$$chatTextAreaDropBorderColor",".container":{"border":"none","background":"transparent"}},".file_input":{"opacity":0},".toggle_picker":{"position":"absolute","top, right":0,"cursor":"pointer","fontSize":"18px","lineHeight":"24px","&:hover":{},"&:focus":{"outline":"none"}},".picker":{"position":"absolute","bottom":"100%"},".textarea":{"display":"block","width, height":"100%","resize":"none","transition":"height 0.1s ease-in-out","fontSize":"$$chatTextAreaInputFontSize","minHeight":"$$chatTextAreaInputMinHeight","maxHeight":"$$chatTextAreaInputMaxHeight","padding":"$$chatTextAreaInputPadding","lineHeight":"$$chatTextAreaInputLineHeight"},".send":{"display":"none"},".float_wrapper":{"overflow":"hidden"},".textarea_wrapper":{"display":"block","overflow":"hidden"},"&.mobile":{"position":"fixed","zIndex":"1000","padding":0,".fake_input":{},".textarea":{"padding":"10px"},".send":{"display":"block","float":"right","margin":"$$chatTextAreaSubmitMargin","padding":"$$chatTextAreaSubmitPadding"},".toggle_picker":{"display":"none"}},"&.rtl.mobile":{".send":{"float":"left"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatTextArea"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatTextArea"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","class":"content"}]],{"addClass":"chat_bubble"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=/^agent/,K=/^visitor:/,L
function M(){F.setDataNode=N}
function N(P){if(!L){G.setDataNode(P)}
if(L)F.autounbind(L,'value',O)
L=P.$('nick$string')
F.autobind(L,'value',O)}
function O(P){if(!P)return
if(J.test(P)){F.setArrowPointing('left')
F.setFloat('left')}
else if(K.test(P)){F.setArrowPointing('right')
F.setFloat('right')}}
M()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
x.__jx__jcss={"**self":{"maxWidth":"90%","clear":"both","padding":"5px 10px","margin":"0px 5px","radius":"4px",".arrow_border":{"top":"auto !important","bottom":"5px","marginTop":"0px","borderWidth":"6px"},".arrow_background":{"top":"auto !important","bottom":"6px","marginTop":"0px","borderWidth":"5px"},".content":{"marginTop":"0px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatBubble"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatBubble"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ActionBar,null,null,[[b.__$$__jx_ui_html_span,"default_actions",null,[[b.__$$__jx_ui_Button,"settings","backgroundColor:transparent;",[[b.__$$__jx_ui_Label,null,null,[v(144)],{"addClass":"settings_text"}],[b.__$$__jx_ui_Label,null,null,[],{"addClass":"settings_mobile_text","text":"≡"}]],{"id":"settings","addClass":"settings","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}],[b.__$$__jx_ui_html_span,"divider",null,[],{"id":"divider","class":"divider","text":"•"}],[b.__$$__jx_ui_Button,"profile","backgroundColor:transparent;",[[b.__$$__jx_ui_html_span,"logged_out",null,[v(145)],{"id":"logged_out"}],[b.__$$__jx_ui_html_span,"name",null,[],{"id":"name","class":"logged_in_name"}]],{"id":"profile","addClass":"profile","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}]],{"id":"default_actions","display":"none"}],[b.__$$__meshim_widget_widgets_CookieLawNotice,"cookie_law",null,[],{"id":"cookie_law","addClass":"cookie_law"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__default_actions'),H=w.get(z+'__settings'),I=w.get(z+'__divider'),J=w.get(z+'__profile'),K=w.get(z+'__logged_out'),L=w.get(z+'__name'),M=w.get(z+'__cookie_law')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var N=(function(){var P=b.__$$__meshim_widget_controllers_DataController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_Mobile,S={'settings_menu':H,'profile_menu':J},T=P.root.$('livechat'),U=T.$('profile').$('logged_in$bool'),V,W=T.$('profile').$('display_name$string'),X,Y='visible',Z=T.$('settings').$('cookie_law').$('enabled$bool'),$$=T.$('profile').$('allow_cookies$bool'),$_=P.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),$a,$b=T.$('settings').$('theme').$('chat_window').$('size$string'),$c,$d=T.$$('ui.chat_button'),$e=T.$$('ui.popout$bool'),$f=T.$('settings').$('login').$('restrict_profile$bool'),$g,$h=P.root.$('connection').$('message$string')
function $i(){F.autobind($f,'value',function($o){$g=$o
I.setDisplay($o?'none':'')
J.setDisplay($o?'none':'')})
F.autobind($_,'value',function($o){$a=$o
for(var $p in S)if(S.hasOwnProperty($p))S[$p][($p==$o?'add':'remove')+'Class']('active')})
F.autobind(U,'value',function($o){V=$o
$n()})
F.autobind(W,'value',function($o){X=$o||''
$n()})
v&&v.onLanguage&&v.onLanguage($n)
function $n(){if(V){if(X&&!Q.isDefaultName(X)){L.setText(v(127).replace('<name>',X))}
else{L.setText(v(128))}
K.setDisplay('none')
L.setDisplay('')}
else{K.setDisplay('')
L.setDisplay('none')}}
H.on('click',function($o){$o.stopPropagation()
if(R.isIEMobile)$_.update('settings_menu')
else $_.update($a=='settings_menu'?'':'settings_menu')
if($e.getValue()){$d.write({'unread_count$int':0})}})
J.on('click',function($o){$o.stopPropagation()
if($g)return
$_.update($a=='profile_menu'?'':'profile_menu')})
F.autobind($b,'value',function($o){if($c)F.removeClass('action_bar_'+$c)
$c=$o
if($c)F.addClass('action_bar_'+$c)})
F.autobind(Z,'value',$j)
F.autobind($$,'value',$j)
F.autobind($h,'value',$m)}
function $j(){if(!Z.getValue()){$l()}
else{if($$.getValue()){$l()}
else{$k()}}}
function $k(){if(Y=='hidden'){M.setDisplay('')
G.setDisplay('none')
Y='visible'}}
function $l(){if(Y=='visible'){M.setDisplay('none')
G.setDisplay('')
Y='hidden'}}
function $m($n){var $o=!!$n
J.setDisabled($o)
if(!$o)return
if($a=='profile_menu')$_.update('')}
$i()})()
for(var O in N)if(N.hasOwnProperty(O))F[O]=N[O]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ActionBar.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ActionBar
x.__jx__jcss={"button":{"position":"relative","verticalAlign":"top","textAlign":"left","background, backgroundColor":"transparent","border":"none","lineHeight":"$$actionBarHeight"},"button, button *":{"cursor":"pointer","&.disabled":{"cursor":"default","color":"$$actionBarColorDiabled"}},".logged_in_name":{"display":"inline-block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","*height":"1em","*verticalAlign":"top"},".divider":{"display":"inline-block","fontSize":"0.8em","lineHeight":"$$actionBarHeight","margin":"0 5px","cursor":"default","opacity":0.5},"button, .divider":{"color":"$$actionBarColor"},"button:hover":{"color":"$$actionBarHoverColor"},".settings":{".settings_mobile_text":{"display":"none"}},".cookie_law":{"position":"relative"},"&.action_bar_small  .logged_in_name":{"maxWidth, *width":"120px"},"&.action_bar_medium .logged_in_name":{"maxWidth, *width":"160px"},"&.action_bar_large  .logged_in_name":{"maxWidth, *width":"180px"},"&.mobile":{"display":"block",".divider":{"display":"none"},".settings":{"position":"absolute","width, height":"100%","textAlign":"center",".settings_text":{"display":"none"},".settings_mobile_text":{"display":"block","height":"$$titleBarHeight","lineHeight":"$$titleBarHeight","fontSize":"30px"}},".profile":{"display":"none"},"button, .divider":{}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_actionBar_DefaultActionBar"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_actionBar_DefaultActionBar"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,"header",null,[],{"id":"header"}],[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_RatingBar,"rating_bar",null,[],{"id":"rating_bar","addClass":"rating_bar","description":"true"}],[b.__$$__meshim_widget_widgets_motif_Chat,null,null,[],{"addClass":"chat_motif"}]],{"addClass":"scrollable_frame"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__header'),H=w.get(z+'__message'),I=w.get(z+'__rating_bar')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=b.__$$__meshim_widget_utils_BindClass,O=L.root.$('livechat').$('settings').$('forms').$('post_chat_form'),P=O.$('header$string'),Q=O.$('message$string'),R=L.root.$('livechat').$('channel'),S=R.$('rating$string')
function T(){N.mobile(F)
I.setDataNode(S)
F.autobind(P,'value',function(){G.setText(M.get(P))})
F.autobind(Q,'value',function(){H.setText(M.get(Q))})}
T()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={"**self":{"textAlign":"center"},".rating_bar":{"display":"inline-block","width":"150px"},".chat_motif":{"position":"absolute","bottom, left":0},".scrollable_frame":{"paddingBottom":"0 !important"},"&.mobile":{".chat_motif":{"position":"relative"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_RatingForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_RatingForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Status=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_VisitorProfileCard,"profile_card",null,[],{"id":"profile_card","addClass":"profile_card"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out",null,[],{"id":"sign_out","icon":"dustbin","title":v(118)}]],{"addClass":"controls"}]],{"addClass":"positioned"}],[b.__$$__jx_ui_Widget,"phone_container_external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"phone_text_external",null,[],{"id":"phone_text_external","addClass":"phone_text_external break_word"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit_external_phone",null,[],{"id":"edit_external_phone","icon":"pencil","title":v(117)}]],{"addClass":"controls"}]],{"addClass":"positioned"}]],{"id":"phone_container_external","addClass":"phone_container_external"}]],{"id":"external"}],[b.__$$__jx_ui_Widget,"name_email",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"name",null,[],{"id":"name","addClass":"name break_word"}],[b.__$$__jx_ui_Widget,"email",null,[],{"id":"email","addClass":"email break_word"}],[b.__$$__jx_ui_Widget,"phone_text",null,[],{"id":"phone_text","addClass":"phone break_word"}]],{"addClass":"name_email"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit",null,[],{"id":"edit","icon":"pencil","title":v(117)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out_name_email",null,[],{"id":"sign_out_name_email","icon":"dustbin","title":v(118)}]],{"addClass":"controls"}]],{"id":"name_email","addClass":"positioned"}]],{"addClass":"flow"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__external'),H=w.get(z+'__profile_card'),I=w.get(z+'__sign_out'),J=w.get(z+'__phone_container_external'),K=w.get(z+'__phone_text_external'),L=w.get(z+'__edit_external_phone'),M=w.get(z+'__name_email'),N=w.get(z+'__name'),O=w.get(z+'__email'),P=w.get(z+'__phone_text'),Q=w.get(z+'__edit'),R=w.get(z+'__sign_out_name_email')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var S=(function(){var U=b.__$$__meshim_widget_controllers_DataController,V=b.__$$__meshim_widget_utils_Utils,W=b.__$$__meshim_widget_utils_BindClass,X=b.__$$__meshim_widget_utils_Strings,Y=U.root.$('livechat'),Z=Y.$('profile'),$$=Y.$('ui'),$_=Z.$('auth').$('type$string'),$a,$b=Z.$('display_name$string'),$c=Z.$('email$string'),$d=Z.$('phone$string'),$e,$f=Y.$('settings').$('login').$('phone_display$bool'),$g,$h=$$.$('chat_window').$('profile_menu').$('index$int'),$i=$$.$('chat_window').$('menu_stack_name$string')
function $j(){H.setDataNode(Z)
W.mobile(F)
W.rtl(F)
F.autobind($b,'value',function($m){if(V.isDefaultName($m))$m=''
N.setText($m||'')
N.setDisplay($m?'':'none')})
F.autobind($c,'value',function($m){O.setText($m||'')
O.setDisplay($m?'':'none')})
F.autobind($d,'value',function($m){$e=$m
$k()})
F.autobind($f,'value',function($m){$g=$m
$k()})
F.autobind($_,'value',function($m){$a=$m
if($m){G.setDisplay('')
M.setDisplay('none')}
else{G.setDisplay('none')
M.setDisplay('')}
$k()})
function $k(){if($a){J.setDisplay($g?'':'none')
K.setText($e||X.placeholder.phone)
K[$e?'removeClass':'addClass']('placeholder')}
else{if($g&&$e){P.setText($e)
P.setDisplay('')}
else{P.setDisplay('none')}}}
Q.on('click',$l)
L.on('click',$l)
K.on('click',function(){$e||$l()})
function $l(){$h.update(2)}
I.on('click',function(){U.livechat.doExternalLogout()})
R.on('click',function(){Z.write({'display_name$string':'','email$string':'','phone$string':''})
$i.update('')})}
$j()})()
for(var T in S)if(S.hasOwnProperty(T))F[T]=S[T]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Status
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative"},".name_email":{".name":{"paddingRight":"40px"}},"&.rtl .name_email":{".name":{"paddingRight":0,"paddingLeft":"40px"}},".controls":{"position":"absolute","top, right":0,".meshim_widget_widgets_iconFont_Button":{"display":"inline-block","cursor":"pointer","height":"100%","paddingLeft":"5px","color":"$$menuHeaderColor","&:hover, &:focus":{"color":"$$menuColor"}}},"&.rtl .controls":{"right":"auto","left":0,".meshim_widget_widgets_iconFont_Button":{"paddingLeft":0,"paddingRight":"5px"}},".break_word":{"wordWrap":"break-word"},".name, .email, .phone":{"lineHeight":1.5},".phone_text_external":{"paddingRight":"40px","&.placeholder":{"cursor":"pointer","color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"}},"&.rtl .phone_text_external":{"paddingRight":0,"paddingLeft":"40px"},".profile_card":{"cursor":"default",".avatar_cell":{"width":"32px"},".content_cell":{"paddingLeft":"10px"},".profile_name":{"whiteSpace":"nowrap","paddingRight":"20px"}},"&.rtl .profile_card":{".content_cell":{"paddingLeft":0,"paddingRight":"10px"},".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"20px"}},".name":{"fontWeight":"bold"},".positioned":{"position":"relative"},".phone_container_external":{"marginTop, paddingTop":"10px","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"},"&.mobile":{".controls":{"height":"100%",".meshim_widget_widgets_iconFont_Button":{"paddingRight, paddingLeft":"10px"}},".name_email":{".name, .email":{"paddingRight":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":"40px"}},".phone_text_external":{"lineHeight":"32px"}},"&.mobile.rtl":{".name_email":{".name, .email":{"paddingRight":0,"paddingLeft":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"40px"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Status"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Status"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange,J=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange,K=b.__$$__meshim_widget_widgets_chatLogRenderer_Rating,L=b.__$$__meshim_widget_widgets_chatLogRenderer_Comment,M=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg,N=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt,O,P,Q,R
function S(){F.setDataNode=T
F.onDestruction(W)
v.onLanguage&&v.onLanguage(V)}
function T(X){if(O)F.autounbind(O,'value',U)
P=X
O=P.$('type$string')
F.autobind(O,'value',U)}
function U(X){if(!X||Q)return
switch(X){case 'chat.memberjoin':Q=new I(F)
break
case 'chat.memberleave':Q=new I(F)
R=new N(F)
R.setDataNode(P)
break
case 'chat.changename':Q=new J(F)
break
case 'chat.rating':Q=new K(F)
break
case 'chat.comment':Q=new L(F)
break
case 'chat.event':Q=new M(F)
break}
V()}
function V(){if(!P)return
if(Q)Q.setDataNode(P)
if(R)R.setDataNode(P)}
function W(){v.unLanguage&&v.unLanguage(V)}
S()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","background":"$$chatLogSystemMsgBg","borderWidth":"$$chatLogSystemMsgBorderWidth","borderStyle":"$$chatLogSystemMsgBorderStyle","borderColor":"$$chatLogSystemMsgBorderColor","padding":"$$chatLogSystemMsgPadding","textAlign":"center"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_ChatButton=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_FloatingFrame,null,null,[[b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,null,null,[],{}],[b.__$$__meshim_widget_components_chatButton_Bubble,null,null,[],{"addClass":"bubble"}],[b.__$$__meshim_widget_components_chatButton_Button,null,null,[],{"addClass":"button"}]],{"cursor":"pointer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_CookieLaw,K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_controllers_GoogleAnalytics,M=b.__$$__meshim_widget_controllers_PopoutController,N=b.__$$__meshim_widget_controllers_UIController,O=b.__$$__meshim_widget_utils_Utils,P=b.__$$__meshim_widget_utils_Mobile,Q=b.__$$__meshim_widget_controllers_ErrorHandler,R=b.__$$__jx_ui_Widget,S=K.root.$('livechat'),T=S.$('settings'),U=S.$('ui'),V=U.$('chat_button'),W=U.$('chat_button').$('display$bool'),X=-1,Y=U.$('chat_button').$('bubble').$('display$bool'),Z=-1,$$=V.$('button_width$int'),$_=V.$('button_height$int'),$a=V.$('bubble_height$int'),$b=T.$('theme').$('chat_button').$('position$string'),$c,$d=T.$('theme').$('chat_button').$('position_mobile$string'),$e,$f=T.$$('theme.chat_button.h_offset$int'),$g=T.$$('theme.chat_button.v_offset$int'),$h=T.$$('theme.chat_button.h_offset_mobile$int'),$i=T.$$('theme.chat_button.v_offset_mobile$int'),$j=U.$('mobile$bool').getValue(),$k=U.$('mockup$bool').getValue(),$l=S.$('account').$('key$string'),$m,$n=0,$o=10,$p=10,$q=10
function $r(){Q.bind(F.iwin)
F.dom.className='zopim'
F.content.addClass('meshim_widget_Widget')
F.wrapper.addClass(F.__jx__fqname)
F.ibody.style.overflow='hidden'
if($k){F.setPosition('relative')}
if($j){F.wrapper.addClass('mobile').setStyle({position:'absolute',top:0,left:0})
F.content.setStyle('textAlign','left')
F.iframe.style.verticalAlign='top'
$m=new R(F,null,null,null,{tagName:'a',position:'absolute',width:'100%',height:'100%',top:0,left:0})
$m.setAttribute('target',I.POPOUT_WINDOW_PREFIX+$l.getValue())
$m.setAttribute('href',M.getPopoutURL())
$m.on('click',function($D){L.trackEvent('Button Clicked')
$m.setAttribute('href',M.getPopoutURL())
V.write({'unread_count$int':0})
if(J.isCookieDenied()){if(window.confirm(v(0)+'\n\n'+v(1)+': https://www.zopim.com/privacy#cookie')){M.openPopout(!0)&&$D.preventDefault()
J.setUserChoice(!0)}
else{$D.preventDefault()}}
else{M.openPopout(!0)&&$D.preventDefault()}})
F.autobind($h,'value',function($D){$D=parseInt($D)
if($q==$D)return
if(!isNaN($D)&&$D>=0){$q=$D
$B()}})
F.autobind($i,'value',function($D){$D=parseInt($D)
if($o==$D)return
if(!isNaN($D)&&$D>=0){$o=$D
$B()}})
F.autobind($d,'value',function($D){if(!$D||$e==$D)return
if($D!='bl'&&$D!='br')$D='br'
if($e)F.wrapper.removeClass($e)
$e=$D
if($e)F.wrapper.addClass($e)
$B()})
r.window.on('orientationchange',$B)
r.window.on('resize',$B)
r.window.on('scroll',$B)}
if(!$j){F.autobind(Y,'value',function($D){if(Z==$D)return
Z=$D
$v()})
F.autobind($f,'value',function($D){$D=parseInt($D)
if(!isNaN($D)&&$D>=0){$p=$D
$t()}})
F.autobind($g,'value',function($D){$D=parseInt($D)
if(!isNaN($D)&&$D>=0){$n=$D
$t()}})
F.autobind($$,'value',function($D){if(!$D)return
$v()})
F.autobind($_,'value',function($D){if(!$D)return
$v()})
F.autobind($a,'value',function($D){if(!$D)return
$v()})
F.autobind($b,'value',function($D){if($c)F.wrapper.removeClass($c)
$c=$D
if($c)F.wrapper.addClass($c)
$t()})}
F.autobind(W,'value',function($D){if(X==$D)return
X=$D
$s()})
F.on('click',function(){L.trackEvent('Button Clicked')
V.write({'button_clicked$bool':!0})
if($j)M.openPopout(!0)
else N.userShowBadgeOrWindow()})}
function $s(){var $D=X
if($j&&!$z){F.setDisplay('none')}
else{F.setDisplay($D?'':'none')}
$v()}
function $t(){$u()
if(q.bugs.noBoxSizing){window.setTimeout(function(){F.dom.className=F.dom.className},100)}}
function $u(){if($j)return
if($k){F.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($c){case 'br':F.setTop('').setLeft('').setMarginLeft('').setRight($p).setBottom($n)
break
case 'bm':F.setTop('').setRight('').setBottom($n).setLeft('50%').setMarginLeft(-Math.round(F.__width/2)+'px')
break
case 'bl':F.setTop('').setRight('').setMarginLeft('').setBottom($n).setLeft($p)
break
case 'tr':F.setBottom('').setLeft('').setMarginLeft('').setTop($n).setRight($p)
break
case 'tm':F.setRight('').setBottom('').setTop($n).setLeft('50%').setMarginLeft(-Math.round(F.__width/2)+'px')
break
case 'tl':F.setRight('').setBottom('').setMarginLeft('').setTop($n).setLeft($p)
break
default:break}}
function $v(){$x()
l($w,F,'once')}
function $w(){$x()
$B()}
function $x(){if($j)return
var $D=$$.getValue()||10
if($D!==F.getWidth())F.setWidth($D+'px')
var $E=$_.getValue()||10
if(Z)$E+=$a.getValue()||0
if($E!==F.getHeight())F.setHeight($E+'px')}
var $y,$z,$A=300
function $B(){if(!$j)return
window.clearTimeout($y)
$y=window.setTimeout($C,$A)}
function $C(){var $D=P.getZoomLevel(),$E=(1/$D).toFixed(2),$F=window.pageXOffset,$G=window.pageYOffset,$H=window.innerWidth,$I=window.innerHeight,$J=F.wrapper.getWidth(),$K=F.wrapper.getHeight()
for(var $L=0,$M=O.cssom_prefixes.length;$L<$M;$L++){F.wrapper.setStyle(O.cssom_prefixes[$L]+'Transform','scale('+$E+')')
F.wrapper.setStyle(O.cssom_prefixes[$L]+'TransformOrigin','0 0')}
var $N=$J/$D,$O=$K/$D,$P=P.getOffset(),$Q=(q.isIOS&&$D>=1)?'absolute':'fixed',$R,$S,$T,$U
F.setStyle({position:$Q,width:$N+'px',height:$O+'px',top:'',right:'',bottom:'',left:''})
if($Q==='fixed'){$R='auto'
$S=$e==='bl'?'auto':($q/$D)+'px'
$T=($o/$D)+'px'
$U=$e==='bl'?($q/$D)+'px':'auto'}
else{$R=Math.ceil($G+$I-$O-($o/$D)-$P.top)+'px'
$S='auto'
$T='auto'
if($e==='bl'){$U=Math.ceil($F+($q/$D)-$P.left)+'px'}
else{$U=Math.floor($F+$H-$N-($q/$D)-$P.left)+'px'}}
F.setStyle({top:$R,right:$S,bottom:$T,left:$U})
if(!$z){$z=!0
F.setDisplay(X?'':'none')}}
$r()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_ChatButton
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
x.__jx__jcss={"**self":{"*width":"100%"},"&.bm, &.tm":{"margin":"0 auto"},"&.rm, &.lm":{".favicon":{"transform":"rotate(-90deg)","filter":"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}},"&.br, &.bm, &.bl":{".button":{"borderTopLeftRadius, borderTopRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderTopLeftRadius":0,"borderTopRightRadius":"$$chatButtonRadius"}},"&.tr, &.tm, &.tl":{".button":{"borderBottomLeftRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderBottomLeftRadius":0,"borderBottomRightRadius":"$$chatButtonRadius"}},"&.rm":{".button":{"borderTopLeftRadius, borderBottomLeftRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"}},"&.lm":{".button":{"borderTopRightRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopRightRadius":"$$chatButtonRadius"}},"&.mobile":{".button":{"borderRadius":"$$chatButtonRadius"},"&.br":{".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"}},"&.bl":{".favicon":{"borderBottomRightRadius":"$$chatButtonRadius"}}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatButton"].join('')
x.prototype.__jx__fqname="meshim_widget_components_ChatButton"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"log_avatar","hideAuthType":"true"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","addClass":"content"}]],{}]],{}]],{}]],{"class":"basicAvatarRenderer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__avatar'),H=w.get(z+'__content')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K
function L(){F.setDataNode=M}
function M(O){if(K)F.autounbind(K,'value',N)
H.setDataNode(O)
K=O.$('nick$string')
F.autobind(K,'value',N)}
function N(O){if(!O)return
G.setMemberId(O)}
L()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_table.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_table
x.__jx__jcss={"**self":{"position":"relative","width":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","fontSize":"100%","td":{"verticalAlign":"top","padding":"0px"},".log_avatar":{"width":"24px","height":"24px"},".avatar_cell":{"width":"24px"},".content":{"marginTop":"0px","marginLeft":"8px"}},"**self.group_children":{".log_avatar":{"display":"none"},".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__jx_ui_ViewStack,"stack",null,[[b.__$$__meshim_widget_widgets_AgentProfileCard,"agent_card",null,[],{"id":"agent_card","addClass":"card"}],[b.__$$__meshim_widget_widgets_MultiProfilesCard,"multi_agents_card",null,[],{"id":"multi_agents_card","addClass":"card cursor_pointer"}]],{"id":"stack"}]],{"pseudo":"served_by_cell"}],[b.__$$__jx_ui_html_td,"rating_cell",null,[],{"pseudo":"rating_cell","id":"rating_cell","class":"display_none"}]],{}]],{}]],{"class":"profile_table"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__stack'),H=w.get(z+'__agent_card'),I=w.get(z+'__multi_agents_card'),J=w.get(z+'__rating_cell')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_controllers_GoogleAnalytics,O=b.__$$__meshim_widget_utils_Utils,P=b.__$$__meshim_widget_widgets_RatingBar,Q=null,R=M.root.$('livechat'),S=R.$('channel'),T=R.$('agents'),U=S.$('served$bool'),V=S.$('rating$string'),W=R.$('settings').$('concierge'),X=R.$('features').$('rating$bool'),Y=R.$('settings').$('rating').$('enabled$bool'),Z=R.$('ui').$('chat_window').$('main_stack_name$string'),$$=R.$('ui').$('chat_button'),$_=R.$('ui').$('popout$bool'),$a=R.$('ui').$('mobile$bool').getValue()
function $b(){G.on('instantiate',function($i){var $j=G.children[$i]
$j.onGravatarClick=$d
$j.onContentClick=$d
if($i===0)H=$j
else I=$j})
G.setIndex(0)
F.autobind(T,'keys',$c)
F.autobind(X,'value',$e)
F.autobind(Y,'value',$e)
F.autobind(U,'value',$e)
if($a){F.addClass('mobile')}}
function $c(){var $i=T.getKeys().length
if($i>1){if(G.getIndex()===1)return
G.setIndex(1)
H.setDataNode(null)
I.setDataNode(T)}
else{if(G.getIndex()!==0){G.setIndex(0)
I.setDataNode(null)}
var $j
if($i===1){$j=T.$(T.getKeys()[0])
H.addClass('cursor_pointer')}
else{$j=W
H.removeClass('cursor_pointer')}
H.setDataNode($j)}}
function $d(){if($_.getValue()){$$.write({unread_count$int:0})}
if(!T.getKeys().length)return
Z.update('agent_list')}
function $e(){var $i=n(X.getValue()),$j=n(Y.getValue()),$k=n(U.getValue())
$f($i&&$j&&$k)}
function $f($i){if($i){if(!Q)$g()
J.removeClass('display_none')}
else{J.addClass('display_none')}}
function $g(){Q=new P(J).setPseudo('rating_bar')
Q.setDataNode(V)
Q.setSize('small')
Q.on('change',$h)}
function $h($i){V&&O.writeNode(V,$i)
var $j='chat_panel',$k={good:'Good',bad:'Bad'}
N.trackEvent('Chat_Rating_'+($k[$i]||'Removed'),$j)}
$b()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"height":"100%",".profile_table":{"width":"100%"},".card":{".avatar_cell":{"width":"50px","verticalAlign":"bottom",".profile_avatar":{"position":"absolute","bottom":"0","width, height":"50px","borderWidth":"$$chatPanelProfileCardAvatarBorderWidth","borderStyle":"$$chatPanelProfileCardAvatarBorderStyle","borderColor":"$$chatPanelProfileCardAvatarBorderColor","borderRadius":"$$chatPanelProfileCardAvatarRadius","boxShadow":"$$chatPanelProfileCardAvatarShadow"}},".content_cell":{"padding":"0 10px","verticalAlign":"bottom","width":"100%",".profile_name, .profile_title":{"overflow":"hidden","width":"100%","whiteSpace":"nowrap"}}},".rating_cell":{"width":"52px","verticalAlign":"middle"},".cursor_pointer":{"cursor":"pointer"},".display_none":{"display":"none"}},"&.mobile":{".card":{".avatar_cell":{"width":"40px","verticalAlign":"middle",".profile_avatar":{"position":"relative","width, height":"40px"}},".content_cell":{"verticalAlign":"middle",".profile_name":{"marginTop":"3px"}}},".rating_cell":{"width":"88px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,"left_cell",null,[],{"id":"left_cell"}],[b.__$$__jx_ui_html_td,"right_cell",null,[],{"id":"right_cell"}]],{}]],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__left_cell'),H=w.get(z+'__right_cell')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_widgets_Avatar,L=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,M,N,O=/^agent/
function P(){F.setDataNode=Q}
function Q(S){if(M)F.autounbind(M,'value',R)
N=S
M=S.$('nick$string')
F.autobind(M,'value',R)}
function R(S){if(!S)return
G.empty()
H.empty()
G.removeClass('avatar_cell')
H.removeClass('avatar_cell')
if(O.test(S)){new K(G).setHideAuthType(!0).setMemberId(S).addClass('log_avatar')
new L(H).setDataNode(N)
G.addClass('avatar_cell')}
else{new K(H).setHideAuthType(!0).setMemberId(S).addClass('log_avatar')
new L(G).setDataNode(N)
H.addClass('avatar_cell')}}
P()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_table.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_table
x.__jx__jcss={"**self":{"position":"relative","width":"100%","fontSize":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","td":{"verticalAlign":"bottom","padding":"0px"},".chat_bubble":{"display":"inline","margin":"0 8px"},".log_avatar":{"width":"32px","height":"32px"},".avatar_cell":{"width":"32px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_form_Profile,null,null,[],{"hideLabel":"","disabled":"true"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form","readOnly":"true"}]],{"addClass":"form_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"another",null,[v(102)],{"id":"another","addClass":"wide"}]],{"addClass":"controls"}]],{}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__message'),H=w.get(z+'__form'),I=w.get(z+'__another')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Strings,N=L.root.$('livechat'),O=N.$('settings').$('forms').$('offline_form'),P=O.$('form'),Q=O.$('form_submitted'),R=O.$('post_submit_message$string'),S=N.$('ui').$('chat_window').$('pre_chat_offline_form'),T=S.$('stack_index$int')
function U(){H.setDataNode(P)
F.autobind(R,'value',function(){G.setText(M.get(R))})
F.autobind(T,'value',function(V){if((V==1)&&(!Q.getValue()))l(function(){T.update(0)})})
I.on('click',function(){T.update(0)})}
U()})()
for(var K in J)if(J.hasOwnProperty(K))F[K]=J[K]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".form_container":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".profile_form":{},".generated_form":{"marginBottom":"5px"},".controls":{"marginTop":"15px","marginBottom":"10px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,"bubble",null,[],{"id":"bubble","addClass":"chat_bubble"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"clear_both"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__bubble')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){function J(){F.setDataNode=function(K){G.setDataNode(K)}}
J()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{".clear_both":{"clear":"both","height":"0px","overflow":"hidden","lineHeight":"0px","fontSize":"0px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareForm,"form_container",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,"pre_chat_message",null,[],{"id":"pre_chat_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message",null,[[b.__$$__jx_ui_Widget,"offline_message_msg",null,[],{"id":"offline_message_msg"}],[b.__$$__jx_ui_Widget,"offline_operating_hours_link",null,[v(100)],{"id":"offline_operating_hours_link","addClass":"operating_hours_link"}]],{"id":"offline_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message_disabled",null,[],{"id":"offline_message_disabled","addClass":"greetings_message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareSubmit,"submit",null,[],{"id":"submit","addClass":"submit"}],[b.__$$__meshim_widget_widgets_Button,"back",null,[v(101)],{"id":"back","addClass":"back secondary"}]],{}]],{"id":"form_container","addClass":"form_container","noValidate":"true"}]],{"absPaddingBottom":"bottomHeight"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form_container'),H=w.get(z+'__pre_chat_message'),I=w.get(z+'__offline_message'),J=w.get(z+'__offline_message_msg'),K=w.get(z+'__offline_operating_hours_link'),L=w.get(z+'__offline_message_disabled'),M=w.get(z+'__profile'),N=w.get(z+'__form'),O=w.get(z+'__submit'),P=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var Q=(function(){var S=b.__$$__meshim_widget_controllers_DataController,T=b.__$$__meshim_widget_controllers_GoogleAnalytics,U=b.__$$__meshim_widget_controllers_UIController,V=b.__$$__meshim_widget_utils_Strings,W={OFFLINE_DISABLED:'OFFLINE_DISABLED',OFFLINE:'OFFLINE',ONLINE:'ONLINE',ONLINE_OFFLINE:'ONLINE_OFFLINE',ONLINE_CHATTING:'ONLINE_CHATTING'},X={DEPARTMENT:'department',MESSAGE:'message'},Y=S.root.$('livechat'),Z=Y.$('ui').$('chat_window').$('pre_chat_form'),$$=Z.$('form_populate$bool'),$_=Z.$('submitted$bool'),$a=Y.$('settings').$('forms').$('pre_chat_form'),$b=$a.$('form'),$c=$a.$('form_submitted'),$d=$a.$('profile_required$bool'),$e=$a.$('message$string'),$f,$g=$b.$('2').$('required$bool'),$h=$b.$('3').$('required$bool'),$i=$c.$('2').$('value$string'),$j=$c.$('3').$('value$string'),$k=$b.$('4').$('required$bool'),$l,$m=Y.$('settings').$('forms').$('offline_form'),$n=$m.$('form_submitted'),$o=$m.$('message$string'),$p,$q=$m.$('message_disabled$string'),$r,$s=$m.$('form'),$t=$s.$('2'),$u=$s.$('3').$('required$bool'),$v,$w=Y.$('ui').$('chat_window').$('offline_form'),$x=$w.$('form_populate$bool'),$y=Y.$('ui').$('chat_window').$('pre_chat_offline_form'),$z=$y.$('stack_index$int'),$A=Y.$('departments'),$B=Y.$('account').$('status$string'),$C=Y.$('channel').$('chatting$bool'),$D=Y.$('ui').$('chat_window').$('main_stack_name$string'),$E=Y.$('settings').$('chat_button').$('hide_when_offline$bool'),$F=Y.$('settings').$('operating_hours').$('enabled$bool'),$G,$H=Y.$('settings').$('operating_hours').$('display_notice$bool'),$I,$J=Y.$('settings').$('login').$('restrict_profile$bool'),$K,$L=Y.$('profile').$('department_id$int'),$M=Y.$('ui').$('popout$bool').getValue(),$N,$O,$P,$Q
function $R(){N.setDataNode($b)
F.autobind($e,'value',function($Y){$f=$Y
H.setText(V.get($e))
$T()})
F.autobind($o,'value',function($Y){$p=$Y
J.setText(V.get($o))
$T()})
F.autobind($q,'value',function($Y){$r=$Y
L.setText(V.get($q))
$T()})
F.autobind($$,'value',function($Y){n($Y)&&N.populateSelf()})
F.autobind($x,'value',function($Y){n($Y)&&N.populateSelf()})
F.autobind($C,'value',function($Y){if($Y==$O)return
$O=$Y
$T()})
F.autobind($B,'value',function($Y){if($Y==$N)return
$N=$Y
$T()})
F.autobind($E,'value',function($Y){if($Y==$Q)return
$Q=$Y
$T()})
F.autobind($k,'value',function($Y){$l=$Y
$T()})
F.autobind($u,'value',function($Y){$v=$Y
$T()})
F.autobind($F,'value',function($Y){$G=$Y
$T()})
F.autobind($H,'value',function($Y){$I=$Y
$T()})
F.autobind($J,'value',function($Y){$K=$Y
$T()})
F.autobind($A,'value',$S)
N.on('change',$S)
function $S(){var $Y=N.getField(X.DEPARTMENT)
if(!$Y)return
var $Z=$Y.input.getValue(),$0
if(!$Z){$0=!0}
else{var $1=$A.$($Z).$('status$string').getValue()
$0=$1!='offline'}
if($0==$P)return
$P=$0
$T()}
function $T(){var $Y=$W(),$Z=N.getField(X.DEPARTMENT),$0=N.getField(X.MESSAGE)
if($Y==W.OFFLINE_DISABLED){L.setDisplay($r?'':'none')
M.setDisplay('none')
N.setDisplay('none')}
else{L.setDisplay('none')
M.setDisplay('')
N.setDisplay('')}
switch($Y){case W.OFFLINE_DISABLED:H.setDisplay('none')
I.setDisplay('none')
O.setValue(V.pre_chat_offline_form.button_disabled)
$X(!1)
break
case W.OFFLINE:H.setDisplay('none')
I.setDisplay(($p||$U())?'':'none')
M.setRequired(!0)
M.setPhoneRequired($v)
if($Z){$Z.setRequired(!1)
$Z.input&&$Z.input.setHide(!0)}
$0&&$0.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$X(!1)
break
case W.ONLINE:H.setDisplay($f?'':'none')
I.setDisplay('none')
M.setRequired($d.getValue())
M.setPhoneRequired($l)
if($Z){$Z.setRequired($g.getValue())
$Z.input&&$Z.input.setHide(!1)}
$0&&$0.setRequired($h.getValue())
O.setValue(V.pre_chat_offline_form.button_chat)
$X(!1)
break
case W.ONLINE_OFFLINE:H.setDisplay($f?'':'none')
I.setDisplay('none')
M.setRequired(!0)
M.setPhoneRequired($v)
if($Z){$Z.setRequired($g.getValue())
$Z.input&&$Z.input.setHide(!1)}
$0&&$0.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$X(!1)
break
case W.ONLINE_CHATTING:H.setDisplay('none')
I.setDisplay(($p||$U())?'':'none')
M.setRequired(!0)
M.setPhoneRequired($v)
if($Z){$Z.setRequired(!1)
$Z.input&&$Z.input.setHide(!0)}
$0&&$0.setRequired(!0)
O.setValue(V.pre_chat_offline_form.button_message)
$X(!0)
break}
K.setDisplay($U()?'':'none')
if($K){M.setDisplay('none')
M.setRequired(!1)}}
function $U(){var $Y=$W()
if(($Y==W.OFFLINE||$Y==W.ONLINE_CHATTING)&&$G&&$I){return !0}
else{return !1}}
G.onConnectedAndSubmit(function($Y){$Y.preventDefault()
var $Z=$W(),$0,$1
if($Z!=W.OFFLINE_DISABLED&&!F.validate(!0))return
var $2=N.getField(X.DEPARTMENT),$3
$2.input&&($3=$A.$($2.input.getValue()).$('name$string')||'')
M.submit()
switch($Z){case W.OFFLINE_DISABLED:if($M){window.close()}
else{U.userHideWindow()}
break
case W.OFFLINE:T.trackEvent('Offline Message Sent')
N.submit($n,M)
$V()
$z.update(1)
break
case W.ONLINE:T.trackEvent('Chat Request Form Submitted',$3)
N.submit($c,M)
$1={msg:$j.getValue()||''}
if($2.input&&!$2.input.isHidden()){$0=parseInt($i.getValue(),10)||0
$L.parentNode.write({department_id$int:$0})
$1.department=$0}
S.livechat.sendChatMsg($1)
$_.update(!0)
$D.update('chat_panel')
break
case W.ONLINE_OFFLINE:T.trackEvent('Offline Message Sent',$3)
N.submit($n,M)
$V()
$z.update(1)
break
case W.ONLINE_CHATTING:N.submit($n,M)
$D.update('chat_panel')
break}
N.reset()
$S()})
function $V(){$t.update({value_user$string:N.getInput('message').getValue()})}
P.on('click',function(){$D.update('chat_panel')})
function $W(){if($N=='banned')return W.OFFLINE_DISABLED
if($N=='offline')return $Q?W.OFFLINE_DISABLED:W.OFFLINE
if($O)return W.ONLINE_CHATTING
else return $P?W.ONLINE:W.ONLINE_OFFLINE}
function $X($Y){if($Y){O.removeClass('wide')
P.setDisplay('')}
else{O.addClass('wide')
P.setDisplay('none')}}
K.on('click',function($Y){if(!$Y||!$Y.target||!$Y.target.jx_wrapper||!$Y.target.jx_wrapper.hasClass('operating_hours_link')){return}
$z.update(2)})}
$R()})()
for(var R in Q)if(Q.hasOwnProperty(R))F[R]=Q[R]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
x.__jx__jcss={".greetings_message, .generated_form":{"marginBottom":"$$marginL"},".form_container":{"width, height":"100%"},".operating_hours_link":{"textDecoration":"underline","cursor":"pointer"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_Form"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_Form"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('agents'),L=J.$('triggers').$('agents'),M=J.$('ui').$('chat_window'),N=[]
function O(){F.autobind(K,'value',P)
F.autobind(L,'value',P)
if(v&&v.onLanguage){v.onLanguage(P)
F.onDestruction(function(){v.unLanguage(P)})}}
function P(){var Q=K.getValue(),R=L.getValue()
N.length=0
var S
if(Q)for(S in Q)if(Q.hasOwnProperty(S))if(Q[S]['typing$bool'])N.push(Q[S]['display_name$string'])
if(R)for(S in R)if(R.hasOwnProperty(S))if(R[S]['typing$bool'])N.push(S)
if(N.length){F.setText((N.length==1?v(151):v(152)).replace('<name>',N.join(', ')))
F.setDisplay('')
M.update({'agent_typing$bool':!0})}
else{F.setDisplay('none')
M.update({'agent_typing$bool':!1})}}
O()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
x.__jx__jcss={"**self":{"width":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_TypingRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_TypingRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ChatWindowPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"container":"default","addClass":"container","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"chat_window_panel_branding","hideOnDesktop":"true"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__$$defaultplacement$$')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
F.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_utils_BindClass
function K(){J.mobile(F)
J.popout(F)
J.tablet(F)
J.windowSize(F,'cwp_')
J.windowPosition(F,'cwp_')}
K()
var L=b.__$$__meshim_widget_widgets_TitleBar
F.titleBar
F.setTitleBar=function(O){if(F.titleBar)return
var P=O.split(',')
if(f('none',P)!=-1){F.titleBar=!0
F.setStyle('padding-top',0)
return}
F.titleBar=new L(F)
for(var Q=0,R=P.length;Q<R;Q++){switch(P[Q]){case 'hidePopout':F.titleBar.setHidePopout(!0)
break}}}
F.getDraggableNode=function(){return (F.titleBar instanceof L)?F.titleBar:null}
var M=b.__$$__meshim_widget_widgets_ActionBar,N=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
F.actionBar
F.setActionBar=function(O){if(F.actionBar)return
var P=O.split(',')
if(f('none',P)!=-1){F.actionBar=!0
F.setStyle('padding-bottom',0)
return}
if(f('default',P)!=-1){F.actionBar=new N(F)}
else{F.actionBar=new M(F)}}
F.setHideBrandingMobile=function(O){if(n(O)){F.addClass('hide_branding_mobile')}
else{F.removeClass('hide_branding_mobile')}}})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","overflow":"hidden","paddingTop":"$$titleBarHeight","paddingBottom":"$$actionBarHeight","margin":"$$chatWindowPanelMargin",".container":{"width, height":"100%","background":"$$windowContentBg","borderWidth":"$$windowContentBorderWidth","borderStyle":"$$windowContentBorderStyle","borderColor":"$$windowContentBorderColor"}},"&.cwp_small":{"width":"$$windowSmallWidth","height":"$$windowSmallHeight"},"&.cwp_medium":{"width":"$$windowMediumWidth","height":"$$windowMediumHeight"},"&.cwp_large":{"width":"$$windowLargeWidth","height":"$$windowLargeHeight"},"&.mini":{"width":"$$windowMiniWidth","height":"$$windowMiniHeight"},"&.popout":{"width, height":"100%"},"&.mobile":{"paddingTop":"$$titleBarHeight","overflow":"auto","width":"auto","height":"auto","paddingBottom":"0","&":"$$chatWindowPanelInner",".container":{"height":"auto"},".wrapper_container":{"margin":"0 auto","maxWidth":"$$mobileMaxWidthS","height":"auto","border":"none",".bottom, .bottom_inner":{"position":"relative","padding":"10px"}},".chat_window_panel_branding":{"display":"block","padding":"5px","margin":"10px 0","textAlign":"center"},"&.hide_branding_mobile .chat_window_panel_branding":{"display":"none !important"}},"&.tablet":{".wrapper_container":{"maxWidth":"$$mobileMaxWidth"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_ProfileMenu=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_profileMenu_Login,null,null,[],{"addClass":"login"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Status,null,null,[],{"addClass":"status"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit,null,null,[],{"addClass":"edit"}]],{"id":"vs"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),L=J.root.$('livechat').$('profile').$('logged_in$bool'),M,N=J.root.$('livechat').$('settings').$('login').$('allowed_types'),O,P
function Q(){F.autobind(N,'value',function(){var S=N.getValue()
O=0
for(var T in S)if(S.hasOwnProperty(T)){if(T=='email$bool')continue
if(S[T]){O++}}})
F.autobind(K,'value',function(S){if(P)return
G.setIndex(isNaN(S)?R():S)})
G.on('indexChange',function(S){P=!0
K.update(S)
P=!1})
F.autobind(L,'value',function(S){M=S
R()})
F.on('hide',R)}
function R(){G.setIndex(M?1:(O?0:2))}
Q()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ProfileMenu
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ProfileMenu"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_ProfileMenu"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_RatingPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast,null,null,[],{}],[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,"rating_desc",null,[v(31)],{"id":"rating_desc","addClass":"rating_desc"}],[b.__$$__meshim_widget_widgets_RatingBar,"rating_bar",null,[],{"id":"rating_bar","addClass":"rating_bar"}],[b.__$$__jx_ui_Widget,null,null,[v(36)],{"addClass":"comment_intro"}],[b.__$$__meshim_widget_widgets_TextArea,"comment_area",null,[],{"id":"comment_area","addClass":"comment_area","rows":"4","placeholder":v(37)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_ConnAwareSubmit,"send",null,[],{"id":"send","addClass":"send","value":v(26)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"cancel secondary"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__rating_desc'),H=w.get(z+'__rating_bar'),I=w.get(z+'__comment_area'),J=w.get(z+'__send'),K=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=b.__$$__meshim_widget_controllers_GoogleAnalytics,P=b.__$$__meshim_widget_utils_Utils,Q={NOT_RATED:v(31),RATED_GOOD:v(32),RATED_BAD:v(33),UNRATED:v(34)},R={DURING_CHAT:v(29),END_CHAT:v(35)},S=N.root.$('livechat'),T=S.$('channel'),U=T.$('rating$string'),V=T.$('comment$string'),W=S.$('ui').$('chat_window').$('main_stack_name$string'),X=S.$('ui').$('chat_window').$('rating_panel').$('end_chat$bool'),Y
function Z(){F.autobind(X,'value',$$)
H.setDataNode(U)
H.setSize('big')
J.on('click',$c)
K.on('click',function(){$d(!0)})
F.on('show',$e)
F.autobind(U,'value',$_)
H.on('change',$a)}
function $$($f){Y=$f
K.setText($f?R.END_CHAT:R.DURING_CHAT)}
function $_($f){if(!$f)G.setText(Q.NOT_RATED)
else $b($f)}
function $a(){var $f=H.getValue()
if(!$f)G.setText(Q.UNRATED)
else $b($f)}
function $b($f){G.setText($f=='good'?Q.RATED_GOOD:Q.RATED_BAD)}
function $c(){var $f={good:'Good',bad:'Bad'},$g='rating_panel'+(Y?'_end_chat':'_during_chat'),$h=H.getValue(),$i=U&&U.getValue(),$j
if($h!==$i){U&&P.writeNode(U,$h)
O.trackEvent('Chat_Rating_'+($f[$h]||'Removed'),$g)
$j=!0}
var $k=I.getValue().trim()
if($k){T.write({comment$string:$k})
O.trackEvent('Chat_Comment_Submitted',$g)
$j=!0}
$d(!$j)}
function $d($f){W.update('chat_panel')
window.setTimeout(function(){if(Y){N.livechat.endChat()
X.update(null)}},$f?0:2000)}
function $e(){H.setValue(U.getValue())
$_(U.getValue())
I.setValue(V.getValue()||'').focus()}
Z()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_RatingPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".rating_desc":{"textAlign":"center","marginBottom":"15px"},".rating_bar":{"marginBottom":"25px"},".comment_intro":{"fontWeight":"700"},".comment_area":{"overflow":"auto","marginTop":"15px"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_RatingPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_RatingPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_NewChatForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[[b.__$$__jx_ui_Widget,"content",null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner,"banner",null,[],{"id":"banner","addClass":"banner"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_Branding,null,null,[],{"addClass":"branding"}]],{"addClass":"branding_container"}],[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","addClass":"close","icon":"minimize","title":v(25)}]],{"id":"content","addClass":"content"}],[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_IconFont,"submit",null,[],{"id":"submit","icon":"send","addClass":"send","title":v(26)}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField,"input",null,[],{"id":"input","addClass":"input","autocomplete":"false","placeholder":v(27),"tabIndex":"10"}]],{"class":"input_wrapper"}]],{"id":"form","addClass":"form","noValidate":"true"}]],{"absPaddingBottom":"badgeFormHeight"}]],{"titleBar":"none","actionBar":"none","addClass":"mini"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__content'),H=w.get(z+'__banner'),I=w.get(z+'__close'),J=w.get(z+'__form'),K=w.get(z+'__submit'),L=w.get(z+'__input')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var M=(function(){var O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_controllers_UIController,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_BindClass,S=O.root.$('livechat'),T=S.$('ui').$('chat_window').$('main_stack_name$string'),U=S.$('ui').$('chat_window').$('chat_panel').$('textarea').$('value$string'),V=S.$('ui').$('chat_button'),W=S.$('settings').$('forms').$('pre_chat_form').$('required$bool'),X,Y=S.$('settings').$('forms').$('pre_chat_form').$('form').$('3').$('value_user$string'),Z=S.$('ui').$('chat_window').$('pre_chat_form').$('submitted$bool'),$$,$_=S.$('ui').$('chat_window').$('pre_chat_form').$('form_populate$bool'),$a=S.$('settings').$('branding').$('hide_branding$bool')
function $b(){R.rtl(F)
R.windowPosition(F)
Q.hoverFix(F)
F.autobind(W,'value',function($e){X=$e})
F.autobind(Z,'value',function($e){$$=$e})
F.autobind($a,'value',function($e){H[$e?'addClass':'removeClass']('hide_branding')})
J.on('submit',function($e){$e.preventDefault()
$c()})
K.on('click',function(){$c()})
I.on('click',function($e){$e.stopPropagation()
P.userHideBanner()})
G.on('click',function(){var $e=L.getValue().trim()
if($e)U.update($e)
L.reset()
V.write({'button_clicked$bool':!0})
$d()})}
function $c(){var $e=L.getValue().trim()
if(!$e){L.focus()
return}
L.reset()
$d($e)}
function $d($e){P.setBannerUserHidden()
if(X&&!$$){Y.update($e||'')
$_.update(!0)
T.update('pre_chat_offline_form')}
else{$e&&O.livechat.sendChatMsg({msg:$e})
T.update('chat_panel')}}
$b()})()
for(var N in M)if(M.hasOwnProperty(N))F[N]=M[N]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_NewChatForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".container":{"background":"$$badgeBg","borderWidth":"$$badgeBorderWidth","borderStyle":"$$badgeBorderStyle","borderColor":"$$badgeBorderColor"},".content":{"width":"100%","height":"100%","overflow":"hidden","color":"$$badgeContentColor","background":"$$badgeContentBg","borderWidth":"$$badgeContentBorderWidth","borderStyle":"$$badgeContentBorderStyle","borderColor":"$$badgeContentBorderColor"},".banner":{"width":"100%","height":"100%","position":"relative","cursor":"pointer","fontSize":"1.5em","padding":"20px 10px 10px","&.hide_branding":{"paddingTop":"10px"}},".branding_container":{"position":"absolute","top":"6px","left":0,"width":"100%","textAlign":"center","cursor":"pointer",".branding":{"cursor":"pointer"}},".close":{"position":"absolute","cursor":"pointer","opacity":0,"transition":"opacity 0.2s","top, right":0,"padding":"9px 10px 2px 2px"},"&.rtl .close":{"left":"6px","right":"auto","padding":"3px 2px 2px 4px"},"&.hover, &:hover":{".close":{"opacity":1}},".send":{"float":"right","fontSize":"$$fontSizeXXL","padding":"5px","margin":"5px","color":"$$badgeIconColor","opacity":"0.8","cursor":"pointer","&:hover":{"opacity":"1"}},".form":{"position":"absolute","overflow":"hidden","bottom, left":0,"width":"100%","*zoom":1,"height":"$$badgeFormHeight","background":"$$badgeFormBg","borderWidth":"$$badgeFormBorderWidth","borderStyle":"$$badgeFormBorderStyle","borderColor":"$$badgeFormBorderColor",".input_wrapper":{"display":"block","overflow":"hidden","*width":"165px",".input":{"width":"100%","height":"100%","position":"relative","*width":"165px","*overflow":"hidden"}},".button":{"*width":"60px"}},"&.ltr .form":{".input":{"paddingRight":0},".button":{"float":"right"}},"&.rtl .form":{".input":{"paddingLeft":0},".button":{"float":"left"}},"&.br, &.bm, &.bl":{".content":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"}},"&.tr, &.tm, &.tl":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_NewChatForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_NewChatForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_AboutPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Zopim Live Chat"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2008-2014 Zopim Technologies Pte Ltd. All rights reserved."}],[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Open Source Licenses"}]],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"chroma.js - JavaScript library for color conversions"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2011-2013, Gregor Aisch. All rights reserved."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"3. The name Gregor Aisch may not be used to endorse or promote products derived from this software without specific prior written permission."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."}]],{"class":"break_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"store.js"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2010-2013 Marcus Westin"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."}]],{"class":"break_top"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(30)],{"id":"back","addClass":"back wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function L(){G.on('click',function(){K.update('chat_panel')})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AboutPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".break_top":{"padding":"10px 0","borderTop":"1px solid","borderColor":"$$inputColor","fontSize":"$$fontSizeXS",".meshim_widget_widgets_Body":{"color":"$$inputColor","marginBottom":"$$marginS"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AboutPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_AboutPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_AgentList=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,"scrollable_frame",null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list","addClass":"list"}],[b.__$$__meshim_widget_widgets_motif_Chat,"chat_motif",null,[],{"id":"chat_motif","addClass":"chat_motif"}]],{"id":"scrollable_frame"}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[v(30)],{"id":"back","addClass":"back wide"}]],{"addClass":"padding_bottom"}]],{"absPaddingBottom":"bottomHeightBottomPadding"}]],{"titleBar":"hidePopout","actionBar":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__scrollable_frame'),H=w.get(z+'__list'),I=w.get(z+'__chat_motif'),J=w.get(z+'__back')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard,O=M.root.$('livechat').$('agents'),P=M.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function Q(){H.setRenderer(N)
H.setDataNode(O)
F.autobind(O,'keys',function(){l(function(){if(!F.dom)return
var R=H.offsetHeight,S=G.getHeight(),T=I.getHeight()
if((R<=S)&&((S-R)>T))F.removeClass('many_agents')
else F.addClass('many_agents')})})
J.on('click',function(){P.update('chat_panel')})}
Q()})()
for(var L in K)if(K.hasOwnProperty(L))F[L]=K[L]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AgentList
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={"**self":{},".list":{"position":"relative","width, height":"100%"},".chat_motif":{"position":"absolute","bottom, left":0,"transition":"opacity 0.5s","opacity":1},"&.many_agents .chat_motif":{"opacity":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AgentList"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_AgentList"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_widgets_ChatLogRenderer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_html_div,null,null,[],{"class":"chat_log_renderer"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_Config,J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_InstrumentationController,L=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,M=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer,N=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer,O=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer,P=b.__$$__meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt,Q=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,R,S,T,U,V,W,X=/chat\.(msg|memberjoin|changename)/
S=T=U=''
function Y(){F.setDataNode=$$
F.onDestruction(function(){clearTimeout(W)})}
function Z(){return J.root.$$('livechat.settings.theme.message_type$string').getValue()||'bubble_avatar'}
function $$($l){if(R)F.autounbind(R,'value',$_)
R=$l
F.autobind(R,'value',$_)
F.on('update.neighbour',$c)}
function $_($l){if(!$l)return
if($l.nick$string){T=$l.nick$string
$b(T)}
if($l.type$string)$a($l.type$string)
if($l.failed$bool)$j()
if('unverified$bool' in $l){clearTimeout(W)
if($l.unverified$bool){W=setTimeout($k,I.RESEND_MSG_TIMEOUT)}}}
function $a($l){if(!$l)return
if($l===U)return
if(V){F.empty()
V=null}
U=$l
switch($l){case 'chat.msg':case 'chat.file.update':case 'chat.file.upload':$g()
break
case 'chat.request.rating':$h()
break
default:$i()
break}
if(T)$b(T)}
function $b($l){if(!V)return
var $m=$l.substring(0,$l.indexOf(':')),$n=0,$o=0,$p=$l.length
while($o<$p){$n+=$l.charCodeAt($o)
$o++}
$n=$n%8+1
V.addClass($m)
V.addClass($m+'_'+$n)
$b.assigned=!0}
function $c($l){if(!('prev' in $l)||S==$l.prev)return
S=$l.prev
$d()}
function $d(){if(!R)return
if(!S){$e()
return}
var $l=R.parentNode.$(S),$m=$l.getValue('nick$string'),$n=$l.getValue('type$string')
if(!X.test($n)||U!==$n||$m!==T)$e()
else $f()}
function $e(){if(!V)return
V.removeClass('group_children')
V.addClass('group_head')}
function $f(){if(!V)return
V.addClass('group_children')
V.removeClass('group_head')}
function $g(){var $l=Z(),$m
if(V)F.empty()
switch($l){case 'bubble':$m=M
break
case 'basic_avatar':$m=N
break
case 'bubble_avatar':$m=O
break
default:$m=L
break}
V=new $m(F)
V.setDataNode(R)
V.addClass($l)}
function $h(){V=new P(F)
V.setDataNode(R)}
function $i(){V=new Q(F)
V.setDataNode(R)
V.setPseudo('system_msg')}
function $j(){K.increment('user_msg_send_failed')}
function $k(){K.increment('user_msg_send_timeout')}
Y()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_widgets_ChatLogRenderer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_html_div.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_html_div
x.__jx__jcss={"**self":{"position":"relative","clear":"both","width":"100%"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatLogRenderer"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ChatLogRenderer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast,"disconnected_toast",null,[],{"id":"disconnected_toast","addClass":"disconnected_toast hide"}],[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__disconnected_toast'),H=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_BindClass,M=K.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int'),N=K.root.$('connection').$('reattached_timestamp$int'),O=8000
function P(){L.mobile(F)
F.autobind(M,'value',function(R){H.setIndex(R||0)})
F.autobind(N,'value',Q)
setTimeout(function(){Q(!0)},O)}
function Q(R){if(R)G.removeClass('hide')}
P()})()
for(var J in I)if(I.hasOwnProperty(J))F[J]=I[J]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".disconnected_toast.hide":{"display":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PreChatOfflineForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_PreChatOfflineForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_PostChatForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":"none"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('ui').$('chat_window').$('post_chat_form').$('stack_index$int'),L=J.root.$$('livechat.channel.rating$string'),M
function N(){F.autobind(K,'value',function(O){if(O==0&&M){K.update(1)
return}
if(O==1&&!M){K.update(0)
return}
G.setIndex(O||0)})
F.autobind(L,'value',function(O){M=O})}
N()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PostChatForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PostChatForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_PostChatForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_CookieForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__vs')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat').$('profile').$('allow_cookies$bool')
function L(){F.autobind(K,'value',function(M){G.setIndex(M===!1?0:1)})}
L()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CookieForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={"a":{"color":"inherit"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CookieForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_CookieForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_CardForm=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form_generator",null,[],{"id":"form_generator"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":v(28)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[v(29)],{"id":"cancel","addClass":"secondary"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"id":"form","noValidate":"true"}]],{"titleBar":"hidePopout","actionBar":""}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__form'),H=w.get(z+'__message'),I=w.get(z+'__profile'),J=w.get(z+'__form_generator'),K=w.get(z+'__cancel')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=N.root.$('livechat').$('settings').$('forms').$('card_form'),P=O.$('message$string'),Q=O.$('form'),R=O.$('form_submitted'),S=O.$('profile_required$bool'),T,U=N.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function V(){J.setDataNode(Q)
I.setDataNode(Q)
F.autobind(P,'value',function(W){H.setText(W||'')})
F.autobind(S,'value',function(W){T=W
I.setDisplay(W?'':'none')
I.setDisabled(W)})
G.on('submit',function(W){W.preventDefault()
if(!G.validate(!0))return
I.submit()
J.submit(R,I)
U.update('chat_panel')})
K.on('click',function(){U.update('chat_panel')})}
V()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CardForm
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CardForm"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_CardForm"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_MenuStack=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_SettingsMenu,null,null,[],{"name":"settings_menu"}],[b.__$$__meshim_widget_components_chatWindow_ProfileMenu,null,null,[],{"name":"profile_menu"}],[b.__$$__meshim_widget_components_chatWindow_EndChatMenu,null,null,[],{"name":"end_chat_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu,null,null,[],{"name":"email_transcript_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification,null,null,[],{"name":"email_transcript_notification"}]],{"onChildHide":"-1"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.popout(F)})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MenuStack
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
x.__jx__jcss={"**self":{"overflow":"visible"},"&.popout":{"position":"absolute"},"&.mobile":{}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MenuStack"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_MenuStack"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer,null,null,[],{"addClass":"system_msg group_head"}]],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__list')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_widgets_ChatLogRenderer,L=J.root.$('livechat'),M,N=L.$('settings').$('theme').$('chat_window').$('size$string'),O,P=L.$('settings').$('theme').$('message_type$string'),Q
F.setDataNode=function(S){if(!S)return
M=S
G.setDataNode(M)}
function R(){F.autobind(N,'value',function(S){if(O)F.removeClass('chat_log_'+O)
O=S
if(O)F.addClass('chat_log_'+O)})
F.autobind(P,'value',function(S){if(!S||Q==S)return
Q=S
F.setDataNode(M)})
G.setRenderer(K)}
R()})()
for(var I in H)if(H.hasOwnProperty(I))F[I]=H[I]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self":{"position":"relative","margin":"$$chatLogMargin"},".visitor .chat_bubble":{"background":"$$chatLogVisitorBubbleBg","borderWidth":"$$chatLogVisitorBubbleBorderWidth","borderStyle":"$$chatLogVisitorBubbleBorderStyle","borderColor":"$$chatLogVisitorBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogVisitorBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogVisitorBubbleBg"}},".agent .chat_bubble":{"background":"$$chatLogAgentBubbleBg","borderWidth":"$$chatLogAgentBubbleBorderWidth","borderStyle":"$$chatLogAgentBubbleBorderStyle","borderColor":"$$chatLogAgentBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogAgentBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogAgentBubbleBg"}},".log_avatar":{"borderWidth":"$$chatLogAvatarBorderWidth","borderStyle":"$$chatLogAvatarBorderStyle","borderColor":"$$chatLogAvatarBorderColor","borderRadius":"$$chatLogAvatarRadius","boxShadow":"$$chatLogAvatarShadow"},".group_head, .card, .group_children.bubble_avatar, .group_children.bubble":{"marginTop":"$$margin"},"a":{"color":"inherit"},".card":{"marginLeft, marginRight":"auto"},"&.chat_log_small":{".card":{}},"&.chat_log_medium":{".card":{"maxWidth":"220px"}},"&.chat_log_large":{".card":{"maxWidth":"260px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatLog"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatLog"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLogContainer=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog,K=I.root.$('livechat'),L=K.$('channel').$('log'),M=K.$('temp').$('prev_log'),N=I.root.$('connection'),O=N.$('message$string'),P,Q=N.$('status$string'),R,S,T,U
F.setChatLogMarginTop=function(Z){U=Z
V()}
function V(){if(U===a)return
var Z=((S instanceof J)&&S)||((T instanceof J)&&T)
if(!Z)return
Z.setStyle('marginTop',U)}
function W(){F.autobind(O,'value',function(Z){if(P==Z)return
P=Z
X()})
F.autobind(Q,'value',function(Z){if(R==Z)return
R=Z
X()})}
function X(){if(P=='fast_init'){if(!S){S=new J(F.defaultPlacement)
S.setDataNode(M)
F.autobind(L,'value',Y)
V()}}
else if(R=='registered'||R=='reattached'){if(S instanceof J){F.autounbind(L,'value',Y)
S.destroy()
S=!0}
if(!T){T=new J(F.defaultPlacement)
T.setDataNode(L)
V()}}}
function Y(Z){if(!Z)return
var $$
for(var $_ in Z)if(Z.hasOwnProperty($_)){$$=Z[$_]
if(!$$)continue
if($$.unverified$bool&&!$$.nick$string){$$.nick$string='visitor:local'
M.$($_).update($$)}}}
W()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLogContainer
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ScrollableFrame.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ScrollableFrame
x.__jx__jcss={}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatLogContainer"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatLogContainer"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_ChatPanel=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast,null,null,[],{"addClass":"disconnected_toast"}],[b.__$$__meshim_widget_widgets_toast_File,null,null,[],{}],[b.__$$__meshim_widget_widgets_ChatWindowContent,"chat_panel_container",null,[[b.__$$__jx_ui_Widget,"served_by_container",null,[[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader,null,null,[],{}]],{"id":"served_by_container","class":"served_by_container"}],[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLogContainer,"chat_log",null,[],{"id":"chat_log","addClass":"chat_log"}],[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea,"chat_text_area",null,[],{"id":"chat_text_area","addClass":"chat_text_area"}],[b.__$$__meshim_widget_widgets_Branding,null,null,[],{"addClass":"chat_panel_branding","hideOnDesktop":"true"}],[b.__$$__meshim_widget_widgets_Button,"scroll_top_btn",null,[],{"id":"scroll_top_btn","class":"scroll_top_btn"}]],{"id":"chat_panel_container","class":"chat_panel_container","absPaddingTop":"chatPanelProfileCardContainerHeight"}]],{"titleBar":"","actionBar":"default","hideBrandingMobile":"true"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
var G=w.get(z+'__chat_panel_container'),H=w.get(z+'__served_by_container'),I=w.get(z+'__chat_log'),J=w.get(z+'__chat_text_area'),K=w.get(z+'__scroll_top_btn')
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_common_AsyncUtils,O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_utils_Mobile,Q=b.__$$__meshim_widget_utils_Utils,R=b.__$$__meshim_widget_utils_BrowserQuirks,S=b.__$$__meshim_widget_utils_BindClass,T=b.__$$__meshim_widget_widgets_IconFont,U=Q.isStyleSupported('animation'),V=200,W=O.root.$('livechat'),X=W.$('channel').$('log'),Y=W.$('ui').$('chat_window'),Z=Y.$('agent_typing$bool'),$$=Y.$('file_upload_scroll$bool'),$_=Y.$('chat_panel'),$a=$_.$('textarea'),$b={},$c=0,$d=0,$e=W.$('ui').$('theme_loaded$bool'),$f=W.$('settings').$('theme').$('chat_window').$('size$string'),$g=W.$('settings').$('theme').$('chat_window').$('hide_profile_card$bool'),$h=Y.$('display$bool'),$i,$j=Y.$('main_stack_name$string'),$k,$l=W.$('ui').$('popout$bool'),$m=$l.getValue(),$n=W.$('ui').$('mobile$bool'),$o=$n.getValue(),$p=!0,$q,$r,$s,$t,$u=N.debounce($I,200),$v=N.debounce($L,100)
function $w(){S.mobile(F)
S.rtl(F)
F.autobind($a,'value',function($X){if(!$X)return
$b=$X
$V()})
Q.onAnimationEnd(F,F,function(){if($r){$L(!0)
$q=null
if(I.getScrollTop()&&$K()){$r=!1}
else{setTimeout(function(){$L(!0)
$r=!1},V)}}
else if($q){I.setScrollTop($q)
if(I.getScrollTop()==$q){$q=null}
else{setTimeout(function(){I.setScrollTop($q)
$q=null},V)}}
if(!$c||!$d)$x()})
Q.onTransitionEnd(F,G,function($X){if($X.target.jx_wrapper!=G)return
$p&&$L(!0)})
F.autobind($f,'value',$x)
F.autobind($e,'value',$x)
F.autobind($h,'value',function($X){$i=$X
$z()
$B()
$A()})
F.autobind($j,'value',function($X){$k=$X
$z()
$B()
$A()})
if($m&&!$o)r.window.on('focus',$A)
F.autobind(X,'value',function(){$p=$K()})
F.autobind(X,'keys',function($X){if($X&&$X.length){if($i&&$k==F.getName()){$v()}
else{$r=!0}}})
F.autobind($$,'value',function($X){if($X&&$i&&$k==F.getName()){l($L)}
else{$r=!0}})
F.autobind(Z,'value',function($X){if(!$X)return
if($p){l($L)}})
F.on('show',$C)
Q.onTransitionEnd(F,F,$D)
F.autobind($g,'value',function($X){$E($X)})
if($o){G.setAbsPaddingTop()
I.defaultPlacement.insertBefore(H,I.defaultPlacement.getFirstChild())
new T(K,null,null,null,{className:'scroll_top_icon',icon:'arrow_up'})
K.on('click',function(){K.setDisplay('none')
window.scrollTo(0,0)})
r.window.on('resize',function(){$F()
$H()})
r.window.on('orientationchange',function(){$F()
$H()})
r.window.on('scroll',function(){$F()
$J()
$H()})
F.on('show',function(){$J()})
r.window.on('resize',$u)
r.window.on('orientationchange',$u)
F.autobind(X,'keys',$u)
F.on('show',$u)
J.on('click',function(){window.setTimeout(function(){$L()},200)})
if(P.isChromeIOSMobile)F.style.paddingBottom='42px'}}
function $x(){$W(!0)
l($y,F,'once')}
function $y(){if(!F.dom)return
J.updateStyles()
$U()
I.updateScrollStyles()}
function $z(){if($i&&$k==F.getName()){$x()}}
function $A(){if($o)return
if(R.testSafariFocusBug())return
if($i&&$k==F.getName()){J.focus()}}
function $B(){if($i&&$k==F.getName()){if($r){$L(!0)
if(I.getScrollTop()&&$K()){$r=!1}
else if(!U||Q.isIE){setTimeout(function(){$L(!0)
$r=!1},V)}
$q=null}
else if($q){I.setScrollTop($q)
if(I.getScrollTop()==$q){$q=null}
else if(!U||Q.isIE){setTimeout(function(){I.setScrollTop($q)
$q=null},V)}}}
else{$q=I.getScrollTop()}}
function $C(){l($L)
F.un('show',$C)
$U()}
function $D(){window.setTimeout($L,300)
Q.unTransitionEnd(F,F,$D)
$U()}
function $E($X){H.setDisplay($X?'none':'block')
if($X||$o){G.setAbsPaddingTop()}
else{G.setAbsPaddingTop('chatPanelProfileCardContainerHeight')}}
function $F(){J.setStyle('width:'+(F.getWidth()-2)+'px')}
var $G
function $H(){if($G)window.clearTimeout($G)
$G=window.setTimeout(function(){if(window.innerHeight>=120&&window.scrollY>F.titleBar.getHeight())K.setDisplay('block')
else K.setDisplay('none')},100)}
function $I(){var $X,$Y,$Z
I.setChatLogMarginTop('0px')
$X=F.titleBar.getHeight()+H.getHeight()+J.getHeight()
$Y=I.getScrollHeight()-H.getHeight()
$Z=window.document.documentElement.clientHeight-$X
if($Y<$Z){F.style.height='100%'
if($Y>0){I.setChatLogMarginTop(($Z-31-$Y)+'px')}
else{I.setChatLogMarginTop(($Z-$Y)+'px')}}
else{F.style.height='auto'
I.setChatLogMarginTop('10px')}}
function $J(){if($t)window.clearTimeout($t)
$t=window.setTimeout(function(){if($K()){J.setStyle('position:absolute; left: 0px;')}
else{J.setStyle('position:fixed; left:'+Math.round((window.innerWidth-F.getWidth())/2+1)+'px;')}},50)}
function $K(){if($o){return window.scrollY+window.innerHeight>=F.getScrollHeight()}
else{return I.getScrollTop()+I.getHeight()>=I.getScrollHeight()}}
function $L($X){if(!F.dom)return
if($o){window.scrollTo(0,F.getScrollHeight())
window.setTimeout(function(){$J()},100)}
else{if($X){I.setScrollTop(I.getScrollHeight())}
else{$S()}}}
var $M=200,$N=16,$O=200,$P,$Q,$R
function $S(){if($P)return
if($K())return
$Q=+new Date()
$R=I.getScrollTop()
if((I.getScrollHeight()-I.getHeight()-$R)<=$O){I.setScrollTop(I.getScrollHeight())
return}
$P=window.setInterval($T,$N)}
function $T(){if($K()){window.clearInterval($P)
$P=null
return}
var $X=+new Date()
if($X>=($Q+$M)){I.setScrollTop(I.getScrollHeight())
window.clearInterval($P)
$P=null
return}
I.setScrollTop($R+((($X-$Q)/$M)*(I.getScrollHeight()-$R)))}
function $U(){var $X=J.getComputedStyle()
if(!$X)return
$c=(parseInt($X.paddingTop,10)||0)+(parseInt($X.paddingBottom,10)||0)+((parseInt($X.borderTopWidth,10)+(q.isWindows?1:0))||0)+((parseInt($X.borderBottomWidth,10)+(q.isWindows?1:0))||0)
$V()}
function $V(){if($s)window.clearTimeout($s)
$W($s)
$s=window.setTimeout($W,500)}
function $W($X){if($s)window.clearTimeout($s)
$s=null
if(!F.dom)return
if('height$int' in $b){$d=$b['height$int']
$X||($p=$K())
G.setStyle('padding-bottom',($b['height$int']+$c)+'px')
$p&&$L()}}
$w()})()
for(var M in L)if(L.hasOwnProperty(M))F[M]=L[M]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ChatPanel
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
x.__jx__jcss={".chat_panel_container":{"position":"relative","width, height":"100%","zIndex":20,"transition":"padding 0.1s ease-in-out","*overflow":"visible !important",".served_by_container":{"position":"absolute","top, left":0,"width":"100%","padding":"$$paddingXL","height":"$$chatPanelProfileCardContainerHeight","background":"$$chatPanelProfileCardContainerBackground","borderWidth":"$$chatPanelProfileCardContainerBorderWidth","borderStyle":"$$chatPanelProfileCardContainerBorderStyle","borderColor":"$$chatPanelProfileCardContainerBorderColor"},".chat_text_area":{"position":"absolute","bottom":0,"left":0,"width":"100%"},".chat_log":{".scrollable_inner":{"padding":0}}},".disconnected_toast":{"top":"25%"},".scroll_top_btn":{"position":"fixed","top":"20px","left":"50%","width":"60px","height":"40px","marginLeft":"-30px","padding":"0px","zIndex":"1000","display":"none",".scroll_top_icon":{"lineHeight":"44px","textAlign":"center","fontSize":"16px"}},"&.mobile":{".served_by_container":{"position":"relative","padding":"10px","height":"auto"},".chat_panel_container":{".chat_log":{"marginBottom":"30px"}},".chat_panel_branding":{"display":"block","position":"absolute","padding":"5px","bottom":"45px","margin":"0","zIndex":"30"},".disconnected_toast":{"top":"60px"}},"&.mobile.ltr":{".chat_panel_branding":{"right":"10px"}},"&.mobile.rtl":{".chat_panel_branding":{"left":"10px"}}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ChatPanel"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_ChatPanel"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_chatWindow_MainStack=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_NewChatForm,null,null,[],{"name":"new_chat_form","addClass":"stack_child stack_child_mini     stack_child_no_menu force_dock"}],[b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm,null,null,[],{"name":"pre_chat_offline_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_ChatPanel,null,null,[],{"name":"chat_panel","addClass":"stack_child stack_child_standard"}],[b.__$$__meshim_widget_components_chatWindow_PostChatForm,null,null,[],{"name":"post_chat_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CookieForm,null,null,[],{"name":"cookie_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CardForm,null,null,[],{"name":"card_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AgentList,null,null,[],{"name":"agent_list","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AboutPanel,null,null,[],{"name":"about_panel","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_RatingPanel,null,null,[],{"name":"rating_panel","addClass":"stack_child stack_child_standard stack_child_no_menu"}]],{"addClass":"main_stack","onChildHide":"-1"}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.popout(F)
I.mobile(F)
I.windowPosition(F,'ms_')})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MainStack
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
x.__jx__jcss={"**self":{"overflow":"hidden","boxShadow":"$$windowShadow"},"&.ms_br, &.ms_bm, &.ms_bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.ms_tr, &.ms_tm, &.ms_tl":{"borderBottomLeftRadius, borderBottomRightRadius":"$$windowRadius"},"&.popout":{"margin":"0 auto","maxWidth":"650px","minWidth":"240px","minHeight":"335px","height":"100%","borderRadius":"0"},"&.mobile":{"minWidth, minHeight":"0","maxWidth":"none"}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MainStack"].join('')
x.prototype.__jx__fqname="meshim_widget_components_chatWindow_MainStack"
x.prototype.__jx__constructor=x
return x})()
b.__$$__meshim_widget_components_ChatWindow=(function(){var x=b.__$$__jx_ui_DraggableFrame,y=b.__$$__jx_ui_FullFrame,z=b.__$$__jx_ui_Widget,A=b.__$$__meshim_widget_controllers_DataController,B=b.__$$__meshim_widget_components_chatWindow_MainStack,C=b.__$$__meshim_widget_components_chatWindow_MenuStack,D=b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,E=b.__$$__meshim_widget_utils_Utils,F=b.__$$__meshim_widget_utils_BindClass,G=b.__$$__meshim_widget_controllers_ErrorHandler
function H(I,J,K,L,M){if(!(this instanceof H))return new H(I,J,K,L,M)
if(!H.__jx__jcss_generated){u.generate(this,H.prototype.__jx__fqname,H.__jx__jcss,null,H)
H.__jx__jcss_generated=!0}
var N=A.root.$('livechat'),O=N.$('ui'),P=O.$('chat_window'),Q=O.$('chat_button'),R=O.$('theme_loaded$bool'),S=N.$('settings').$('theme').$('chat_window').$('h_offset$int'),T=N.$('settings').$('theme').$('chat_window').$('v_offset$int'),U=P.$('display$bool'),V=P.$('force_resize$bool'),W=P.$('main_stack_name$string'),X=P.$('menu_stack_name$string'),Y=P.$('main_stack_size$string'),Z=O.$('popout$bool'),$$=O.$('mobile$bool'),$_=O.$('tablet$bool'),$a=O.$('mockup$bool'),$b=Z.getValue(),$c=$$.getValue(),$d=$_.getValue(),$e=$a.getValue(),$f=10,$g=0,$h,$i='',$j=this
if(!M)M={}
if($b){z.call(this,I,J,K,L,M)
F.popout(this)
this.defaultPlacement=new y(this,null,null,null,{className:'meshim_widget_Widget'})
this.on=z.prototype.on
this.fire=z.prototype.fire
if($c){this.defaultPlacement.setPosition('relative')};($j.content||$j).on('click',function(){Q.write({unread_count$int:0})})}
else{x.call(this,I,J,K,L,M)
$j.content.addClass('meshim_widget_Widget')
$j.wrapper.addClass($j.__jx__fqname)
$j.ibody.style.overflow='hidden'
G.bind(this.iwin)
$j.setDraggableNode=function($x){x.prototype.setDraggableNode.call(this,$x)
if($x){q.isFF&&($x.style.cursor='-moz-grab')
q.isWebKit&&($x.style.cursor='-webkit-grab')}}
$j.on('startdrag',function(){var $x=$j.getDraggableNode()
if($x){q.isFF&&($x.style.cursor='-moz-grabbing')
q.isWebKit&&($x.style.cursor='-webkit-grabbing')}})
$j.on('enddrag',function(){var $x=$j.getDraggableNode()
if($x){q.isFF&&($x.style.cursor='-moz-grab')
q.isWebKit&&($x.style.cursor='-webkit-grab')}})
this.autobind(S,'value',function($x){$x=parseInt($x,10)
if(!isNaN($x)&&$x>=0){$f=$x
$q()}})
this.autobind(T,'value',function($x){$x=parseInt($x,10)
if(!isNaN($x)&&$x>=0){$g=$x
$q()}})
F.windowPosition($j.wrapper,null,function($x){$h=$x
$q()
$t()})
F.windowSize($j.wrapper,null,function($x){$i=$x
$p()})}
if(!$b){this.dom.className='zopim'}
if($e){$j.setPosition('relative')}
if($c){this.addClass('mobile')}
if($d){this.addClass('tablet')}
new D(this.defaultPlacement)
var $k=this.menu_stack=new C(this.defaultPlacement)
this.autobind(X,'value',function($x){$k.setName($x)})
var $l=this.main_stack=new B(this.defaultPlacement)
this.autobind(W,'value',function(){$l.setName(W.getValue())})
var $m
$l.on('beforeIndexChange',function(){$m=$l.currentChild})
$l.on('indexChange',$n)
$n()
function $n(){if($l.currentChild&&$l.currentChild.hasClass('stack_child_no_menu')){X.update('')}
if($l.currentChild){if($l.currentChild.hasClass('stack_child_mini')){Y.update('mini')}
else{Y.update('standard')}}
else{Y.update('')}
$o()}
function $o(){if($l.getName()=='new_chat_form')$l.addClass('new_chat_form_active')
else $l.removeClass('new_chat_form_active')}
$o()
this.autobind(U,'value',function($x){$j.setVisible($x?'block':'none')
$p()})
$j.autobind(V,'value',$p)
$j.autobind(R,'value',$p)
$l.on('indexChange',$p)
$j.on('show',$p)
function $p(){if($b)return
if(!$l)return
var $x=$l.currentChild
if(!$x)return
$j.wrapper.setPosition('absolute')
switch($h){case 'bl':case 'bm':case 'br':$j.wrapper.setTop('').setBottom(0)
break
case 'tl':case 'tm':case 'tr':$j.wrapper.setTop(0).setBottom('')
break}
switch($h){case 'bl':case 'tl':$j.wrapper.setLeft(0).setRight('')
break
case 'br':case 'tr':$j.wrapper.setLeft('').setRight(0)
break}
var $y,$z
if($x.hasClass('stack_child_mini')){$y=u.getVariable('windowMiniWidth')
$z=u.getVariable('windowMiniHeight')}
else{$y=u.getVariable('window'+$i.slice(0,1).toUpperCase()+$i.slice(1)+'Width')
$z=u.getVariable('window'+$i.slice(0,1).toUpperCase()+$i.slice(1)+'Height')}
$y=parseInt($y,10)
$z=parseInt($z,10)
$j.setWidth($y+'px')
$j.setHeight($z+'px')}
function $q(){if($b)return
if($e){$j.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($h){case 'br':$j.setTop('').setLeft('').setMarginLeft('').setRight($f).setBottom($g)
break
case 'bm':$j.setTop('').setRight('').setBottom($g).setLeft('50%').setMarginLeft(-Math.round($j.__width/2)+'px')
break
case 'bl':$j.setTop('').setRight('').setMarginLeft('').setBottom($g).setLeft($f)
break
case 'tr':$j.setBottom('').setLeft('').setMarginLeft('').setTop($g).setRight($f)
break
case 'tm':$j.setRight('').setBottom('').setTop($g).setLeft('50%').setMarginLeft(-Math.round($j.__width/2)+'px')
break
case 'tl':$j.setRight('').setBottom('').setMarginLeft('').setTop($g).setLeft($f)
break
default:break}}
if($e){$j.setDraggableNode()}
else if(!$b){$j.setDraggableNode()
this.main_stack.on('indexChange',$r)
$r()}
function $r(){if(!$l.currentChild)return
if($l.currentChild.hasClass('force_dock')){$q()}
else if($l.currentChild.getDraggableNode){$j.setDraggableNode($l.currentChild.getDraggableNode())}}
$j.autobind(R,'value',function($x){if(!$x)return
$s()
$t()})
function $s(){var $x=u.getVariable('windowShadow')
for(var $y=0,$z=E.cssom_prefixes.length;$y<$z;$y++){$j.setStyle(E.cssom_prefixes[$y]+(E.cssom_prefixes[$y]?'B':'b')+'oxShadow',$x||'none')}}
function $t(){var $x=u.getVariable('windowRadius'),$y=['TopLeft','TopRight','BottomRight','BottomLeft'],$z
switch($h){case 'br':case 'bm':case 'bl':$z=[!0,!0,!1,!1]
break
case 'tr':$z=[!1,!1,!0,!0]
break
default:$z=[]}
for(var $A=0,$B=E.cssom_prefixes.length;$A<$B;$A++){for(var $C=0,$D=$y.length;$C<$D;$C++){$j.setStyle(E.cssom_prefixes[$A]+(E.cssom_prefixes[$A]?'B':'b')+'order'+$y[$C]+'Radius',($z[$C]&&$x)?$x:'none')}}};($j.content||$j).allowGhostClick=!0;($j.content||$j).on('click',$u)
if($b)r.window.on('click',$u)
$j.onDestruction(function(){($j.content||$j).un('click',$u)
if($b)r.window.un('click',$u)})
function $u($x){var $y=$x.target.jx_wrapper
while($y&&$y.parentNode&&$y.parentNode!=$j){if($y==$k)return
$y=$y.parentNode}
X.update('')}
if(v&&v.onLanguage){v.onLanguage($v)
$v()}
function $v(){($j.wrapper||$j.defaultPlacement)[v.rtl()?'addClass':'removeClass']('rtl')
if(!$j.wrapper){$j.dom.dir=v.rtl()?'rtl':'ltr'
$j.dom.lang=v.language}}
var $w=b.__$$__meshim_widget_widgets_ImagePreloader
new $w().setDataNode(N.$('settings').$('banner').$('image_path$string'))}
H.prototype=e(x.prototype)
H.__jx__jcss={"**self":{"position":"relative","color":"$$windowColor"},"&.br, &.bm, &.bl":{},"&.tr, &.tm, &.tl":{},"&.popout":{"padding":0,"margin":"0 auto","width, height":"100%","maxWidth":"650px","background":"$$windowBg"},"&.mobile":{"maxWidth":"none","width":"100%","height":"auto","minHeight":"100%"},"&.tablet":{"maxWidth":"$$mobileMaxWidthL"}}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatWindow"].join('')
H.prototype.__jx__fqname="meshim_widget_components_ChatWindow"}
return H})()
b.__$$__meshim_widget_Widget=(function(){function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
z=z||w.generateID()
var D=[b.__$$__jx_ui_Widget,null,null,[],{}],E=D[0].call(this,y,z,null,w.mangleIDs(z,D[3]),D[4]),F=E||this
w.set(z,F)
if(!x.__jx__jcss_generated){u.generate(y,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_controllers_ThemeController,K=b.__$$__meshim_widget_controllers_InstrumentationController,L=b.__$$__meshim_widget_components_ChatWindow,M=b.__$$__meshim_widget_components_ChatButton,N=b.__$$__meshim_widget_utils_Utils,O,P,Q,R=I.root,S=R.$('livechat').$('settings').$('cached$bool'),T=R.$('livechat').$('ui'),U=T.$('theme_loaded$bool'),V=T.$('mobile$bool'),W=T.$('popout$bool'),X=T.$('mockup$bool')
function Y(){J.init()
U.bindValue(function($a){if(!$a||O)return
O=!0
l(function(){K.fromRefTime('theme_loaded'+(S.getValue()?'_cached':'_no_cached'),0.25)
P&&P.setVisibility('')
Q&&Q.setVisibility('')
N.refocusActiveElement()})})
var Z=window.document.body
if(X.getValue()||W.getValue()){Z=F}
if(W.getValue()){$$()
F.addClass('popout')}
else if(V.getValue()){$_()}
else{$$()
$_()}
function $$(){if(!P){P=new L(Z,null,null,null,{visibility:'hidden'})}}
function $_(){if(!Q){Q=new M(Z,null,null,null,{visibility:'hidden'})}}}
Y()})()
for(var H in G)if(G.hasOwnProperty(H))F[H]=G[H]
if(F.fire)F.fire('init')
F.setStyle&&F.setStyle(A)
F.setAttributes&&F.setAttributes(C)
if(typeof F.addChildren=='function')F.addChildren(B)
else w.addChildren(F,B)
if(F!==this){F.__jx__constructor=b.__$$__meshim_widget_Widget
F.__jx__native=!1}
return F}
x.prototype=e(b.__$$__jx_ui_Widget.prototype)
x.prototype.__jx__native=!1
x.prototype.__jx__super=b.__$$__jx_ui_Widget
x.__jx__jcss={"**self, textarea, input, button":{"fontFamily":"$$fontFamily","fontSize":"$$fontSize"},":lang(ja), :lang(ko), :lang(zh_CN), :lang(zh_TW)":{"*":{"fontWeight":"normal !important","fontStyle":"normal !important"},"::placeholder":{"fontStyle":"normal !important"}},"&.popout":{"position":"absolute","top, left":0,"width, height":"100%"},"*":{"WebkitTapHighlightColor":"transparent"},"input, select, textarea, button":{"&:focus":{"outline":"none"}},"img":{"MsInterpolationMode":"bicubic"},"input, textarea":{"&:-moz-placeholder, &::-moz-placeholder":{"opacity":1}},"input, button":{"&::-moz-focus-inner":{"padding":0,"border":0}},"table":{"fontSize":"100%","color":"inherit","borderCollapse":"collapse","borderSpacing":0}}
x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_Widget"].join('')
x.prototype.__jx__fqname="meshim_widget_Widget"
x.prototype.__jx__constructor=x
return x})()
b.__$$__widget=(function(){var x=b.__$$__jx_ui_Application,y=b.__$$__jx_ui_StyleSheet,z=b.__$$__meshim_widget_Widget,A=b.__$$__meshim_widget_Config,B=b.__$$__meshim_widget_controllers_InstrumentationController,C=b.__$$__meshim_widget_controllers_ChatLogListener,D=b.__$$__meshim_widget_controllers_ConnectionController,E=b.__$$__meshim_widget_controllers_CookieLaw,F=b.__$$__meshim_widget_controllers_DataController,G=b.__$$__meshim_widget_controllers_LiveChatAPI,H=b.__$$__meshim_widget_controllers_PopoutController,I=b.__$$__meshim_widget_controllers_ProfileListener,J=b.__$$__meshim_widget_controllers_SoundController,K=b.__$$__meshim_widget_controllers_Tracker,L=b.__$$__meshim_widget_controllers_UIController,M=b.__$$__meshim_widget_controllers_LanguageController,N=b.__$$__meshim_widget_controllers_ErrorHandler,O,P,Q,R,S,T,U,V,W
function X(Z,$$,$_,$a,$b){if(!(this instanceof X))return new X(Z,$$,$_,$a,$b)
B.send=D.send
B.setRefTime(+new Date())
if(window.$zopim&&window.$zopim.t){B.start('start_exec',window.$zopim.t)
B.end('start_exec',0.25)}
if(!$b)$b={}
x.assetsURL=A.ASSETS_LEGACY
x.call(this,Z,$$,$_,$a,$b)
var $c=this
F.init($b.datanode,$b.mockup,D)
B.bindToConnectionStatus(F.root.$('connection').$('status$string'))
N.init(D)
O=F.root.$('connection').$('status$string')
P=F.root.$('livechat').$('ui').$('mobile$bool')
Q=F.root.$('livechat').$('ui').$('mobile_whitelist$bool')
R=F.root.$('livechat').$('ui').$('popout$bool')
S=F.root.$('livechat').$('settings').$('cached$bool')
T=F.root.$('livechat').$('ui').$('mockup$bool')
if(P.getValue()&&!Q.getValue()&&!R.getValue())return
E.init()
G.init()
L.init()
H.init()
D.init()
J.init()
K.init()
M.init()
C.init()
I.init()
Y()
new y($c,null,null,['.zopim { display: none !important }'],{media:'print'})
$c.dom.className='zopim'
$c.autobind(S,'value',function($e){W=$e
$d()})
$c.autobind(O,'value',function($e){U=($e=='reattached'||$e=='cookie_law')
$d()})
if($b.mockup){$c.setVisible(!0)
$c.setPosition('relative')
$c.setWidth('auto')
$c.setHeight('auto')}
function $d(){if(V)return
if(!U&&!W)return
B.fromRefTime('init_ui_components'+(W?'_cached':'_no_cached'),0.25)
var $e=R.getValue(),$f=T.getValue()
if($e){var $g=window.document.getElementById('loading')
if($g)$g.style.display='none'
$c.setVisibility('').setWidth('100%').setHeight('100%').setTop('0').setLeft('0')}
new z($c)
V=!0
if(!$e&&!$f){try {$c.parentNode.removeChild($c.dom)}catch($h){;}}}}
function Y(){if(Math.round(Math.random()*1000)===42){var Z=document.createElement('script')
Z.type="text/javascript"
Z.src=document.location.protocol+"//cdn.zopim.com/s.js"
var $$=document.getElementsByTagName('script')[0]
$$.parentNode.insertBefore(Z,$$)}}
X.prototype=e(x.prototype)
if((typeof X==='function')&&X.prototype&&!X.__jx__no_fqname){X.prototype.__jx__fqname_chain=[(X.prototype.__jx__fqname_chain||"")," ","widget"].join('')
X.prototype.__jx__fqname="widget"}
return X})()
b.__$$__stringtable_lang_nb=new d('__$$__stringtable_lang_nb')
b.__$$__stringtable_lang_ar=new d('__$$__stringtable_lang_ar')
b.__$$__stringtable_lang_az=new d('__$$__stringtable_lang_az')
b.__$$__stringtable_lang_bg=new d('__$$__stringtable_lang_bg')
b.__$$__stringtable_lang_ca=new d('__$$__stringtable_lang_ca')
b.__$$__stringtable_lang_cs=new d('__$$__stringtable_lang_cs')
b.__$$__stringtable_lang_da=new d('__$$__stringtable_lang_da')
b.__$$__stringtable_lang_de=new d('__$$__stringtable_lang_de')
b.__$$__stringtable_lang_el=new d('__$$__stringtable_lang_el')
b.__$$__stringtable_lang_es=new d('__$$__stringtable_lang_es')
b.__$$__stringtable_lang_et=new d('__$$__stringtable_lang_et')
b.__$$__stringtable_lang_eu=new d('__$$__stringtable_lang_eu')
b.__$$__stringtable_lang_fa=new d('__$$__stringtable_lang_fa')
b.__$$__stringtable_lang_fi=new d('__$$__stringtable_lang_fi')
b.__$$__stringtable_lang_fo=new d('__$$__stringtable_lang_fo')
b.__$$__stringtable_lang_fr=new d('__$$__stringtable_lang_fr')
b.__$$__stringtable_lang_ga=new d('__$$__stringtable_lang_ga')
b.__$$__stringtable_lang_gl=new d('__$$__stringtable_lang_gl')
b.__$$__stringtable_lang_he=new d('__$$__stringtable_lang_he')
b.__$$__stringtable_lang_hr=new d('__$$__stringtable_lang_hr')
b.__$$__stringtable_lang_hu=new d('__$$__stringtable_lang_hu')
b.__$$__stringtable_lang_id=new d('__$$__stringtable_lang_id')
b.__$$__stringtable_lang_is=new d('__$$__stringtable_lang_is')
b.__$$__stringtable_lang_it=new d('__$$__stringtable_lang_it')
b.__$$__stringtable_lang_ja=new d('__$$__stringtable_lang_ja')
b.__$$__stringtable_lang_ka=new d('__$$__stringtable_lang_ka')
b.__$$__stringtable_lang_ko=new d('__$$__stringtable_lang_ko')
b.__$$__stringtable_lang_ku=new d('__$$__stringtable_lang_ku')
b.__$$__stringtable_lang_lt=new d('__$$__stringtable_lang_lt')
b.__$$__stringtable_lang_lv=new d('__$$__stringtable_lang_lv')
b.__$$__stringtable_lang_mk=new d('__$$__stringtable_lang_mk')
b.__$$__stringtable_lang_mn=new d('__$$__stringtable_lang_mn')
b.__$$__stringtable_lang_ms=new d('__$$__stringtable_lang_ms')
b.__$$__stringtable_lang_af=new d('__$$__stringtable_lang_af')
b.__$$__stringtable_lang_nl=new d('__$$__stringtable_lang_nl')
b.__$$__stringtable_lang_pl=new d('__$$__stringtable_lang_pl')
b.__$$__stringtable_lang_pt=new d('__$$__stringtable_lang_pt')
b.__$$__stringtable_lang_pt_BR=new d('__$$__stringtable_lang_pt_BR')
b.__$$__stringtable_lang_ro=new d('__$$__stringtable_lang_ro')
b.__$$__stringtable_lang_ru=new d('__$$__stringtable_lang_ru')
b.__$$__stringtable_lang_si=new d('__$$__stringtable_lang_si')
b.__$$__stringtable_lang_sk=new d('__$$__stringtable_lang_sk')
b.__$$__stringtable_lang_sl=new d('__$$__stringtable_lang_sl')
b.__$$__stringtable_lang_sq=new d('__$$__stringtable_lang_sq')
b.__$$__stringtable_lang_sr=new d('__$$__stringtable_lang_sr')
b.__$$__stringtable_lang_sv=new d('__$$__stringtable_lang_sv')
b.__$$__stringtable_lang_sw=new d('__$$__stringtable_lang_sw')
b.__$$__stringtable_lang_th=new d('__$$__stringtable_lang_th')
b.__$$__stringtable_lang_tr=new d('__$$__stringtable_lang_tr')
b.__$$__stringtable_lang_uk=new d('__$$__stringtable_lang_uk')
b.__$$__stringtable_lang_ur=new d('__$$__stringtable_lang_ur')
b.__$$__stringtable_lang_vi=new d('__$$__stringtable_lang_vi')
b.__$$__stringtable_lang_zh_CN=new d('__$$__stringtable_lang_zh_CN')
b.__$$__stringtable_lang_zh_TW=new d('__$$__stringtable_lang_zh_TW')
b.__$$__stringtable_lang_hi=new d('__$$__stringtable_lang_hi')
b.__$$__stringtable_lang_tl=new d('__$$__stringtable_lang_tl')
b.__$$__stringtable_lang_en=["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","Would you like to rate this chat?","Chat rated Good","Chat rated Bad","Chat rating removed","Skip","Leave a Comment","(Optional)","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","Comment submitted","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Zendesk","Send Message","Start Chatting","Any Department","Closed","<start_time> to <end_time>","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","Drop files here","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Customer support","Good","Bad","Remove","This widget uses @cookies@.","<name> is typing ...","<name> are typing ...","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","Rate This Chat"]
{r.runAfterFirstChildReady(function(){new b.__$$__widget(document.body,!1,'','',[])})}})()
