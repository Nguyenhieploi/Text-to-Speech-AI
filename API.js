// Login
async function loginUser(data){
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
      
        return response.text();

    }catch(error){
        console.log(error);
    }
}

async function textToSpeech(data, getToken) {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Kiểm tra xem getToken có giá trị không trước khi thêm vào header
        if (getToken) {
            myHeaders.append("authorization", "Bearer " + getToken);
        }

        var response = await fetch("https://api.tailieure.net/v1/audio/text-to-speech", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
        });

        return response.text();
    } catch (error) {
        console.log(error);
    }
}


