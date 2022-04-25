export const findDuplicatesInArray = (array) => {
  return array.filter(
    (
      (s) => (v) =>
        s.has(v) || !s.add(v)
    )(new Set())
  );
};
