
const gradeRubric = grade => {
    if (grade >= 5 && grade <= 11) {
        console.log('Pass Status:' ,true);
    } else if (grade >=0 && grade <5) {
        console.log('Pass Status:' ,false);
    }

    if (grade === 11) {
        console.log('Perfect');
    } else if (grade > 8 && grade <11) {
        console.log('Excellent');
    }
}

gradeRubric(9);