import React from 'react'
import { Container } from 'react-bootstrap'
import { MainForm } from '../components/forms/MainForm'
import { TaskInput } from '../components/forms/TaskInput'
import { Navigation } from '../components/Navigation'

export const Home = () => {
  return (
    <div>

      <h1>HOME PAGE</h1>
      {/* <MainForm/> */}
      <Container>

      <TaskInput />
      </Container>
    </div>
  )
}
