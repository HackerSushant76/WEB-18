var signindata=JSON.parse(localStorage.getItem('signInlist')) ;
  console.log(signindata)
   var user = document.querySelector('#user')

        if(signindata !== null){
    user.innerHTML= `<div>${signindata.userName} </div>
            <div><a href="cart.html">cart</a></div>`
  }