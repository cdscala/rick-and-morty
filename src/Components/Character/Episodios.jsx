import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';


const InformationGrid = styled.div`
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
const InformationCardFrame = styled.div`
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
    .information-card-frame-title{
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      color: #7A7A7A;
    }
    .information-card-frame-info{
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
`
function InformationCard(props){
    return(
      <InformationCardFrame >
        <div className='information-card-frame-title'>
          <InfoIcon/>
          {props.title}:
        </div>
        <div className='information-card-frame-info'>
          {props.value}
        </div>
        
      </InformationCardFrame >
    )
}

export default function Information(props) {
  const information=[{property:'Gender',value:props.gender},{property:'Origin',value:props.origin},{property:'Type',value:props.type}]
  return(
        <InformationGrid>
            {information?.map((item,key) => (
              <InformationCard key={key} title={item.property} value={item.value}></InformationCard>
            ))}
        </InformationGrid>
    
  )
}
