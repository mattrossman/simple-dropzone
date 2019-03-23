var e,t=(function(e,t){var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var r in i)n(i,r)&&(e[r]=i[r])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,i,n,r){if(t.subarray&&e.subarray)e.set(t.subarray(i,i+n),r);else for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){var t,i,n,r,a,o;for(n=0,t=0,i=e.length;t<i;t++)n+=e[t].length;for(o=new Uint8Array(n),r=0,t=0,i=e.length;t<i;t++)o.set(a=e[t],r),r+=a.length;return o}},a={arraySet:function(e,t,i,n,r){for(var a=0;a<n;a++)e[r+a]=t[i+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,r)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,a))},t.setTyped(i)}(e={exports:{}},e.exports),e.exports),i=function(e,t,i,n){for(var r=65535&e|0,a=e>>>16&65535|0,o=0;0!==i;){i-=o=i>2e3?2e3:i;do{a=a+(r=r+t[n++]|0)|0}while(--o);r%=65521,a%=65521}return r|a<<16|0},n=function(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}(),r=function(e,t,i,r){var a=n,o=r+i;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e},a=function(e,t){var i,n,r,a,o,s,f,l,d,h,c,u,p,w,_,m,b,v,k,g,y,x,E,S,B;S=e.input,r=(n=e.next_in)+(e.avail_in-5),B=e.output,o=(a=e.next_out)-(t-e.avail_out),s=a+(e.avail_out-257),f=(i=e.state).dmax,l=i.wsize,d=i.whave,h=i.wnext,c=i.window,u=i.hold,p=i.bits,w=i.lencode,_=i.distcode,m=(1<<i.lenbits)-1,b=(1<<i.distbits)-1;e:do{p<15&&(u+=S[n++]<<p,u+=S[n++]<<(p+=8),p+=8),v=w[u&m];t:for(;;){if(u>>>=k=v>>>24,p-=k,0==(k=v>>>16&255))B[a++]=65535&v;else{if(!(16&k)){if(0==(64&k)){v=w[(65535&v)+(u&(1<<k)-1)];continue t}if(32&k){i.mode=12;break e}e.msg="invalid literal/length code",i.mode=30;break e}g=65535&v,(k&=15)&&(p<k&&(u+=S[n++]<<p,p+=8),g+=u&(1<<k)-1,u>>>=k,p-=k),p<15&&(u+=S[n++]<<p,u+=S[n++]<<(p+=8),p+=8),v=_[u&b];i:for(;;){if(u>>>=k=v>>>24,p-=k,!(16&(k=v>>>16&255))){if(0==(64&k)){v=_[(65535&v)+(u&(1<<k)-1)];continue i}e.msg="invalid distance code",i.mode=30;break e}if(y=65535&v,p<(k&=15)&&(u+=S[n++]<<p,(p+=8)<k&&(u+=S[n++]<<p,p+=8)),(y+=u&(1<<k)-1)>f){e.msg="invalid distance too far back",i.mode=30;break e}if(u>>>=k,p-=k,y>(k=a-o)){if((k=y-k)>d&&i.sane){e.msg="invalid distance too far back",i.mode=30;break e}if(x=0,E=c,0===h){if(x+=l-k,k<g){g-=k;do{B[a++]=c[x++]}while(--k);x=a-y,E=B}}else if(h<k){if(x+=l+h-k,(k-=h)<g){g-=k;do{B[a++]=c[x++]}while(--k);if(x=0,h<g){g-=k=h;do{B[a++]=c[x++]}while(--k);x=a-y,E=B}}}else if(x+=h-k,k<g){g-=k;do{B[a++]=c[x++]}while(--k);x=a-y,E=B}for(;g>2;)B[a++]=E[x++],B[a++]=E[x++],B[a++]=E[x++],g-=3;g&&(B[a++]=E[x++],g>1&&(B[a++]=E[x++]))}else{x=a-y;do{B[a++]=B[x++],B[a++]=B[x++],B[a++]=B[x++],g-=3}while(g>2);g&&(B[a++]=B[x++],g>1&&(B[a++]=B[x++]))}break}}break}}while(n<r&&a<s);u&=(1<<(p-=(g=p>>3)<<3))-1,e.next_in=n-=g,e.next_out=a,e.avail_in=n<r?r-n+5:5-(n-r),e.avail_out=a<s?s-a+257:257-(a-s),i.hold=u,i.bits=p},o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],d=function(e,i,n,r,a,d,h,c){var u,p,w,_,m,b,v,k,g,y=c.bits,x=0,E=0,S=0,B=0,Z=0,R=0,A=0,T=0,L=0,O=0,U=null,D=0,N=new t.Buf16(16),C=new t.Buf16(16),I=null,z=0;for(x=0;x<=15;x++)N[x]=0;for(E=0;E<r;E++)N[i[n+E]]++;for(Z=y,B=15;B>=1&&0===N[B];B--);if(Z>B&&(Z=B),0===B)return a[d++]=20971520,a[d++]=20971520,c.bits=1,0;for(S=1;S<B&&0===N[S];S++);for(Z<S&&(Z=S),T=1,x=1;x<=15;x++)if(T<<=1,(T-=N[x])<0)return-1;if(T>0&&(0===e||1!==B))return-1;for(C[1]=0,x=1;x<15;x++)C[x+1]=C[x]+N[x];for(E=0;E<r;E++)0!==i[n+E]&&(h[C[i[n+E]]++]=E);if(0===e?(U=I=h,b=19):1===e?(U=o,D-=257,I=s,z-=257,b=256):(U=f,I=l,b=-1),O=0,E=0,x=S,m=d,R=Z,A=0,w=-1,_=(L=1<<Z)-1,1===e&&L>852||2===e&&L>592)return 1;for(;;){v=x-A,h[E]<b?(k=0,g=h[E]):h[E]>b?(k=I[z+h[E]],g=U[D+h[E]]):(k=96,g=0),u=1<<x-A,S=p=1<<R;do{a[m+(O>>A)+(p-=u)]=v<<24|k<<16|g|0}while(0!==p);for(u=1<<x-1;O&u;)u>>=1;if(0!==u?(O&=u-1,O+=u):O=0,E++,0==--N[x]){if(x===B)break;x=i[n+h[E]]}if(x>Z&&(O&_)!==w){for(0===A&&(A=Z),m+=S,T=1<<(R=x-A);R+A<B&&!((T-=N[R+A])<=0);)R++,T<<=1;if(L+=1<<R,1===e&&L>852||2===e&&L>592)return 1;a[w=O&_]=Z<<24|R<<16|m-d|0}}return 0!==O&&(a[m+O]=x-A<<24|64<<16|0),c.bits=Z,0},h=1,c=2,u=0,p=-2,w=1,_=852,m=592;function b(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new t.Buf16(320),this.work=new t.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function k(e){var i;return e&&e.state?(e.total_in=e.total_out=(i=e.state).total=0,e.msg="",i.wrap&&(e.adler=1&i.wrap),i.mode=w,i.last=0,i.havedict=0,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new t.Buf32(_),i.distcode=i.distdyn=new t.Buf32(m),i.sane=1,i.back=-1,u):p}function g(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,k(e)):p}function y(e,t){var i,n;return e&&e.state?(t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?p:(null!==(n=e.state).window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,g(e))):p}function x(e,t){var i,n;return e?(n=new v,e.state=n,n.window=null,(i=y(e,t))!==u&&(e.state=null),i):p}var E,S,B=!0;function Z(e){if(B){var i;for(E=new t.Buf32(512),S=new t.Buf32(32),i=0;i<144;)e.lens[i++]=8;for(;i<256;)e.lens[i++]=9;for(;i<280;)e.lens[i++]=7;for(;i<288;)e.lens[i++]=8;for(d(h,e.lens,0,288,E,0,e.work,{bits:9}),i=0;i<32;)e.lens[i++]=5;d(c,e.lens,0,32,S,0,e.work,{bits:5}),B=!1}e.lencode=E,e.lenbits=9,e.distcode=S,e.distbits=5}function R(e,i,n,r){var a,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new t.Buf8(o.wsize)),r>=o.wsize?(t.arraySet(o.window,i,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>r&&(a=r),t.arraySet(o.window,i,n-r,a,o.wnext),(r-=a)?(t.arraySet(o.window,i,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}var A={inflateReset:g,inflateReset2:y,inflateResetKeep:k,inflateInit:function(e){return x(e,15)},inflateInit2:x,inflate:function(e,n){var o,s,f,l,_,m,v,k,g,y,x,E,S,B,A,T,L,O,U,D,N,C,I,z,F=0,H=new t.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return p;12===(o=e.state).mode&&(o.mode=13),_=e.next_out,f=e.output,l=e.next_in,s=e.input,k=o.hold,g=o.bits,y=m=e.avail_in,x=v=e.avail_out,C=u;e:for(;;)switch(o.mode){case w:if(0===o.wrap){o.mode=13;break}for(;g<16;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(2&o.wrap&&35615===k){o.check=0,H[0]=255&k,H[1]=k>>>8&255,o.check=r(o.check,H,2,0),k=0,g=0,o.mode=2;break}if(o.flags=0,o.head&&(o.head.done=!1),!(1&o.wrap)||(((255&k)<<8)+(k>>8))%31){e.msg="incorrect header check",o.mode=30;break}if(8!=(15&k)){e.msg="unknown compression method",o.mode=30;break}if(g-=4,N=8+(15&(k>>>=4)),0===o.wbits)o.wbits=N;else if(N>o.wbits){e.msg="invalid window size",o.mode=30;break}o.dmax=1<<N,e.adler=o.check=1,o.mode=512&k?10:12,k=0,g=0;break;case 2:for(;g<16;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(o.flags=k,8!=(255&o.flags)){e.msg="unknown compression method",o.mode=30;break}if(57344&o.flags){e.msg="unknown header flags set",o.mode=30;break}o.head&&(o.head.text=k>>8&1),512&o.flags&&(H[0]=255&k,H[1]=k>>>8&255,o.check=r(o.check,H,2,0)),k=0,g=0,o.mode=3;case 3:for(;g<32;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.head&&(o.head.time=k),512&o.flags&&(H[0]=255&k,H[1]=k>>>8&255,H[2]=k>>>16&255,H[3]=k>>>24&255,o.check=r(o.check,H,4,0)),k=0,g=0,o.mode=4;case 4:for(;g<16;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.head&&(o.head.xflags=255&k,o.head.os=k>>8),512&o.flags&&(H[0]=255&k,H[1]=k>>>8&255,o.check=r(o.check,H,2,0)),k=0,g=0,o.mode=5;case 5:if(1024&o.flags){for(;g<16;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.length=k,o.head&&(o.head.extra_len=k),512&o.flags&&(H[0]=255&k,H[1]=k>>>8&255,o.check=r(o.check,H,2,0)),k=0,g=0}else o.head&&(o.head.extra=null);o.mode=6;case 6:if(1024&o.flags&&((E=o.length)>m&&(E=m),E&&(o.head&&(N=o.head.extra_len-o.length,o.head.extra||(o.head.extra=new Array(o.head.extra_len)),t.arraySet(o.head.extra,s,l,E,N)),512&o.flags&&(o.check=r(o.check,s,E,l)),m-=E,l+=E,o.length-=E),o.length))break e;o.length=0,o.mode=7;case 7:if(2048&o.flags){if(0===m)break e;E=0;do{N=s[l+E++],o.head&&N&&o.length<65536&&(o.head.name+=String.fromCharCode(N))}while(N&&E<m);if(512&o.flags&&(o.check=r(o.check,s,E,l)),m-=E,l+=E,N)break e}else o.head&&(o.head.name=null);o.length=0,o.mode=8;case 8:if(4096&o.flags){if(0===m)break e;E=0;do{N=s[l+E++],o.head&&N&&o.length<65536&&(o.head.comment+=String.fromCharCode(N))}while(N&&E<m);if(512&o.flags&&(o.check=r(o.check,s,E,l)),m-=E,l+=E,N)break e}else o.head&&(o.head.comment=null);o.mode=9;case 9:if(512&o.flags){for(;g<16;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(k!==(65535&o.check)){e.msg="header crc mismatch",o.mode=30;break}k=0,g=0}o.head&&(o.head.hcrc=o.flags>>9&1,o.head.done=!0),e.adler=o.check=0,o.mode=12;break;case 10:for(;g<32;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}e.adler=o.check=b(k),k=0,g=0,o.mode=11;case 11:if(0===o.havedict)return e.next_out=_,e.avail_out=v,e.next_in=l,e.avail_in=m,o.hold=k,o.bits=g,2;e.adler=o.check=1,o.mode=12;case 12:if(5===n||6===n)break e;case 13:if(o.last){k>>>=7&g,g-=7&g,o.mode=27;break}for(;g<3;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}switch(o.last=1&k,g-=1,3&(k>>>=1)){case 0:o.mode=14;break;case 1:if(Z(o),o.mode=20,6===n){k>>>=2,g-=2;break e}break;case 2:o.mode=17;break;case 3:e.msg="invalid block type",o.mode=30}k>>>=2,g-=2;break;case 14:for(k>>>=7&g,g-=7&g;g<32;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if((65535&k)!=(k>>>16^65535)){e.msg="invalid stored block lengths",o.mode=30;break}if(o.length=65535&k,k=0,g=0,o.mode=15,6===n)break e;case 15:o.mode=16;case 16:if(E=o.length){if(E>m&&(E=m),E>v&&(E=v),0===E)break e;t.arraySet(f,s,l,E,_),m-=E,l+=E,v-=E,_+=E,o.length-=E;break}o.mode=12;break;case 17:for(;g<14;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(o.nlen=257+(31&k),g-=5,o.ndist=1+(31&(k>>>=5)),g-=5,o.ncode=4+(15&(k>>>=5)),k>>>=4,g-=4,o.nlen>286||o.ndist>30){e.msg="too many length or distance symbols",o.mode=30;break}o.have=0,o.mode=18;case 18:for(;o.have<o.ncode;){for(;g<3;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.lens[j[o.have++]]=7&k,k>>>=3,g-=3}for(;o.have<19;)o.lens[j[o.have++]]=0;if(o.lencode=o.lendyn,o.lenbits=7,C=d(0,o.lens,0,19,o.lencode,0,o.work,I={bits:o.lenbits}),o.lenbits=I.bits,C){e.msg="invalid code lengths set",o.mode=30;break}o.have=0,o.mode=19;case 19:for(;o.have<o.nlen+o.ndist;){for(;T=(F=o.lencode[k&(1<<o.lenbits)-1])>>>16&255,L=65535&F,!((A=F>>>24)<=g);){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(L<16)k>>>=A,g-=A,o.lens[o.have++]=L;else{if(16===L){for(z=A+2;g<z;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(k>>>=A,g-=A,0===o.have){e.msg="invalid bit length repeat",o.mode=30;break}N=o.lens[o.have-1],E=3+(3&k),k>>>=2,g-=2}else if(17===L){for(z=A+3;g<z;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}g-=A,N=0,E=3+(7&(k>>>=A)),k>>>=3,g-=3}else{for(z=A+7;g<z;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}g-=A,N=0,E=11+(127&(k>>>=A)),k>>>=7,g-=7}if(o.have+E>o.nlen+o.ndist){e.msg="invalid bit length repeat",o.mode=30;break}for(;E--;)o.lens[o.have++]=N}}if(30===o.mode)break;if(0===o.lens[256]){e.msg="invalid code -- missing end-of-block",o.mode=30;break}if(o.lenbits=9,C=d(h,o.lens,0,o.nlen,o.lencode,0,o.work,I={bits:o.lenbits}),o.lenbits=I.bits,C){e.msg="invalid literal/lengths set",o.mode=30;break}if(o.distbits=6,o.distcode=o.distdyn,C=d(c,o.lens,o.nlen,o.ndist,o.distcode,0,o.work,I={bits:o.distbits}),o.distbits=I.bits,C){e.msg="invalid distances set",o.mode=30;break}if(o.mode=20,6===n)break e;case 20:o.mode=21;case 21:if(m>=6&&v>=258){e.next_out=_,e.avail_out=v,e.next_in=l,e.avail_in=m,o.hold=k,o.bits=g,a(e,x),_=e.next_out,f=e.output,v=e.avail_out,l=e.next_in,s=e.input,m=e.avail_in,k=o.hold,g=o.bits,12===o.mode&&(o.back=-1);break}for(o.back=0;T=(F=o.lencode[k&(1<<o.lenbits)-1])>>>16&255,L=65535&F,!((A=F>>>24)<=g);){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(T&&0==(240&T)){for(O=A,U=T,D=L;T=(F=o.lencode[D+((k&(1<<O+U)-1)>>O)])>>>16&255,L=65535&F,!(O+(A=F>>>24)<=g);){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}k>>>=O,g-=O,o.back+=O}if(k>>>=A,g-=A,o.back+=A,o.length=L,0===T){o.mode=26;break}if(32&T){o.back=-1,o.mode=12;break}if(64&T){e.msg="invalid literal/length code",o.mode=30;break}o.extra=15&T,o.mode=22;case 22:if(o.extra){for(z=o.extra;g<z;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.length+=k&(1<<o.extra)-1,k>>>=o.extra,g-=o.extra,o.back+=o.extra}o.was=o.length,o.mode=23;case 23:for(;T=(F=o.distcode[k&(1<<o.distbits)-1])>>>16&255,L=65535&F,!((A=F>>>24)<=g);){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(0==(240&T)){for(O=A,U=T,D=L;T=(F=o.distcode[D+((k&(1<<O+U)-1)>>O)])>>>16&255,L=65535&F,!(O+(A=F>>>24)<=g);){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}k>>>=O,g-=O,o.back+=O}if(k>>>=A,g-=A,o.back+=A,64&T){e.msg="invalid distance code",o.mode=30;break}o.offset=L,o.extra=15&T,o.mode=24;case 24:if(o.extra){for(z=o.extra;g<z;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}o.offset+=k&(1<<o.extra)-1,k>>>=o.extra,g-=o.extra,o.back+=o.extra}if(o.offset>o.dmax){e.msg="invalid distance too far back",o.mode=30;break}o.mode=25;case 25:if(0===v)break e;if(o.offset>(E=x-v)){if((E=o.offset-E)>o.whave&&o.sane){e.msg="invalid distance too far back",o.mode=30;break}S=E>o.wnext?o.wsize-(E-=o.wnext):o.wnext-E,E>o.length&&(E=o.length),B=o.window}else B=f,S=_-o.offset,E=o.length;E>v&&(E=v),v-=E,o.length-=E;do{f[_++]=B[S++]}while(--E);0===o.length&&(o.mode=21);break;case 26:if(0===v)break e;f[_++]=o.length,v--,o.mode=21;break;case 27:if(o.wrap){for(;g<32;){if(0===m)break e;m--,k|=s[l++]<<g,g+=8}if(e.total_out+=x-=v,o.total+=x,x&&(e.adler=o.check=o.flags?r(o.check,f,x,_-x):i(o.check,f,x,_-x)),x=v,(o.flags?k:b(k))!==o.check){e.msg="incorrect data check",o.mode=30;break}k=0,g=0}o.mode=28;case 28:if(o.wrap&&o.flags){for(;g<32;){if(0===m)break e;m--,k+=s[l++]<<g,g+=8}if(k!==(4294967295&o.total)){e.msg="incorrect length check",o.mode=30;break}k=0,g=0}o.mode=29;case 29:C=1;break e;case 30:C=-3;break e;case 31:return-4;case 32:default:return p}return e.next_out=_,e.avail_out=v,e.next_in=l,e.avail_in=m,o.hold=k,o.bits=g,(o.wsize||x!==e.avail_out&&o.mode<30&&(o.mode<27||4!==n))&&R(e,e.output,e.next_out,x-e.avail_out),x-=e.avail_out,e.total_in+=y-=e.avail_in,e.total_out+=x,o.total+=x,o.wrap&&x&&(e.adler=o.check=o.flags?r(o.check,f,x,e.next_out-x):i(o.check,f,x,e.next_out-x)),e.data_type=o.bits+(o.last?64:0)+(12===o.mode?128:0)+(20===o.mode||15===o.mode?256:0),(0===y&&0===x||4===n)&&C===u&&(C=-5),C},inflateEnd:function(e){if(!e||!e.state)return p;var t=e.state;return t.window&&(t.window=null),e.state=null,u},inflateGetHeader:function(e,t){var i;return e&&e.state?0==(2&(i=e.state).wrap)?p:(i.head=t,t.done=!1,u):p},inflateSetDictionary:function(e,t){var n,r=t.length;return e&&e.state?0!==(n=e.state).wrap&&11!==n.mode?p:11===n.mode&&i(1,t,r,0)!==n.check?-3:R(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):p},inflateInfo:"pako inflate (from Nodeca project)"},T=!0,L=!0;try{String.fromCharCode.apply(null,[0])}catch(e){T=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){L=!1}for(var O=new t.Buf8(256),U=0;U<256;U++)O[U]=U>=252?6:U>=248?5:U>=240?4:U>=224?3:U>=192?2:1;O[254]=O[254]=1;var D=function(e){var i,n,r,a,o,s=e.length,f=0;for(a=0;a<s;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(r=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(r-56320),a++),f+=n<128?1:n<2048?2:n<65536?3:4;for(i=new t.Buf8(f),o=0,a=0;o<f;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(r=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?i[o++]=n:n<2048?(i[o++]=192|n>>>6,i[o++]=128|63&n):n<65536?(i[o++]=224|n>>>12,i[o++]=128|n>>>6&63,i[o++]=128|63&n):(i[o++]=240|n>>>18,i[o++]=128|n>>>12&63,i[o++]=128|n>>>6&63,i[o++]=128|63&n);return i},N=function(e,i){var n,r,a,o,s=i||e.length,f=new Array(2*s);for(r=0,n=0;n<s;)if((a=e[n++])<128)f[r++]=a;else if((o=O[a])>4)f[r++]=65533,n+=o-1;else{for(a&=2===o?31:3===o?15:7;o>1&&n<s;)a=a<<6|63&e[n++],o--;o>1?f[r++]=65533:a<65536?f[r++]=a:(f[r++]=55296|(a-=65536)>>10&1023,f[r++]=56320|1023&a)}return function(e,i){if(i<65537&&(e.subarray&&L||!e.subarray&&T))return String.fromCharCode.apply(null,t.shrinkBuf(e,i));for(var n="",r=0;r<i;r++)n+=String.fromCharCode(e[r]);return n}(f,r)},C=function(e,t){var i;for((t=t||e.length)>e.length&&(t=e.length),i=t-1;i>=0&&128==(192&e[i]);)i--;return i<0?t:0===i?t:i+O[e[i]]>t?i:t},I={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},z={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},H=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},j=Object.prototype.toString;function M(e){if(!(this instanceof M))return new M(e);this.options=t.assign({chunkSize:16384,windowBits:0,to:""},e||{});var i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,0===i.windowBits&&(i.windowBits=-15)),!(i.windowBits>=0&&i.windowBits<16)||e&&e.windowBits||(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&0==(15&i.windowBits)&&(i.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new F,this.strm.avail_out=0;var n=A.inflateInit2(this.strm,i.windowBits);if(n!==I.Z_OK)throw new Error(z[n]);this.header=new H,A.inflateGetHeader(this.strm,this.header)}function P(e,t){var i=new M(t);if(i.push(e,!0),i.err)throw i.msg||z[i.err];return i.result}M.prototype.push=function(e,i){var n,r,a,o,s,f,l=this.strm,d=this.options.chunkSize,h=this.options.dictionary,c=!1;if(this.ended)return!1;r=i===~~i?i:!0===i?I.Z_FINISH:I.Z_NO_FLUSH,l.input="string"==typeof e?function(e){for(var i=new t.Buf8(e.length),n=0,r=i.length;n<r;n++)i[n]=e.charCodeAt(n);return i}(e):"[object ArrayBuffer]"===j.call(e)?new Uint8Array(e):e,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new t.Buf8(d),l.next_out=0,l.avail_out=d),(n=A.inflate(l,I.Z_NO_FLUSH))===I.Z_NEED_DICT&&h&&(f="string"==typeof h?D(h):"[object ArrayBuffer]"===j.call(h)?new Uint8Array(h):h,n=A.inflateSetDictionary(this.strm,f)),n===I.Z_BUF_ERROR&&!0===c&&(n=I.Z_OK,c=!1),n!==I.Z_STREAM_END&&n!==I.Z_OK)return this.onEnd(n),this.ended=!0,!1;l.next_out&&(0!==l.avail_out&&n!==I.Z_STREAM_END&&(0!==l.avail_in||r!==I.Z_FINISH&&r!==I.Z_SYNC_FLUSH)||("string"===this.options.to?(a=C(l.output,l.next_out),o=l.next_out-a,s=N(l.output,a),l.next_out=o,l.avail_out=d-o,o&&t.arraySet(l.output,l.output,a,o,0),this.onData(s)):this.onData(t.shrinkBuf(l.output,l.next_out)))),0===l.avail_in&&0===l.avail_out&&(c=!0)}while((l.avail_in>0||0===l.avail_out)&&n!==I.Z_STREAM_END);return n===I.Z_STREAM_END&&(r=I.Z_FINISH),r===I.Z_FINISH?(n=A.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===I.Z_OK):r!==I.Z_SYNC_FLUSH||(this.onEnd(I.Z_OK),l.avail_out=0,!0)},M.prototype.onData=function(e){this.chunks.push(e)},M.prototype.onEnd=function(e){e===I.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):t.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var K={Inflate:M,inflate:P,inflateRaw:function(e,t){return(t=t||{}).raw=!0,P(e,t)},ungzip:P},$=function(){function e(t){!function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.dataView=new DataView(t),this.position=0}return e.prototype.skip=function(e){this.position+=e},e.prototype.readBytes=function(e){var t=4===e?"getUint32":2===e?"getUint16":"getUint8",i=this.position;return this.position+=e,this.dataView[t](i,!0)},e}(),Y=function(e){for(var t=new $(e),i={};;){var n=t.readBytes(4);if(67324752!==n){if(33639248!==n)break;J(t)}else{var r=G(t);i[r.name]={buffer:r.buffer}}}return i},G=function(e){var t=0,i=void 0;e.skip(4);var n=e.readBytes(2);e.skip(8);var r=e.readBytes(4);e.skip(4);var a=e.readBytes(2),o=e.readBytes(2),s=[],f=new Uint8Array(r);for(t=0;t<a;t++)s.push(String.fromCharCode(e.readBytes(1)));for(e.skip(o),t=0;t<r;t++)f[t]=e.readBytes(1);switch(n){case 0:i=f;break;case 8:i=new Uint8Array(K.inflate(f,{raw:!0}));break;default:console.log(s.join("")+": unsupported compression type"),i=f}return{name:s.join(""),buffer:i}},J=function(e){e.skip(24);var t=e.readBytes(2),i=e.readBytes(2),n=e.readBytes(2);e.skip(12),e.skip(t),e.skip(i),e.skip(n)},V="function"==typeof Promise?Promise:function e(t){!function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this);var i=function(){};return t(function(){i()}),{then:function(e){i=e}}},X=0,q=void 0,W=function(){function e(t){!function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this._id=X,this._listeners={},this.url=t,this.files=null,X++}return e.unzip=function(t){return new V(function(i){var n=new e,r=new FileReader;r.onload=function(e){n.files=Y(e.target.result),i(n)},t instanceof Blob&&r.readAsArrayBuffer(t)})},e.prototype.load=function(){var e=this;return new V(function(t){var i=Date.now(),n=new XMLHttpRequest;n.open("GET",e.url,!0),n.responseType="arraybuffer",n.onprogress=function(t){e.dispatch({type:"progress",loaded:t.loaded,total:t.total,elapsedTime:Date.now()-i})},n.onload=function(){e.files=Y(n.response),e.dispatch({type:"load",elapsedTime:Date.now()-i}),t()},n.send()})},e.prototype.extractAsBlobUrl=function(e,t){if(this.files[e].url)return this.files[e].url;var i=new Blob([this.files[e].buffer],{type:t});return this.files[e].url=URL.createObjectURL(i),this.files[e].url},e.prototype.extractAsText=function(e){var t=this.files[e].buffer;if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var i="",n=0,r=t.length;n<r;n++)i+=String.fromCharCode(t[n]);return decodeURIComponent(escape(i))},e.prototype.extractAsJSON=function(e){return JSON.parse(this.extractAsText(e))},e.prototype.loadThreeJSON=function(e){var t=this,i=this.extractAsJSON(e),n=e.replace(/\/.+\.json$/,"/"),r="__ziploader_"+this._id+"__",a=new RegExp(r);return-1!==!q.Loader.Handlers.handlers.indexOf(a)&&q.Loader.Handlers.add(a,{load:function(e){return t.loadThreeTexture(e.replace(a,""))}}),q.JSONLoader.prototype.parse(i,r+n)},e.prototype.loadThreeTexture=function(e){var t=new q.Texture,i=/\.jpg$/.test(e)?"image/jpeg":/\.png$/.test(e)?"image/png":/\.gif$/.test(e)?"image/gif":void 0,n=new Blob([this.files[e].buffer],{type:i});return t.image=new Image,t.image.addEventListener("load",function e(){t.needsUpdate=!0,t.image.removeEventListener("load",e),URL.revokeObjectURL(t.image.src)}),t.image.src=URL.createObjectURL(n),t},e.prototype.on=function(e,t){this._listeners[e]||(this._listeners[e]=[]),-1===this._listeners[e].indexOf(t)&&this._listeners[e].push(t)},e.prototype.off=function(e,t){var i=this._listeners[e];if(i){var n=i.indexOf(t);-1!==n&&i.splice(n,1)}},e.prototype.dispatch=function(e){var t=this._listeners[e.type];if(t){e.target=this;for(var i=t.length,n=0;n<i;n++)t[n].call(this,e)}},e.prototype.clear=function(e){if(e)return URL.revokeObjectURL(this.files[e].url),void delete this.files[e];for(var t in this.files)URL.revokeObjectURL(this.files[t].url);if(delete this.files,q){var i="__ziploader_"+this._id+"__";q.Loader.Handlers.handlers.some(function(e,t){if(e instanceof RegExp&&e.source===i)return q.Loader.Handlers.handlers.splice(t,2),!0})}},e.install=function(e){e.THREE&&(q=e.THREE)},e}(),Q=function(e,t){this.el=e,this.inputEl=t,this.listeners={drop:[],dropstart:[],droperror:[]},this._onDragover=this._onDragover.bind(this),this._onDrop=this._onDrop.bind(this),this._onSelect=this._onSelect.bind(this),e.addEventListener("dragover",this._onDragover,!1),e.addEventListener("drop",this._onDrop,!1),t.addEventListener("change",this._onSelect)};Q.prototype.on=function(e,t){return this.listeners[e].push(t),this},Q.prototype._emit=function(e,t){return this.listeners[e].forEach(function(e){return e(t)}),this},Q.prototype.destroy=function(){var e=this.el,t=this.inputEl;e.removeEventListener(this._onDragover),e.removeEventListener(this._onDrop),t.removeEventListener(this._onSelect),delete this.el,delete this.inputEl,delete this.listeners},Q.prototype._onDrop=function(e){var t,i=this;if(e.stopPropagation(),e.preventDefault(),this._emit("dropstart"),e.dataTransfer.items)t=[].slice.call(e.dataTransfer.items).map(function(e){return e.webkitGetAsEntry()});else if(1===(e.dataTransfer.files||[]).length){var n=e.dataTransfer.files[0];return this._isZip(n)?void this._loadZip(n):void this._emit("drop",{files:new Map([[n.name,n]])})}t||this._fail("Required drag-and-drop APIs are not supported in this browser."),1===t.length&&t[0].name.match(/\.zip$/)?t[0].file(function(e){return i._loadZip(e)}):this._loadNextEntry(new Map,t)},Q.prototype._onDragover=function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},Q.prototype._onSelect=function(e){this._emit("dropstart");var t=[].slice.call(this.inputEl.files);if(1===t.length&&this._isZip(t[0]))this._loadZip(t[0]);else{var i=new Map;t.forEach(function(e){return i.set(e.name,e)}),this._emit("drop",{files:i})}},Q.prototype._loadNextEntry=function(e,t){var i=this,n=t.pop();if(n)if(n.isFile)n.file(function(r){e.set(n.fullPath,r),i._loadNextEntry(e,t)},function(){return console.error("Could not load file: %s",n.fullPath)});else if(n.isDirectory){var r=n.createReader(),a=function(n){n.length?(t=t.concat(n),r.readEntries(a)):i._loadNextEntry(e,t)};r.readEntries(a)}else console.warn("Unknown asset type: "+n.fullPath),this._loadNextEntry(e,t);else this._emit("drop",{files:e})},Q.prototype._loadZip=function(e){var t=this,i=new Map;W.unzip(e).then(function(n){Object.keys(n.files).forEach(function(e){if(!e.match(/\/$/)){var t=e.replace(/^.*[\\\/]/,"");i.set(e,new File([n.files[e].buffer],t))}}),t._emit("drop",{files:i,archive:e})})},Q.prototype._isZip=function(e){return"application/zip"===e.type||e.name.match(/\.zip$/)},Q.prototype._fail=function(e){this._emit("droperror",{message:e})};export{Q as SimpleDropzone};
//# sourceMappingURL=simple-dropzone.module.js.map