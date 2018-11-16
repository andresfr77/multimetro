//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Very good!!!"; messageTime=""; messageError="Lo lamento, vuelve a intentarlo! "; messageErrorG="Lo lamento, vuelve a intentarlo! "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUNUXzA1X0NSVUNJR1JBTUFfRUxFQ1RSSUNJREFE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","","","","","","",""],["","","Ug","","","","","","","","","","","",""],["RQ","TA","RQ","Qw","VA","Ug","SQ","Qw","SQ","RA","QQ","RA","","",""],["TA","","Uw","","","","","","","","","","","",""],["RQ","","SQ","Tg","VA","RQ","Tg","Uw","SQ","RA","QQ","RA","","",""],["Qw","","Uw","","","","","","","","","","","",""],["VA","","VA","","","","","","","","","","","",""],["Ug","","RQ","","","","","","","","","","","",""],["Tw","","Tg","RQ","Rw","QQ","VA","SQ","Vg","QQ","","Vg","","",""],["Tg","","Qw","","","","","","","TQ","","Tw","","",""],["","","SQ","","","Tw","","","","UA","","TA","","",""],["","","QQ","","","SA","","","","RQ","","VA","","",""],["","","","","","TQ","QQ","VA","RQ","Ug","SQ","QQ","","",""],["","","","","","SQ","","","","SQ","","Sg","","",""],["","","","","Vg","Tw","TA","VA","SQ","Tw","","RQ","","",""]];
var x1=[1,10,12,6,3,1,3,3,6,5];
var y1=[3,9,9,11,2,3,5,9,13,15];
var x2=[1,10,12,6,3,12,12,10,12,10];
var y2=[10,15,15,15,12,3,5,9,13,15];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Gracias a una partícula del átomo existe la electricidad","Unidad de medida de la Intensidad","Fuerza que hace mover los electrones","Unidad de medida de la resistencia eléctrica","Ofrece cierta oposición al flujo de corriente","Efecto al trasladarse electrónes de un átomo al otro","Flujo ordenado de electrones ","Carga eléctrica del electrón","Está conformada por átomos y moléculas","Unidad de medida del voltaje"];
var colNum=15;
var rowNum=15;
colorText="#2B2B2B";colorButton="#5C863E";colorBack="#FFFFFF";colorSele="#A1BD8D";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
