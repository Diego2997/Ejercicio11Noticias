import { Card } from 'react-bootstrap';

const Noticia = ({noticia}) => {
    return (
      <Card className='w-100 h-100'>
      <Card.Img variant="top" src={noticia.image_url} className='img-noticia' alt={noticia.title}/>
      <Card.Body className='overflow-auto body-noticia'>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>
       {noticia.description}
        </Card.Text>
      </Card.Body>
     <Card.Footer className='text-center'>
     <a className='btn btn-primary' target='_blank' href={noticia.link}>Ver noticia completa</a>
     </Card.Footer>
    </Card>
    );
};

export default Noticia;