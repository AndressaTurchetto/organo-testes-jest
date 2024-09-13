import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

import { AvaliacaoEstrelasComponent } from './avaliacao-estrelas.component';

describe('AvaliacaoEstrelasComponent', () => {
  let component: AvaliacaoEstrelasComponent;
  let fixture: ComponentFixture<AvaliacaoEstrelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [AvaliacaoEstrelasComponent],
        providers: [
            {
              provide: NG_VALUE_ACCESSOR,
              useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
              multi: true
            }
          ]
    });

    fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
    component = fixture.componentInstance;
    component.readOnly = false;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  })

  it('deveria atribuir um valor para a classificação quando o método writeValue for chamado', () => {
    const classificacao = 3;
    component.writeValue(classificacao);
    
    expect(component.classificacao).toBe(classificacao);
  });

  it('deveria chamar o onChange quando o método classificar for chamado', () => {
    const onChangeSpy = jest.spyOn(component, 'onChange');
    const classificacao = 4;
    component.classificar(classificacao);
    
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('deveria chamar o onTouched quando o método classificar for chamado', () => {
    const onTouched = jest.spyOn(component, 'onTouched');
    const classificacao = 4;
    component.classificar(classificacao);
    
    expect(onTouched).toHaveBeenCalled();
  });

  it('não deveria atualizar a classificação quando a propriedade readonly for true', () => {
    const onChangeSpy = jest.spyOn(component, 'onChange');
    component.readOnly = true;
    const classificacao = 5;
    component.classificar(classificacao);
    
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(component.classificacao).not.toBe(classificacao);
  });

  it('deveria ignorar valores inválidos e atribuir o valor 1 a classificação', () => {
    const valoresInvalidos = [0, -6, 'abc', undefined];
    valoresInvalidos.forEach(valorInvalido => {
        component.writeValue(valorInvalido as any);
        expect(component.classificacao).toBe(1);
    })
  });
  it('deveria atualizar o DOM quando a  classificação muda', () => {
    const classificacao = 3;
    component.classificar(classificacao);
    fixture.detectChanges();

    const estrelaPreenchida = fixture.nativeElement.querySelector('.filled');
    expect(estrelaPreenchida).toBeTruthy();
});

})

