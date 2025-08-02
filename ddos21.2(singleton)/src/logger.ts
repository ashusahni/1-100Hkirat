import { game } from "./store";


export const startLogger =()=>{
    setInterval(() => {
        console.log(game)
    }, 5000);
}