const tabs = document.getElementsByClassName('tab');
const categories = document.getElementsByClassName('category');

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        for(let x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove('tab-selected')
        }
        tabs[i].classList.add('tab-selected');
        for(let j = 0; j < categories.length; j++) {
            categories[j].style.backgroundImage = "url('"+tabs_arr[i][j].image+"'";
            categories[j].children[0].innerHTML = tabs_arr[i][j].name;
        }
    });
}

let currentTab = 0;

function changeTab() {
    tabs[currentTab].click();
    currentTab++;
    if(currentTab > 5) currentTab = 0;
}

//const intervalID = setInterval(changeTab, 3000);

const tabs_arr = {
    0: {
        0: {
            'name': 'беговая дорожка',
            'image': 'categories/1.png'
        },
        1: {
            'name': 'орбитек',
            'image': 'categories/2.png'
        },
        2: {
            'name': 'степер',
            'image': 'categories/3.png'
        },
        3: {
            'name': 'бабочка',
            'image': 'categories/4.png'
        },
        4: {
            'name': 'смита',
            'image': 'categories/5.png'
        },
        5: {
            'name': 'гравитрон',
            'image': 'categories/6.png'
        },
    },
    1: {
        0: {
            'name': 'трицепса',
            'image': 'categories/7.png'
        },
        1: {
            'name': 'комплексная',
            'image': 'categories/8.png'
        },
        2: {
            'name': 'детская',
            'image': 'categories/9.png'
        },
        3: {
            'name': 'спинная',
            'image': 'categories/10.png'
        },
        4: {
            'name': 'вис',
            'image': 'categories/11.png'
        },
        5: {
            'name': 'групповая',
            'image': 'categories/12.png'
        },
    },
    2: {
        0: {
            'name': 'одиночная',
            'image': 'categories/13.png'
        },
        1: {
            'name': 'групповая',
            'image': 'categories/14.png'
        },
        2: {
            'name': 'прана',
            'image': 'categories/15.png'
        },
        3: {
            'name': 'парная',
            'image': 'categories/16.png'
        },
        4: {
            'name': 'капха доша',
            'image': 'categories/17.png'
        },
        5: {
            'name': 'онлайн',
            'image': 'categories/18.png'
        },
    },
    3: {
        0: {
            'name': 'трусцой',
            'image': 'categories/19.png'
        },
        1: {
            'name': 'челночный',
            'image': 'categories/20.png'
        },
        2: {
            'name': 'стайерский',
            'image': 'categories/21.png'
        },
        3: {
            'name': 'часовой',
            'image': 'categories/22.png'
        },
        4: {
            'name': 'спинной',
            'image': 'categories/23.png'
        },
        5: {
            'name': 'чи-бег',
            'image': 'categories/24.png'
        },
    },
    4: {
        0: {
            'name': 'безэкипировочный',
            'image': 'categories/25.png'
        },
        1: {
            'name': 'экипировочный',
            'image': 'categories/26.png'
        },
        2: {
            'name': 'стоячный',
            'image': 'categories/27.png'
        },
        3: {
            'name': 'экипировка',
            'image': 'categories/28.png'
        },
        4: {
            'name': 'травма',
            'image': 'categories/29.png'
        },
        5: {
            'name': 'тренеры',
            'image': 'categories/30.png'
        },
    },
    5: {
        0: {
            'name': 'у стены',
            'image': 'categories/31.png'
        },
        1: {
            'name': 'от колен',
            'image': 'categories/32.png'
        },
        2: {
            'name': 'от скамьи',
            'image': 'categories/33.png'
        },
        3: {
            'name': 'с упорами',
            'image': 'categories/34.png'
        },
        4: {
            'name': 'от пола',
            'image': 'categories/35.png'
        },
        5: {
            'name': 'на одной руке',
            'image': 'categories/36.png'
        },
    }
};