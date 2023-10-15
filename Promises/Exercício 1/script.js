function soma(n1, n2) {
  let p = new Promise((resolve, reject) => {
    if ((n1 + n2) % 2 == 0) {
      resolve(`O resultado de ${n1} + ${n2} é um número par`);
    } else {
      reject(`O resultado de ${n1}+${n2} é um número ímpar`);
    }
  });

  p.then((data) => {
    console.log(data);
  }).catch((data) => {
    console.log(data);
  });
}

soma(2, 3);
