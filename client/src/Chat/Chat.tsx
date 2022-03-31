import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

export const Chat = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState();

  const [messages, setMessages] = useState<any[]>([]);

  const [connected, setConnected] = useState<boolean | undefined>();

  const socket = io('http://localhost:4000'); // this is the server address

  const createRoom = (e: any) => {
    e.preventDefault();
    socket.emit('createRoom', room);
    socket.on('setRoom', (room: any) => {
      console.log(room);
      setStatus(room.status);
    });
  };
  const goHome = () => {
    navigate('/');
  };

  const sendMessage = (e: any) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    socket.on('message', (message: any) => {
      console.log(message);
      setMessages((prevMessage: any) => [...prevMessage, message]);
    });
  };

  useEffect(() => {
    socket.connect();
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    // if (!status) {
    //   socket.connect();
    //   console.log('connected');
    //   setConnected(socket.connected);
    // }
    return () => {
      console.log('disconnected');
      socket.close();
    };
  }, [message]);

  return (
    <>
      <button onClick={goHome}>go home</button>
      <h1>{status}</h1>
      {!status && (
        <form action='' onSubmit={createRoom}>
          <input
            type='text'
            name='room'
            onChange={(e: any) => setRoom(e.currentTarget.value)}
          />
          <button type='submit'>open room</button>
        </form>
      )}
      <h2>Messages</h2>
      <form action='' onSubmit={sendMessage}>
        <input
          type='text'
          name='message'
          onChange={(e: any) => setMessage(e.currentTarget.value)}
        />
        <button type='submit'>send message</button>
      </form>

      {messages.map((message: any, idx) => (
        <p key={idx}>{message}</p>
      ))}
    </>
  );
};
