import { any } from "prop-types";
import { GifApi } from "../../src/helpers/GifApi";

describe('Pruebas en GifApi', () => {

    test('Debe de retornar un arreglo de gifs', async() => {
        const gif = await GifApi('goku');
        expect( gif.length).toBeGreaterThan(0);
        expect( gif[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String)
        })
    });

});