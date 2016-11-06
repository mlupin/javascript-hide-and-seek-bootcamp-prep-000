function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');
   for (var i = 0; i < rankedLists.length; i++) {
     var listItem = rankedLists[i].children;

     for (var j = 0; j < listItem.length; j++) {
       listItem[j].innerHTML = parseInt(listItem[j].innerHTML) + n;
     }
   }
}

function deepestChild() {
  return document.querySelector('div#grand-node');
}
