function introduction(Aki) {
    return "Hi, my name is " + Aki + ".";
  }
 
  function introductionWithLanguage(Aki, Ember_js) {
    return "Hi, my name is " + Aki + " and I am learning to program in " + Ember_js + ".";
  };

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
  }

