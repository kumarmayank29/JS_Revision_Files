const addButton=document.querySelector('#add');
const updateLSData=()=>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes=[];
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}


const addNewNote =(text='')=>{
    const note =document.createElement('div');
    note.classList.add('note');

    const htmlData=`<div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i> </button> 
    <button class="delete"> <i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`;
    note.insertAdjacentHTML('afterbegin',htmlData);
    //console.log(note);

    //getting the refernces
const editButton=note.querySelector('.edit');
const deleteButton=note.querySelector('.delete');
const mainButton=note.querySelector('.main');
const textArea=note.querySelector('.textarea');

//deleting node
deleteButton.addEventListener('click',()=>{
    note.remove();
    updateLSData();
})

//toggle using edit button
textArea.value=text;
mainDiv.innerHTML=text;
editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');

})
textArea.addEventListener('change',(event)=>{
const value=event.target,value;
mainDiv.innerHTML=value;
updateLSData();

})

    document.body.appendChild(note)
    //it appendsa anode as the last child of a note
}

//getting data back from local storage
const notes=JSON.parse(localStorage.getItem('note'));
if(notes){
    notes.forEach((note)=>addNewNote(note))};

addButton.addEventListener('click',()=>addNewNote() );

