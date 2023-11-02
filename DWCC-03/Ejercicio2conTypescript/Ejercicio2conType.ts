

   // Obtener la fecha actual
   let hoy: Date = new Date();

 // Definir la fecha de final de curso (por ejemplo, el 25 de junio)
 let finalDeCurso: Date = new Date(2024, 5, 25); // Meses en JavaScript son indexados desde 0 (enero es 0)


function diasHastaFinalDeCurso(): number {

    // Calcular la diferencia en días
    //Math.ceil: para redondear hacia arriba
    let diasRestantes: number = Math.ceil((finalDeCurso.getTime() - hoy.getTime()) / (24 * 60 * 60 * 1000));
  

    return diasRestantes;
  }
  
  const diasRestantes: number = diasHastaFinalDeCurso();
  console.log("Días restantes hasta el final de curso: " + diasRestantes);
  