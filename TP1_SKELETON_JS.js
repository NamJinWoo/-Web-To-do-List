var modal = document.getElementById("AddToDo_Sec");
var modal1 = document.getElementById("AddToDo_Edit");
var btn = document.getElementById("Add_Btn");
var close = document.getElementById("close");
var EditClose = document.getElementById("Edit_close");
var addcBtn = document.getElementById("Add_Cont_Btn");
var DelBtn = document.getElementById("Del_Btn");
var count = 0;
var AddItemArray = [];
var AddContentArray = [];
var main1 = document.getElementById("mainbar");
var middles = document.getElementsByClassName("middle");
btn.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
var index = -1;
DelBtn.onclick = function(){
       for(var i = 1; i < 10; i += 2 ){
         for(var j = 0; j < main1.children[i].children[1].children[0].children.length; j++){
           if(main1.children[i].children[1].children[0].childNodes[j].childNodes[0].childNodes[0].checked){
             index = AddItemArray.indexOf(main1.children[i].children[1].children[0].children[j].childNodes[1].textContent);
             main1.children[i].children[1].children[0].removeChild(main1.children[i].children[1].children[0].children[j]);
             AddItemArray.splice(index,1);
             AddContentArray.splice(index,1);
             j--;
             count--;
           }
         }
      }
      alert(AddItemArray);
}

//Add버튼 눌렀을때
addcBtn.onclick = function() {
  //value값을 배열안에 푸쉬했다.
  var item = document.getElementById("Add_Cont_Item").value;
  var content = document.getElementById("Add_Cont_Content").value;
  var AddDay = document.getElementById("Add_Cont_Day").value;
  AddItemArray.push(item);
  AddContentArray.push(content);
  modal.style.display = "none";

  switch (AddDay) {
    //월요일
    case "AMon":
      var text = document.createTextNode(AddItemArray[count]);
      var content = document.createTextNode(AddContentArray[count]);
      var div = document.createElement("DIV");
      var div1 = document.createElement("P");
      var div2 = document.createElement("DIV");
      var p = document.createElement("P");
      var checkbox = document.createElement("INPUT");


      document.getElementById("Mon_test").appendChild(div);
      div.setAttribute("class", "test_Mon");
      div1.setAttribute("class", "test1");
      p.setAttribute("class", "test2");
      checkbox.setAttribute("type", "checkbox");

      div.appendChild(div1);
      div1.appendChild(checkbox);
      div.appendChild(text);
      div.appendChild(p);
      p.appendChild(content);
      div.appendChild(div2);

      div.onclick = function() {
            modal1.style.display = "block";
            document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
            document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;
            document.getElementById("Edit_Add_Cont_Btn").onclick = function(){
              var index1 = AddItemArray.indexOf(div.childNodes[1].textContent);
              AddItemArray.splice(index1,1,document.getElementById("Edit_Add_Cont_Item").value);
              AddContentArray.splice(index1,1, document.getElementById("Edit_Add_Cont_Content").value);
              modal1.style.display = "none";
              div.childNodes[1].textContent = document.createTextNode(AddItemArray[index1]).textContent;
              div.childNodes[2].firstChild.textContent = document.createTextNode(AddContentArray[index1]).textContent;
          }
      }
      EditClose.onclick = function(){
        modal1.style.display = "none";
      }
       div1.onclick = function() {
         event.stopPropagation();
       }
      break;
      //화요일
    case "ATue":
      var text = document.createTextNode(AddItemArray[count]);
      var content = document.createTextNode(AddContentArray[count]);
      var div = document.createElement("DIV");
      var div1 = document.createElement("P");
      var div2 = document.createElement("DIV");
      var p = document.createElement("P");
      var checkbox = document.createElement("INPUT");
      div1.appendChild(checkbox);
      checkbox.setAttribute("type", "checkbox");

      document.getElementById("Tue_test").appendChild(div);
      div.setAttribute("class", "test_Tue");
      div1.setAttribute("class", "test1");
      p.setAttribute("class", "test2");
      div.appendChild(div1);
      div.appendChild(text);
      div.appendChild(p);
      p.appendChild(content);

      div.appendChild(div2);

      div.onclick = function() {
          modal1.style.display = "block";
          document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
          document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;
          document.getElementById("Edit_Add_Cont_Btn").onclick = function(){
            var index1 = AddItemArray.indexOf(div.childNodes[1].textContent);
            AddItemArray.splice(index1,1,document.getElementById("Edit_Add_Cont_Item").value);
            AddContentArray.splice(index1,1, document.getElementById("Edit_Add_Cont_Content").value);
            modal1.style.display = "none";
            div.childNodes[1].textContent = document.createTextNode(AddItemArray[index1]).textContent;
            div.childNodes[2].firstChild.textContent = document.createTextNode(AddContentArray[index1]).textContent;
          }
      }
      EditClose.onclick = function(){
        modal1.style.display = "none";
      }
      div1.onclick = function() {
        event.stopPropagation();
      }


      break;
      //수요일
    case "AWed":
      var text = document.createTextNode(AddItemArray[count]);
      var content = document.createTextNode(AddContentArray[count]);
      var div = document.createElement("DIV");
      var div1 = document.createElement("P");
      var div2 = document.createElement("DIV");
      var p = document.createElement("P");
      var checkbox = document.createElement("INPUT");
      div1.appendChild(checkbox);
      checkbox.setAttribute("type", "checkbox");

      document.getElementById("Wed_test").appendChild(div);
      div.setAttribute("class", "test_Wed");
      div1.setAttribute("class", "test1");
      p.setAttribute("class", "test2");

      div.appendChild(div1);
      div.appendChild(text);
      div.appendChild(p);
      p.appendChild(content);
      div.appendChild(div2);

      div.onclick = function() {
          modal1.style.display = "block";
          document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
          document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

          document.getElementById("Edit_Add_Cont_Btn").onclick = function(){
            var index1 = AddItemArray.indexOf(div.childNodes[1].textContent);
            AddItemArray.splice(index1,1,document.getElementById("Edit_Add_Cont_Item").value);
            AddContentArray.splice(index1,1, document.getElementById("Edit_Add_Cont_Content").value);
            modal1.style.display = "none";
            div.childNodes[1].textContent = document.createTextNode(AddItemArray[index1]).textContent;
            div.childNodes[2].firstChild.textContent = document.createTextNode(AddContentArray[index1]).textContent;
          }
      }
      EditClose.onclick = function(){
        modal1.style.display = "none";
      }
      div1.onclick = function() {
        event.stopPropagation();
      }
      break;
      //목요일
    case "AThu":
      var text = document.createTextNode(AddItemArray[count]);
      var content = document.createTextNode(AddContentArray[count]);
      var div = document.createElement("DIV");
      var div1 = document.createElement("P");
      var div2 = document.createElement("DIV");
      var p = document.createElement("P");
      var checkbox = document.createElement("INPUT");
      div1.appendChild(checkbox);
      checkbox.setAttribute("type", "checkbox");

      document.getElementById("Thu_test").appendChild(div);
      div.setAttribute("class", "test_Thu");
      div1.setAttribute("class", "test1");
      p.setAttribute("class", "test2");

      div.appendChild(div1);
      div.appendChild(text);
      div.appendChild(p);
      p.appendChild(content);
      div.appendChild(div2);

      div.onclick = function() {
          modal1.style.display = "block";
          document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
          document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

          document.getElementById("Edit_Add_Cont_Btn").onclick = function(){
            var index1 = AddItemArray.indexOf(div.childNodes[1].textContent);
            AddItemArray.splice(index1,1,document.getElementById("Edit_Add_Cont_Item").value);
            AddContentArray.splice(index1,1, document.getElementById("Edit_Add_Cont_Content").value);
            modal1.style.display = "none";
            div.childNodes[1].textContent = document.createTextNode(AddItemArray[index1]).textContent;
            div.childNodes[2].firstChild.textContent = document.createTextNode(AddContentArray[index1]).textContent;
          }
      }
      EditClose.onclick = function(){
        modal1.style.display = "none";
      }
      div1.onclick = function() {
        event.stopPropagation();
      }
      break;
      //금요일
    case "AFri":
      var text = document.createTextNode(AddItemArray[count]);
      var content = document.createTextNode(AddContentArray[count]);
      var div = document.createElement("DIV");
      var div1 = document.createElement("P");
      var div2 = document.createElement("DIV");
      var p = document.createElement("P");
      var checkbox = document.createElement("INPUT");
      div1.appendChild(checkbox);
      checkbox.setAttribute("type", "checkbox");

      document.getElementById("Fri_test").appendChild(div);
      div.setAttribute("class", "test_Fri");
      div1.setAttribute("class", "test1");
      p.setAttribute("class", "test2");
      div.appendChild(div1);
      div.appendChild(text);
      div.appendChild(p);
      p.appendChild(content);
      div.appendChild(div2);

      div.onclick = function() {
          modal1.style.display = "block";
          document.getElementById("Edit_Add_Cont_Item").value = div.childNodes[1].textContent;
          document.getElementById("Edit_Add_Cont_Content").value = div.childNodes[2].textContent;

          document.getElementById("Edit_Add_Cont_Btn").onclick = function(){
            var index1 = AddItemArray.indexOf(div.childNodes[1].textContent);
            AddItemArray.splice(index1,1,document.getElementById("Edit_Add_Cont_Item").value);
            AddContentArray.splice(index1,1, document.getElementById("Edit_Add_Cont_Content").value);
            modal1.style.display = "none";
            div.childNodes[1].textContent = document.createTextNode(AddItemArray[index1]).textContent;
            div.childNodes[2].firstChild.textContent = document.createTextNode(AddContentArray[index1]).textContent;
          }
      }
      EditClose.onclick = function(){
        modal1.style.display = "none";
      }
      div1.onclick = function() {
        event.stopPropagation();
      }
      break;
  }
  count++;
}
function searchItem(){
  if(document.getElementById("search_day").value=="Everyday"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      if(document.getElementById("Mon_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Mon_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      if(document.getElementById("Tue_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Tue_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      if(document.getElementById("Wed_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Wed_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      if(document.getElementById("Thu_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Thu_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      if(document.getElementById("Fri_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Fri_test").childNodes[i].style.display = "none";
      }
    }
  }
  //월요일
  else if(document.getElementById("search_day").value=="Mon"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      if(document.getElementById("Mon_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Mon_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      document.getElementById("Tue_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      document.getElementById("Wed_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      document.getElementById("Thu_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      document.getElementById("Fri_test").childNodes[i].style.display = "none";
    }
  }
  //화요일
  else if(document.getElementById("search_day").value=="Tue"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      document.getElementById("Mon_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      if(document.getElementById("Tue_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Tue_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      document.getElementById("Wed_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      document.getElementById("Thu_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      document.getElementById("Fri_test").childNodes[i].style.display = "none";
    }
  }
  //수요일
  else if(document.getElementById("search_day").value=="Wed"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      document.getElementById("Mon_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      document.getElementById("Tue_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      if(document.getElementById("Wed_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Wed_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      document.getElementById("Thu_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      document.getElementById("Fri_test").childNodes[i].style.display = "none";
    }
  }
  //목요일
  else if(document.getElementById("search_day").value=="Thu"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      document.getElementById("Mon_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      document.getElementById("Tue_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      document.getElementById("Wed_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      if(document.getElementById("Thu_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Thu_test").childNodes[i].style.display = "none";
      }
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      document.getElementById("Fri_test").childNodes[i].style.display = "none";
    }
  }
  //금요일
  else if(document.getElementById("search_day").value=="Fri"){
    for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
      document.getElementById("Mon_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
      document.getElementById("Tue_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
      document.getElementById("Wed_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
      document.getElementById("Thu_test").childNodes[i].style.display = "none";
    }
    for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
      if(document.getElementById("Fri_test").childNodes[i].childNodes[1].textContent!=document.getElementById("search_item").value){
        document.getElementById("Fri_test").childNodes[i].style.display = "none";
      }
    }
  }
}
function seachErase(){
  for(var i = 0;i < document.getElementById("Mon_test").childNodes.length ; i++){
    document.getElementById("Mon_test").childNodes[i].style.display = "block";
  }
  for(var i = 0;i < document.getElementById("Tue_test").childNodes.length ; i++){
    document.getElementById("Tue_test").childNodes[i].style.display = "block";
  }
  for(var i = 0;i < document.getElementById("Wed_test").childNodes.length ; i++){
    document.getElementById("Wed_test").childNodes[i].style.display = "block";
  }
  for(var i = 0;i < document.getElementById("Thu_test").childNodes.length ; i++){
    document.getElementById("Thu_test").childNodes[i].style.display = "block";
  }
  for(var i = 0;i < document.getElementById("Fri_test").childNodes.length ; i++){
    document.getElementById("Fri_test").childNodes[i].style.display = "block";
  }
}
$(document).ready(function () {
	$('#mainbar .divbar').sortable({
	   connectWith: '#mainbar .divbar',
     stop: function (event, ui) {
       if($(ui.item).parent().attr("id")=="Mon_test"){
         $(ui.item).attr('class','test_Mon');
       }
       else if($(ui.item).parent().attr("id")=="Tue_test"){
         $(ui.item).attr('class','test_Tue');
       }
       else if($(ui.item).parent().attr("id")=="Wed_test"){
         $(ui.item).attr('class','test_Wed');
       }
       else if($(ui.item).parent().attr("id")=="Thu_test"){
         $(ui.item).attr('class','test_Thu');
       }
       else if($(ui.item).parent().attr("id")=="Fri_test"){
         $(ui.item).attr('class','test_Fri');
       }
      }
	});
});
