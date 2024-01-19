
### O que é npm?
**npm** (gerenciador de pacotes do nó) é o gerenciador de dependências/pacotes que você obtém ao instalar o Node.js. Ele fornece uma maneira para os desenvolvedores instalarem pacotes globalmente e localmente.
### O que é npx?
O npx é pré-empacotado com o npm. Então é praticamente um padrão hoje em dia.
O npx também é uma ferramenta CLI cujo objetivo é facilitar a instalação e o gerenciamento de dependências hospedadas no registro npm.
### Diferença npm vs npx?
**npm** é o gerenciador de pacotes node, ele irá instalar na sua máquina um pacote para que você possa utiliza-lo em outros projetos sem precisar baixar novamente.

já o **npx** ele irá usar o pacote sem precisar baixar em sua máquina, sendo assim você irá instalar um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina.

## Merge VS REBESE 
Basicamente o **git merge** e o **git rebase** servem para a mesma coisa: **mesclar alterações de duas branches diferentes**.
#### Branches oq é?  


> Ramificação, em controle de versão e gerenciamento de configuração de software, é a duplicação de um objeto sob controle de versão.

O **merge**, na maioria das vezes, gera um novo commit, o que pode complicar o histórico, mas nunca o reescreve. (mas é mais seguro)

Já o **rebase** deixa o histórico linear e mais simples, mas alguns commits são reescritos, é muito útil para não “sujar” o histórico do repositório (mas possui mais riscos).


## Fast-Forward

Move o rótulo da branch master para o commit “feature". Por isso, o nome dessa estratégia é fast forward (em português avanço rápido), pois é simplesmente uma alteração de ponteiro.

## no-fast forward

O --no-ff sinalizador faz com que a mesclagem sempre crie um novo objeto de confirmação, mesmo que a mesclagem possa ser executada com um avanço rápido. Isso evita a perda de informações sobre a existência histórica de uma ramificação de recurso e agrupa todos os commits que juntos adicionaram o recurso.
A --no-ff opção é útil quando você deseja ter uma noção clara de sua ramificação de recurso. sem --no-ff, é impossível ver no histórico do Git quais dos objetos de confirmação juntos implementaram um recurso, você teria que ler manualmente todas.

  
  
  
  

## Rebese vs squash

**Merge Rebase:** Isso move todo o branch do recurso para começar na ponta do branch master, incorporando efetivamente todos os novos commits no master

Master A → B → C -->(F) → (G)

Feature A → B → C --> (D) → (E)

MASTER A → B → C → (F) → (G) → (D) → (E)

O **rebase** deixa o histórico linear e mais simples, mas alguns commits são reescritos, é muito útil para não “sujar” o histórico do repositório (mas possui mais riscos).

**Merge Squash:** mantém as alterações, mas omite os commits individuais do histórico

Master A → B → C

Feature A → B → C (D) → (E) |

MASTER A → B → C → (F)

  