import { Container,Row,Col } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    return (
      <Container className="mt-3">
      <Row >
      {noticias.map((noticia,index)=>  <Col key={index} xs={12} md={6} lg={4} className="mt-3">
        <Noticia noticia={noticia}/>
        </Col>)}
      </Row>
    </Container>
    );
};

export default ListaNoticias;