//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien!!!"; messageTime=""; messageError="Lo lamento, intenta de nuevo!"; messageErrorG="Lo lamento, intenta de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUNUXzAzX1JlbGFjaW9uYXJfUGFsYWJyYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["VGVtcGVyYXR1cmE", "R3JhZG9zIGNlbnTtZ3JhZG9zIC0gsEM"],["TWFzYQ", "S2lsb2dyYW1v"],["RGlzdGFuY2lh", "TWV0cm8gLSBt"],["Vm9sdGFqZQ", "Vm9sdGlvcyAtIFY"],["Vm9sdW1lbg", "Q2VudO1tZXRybyBjdWJpY28gLSBjbTM"],["SW50ZW5zaWRhZA", "QW1wZXJpb3MgLSBB"],["VmVsb2NpZGFk", "a20vaA"],["UmVzaXN0ZW5jaWE", "T2htaW9zIC0g"],["VGllbXBv", "U2VndW5kb3MgLSBz"]];
var c=[[11,24],[4,9],[9,9],[7,11],[7,23],[10,12],[9,4],[11,11],[6,12]];
var con1=["Temperatura","Masa","Distancia","Voltaje","Volumen","Intensidad","Velocidad","Resistencia","Tiempo"];
var con2=["Grados centígrados - °C","Kilogramo","Metro - m","Voltios - V","Centímetro cubico - cm3","Amperios - A","km/h","Ohmios - Ω","Segundos - s"];
var sel1=""; join1=[]; join2=[];
colorText="#2B2B2B";colorButton="#5C863E";colorBack="#FFFFFF";colorSele="#A1BD8D";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
