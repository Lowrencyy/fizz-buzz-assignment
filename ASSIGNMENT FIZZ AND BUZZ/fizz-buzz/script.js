for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('fizz');
    continue;
  }

  if (i % 5 === 0) {
    console.log('buzz');
  }

  if (i % 15 === 0 ) {
    console.log('fizz buzz');
  }
  console.log(i);
}



