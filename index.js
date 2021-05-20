console.log('Hello ');
console.log('My name is Hamza Ali Qureshi ')
console.log('Welcome to JS'); 
       
        //Variable

       // var name = 'Hamza';
        //console.log(name);

        //var age = 11;
        //console.log(age);

       // var firstname = 'Hamza';
        //var lastname = 'Ali Qureshi'
       // var space = ' ';//for creating space
        //var age = 11;
       
        //console.log(firstname + space + lastname)// for profesionals
        console.log( 'My nationality is +' + nation )// for beginner  
        console.log( 'My city is + ' +  city)
        console.log( 'My area is + ' +  area)
        console.log( 'My age is + ' +  age)
        console.log( 'My hobbies is + ' + hobbies)
        console.log( 'My sport is + ' + sport)
        console.log( 'My game is + ' + game)
        console.log( 'My fruit is + ' + fruit)
        console.log( 'My food is + ' + food)

        var nation =prompt("What is your nationality?")
        document.getElementById('mynation').innerHTML=nation;

        var city =prompt("What is the name of your city?")
        document.getElementById('mycity').innerHTML=city;

        var area =prompt("What is the name of your area?")
        document.getElementById('myarea').innerHTML=area;

        var age =prompt("What is your age?")
        document.getElementById('myage').innerHTML=age;

        var hobbies =prompt("What are your hobbies?")
        document.getElementById('myhobbies').innerHTML=hobbies;

        var sport =prompt("What is your favourite sport?")
        document.getElementById('mysport').innerHTML=sport;

        var game =prompt("What is your favourite game?")
        document.getElementById('mygame').innerHTML=game;

        var fruit =prompt("What is your favourite fruit?")
        document.getElementById('myfruit').innerHTML=fruit;

        var food =prompt("What is your favourite food?")
        document.getElementById('myfood').innerHTML=food;