Feature: Envio de Formulario

    Scenario: Preencher formulario corretamente
        Given acesso o site Tricentis
        When preencher o formulario com os dados corretamente
        Then devo visualizar a mensagem "Sending e-mail success!"