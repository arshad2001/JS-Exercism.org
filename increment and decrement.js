/*
let birdsPerDay = [9, 0, 8, 4, 5, 1, 3];
function totalBirdCount(birdsPerDay) {
    let a = 0;
    for (let i=0; i<birdsPerDay.length; i++) {
        a = a+birdsPerDay[i]
    }
    console.log(a)
}

totalBirdCount(birdsPerDay);

/*
let nana = [2,2,2,2,2,2,2];
let week = 2;
function birdsInWeek(nana,week){
    let b = nana.length; //buat nambahin berapa kali, tapi fix 7 gasih? cuma mulai dari mana dia?
    let c = b/7; //1
    let x = 0; //0
    let y = (1 * 7) - 7;
    for (let i=y; i<c; i++) { 
        for (let j=b*i; j<b*(i+1); j++){ 
            x = x+nana[j]
        }
    }
    console.log(x)
}


/*
const nana = [2,2,2,2,2,2,2,3,3,3,3,3,3,3];//[0,1,2,...
var week = 1;
function birdsInWeek(nana,week){
    let x=0;//x=jumlah total sekarang
    var y = week * 7 - 7;
    for (let i=y; i<y+7; i++){
        x=x+nana[i]
    }
    console.log(x)
}


birdsInWeek(nana,week)


let birdsPerDay = [2, 5, 0, 7, 4, 1];
function fixBirdCountLog(birdsPerDay) {
    //totalin jumlah dgn syarat kalo ganjil dia diitung
    //-pilah yg urutan ganjil yg mana
    //j=i if (i++)%2
    //-totalin jumlah
    //x=0; x=x+birdsPerDay[j]
    let x=0;
    let j=0;
    for(let i=0; i<birdsPerDay.length; i++){
        if (i %2 === 0){
            j=i;
            x=x+birdsPerDay[j]
        }
    }
    console.log(x)
}

fixBirdCountLog(birdsPerDay)
*/

let birdsPerDay = [2, 5, 0, 7, 4, 1];
function fixBirdCountLog(birdsPerDay) {
    //Identify which numbers of the array needs to be spliced -> odd
    for(let i=0; i<birdsPerDay.length; i++){
        if (i %2 === 0){
            birdsPerDay.splice(i,1,(birdsPerDay[i]+1));
        }
    }
    console.log(birdsPerDay)
}
fixBirdCountLog(birdsPerDay)