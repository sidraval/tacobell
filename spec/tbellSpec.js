describe("TBApp", function() {
  it("should define a TB object on the global namespace", function() {
    expect(TB).toBeDefined();
  });

  it("should keep track of preword, prefix, suffix, and postword", function() {
    expect(TB.currentWords.preword).toBeTruthy();
    expect(TB.currentWords.prefix).toBeTruthy();
    expect(TB.currentWords.suffix).toBeTruthy();
    expect(TB.currentWords.postword).toBeTruthy();
  });

  describe("#newWord", function() {
    it("should randomly choose a new prefix", function() {
      for(var i = 0; i < 300; i++) {
        var oldPrefix = TB.currentWords.prefix;
        TB.newWord('prefix');
        expect(TB.currentWords.prefix).not.toEqual(oldPrefix);
      };
    });

    it("should randomly choose a new postword", function() {
      for(var i = 0; i < 300; i++) {
        var oldpostword = TB.currentWords.postword;
        TB.newWord('postword');
        expect(TB.currentWords.postword).not.toEqual(oldpostword);
      };
    });

    it("should randomly choose a new preword", function() {
      for(var i = 0; i < 300; i++) {
        var oldpreword = TB.currentWords.preword;
        TB.newWord('preword');
        expect(TB.currentWords.preword).not.toEqual(oldpreword);
      };
    });
    
    it("should randomly choose a new suffix", function() {
      for(var i = 0; i < 300; i++) {
        var oldsuffix = TB.currentWords.suffix;
        TB.newWord('suffix');
        expect(TB.currentWords.suffix).not.toEqual(oldsuffix);
      };
    });
  });

  describe("::UI.initialize", function() {
    it("should delegate click handlers to list items nested under the provided css selector", function() {
      var jQuery = { on: jasmine.createSpy('on') };
      $ = jasmine.createSpy('$').and.returnValue(jQuery);
      TB.UI.initialize("#selector");

      expect($).toHaveBeenCalled();
      expect(jQuery.on).toHaveBeenCalledWith("click", "li", jasmine.any(Function));
    });
  });
});
