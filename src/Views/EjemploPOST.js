fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body:JSON.stringify({
        title: 'ANODO',
        body:'asterisco',
        userId:1
    }),
    headers:{
        "Content-type":"application/json"
    }
})
const data=await response.json();
console.log(data);

