# Suponha que você fez o seguinte commit:

    `git commit -m "Adicionando novo recurso"`

Após executar esse comando, você percebe que cometeu um erro de digitação na mensagem do commit. Em vez de criar um novo commit apenas para corrigir o erro, você pode usar `git commit --amend` para corrigir a mensagem do commit anterior.



`git commit --amend -m "Adicionando novo recurso com correção de erro de digitação"` 

Com isso, a mensagem do commit será atualizada para refletir a correção que você fez. Note que você não alterou os arquivos do commit, apenas a mensagem associada a ele. Isso é útil para manter um histórico limpo e bem documentado no seu repositório Git.