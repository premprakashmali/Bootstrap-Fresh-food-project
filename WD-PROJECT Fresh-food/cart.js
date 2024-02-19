let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




function value1(){

  let a =   document.getElementById("fix1").innerHTML = "100"
  let b = document.getElementById("input-1").value;

  tot = document.getElementById("total-value").value = a*b;
}

function value2(){

  let a =   document.getElementById("fix2").innerHTML = "100"
  let b = document.getElementById("input-2").value;

  tot1 = document.getElementById("total-value1").value = a*b;


}

function value3(){

  let a =   document.getElementById("fix3").innerHTML = "100"
  let b = document.getElementById("input-3").value;

  tot2 = document.getElementById("total-value2").value = a*b;


}


function carttotal(){

  let total = document.getElementById("total").value = tot + tot1 + tot2;
  document.getElementById("total").style.color = "red"


}

function plus(){

  let plus = document.getElementById("input-1").value;
  plus++;
  document.getElementById("input-1").value = plus
}
function minus(){

  let minus = document.getElementById("input-1").value;
  minus--;

  if(minus < 0){
  
  }
  else{

    document.getElementById("input-1").value = minus
  }

  
}




         function reset1(){

         document.getElementById("input-1").value = ""
         document.getElementById("total-value").value = ""
         
         }

         
         function reset2(){

          document.getElementById("input-2").value = ""
          document.getElementById("total-value1").value = ""
          
          }

          
         function reset3(){

          document.getElementById("input-3").value = ""
          document.getElementById("total-value2").value = ""
          
          }


