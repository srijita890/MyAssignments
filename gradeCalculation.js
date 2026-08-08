function gradeCalculation(score){
    switch (true) {
        case (score >= 90):
            console.log('Grade A')
            break;
        case (score >= 80):
            console.log('Grade B')
            break;
        case (score >= 70):
            console.log('Grade C')
            break;
        case (score >= 60):
            console.log('PASS')
            break;
        default:
            console.log('FAIL')
            break;
    }

}

let score= 85
console.log('Score is '+ score)
gradeCalculation(score)