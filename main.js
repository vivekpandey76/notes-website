console.log('vivek pandey');
showNotes();
//If user adds a note,add it to the localStorage
let addbtn=document.getElementById('addBtn');
addbtn.addEventListener("click", function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes == null) {
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value= "";
    console.log(notesObj);
    showNotes();
});
// function to show element from localstorage to on the screen
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes == null) {
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
let html="";
notesObj.forEach(function(element,index) {
    html+=`<div class="noteCard my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Notes ${index+1}</h5>
           <p class="card-text">${element}</p>
           <button onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete notes</button>
           </div>
            </div>`
});
let notesElm=document.getElementById('notes');
if(notesObj.length !=0){
    notesElm.innerHTML=html;
}
else{
    notesElm.innerHTML= `Nothing to show!Use "Add a Note" section above to add notes.`;
}

}
//function to delete a note
function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes == null) {
        notesObj= [];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener('input',function() {
    let inputval=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

    })
})