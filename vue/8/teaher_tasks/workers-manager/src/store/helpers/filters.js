import { currencyList } from '../../constants/settings'
import { convertSalary } from './currencyConverter'
export function getFilteredList({ workersList, searchName, currency }) {
  let filteredList = workersList
  if (searchName) {
    const filterNameVal = searchName.toLowerCase()
    filteredList = workersList.filter((worker) =>
      worker.name.toLowerCase().includes(filterNameVal)
    )
  }
  if (currency) {
    const currencyRate = currencyList.find((c) => c.id === currency).rate
    filteredList = convertSalary(filteredList, currencyRate)
  }
  return filteredList
}
