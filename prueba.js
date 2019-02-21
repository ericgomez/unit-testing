const saludar = nombre => `Hola ${nombre}`;

console.log(saludar('Platzi'));

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error('Prueba no existosa');
      }
    }
  };
}

function it(title, callback) {
  try {
    callback();
    console.log('Prueba exitosa');
  } catch (error) {
    console.error('Prueba no exitosa');
  }
}

it('La función saluda', () => {
  expect(saludar('Platzi')).toBe('Hola Platzi');
});
