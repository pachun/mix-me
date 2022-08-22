const intentionallyIncludes = (text: string, keyword: string): boolean => {
  const matchesKeywordCaseInsensitively = new RegExp("^" + keyword + "$", "i")
  const intentionallyBeginsWithKeywordCaseInsensitively = new RegExp(
    "^" + keyword + "[^A-Z].*$",
    "i",
  )
  const intentionallyIncludesKeywordCaseInsensitively = new RegExp(
    "[^A-Z]" + keyword + "[^A-Z]",
    "i",
  )
  const intentionallyEndsWithKeywordCaseInsensitively = new RegExp(
    "^.*[^A-Z]" + keyword + "$",
    "i",
  )

  const possibleKeywordInclusions = [
    matchesKeywordCaseInsensitively,
    intentionallyBeginsWithKeywordCaseInsensitively,
    intentionallyIncludesKeywordCaseInsensitively,
    intentionallyEndsWithKeywordCaseInsensitively,
  ]

  return possibleKeywordInclusions.some(possibleKeywordInclusion =>
    possibleKeywordInclusion.test(text),
  )
}

export default intentionallyIncludes
