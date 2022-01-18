const gerarVetor = (...vetor) => {return [...vetor]};

console.log(gerarVetor(1,3,2));

console.log(gerarVetor(1,'teste',2, 'teste'));

console.log(gerarVetor([1,2,3],1,2,3,'um','dois','tres'));