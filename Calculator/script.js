const result = document.getElementById('result');

document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('button').forEach(btn => {
            btn.textContent = btn.value;
      })
})

document.querySelectorAll('button').forEach(btn => {
      btn.onclick = function () {
            const val = btn.value.replace('x', '*');
            if (val === 'C') {
                  result.value = '';
            } else if (val === '=') {
                  calculate(result.value);
            } else {
                  add(val);
            }
      }
})

function calculate(value) {
      const calc = eval(value || null);
      if (isNaN(calc)) {
            result.value = "Syntax Error";
            setTimeout(() => {
                  result.value = "";
            }, 1500)
      } else {
            result.value = calc;
            const currentDate = new Date().toDateString();
            const textList = document.querySelectorAll('.list p');
            const length = textList.length;
            if (length >= 10) {
                  textList[0].remove();
            }
            const list = document.querySelector('.list');
            var text = document.createElement('p');
            text.textContent = '[' + currentDate + '] ' + value + " = " + calc;
            list.appendChild(text);

            const displayMsg = document.querySelector('.results p');
            if (displayMsg.style.display !== 'none') {
                  displayMsg.style.display = "none";
            }
      }
}

function add(value) {
      if (!result.value) {
            result.value = "";
      }
      result.value += value;
}

document.addEventListener("keydown", function (e) {
      e.preventDefault();
      const key = e.key;
      if (key === '+') {
            result.value += "+";
      } else if (key === '-') {
            result.value += '-';
      } else if (key === '*') {
            result.value += '*';
      } else if (key === '/') {
            result.value += '/';
      } else if (key === '.') {
            result.value += '.';
      } else if (key === "Enter") {
            calculate(result.value);
      } else if (key === "Backspace") {
            const resultInput = result.value;
            result.value = resultInput.substring(0, result.value.length - 1);
      } else {
            1
            if (!isNaN(key)) {
                  result.value += key;
            }
      }
})