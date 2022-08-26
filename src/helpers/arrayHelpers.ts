export const intersection = <T>(list1: T[], list2: T[]): T[] =>
  list1.filter(list1Item => list2.includes(list1Item))

export const hasIntersection = <T>(list1: T[], list2: T[]): boolean =>
  intersection(list1, list2).length > 0

export const union = <T>(list1: T[], list2: T[]): T[] => [
  ...new Set([...list1, ...list2]),
]

export const unique = (value: string, index: number, list: string[]) =>
  list.indexOf(value) === index
