//	HYPE.documents["adminv2.1"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="adminv2.1.hyperesources",f="adminv2.1",g="adminv2_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/adminv2_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"saveData",source:"function(hypeDocument, element, event) {\t\n\t$.ajax({                    \n \t\t\t url: 'save.php',     \n  \t\t\ttype: 'post', // performing a POST request\n  \t\t\tdata : {\n    \t\t\tvimeo : document.getElementById(\"vimeo\").childNodes[1].value,\n    \t\t\tslido : document.getElementById(\"slido\").childNodes[1].value,\n    \t\t\tcaptions : document.getElementById(\"captions\").childNodes[1].value,\n    \t\t\temails : document.getElementById(\"emails\").childNodes[1].value\n  \t\t\t},\n  \t\t\tdataType: 'json',                   \n  \t\t\t\t\t\t\n\t});\n\n\n}",identifier:"8"},{name:"loadData",source:"function(hypeDocument, element, event) {\t$.get( \"load.php\", function( data ) {  \n  \t\t\tvar data2 = JSON.parse(data)\n  \t\t\tconsole.log(data2)\n  \t\t \tdocument.getElementById(\"vimeo\").childNodes[1].value = data2[0]\n    \t\tdocument.getElementById(\"slido\").childNodes[1].value = data2[1]\n    \t\tdocument.getElementById(\"captions\").childNodes[1].value = data2[2]\n    \t\tdocument.getElementById(\"emails\").childNodes[1].value = data2[3]\n\t\t});\n\n\t\n}",identifier:"10"},{name:"login",source:"function(hypeDocument, element, event) {\t\n\t\t\tusername = document.getElementById(\"user\").childNodes[1].value\n\t\t\tpassword = document.getElementById(\"pass\").childNodes[1].value\n\t\t\t\n\t\t\tif (username == \"admin\"){\n\t\t\t\tif (password == \"fuse1700\"){\n\t\t\t\t\thypeDocument.showSceneNamed('admin', hypeDocument.kSceneTransitionCrossfade, 0.0)\n\t\t\t\t}\n\t\t\t}\n\t\n}",identifier:"19"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"0":{n:"jquery-3.5.1.min.js"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},l,[],e,[{n:"Login",o:"14",X:[0]},{n:"admin",o:"1",X:[1]}],
[{o:"16",p:"600px",cA:false,Y:600,Z:1000,L:[],c:"#FFF",bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["25","24"],n:"Untitled Layout","_":0,v:{"25":{c:347,d:100,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:0,w:"<div id=\"user\" class=\"user\">\n  <input type=\"text\" id=\"answer\" class=\"textInput\" placeholder=\"Username\">\n</div><br>\n<div id=\"pass\" class=\"pass\">\n  <input type=\"text\" id=\"answer\" class=\"textInput\" placeholder=\"password\">\n</div><br>\n\n",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:126,F:"center",b:63},"24":{G:"#FFF",c:135,d:33,I:"Solid",J:"Solid",K:"Solid",Y:36,g:"#FA9A00",L:"Solid",aP:"pointer",M:0,w:"SUBMIT",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"19"}]},k:"div",a:232,F:"center",b:199}}},{A:{a:[{p:4,h:"10"}]},o:"3",dA:{a:[{p:4,h:"10"}]},p:"600px",cA:false,Y:600,Z:1000,c:"#FFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["26","32","31","30","27","28","29","33"],n:"Untitled Layout","_":1,v:{"26":{aV:8,w:"Portal Setup",x:"visible",a:247,Z:"break-word",y:"preserve",j:"absolute",r:"inline",b:16,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",z:7,aS:8,t:16,aT:8,k:"div",aU:8,G:"#000"},"29":{aU:8,G:"#000",c:100,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",w:"Captions Event ID",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:5,F:"right",b:142},"32":{aU:8,G:"#000",c:81,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",w:"Vimeo Link",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:24,F:"right",b:64},"27":{aU:8,G:"#000",c:53,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",w:"Slido Link",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:52,F:"right",b:103},"30":{c:100,d:28,I:"Solid",J:"Solid",K:"Solid",Y:31,g:"#F8AE33",L:"Solid",aP:"pointer",M:1,w:"Refresh",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:8,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"10"}]},k:"div",a:493,F:"center",b:81},"33":{aU:8,G:"#000",c:100,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",w:"Emails",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:5,F:"right",b:186},"28":{c:100,d:28,I:"Solid",J:"Solid",K:"Solid",Y:31,g:"#F8AE33",L:"Solid",aP:"pointer",M:1,w:"Save",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:1,dB:"button",D:"#D8DDE4",aA:{a:[{p:4,h:"8"}]},k:"div",a:493,F:"center",b:129},"31":{c:474,d:594,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:0,w:"<div id=\"vimeo\" class=\"vimeo\">\n  <input type=\"text\" id=\"answer\" class=\"textInput\" placeholder=\"Vimeo Link\" size=\"50\">\n</div><br>\n<div id=\"slido\" class=\"slido\">\n  <input type=\"text\" id=\"answer\" class=\"textInput\" placeholder=\"Slido Link\" size=\"50\">\n</div><br>\n<div id=\"captions\" class=\"captions\">\n  <input type=\"text\" id=\"answer\" class=\"textInput\" placeholder=\"Captions Event ID\" size=\"50\">\n</div><br>\n<div id=\"emails\" class=\"emails\">\n  <textarea type=\"textarea\" id=\"answer\" class=\"textInput\" placeholder=\"emails\" style=\" min-width:350px; max-width: 350px; width: 350px; height: 200px;\" textarea=\"\"></textarea></div>",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:63,F:"center",b:64}}}],{},h,{},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
