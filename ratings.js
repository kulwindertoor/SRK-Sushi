function renderFeedbacks(){
  var result = JSON.parse(localStorage.getItem("ReviewsArray") || "[]");
  var myList = '';
      for (var i = 0; i < result.length; i++) { 
        myList = myList+`<div class='rating__review'><div class='ratings__avatar'><img src='./images/User-icon.png' alt='Avatar' class='avatar'></div><div class='ratings__review_description'><h4 class='ratings__review__name'>${result[i].FullName}</h4><p class='ratings__review__date'>20.05.2020</p><p class='ratings__review__stars'>&#11088; &#11088; &#11088; &#11088; &#11088;</p><p>${result[i].Message}</p></div></div>`
      } 
  document.getElementById('ratings__reviews__add').innerHTML = myList;
}

function putFeedbackToStorage(){
  var firstName = document.getElementById("ratings__FirstNameID").value;
  var lastName = document.getElementById("ratings__LastNameID").value;
  var message = document.getElementById("ratings__MessageID").value;
  var FullName = firstName + " " + lastName;
  var result = '';
  if (firstName.length==0 || lastName.length==0 || message.length==0){
    document.getElementById('ratings__feedback_reply').innerHTML = 'Input fields cannot keep empty';
  }
  else{
    if (typeof(Storage) !== "undefined") {
      var allFeddbacks = JSON.parse(localStorage.getItem("ReviewsArray") || "[]");
      allFeddbacks.push({"FullName":FullName,"Message":message});
      localStorage.setItem("ReviewsArray",JSON.stringify(allFeddbacks) );
      result = JSON.parse(localStorage.getItem("ReviewsArray") || "[]");
    } 
    var myList = '';
    for (var i = 0; i < result.length; i++) { 
      myList = myList+`<div class='rating__review'><div class='ratings__avatar'><img src='./images/User-icon.png' alt='Avatar' class='avatar'></div><div class='ratings__review_description'><h4 class='ratings__review__name'>${result[i].FullName}</h4><p class='ratings__review__date'>20.05.2020</p><p class='ratings__review__stars'>&#11088; &#11088; &#11088; &#11088; &#11088;</p><p>${result[i].Message}</p></div></div>`
    } 
    document.getElementById('ratings__FirstNameID').value = '';
    document.getElementById('ratings__LastNameID').value = '';
    document.getElementById('ratings__MessageID').value = '';
    document.getElementById('ratings__feedback_reply').innerHTML = 'Your feedback successfuly recorded';
    document.getElementById('ratings__reviews__add').innerHTML = myList
  }
  
}
