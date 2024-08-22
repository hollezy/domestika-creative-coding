/* TASK 1
 Create an array of strings with your favorite bands or artists; write a function
 called listArtists() which iterates 
 over the items of the array and logs them out to the console. */

// Create array
const artists = ['Charli XCX', 'Fall Out Boy', 'LOONA', 'Waterparks', 'Marina and the Diamonds', 'PVRIS', 'Kesha', 'RIIZE'];

// Iterate and log each artist to console
function listArtists() {
    for (let i = 0; i < artists.length; i++) {
        console.log(artists[i]);
    }
}

// Call the function
listArtists();


// ANOTHER WAY...
// function listArtists2() {
//     artists.forEach(artist => console.log(artist));
// }

// listArtists2();