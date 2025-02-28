# Comentários

"A maneira como vão ser persistido os dados não deve influenciar na maneira como os dados são organizados."

A entidade customer e recipient representam o mesmo autor, sendo que para cada uma os dados necessários são diferentes
Apesar de serem criadas 2 entidades diferentes, futuramente no banco de dados
Pode existir uma tabela cliente que junte todos os atributos das duas entidades
id, name, email, document, street, number e zipcode
