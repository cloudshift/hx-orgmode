$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof haxe=='undefined') haxe = {}
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from " == null?"null":"\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function" == null?"null":"a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module " == null?"null":"module ";
		b.b[b.b.length] = m == null?"null":m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (" == null?"null":" (";
		}
		b.b[b.b.length] = file == null?"null":file;
		b.b[b.b.length] = " line " == null?"null":" line ";
		b.b[b.b.length] = line == null?"null":line;
		if(s1 != null) b.b[b.b.length] = ")" == null?"null":")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname == null?"null":cname;
		b.b[b.b.length] = "." == null?"null":".";
		b.b[b.b.length] = meth == null?"null":meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #" == null?"null":"local function #";
		b.b[b.b.length] = n == null?"null":n;
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = [];
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
if(typeof js=='undefined') js = {}
js.NodeC = function() { }
js.NodeC.__name__ = ["js","NodeC"];
js.NodeC.prototype.__class__ = js.NodeC;
js.Node = function() { }
js.Node.__name__ = ["js","Node"];
js.Node.require = null;
js.Node.querystring = null;
js.Node.util = null;
js.Node.fs = null;
js.Node.dgram = null;
js.Node.net = null;
js.Node.os = null;
js.Node.http = null;
js.Node.https = null;
js.Node.path = null;
js.Node.url = null;
js.Node.dns = null;
js.Node.vm = null;
js.Node.process = null;
js.Node.tty = null;
js.Node.assert = null;
js.Node.crypto = null;
js.Node.tls = null;
js.Node.repl = null;
js.Node.childProcess = null;
js.Node.console = null;
js.Node.paths = null;
js.Node.setTimeout = null;
js.Node.clearTimeout = null;
js.Node.setInterval = null;
js.Node.clearInterval = null;
js.Node.global = null;
js.Node.__filename = null;
js.Node.__dirname = null;
js.Node.module = null;
js.Node.stringify = null;
js.Node.parse = null;
js.Node.queryString = null;
js.Node.newBuffer = function(d,enc) {
	var b = js.Node.require("buffer");
	if(enc != null) return new b.Buffer(d,enc); else return new b.Buffer(d);
}
js.Node.prototype.__class__ = js.Node;
if(typeof cloudshift=='undefined') cloudshift = {}
if(!cloudshift.orgmode) cloudshift.orgmode = {}
cloudshift.orgmode.SynOptions = { __ename__ : ["cloudshift","orgmode","SynOptions"], __constructs__ : ["Push","Discard"] }
cloudshift.orgmode.SynOptions.Push = function(i) { var $x = ["Push",0,i]; $x.__enum__ = cloudshift.orgmode.SynOptions; $x.toString = $estr; return $x; }
cloudshift.orgmode.SynOptions.Discard = ["Discard",1];
cloudshift.orgmode.SynOptions.Discard.toString = $estr;
cloudshift.orgmode.SynOptions.Discard.__enum__ = cloudshift.orgmode.SynOptions;
cloudshift.orgmode.SynStyle = { __ename__ : ["cloudshift","orgmode","SynStyle"], __constructs__ : ["LINE","CHUNK"] }
cloudshift.orgmode.SynStyle.LINE = ["LINE",0];
cloudshift.orgmode.SynStyle.LINE.toString = $estr;
cloudshift.orgmode.SynStyle.LINE.__enum__ = cloudshift.orgmode.SynStyle;
cloudshift.orgmode.SynStyle.CHUNK = ["CHUNK",1];
cloudshift.orgmode.SynStyle.CHUNK.toString = $estr;
cloudshift.orgmode.SynStyle.CHUNK.__enum__ = cloudshift.orgmode.SynStyle;
cloudshift.orgmode.SynChunkSelect = { __ename__ : ["cloudshift","orgmode","SynChunkSelect"], __constructs__ : ["NextChunk","ModChunk","SameChunk"] }
cloudshift.orgmode.SynChunkSelect.NextChunk = ["NextChunk",0];
cloudshift.orgmode.SynChunkSelect.NextChunk.toString = $estr;
cloudshift.orgmode.SynChunkSelect.NextChunk.__enum__ = cloudshift.orgmode.SynChunkSelect;
cloudshift.orgmode.SynChunkSelect.ModChunk = function(m) { var $x = ["ModChunk",1,m]; $x.__enum__ = cloudshift.orgmode.SynChunkSelect; $x.toString = $estr; return $x; }
cloudshift.orgmode.SynChunkSelect.SameChunk = ["SameChunk",2];
cloudshift.orgmode.SynChunkSelect.SameChunk.toString = $estr;
cloudshift.orgmode.SynChunkSelect.SameChunk.__enum__ = cloudshift.orgmode.SynChunkSelect;
cloudshift.orgmode.Lexer = function(rd,s) {
	if( rd === $_ ) return;
	this.tokenGroups = new Hash();
	this.curGroup = "default";
	this.tokenGroups.set(this.curGroup,{ matchers : [], finaliser : null});
	this.grpStack = [];
	this.reader = rd;
	this.curChar = 0;
	this.lineNo = 0;
	this.lineStart = 0;
	this.lineLen = 0;
	this.startCh = 0;
	this.eof = false;
	this.curLine = new StringBuf();
	this.leftOver = "";
	this.style = s == null?cloudshift.orgmode.SynStyle.CHUNK:s;
	if(rd.canChunk() && this.style == cloudshift.orgmode.SynStyle.CHUNK) this.chunker = $closure(this.reader,"nextChunk"); else this.chunker = $closure(this,"lineChunk");
	this.charCodeAt = $closure(this.reader,"charCodeAt");
}
cloudshift.orgmode.Lexer.__name__ = ["cloudshift","orgmode","Lexer"];
cloudshift.orgmode.Lexer.prototype.reader = null;
cloudshift.orgmode.Lexer.prototype.style = null;
cloudshift.orgmode.Lexer.prototype.curChar = null;
cloudshift.orgmode.Lexer.prototype.lineNo = null;
cloudshift.orgmode.Lexer.prototype.lineStart = null;
cloudshift.orgmode.Lexer.prototype.lineLen = null;
cloudshift.orgmode.Lexer.prototype.startCh = null;
cloudshift.orgmode.Lexer.prototype.curLine = null;
cloudshift.orgmode.Lexer.prototype.curGroup = null;
cloudshift.orgmode.Lexer.prototype.eof = null;
cloudshift.orgmode.Lexer.prototype.totalLength = null;
cloudshift.orgmode.Lexer.prototype.leftOver = null;
cloudshift.orgmode.Lexer.prototype.chunker = null;
cloudshift.orgmode.Lexer.prototype.charCodeAt = null;
cloudshift.orgmode.Lexer.prototype.inChunk = null;
cloudshift.orgmode.Lexer.prototype.tokenGroups = null;
cloudshift.orgmode.Lexer.prototype.markBuffer = null;
cloudshift.orgmode.Lexer.prototype.grpStack = null;
cloudshift.orgmode.Lexer.prototype.match = function(re,conv,options) {
	var matcher = { recogniser : re, converter : conv, pushback : 0, discard : false};
	if(options != null) {
		var opts = !Std["is"](options,Array)?[options]:options;
		var _g = 0;
		while(_g < opts.length) {
			var o = opts[_g];
			++_g;
			var $e = (o);
			switch( $e[1] ) {
			case 0:
				var pb = $e[2];
				matcher.pushback = pb;
				break;
			case 1:
				matcher.discard = true;
				break;
			}
		}
	}
	this.tokenGroups.get(this.curGroup).matchers.push(matcher);
	return this;
}
cloudshift.orgmode.Lexer.prototype.grp = function() {
	return this.tokenGroups.get(this.curGroup);
}
cloudshift.orgmode.Lexer.prototype.nomatch = function(cb) {
	this.tokenGroups.get(this.curGroup).finaliser = cb;
	return this;
}
cloudshift.orgmode.Lexer.prototype.group = function(name) {
	var rt = this.tokenGroups.get(name);
	if(rt == null) {
		rt = { matchers : [], finaliser : null};
		this.tokenGroups.set(name,rt);
	}
	this.curGroup = name;
	return this;
}
cloudshift.orgmode.Lexer.prototype["use"] = function(name) {
	if(name != null) {
		var rt = this.tokenGroups.get(name);
		if(rt == null) throw "Token group :" + name + " does not exist";
		this.grpStack.push(this.curGroup);
		this.curGroup = name;
	} else this.curGroup = this.grpStack.length > 0?this.grpStack.pop():"default";
	return this;
}
cloudshift.orgmode.Lexer.prototype.removeGroup = function(name) {
	return this;
}
cloudshift.orgmode.Lexer.prototype.mark = function() {
	this.markBuffer = [];
}
cloudshift.orgmode.Lexer.prototype.yank = function() {
	if(this.markBuffer != null) {
		var y = this.markBuffer;
		this.markBuffer = null;
		return y;
	}
	return ["!yank buffer empty"];
}
cloudshift.orgmode.Lexer.prototype.isNL = function(c) {
	return c == 10;
}
cloudshift.orgmode.Lexer.prototype.peek = function() {
	return this.reader.charCodeAt(this.curChar);
}
cloudshift.orgmode.Lexer.prototype.column = function() {
	return this.fromBOL() + this.inChunk;
}
cloudshift.orgmode.Lexer.prototype.info = function() {
	return { line : this.lineNo, col : this.fromBOL() + this.inChunk};
}
cloudshift.orgmode.Lexer.prototype.atEof = function() {
	return this.reader.atEof();
}
cloudshift.orgmode.Lexer.prototype.nextChar = function() {
	var nc = this.charCodeAt(this.curChar);
	if(nc == 10) {
		this.lineStart = this.curChar + 1;
		this.lineNo++;
	} else {
	}
	this.curChar++;
	return nc;
}
cloudshift.orgmode.Lexer.prototype.lineChunk = function() {
	var sb = new StringBuf(), c;
	while((c = this.nextChar()) != -1) {
		sb.b[sb.b.length] = String.fromCharCode(c);
		if(c == 10) break;
	}
	var s = sb.b.join("");
	this.lineLen = s.length;
	return s;
}
cloudshift.orgmode.Lexer.prototype.withChunks = function(chunk,fn) {
	if(chunk == "") chunk = this.chunker();
	try {
		do {
			var $e = (fn(chunk));
			switch( $e[1] ) {
			case 0:
				if(this.reader.atEof()) throw "__break__";
				if(this.markBuffer != null) this.markBuffer.push(chunk);
				if(this.style == cloudshift.orgmode.SynStyle.LINE) chunk = this.chunker(); else chunk += this.chunker();
				break;
			case 1:
				var np = $e[2];
				if(np > 0) {
					this.startCh = chunk.length;
					if(this.markBuffer != null) this.markBuffer.push(chunk.substr(np));
					chunk = chunk.substr(np);
				} else {
					chunk = chunk.substr(0,-np);
					this.lineLen = chunk.length;
				}
				throw "__break__";
				break;
			case 2:
				throw "__break__";
				break;
			}
		} while(true);
	} catch( e ) { if( e != "__break__" ) throw e; }
	return chunk;
}
cloudshift.orgmode.Lexer.prototype.fromBOL = function() {
	return this.lineLen - this.startCh;
}
cloudshift.orgmode.Lexer.prototype.nextToken = function() {
	var me = this;
	var tok = null;
	this.leftOver = this.withChunks(this.leftOver,function(chunk) {
		var _g = 0, _g1 = me.tokenGroups.get(me.curGroup).matchers;
		while(_g < _g1.length) {
			var rt = _g1[_g];
			++_g;
			if(rt.recogniser.match(chunk)) {
				var p = rt.recogniser.matchedPos();
				tok = rt.converter(rt.recogniser);
				if(tok != null) {
					me.inChunk = p.pos;
					var np = rt.discard?-p.pos:p.pos + p.len + rt.pushback;
					return cloudshift.orgmode.SynChunkSelect.ModChunk(np);
				}
			}
		}
		if(tok == null && me.tokenGroups.get(me.curGroup).finaliser != null) {
			tok = me.tokenGroups.get(me.curGroup).finaliser(chunk);
			if(tok == null) {
			}
		}
		return cloudshift.orgmode.SynChunkSelect.NextChunk;
	});
	return tok;
}
cloudshift.orgmode.Lexer.prototype.iterator = function() {
	var t = null, me = this;
	return { hasNext : function() {
		t = me.nextToken();
		return t != null;
	}, next : function() {
		return t;
	}};
}
cloudshift.orgmode.Lexer.prototype.prevChar = function() {
	return this.reader.charCodeAt(this.curChar - 1);
}
cloudshift.orgmode.Lexer.prototype.readAssert = function(expected) {
	var tok = this.nextToken();
	if(tok != expected) throw "expected:" + expected + " got " + tok;
	return tok;
}
cloudshift.orgmode.Lexer.prototype.syntax = function(msg) {
	haxe.Log.trace("At line " + this.lineNo + " col " + (this.fromBOL() + this.inChunk) + ": " + msg,{ fileName : "Lexer.hx", lineNumber : 343, className : "cloudshift.orgmode.Lexer", methodName : "syntax"});
}
cloudshift.orgmode.Lexer.prototype.__class__ = cloudshift.orgmode.Lexer;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
cloudshift.Part_ = function() { }
cloudshift.Part_.__name__ = ["cloudshift","Part_"];
cloudshift.Part_.prototype._events = null;
cloudshift.Part_.prototype.partID = null;
cloudshift.Part_.prototype.start = null;
cloudshift.Part_.prototype.stop = null;
cloudshift.Part_.prototype.observe = null;
cloudshift.Part_.prototype.notify = null;
cloudshift.Part_.prototype.peer = null;
cloudshift.Part_.prototype.observeSignal = null;
cloudshift.Part_.prototype.onStart = null;
cloudshift.Part_.prototype.onStop = null;
cloudshift.Part_.prototype.__class__ = cloudshift.Part_;
if(!cloudshift.core) cloudshift.core = {}
cloudshift.core.PartBaseImpl = function(parent) {
	if( parent === $_ ) return;
	this.parent = parent;
	this._events = cloudshift.Core.event();
}
cloudshift.core.PartBaseImpl.__name__ = ["cloudshift","core","PartBaseImpl"];
cloudshift.core.PartBaseImpl.prototype.partID = null;
cloudshift.core.PartBaseImpl.prototype._events = null;
cloudshift.core.PartBaseImpl.prototype.parent = null;
cloudshift.core.PartBaseImpl.prototype.startFunc = null;
cloudshift.core.PartBaseImpl.prototype.stopFunc = null;
cloudshift.core.PartBaseImpl.prototype.peer = function() {
	return this.parent;
}
cloudshift.core.PartBaseImpl.prototype.notify = function(e) {
	this._events.notify(cloudshift.EPartState.Event(e));
}
cloudshift.core.PartBaseImpl.prototype.observe = function(cb) {
	this._events.observe(function(s) {
		var $e = (s);
		switch( $e[1] ) {
		case 2:
			var s1 = $e[2];
			cb(s1);
			break;
		default:
		}
	});
}
cloudshift.core.PartBaseImpl.prototype.observeSignal = function(cb) {
	this._events.observe(cb);
}
cloudshift.core.PartBaseImpl.prototype.start = function(d) {
	var me = this;
	var p = cloudshift.Core.promise();
	if(this.startFunc != null) {
		var p1 = this.startFunc(d);
		this.checkErr("start",p1);
		p1.then(function(outcome) {
			var $e = (outcome);
			switch( $e[1] ) {
			case 0:
				me._events.notify(cloudshift.EPartState.Started);
				break;
			case 1:
				var e = $e[2];
				me._events.notify(cloudshift.EPartState.Error(e));
				break;
			}
		});
	} else throw "start request for " + Type.getClassName(Type.getClass(this.parent)) + " but no start function provided";
}
cloudshift.core.PartBaseImpl.prototype.stop = function(d) {
	var me = this;
	var p = cloudshift.Core.promise();
	if(this.stopFunc != null) {
		var p1 = this.stopFunc(d);
		this.checkErr("stop",p1);
		p1.then(function(outcome) {
			var $e = (outcome);
			switch( $e[1] ) {
			case 0:
				me._events.notify(cloudshift.EPartState.Stopped);
				break;
			case 1:
				var e = $e[2];
				me._events.notify(cloudshift.EPartState.Error(e));
				break;
			}
		});
	} else throw "stop request for " + Type.getClassName(Type.getClass(this.parent)) + " but no stop function provided";
}
cloudshift.core.PartBaseImpl.prototype.checkErr = function(type,outcome) {
	if(outcome == null) throw Type.getClassName(Type.getClass(this.parent)) + " should not return null for " + type + " function";
	return outcome;
}
cloudshift.core.PartBaseImpl.prototype.onStart = function(cb) {
	this.startFunc = cb;
}
cloudshift.core.PartBaseImpl.prototype.onStop = function(cb) {
	this.stopFunc = cb;
}
cloudshift.core.PartBaseImpl.prototype.__class__ = cloudshift.core.PartBaseImpl;
cloudshift.core.PartBaseImpl.__interfaces__ = [cloudshift.Part_];
cloudshift.orgmode.Reader = function() { }
cloudshift.orgmode.Reader.__name__ = ["cloudshift","orgmode","Reader"];
cloudshift.orgmode.Reader.prototype.charCodeAt = null;
cloudshift.orgmode.Reader.prototype.atEof = null;
cloudshift.orgmode.Reader.prototype.canChunk = null;
cloudshift.orgmode.Reader.prototype.nextChunk = null;
cloudshift.orgmode.Reader.prototype.__class__ = cloudshift.orgmode.Reader;
cloudshift.orgmode.StringReader = function(s) {
	if( s === $_ ) return;
	this.str = s;
	this.len = this.str.length;
}
cloudshift.orgmode.StringReader.__name__ = ["cloudshift","orgmode","StringReader"];
cloudshift.orgmode.StringReader.prototype.str = null;
cloudshift.orgmode.StringReader.prototype.cur = null;
cloudshift.orgmode.StringReader.prototype.len = null;
cloudshift.orgmode.StringReader.prototype.charCodeAt = function(i) {
	this.cur = i;
	if(this.atEof()) return -1;
	return this.str.charCodeAt(i);
}
cloudshift.orgmode.StringReader.prototype.atEof = function() {
	return this.cur + 1 > this.len;
}
cloudshift.orgmode.StringReader.prototype.nextChunk = function() {
	return "";
}
cloudshift.orgmode.StringReader.prototype.canChunk = function() {
	return false;
}
cloudshift.orgmode.StringReader.prototype.__class__ = cloudshift.orgmode.StringReader;
cloudshift.orgmode.StringReader.__interfaces__ = [cloudshift.orgmode.Reader];
cloudshift.Promise = function() { }
cloudshift.Promise.__name__ = ["cloudshift","Promise"];
cloudshift.Promise.prototype.sequence = null;
cloudshift.Promise.prototype.resolve = null;
cloudshift.Promise.prototype.then = null;
cloudshift.Promise.prototype.thenMe = null;
cloudshift.Promise.prototype.isCanceled = null;
cloudshift.Promise.prototype.ifCanceled = null;
cloudshift.Promise.prototype.allowCancelOnlyIf = null;
cloudshift.Promise.prototype.cancel = null;
cloudshift.Promise.prototype.isDone = null;
cloudshift.Promise.prototype.isDelivered = null;
cloudshift.Promise.prototype.map = null;
cloudshift.Promise.prototype.flatMap = null;
cloudshift.Promise.prototype.filter = null;
cloudshift.Promise.prototype.value = null;
cloudshift.Promise.prototype.toOption = null;
cloudshift.Promise.prototype.toArray = null;
cloudshift.Promise.prototype.__class__ = cloudshift.Promise;
cloudshift.core.PromiseImpl = function(p) {
	if( p === $_ ) return;
	this._listeners = [];
	this._result = null;
	this._isSet = false;
	this._isCanceled = false;
	this._cancelers = [];
	this._canceled = [];
	this._combined = 0;
}
cloudshift.core.PromiseImpl.__name__ = ["cloudshift","core","PromiseImpl"];
cloudshift.core.PromiseImpl.create = function() {
	return new cloudshift.core.PromiseImpl();
}
cloudshift.core.PromiseImpl.waitFor = function(toJoin) {
	var joinLen = toJoin.length, myprm = cloudshift.core.PromiseImpl.create(), combined = [], sequence = 0;
	cloudshift.ArrayExtensions.foreach(toJoin,function(xprm) {
		if(!Std["is"](xprm,cloudshift.Promise)) throw "not a promise:" + xprm;
		xprm.sequence = sequence++;
		xprm.thenMe(function(r) {
			combined.push({ seq : r.sequence, val : r._result});
			if(combined.length == joinLen) {
				combined.sort(function(x,y) {
					return x.seq - y.seq;
				});
				myprm.resolve(cloudshift.ArrayExtensions.map(combined,function(el) {
					return el.val;
				}));
			}
		});
	});
	return myprm;
}
cloudshift.core.PromiseImpl.prototype.sequence = null;
cloudshift.core.PromiseImpl.prototype._listeners = null;
cloudshift.core.PromiseImpl.prototype._result = null;
cloudshift.core.PromiseImpl.prototype._isSet = null;
cloudshift.core.PromiseImpl.prototype._isCanceled = null;
cloudshift.core.PromiseImpl.prototype._cancelers = null;
cloudshift.core.PromiseImpl.prototype._canceled = null;
cloudshift.core.PromiseImpl.prototype._combined = null;
cloudshift.core.PromiseImpl.prototype.resolve = function(t) {
	return this._isCanceled?this:this._isSet?cloudshift.Mixin.error("Promise already delivered"):(function($this) {
		var $r;
		$this._result = t;
		$this._isSet = true;
		{
			var _g = 0, _g1 = $this._listeners;
			while(_g < _g1.length) {
				var l = _g1[_g];
				++_g;
				l($this._result);
			}
		}
		$this._listeners = [];
		$r = $this;
		return $r;
	}(this));
}
cloudshift.core.PromiseImpl.prototype.allowCancelOnlyIf = function(f) {
	if(!this.isDone()) this._cancelers.push(f);
	return this;
}
cloudshift.core.PromiseImpl.prototype.ifCanceled = function(f) {
	if(this.isCanceled()) f(); else if(!this.isDone()) this._canceled.push(f);
	return this;
}
cloudshift.core.PromiseImpl.prototype.cancel = function() {
	return this.isDone()?false:this.isCanceled()?true:(function($this) {
		var $r;
		var r = true;
		{
			var _g = 0, _g1 = $this._cancelers;
			while(_g < _g1.length) {
				var canceller = _g1[_g];
				++_g;
				r = r && canceller();
			}
		}
		if(r) $this.forceCancel();
		$r = r;
		return $r;
	}(this));
}
cloudshift.core.PromiseImpl.prototype.isDone = function() {
	return this.isDelivered() || this.isCanceled();
}
cloudshift.core.PromiseImpl.prototype.isDelivered = function() {
	return this._isSet;
}
cloudshift.core.PromiseImpl.prototype.isCanceled = function() {
	return this._isCanceled;
}
cloudshift.core.PromiseImpl.prototype.then = function(f) {
	if(this.isCanceled()) return this; else if(this.isDelivered()) f(this._result); else this._listeners.push(f);
	return this;
}
cloudshift.core.PromiseImpl.prototype.thenMe = function(f) {
	var me = this;
	if(this.isCanceled()) return this; else if(this.isDelivered()) f(this); else this._listeners.push(function(g) {
		f(me);
	});
	return this;
}
cloudshift.core.PromiseImpl.prototype.map = function(f) {
	var fut = new cloudshift.core.PromiseImpl();
	this.then(function(t) {
		fut.resolve(f(t));
	});
	this.ifCanceled(function() {
		fut.forceCancel();
	});
	return fut;
}
cloudshift.core.PromiseImpl.prototype.after = function(f) {
	return f;
}
cloudshift.core.PromiseImpl.prototype.flatMap = function(f) {
	var fut = new cloudshift.core.PromiseImpl();
	this.then(function(t) {
		f(t).then(function(s) {
			fut.resolve(s);
		}).ifCanceled(function() {
			fut.forceCancel();
		});
	});
	this.ifCanceled(function() {
		fut.forceCancel();
	});
	return fut;
}
cloudshift.core.PromiseImpl.prototype.filter = function(f) {
	var fut = new cloudshift.core.PromiseImpl();
	this.then(function(t) {
		if(f(t)) fut.resolve(t); else fut.forceCancel();
	});
	this.ifCanceled(function() {
		fut.forceCancel();
	});
	return fut;
}
cloudshift.core.PromiseImpl.prototype.value = function() {
	return this._isSet?cloudshift.Option.Some(this._result):cloudshift.Option.None;
}
cloudshift.core.PromiseImpl.prototype.toOption = function() {
	return this.value();
}
cloudshift.core.PromiseImpl.prototype.toArray = function() {
	return cloudshift.OptionExtensions.toArray(this.value());
}
cloudshift.core.PromiseImpl.prototype.forceCancel = function() {
	if(!this._isCanceled) {
		this._isCanceled = true;
		var _g = 0, _g1 = this._canceled;
		while(_g < _g1.length) {
			var canceled = _g1[_g];
			++_g;
			canceled();
		}
	}
	return this;
}
cloudshift.core.PromiseImpl.prototype.__class__ = cloudshift.core.PromiseImpl;
cloudshift.core.PromiseImpl.__interfaces__ = [cloudshift.Promise];
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	this.length = length;
	this.b = b;
}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	return this.b[pos];
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	this.b[pos] = v & 255;
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		return;
	}
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		b1[i + pos] = b2[i + srcpos];
	}
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
}
haxe.io.Bytes.prototype.compare = function(other) {
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(b1[i] != b2[i]) return b1[i] - b2[i];
	}
	return this.length - other.length;
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = String.fromCharCode;
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		} else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
		}
	}
	return s;
}
haxe.io.Bytes.prototype.toString = function() {
	return this.readString(0,this.length);
}
haxe.io.Bytes.prototype.toHex = function() {
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	return s.b.join("");
}
haxe.io.Bytes.prototype.getData = function() {
	return this.b;
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
cloudshift.EOutcome = { __ename__ : ["cloudshift","EOutcome"], __constructs__ : ["Ok","Err"] }
cloudshift.EOutcome.Ok = ["Ok",0];
cloudshift.EOutcome.Ok.toString = $estr;
cloudshift.EOutcome.Ok.__enum__ = cloudshift.EOutcome;
cloudshift.EOutcome.Err = function(s) { var $x = ["Err",1,s]; $x.__enum__ = cloudshift.EOutcome; $x.toString = $estr; return $x; }
cloudshift.Option = { __ename__ : ["cloudshift","Option"], __constructs__ : ["None","Some"] }
cloudshift.Option.None = ["None",0];
cloudshift.Option.None.toString = $estr;
cloudshift.Option.None.__enum__ = cloudshift.Option;
cloudshift.Option.Some = function(v) { var $x = ["Some",1,v]; $x.__enum__ = cloudshift.Option; $x.toString = $estr; return $x; }
cloudshift.EOperation = { __ename__ : ["cloudshift","EOperation"], __constructs__ : ["Add","Del"] }
cloudshift.EOperation.Add = function(info) { var $x = ["Add",0,info]; $x.__enum__ = cloudshift.EOperation; $x.toString = $estr; return $x; }
cloudshift.EOperation.Del = function(info) { var $x = ["Del",1,info]; $x.__enum__ = cloudshift.EOperation; $x.toString = $estr; return $x; }
cloudshift.Observable = function() { }
cloudshift.Observable.__name__ = ["cloudshift","Observable"];
cloudshift.Observable.prototype.preNotify = null;
cloudshift.Observable.prototype.notify = null;
cloudshift.Observable.prototype.observe = null;
cloudshift.Observable.prototype.peers = null;
cloudshift.Observable.prototype.removePeers = null;
cloudshift.Observable.prototype.peek = null;
cloudshift.Observable.prototype.__class__ = cloudshift.Observable;
cloudshift.EPartState = { __ename__ : ["cloudshift","EPartState"], __constructs__ : ["Started","Stopped","Event","Error","Except"] }
cloudshift.EPartState.Started = ["Started",0];
cloudshift.EPartState.Started.toString = $estr;
cloudshift.EPartState.Started.__enum__ = cloudshift.EPartState;
cloudshift.EPartState.Stopped = ["Stopped",1];
cloudshift.EPartState.Stopped.toString = $estr;
cloudshift.EPartState.Stopped.__enum__ = cloudshift.EPartState;
cloudshift.EPartState.Event = function(event) { var $x = ["Event",2,event]; $x.__enum__ = cloudshift.EPartState; $x.toString = $estr; return $x; }
cloudshift.EPartState.Error = function(msg) { var $x = ["Error",3,msg]; $x.__enum__ = cloudshift.EPartState; $x.toString = $estr; return $x; }
cloudshift.EPartState.Except = function(e) { var $x = ["Except",4,e]; $x.__enum__ = cloudshift.EPartState; $x.toString = $estr; return $x; }
cloudshift.Part = function() { }
cloudshift.Part.__name__ = ["cloudshift","Part"];
cloudshift.Part.prototype.part_ = null;
cloudshift.Part.prototype.__class__ = cloudshift.Part;
cloudshift.EAssemblyState = { __ename__ : ["cloudshift","EAssemblyState"], __constructs__ : ["PartAdded","PartDeleted"] }
cloudshift.EAssemblyState.PartAdded = function(part) { var $x = ["PartAdded",0,part]; $x.__enum__ = cloudshift.EAssemblyState; $x.toString = $estr; return $x; }
cloudshift.EAssemblyState.PartDeleted = function(partID) { var $x = ["PartDeleted",1,partID]; $x.__enum__ = cloudshift.EAssemblyState; $x.toString = $estr; return $x; }
cloudshift.PartAssembly = function() { }
cloudshift.PartAssembly.__name__ = ["cloudshift","PartAssembly"];
cloudshift.PartAssembly.prototype.add = null;
cloudshift.PartAssembly.prototype.remove = null;
cloudshift.PartAssembly.prototype.watch = null;
cloudshift.PartAssembly.prototype.notify = null;
cloudshift.PartAssembly.prototype.log = null;
cloudshift.PartAssembly.prototype.iterator = null;
cloudshift.PartAssembly.prototype.__class__ = cloudshift.PartAssembly;
cloudshift.Core = function() { }
cloudshift.Core.__name__ = ["cloudshift","Core"];
cloudshift.Core.promise = function() {
	return new cloudshift.core.PromiseImpl();
}
cloudshift.Core.waitFor = function(toJoin) {
	return cloudshift.core.PromiseImpl.waitFor(toJoin);
}
cloudshift.Core.event = function() {
	return new cloudshift.core.ObservableImpl();
}
cloudshift.Core.part = function(parent) {
	return new cloudshift.core.PartBaseImpl(parent);
}
cloudshift.Core.toOption = function(t) {
	return t == null?cloudshift.Option.None:cloudshift.Option.Some(t);
}
cloudshift.Core.logTo = function(fileName) {
	cloudshift.core.LogImpl.init(fileName);
}
cloudshift.Core.info = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.info(msg,category,inf);
}
cloudshift.Core.warn = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.warn(msg,category,inf);
}
cloudshift.Core.error = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.error(msg,category,inf);
}
cloudshift.Core.prototype.__class__ = cloudshift.Core;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
cloudshift.core.ObservableImpl = function(p) {
	if( p === $_ ) return;
	this._observers = [];
	this._unsubscribes = 0;
}
cloudshift.core.ObservableImpl.__name__ = ["cloudshift","core","ObservableImpl"];
cloudshift.core.ObservableImpl.prototype.preNotify = null;
cloudshift.core.ObservableImpl.prototype._unsubscribes = null;
cloudshift.core.ObservableImpl.prototype._observers = null;
cloudshift.core.ObservableImpl.prototype._event = null;
cloudshift.core.ObservableImpl.prototype.notify = function(v) {
	if(v == null) {
		haxe.Log.trace("huh? can't notify null object",{ fileName : "ObservableImpl.hx", lineNumber : 24, className : "cloudshift.core.ObservableImpl", methodName : "notify"});
		return;
	}
	var _g = 0, _g1 = this._observers;
	while(_g < _g1.length) {
		var ob = _g1[_g];
		++_g;
		if(ob.handler != null) {
			if(this.preNotify != null) v = this.preNotify(v,ob.info);
			if(v != null) ob.handler(v);
		}
	}
}
cloudshift.core.ObservableImpl.prototype.observe = function(cb,info) {
	var me = this;
	var h = { handler : cb, info : cloudshift.Core.toOption(info)};
	this._observers.push(h);
	if(this._event != null) this._event.notify(cloudshift.EOperation.Add(info));
	return function() {
		h.handler = null;
		me._unsubscribes++;
		if(me._unsubscribes >= cloudshift.core.ObservableImpl.CLEANUP) {
			me._unsubscribes = 0;
			me._observers = cloudshift.ArrayExtensions.filter(me._observers,function(s) {
				return s.handler != null;
			});
		}
		if(me._event != null) me._event.notify(cloudshift.EOperation.Del(info));
	};
}
cloudshift.core.ObservableImpl.prototype.peers = function() {
	return cloudshift.ArrayExtensions.map(cloudshift.ArrayExtensions.filter(this._observers,function(el) {
		return el.handler != null;
	}),function(el) {
		return el.info;
	});
}
cloudshift.core.ObservableImpl.prototype.peek = function(cb) {
	if(this._event == null) this._event = new cloudshift.core.ObservableImpl();
	this._event.observe(cb);
}
cloudshift.core.ObservableImpl.prototype.removePeers = function() {
	cloudshift.ArrayExtensions.foreach(this._observers,function(s) {
		s.handler = null;
		s.info = null;
	});
	this._observers = [];
}
cloudshift.core.ObservableImpl.prototype.__class__ = cloudshift.core.ObservableImpl;
cloudshift.core.ObservableImpl.__interfaces__ = [cloudshift.Observable];
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
cloudshift.Mixin = function() { }
cloudshift.Mixin.__name__ = ["cloudshift","Mixin"];
cloudshift.Mixin.error = function(msg) {
	throw msg;
	return null;
}
cloudshift.Mixin.prototype.__class__ = cloudshift.Mixin;
cloudshift.DynamicExtensions = function() { }
cloudshift.DynamicExtensions.__name__ = ["cloudshift","DynamicExtensions"];
cloudshift.DynamicExtensions.into = function(a,f) {
	return f(a);
}
cloudshift.DynamicExtensions.isInstanceOf = function(o,c) {
	return Std["is"](o,c);
}
cloudshift.DynamicExtensions.toThunk = function(t) {
	return function() {
		return t;
	};
}
cloudshift.DynamicExtensions.stringify = function(o) {
	return JSON.stringify(o);
}
cloudshift.DynamicExtensions.prototype.__class__ = cloudshift.DynamicExtensions;
cloudshift.BoolExtensions = function() { }
cloudshift.BoolExtensions.__name__ = ["cloudshift","BoolExtensions"];
cloudshift.BoolExtensions.toInt = function(v) {
	return v?1:0;
}
cloudshift.BoolExtensions.ifTrue = function(v,f) {
	return v?cloudshift.Option.Some(f()):cloudshift.Option.None;
}
cloudshift.BoolExtensions.ifFalse = function(v,f) {
	return !v?cloudshift.Option.Some(f()):cloudshift.Option.None;
}
cloudshift.BoolExtensions.ifElse = function(v,f1,f2) {
	return v?f1():f2();
}
cloudshift.BoolExtensions.compare = function(v1,v2) {
	return !v1 && v2?-1:v1 && !v2?1:0;
}
cloudshift.BoolExtensions.equals = function(v1,v2) {
	return v1 == v2;
}
cloudshift.BoolExtensions.hashCode = function(v) {
	return v?786433:393241;
}
cloudshift.BoolExtensions.toString = function(v) {
	return v?"true":"false";
}
cloudshift.BoolExtensions.prototype.__class__ = cloudshift.BoolExtensions;
cloudshift.IntExtensions = function() { }
cloudshift.IntExtensions.__name__ = ["cloudshift","IntExtensions"];
cloudshift.IntExtensions.max = function(v1,v2) {
	return v2 > v1?v2:v1;
}
cloudshift.IntExtensions.min = function(v1,v2) {
	return v2 < v1?v2:v1;
}
cloudshift.IntExtensions.toBool = function(v) {
	return v == 0?false:true;
}
cloudshift.IntExtensions.toFloat = function(v) {
	return v;
}
cloudshift.IntExtensions.to = function(start,end) {
	return { iterator : function() {
		var cur = start;
		return { hasNext : function() {
			return cur <= end;
		}, next : function() {
			var next = cur;
			++cur;
			return next;
		}};
	}};
}
cloudshift.IntExtensions.until = function(start,end) {
	return cloudshift.IntExtensions.to(start,end - 1);
}
cloudshift.IntExtensions.compare = function(v1,v2) {
	return v1 - v2;
}
cloudshift.IntExtensions.equals = function(v1,v2) {
	return v1 == v2;
}
cloudshift.IntExtensions.toString = function(v) {
	return "" + v;
}
cloudshift.IntExtensions.hashCode = function(v) {
	return v * 196613;
}
cloudshift.IntExtensions.prototype.__class__ = cloudshift.IntExtensions;
cloudshift.FloatExtensions = function() { }
cloudshift.FloatExtensions.__name__ = ["cloudshift","FloatExtensions"];
cloudshift.FloatExtensions.round = function(v) {
	return Math.round(v);
}
cloudshift.FloatExtensions.ceil = function(v) {
	return Math.ceil(v);
}
cloudshift.FloatExtensions.floor = function(v) {
	return Math.floor(v);
}
cloudshift.FloatExtensions.max = function(v1,v2) {
	return v2 > v1?v2:v1;
}
cloudshift.FloatExtensions.min = function(v1,v2) {
	return v2 < v1?v2:v1;
}
cloudshift.FloatExtensions.toInt = function(v) {
	return Std["int"](v);
}
cloudshift.FloatExtensions.compare = function(v1,v2) {
	return v1 < v2?-1:v1 > v2?1:0;
}
cloudshift.FloatExtensions.equals = function(v1,v2) {
	return v1 == v2;
}
cloudshift.FloatExtensions.toString = function(v) {
	return "" + v;
}
cloudshift.FloatExtensions.hashCode = function(v) {
	return Std["int"](v * 98317);
}
cloudshift.FloatExtensions.prototype.__class__ = cloudshift.FloatExtensions;
cloudshift.StringExtensions = function() { }
cloudshift.StringExtensions.__name__ = ["cloudshift","StringExtensions"];
cloudshift.StringExtensions.toBool = function(v,d) {
	if(v == null) return d;
	var vLower = v.toLowerCase();
	return cloudshift.OptionExtensions.getOrElseC(vLower == "false" || v == "0"?cloudshift.Option.Some(false):vLower == "true" || v == "1"?cloudshift.Option.Some(true):cloudshift.Option.None,d);
}
cloudshift.StringExtensions.toInt = function(v,d) {
	if(v == null) return d;
	return cloudshift.OptionExtensions.getOrElseC(cloudshift.OptionExtensions.filter(cloudshift.OptionExtensions.toOption(Std.parseInt(v)),function(i) {
		return !Math.isNaN(i);
	}),d);
}
cloudshift.StringExtensions.toFloat = function(v,d) {
	if(v == null) return d;
	return cloudshift.OptionExtensions.getOrElseC(cloudshift.OptionExtensions.filter(cloudshift.OptionExtensions.toOption(Std.parseFloat(v)),function(i) {
		return !Math.isNaN(i);
	}),d);
}
cloudshift.StringExtensions.startsWith = function(v,frag) {
	return v.length >= frag.length && frag == v.substr(0,frag.length)?true:false;
}
cloudshift.StringExtensions.endsWith = function(v,frag) {
	return v.length >= frag.length && frag == v.substr(v.length - frag.length)?true:false;
}
cloudshift.StringExtensions.urlEncode = function(v) {
	return StringTools.urlEncode(v);
}
cloudshift.StringExtensions.urlDecode = function(v) {
	return StringTools.urlDecode(v);
}
cloudshift.StringExtensions.htmlEscape = function(v) {
	return StringTools.htmlEscape(v);
}
cloudshift.StringExtensions.htmlUnescape = function(v) {
	return StringTools.htmlUnescape(v);
}
cloudshift.StringExtensions.trim = function(v) {
	return StringTools.trim(v);
}
cloudshift.StringExtensions.contains = function(v,s) {
	return v.indexOf(s) != -1;
}
cloudshift.StringExtensions.replace = function(s,sub,by) {
	return StringTools.replace(s,sub,by);
}
cloudshift.StringExtensions.compare = function(v1,v2) {
	return v1 == v2?0:v1 > v2?1:-1;
}
cloudshift.StringExtensions.equals = function(v1,v2) {
	return v1 == v2;
}
cloudshift.StringExtensions.toString = function(v) {
	return v;
}
cloudshift.StringExtensions.parse = function(str) {
	return JSON.parse(str);
}
cloudshift.StringExtensions.clone = function(o) {
	return JSON.parse(JSON.stringify(o));
}
cloudshift.StringExtensions.info = function(msg,inf) {
	cloudshift.core.LogImpl.info(msg,null,inf);
}
cloudshift.StringExtensions.warn = function(msg,inf) {
	cloudshift.core.LogImpl.warn(msg,null,inf);
}
cloudshift.StringExtensions.error = function(msg,inf) {
	cloudshift.core.LogImpl.error(msg,null,inf);
}
cloudshift.StringExtensions.prototype.__class__ = cloudshift.StringExtensions;
cloudshift.DateExtensions = function() { }
cloudshift.DateExtensions.__name__ = ["cloudshift","DateExtensions"];
cloudshift.DateExtensions.compare = function(v1,v2) {
	var diff = v1.getTime() - v2.getTime();
	return diff < 0?-1:diff > 0?1:0;
}
cloudshift.DateExtensions.equals = function(v1,v2) {
	return v1.getTime() == v2.getTime();
}
cloudshift.DateExtensions.toString = function(v) {
	return v.toString();
}
cloudshift.DateExtensions.UTCString = function(d) {
	return d.toUTCString();
}
cloudshift.DateExtensions.prototype.__class__ = cloudshift.DateExtensions;
cloudshift.ArrayExtensions = function() { }
cloudshift.ArrayExtensions.__name__ = ["cloudshift","ArrayExtensions"];
cloudshift.ArrayExtensions.stringify = function(a) {
	return JSON.stringify(o);
}
cloudshift.ArrayExtensions.filter = function(a,f) {
	var n = [];
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(f(e)) n.push(e);
	}
	return n;
}
cloudshift.ArrayExtensions.size = function(a) {
	return a.length;
}
cloudshift.ArrayExtensions.indexOf = function(a,t) {
	var index = 0;
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(e == t) return index;
		++index;
	}
	return -1;
}
cloudshift.ArrayExtensions.map = function(a,f) {
	var n = [];
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		n.push(f(e));
	}
	return n;
}
cloudshift.ArrayExtensions.next = function(a1,a2) {
	return a2;
}
cloudshift.ArrayExtensions.flatMap = function(a,f) {
	var n = [];
	var _g = 0;
	while(_g < a.length) {
		var e1 = a[_g];
		++_g;
		var $it0 = f(e1).iterator();
		while( $it0.hasNext() ) {
			var e2 = $it0.next();
			n.push(e2);
		}
	}
	return n;
}
cloudshift.ArrayExtensions.foldl = function(a,z,f) {
	var r = z;
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		r = f(r,e);
	}
	return r;
}
cloudshift.ArrayExtensions.foldr = function(a,z,f) {
	var r = z;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		var e = a[a.length - 1 - i];
		r = f(e,r);
	}
	return r;
}
cloudshift.ArrayExtensions.append = function(a,t) {
	var copy = cloudshift.ArrayExtensions.snapshot(a);
	copy.push(t);
	return copy;
}
cloudshift.ArrayExtensions.snapshot = function(a) {
	return [].concat(a);
}
cloudshift.ArrayExtensions.first = function(a) {
	return a[0];
}
cloudshift.ArrayExtensions.firstOption = function(a) {
	return a.length == 0?cloudshift.Option.None:cloudshift.Option.Some(a[0]);
}
cloudshift.ArrayExtensions.last = function(a) {
	return a[a.length - 1];
}
cloudshift.ArrayExtensions.lastOption = function(a) {
	return a.length == 0?cloudshift.Option.None:cloudshift.Option.Some(a[a.length - 1]);
}
cloudshift.ArrayExtensions.contains = function(a,t) {
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(t == e) return true;
	}
	return false;
}
cloudshift.ArrayExtensions.foreach = function(a,f) {
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		f(e);
	}
	return a;
}
cloudshift.ArrayExtensions.take = function(a,n) {
	return a.slice(0,cloudshift.IntExtensions.min(n,a.length));
}
cloudshift.ArrayExtensions.takeWhile = function(a,p) {
	var r = [];
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(p(e)) r.push(e); else break;
	}
	return r;
}
cloudshift.ArrayExtensions.drop = function(a,n) {
	return n >= a.length?[]:a.slice(n);
}
cloudshift.ArrayExtensions.dropWhile = function(a,p) {
	var r = [].concat(a);
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		if(p(e)) r.shift(); else break;
	}
	return r;
}
cloudshift.ArrayExtensions.prototype.__class__ = cloudshift.ArrayExtensions;
cloudshift.HashExtension = function() { }
cloudshift.HashExtension.__name__ = ["cloudshift","HashExtension"];
cloudshift.HashExtension.getOption = function(h,key) {
	var v = h.get(key);
	return v == null?cloudshift.Option.None:cloudshift.Option.Some(v);
}
cloudshift.HashExtension.prototype.__class__ = cloudshift.HashExtension;
cloudshift.OptionExtensions = function() { }
cloudshift.OptionExtensions.__name__ = ["cloudshift","OptionExtensions"];
cloudshift.OptionExtensions.toOption = function(t) {
	return t == null?cloudshift.Option.None:cloudshift.Option.Some(t);
}
cloudshift.OptionExtensions.toArray = function(o) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = [];
			break;
		case 1:
			var v = $e[2];
			$r = [v];
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.map = function(o,f) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = cloudshift.Option.None;
			break;
		case 1:
			var v = $e[2];
			$r = cloudshift.Option.Some(f(v));
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.next = function(o1,o2) {
	return o2;
}
cloudshift.OptionExtensions.foreach = function(o,f) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = null;
			break;
		case 1:
			var v = $e[2];
			$r = f(v);
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.filter = function(o,f) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = cloudshift.Option.None;
			break;
		case 1:
			var v = $e[2];
			$r = f(v)?cloudshift.Option.Some(v):cloudshift.Option.None;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.flatMap = function(o,f) {
	return cloudshift.OptionExtensions.flatten(cloudshift.OptionExtensions.map(o,f));
}
cloudshift.OptionExtensions.flatten = function(o1) {
	return (function($this) {
		var $r;
		var $e = (o1);
		switch( $e[1] ) {
		case 0:
			$r = cloudshift.Option.None;
			break;
		case 1:
			var o2 = $e[2];
			$r = o2;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.get = function(o) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = cloudshift.Mixin.error("Error: Option is empty");
			break;
		case 1:
			var v = $e[2];
			$r = v;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.orElse = function(o1,thunk) {
	return (function($this) {
		var $r;
		var $e = (o1);
		switch( $e[1] ) {
		case 0:
			$r = thunk();
			break;
		case 1:
			var v = $e[2];
			$r = o1;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.getOrElse = function(o,thunk) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = thunk();
			break;
		case 1:
			var v = $e[2];
			$r = v;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.orElseC = function(o1,o2) {
	return cloudshift.OptionExtensions.orElse(o1,cloudshift.DynamicExtensions.toThunk(o2));
}
cloudshift.OptionExtensions.getOrElseC = function(o,c) {
	return cloudshift.OptionExtensions.getOrElse(o,cloudshift.DynamicExtensions.toThunk(c));
}
cloudshift.OptionExtensions.isEmpty = function(o) {
	return (function($this) {
		var $r;
		var $e = (o);
		switch( $e[1] ) {
		case 0:
			$r = true;
			break;
		case 1:
			var v = $e[2];
			$r = false;
			break;
		}
		return $r;
	}(this));
}
cloudshift.OptionExtensions.prototype.__class__ = cloudshift.OptionExtensions;
cloudshift.PartExtensions = function() { }
cloudshift.PartExtensions.__name__ = ["cloudshift","PartExtensions"];
cloudshift.PartExtensions.start = function(part,data) {
	part.part_.start(data);
}
cloudshift.PartExtensions.stop = function(part,data) {
	part.part_.stop(data);
}
cloudshift.PartExtensions.observe = function(part,cb) {
	part.part_.observe(cb);
}
cloudshift.PartExtensions.notify = function(part,e) {
	part.part_.notify(e);
}
cloudshift.PartExtensions.partID = function(part) {
	return part.part_.partID;
}
cloudshift.PartExtensions.observeSignal = function(part,cb) {
	part.part_._events.observe(cb);
}
cloudshift.PartExtensions.prototype.__class__ = cloudshift.PartExtensions;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
cloudshift.orgmode.OrgTokens = { __ename__ : ["cloudshift","orgmode","OrgTokens"], __constructs__ : ["TPARA","TH1","TH2","TH3","TTEXTSTART","TTEXTNEXT","TTEXTEND","TTABLESTART","TTABLEROW","TTABLEEND","TUNORDSTART","TUNORDNEXT","TUNORDCONTINUE","TUNORDEND","TORDSTART","TORDNEXT","TORDCONTINUE","TORDEND","TSRCSTART","TSRCEND","TBOLD","TUNDERLINE","TIGNORE","TURL"] }
cloudshift.orgmode.OrgTokens.TPARA = ["TPARA",0];
cloudshift.orgmode.OrgTokens.TPARA.toString = $estr;
cloudshift.orgmode.OrgTokens.TPARA.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TH1 = function(h) { var $x = ["TH1",1,h]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TH2 = function(h) { var $x = ["TH2",2,h]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TH3 = function(h) { var $x = ["TH3",3,h]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TTEXTSTART = function(s) { var $x = ["TTEXTSTART",4,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TTEXTNEXT = function(s) { var $x = ["TTEXTNEXT",5,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TTEXTEND = function(s) { var $x = ["TTEXTEND",6,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TTABLESTART = ["TTABLESTART",7];
cloudshift.orgmode.OrgTokens.TTABLESTART.toString = $estr;
cloudshift.orgmode.OrgTokens.TTABLESTART.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TTABLEROW = function(s) { var $x = ["TTABLEROW",8,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TTABLEEND = ["TTABLEEND",9];
cloudshift.orgmode.OrgTokens.TTABLEEND.toString = $estr;
cloudshift.orgmode.OrgTokens.TTABLEEND.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TUNORDSTART = function(t,indent) { var $x = ["TUNORDSTART",10,t,indent]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TUNORDNEXT = function(t,indent) { var $x = ["TUNORDNEXT",11,t,indent]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TUNORDCONTINUE = function(t) { var $x = ["TUNORDCONTINUE",12,t]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TUNORDEND = ["TUNORDEND",13];
cloudshift.orgmode.OrgTokens.TUNORDEND.toString = $estr;
cloudshift.orgmode.OrgTokens.TUNORDEND.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TORDSTART = function(t,indent) { var $x = ["TORDSTART",14,t,indent]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TORDNEXT = function(t,indent) { var $x = ["TORDNEXT",15,t,indent]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TORDCONTINUE = function(t) { var $x = ["TORDCONTINUE",16,t]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TORDEND = ["TORDEND",17];
cloudshift.orgmode.OrgTokens.TORDEND.toString = $estr;
cloudshift.orgmode.OrgTokens.TORDEND.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TSRCSTART = function(type) { var $x = ["TSRCSTART",18,type]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TSRCEND = function(src) { var $x = ["TSRCEND",19,src]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TBOLD = function(s) { var $x = ["TBOLD",20,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TUNDERLINE = function(s) { var $x = ["TUNDERLINE",21,s]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgTokens.TIGNORE = ["TIGNORE",22];
cloudshift.orgmode.OrgTokens.TIGNORE.toString = $estr;
cloudshift.orgmode.OrgTokens.TIGNORE.__enum__ = cloudshift.orgmode.OrgTokens;
cloudshift.orgmode.OrgTokens.TURL = function(url,desc) { var $x = ["TURL",23,url,desc]; $x.__enum__ = cloudshift.orgmode.OrgTokens; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct = { __ename__ : ["cloudshift","orgmode","OrgConstruct"], __constructs__ : ["PARA","H1","H2","H3","TABLE","TEXTSTART","TEXT","TEXTEND","SRC","ORD","UNORD","BOLD","UNDERLINE","URL"] }
cloudshift.orgmode.OrgConstruct.PARA = ["PARA",0];
cloudshift.orgmode.OrgConstruct.PARA.toString = $estr;
cloudshift.orgmode.OrgConstruct.PARA.__enum__ = cloudshift.orgmode.OrgConstruct;
cloudshift.orgmode.OrgConstruct.H1 = function(h) { var $x = ["H1",1,h]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.H2 = function(h) { var $x = ["H2",2,h]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.H3 = function(h) { var $x = ["H3",3,h]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.TABLE = function(t) { var $x = ["TABLE",4,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.TEXTSTART = function(t) { var $x = ["TEXTSTART",5,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.TEXT = function(t) { var $x = ["TEXT",6,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.TEXTEND = function(t) { var $x = ["TEXTEND",7,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.SRC = function(t) { var $x = ["SRC",8,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.ORD = function(t) { var $x = ["ORD",9,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.UNORD = function(t) { var $x = ["UNORD",10,t]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.BOLD = function(s) { var $x = ["BOLD",11,s]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.UNDERLINE = function(s) { var $x = ["UNDERLINE",12,s]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.OrgConstruct.URL = function(url,desc) { var $x = ["URL",13,url,desc]; $x.__enum__ = cloudshift.orgmode.OrgConstruct; $x.toString = $estr; return $x; }
cloudshift.orgmode.Context = { __ename__ : ["cloudshift","orgmode","Context"], __constructs__ : ["NORM","LIST","PARA"] }
cloudshift.orgmode.Context.NORM = ["NORM",0];
cloudshift.orgmode.Context.NORM.toString = $estr;
cloudshift.orgmode.Context.NORM.__enum__ = cloudshift.orgmode.Context;
cloudshift.orgmode.Context.LIST = ["LIST",1];
cloudshift.orgmode.Context.LIST.toString = $estr;
cloudshift.orgmode.Context.LIST.__enum__ = cloudshift.orgmode.Context;
cloudshift.orgmode.Context.PARA = ["PARA",2];
cloudshift.orgmode.Context.PARA.toString = $estr;
cloudshift.orgmode.Context.PARA.__enum__ = cloudshift.orgmode.Context;
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
cloudshift.orgmode.Org = function() { }
cloudshift.orgmode.Org.__name__ = ["cloudshift","orgmode","Org"];
cloudshift.orgmode.Org.indent = null;
cloudshift.orgmode.Org.lex = function(f) {
	var tk = new cloudshift.orgmode.Lexer(new cloudshift.orgmode.StringReader(f),cloudshift.orgmode.SynStyle.LINE);
	tk.match(cloudshift.orgmode.Org.reEOP,function(re) {
		return cloudshift.orgmode.OrgTokens.TPARA;
	}).match(cloudshift.orgmode.Org.reH1,function(re) {
		return cloudshift.orgmode.OrgTokens.TH1(re.matched(1));
	}).match(cloudshift.orgmode.Org.reH2,function(re) {
		return cloudshift.orgmode.OrgTokens.TH2(re.matched(1));
	}).match(cloudshift.orgmode.Org.reH3,function(re) {
		return cloudshift.orgmode.OrgTokens.TH3(re.matched(1));
	}).match(cloudshift.orgmode.Org.reTable,function(re) {
		return cloudshift.orgmode.OrgTokens.TTABLESTART;
	}).match(cloudshift.orgmode.Org.reUrl,function(re) {
		return cloudshift.orgmode.OrgTokens.TURL(re.matched(1),re.matched(2));
	}).match(cloudshift.orgmode.Org.reSrc,function(re) {
		tk.mark();
		return cloudshift.orgmode.OrgTokens.TSRCSTART(re.matched(1));
	}).match(cloudshift.orgmode.Org.reUnOrd,function(re) {
		cloudshift.orgmode.Org.indent = re.matched(1).length + 2;
		return cloudshift.orgmode.OrgTokens.TUNORDSTART(re.matched(2),re.matched(1).length);
	}).match(cloudshift.orgmode.Org.reOrd,function(re) {
		return cloudshift.orgmode.OrgTokens.TORDSTART(re.matched(2),re.matched(1).length);
	}).match(cloudshift.orgmode.Org.reWord,function(re) {
		return cloudshift.orgmode.OrgTokens.TTEXTSTART(re.matched(1));
	}).group("table").match(cloudshift.orgmode.Org.reTable,function(re) {
		return cloudshift.orgmode.OrgTokens.TTABLEROW(re.matched(1));
	}).nomatch(function(s) {
		return cloudshift.orgmode.OrgTokens.TTABLEEND;
	}).group("text").match(cloudshift.orgmode.Org.reBold,function(re) {
		return cloudshift.orgmode.OrgTokens.TBOLD(re.matched(1));
	}).match(cloudshift.orgmode.Org.reUnderline,function(re) {
		return cloudshift.orgmode.OrgTokens.TUNDERLINE(re.matched(1));
	}).match(cloudshift.orgmode.Org.reUrl,function(re) {
		return cloudshift.orgmode.OrgTokens.TURL(re.matched(1),re.matched(2));
	}).match(cloudshift.orgmode.Org.reWord,function(re) {
		return cloudshift.orgmode.OrgTokens.TTEXTNEXT(re.matched(1));
	}).match(cloudshift.orgmode.Org.reEOL,function(re) {
		var s = re.matched(1);
		if(s == null) s = "";
		return cloudshift.orgmode.OrgTokens.TTEXTNEXT(s + " ");
	}).match(cloudshift.orgmode.Org.reEOP,function(re) {
		return cloudshift.orgmode.OrgTokens.TTEXTEND("");
	}).nomatch(function(s) {
		return cloudshift.orgmode.OrgTokens.TTEXTEND("____");
	}).group("src").match(new EReg("^\\s*#\\+END_SRC.*",""),function(re) {
		return cloudshift.orgmode.OrgTokens.TSRCEND(tk.yank());
	}).group("unord").match(cloudshift.orgmode.Org.reUnOrd,function(re) {
		cloudshift.orgmode.Org.indent = re.matched(1).length + 2;
		return cloudshift.orgmode.OrgTokens.TUNORDNEXT(re.matched(2),re.matched(1).length);
	}).match(cloudshift.orgmode.Org.reEOP,function(re) {
		return cloudshift.orgmode.OrgTokens.TUNORDEND;
	}).nomatch(function(s) {
		if(cloudshift.orgmode.Org.reLine.match(s)) {
			if(cloudshift.orgmode.Org.reLine.matched(1).length == cloudshift.orgmode.Org.indent) return cloudshift.orgmode.OrgTokens.TUNORDCONTINUE(cloudshift.orgmode.Org.reLine.matched(2));
		}
		return cloudshift.orgmode.OrgTokens.TUNORDEND;
	}).group("ord").match(cloudshift.orgmode.Org.reOrd,function(re) {
		return cloudshift.orgmode.OrgTokens.TORDNEXT(re.matched(2),re.matched(1).length);
	}).match(cloudshift.orgmode.Org.reLine,function(re) {
		return cloudshift.orgmode.OrgTokens.TORDCONTINUE(re.matched(1));
	}).match(cloudshift.orgmode.Org.reEOP,function(re) {
		return cloudshift.orgmode.OrgTokens.TORDEND;
	}).nomatch(function(s) {
		return cloudshift.orgmode.OrgTokens.TORDEND;
	})["use"]("default");
	return tk;
}
cloudshift.orgmode.Org.parse = function(contents,supplyNext) {
	var lexer = cloudshift.orgmode.Org.lex(contents);
	var $it0 = lexer.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		var $e = (t);
		switch( $e[1] ) {
		case 0:
			supplyNext(cloudshift.orgmode.OrgConstruct.PARA);
			break;
		case 1:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.H1(s));
			break;
		case 2:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.H2(s));
			break;
		case 3:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.H3(s));
			break;
		case 7:
			lexer["use"]("table");
			break;
		case 8:
			var r = $e[2];
			cloudshift.orgmode.Org.tab.push(r);
			break;
		case 9:
			supplyNext(cloudshift.orgmode.OrgConstruct.TABLE(cloudshift.orgmode.Org.tab));
			break;
		case 4:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.TEXTSTART(s));
			lexer["use"]("text");
			break;
		case 5:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.TEXT(s));
			break;
		case 6:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.TEXTEND(s));
			lexer["use"]();
			break;
		case 18:
			var type = $e[2];
			lexer["use"]("src");
			break;
		case 19:
			var src = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.SRC(src));
			lexer["use"]();
			break;
		case 10:
			var i = $e[3], s = $e[2];
			cloudshift.orgmode.Org.unord = [];
			cloudshift.orgmode.Org.unord.push(s);
			lexer["use"]("unord");
			break;
		case 11:
			var i = $e[3], s = $e[2];
			cloudshift.orgmode.Org.unord.push(s);
			break;
		case 12:
			var s = $e[2];
			cloudshift.orgmode.Org.unord[cloudshift.orgmode.Org.unord.length - 1] = cloudshift.ArrayExtensions.last(cloudshift.orgmode.Org.unord) + s;
			break;
		case 13:
			supplyNext(cloudshift.orgmode.OrgConstruct.UNORD(cloudshift.orgmode.Org.unord));
			lexer["use"]();
			break;
		case 14:
			var i = $e[3], s = $e[2];
			cloudshift.orgmode.Org.ord = [];
			cloudshift.orgmode.Org.ord.push(s);
			lexer["use"]("ord");
			break;
		case 15:
			var i = $e[3], s = $e[2];
			cloudshift.orgmode.Org.ord.push(s);
			break;
		case 16:
			var s = $e[2];
			cloudshift.orgmode.Org.ord[cloudshift.orgmode.Org.ord.length - 1] = cloudshift.ArrayExtensions.last(cloudshift.orgmode.Org.ord) + s;
			break;
		case 17:
			supplyNext(cloudshift.orgmode.OrgConstruct.ORD(cloudshift.orgmode.Org.ord));
			break;
		case 20:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.BOLD(s + " "));
			break;
		case 21:
			var s = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.UNDERLINE(s + " "));
			break;
		case 22:
			break;
		case 23:
			var d = $e[3], u = $e[2];
			supplyNext(cloudshift.orgmode.OrgConstruct.URL(u,d));
			break;
		}
	}
}
cloudshift.orgmode.Org.prototype.__class__ = cloudshift.orgmode.Org;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	js.Node.console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
cloudshift.core.LogImpl = function() { }
cloudshift.core.LogImpl.__name__ = ["cloudshift","core","LogImpl"];
cloudshift.core.LogImpl.format = function(type,msg,cat,inf) {
	var pos = "";
	if(inf != null) {
		if(inf.fileName != "Log.hx") pos = inf.fileName + ":" + inf.lineNumber;
	}
	var d = Date.now();
	var category = cat != ""?"|" + cat:cat;
	var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	return "[" + type + "|" + time + "|" + pos + category + "] " + Std.string(msg);
}
cloudshift.core.LogImpl.myTrace = function(v,inf) {
	cloudshift.core.LogImpl.write(v);
}
cloudshift.core.LogImpl.init = function(fileName) {
	if(fileName != null) cloudshift.core.LogImpl.logFileFD = js.Node.fs.openSync(fileName,"a+",438); else cloudshift.core.LogImpl.logFileFD = -1;
}
cloudshift.core.LogImpl.write = function(msg) {
	if(msg != null) {
		if(cloudshift.core.LogImpl.logFileFD != -1) {
			var b = new Buffer(msg + "\n");
			js.Node.fs.write(cloudshift.core.LogImpl.logFileFD,b,0,b.length,null);
		} else {
			console.log(msg);
		}
	}
}
cloudshift.core.LogImpl.doTrace = function(type,category,msg,inf) {
	if(type == "error") msg = msg + "\n" + haxe.Stack.toString(haxe.Stack.exceptionStack());
	cloudshift.core.LogImpl.write(cloudshift.core.LogImpl.format(type,msg,category,inf));
}
cloudshift.core.LogImpl.info = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.doTrace("info",category,msg,inf);
}
cloudshift.core.LogImpl.warn = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.doTrace("warn",category,msg,inf);
}
cloudshift.core.LogImpl.error = function(msg,category,inf) {
	if(category == null) category = "";
	cloudshift.core.LogImpl.doTrace("error",category,msg,inf);
}
cloudshift.core.LogImpl.prototype.__class__ = cloudshift.core.LogImpl;
OrgToHtml = function() { }
OrgToHtml.__name__ = ["OrgToHtml"];
OrgToHtml.main = function() {
	var contents = new String(js.Node.fs.readFileSync(js.Node.process.argv[2]));
	cloudshift.orgmode.Org.parse(contents,OrgToHtml.html);
}
OrgToHtml.html = function(cons) {
	var print = $closure(js.Node.process.stdout,"write");
	var $e = (cons);
	switch( $e[1] ) {
	case 0:
		print("<p></p>");
		break;
	case 1:
		var s = $e[2];
		print("<h1>" + s + "</h1>");
		break;
	case 2:
		var s = $e[2];
		print("<h2>" + s + "</h2>");
		break;
	case 3:
		var s = $e[2];
		print("<h3>" + s + "</h3>");
		break;
	case 5:
		var s = $e[2];
		print("<p>" + s);
		break;
	case 6:
		var s = $e[2];
		print(s);
		break;
	case 7:
		var s = $e[2];
		print(s + "</p>");
		break;
	case 8:
		var s = $e[2];
		print("<pre>" + s.join("\n") + "</pre>");
		break;
	case 4:
		var s = $e[2];
		print("<pre>" + s.join("\n") + "</pre>");
		break;
	case 12:
		var s = $e[2];
		print("<span style=\"text-decoration:underline\">" + s + "</span>");
		break;
	case 11:
		var s = $e[2];
		print("<strong>" + s + "</strong>");
		break;
	case 10:
		var s = $e[2];
		print("<ul>");
		cloudshift.ArrayExtensions.foreach(s,function(el) {
			print("<li>" + el + "</li>");
		});
		print("</ul>");
		break;
	case 9:
		var s = $e[2];
		print("<ol>");
		cloudshift.ArrayExtensions.foreach(s,function(el) {
			print("<li>" + el + "</li>");
		});
		print("</ol>");
		break;
	case 13:
		var d = $e[3], u = $e[2];
		print("<a href=\"" + u + "\">" + d + "</a>");
		break;
	}
}
OrgToHtml.prototype.__class__ = OrgToHtml;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js.Node.__filename = __filename;
	js.Node.__dirname = __dirname;
	js.Node.paths = require.paths;
	js.Node.setTimeout = setTimeout;
	js.Node.clearTimeout = clearTimeout;
	js.Node.setInterval = setInterval;
	js.Node.clearInterval = clearInterval;
	js.Node.global = global;
	js.Node.process = process;
	js.Node.require = require;
	js.Node.console = console;
	js.Node.module = module;
	js.Node.stringify = JSON.stringify;
	js.Node.parse = JSON.parse;
	js.Node.util = js.Node.require("util");
	js.Node.fs = js.Node.require("fs");
	js.Node.net = js.Node.require("net");
	js.Node.http = js.Node.require("http");
	js.Node.https = js.Node.require("https");
	js.Node.path = js.Node.require("path");
	js.Node.url = js.Node.require("url");
	js.Node.os = js.Node.require("os");
	js.Node.crypto = js.Node.require("crypto");
	js.Node.dns = js.Node.require("dns");
	js.Node.queryString = js.Node.require("querystring");
	js.Node.assert = js.Node.require("assert");
	js.Node.childProcess = js.Node.require("child_process");
	js.Node.vm = js.Node.require("vm");
	js.Node.tls = js.Node.require("tls");
	js.Node.dgram = js.Node.require("dgram");
	js.Node.assert = js.Node.require("assert");
	js.Node.repl = js.Node.require("repl");
	var b = js.Node.require("buffer");
	Buffer = b.Buffer;
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
js.NodeC.UTF8 = "utf8";
js.NodeC.ASCII = "ascii";
js.NodeC.BINARY = "binary";
js.NodeC.EVENT_EVENTEMITTER_NEWLISTENER = "newListener";
js.NodeC.EVENT_EVENTEMITTER_ERROR = "error";
js.NodeC.EVENT_STREAM_DATA = "data";
js.NodeC.EVENT_STREAM_END = "end";
js.NodeC.EVENT_STREAM_ERROR = "error";
js.NodeC.EVENT_STREAM_CLOSE = "close";
js.NodeC.EVENT_STREAM_DRAIN = "drain";
js.NodeC.EVENT_STREAM_CONNECT = "connect";
js.NodeC.EVENT_STREAM_SECURE = "secure";
js.NodeC.EVENT_STREAM_TIMEOUT = "timeout";
js.NodeC.EVENT_PROCESS_EXIT = "exit";
js.NodeC.EVENT_PROCESS_UNCAUGHTEXCEPTION = "uncaughtException";
js.NodeC.EVENT_PROCESS_SIGINT = "SIGINT";
js.NodeC.EVENT_PROCESS_SIGUSR1 = "SIGUSR1";
js.NodeC.EVENT_CHILDPROCESS_EXIT = "exit";
js.NodeC.EVENT_HTTPSERVER_REQUEST = "request";
js.NodeC.EVENT_HTTPSERVER_CONNECTION = "connection";
js.NodeC.EVENT_HTTPSERVER_CLOSE = "close";
js.NodeC.EVENT_HTTPSERVER_UPGRADE = "upgrade";
js.NodeC.EVENT_HTTPSERVER_CLIENTERROR = "clientError";
js.NodeC.EVENT_HTTPSERVERREQUEST_DATA = "data";
js.NodeC.EVENT_HTTPSERVERREQUEST_END = "end";
js.NodeC.EVENT_CLIENTREQUEST_RESPONSE = "response";
js.NodeC.EVENT_CLIENTRESPONSE_DATA = "data";
js.NodeC.EVENT_CLIENTRESPONSE_END = "end";
js.NodeC.EVENT_NETSERVER_CONNECTION = "connection";
js.NodeC.EVENT_NETSERVER_CLOSE = "close";
js.NodeC.FILE_READ = "r";
js.NodeC.FILE_READ_APPEND = "r+";
js.NodeC.FILE_WRITE = "w";
js.NodeC.FILE_WRITE_APPEND = "a+";
js.NodeC.FILE_READWRITE = "a";
js.NodeC.FILE_READWRITE_APPEND = "a+";
cloudshift.orgmode.Lexer.EOF = -1;
cloudshift.orgmode.Lexer.DEFAULT_CHUNK_SIZE = 512;
cloudshift.core.ObservableImpl.CLEANUP = 1;
cloudshift.orgmode.Org.reH1 = new EReg("^\\s*\\* (.*)\n","");
cloudshift.orgmode.Org.reH2 = new EReg("^\\s*\\*\\* (.*)\n","");
cloudshift.orgmode.Org.reH3 = new EReg("^\\*\\*\\* (.*)\n","");
cloudshift.orgmode.Org.reTable = new EReg("^\\s*\\|(.*)","");
cloudshift.orgmode.Org.reWord = new EReg("^ ?(\\S* )\n?","");
cloudshift.orgmode.Org.reEOL = new EReg("(.+)\n$","");
cloudshift.orgmode.Org.reEOP = new EReg("^\n$","");
cloudshift.orgmode.Org.reUnOrd = new EReg("^(\\s*)[-+]([\\S ]+)\n","");
cloudshift.orgmode.Org.reOrd = new EReg("^(\\s*)[0-9]\\.?(.*)","");
cloudshift.orgmode.Org.reSrc = new EReg("^\\s*#\\+BEGIN_SRC\\s([a-zA-Z]*)","");
cloudshift.orgmode.Org.reUnderline = new EReg("^\\s*_(.*?)_\n?","");
cloudshift.orgmode.Org.reBold = new EReg("^\\s*\\*(.*?)\\*\n?","");
cloudshift.orgmode.Org.reLine = new EReg("^(\\s*)(.*)\n$","");
cloudshift.orgmode.Org.reUrl = new EReg("\\s*\\[\\[(.*?)\\]\\[(.*?)\\]\\]\n?","");
cloudshift.orgmode.Org.context = [cloudshift.orgmode.Context.NORM];
cloudshift.orgmode.Org.tab = [];
cloudshift.orgmode.Org.unord = [];
cloudshift.orgmode.Org.ord = [];
cloudshift.orgmode.Org.src = [];
cloudshift.core.LogImpl.logFileFD = -1;
OrgToHtml.main()