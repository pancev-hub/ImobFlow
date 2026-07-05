# Gerando e usando um Keystore (assinatura Android)

Para gerar um keystore localmente (usando keytool):

```bash
# Gere um keystore (altere alias e nomes conforme desejar)
keytool -genkeypair -v -storetype PKCS12 -keystore imobflow.keystore -alias imobflowkey -keyalg RSA -keysize 2048 -validity 10000
```

O comando acima cria o arquivo `imobflow.keystore` que contém a chave para assinar o APK.

Opções para usar o keystore com EAS (recomendado):

1. Use EAS para gerenciar credenciais de forma segura. Ao rodar `eas build`, será possível subir o keystore e o EAS armazenará para você.

2. Se preferir configurar manualmente no CI, **NUNCA** comite o keystore no repositório. Em vez disso, suba o keystore como um Secret ou armazene em um serviço seguro.

Variáveis/Secrets usados em CI (exemplos):
- EXPO_TOKEN: Token de acesso da sua conta Expo (usado para autenticar `eas build`).

Se quiser que eu inclua um exemplo de upload do keystore para EAS via linha de comando, eu adiciono as instruções.
