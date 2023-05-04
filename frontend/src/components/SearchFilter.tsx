import { useState } from 'react'

interface Props {
  data: {
    id: number
    name: string
    email: string
  }[]
}

const SearchFilter: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div>
      <input type='text' placeholder='Search...' onChange={handleSearchChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter
