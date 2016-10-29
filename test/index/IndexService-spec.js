describe('IndexService', function () {
  var service;
  
  beforeEach(module('app'));
  beforeEach(inject(function($injector){
    service = $injector.get('IndexService');
  }));

  it('adicionar na lista', function(){
    service.salvar('teste1');
    expect(service.getAll().length).toEqual(1);

    service.salvar('teste2');
    expect(service.getAll().length).toEqual(2);
  });


  it('excluir da lista', function(){
    service.salvar('teste1');
    service.salvar('teste2');
    service.salvar('teste3');
    expect(service.getAll().length).toEqual(3);
    
    service.excluir(nomes[1]);
    expect(service.getAll().length).toEqual(2);
  });

});