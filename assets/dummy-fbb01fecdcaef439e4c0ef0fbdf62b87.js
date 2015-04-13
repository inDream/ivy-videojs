define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,r,d){"use strict";var n;t["default"].MODEL_FACTORY_INJECTIONS=!0,n=t["default"].Application.extend({modulePrefix:d["default"].modulePrefix,podModulePrefix:d["default"].podModulePrefix,Resolver:a["default"]}),r["default"](n,d["default"].modulePrefix),e["default"]=n}),define("dummy/components/ivy-videojs-source",["exports","ivy-videojs/components/ivy-videojs-source"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/ivy-videojs",["exports","ivy-videojs/components/ivy-videojs"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({controls:!0,height:200,width:480})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,d=!1;e["default"]={name:"App Version",initialize:function(e,n){if(!d){var i=r(n.toString());a["default"].libraries.register(i,t["default"].APP.version),d=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function r(e,r){var d=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[d]&&(window[d]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});e["default"]=r.map(function(){})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("h1");e.setAttribute(r,"class","page-header");var d=e.createTextNode("ivy-videojs");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("hr");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("p"),d=e.createTextNode("View source on ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","https://github.com/IvyApp/ivy-videojs");var n=e.createTextNode("GitHub");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode(".");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,d=t.hooks,n=d.content;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var l=r.createMorphAt(r.childAt(i,[0]),3,3);return n(t,l,e,"outlet"),i}}}())}),define("dummy/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n      ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,d=t.hooks,n=d.inline;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var l=r.createMorphAt(i,1,1,a),c=r.createMorphAt(i,3,3,a);return n(t,l,e,"ivy-videojs-source",[],{src:"http://vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}),n(t,c,e,"ivy-videojs-source",[],{src:"http://vjs.zencdn.net/v/oceans.webm",type:"video/webm"}),i}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-9");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("  ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-3");var d=e.createTextNode("\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","form-group");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label");e.setAttribute(n,"class","control-label"),e.setAttribute(n,"for","currentTime");var i=e.createTextNode("currentTime");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createComment("");e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("small");e.setAttribute(n,"class","help-block");var i=e.createComment("");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","form-group");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label");e.setAttribute(n,"class","control-label"),e.setAttribute(n,"for","volume");var i=e.createTextNode("volume");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createComment("");e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("small");e.setAttribute(n,"class","help-block");var i=e.createComment("");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","form-group");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label");e.setAttribute(n,"class","control-label"),e.setAttribute(n,"for","playbackRate");var i=e.createTextNode("playbackRate");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createComment("");e.appendChild(d,n);var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("small");e.setAttribute(n,"class","help-block");var i=e.createComment("");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","row");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","col-sm-6");var i=e.createTextNode("\n        ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","form-group");var l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createElement("label");e.setAttribute(l,"class","control-label"),e.setAttribute(l,"for","width");var c=e.createTextNode("width");e.appendChild(l,c),e.appendChild(i,l);var l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n      ");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n\n      ");e.appendChild(d,n);var n=e.createElement("div");e.setAttribute(n,"class","col-sm-6");var i=e.createTextNode("\n        ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","form-group");var l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createElement("label");e.setAttribute(l,"class","control-label"),e.setAttribute(l,"for","height");var c=e.createTextNode("height");e.appendChild(l,c),e.appendChild(i,l);var l=e.createTextNode("\n          ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n      ");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","checkbox");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label"),i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode(" controls");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","checkbox");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label"),i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode(" loop");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","checkbox");var n=e.createTextNode("\n      ");e.appendChild(d,n);var n=e.createElement("label"),i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode(" muted");e.appendChild(n,i),e.appendChild(d,n);var n=e.createTextNode("\n    ");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n  ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,r){var d=a.dom,n=a.hooks,i=n.get,l=n.block,c=n.inline,p=n.content;d.detectNamespace(r);var o;a.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(o=this.build(d),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=d.cloneNode(this.cachedFragment,!0))):o=this.build(d);var h=d.childAt(o,[0]),s=d.childAt(h,[3]),m=d.childAt(s,[1]),u=d.childAt(s,[3]),v=d.childAt(s,[5]),C=d.childAt(s,[7]),x=d.createMorphAt(d.childAt(h,[1]),1,1),b=d.createMorphAt(m,3,3),f=d.createMorphAt(d.childAt(m,[5]),0,0),T=d.createMorphAt(u,3,3),N=d.createMorphAt(d.childAt(u,[5]),0,0),A=d.createMorphAt(v,3,3),g=d.createMorphAt(d.childAt(v,[5]),0,0),y=d.createMorphAt(d.childAt(C,[1,1]),3,3),E=d.createMorphAt(d.childAt(C,[3,1]),3,3),k=d.createMorphAt(d.childAt(s,[9,1]),0,0),M=d.createMorphAt(d.childAt(s,[11,1]),0,0),F=d.createMorphAt(d.childAt(s,[13,1]),0,0);return l(a,x,t,"ivy-videojs",[],{"class":"vjs-default-skin",controls:i(a,t,"controls"),currentTime:i(a,t,"currentTime"),duration:i(a,t,"duration"),height:i(a,t,"height"),loop:i(a,t,"loop"),muted:i(a,t,"muted"),playbackRate:i(a,t,"playbackRate"),width:i(a,t,"width"),volume:i(a,t,"volume")},e,null),c(a,b,t,"input",[],{id:"currentTime",max:i(a,t,"duration"),min:0,readonly:!0,step:.25,type:"range",value:i(a,t,"currentTime")}),p(a,f,t,"currentTime"),c(a,T,t,"input",[],{id:"volume",max:1,min:0,step:.01,type:"range",value:i(a,t,"volume")}),p(a,N,t,"volume"),c(a,A,t,"input",[],{id:"playbackRate",max:5,min:.5,step:.5,type:"range",value:i(a,t,"playbackRate")}),p(a,g,t,"playbackRate"),c(a,y,t,"input",[],{"class":"form-control",id:"width",type:"number",value:i(a,t,"width")}),c(a,E,t,"input",[],{"class":"form-control",id:"height",type:"number",value:i(a,t,"height")}),c(a,k,t,"input",[],{checked:i(a,t,"controls"),type:"checkbox"}),c(a,M,t,"input",[],{checked:i(a,t,"loop"),type:"checkbox"}),c(a,F,t,"input",[],{checked:i(a,t,"muted"),type:"checkbox"}),o}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),d=JSON.parse(unescape(r));return{"default":d}}catch(n){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ivy-videojs",version:"v0.2.0"});