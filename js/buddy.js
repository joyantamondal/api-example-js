const loadBuddys=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddies(data))
}
loadBuddys()
const displayBuddies=buddies=>{
    const buddiesdata = buddies.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddiesdata){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} \n ${buddy.email}`;
        buddiesDiv.appendChild(p);

    }
}