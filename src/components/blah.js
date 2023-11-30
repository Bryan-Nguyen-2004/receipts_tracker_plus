import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Receipt Dashboard</h1>
        <div className="relative">
          <IconSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            className="pl-10 pr-4 py-2 w-64 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:bg-white dark:focus:bg-gray-600"
            placeholder="Search receipts..."
            type="search"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 overflow-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Receipts</h2>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="store">Store</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <Link href="#">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Walmart</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">12/25/2023</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $120.00</p>
            </Link>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <Link href="#">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Target</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">12/24/2023</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $75.00</p>
            </Link>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <Link href="#">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Costco</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">12/23/2023</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Amount: $200.00</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconSearch(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}