let xhr = new XMLHttpRequest()

xhr.open('GET','https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(this.responseText)[0].name);
        console.log(JSON.parse(this.responseText)[0].email);
        console.log(JSON.parse(this.responseText)[0].address.city);

        let tr = '<tr>';

        tr+= '<td>' + JSON.parse(this.responseText)[0].name + '</td>'
        tr+= '<td>' + JSON.parse(this.responseText)[0].email + '</td>'
        tr+= '<td>' + JSON.parse(this.responseText)[0].address.city + '</td>'

        tr += '</tr>';

        console.log(tr);

        document.getElementById('table-body').innerHTML = tr;

        users = JSON.parse(this.responseText);

        let li = '';
        for (let i = 0; i < users.length; i++) {
            li += '<li>'+users[i].name+ ' - ' + users[i].email +'</li>';
        }
        document.getElementById('demo').innerHTML = li;

    }
}