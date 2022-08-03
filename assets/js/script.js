
	
	alert("Piedra, Papel o Tijeras")

    //veces que se repetirá el juego
    let juegos = parseInt(prompt("Indica cuantas veces te gustaría jugar"))

    //variables de alamacenamiento segun estado del juego
    let ganada = 0;
    let perdida = 0;
    let empate = 0;
    
    //numero de veces que se jugara segun lo indicado en 'juegos'
    for (let i = 0; i < juegos; i++) {
        //variable de la jugada del usuario
        let jugada = parseInt(prompt("Ingresa el Numero de la jugada que deseas efectuar: 1-Piedra | 2-Papel | 3.-Tijera"));

        //variables que se le asignará un string
        let jugada_computer;
        let jugada_usuario;
		let estatus;
        //asigna un numero entero al azar del 0 al 2
        let computer = Math.floor(Math.random() * 3);


        //convierte jugada de computadora de number a string
        if (computer == 0) {
            jugada_computer = "Piedra"
        } else if (computer == 1) {
            jugada_computer = "Papel"
        } else if (computer == 2) {
            jugada_computer = "Tijera"
        }
        //convierte jugada de usuario de number a string
        if (jugada == 1) {
            jugada_usuario = "Piedra"
        } else if (jugada == 2) {
            jugada_usuario = "Papel"
        } else if (jugada == 3) {
            jugada_usuario = "Tijera"
        }
        //compara ambas jugadas e indica el resultado final
		switch (jugada){
		case 1://piedra
		      if (jugada_computer=="Piedra"){
				empate += 1;
				 estatus = "Empate";
			  }else if (jugada_computer=="Papel"){
				 perdida += 1;
				 estatus = "punto para el computador, damn"; 
				  
				  
			  }else if (jugada_computer=="Tijera"){
				 ganada += 1;
				 estatus = "Punto para el Usuario, yujuu"; 
							  
			  }
				break;
		case 2://papel
		      if (jugada_computer=="Piedra"){
					 ganada += 1;
				 estatus = "Punto para el Usuario, yujuu"; 
			  }else if (jugada_computer=="Papel"){
				 empate += 1;
				 estatus = "Empate";
				  
				  
			  }else if (jugada_computer=="Tijera"){
				  perdida += 1;
				 estatus = "punto para el computador, damn"; 
							  
			  }
				break; 
		case 3://tijera
		      if (jugada_computer=="Piedra"){
					 perdida += 1;
				 estatus = "punto para el computador, damn"; 
			  }else if (jugada_computer=="Papel"){
				 ganada += 1;
				 estatus = "Punto para el Usuario, yujuu"; 
				  
			  }else if (jugada_computer=="Tijera"){
				  empate += 1;
				 estatus = "Empate";
							  
			  }
				break ;

		}



				 alert(`Tu jugaste ${jugada_usuario} y la computadora jugó ${jugada_computer}. Por ende, es un ${estatus} `);
		
		
		
		
		
        
    }

    //indica el resumen del juego
    alert(`Ganaste ${ganada} veces, perdiste ${perdida} veces y empataste ${empate} veces.`);

    //indica el ganador de la ronda
    if (ganada> perdida) {
        alert("¡Felicidades, ganaste!")
    } else if (ganada < perdida) {
        alert("Lo siento, perdiste.")
    } else if (ganada == perdida) {
        alert("Esta ronda fue un empate...")
    }
	
	
	
