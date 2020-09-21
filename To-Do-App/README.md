PT-BR 

Este é outro projeto desenvolvido no curso de web developer de Colt Steele (Udemy). Trata-se de um tradicional To-Do App. O curso de Colt Steele utiliza JQuery para a parte do JavaScript. Embora não seja mais tão utilizado, eu optei por seguir o curso neste ponto para entender o funcionamento geral. 

O que aprendi na elaboração do To-Do App? Aprendi principalmente a importância de documentar bem o código. No início (abstratamente) a ideia de clean code e comentar o código não fazia tanto sentido já que ao ler uma função você consegue extrair o sentido através do código escrito. Entretanto, por conta da faculdade, eu precisei pausar o desenvolvimento do programa. Quando voltei, demorei mais tempo para me situar do que se houvesse comentado cada função especificamente. Também percebi a importância para decifrar códigos longos. 

Outros pontos que fiz "errado" em relação à correção: criei a lista como divs e não ul e li que seriam mais apropriados para uma lista (me fez entender que embora eu consiga o resultado desejado com divs, cada elemento do HTML tem uma função específica que poderá otimizar o processo). Alguns efeitos que fiz com JS e Colt Steele fez com CSS. 

Aprendi também sobre o bubbling principle de disparar a função de um elemento dentro de outro. Por exemplo: cliquei no span dentro da div e se os dois têm uma função associada ao clicar na span vou também disparar a div. Solução: function(event){event.stopPropagation()}. Assim, só a span será disparada. 

Algumas das considerações foram sinalizadas como comentários ao longo do código.

EN 

This is another project that was created due to Colt's Steele web developer bootcamp (Udemy). It is a well-known To-Do App. Colt's version of the project uses Jquery to create the JavaScript part. Although the course is slightly outdated in this, I chose to follow Colt's recommendation since I believe that this will provide me with a broader understanding of the use of frameworks/libraries in projects. 

What have I learned in the process of creating the To-Do App? The most important lesson was about the importance of well-documented code. I'm still not very familiar with the concepts of clean coding in practice and I struggled to think about some concepts in practice, such as the idea of commenting every function I wrote. I believed that the purpose of the function would be clear when reading the code itself, thus commentaries were unnecessary. However, due to my degree in law, I had to pause the project. When I resumed the project, it took me longer to figure out what I was doing than if I had commented each function. I also realized how commenting the code is helpful with long ones. 

Other mistakes I noticed when watching Colt's solution: I created the To-Do list as divs not as ul and li, which would be the elements suitable for a list. This helped me to understand that even if I can get the same results with divs, each HTML element has a specific purpose that can optimize the program. Furthermore, I wrote some of the transitions (such as the slide ones) with JavaScript instead of CSS as in the course. 

I also learned about the bubbling principle which states that "when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors". Colt's solution for the bubbling principle: function(event){event.stopPropagation()}. Thus, only the function of the child will be triggered.

Some of these differences between my version and Colt's were signaled on the code
