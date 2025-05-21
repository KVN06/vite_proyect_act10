import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { UserList } from './components/UserList'
import { AddUserForm } from './components/AddUserForm'
import { SearchBar } from './components/SearchBar'

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users')
    return savedUsers ? JSON.parse(savedUsers) : []
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser])
  }

  const handleDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AddUserForm onAddUser={handleAddUser} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <UserList users={filteredUsers} onDeleteUser={handleDeleteUser} />
      </main>
      <Footer />
    </div>
  )
}

export default App
