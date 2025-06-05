const loadSongsToHTML = () =>{
    const holder = document.querySelector("#playlist-cards")
    for (let dat of data){
        const songItemCard = createCard(dat)
        console.log(songItemCard)
        holder.appendChild(songItemCard)
    }
}
document.addEventListener("DOMContentLoaded", () =>{
    loadSongsToHTML()
})
// const musicBtn = document.querySelectorAll(".music");
// const span = document.getElementsByClassName("close")[0];
// musicBtn.forEach(musicButton => {
//     musicButton.addEventListener("click",() =>{
//         modal.style.display = "block"
//     })
// });
// const modalContent = document.querySelector("modal-content")

// function openModal(festival) {
//    document.getElementById('festivalName').innerText = festival.name;
//    document.getElementById('festivalImage').src = festival.imageUrl;
//    document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
//    document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
//    document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
//    modal.style.display = "block";
// }

const createCard = (data) => {
    const newPlaylistContainer = document.createElement("div")
    newPlaylistContainer.className = 'music'
    console.log("loading",newPlaylistContainer)
        newPlaylistContainer.innerHTML = `
            <img src = "${data.playlistArt}" class = 'playlist-art'>
            <h3 class = 'playlist-name'>${data.playlistName}</h3>
            <h4 class = 'playlist-author'>${data.playlistAuthor}</h4>
        `
        newPlaylistContainer.addEventListener('click',createModal(data));
        return newPlaylistContainer;
}
const createModal = (playlist) => {
    const modal = document.querySelector(".modal")
    modal
}
const modal = document.querySelector("#festivalModal")

        
// span.onclick = function() {
//   modal.style.display = "none";
// }
// const modal = document.getElementById("festivalModal");
// modal.onclick = function(songItemCard) {
//    if (event.target == modal) {
//       modal.style.display = "block";
//    }
// }
