var result = styleInput.split(';').reduce(function (ruleMap, ruleString) {
    var rulePair = ruleString.split(':');
    ruleMap[rulePair[0].trim()] = rulePair[1].trim();

    return ruleMap;
}, {});

