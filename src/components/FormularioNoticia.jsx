import { Card, Form } from "react-bootstrap";
import Titulo from "./Titulo";

const FormularioNoticia = ({ categorias,handleChangeCategoria}) => {
  return (
    <Card className="mx-auto mt-5 w-75">
      <Titulo />
      <Card.Header>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Label htmlFor="categorias" className="w-25 flex-grow-1">
            Buscar por categoría:
          </Form.Label>
          <Form.Select id="categorias" className="w-75" onChange={handleChangeCategoria}>
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Card.Header>
    </Card>
  );
};

export default FormularioNoticia;