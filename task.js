
// task 3
const subjectMath = +prompt('Введите количество баллов по математике:');
const subjectRuslang = +prompt('Введите количество баллов по русскому языку:');
const subjectIt = +prompt('Введите кол-во баллов по информатике:');

const totalPoint = subjectMath + subjectRuslang + subjectIt;

if(totalPoint > 265 || totalSum === 265) {
    alert('Вы поступили на бюджет,поздравляем!');
}
else {
    totalPoint < 265;
    alert('Жаль, вы не прошли на бюджет. Попробуйте подучить материал.')
};

// task 4

const money = +prompt('Какую сумму Вы хотите снять?');
    alert(money >=100 ? 'Сумма готова к выдаче' : "Сожалем, банкомат не выдает такую сумму");
