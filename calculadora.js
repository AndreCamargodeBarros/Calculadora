function calculadora(){//Insere o Codigo HTML
    var main= document.getElementById("main");
    if(main.style.display=="none"){
        var ponto="'.'";var soma="'+'";var sub="'-'";var mult="'*'";
        var divi="'/'";var aspa="'('";var aspf="')'";var raiz="'Math.sqrt('";
        var _calcView=
                    '<style>'+
                        '.buttonCalc{'+
                                'width: 40;'+
                                'height: 40;'+
                                'font-size: 20;'+
                                'margin: 2;'+
                                'cursor: pointer;'+
                                'background-color: slategrey;'+
                                'border: none;'+
                                'color: white;'+
                        '}'+
                        '.textviewCalc{'+
                                'width: 184;'+
                                'margin: 5;'+
                                'font-size: 20;'+
                                'padding: 5;'+
                        '}'+
                        '.main{'+
                                'position: absolute;'+
                                'right: 20;'+
                                'padding: 10;'+
                                'background: linear-gradient(to left,red,black 20%);'+
                        '}'+
                    '</style>'+
                    '<form name="form">'+
                    '<input class="textviewCalc" name="textviewMostra" style="background:black; color: white; border:none;"></br>'+
                        '<input class="textviewCalc" name="textview">'+
                            '<table>'+
                                '<tr>'+
                                    '<td><input class="buttonCalc" type="button" value="C" onclick="limpa()"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="<" onclick="back()"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="&divide;" onclick="insert('+divi+')"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="x" onclick="insert('+mult+')"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="(" onclick="insert('+aspa+')"></td>'+
                                    '<td><input class="buttonCalc" type="button" value=")" onclick="insert('+aspf+')"></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td><input class="buttonCalc" type="button" value="9" onclick="insert(9)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="8" onclick="insert(8)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="7" onclick="insert(7)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="-" onclick="insert('+sub+')"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="&prod;" onclick="pi()"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="&radic;" onclick="insert('+raiz+')"></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td><input class="buttonCalc" type="button" value="6" onclick="insert(6)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="5" onclick="insert(5)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="4" onclick="insert(4)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="+" onclick="insert('+soma+')"></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td><input class="buttonCalc" type="button" value="3" onclick="insert(3)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="2" onclick="insert(2)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="1" onclick="insert(1)"></td>'+
                                    '<td rowspan="2"><input style="height:88" class="buttonCalc" type="button" value="=" onclick="equal()"></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td colspan="2"><input style="width:88" class="buttonCalc" type="button" value="0" onclick="insert(0)"></td>'+
                                    '<td><input class="buttonCalc" type="button" value="." onclick="insert('+ponto+')"></td>'+
                                '</tr>'+
                            '</table>'+
                    '</form>';
            document.getElementById("main").style.display="block";
            document.getElementById("main").innerHTML= _calcView;

    }else
    document.getElementById("main").style.display="none";
}
function insert(num){//Insere os numeros 
    document.form.textview.value= document.form.textview.value+num;
}
function equal(){//Executa toda a instrução
    var exp= document.form.textview.value;
    var mostraEquacao= document.form.textview.value;
    if(exp){
        document.form.textview.value= eval(exp);
        document.form.textviewMostra.value=mostraEquacao+' =';
    }
}
function pi(){
    document.form.textview.value= Math.PI.toFixed(2); 
}
function limpa(){//Apaga tudo
    document.form.textview.value="";
}
function back(){//Apaga o ultimo elemento
    var exp= document.form.textview.value;
    document.form.textview.value= exp.substring(0,exp.length-1);
}
// Comandos por Teclado--------------------------------------------------------------------------------
document.addEventListener("keydown",vtecladown);
document.addEventListener("keypress",vtecla);


function vtecladown(caracter){ // Internet Explorer
    var tecla = event.keyCode;
    if (tecla == 8){ // Se for ponto .
        back();}
    if (tecla == 46 || tecla == 27){ //tecla Del e Esc = apaga tudo
        limpa();}
    }
function vtecla(caracter){
    if(window.event) { // Internet Explorer
        var tecla = event.keyCode;
        if((tecla > 47) && (tecla < 58)) {  // Se for numero
            tecla = tecla - 48;
            insert(tecla);}  
        if (tecla == 46){ // Se for ponto .
            insert(".");}
        if (tecla == 43){     //se for +
            insert('+');}
        if (tecla == 13 || tecla == 61){ //enter = executar
            equal();}
        if (tecla == 45){  // se for -
            insert("-");}
        if (tecla == 47){
            insert("/");}     // se for /
        if (tecla == 42){
            insert("*");}     // se for *
        if (tecla == 60){     // se for <
            back();}
        if (tecla == 40){
            insert("(");}     // se for (
        if (tecla == 41){
            insert(")");}     // se for )
                    
        
 //  if ((tecla == 109) || (tecla == 77)){ // Se for m ou M  Atalho para Mem�ria
 //  memo();}
 //  if ((tecla == 82) || (tecla == 114)){ // Se for r ou R   Atalho para chamar mem�ria
 //  chamamem();}
 //  if ((tecla == 99) || (tecla == 67)){  // Se for c ou C  Atalho para cancelar mem�ria
//   cancelamemoria();} 
//   document.formulario.vazio.focus();
}
}
