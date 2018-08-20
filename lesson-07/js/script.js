let openBtn = document.getElementById('open-btn'),
	shopNameValue = document.getElementsByClassName('name-value')[0],
	budget = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	empValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isOpenValue = document.getElementsByClassName('isopen-value')[0],
	goodsItems = document.getElementsByClassName('goods-item'),
	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	empBtn = document.getElementsByTagName('button')[3],
	chooseItems = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudget = document.querySelector('.count-budget-value'),
	hireEmp = document.querySelectorAll('.hire-employers-item');


let monthBudget,
    shopName,
    price;
goodsBtn.disabled = true;    
empBtn.disabled = true;

openBtn.addEventListener('click', () => {
        monthBudget = prompt("Ваш бюджет на месяц", "50000");

        while(isNaN(monthBudget) ||  monthBudget == '' || monthBudget == null) {
            monthBudget = prompt("Ваш бюджет на месяц", "50000");
        };
        budget.textContent = monthBudget;
        shopNameValue.textContent = prompt("Название вашего магазина", "FunnyShop").toUpperCase();    
        discountSystem();
        
        // if(timeValue.value == ''){
        //     goodsBtn.disabled = true;
        //     budgetBtn.disabled = true;
        //     empBtn.disabled = true;
        //     alert('Введите сколько сейчас время');
        // }
});   


goodsItems[0].addEventListener('change', () => {
    goodsBtn.disabled = false;  
});
goodsItems[1].addEventListener('change', () => {
    goodsBtn.disabled = false;  
});
goodsItems[2].addEventListener('change', () => {
    goodsBtn.disabled = false;  
});
goodsItems[3].addEventListener('change', () => {
    goodsBtn.disabled = false;  
});

goodsBtn.addEventListener('click', () => {
    for (let i = 0; i < goodsItems.length; i++) {

        let a = goodsItems[i].value;
        
        if ((typeof(a)) === 'string' && typeof(a) != null && a.length < 50) {
            console.log('All is okey');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        }  
        goodsItems[i].addEventListener('change', () => {
            goodsBtn.disabled = false;  
        });
    }
    
});

chooseItems.addEventListener('change', () => {
        let items = chooseItems.value;

        if (isNaN(items) && items != '') {
            mainList.shopItems = items.split(',');
            mainList.shopItems.sort();

            itemsValue.textContent = mainList.shopItems;
        }  
});

timeValue.addEventListener('change', () => {
    let time = timeValue.value;

    if (time < 0) {
        console.log('Impossible');
        mainList.open = false;
    } else if (time > 8 && time < 20) {
        console.log('Time to work');
        mainList.open = true;
        } else if (time < 24) {
            console.log('Its too late');
            mainList.open = false;
            } else {
                console.log('There are only 24 hours in a day!');
                mainList.open = false;
            };

    if( mainList.open == true){
        isOpenValue.style.backgroundColor = 'green';
        budgetBtn.disabled = false;
        alert('Buttons are Enabled');
    } else {
        isOpenValue.style.backgroundColor = 'red';
        goodsBtn.disabled = true;
        budgetBtn.disabled = true;
        empBtn.disabled = true;
        alert('Buttons are Disabled');
    }
});

budgetBtn.addEventListener('click', () => {
    countBudget.value = Math.round(monthBudget/30);
});


hireEmp[0].addEventListener('change', () => {
    empBtn.disabled = false;  
});
hireEmp[1].addEventListener('change', () => {
    empBtn.disabled = false;  
});
hireEmp[2].addEventListener('change', () => {
    empBtn.disabled = false;  
});


empBtn.addEventListener('click', () => {
    for (let i = 0; i < hireEmp.length; i++) {
        let empName = hireEmp[i].value;
        // if(hireEmp == s ){
        //     empBtn.disabled = true;
        // } else {
        //     empBtn.disabled = false;
        // }
        mainList.employers[i] = ' ' + empName;

        empValue.textContent += mainList.employers[i] + ',';
    }
});
function proverka(countBudget) {
    countBudget.value = countBudget.value.replace(/[^\d]/g, '');
};

function discountSystem(){
    if(Number(monthBudget) < 1000){
        discountValue.textContent = ('Нет скидки');
        discountValue.style.backgroundColor = 'red';
    } else if(Number(monthBudget) >= 1000 && Number(monthBudget) < 10000){
            discountValue.textContent = ('Скидка для вас составляет 10%');
            discountValue.style.backgroundColor = '#6298ef';
        } else if(Number(monthBudget) >= 10000){
                discountValue.textContent = ('Скидка для вас составляет 20%');
                discountValue.style.backgroundColor = '#6298ef';
            }
}

const mainList = {
    monthBudget,
    shopName,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
};




console.log(mainList);



