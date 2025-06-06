// generates HTML-items to the playlist cards
console.log("test")
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
    const randomPlaylist = Math.floor(Math.random()*(data.length))

})
//function to create playlist cards
const createCard = (data) => {
    const newPlaylistContainer = document.createElement("div")
    newPlaylistContainer.className = 'music' //creates a new div with class name, music
    // console.log("loading",newPlaylistContainer)

    //initiating like and unlike function
    const likeKey = `likes-${data.playListName}`
    const likedKey = `liked-${data.playListName}`
    let likeCount = localStorage.getItem(likeKey)||0
    let alreadyLiked = localStorage.getItem(likedKey) === 'true'
    
    //this creates the templates of the playlist cards
        newPlaylistContainer.innerHTML = `
            <img src = "${data.playlistArt}" class = 'playlist-art'>
            <h3 class = 'playlist-name'>${data.playlistName}</h3>
            <h4 class = 'playlist-author'>${data.playlistAuthor}</h4>
            <div class = 'liker'> <span class = 'heart ${alreadyLiked ? "liked" : ""}'>❤️</span> <span class  = "like-count">${likeCount}</span></div>
            <button class = "deleteBtn">Delete</button>
            <button class = "edit-btn">Edit</button>
            `
            //deleting the playlist caards
            newPlaylistContainer.querySelector(".deleteBtn").addEventListener('click',() =>{
                newPlaylistContainer.remove()
                const index = data.findIndex(p => p.playListName === data.playListName);
                if(index !== -1){
                    data.splice(index,1)
                }
            });
            //editing the playlist cards
            newPlaylistContainer.querySelector(".edit-btn").addEventListener('click',() =>{
                const newName = prompt("Edit Playlist name", data.playListName)
                const newAuthor = prompt("Edit Author name",data.playlistAuthor)

                if(newName) data.playlistName = newName;
                if(newAuthor) data.playlistAuthor = newAuthor;

                const newCard = createCard(data)
                newPlaylistContainer.replaceWith(newCard)
            })
            newPlaylistContainer.addEventListener('click',event =>{
                createModal(data)
            })
            const likeElement = newPlaylistContainer.querySelector('.heart')
            likeElement.addEventListener("click",(event) => {
                event.stopPropagation()
                let liked = localStorage.getItem(likedKey) === "true"
                 const likeCountElement = newPlaylistContainer.querySelector('.like-count')
                if(liked){
                likeCount = Math.max(0,parseInt(likeCount)-1)
                localStorage.setItem(likeKey,likeCount)
                localStorage.setItem(likedKey,'false')
                likeElement.textContent = '🤍'
                likeElement.classList.remove('liked')
                }else{
                likeCount = parseInt(likeCount) + 1
                localStorage.setItem(likeKey,likeCount)
                localStorage.setItem(likedKey,'true')
                likeElement.classList.add("liked")
                likeElement.textContent = '❤️'
                }
                likeCountElement.textContent = likeCount
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
             <p>${song.Duration}</p>
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
console.log(span,"3")
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
const modal = document.querySelector("#festivalModal")

