document.addEventListener('DOMContentLoaded', function(){
    let passwords = document.querySelectorAll('.show');
    let checkbox = document.querySelector('#checkbox');
    console.log(passwords.length);
    checkbox.addEventListener('click', function(){
        for (password of passwords) {
            if (password.type == "password"){
                password.type = "text";
            }

            else{
                password.type = "password";
            }
        }
    });
});