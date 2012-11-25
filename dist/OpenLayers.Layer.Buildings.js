(function(l){function w(Q,D){var R=Q[0]-D[0],g=Q[1]-D[1];return R*R+g*g}var E=E||Array,la=Math.exp,Ba=Math.log,Ca=Math.tan,Da=Math.atan,ma=Math.min,Ea=Math.max,na=l.document,G=function(){function Q(g,k,m){if(m<0)m+=1;if(m>1)m-=1;if(m<1/6)return g+(k-g)*6*m;if(m<0.5)return k;if(m<2/3)return g+(k-g)*(2/3-m)*6;return g}function D(g,k,m,q){this.r=g;this.g=k;this.b=m;this.a=arguments.length<4?1:q}var R=D.prototype;R.toString=function(){return"rgba("+[this.r,this.g,this.b,this.a.toFixed(2)].join(",")+")"};
R.adjustLightness=function(g){var k=G.toHSLA(this);k.l*=g;k.l=Math.min(1,Math.max(0,k.l));var m,q;if(k.s===0)g=m=q=k.l;else{q=k.l<0.5?k.l*(1+k.s):k.l+k.s-k.l*k.s;var F=2*k.l-q;g=Q(F,q,k.h+1/3);m=Q(F,q,k.h);q=Q(F,q,k.h-1/3)}return new G(g*255<<0,m*255<<0,q*255<<0,k.a)};R.adjustAlpha=function(g){return new G(this.r,this.g,this.b,this.a*g)};D.parse=function(g){g+="";if(~g.indexOf("#")){g=g.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new G(parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16),g[4]?
parseInt(g[4],16)/255:1)}if(g=g.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new G(parseInt(g[1],10),parseInt(g[2],10),parseInt(g[3],10),g[4]?parseFloat(g[5],10):1)};D.toHSLA=function(g){var k=g.r/255,m=g.g/255,q=g.b/255,F=Math.max(k,m,q),H=Math.min(k,m,q),L,U=(F+H)/2,M;if(F===H)L=H=0;else{M=F-H;H=U>0.5?M/(2-F-H):M/(F+H);switch(F){case k:L=(m-q)/M+(m<q?6:0);break;case m:L=(q-k)/M+2;break;case q:L=(k-m)/M+4;break}L/=6}return{h:L,s:H,l:U,a:g.a}};return D}(),$=Math.PI,xa=$/2,Fa=$/4,Ga=
180/$,Ha=256,oa=14,pa=400,ya=pa-50,aa="latitude",ba="longitude",N=0,K=1,C=2,qa=3,ha=4;l.OSMBuildings=function(Q){function D(a,d){var b={};a/=ca;d/=ca;b[aa]=d<=0?90:d>=1?-90:Ga*(2*Da(la($*(1-2*d)))-xa);b[ba]=(a===1?1:(a%1+1)%1)*360-180;return b}function R(a,d){return a.replace(/\{ *([\w_]+) *\}/g,function(b,c){return d[c]})}function g(a,d){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&d(JSON.parse(b.responseText))};
b.open("GET",a);b.send(null);return b}function k(){if(!(!ra||I<oa)){var a=D(Y-da,Z-sa),d=D(Y+V+da,Z+O+sa);ia&&ia.abort();ia=g(R(ra,{w:a[ba],n:a[aa],e:d[ba],s:d[aa],z:I}),m)}}function m(a){var d,b,c,h=[],f=0,i=0;ea=oa;U(I);ia=null;if(!(!a||a.meta.z!==I)){c=a.meta;b=a.data;if(z&&A&&z.z===c.z){f=z.x-c.x;i=z.y-c.y;a=0;for(d=A.length;a<d;a++)h[a]=A[a][K][0]+f+","+(A[a][K][1]+i)}z=c;A=[];a=0;for(d=b.length;a<d;a++){var e=b[a][K];c=[];var j=void 0;j=void 0;var n=void 0;i=f=0;e=e;j=void 0;n=[e[0],e[1]];for(var p=
void 0,o=[e[0],e[1]],r=2,x=e.length-3;r<x;r+=2){j=[e[r],e[r+1]];p=[e[r+2]||e[0],e[r+3]||e[1]];var y=n;p=p;var s=y[0],t=y[1],u=p[0]-s,J=p[1]-t,S=void 0;if(u!==0||J!==0){S=((j[0]-s)*u+(j[1]-t)*J)/(u*u+J*J);if(S>1){s=p[0];t=p[1]}else if(S>0){s+=u*S;t+=J*S}}s=w(j,[s,t])*2;y=w(y,p);if(s*y>750){o.push(j[0],j[1]);n=j}}if(j[0]!==e[0]||j[1]!==e[1])o.push(e[0],e[1]);e=o;if(e.length<8)f=void 0;else{o=0;for(r=e.length-3;o<r;o+=2){j=e[o];n=e[o+1];f+=j;i+=n}j=(e.length-2)*2;c[K]=e;c[qa]=[f/j<<0,i/j<<0];f=c}if(f){f[N]=
ma(b[a][N],ya);c=f[K][0]+","+f[K][1];f[ha]=!(h&&~h.indexOf(c));A.push(f)}}M()}}function q(a,d){var b=[],c,h,f,i,e,j,n,p,o=ta-I;c=0;for(h=a.length;c<h;c++){e=a[c];j=e[K];n=new E(j.length);f=0;for(i=j.length-1;f<i;f+=2){p=j[f+1];var r=ma(1,Ea(0,0.5-Ba(Ca(Fa+xa*j[f]/180))/$/2));p={x:(p/360+0.5)*ca<<0,y:r*ca<<0};n[f]=p.x;n[f+1]=p.y}b[c]=[];b[c][N]=ma(e[N]>>o,ya);b[c][K]=n;b[c][C]=e[C];b[c][ha]=d}return b}function F(a,d){if(typeof a==="object")L(a,!d);else{var b=na.documentElement,c=na.createElement("script");
l.jsonpCallback=function(h){delete l.jsonpCallback;b.removeChild(c);L(h,!d)};b.insertBefore(c,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function H(a,d,b){if(b===undefined)b=[];var c,h,f,i=a[0]?a:a.features,e,j,n,p,o,r=d?1:0,x=d?0:1;if(i){c=0;for(a=i.length;c<a;c++)H(i[c],d,b);return b}if(a.type==="Feature"){h=a.geometry;c=a.properties}if(h.type==="Polygon")e=[h.coordinates];if(h.type==="MultiPolygon")e=h.coordinates;if(e){d=c.height;if(c.color||c.wallColor)p=G.parse(c.color||c.wallColor);
if(c.roofColor)o=G.parse(c.roofColor);c=0;for(a=e.length;c<a;c++){j=e[c][0];i=[];h=n=0;for(f=j.length;h<f;h++){i.push(j[h][r],j[h][x]);n+=d||j[h][2]||0}if(n){h=[];h[N]=n/j.length<<0;j=K;n=void 0;f=void 0;var y=void 0,s=void 0,t=0,u=void 0,J=void 0;u=0;for(J=i.length-3;u<J;u+=2){n=i[u];f=i[u+1];y=i[u+2];s=i[u+3];t+=n*s-y*f}if((t/2>0?"CW":"CCW")==="CW")i=i;else{n=[];for(f=i.length-2;f>=0;f-=2)n.push(i[f],i[f+1]);i=n}h[j]=i;if(p||o)h[C]=[p,o];b.push(h)}}}return b}function L(a,d){if(a){fa=H(a,d);ea=0;
U(I);z={n:90,w:-180,s:-90,e:180,x:0,y:0,z:I};A=q(fa,true);M()}else{fa=null;T()}}function U(a){I=a;ca=Ha<<I;P=1-(I-ea)*0.3/(ta-ea)}function M(){ga=0;clearInterval(ua);ua=setInterval(function(){ga+=0.1;if(ga>1){clearInterval(ua);ga=1;for(var a=0,d=A.length;a<d;a++)A[a][ha]=0}T()},33)}function T(){v.clearRect(0,0,V,O);if(z&&A)if(!(I<ea||va)){var a,d,b,c,h,f,i,e,j=Y-z.x,n=Z-z.y,p=[W+j,X+n],o,r,x,y,s,t,u=ja.adjustAlpha(P)+"",J=(wa||ja.adjustLightness(1.2)).adjustAlpha(P)+"";if(ka)v.strokeStyle=Ia.adjustAlpha(P)+
"";A.sort(function(S,za){return w(za[qa],p)/za[N]-w(S[qa],p)/S[N]});a=0;for(d=A.length;a<d;a++){h=A[a];x=false;f=h[K];o=[];b=0;for(c=f.length-1;b<c;b+=2){o[b]=i=f[b]-j;o[b+1]=e=f[b+1]-n;x||(x=i>0&&i<V&&e>0&&e<O)}if(x){v.fillStyle=h[C]&&h[C][0]?h[C][0].adjustAlpha(P)+"":u;b=h[ha]?h[N]*ga:h[N];f=pa/(pa-b);i=[];r=[];b=0;for(c=o.length-3;b<c;b+=2){e=o[b];x=o[b+1];y=o[b+2];s=o[b+3];t={x:((e-W)*f+W<<0)+0.5,y:((x-X)*f+X<<0)+0.5};r={x:((y-W)*f+W<<0)+0.5,y:((s-X)*f+X<<0)+0.5};if((y-e)*(t.y-x)>(t.x-e)*(s-x)){r=
[y+0.5,s+0.5,e+0.5,x+0.5,t.x,t.y,r.x,r.y];v.fillStyle=e<y&&x<s||e>y&&x>s?ja.adjustAlpha(P).adjustLightness(0.8)+"":h[C]&&h[C][0]?h[C][0].adjustAlpha(P)+"":u;Aa(r)}i[b]=t.x;i[b+1]=t.y}v.fillStyle=!h[C]?J:h[C][1]?h[C][1].adjustAlpha(P)+"":wa?J:h[C][0].adjustLightness(1.2).adjustAlpha(P)+"";Aa(i,ka)}}}}function Aa(a,d){if(a.length){v.beginPath();v.moveTo(a[0],a[1]);for(var b=2,c=a.length;b<c;b+=2)v.lineTo(a[b],a[b+1]);v.closePath();d&&v.stroke();v.fill()}}var V=0,O=0,da=0,sa=0,Y=0,Z=0,I,ca,ia,B,v,ra,
ka,ja=new G(200,190,180),wa,Ia=new G(145,140,135),fa,z,A,P=1,ga=1,ua,ea=oa,ta=20,W,X,va;this.setStyle=function(a){a=(a=a)||{};ka=a.strokeRoofs!==undefined?a.strokeRoofs:ka;if(a.color||a.wallColor)ja=G.parse(a.color||a.wallColor);if(a.roofColor!==undefined)wa=G.parse(a.roofColor);T();return this};this.geoJSON=function(a,d){F(a,d);return this};this.setCamOffset=function(a,d){W=da+a;X=O+d};this.setMaxZoom=function(a){ta=a};this.createCanvas=function(a){B=na.createElement("canvas");B.style.webkitTransform=
"translate3d(0,0,0)";B.style.imageRendering="optimizeSpeed";B.style.position="absolute";B.style.pointerEvents="none";B.style.left=0;B.style.top=0;a.appendChild(B);v=B.getContext("2d");v.lineCap="round";v.lineJoin="round";v.lineWidth=1;try{v.mozImageSmoothingEnabled=false}catch(d){}return B};this.destroyCanvas=function(){B.parentNode.removeChild(B)};this.loadData=k;this.onMoveEnd=function(){var a=D(Y,Z),d=D(Y+V,Z+O);T();if(z&&(a[aa]>z.n||a[ba]<z.w||d[aa]<z.s||d[ba]>z.e))k()};this.onZoomEnd=function(a){va=
false;U(a.zoom);if(fa){A=q(fa);T()}else{T();k()}};this.onZoomStart=function(){va=true;T()};this.render=T;this.setOrigin=function(a,d){Y=a;Z=d};this.setSize=function(a,d){V=a;O=d;da=V/2<<0;sa=O/2<<0;W=da;X=O;B.width=V;B.height=O};this.setZoom=U;ra=Q};l.OSMBuildings.VERSION="0.1.7a";l.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(l){l=l||{};l.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,l)},setOrigin:function(){var l=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),w=this.map.resolution,E=this.maxExtent;this.osmb.setOrigin(Math.round((l.lon-E.left)/w),Math.round((E.top-
l.lat)/w))},setMap:function(l){if(!this.map){OpenLayers.Layer.prototype.setMap(l);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(l){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(l)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(l,w,E){l=OpenLayers.Layer.prototype.moveTo(l,w,E);if(!E){E=parseInt(this.map.layerContainerDiv.style.left,10);var la=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-E+"px";this.div.style.top=-la+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);w?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return l},moveByPx:function(l,w){this.dxSum+=l;this.dySum+=w;var E=OpenLayers.Layer.prototype.moveByPx(l,w);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return E},geoJSON:function(l,w){return this.osmb.geoJSON(l,w)},setStyle:function(l){return this.osmb.setStyle(l)}});
