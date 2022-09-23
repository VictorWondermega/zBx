
// version: 1

// ザガタ。六 /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function zBx(za,a,n) {
	/* Zagata.Window / PopUp */

	this.za = (typeof(za)=='undefined')?false:za; // core
	var a = (typeof(a)=='undefined')?false:a; // attr
	this.n = (typeof(n)=='undefined')?'zBx':n; // name
	

	this.cnt = function(o) {
		this.bw.innerHTML=''; if(typeof(o)=='object'&&o!=null) { this.bw.appendChild(o); } else { this.bw.innerHTML+=o; }
	return this;
	};
	this.pos = function() {
		var wwh = this.wwh(); var wxy = this.wxy(); var wh = {w:this.bw.offsetWidth,h:this.bw.offsetHeight};
		this.bw.style.left = Math.ceil( (wwh.w - wh.w) / 2 )+'px'; 
		yy = wxy.y + Math.ceil(wwh.h/2 - wh.h/2); this.bw.style.top = ((yy>0)?yy:(wxy.y + 100))+'px';
		
		var bwh = (wwh.h>this.d.body.offsetHeight)?wwh.h:this.d.body.offsetHeight;
		this.bs.style.height = ((wh.h>bwh)?(wh.h+200):bwh)+'px';
	return this;
	};
	this.shw = function() { // show
		this.bw.className += ' bwshw'; this.bs.className += ' bwshw';
		this.bw.style.display='block'; this.bs.style.display='block';  return this;
	};
	this.clsadd = function(txt) { // add close button
		if(typeof(txt)=='undefined') { txt=''; } else { txt = ' '+txt; }
		var cls = document.createElement('a'); cls.href='#'; cls.className='cls'; cls.innerHTML='&#215;'+txt;
		cls.onclick = function() { this.parentNode.parent.cls(); return false; }; this.bw.appendChild(cls);
	return this;
	};
	this.bscls = function() { // close by click on shadow
		this.bs.parent = this; this.bs.onclick = function() { this.parent.cls(); return false; };
	return this;
	};
	this.cls = function() { // hide
		this.bw.className = this.bw.className.replace(' bwshw',''); 
		this.bs.className = this.bs.className.replace(' bwshw',''); 
		window.location.hash=''; this.bw.style.display='none'; this.bs.style.display='none'; return false;
	};
	///////////////////////////////
	// funcs
	this.wwh = function() {
		var w = 0; var h = 0; if(!window.innerWidth) { if(!(this.d.documentElement.clientWidth == 0)) { w = this.d.documentElement.clientWidth; h = this.d.documentElement.clientHeight; } else { w = this.d.body.clientWidth; h = this.d.body.clientHeight; } } else { w = window.innerWidth; h = window.innerHeight; }
	return {w:w,h:h};
	};
	this.wxy = function() {
		var x = 0, y = 0; if(typeof( window.pageYOffset )=='number') { y = window.pageYOffset; x = window.pageXOffset; } else if( this.d.body && ( this.d.body.scrollLeft || this.d.body.scrollTop ) ) { y = this.d.body.scrollTop; x = this.d.body.scrollLeft; } else if( this.d.documentElement && ( this.d.documentElement.scrollLeft || this.d.documentElement.scrollTop ) ) { y = this.d.documentElement.scrollTop; x = this.d.documentElement.scrollLeft; }
	return {x:x, y:y}; 
	};
	
	///////////////////////////////
	// ini
	// this.za.msg('dbg','zBx','i am '+this.n+'(zBx)');
	// console.log('i am '+this.n);
	this.d = window.document;
	this.b = document.getElementsByTagName('body')[0];

	this.bw = document.createElement('div'); this.bw.className="bx bw"; this.bw.style.display='none'; this.b.appendChild(this.bw); // win
	this.bs = document.createElement('div'); this.bs.className="bx bs"; this.bs.style.display='none'; this.b.appendChild(this.bs); // shadow
	this.bw.parent = this;

};

////////////////////////////////////////////////////////////////
if(typeof(zlo)=='object') {
	zlo.da('zBx');
} else {
	console.log('zBx');
}
