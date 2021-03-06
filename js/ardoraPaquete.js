//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var indice, indiceMul, taboaContidos, maxIndice, menuLateral, menuActividades, anchoContidoIni,horaInicio, taboaIntentos;
function inicia(){
   var data=new Date();
   if (data.getMinutes()<10){horaInicio=data.getHours() +":0"+data.getMinutes()+" h";}
   else{horaInicio=data.getHours() +":"+data.getMinutes()+" h";}
   taboaIntentos=new Array();
   menuLateral='';
   menuActividades='<h1>Siguiente...</h1><table width=\"140\" border=\"0\"><tr><td><a href=\"javascript:irA(0)\" title=\"Portada\">1 </a></td><td><a href=\"javascript:irA(1)\" title=\"Introducción\">2 </a></td><td><a href=\"javascript:irA(2)\" title=\"Actividad 1 Ordenar la frase\">3 </a></td><td><a href=\"javascript:irA(3)\" title=\"Sistema Internacional\">4 </a></td><td><a href=\"javascript:irA(4)\" title=\"Actividad 2 Ordenar imágenes\">5 </a></td></tr><tr><td><a href=\"javascript:irA(5)\" title=\"Actividad 3 Relacionar palab\">6 </a></td><td><a href=\"javascript:irA(6)\" title=\"Actividad 4 Lectura Elect\">7 </a></td><td><a href=\"javascript:irA(7)\" title=\"Actividad 4 Continuación Lect\">8 </a></td><td><a href=\"javascript:irA(8)\" title=\"Actividad 5 Crucigrama Concept\">9 </a></td><td><a href=\"javascript:irA(9)\" title=\"Créditos\">10 </a></td></tr><tr></tr></table>';
   if (window.opener == null){
      indice=0;
      }else{
      if (window.opener.indice == null){
         indice=0;
      }else{
         indice=window.opener.indice;
      }
   }
   maxIndice=9;
	taboaContidos=new Array();
taboaContidos[0]=new act("Portada","Portada","","<object width='100%' height='420' type='text/html' data='ACT_00_MULTIMETRO/ACT_00_MULTIMETRO1.htm'></object>",true,"",true,true,true);
taboaContidos[1]=new act("Introducción","Introducción","","<object width='100%' height='420' type='text/html' data='ACT_01_INTRODUCCION_VIDEO/ACT_01_INTRODUCCION_VIDEO.htm'></object>",true,"",true,true,true);
taboaContidos[2]=new act("Actividad 1 Ordenar la frase","Actividad 1 Ordenar la frase","","<object width='100%' height='420' type='text/html' data='ACT_01_ORDENAR_FRASE/ACT_01_ORDENAR_FRASE.htm'></object>",true,"",true,true,true);
taboaContidos[3]=new act("Sistema Internacional","Sistema Internacional","","<object width='100%' height='420' type='text/html' data='ACT_02_SISTEMA_INTERNACIONAL/ACT_02_SISTEMA_INTERNACIONAL.htm'></object>",true,"",true,true,true);
taboaContidos[4]=new act("Actividad 2 Ordenar imágenes","Actividad 2 Ordenar imágenes","","<object width='100%' height='420' type='text/html' data='ACT_02_ORDENAR_IMAGENES/ACT_02_ORDENAR_IMAGENES.htm'></object>",true,"",true,true,true);
taboaContidos[5]=new act("Actividad 3 Relacionar palab","Actividad 3 Relacionar palab","","<object width='100%' height='420' type='text/html' data='ACT_03_Relacionar_Palabras/ACT_03_Relacionar_Palabras.htm'></object>",true,"",true,true,true);
taboaContidos[6]=new act("Actividad 4 Lectura Elect","Actividad 4 Lectura Elect","","<object width='100%' height='420' type='text/html' data='ACT_04_LECTURA_ELECTRICIDAD/ACT_04_LECTURA_ELECTRICIDAD1.htm'></object>",true,"",true,true,true);
taboaContidos[7]=new act("Actividad 4 Continuación Lect","Actividad 4 Continuación Lect","","<object width='100%' height='420' type='text/html' data='ACT_04_SEGUNDA_ELECTRICIDAD/ACT_04_SEGUNDA_ELECTRICIDAD1.htm'></object>",true,"",true,true,true);
taboaContidos[8]=new act("Actividad 5 Crucigrama Concept","Actividad 5 Crucigrama Concept","","<object width='100%' height='420' type='text/html' data='ACT_05_CRUCIGRAMA_ELECTRICIDAD/ACT_05_CRUCIGRAMA_ELECTRICIDAD.htm'></object>",true,"",true,true,true);
taboaContidos[9]=new act("Créditos","Créditos","","<object width='100%' height='420' type='text/html' data='X_CREDITOS/X_CREDITOS1.htm'></object>",true,"",true,true,true);
document.getElementById("botonAdiante").href="javascript:avanza()";
document.getElementById("botonAtras").href="javascript:retrocede()";
document.getElementById("botonAxuda").target="_blank";
anchoContidoIni=document.getElementById("areaContido").style.width;
   actualiza();
}
function actualiza(){
   document.getElementById("tituloAct").innerHTML=taboaContidos[indice].descricion;
   document.getElementById("enunciadoAct").innerHTML=taboaContidos[indice].enunciado;
   document.getElementById("contidoAct").innerHTML=taboaContidos[indice].areaContido;
   document.getElementById("botonAdiante").style.visibility="hidden";
   document.getElementById("botonAtras").style.visibility="hidden";
   document.getElementById("botonAxuda").style.visibility="hidden";
   if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.visibility="hidden";}
   if (taboaContidos[indice].seg_ant){
      if (indice>0){
         document.getElementById("botonAtras").title=taboaContidos[indice-1].descricionUTF8;
         document.getElementById("botonAtras").style.visibility="visible";
      }
      if (indice<maxIndice){
         document.getElementById("botonAdiante").title=taboaContidos[indice+1].descricionUTF8;
         document.getElementById("botonAdiante").style.visibility="visible";
      }
   }
   if (taboaContidos[indice].mp){
      document.getElementById("menuPrincipal").style.visibility="visible";
   }
   else{
      document.getElementById("menuPrincipal").style.visibility="hidden";
   }
   if (taboaContidos[indice].bAxuda.length>0){
      document.getElementById("botonAxuda").href=taboaContidos[indice].bAxuda;
      document.getElementById("botonAxuda").style.visibility="visible";
   }
   if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){
	   contido="";
	   document.getElementById("menu").style.height="auto";
      document.getElementById("areaContido").style.width=anchoContidoIni;
	   if (taboaContidos[indice].ml){ contido=menuLateral;}
	   if (taboaContidos[indice].ma){ contido=contido+menuActividades;}
	   document.getElementById("menu").innerHTML=contido;
	   document.getElementById("menu").style.visibility="visible";
   }
   else{
        if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.height="0px";}
        document.getElementById("areaContido").style.width="calc(100% - 30px)";
   }
}
function avanza(){
   if (indice<maxIndice){
      indice++; actualiza();
   };
}
function irA(num){
      indice=num; actualiza();
}
function recarga(){
      irA(indice);
}
function retrocede(){indice--; actualiza();}
function act( descricion, descricionUTF8, enunciado, areaContido,ma, bAxuda, seg_ant, mp, ml ) {
   this.descricion=descricion;
   this.descricionUTF8=descricionUTF8;
   this.enunciado=enunciado;
   this.areaContido=areaContido;
   this.mp=mp;
   this.ml=ml;
   this.ma=ma;
   this.seg_ant=seg_ant;
   this.bAxuda=bAxuda;
   }
function iniciaActividade(){
   var data=new Date();
   if (data.getMinutes()<10){var hI=data.getHours() +":0"+data.getMinutes();}
   else{var hI=data.getHours() +":"+data.getMinutes();}
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function iniciaActividadeMul(){
   indiceMul=indice;
   var data=new Date();
   if (data.getMinutes()<10){var hI=data.getHours() +":0"+data.getMinutes();}
   else{var hI=data.getHours() +":"+data.getMinutes();}
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function infoAct( ind, hinicio, intentos, estado, hfin, puntos){
	this.ind=ind;
	this.hinicio=hinicio;
	this.intentos=intentos;
	this.estado=estado;
	this.hfin=hfin;
	this.puntos=puntos;
}
function actualizaInfoAct(puntos,intentos,estado){
	var data=new Date();
   if (data.getMinutes()<10){var hF=data.getHours() +":0"+data.getMinutes();}
   else{var hF=data.getHours() +":"+data.getMinutes();}
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indice,hI,intentos,estado,hF,puntos);
}
function actualizaInfoActMul(){
	var data=new Date();
   if (data.getMinutes()<10){var hF=data.getHours() +":0"+data.getMinutes();}
   else{var hF=data.getHours() +":"+data.getMinutes();}
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indiceMul,hI,0,"--",hF,0);
}
function PechaVentana(){window.close()}
function AbreCentrada(theURL,winName,features, myWidth, myHeight, isCenter,aNume) {
	if(window.screen)if(isCenter)if(isCenter=="true"){
      var myLeft = (screen.width-myWidth)/2;
      var myTop = (screen.height-myHeight)/2;
      features+=(features!='')?',':'';
      features+=',left='+myLeft+',top='+myTop;
    }
    window.open(theURL,winName,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight);
    indice=aNume;
}
function mostrar(capa){
var obj = document.getElementById(capa)
if(obj.style.display == "block"){
   obj.style.display = "none"
   document.getElementById("contenido").style.width="95%";
}else{
   obj.style.display = "block";
   document.getElementById("contenido").style.width="75%";
}}
function hideMenu(menu,contido,wC){var obj=document.getElementById(menu);var con=document.getElementById(contido);
if (obj.style.display=="block"){obj.style.display="none";con.style.width="95%";}
else{obj.style.display="block";con.style.width=wC;}}
function MM_preloadImages() {
   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() {var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { //v4.01
   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
   d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
