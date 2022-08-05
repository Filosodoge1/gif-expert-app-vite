import { fireEvent, render, screen } from "@testing-library/react";
import { AgregarCat } from "../../src/componentes/AgregarCat";

describe('Probando el componente Agregar Categoria', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        const {pag} = render(<AgregarCat onNewCategory={ () => {}} />);
        const cajatext = screen.getByRole('textbox');
        
        fireEvent.input( cajatext, {target: {value: 'Goku'}} );
        expect( cajatext.value ).toBe('Goku');

        
        expect(pag).toMatchSnapshot();
    });
});