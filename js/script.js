"use stict";

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while(numberOfFilms == "" || null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");}
}

start();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


function remebeMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?"," "),
            b = prompt("На сколько оцениваете его?", " ");
    
            if (a != null && b != null && a != "" && b !="" && a.length < 50) {
                personalMovieDB.movies[a]=b;
                console.log("done");
            } else{
                console.log("error");
                i--;
            }
    }
}

remebeMyFilms();



function detectPersonalLevels() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevels();


    function showMyDB(hidden) {
        if ( !hidden) {
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
writeYourGenres();