window.onload = function(){


    document.getElementById('add').onclick = function() {

      var text = document.getElementById('input').value;
      text = document.createTextNode(text);

      var li = document.createElement("LI");

      li.appendChild(text);
      document.getElementById("list").appendChild(li);
    };

    document.getElementById('nu').onclick = function() {
    var plus = document.getElementById('number').innerHTML;
    // parseInt = strings into var which becomes an interger
    var enter = parseInt(plus);
    // alot like "enter = +1" but shorter
    enter++;
    document.getElementById('number').innerHTML = enter;
    }

    document.getElementById('num').onclick = function() {
    var plus = document.getElementById('number').innerHTML;
    var enter = parseInt(plus);
    enter--;
    document.getElementById('number').innerHTML = enter;
    }
  };
