export const classNames = (...classNames: string[]) => {
  return classNames.filter((name) => name).join(' ');
};
