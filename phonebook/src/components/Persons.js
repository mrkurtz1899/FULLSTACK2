import React from 'react'
import Person from './Person'

const Persons = ({persons}) => (
    <>
    {persons.map(person =>
    <Person person={person} key={person.name}></Person>
    )}
    </>
    )
export default Persons;