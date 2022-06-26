import React from 'react'
import stwp from '../Media/STWP.jpg'
import styled from 'styled-components'

function Title() {
  return (
    <TitleBlock>
        <h1>Les 20 films les plus populaires du moment</h1>
    </TitleBlock>
  )
}

export default Title;

const TitleBlock = styled.div`
    color: #fff;
    background-image: url(${stwp});
    background-size: cover;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 5em;
    margin-bottom: 5em;
    padding: 15px;
    margin: 5em;
`