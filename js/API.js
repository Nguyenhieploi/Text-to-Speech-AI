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


async function userMe(){
    try{
        var tokenCookie = getCokkie("accessToken");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        myHeaders.append("authorization", "Bearer " + tokenCookie);
        
        var response = await fetch("https://api.tailieure.net/v1/users/me", {
            method: 'GET',
            headers: myHeaders,
        });

        return response.status;
    }catch(error){
        console.log(error);
    }
}
function getCokkie(name){
    var cookie = document.cookie;
    var listCookies = cookie.split(";")
    
    listCookies = listCookies.map(item=>item.trim()) // tạo mảng mới loại bỏ khoản trắng
    var cookieString = listCookies.find(e => {
        if(e.includes(name)){
            return true; 
        }
    })
   
    if (cookieString) {
        var getUser = cookieString.split("="); // chia chuỗi thành 1 mảng các chuỗi con
        return getUser[1];
    }
    
    return null;
   
}

async function register(raw){
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var response = await  fetch("https://api.tailieure.net/v1/audio/register",   
        {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        })

        return response.text();
    }catch(error){
        console.log(error);
    }
}