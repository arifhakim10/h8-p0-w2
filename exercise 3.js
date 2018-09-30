var gameProfile= 'ronaldo';
var gameCharacter= 'witch';

if (gameProfile === '' && gameCharacter === ''){
console.log('Nama harus diisi!');
}
  else if (gameProfile === 'Andy'){
  console.log('halo'+ gameCharacter + 'piih peranmu untuk memulai game!');
} 
  else if (gameProfile === 'Arif' && gameCharacter === 'warrior'){
  console.log('Selamat datang di Dunia Proxytia, ' + gameProfile);
  console.log('halo ' + gameCharacter +' '+ gameProfile + ' ,kamu dapat menyerang dengan senjatamu!');
}

  else if (gameProfile === 'danu' && gameCharacter === 'doctor'){
  console.log('Selamat datang di Dunia Proxytia, ' + gameProfile);
  console.log('halo ' + gameCharacter +' '+ gameProfile +' ,kamu akan membantu temanmu yang terluka.');
}
  else if (gameProfile === 'ronaldo' && gameCharacter === 'witch'){
  console.log('Selamat datang di Dunia Proxytia, ' + gameProfile);
  console.log('halo ' + gameCharacter +' '+ gameProfile + ' ,ciptakan keajaiban yang membantu kemenanganmu!');
}
