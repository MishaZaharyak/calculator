(function() {

let numbers = document.getElementsByClassName('number');
let operations = document.getElementsByClassName('operation');
let clearBtns = document.getElementsByClassName('clearBtn');
let decimalBtn = document.getElementById('decimal');
let resultBtn = document.getElementById('result');
let display = document.getElementById('display');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = ''; 

for (let i = 0; i < numbers.length; i++) {
	let number = numbers[i];
	number.addEventListener('click', function (el) {
		numberPress(el.target.textContent);
	});
};

for (let i = 0; i < operations.length; i++) {
	let operationBtn = operations[i];
	operationBtn.addEventListener('click', function (el) {
		operation(el.target.textContent);
	});
};

for (let i = 0; i < clearBtns.length; i++) {
	let clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', function (el) {
	clear(el.srcElement.id);
	});
};

decimalBtn.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);

function numberPress(content) {

	if (memoryNewNumber) {
		display.value = content;
		memoryNewNumber = false;
	} else {
		if (display.value === '0') {
		display.value = content;
		} else {
		display.value += content;
		};	
	};
	
};

function operation(op) {

	let localOperationMemory = display.value;
	if (memoryNewNumber && memoryPendingOperation !== '=') {
		//display.value = memoryCurrentNumber;
	} else {
		memoryNewNumber = true;
		if (memoryPendingOperation === '+') {
			memoryCurrentNumber += parseFloat(localOperationMemory);
		} else if (memoryPendingOperation === '-') {
			memoryCurrentNumber -= parseFloat(localOperationMemory);
		} else if (memoryPendingOperation === '÷') {
			memoryCurrentNumber /= parseFloat(localOperationMemory);
		} else if (memoryPendingOperation === '×') {
			memoryCurrentNumber *= parseFloat(localOperationMemory);
		} else {
			memoryCurrentNumber = parseFloat(localOperationMemory);
		};
		display.value = memoryCurrentNumber;
		memoryPendingOperation = op;
	};
};

function decimal(argument) {

	let localDecimalMemory = display.value;
	if (memoryNewNumber) {
		localDecimalMemory = '0.';
		memoryNewNumber = false;
	} else {
		if (localDecimalMemory.indexOf('.') ===- 1) {
		localDecimalMemory += '.';
	    };
	};
	display.value = localDecimalMemory;
};

function clear(id) {

	if (id === 'ce') {
		display.value = '0';
		memoryNewNumber = true;
	} else if (id === 'c') {
		display.value = '0';
		memoryNewNumber = true;
		memoryCurrentNumber = 0;
		memoryPendingOperation = '';
	};
};
})();


