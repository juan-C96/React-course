import { getGifts } from "../../src/helpers/getGift"

describe('Pruebas en getGift', () => { 
    test('Debe retornar un arregle de gifts', async() => { 
        const gifs = await getGifts('Naruto');
        //console.log(gifs)
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        } )
     })
 })