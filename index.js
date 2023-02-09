var bookmarkNameInput = document.getElementById('bookmarkName');
var websiteUrlInput = document.getElementById('websiteUrl');

var bookmarkContainer = [];
if (localStorage.getItem("bookmarks") !=null) {
    bookmarkContainer = JSON.parse(localStorage.getItem("bookmarks"));
   displayBookmark(bookmarkContainer);
}
function submit() {
    var regx = /^\s*$/;
    if(bookmarkNameInput.value == regx.test() && websiteUrlInput.value == regx.test()){
        document.getElementById('nameError').innerHTML = 'Name is required';
        nameError.classList.replace('d-none','d-block');
        urlError.classList.replace('d-none','d-block');
    }
    else if (bookmarkNameInput.value != regx.test() && websiteUrlInput.value == regx.test()) {  
        document.getElementById('nameError').innerHTML = 'this url already exist';
        nameError.classList.replace('d-none','d-block');
        urlError.classList.replace('d-none','d-block');
    }
    else if (bookmarkNameInput.value == regx.test() && websiteUrlInput.value != regx.test()) {  
        nameError.classList.replace('d-none','d-block');
        urlError.classList.replace('d-block','d-none');
    }
        else{
            var bookmark ={
                Name : bookmarkNameInput.value,
                Url : websiteUrlInput.value,
                }
                bookmarkContainer.push(bookmark);
                localStorage.setItem("bookmarks",JSON.stringify(bookmarkContainer));
                
                displayBookmark(bookmarkContainer);
                clearInputs();
                nameError.classList.replace('d-block','d-none');
                urlError.classList.replace('d-block','d-none');
        }
           
}
           

function displayBookmark(bookmarkContainer) {
    var container = ``;
    bookmarkList.classList.replace('d-none','d-block');
    for (var i = 0; i < bookmarkContainer.length; i++) {
        container +=`
        <div id  class="container-items row ">
           <h2>${bookmarkContainer[i].Name}</h2>
           <a id="link"  class="btn btn-primary" href="" >visit</a>
           <button onclick="deleteUrl(${i})" class="btn btn-danger">Delete</button>
           </div> `
    }

    document.getElementById('bookmarkList').innerHTML =  container;
}

function clearInputs() {
    bookmarkNameInput.value = "";
    websiteUrlInput.value = "";
}

function deleteUrl(index){
    
    bookmarkContainer.splice(index,1);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarkContainer));
    bookmarkList.classList.replace('d-block','d-none');
    displayBookmark(bookmarkContainer);
}