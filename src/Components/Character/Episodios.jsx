import React from 'react'
import styled from 'styled-components'



const EpisodesGrid = styled.div`
    min-height: 150px;
    width:100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:30px;
    min-width: 341px;
    
`
const EpisodesCardFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:20%;
    min-width: 160px;
    max-width: 194px;
    min-height: 60px;
    height: fit-content;
    border:1px solid #B9B9B9;
    border-radius: 10px;
    .episodes-card-frame-title{
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
    }
    .episodes-card-frame-no{
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 90%;
      line-height: 22px;
      color: #000000;
    }
    .episodes-card-frame-date{
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #515151;
    }
`
function EpisodesCard(props){
    return(
      <EpisodesCardFrame >
        <div className='episodes-card-frame-title'>
          {props.title}:
        </div>
        <div className='episodes-card-frame-no'>
          {props.no}
        </div>
        <div className='episodes-card-frame-date'>
          {props.date}
        </div>
        
      </EpisodesCardFrame >
    )
}

export default function Episodes(props) {
    // console.log(props.episodes)
  return(
        <EpisodesGrid>
            {props.episodes?.lenght<2?
                <EpisodesCard title={props.episodes.name} no={props.episodes.episode} date={props.episodes.air_date}></EpisodesCard>
                :
                props.episodes?.map((item,key) => (
                    <EpisodesCard key={key} title={item.name} no={item.episode} date={item.air_date}></EpisodesCard>
            ))}
        </EpisodesGrid>
    
  )
}
