test('Prueba básica para verificar contenido', () => {
    const html = '<h1>¡Hola Mundo!</h1>';
    expect(html).toContain('¡Hola Mundo!');
});
