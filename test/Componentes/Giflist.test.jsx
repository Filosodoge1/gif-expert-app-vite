// const { render } = require("@testing-library/react");
// const { Giflist } = require("../../src/componentes/Giflist");

//import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Giflist } from "../../src/componentes/Giflist";

describe('Pruebas en Giflist', () => {
   
   const title = 'hola';
   const url = 'https://www.google.com/';

   test('Debe de hacer match con el snapshot', () => {
      const {container} = render (<Giflist title={ title } url={url} />);
      expect(container).toMatchSnapshot();
   });

   test('Debe de asegurar que exista el url y el titulo', () => {
      render(<Giflist title={title} url={url} />);
      //screen.debug();
      const { src, alt} = screen.getByRole('img');
      expect( src ).toBe( url );
      expect( alt ).toBe( title );

   });

   test('Debe de mostrar el titulo del componente ', () => {
      render(<Giflist title={title} url={url}/>);
      expect(screen.getByText(title)).toBeTruthy();
   });
});