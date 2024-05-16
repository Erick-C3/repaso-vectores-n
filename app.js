function main() {
    const numeros = [1,2,3,4,5];

    for (let i = 0; i < numeros.length; i++) {
        process.stdout.write(  "\t\t("+String(  numeros[ i ]  ) + ")\n"  );
    }
    
}

main();