webpackJsonp([1],{"+708":function(e,t,a){"use strict";var n={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;a("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,a,n,s,o,i,r,l,c,d,p,u,v,f){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:n,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:s,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:c,color:o,opacity:l,width:i},move:{enable:!0,speed:d,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:u},onclick:{enable:v,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},s={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},o=a("VU/8")(n,s,!1,null,null,null);t.a=o.exports},"3Azs":function(e,t,a){e.exports=a.p+"static/img/mentos.4deace5.jpg"},"7zck":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("/5sW"),s=(new Date).getFullYear(),o={data:function(){return{fixed:!1,year:s}},created:function(){var e=window.location.href.split("?");if(2===e.length){var t=e[1].split("=")[1];this.$router.push("/"+t)}},name:"App"},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("vue-particles",{attrs:{color:"#5ff",linesColor:"#fff",shapeType:"star"}}),e._v(" "),a("router-view")],1),e._v(" "),a("v-footer",{attrs:{id:"footer",fixed:e.fixed,app:""}},[a("div",{staticClass:"text-xl-center",attrs:{id:"footer-text"}},[a("p",[e._v("© "+e._s(e.year)+". Built with "),a("span",{staticClass:"heart"},[e._v("❥")]),e._v(" by "),a("a",{attrs:{target:"_blank",href:"http://twitter.com/piomentos"}},[a("span",{staticClass:"left-pointer"},[e._v("◄◄")]),e._v(" mentOS")]),e._v(" "),a("span",{staticClass:"knight"},[e._v("♞")])])])])],1)},staticRenderFns:[]};var r=a("VU/8")(o,i,!1,function(e){a("Rsbj")},"data-v-7d20d171",null).exports,l=a("/ocq"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"home-body",fluid:""}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("div",{staticClass:"mt-5 mb-1",attrs:{id:"avatararea"}},[n("img",{attrs:{src:a("3Azs"),id:"dp"}})]),e._v(" "),n("div",{staticClass:"headline mb-1",attrs:{id:"intro-name"}},[e._v(" Ogundiran Al-Ameen ")]),e._v(" "),n("div",{staticClass:"title mb-3",attrs:{id:"nick"}},[n("span",{staticClass:"code-color"},[e._v("<")]),e._v(" mentos "),n("span",{staticClass:"code-color"},[e._v("/>")])]),e._v(" "),n("div",{staticClass:"subheading mb-3",attrs:{id:"role"}},[e._v("{ "),n("span",{staticClass:"profession"},[e._v(" Developer | Speaker | Punstar ")]),e._v(" }")])]),e._v(" "),n("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{id:"nav-zone",xs12:"",sm8:"","offset-sm2":"",md4:"","offset-md4":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs4:"","text-xs-center":""}},[n("router-link",{staticClass:"link",attrs:{to:"/about",tag:"a"}},[n("span",{staticClass:"bracket"},[e._v("[")]),e._v("About"),n("span",{staticClass:"bracket"},[e._v("]")])])],1),e._v(" "),n("v-flex",{attrs:{xs4:"","text-xs-center":""}},[n("router-link",{staticClass:"link",attrs:{to:"/projects",tag:"a"}},[n("span",{staticClass:"bracket"},[e._v("[")]),e._v("Projects"),n("span",{staticClass:"bracket"},[e._v("]")])])],1),e._v(" "),n("v-flex",{attrs:{xs4:"","text-xs-center":""}},[n("router-link",{staticClass:"link",attrs:{to:"/contact",tag:"a"}},[n("span",{staticClass:"bracket"},[e._v("[")]),e._v("Contact"),n("span",{staticClass:"bracket"},[e._v("]")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var d,p=a("VU/8")(null,c,!1,function(e){a("RZ01")},"data-v-2c385310",null).exports,u=a("KdmR"),v={data:function(){return{typename:d}},mounted:function(){d=new u.a("#name",{}).type("Hey, I'm Ogundiran Al-Ameen.").pause(2500).options({speed:50}).delete().options({speed:100}).type("Welcome to my world!")}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"about-body",fluid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{staticClass:"mt-5 display-1",attrs:{id:"my-title",row:"",wrap:""}},[a("div",{attrs:{id:"name"}})]),e._v(" "),a("div",{staticClass:"separator"},[a("hr")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{staticClass:"mt-5 subheading",attrs:{row:"",wrap:""}},[a("div",{attrs:{id:"bio"}},[e._v("\n                      Let's just say I'm your DCE (Developer Crush Everyday) *winks*. I love everything technology, a lot of creative things amaze me, from the Raspberry pi to Arduino and all cool stuffs you can do with them.\n                      I haven't gotten the chance to play with any of those but I've just been "),a("i",[a("span",{staticClass:"noteit"},[e._v("surf")]),e._v("ing")]),e._v(" the web, reading and watching all the cool things people have made with them, and oh well, for the main time I guess that's "),a("i",[a("span",{staticClass:"noteit"},[e._v("surf")]),e._v("icient")]),e._v(" [*sufficient*]. However, I plan to get my hands dirty with them soon. \n                        "),a("p",[e._v("*Sigh*, I'm a PHP fanboy (say what you want), and I've spent more of my coding hours with the language. The love for the language even became stronger when I discovered the web artisan's framework -> Laravel. ")]),e._v(" "),a("p",[e._v("On a low :), It was impossible for me to ignore the Javascript noise around and I just had to take a look at the language, an action mainly inspired by the VueJS framework")]),e._v(" "),a("p",[e._v("I play pool billiards anytime I get the chance to do that, very few pool boards around where I live now, I used to have the luxury on University of Ibadan campus")]),e._v(" "),a("p",[e._v("I teach a couple of people how to code and I love to inspire people who are interested in programming to actually keep going, we are all in this together. I've got my own share of the imposter's syndrome but we're good :) ")]),e._v(" "),a("p",[e._v("I'm a native of Ibadan and I also build native android apps, yeah not that kind of native but you get the point. I do play on words for no reason, I love pun, i drop punchlines both dry and dope ones, I have my days . I bestowed a 'Punstar' title upon myself *sigh*. ")]),e._v(" "),a("p",[e._v("I'm on my to being useful to the whole world.")])])])],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{staticClass:"mt-5",attrs:{id:"skills-tab",row:"",wrap:""}},[a("div",{staticClass:"headline",attrs:{id:"skills"}},[e._v("Skills")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(v,f,!1,function(e){a("heIA")},"data-v-08a07463",null).exports,h=a("VU/8")(null,null,!1,null,null,null).exports,y=a("VU/8")(null,null,!1,null,null,null).exports;n.a.use(l.a);var _=new l.a({routes:[{path:"/",name:"mentOS",component:p},{path:"/about",name:"About",component:m},{path:"/contact",name:"Contact",component:h},{path:"projects",name:"Projects",component:y}],mode:"history"}),b=a("3EgV"),g=a.n(b),w=(a("7zck"),a("mM94"));n.a.use(g.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",background:"#e32929"}}),n.a.use(w.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:_,render:function(e){return e(r)}})},RZ01:function(e,t){},Rsbj:function(e,t){},heIA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.991fd938462f5387907c.js.map