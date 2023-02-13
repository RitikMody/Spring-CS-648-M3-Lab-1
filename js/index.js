// 1
var favMovies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji"];
window.console.log(favMovies[1]);

// 2
var movies = new Array(5);
movies[0] = "Grown Ups";
movies[1] = "Grown Ups 2";
movies[2] = "Avenegers";
movies[3] = "Iron Man";
movies[4] = "Jumanji";
window.console.log(movies[0]);

// 3
movies.splice(2,0,"LOTR")
window.console.log(movies.length);

// 4
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji"];
delete movies[0];
window.console.log(movies);

// 5
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
for(ind in movies)
{
    window.console.log(movies[ind])
}

// 6
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
for(movie of movies)
{
    window.console.log(movie)
}

// 7
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
for(movie of movies.sort())
{
    window.console.log(movie)
}

// 8
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
var leastFavMovies = ["Benjamin Button","Creed","Bad Boys"]
window.console.log("Movies I Like:")
window.console.log("")

for(movie of movies)
{
    window.console.log(movie)
}

window.console.log("")

window.console.log("Movies I regret watching:")
window.console.log("")

for(movie of leastFavMovies)
{
    window.console.log(movie)
}

// 9
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
var leastFavMovies = ["Benjamin Button","Creed","Bad Boys"];
movies = movies.concat(leastFavMovies);
movies = movies.sort().reverse()
window.console.log(movies);

// 10
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
var leastFavMovies = ["Benjamin Button","Creed","Bad Boys"];
movies = movies.concat(leastFavMovies);
movies = movies.sort().reverse();
window.console.log(movies.slice(-1));

// 11
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
var leastFavMovies = ["Benjamin Button","Creed","Bad Boys"];
movies = movies.concat(leastFavMovies);
movies = movies.sort().reverse();
window.console.log(movies.slice(0,1));

//12
var movies = ["Grown Ups", "Grown Ups 2", "Avenegers","Iron Man","Jumanji","LOTR","Avatar"];
var leastFavMovies = ["Benjamin Button","Creed","Bad Boys"];
var indices = new Array(3)
var newMovies = ["M1","M2","M3"]
movies = movies.concat(leastFavMovies);
movies = movies.sort().reverse();
count = 0
for(ind in movies){
    if(leastFavMovies.includes(movies[ind])){
        indices[count] = ind
        count +=1
    }
};
window.console.log(indices)
for(i in indices){
    movies[indices[i]] = newMovies[i]
}
window.console.log(movies)


// 13
var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
function filterValues(arr) {
    return typeof(ar[0])==='string';
  };
for(movie of movies){
    window.console.log(movie.filter(filterValues))
}


// 14
var employees = ["Ritik","Ashish","Pinky","Urvin","Nital"]
function showEmployee(arr){
    window.console.log("Employees:");
    window.console.log("");
    for (i of arr){
        window.console.log(i)
    }
};
window.console.log(showEmployee(employees));

// 15
var arr = [58, '', 'abcd', true, null, false, 0]
function filterValues(arr) {
    return (arr!=null & arr!=0 & arr!=false & arr!="");
  };
  window.console.log(arr.filter(filterValues))

// 16
var arr = [ 12,34,5,6,123,8,4,67,3]
function random(arr) {
    l = arr.length
    ind = Math.random()* (l-1)

    return Math.round(ind);
  };
  window.console.log(arr[random(arr)])

// 17
var arr = [ 12,34,5,6,123,8,4,67,3]
function largest(arr) {
    maximum = arr[0]
    for(i of arr){
        if(i>maximum){
            maximum = i
        }
    }
    return maximum;
  };
  window.console.log(largest(arr))