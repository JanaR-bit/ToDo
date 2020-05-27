// auswaehlen der Elemente
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Klassen-Namen
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variablen
let LIST, id;

// get item von localstorage
let data = localStorage.getItem("TODO");

// Pruefe ob data nicht leer ist
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // setzte id auf den letzten in der Liste
    loadList(LIST); // lade die Liste in das aktuelle Interface
}else{
    // Wenn data nicht leer ist
    LIST = [];
    id = 0;
}