// const number = Math.floor(Math.random()*(data.length)+1)
// let randomPlaylist = data[number]
// console.log(randomPlaylist)

// const createSelected = (selectedPlaylist) =>{
//     const selected = document.querySelector('selectedPlaylist')
//     const imageElement = document.querySelector("#flex")
//     const namerElement = document.querySelector("#nameOfPlaylist")
//     const trackList = document.querySelector("#songList")
//     imageElement.src = selectedPlaylist.playlistArt
//     namerElement.textContent = selectedPlaylist.playListName
//     const selectedSongs = document.querySelector("#songList")
//     const dynamSongs = (songs) => {
//         songList.innerHTML = ""
//         songs.forEach((song) => {
//             const songItem = document.createElement("div")
//             songItem.className = "songItem"
//             songItem.innerHTML =`
//             <img src="${song.Image}">
//             <p>${song.Name}</p>
//             <p>${song.Author}</p>
//             <p>${song.Album}</p>
//             `;
//             songsList.appendChild(songItem)
//         });
       
//     };
// }
function renderFeaturedPlaylist(playlist){
    const songContainer = document.querySelector("#contentList")
    console.log("1",songContainer)
    songContainer.innerHTML = `
    <img src="${playlist.playlistArt}" class="featured-art">
    <h3 class= "playlist-name">${playlist.playlistName}</h3>
    <div class = "song-list">
     ${playlist.songs.map(song => `
        <div class = "song">
            <img src="${song.Image}" class = "songArt"/>
            <p>${song.Name}</p>
            <p>${song.Author}</p>
            <p>${song.Album}</p> 
            <p>${song.Duration}</p>  
    `).join("")}
    </div>
    `}
document.addEventListener("DOMContentLoaded", ()=>{ 
    const randomPlaylist = Math.floor(Math.random()*data.length)
    const featured = data[randomPlaylist]
    console.log("2",featured)
    renderFeaturedPlaylist(featured)
})
