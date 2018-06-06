export default (method="GET",url,token)=> new Promise((resolve,reject)=>{
  const request = new XMLHttpRequest()
  request.open(method, url)
  request.setRequestHeader('Authorization',`Bearer ${token}`)
  request.onload= () =>{

       return resolve(JSON.parse(request.response))
  }
   
  request.onerror = (err) => {
     return reject(new Error(request.statusText))
  }
  request.send()
});
