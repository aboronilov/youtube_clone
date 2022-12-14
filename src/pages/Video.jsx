import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import React from 'react';
import styled from 'styled-components';
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
    display: flex;
    gap: 24px;    
`

const Content = styled.div`
    flex: 5;
`

const VideoWrapper = styled.div`
    
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
`

const Button = styled.div`
    color: ${({theme}) => theme.text};
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Hr = styled.hr`
    border: 0.5px solid ${({theme}) => theme.soft};
    margin: 15px 0;
`

const Recommendations = styled.div`
    flex: 2;
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInffo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text};
`

const ChannelName = styled.div`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px;
`

const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Title>Test video</Title>
                    <Details>
                        <Info>7,948,154 views ??? Jun 22, 2022</Info>
                        <Buttons>
                            <Button>
                                <ThumbUpOutlinedIcon /> 123
                            </Button>
                            <Button>
                                <ThumbDownOffAltOutlinedIcon /> Dislike
                            </Button>
                            <Button>
                                <ReplyOutlinedIcon /> Share
                            </Button>
                            <Button>
                                <AddTaskOutlinedIcon /> Save
                            </Button>                            
                        </Buttons>
                    </Details>
                    <Hr></Hr>
                    <Channel>
                        <ChannelInffo>
                            <Image src="https://avatars.githubusercontent.com/u/1486366?v=4"></Image>
                            <ChannelDetail>
                                <ChannelName>
                                    Lama Dev
                                </ChannelName>
                                <ChannelCounter>
                                    200k subscribers
                                </ChannelCounter>
                                <Description>
                                    Fullstack development tutorials using React.JS and Node.JS
                                </Description>
                            </ChannelDetail>
                        </ChannelInffo>
                        <Subscribe>
                            SUBSCRIBE
                        </Subscribe>
                    </Channel>
                    <Hr></Hr>
                    <Comments />
                </VideoWrapper>
            </Content>
            <Recommendations>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendations>
        </Container>
    );
}

export default Video;
