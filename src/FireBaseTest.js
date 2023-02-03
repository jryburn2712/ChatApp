import styled from "styled-components";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {useEffect, useRef, useState} from "react";
import {fireStore} from "./firebase";

export const FireBaseTest = () => {
    const input = useRef();
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const querySnapshot = await getDocs(collection(fireStore, 'messages'));
        let fireStoreMessages = []
        querySnapshot.forEach((doc) => {
            fireStoreMessages.push({id: doc.id, data: doc.data()});
        })
        setMessages(fireStoreMessages);
        console.log(fireStoreMessages);
    }

    useEffect(() => {
        fetchMessages().catch(console.error);
    }, [])

    const handleSubmit = async () => {
        let text = input.current.value;
        try {
            const docRef = await addDoc(collection(fireStore, 'messages'), {
                text: text,
                author: 'anonymous'
            });
            setMessages((prevState) => [...prevState, {id: docRef.id, data: {author: 'anonymous', text: text}}])
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <Container>
            <InputContainer>
                <StyledInput ref={input} placeholder={"Send a message to the Firestore"}/>
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </InputContainer>
            <MessagesHeader>Messages</MessagesHeader>
            <MessagesContainer>
                {messages.map((message) => {
                    return (
                        <Message key={message.id}>
                            <MessageText>{message.data.text}</MessageText>
                            <Author>-{message.data.author}</Author>
                        </Message>
                    )
                })}
            </MessagesContainer>
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  gap: 2vh;
  width: 100%;
  justify-content: center;
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const StyledInput = styled.input`
  font-size: .9em;
`

const SubmitButton = styled.button`
  width: 30%;
  font-size: .9em;
`

const MessagesHeader = styled.h4`
  margin: 0;
`

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
`

const MessageText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1em;
`

const Author = styled.p`
  margin: 0;
  padding-left: 1vw;
  font-size: 0.8em;
  font-weight: bold;
`