const store = require("./redux/store")
const {addMovie, removeMovie, getMovie} = require("./redux/movies")
const {addTvShow, removeTvShow, getTvShow} = require("./redux/tvshows")

store.dispatch(getMovie())