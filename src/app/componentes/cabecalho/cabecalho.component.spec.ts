import { CabecalhoComponent } from "./cabecalho.component"

describe('CabecalhoComponent', () => {
    let component: CabecalhoComponent

    beforeEach(() =>{
        component = new CabecalhoComponent
    });

    it('deveria ser criado', () => {
        expect(component).toBeTruthy();
    })
})
