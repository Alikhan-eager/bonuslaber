function checkOut(event){
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))

     // how to retrieve data using FormData
     let dannye = event.target;
     // we get form data here
     let formdata = new FormData(dannye)
 
     // turn it into readable object
     let form_data_obj = Object.fromEntries(formdata)
     
     if(form_data_obj.email == localStorage.getItem('email') && form_data_obj.password == localStorage.getItem('password') ){
      console.log("molodes")
      window.location = 'index.html';
      // open new index
     }else{
      alert("Error Password or Username") ; 
      //displays error message
     }
     event.preventDefault();
  }
  function login(event){
    event.preventDefault();

    let form = event.target;
    let formdata = new FormData (form);

    fetch('http://localhost/lab%207/login.php',{
        method:'post',
        body:formdata
    })
    .then(result=>{

        // if we want this data to be text
         return result.text()
         var x = result.text()
         
      
        // if we want this data to be JSON
        return result.json()
        
    })
    .then(final_result=>{
        console.log(final_result);
    })
}


  function onSubmit(event){
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if(password == cpassword){
    alert("Successfully")
    window.location = 'login.html';
    // how to retrieve data using FormData
    let dannye = event.target;
    // we get form data here
    let formdata = new FormData(dannye)

    // turn it into readable object
    let form_data_obj = Object.fromEntries(formdata)
    
    console.log(form_data_obj);

    //this to save email and password to localhost 
    localStorage.setItem('email', form_data_obj.email)
    localStorage.setItem('password',form_data_obj.password)
    localStorage.setItem('name',form_data_obj.full_name)

    }else{
      alert("Error Password") ; 
      //displays error message
    }
        // this is to prevent action from moving into new webpage
        event.preventDefault();
  }