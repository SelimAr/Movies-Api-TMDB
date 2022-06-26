import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Card({ poster_path, title, release_date, overview, backdrop_path, vote_average }) {

    const [show, setShow] = useState(false);

    const showPopup = () => {
        setShow(true)
      }

    const closePopup = () => {
        setShow(false)
    }

    const dateYear = (date) => {
        var [y] = date.split("-");
        return y;
    }

    const trunc = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    useEffect(() => {
        if(show){
            document.body.style.overflow = 'hidden';
        }
        return () =>
            document.body.style.overflow = 'unset';
     }, [show]);

    
    return (
        <>
            <Cards onClick={showPopup}>
                <AnimationCard>
                    <ImgCard src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title}/>
                    <ContentCard>
                        <h4>{trunc(`${title}`,55)}</h4>
                    </ContentCard>
                </AnimationCard>
            </Cards>

            {show && 
                <BackgroundPopup>
                    <PopupContent style={{backgroundImage: `url("https://image.tmdb.org/t/p/w780/${backdrop_path}")`}}>
                        <CloseButtonContent>
                            <CloseButton onClick={closePopup} />
                        </CloseButtonContent>
                        <Popuptitle>{title} ({dateYear(release_date)})</Popuptitle>
                        <VoteContent>{vote_average}/10</VoteContent>
                        <OverviewContent>{overview}</OverviewContent>
                    </PopupContent>
                </BackgroundPopup>
            }
        </>
    )
}

export default Card;

const Cards = styled.div`
    color: #fff;
    width: 15em;
    height: 20em;
    border-radius: 5px;
    cursor: pointer;
    margin: 1em 1em 6em 1em;
`

const AnimationCard = styled.div` 
    ${Cards}:hover & {
        transform: scale(1.05);
        box-shadow: 0px 0px 25px black;
  }
  background-color: rgba(255,255,255,0.2);
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  transition: 0.2s;
  height: 402px;
`

const ImgCard = styled.img`
    width: 15em;
    height: 22em;
    border-radius: 5px 5px 0px 0px;
    object-fit: cover;
`

const ContentCard = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    padding: 7px;
    margin: 5px;
    border-radius: 5px;
    :hover{
        background-color: rgba(255,255,255,0.1);
        transition: 0.3s;
        box-shadow: 0px 0px 15px 5px #000;
    }
`

const CloseButtonContent = styled.div`
    display: flex;
    justify-content: right;
    border-radius: 8px;
`

const Popuptitle = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
`

const VoteContent = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    padding: 0 10px;
    
`

const OverviewContent = styled.div`
    padding: 0 10px;
    max-height: 12em;
    background: transparent;
    @media only screen and (max-width: 1400px) {
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(255,255,255,0.5);
            border-radius: 20px;
            border: 3px solid transparent;
        }
    }
`

const PopupContent = styled.div`
    color: #fff;
    border-radius: 8px;
    background-repeat: no-repeat;
    object-fit: contain;
    background-position: center;
    background-size: cover;
    max-width: 40em;
    height: 22em;
`

const BackgroundPopup = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`