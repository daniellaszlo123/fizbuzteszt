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
    QUnit.test('sem 3-mal sem 5-tel nem osztható számok 15-ig', function(assert) {
      let semHarommalSemOttel=[1, 2, 4, 7, 8, 11, 13];
      semHarommalSemOttel.forEach(function (elem) {
        assert.equal(aktErtek(elem),elem);
      })
    });
    QUnit.test('3-mal osztható de 5-tel nem osztható számok 15-ig', function(assert) {
      let harommalOszthatoak=[3, 6, 9, 12];
      harommalOszthatoak.forEach(function (elem) {
        assert.equal(aktErtek(elem),"fizz");
      })
    });
    QUnit.test('5-tel osztható de 3-mal nem osztható számok 15-ig', function(assert) {
      let ottelOszthatoak=[5, 10];
      ottelOszthatoak.forEach(function (elem) {
        assert.equal(aktErtek(elem),"buzz");
      })
    });
    QUnit.test('n = 15 aktErtek fv', function(assert) {
      assert.equal(aktErtek(15),"fizzbuzz");
    });
    QUnit.test('n = 15 fizbuzz fv', function(assert) {
      assert.equal(fizbuz(15),"1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz");
    });    
  });