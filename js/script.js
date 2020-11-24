"use stict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");


const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?"," "),
    b = prompt("На сколько оцениваете его?", " "),
    c = prompt("Один из последних просмотренных фильмов?"," "),
    d = prompt("На сколько оцениваете его?", " ");

    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[c]=d;

    console.log(personalMovieDB);

