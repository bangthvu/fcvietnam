firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      
      document.getElementById("user-div").style.display = "block";
      document.getElementById("login-div").style.display = "none";
      
      
      var user = firebase.auth().currentUser;
      
      if(user !=null) {
          
          var email_id = user.email;
          
          document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      }
      
  } else {
    // No user is signed in.
      
      document.getElementById("user-div").style.display = "none";
      document.getElementById("login-div").style.display = "block";
  }
});


function login() {
    
    var userEmail = document.getElementById("email_felt").value;
    var userPass = document.getElementById("password_felt").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        
        window.alert("Error : " + errorMessage);
        
        // ...
});
    
}




function logout() {
    
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        
    }).catch(function(error) {
        // An error happened.
        

    });
}
















