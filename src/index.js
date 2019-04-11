const cnInit = styleName => {
  const getValue = key => {
    const value = styleName[key];
    if (!value) throw new Error(`".${key}" is not exist`);
    return value;
  };

  return (...list) => {
    return list
      .reduce((acc, cur) => {
        const classNames = cur.trim().split(/ +|, ?/),
          [classNameFirst, classNameSecond] = classNames;

        const className = !classNameSecond
          ? getValue(classNameFirst)
          : classNames
              .reduce(
                (classAcc, classCur) => `${classAcc} ${getValue(classCur)}`,
                ""
              )
              .trim();

        return `${acc} ${className}`;
      }, "")
      .trim();
  };
};

export default cnInit;
