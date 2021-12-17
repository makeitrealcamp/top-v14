import { useEffect, useState } from "react";
import styled from 'styled-components';
import Avatar from './shared/Avatar';
import Paragraph from "./shared/Paragraph";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width:100%;
min-width:100vw;
min-height:100vh;
height:100%;
background-color:black;
`

const Title = styled.h1`
font-size: 48px;
text-align: center;
color: white;
`

const Gallery = styled.div`
width:90%;
display: flex:
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center; 
`
const GalleryItemBody = styled.img`
width:150px;
height:150px;
cursor:pointer;
`

const GalleryItemModal = styled.div`
width:100vw;
height:100vh;
position:fixed;
top:0;
left:0;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color:black;

animation: appear 5s;
@keyframes appear {
    0%{
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
}
`

const GalleryItemModalContainer = styled.img`
width: 70%;
min-width: 350px;
max-width: 600px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
cursor:pointer;
`

const List = () => {
    const [album, setAlbum] = useState([]);
    const [modal, setModal] = useState(false)
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/album/1/photos')
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
            })
            .catch(error => console.log(error));
    }, []);



    return (
        <Wrapper>
            <Title>Galeria Album 1</Title>
            <Gallery>
                {
                    album.map((photo, key) => (
                        <GalleryItemBody key={key} src={photo.thumbnailUrl} alt={photo.thumbnailUrl} onClick={()=>{
                            setModal(true);
                            setPhoto({
                                "url":photo.url,
                                "title":photo.title
                            });
                        }}/>
                    ))
                }
            </Gallery>
            {
                modal
                ? (
                    <GalleryItemModal>
                        <GalleryItemModalContainer src={photo.url} alt={photo.url} onClick={()=>{
                            setModal(false);
                            setPhoto({});
                        }} />
                        <Title>{photo.title}</Title>
                    </GalleryItemModal>
                )
                : null
            }
        </Wrapper>
    );
}

export default List;
