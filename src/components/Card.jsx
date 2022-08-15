import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`

const Texts = styled.div`

`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text}
`
const ChannelName = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;    
`
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
    return (
        <Link to="/video/test" style={{ textDecoration: "none"}}>
            <Container>
                <Image src="https://www.videograbber.net/wp-content/uploads/2017/12/youtube-thumbnail-grabbers.jpg" />
                <Details>
                    <ChannelImage src="https://avatars.githubusercontent.com/u/1486366?v=4" />
                    <Texts>
                        <Title>Test video</Title>
                        <ChannelName>Lama dev</ChannelName>
                        <Info>660,998 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}

export default Card;
