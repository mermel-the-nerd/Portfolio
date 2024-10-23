let database =[
    {
        modal: document.getElementById("nukethemoon"),
        btn: document.getElementById("nukemoonbtn"),
        span: document.getElementsByClassName("close")[0],
    },
    {
        modal: document.getElementById("hisdarkmaterials"),
        btn: document.getElementById("hisdarkmaterialsbtn"),
        span: document.getElementsByClassName("close")[1],
    },
    {
        modal: document.getElementById("greekmythdoc"),
        btn: document.getElementById("greekmythdocbtn"),
        span: document.getElementsByClassName("close")[2],
    }, 
    {
        modal: document.getElementById("icecreamform"),
        btn: document.getElementById("icecreamformbtn"),
        span: document.getElementsByClassName("close")[3],
    }
]

let whichmodalopen = null;
// When the user clicks on the button, open the modal

database.forEach((entry, index) => {
    // When the user clicks on a button, open the corresponding modal
    entry.btn.onclick = function() { modalopen(index); };

    // When the user clicks on <span> (x), close the corresponding modal
    entry.span.onclick = function() { modalclose(index); };
});

function modalopen(num) {
  database[num].modal.style.display = "block";
  whichmodalopen=num;
  }

// When the user clicks on <span> (x), close the modal



function modalclose(num) {
  database[num].modal.style.display = "none";
  whichmodalopen=null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (whichmodalopen!==null && event.target == database[whichmodalopen].modal) {
    modalclose(whichmodalopen);
    
  }
  
}