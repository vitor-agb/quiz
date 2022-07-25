let currentQuestion = [0];
let correctAnswers = 0;
let userName = '';
let check = '';

document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

document.querySelectorAll('.theme').forEach(item => {
    item.addEventListener('mouseenter', () => {
        mouseItem = item.getAttribute('data-tema');
        item.querySelector('.theme_img img').setAttribute('src', `${mouseItem}c.png`);
        item.querySelector('.theme_info').style.bottom = '0px';
    }),
    item.addEventListener('mouseleave', () => {
        item.querySelector('.theme_img img').setAttribute('src', `${mouseItem}b.png`);
        item.querySelector('.theme_info').style.bottom = '-105px';
    })
});


document.querySelectorAll('.theme').forEach(item => {
    item.addEventListener('click', () => {
        theme = item.getAttribute('data-tema');
        if(theme === 'general') {
            theme = general;
            check = "general";
        } else if (theme === 'sports') {
            theme = sports;
            check = "sports";
        } else if (theme === 'artAndCulture') {
            theme = artAndCulture;
            check = "artAndCulture";
        }
        showQuestion();
        item.querySelector('.theme_img img').setAttribute('src', `${theme}b.png`);
    }); 
});



function inputKeyUp(e) {
    if (e.key === 'Enter') {
        userName = e.target.value;
        showTheme();
    }
};

document.querySelector('button').addEventListener('click', () => {
    userName = document.querySelector('input').value;
    showTheme();
    }
);

function showTheme() {
    document.querySelector('.nameArea').style.display = 'none';
    document.querySelector('.themeArea').style.display = 'block';
    document.querySelector('.themeArea h3').innerHTML = `Olá ${userName}, escolha um dos temas abaixo para começar.`;
};




    
function showQuestion() {
    if(theme[currentQuestion]) { 
        let q = theme[currentQuestion];
        let pct = Math.floor((currentQuestion / theme.length) * 100);
        document.querySelector('.progress_bar').style.width = `${pct}%`;
        document.querySelector('.progress_value').style.width = `${pct}%`;
        document.querySelector('.value').innerHTML = `${pct}%`;
        document.querySelector('.progress').style.display = 'flex';
        if( document.querySelector('.progress_value').style.width !== '0%') {
        document.querySelector('.value').style.display = 'flex';
        };
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.themes').style.display = 'none';
        document.querySelector('h3').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'flex';

        document.querySelector('.question').innerHTML = q.question;
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })  
 

    } else {
        finishQuiz();
        document.querySelector('.value').innerHTML = '100%';
        document.querySelector('.progress_value').style.width = '100%';
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(theme[currentQuestion].answer === clickedOption) { 
        e.target.style.backgroundColor = '#00FF00';
        correctAnswers++;
    } else {
        e.target.style.backgroundColor = '#FF0000';  
    }

    currentQuestion++;
    setTimeout(()=>{
        showQuestion()
    }, 500);
}

function finishQuiz() {
 //   userName = document.querySelector('input').value;
    let points = Math.floor((correctAnswers / theme.length) * 100);

    if (points < 30) {
        document.querySelector('.scoreText1').innerHTML = `Está ruim heim? ${userName}`;
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if (points >= 30 && points < 50) {
        document.querySelector('.scoreText1').innerHTML = `Abaixo da média ${userName},`;
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if (points >= 50 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = `Muito bom! ${userName}`;
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if (points >= 70) {
        document.querySelector('.scoreText1').innerHTML = `Ótimo desempenho ${userName}! Parabéns`;
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${theme.length} questões e acertou ${correctAnswers}.`;

    
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress_bar').style.width = `100%`;

    checked();
}

function checked() {
    if(correctAnswers === 10) {
        if(check === 'general') {
            document.querySelector('[data-tema="general"] .checked img').setAttribute('src', 'checkedc.png');
            document.querySelector('[data-tema="general"] .checked img').style.opacity = '1';
        }
        if(check === 'sports') {
            document.querySelector('[data-tema="sports"] .checked img').setAttribute('src', 'checkedc.png');
            document.querySelector('[data-tema="sports"] .checked img').style.opacity = '1';
        }  
        if(check === 'artAndCulture') {
            document.querySelector('[data-tema="artAndCulture"] .checked img').setAttribute('src', 'checkedc.png');
            document.querySelector('[data-tema="artAndCulture"] .checked img').style.opacity = '1';
        }    
    }
};

function resetEvent () {
    correctAnswers = 0;
    currentQuestion = 0;
    document.querySelector('.themes').style.display = 'flex';
    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.progress').style.display = 'none';
    document.querySelector('.value').style.display = 'none';
}