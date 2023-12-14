// Login
async function checkLogin(data){
    try{
        var myHeaders = new Headers();
        myHeaders.append("accept-language", "vi");
        myHeaders.append("accept", "application/json, text/plain, */*");
        myHeaders.append("content-type", "application/json");
        myHeaders.append("authorization", "Bearer undefined");
        var response = await fetch("https://api.tailieure.net/v1/auth/login",{
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect: 'follow'
        })
      
        return {...await response.text(), status: response.status}

    }catch(error){
        console.log(error);
    }
}

