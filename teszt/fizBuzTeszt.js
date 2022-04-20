QUnit.module('fizBuz', function() {
    QUnit.test('a fizbuz függvény létezik-e?', function(assert) {
      assert.ok(fizbuz, "létezik a fizzbuzz");
    });
    QUnit.test('a fizbuz függvény-e?', function(assert) {
      assert.ok(typeof fizbuz==="function", "a fizzbuzz fv");
    });
    QUnit.test('üres sorozat(0)', function(assert) {
      assert.equal(fizbuz(0),"");
    });
    QUnit.test('n = 1', function(assert) {
      assert.equal(fizbuz(1),"1");
    });
    QUnit.test('n = 2', function(assert) {
      assert.equal(fizbuz(2),"1, 2");
    });
    QUnit.test('n = 3', function(assert) {
      assert.equal(fizbuz(3),"1, 2, fizz");
    });
    QUnit.test('n = 4', function(assert) {
      assert.equal(fizbuz(4),"1, 2, fizz, 4");
    });
    QUnit.test('n = 5', function(assert) {
      assert.equal(fizbuz(5),"1, 2, fizz, 4, buzz");
    });
    QUnit.test('n = 6', function(assert) {
      assert.equal(fizbuz(6),"1, 2, fizz, 4, buzz, fizz");
    });
  });