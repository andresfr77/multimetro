//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=15; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente!!!"; messageTime=""; messageError="Por favor, intenta de nuevo!"; messageErrorG="Por favor, intenta de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUNUXzAyX09SREVOQVJfSU1BR0VORVM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["MV9DYXZlcm5fX2NvbGFzLnBuZw","Ml9NZWRpZGFzX2NvcnBvcmFsZXMucG5n","M19NYXRlbV9fdGljYXMucG5n","NF9SZXZvbHVjaV9fbl9GcmFuY2VzYS5wbmc","NV9TaXN0ZW1hX01fX3RyaWNvX0RlY2ltYWwucG5n","Nl9QcmVmaWpvcy5wbmc","N19TaXN0ZW1hX0NlZ2VzaW1hbF9vX0NHUy5wbmc","OF9EaWZlcmVuY2lhX01hc2FfeV9QZXNvLnBuZw","OV9Tc2l0ZW1hX01LUy5wbmc","MTBfU2lzdGVtYV9Bbmdsb3Nhal9fbl9kZV91bmlkYWRlcy5wbmc","MTFfUHJlZmlqb3NfU2lzdGVtYV9Bbmdsb3Nhal9fbi5wbmc","MTJfU2lzdGVtYV9UX19jbmljb19kZV9VbmlkYWRlcy5wbmc","MTNfVW5pZGFkZXNfZW5fU2l0ZW1hX1RfX2NuaWNvLnBuZw","MTRfU2lzdGVtYV9JbnRlcm5hY2lvbmFsX2RlX1VuaWRhZGVzLnBuZw","MTVfVW5pZGFkZXNfU0kucG5n"];
var actMaxWidth="1000"; actMaxHeight="410";indexG=0;profG=0;dirMedia="ACT_02_ORDENAR_IMAGENES_resources/media/";
var wordsG=[];
colorText="#2B2B2B";colorButton="#5C863E";colorBack="#FFFFFF";colorSele="#A1BD8D";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
