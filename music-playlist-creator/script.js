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
// const modalContent = document.querySelector("modal-content")
const createCard = (data) => {
    const newPlaylistContainer = document.createElement("div")
    newPlaylistContainer.className = 'music'
    console.log("loading",newPlaylistContainer)
    const likeKey = `likes-${data.playListName}`
    const likedKey = `liked-${data.playListName}`
    let likeCount = localStorage.getItem(likeKey)||0
    let alreadyLiked = localStorage.getItem(likedKey) === 'true'
        newPlaylistContainer.innerHTML = `
            <img src = "${data.playlistArt}" class = 'playlist-art'>
            <h3 class = 'playlist-name'>${data.playlistName}</h3>
            <h4 class = 'playlist-author'>${data.playlistAuthor}</h4>
            <div class = 'liker'> <span class = 'heart ${alreadyLiked ? "liked" : ""}'>❤️</span> <span class  = "like-count">${likeCount}</span></div>
            `
            newPlaylistContainer.addEventListener('click',event =>{
                createModal(data)
            })
            const likeElement = newPlaylistContainer.querySelector('.heart')
            likeElement.addEventListener("click",(event) => {
                event.stopPropagation()
                if(alreadyLiked) return;
                likeCount = parseInt(likeCount)+1
                localStorage.setItem(likeKey,likeCount)
                localStorage.setItem(likedKey,'true')
                const likeCountElement = 
            })
        return newPlaylistContainer;
}
const createModal = (playlist) => {
    const span = document.querySelector(".close")
    const modal = document.querySelector(".modal")
    const imgElement = document.querySelector("#fest")
    const nameElement = document.querySelector("#creatorIdentification p:nth-of-type(1)")
    const authorElement = document.querySelector("#creatorIdentification p:nth-of-type(2)")
    const songList = document.querySelector(".songList")
    const shuffleBtn = document.querySelector(".shuffle-btn")
    modal.style.display = "flex"

    imgElement.src = playlist.playlistArt
    nameElement.textContent = playlist.playlistName
    authorElement.textContent = playlist.playlistAuthor
    const songsList = document.querySelector("#songList")
    const dynamSongs = (songs) => {
        songsList.innerHTML = ""
        songs.forEach((song) => {
            const songItem = document.createElement("div")
            songItem.className = "songItem"
            songItem.innerHTML =`
            <img src="${song.Image}">
            <p>${song.Name}</p>
            <p>${song.Author}</p>
            <p>${song.Album}</p>
            `;
            songsList.appendChild(songItem)
        });
    };
    dynamSongs(playlist.songs)
    shuffleBtn.onclick = () =>{
        const shuffled = [...playlist.songs].sort(() => Math.random() - 0.5);
        dynamSongs(shuffled)
    }
    let count = 0
    const likeBtn = document.querySelector("#love")
    likeBtn.onclick = () =>{
          count++
    }
    console.log(count)
    
    

}
const span = document.querySelector(".close")
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
const modal = document.querySelector("#festivalModal")

// const modal = document.getElementById("festivalModal");
    // const first = document.createElement("section")
    // modal.classList.add("modal-content")
    // const second = document.createElement("div")
    // modal.classList.add("modal-header")
    // const third = document.createElement("div")
    // modal.classList.add("songsList")
    // const shuffle = document.querySelector("button")
    // modal.classList.add("shuffle-btn")
    // modal.style.display = "flex"
