// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]

const hasLetterQ = match(/q/i);
const filterQs = filter(hasLetterQ);

// The solution is equivalent to the following
// const hasLetterQ = x => x.match(/q/i);
// filterQs = (xs) => xs.filter(hasLetterQ)
