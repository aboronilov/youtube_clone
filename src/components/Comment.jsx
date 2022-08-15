import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.div`
    font-size: 14px;    
`

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://avatars.githubusercontent.com/u/1486366?v=4" />
            <Details>
                <Name>John Doe <Date>1 day ago</Date></Name>
                <Text>
                    First of all thanks a lot for this awesome tutorial brother. you always bring extraordinary content for us. Please do a complete backend based on MERN. And "AWS s3" storage service would be great. Please do that for us. All the best. Take love ❤
                </Text>
            </Details>
        </Container>
    );
}

export default Comment;
