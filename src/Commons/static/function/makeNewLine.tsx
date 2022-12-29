export const makeNewLine = (targetStr: string) => {
  return targetStr.split('\n').map((str: string, index) => {
    return (
      <span key={index}>
        {str}
        <br />
      </span>
    );
  });
};