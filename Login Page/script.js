function login(){
    let a = document.getElementById('Username').value;
    let b = document.getElementById('Password').value;
    if(a  && b){
        if(a === 'Oasis' && b === 'Oasis@1234'){
            alert('login success!!!!!!!');
        }else{
            alert('incorrect Username Or password.')
        }
    }else if(a){
        alert('Enter password');
    }else{
        alert('enter username');
    }
}