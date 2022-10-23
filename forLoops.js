let birdsPerDay = [9, 0, 8, 4, 5, 1, 3];
function totalBirdCount(birdsPerDay) {
    let a = 0;
    for (let i=0; i<birdsPerDay.length; i++) {
        a = a+birdsPerDay[i]
    }
    console.log(a)
}