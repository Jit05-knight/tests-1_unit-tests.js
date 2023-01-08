// Use #property or #notProperty where appropriate
test('#property, #notProperty', function() {
  assert.notProperty(myCar, 'wings', 'A car has not wings');
  assert.property(airlinePlane, 'engines', 'planes have engines');
  assert.property(myCar, 'wheels', 'Cars have wheels');
});
