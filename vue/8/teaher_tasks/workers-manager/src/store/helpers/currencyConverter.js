export function convertSalary(workersList, currencyRate) {
  if (!currencyRate || currencyRate === 1) return workersList
  else {
    return workersList.map((w) => ({
      ...w,
      salary: w.salary / currencyRate,
    }))
  }
}
