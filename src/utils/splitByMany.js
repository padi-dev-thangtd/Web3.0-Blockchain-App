export function splitByMany(manyArgs, string) {
  do {
    let arg = manyArgs.pop();
    string = string.replace(arg, manyArgs[0]);
  } while (manyArgs.length > 2);
  return string.split(manyArgs[0]);
}
