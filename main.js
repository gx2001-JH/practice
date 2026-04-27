document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lotto-container');
  const button = document.getElementById('generate-btn');

  function getColorClass(number) {
    if (number <= 10) return 'yellow';
    if (number <= 20) return 'blue';
    if (number <= 30) return 'red';
    if (number <= 40) return 'gray';
    return 'green';
  }

  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  function renderNumbers() {
    container.innerHTML = '';
    const numbers = generateLottoNumbers();

    numbers.forEach((num, index) => {
      setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = `ball ${getColorClass(num)}`;
        ball.textContent = num;
        container.appendChild(ball);
      }, index * 100); // 0.1초 간격으로 공이 나타나도록 애니메이션 효과
    });
  }

  button.addEventListener('click', renderNumbers);
});
