let xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/users');

xhr.send();


xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(this.responseText)[0].id );
        console.log(JSON.parse(this.responseText)[0].name );
        console.log(JSON.parse(this.responseText)[0].email );
        console.log(JSON.parse(this.responseText)[0].address.city );

        document.getElementById('name').innerHTML = JSON.parse(this.responseText)[0].name
        document.getElementById('email').innerHTML = JSON.parse(this.responseText)[0].email
        document.getElementById('city').innerHTML = JSON.parse(this.responseText)[0].address.city
    }
}