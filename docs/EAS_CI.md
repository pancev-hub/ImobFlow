## Gerar APK com EAS (GitHub Actions)

Para automatizar builds do APK via GitHub Actions, faça o seguinte:

1. Crie um token da Expo e adicione como secret no repositório com o nome `EXPO_TOKEN`.
   - `eas whoami` mostra a conta atual.
   - `eas login` e `eas token` para gerar um token.

2. A workflow `android-eas-build.yml` foi adicionada e dispara manualmente (workflow_dispatch) ou quando houver push para a branch `setup/initial`.

3. A workflow irá executar `eas build` usando o perfil `preview` (gera APK). A workflow não armazena as credenciais de assinatura — EAS pode pedir para você importar/gerenciar credenciais.

Observação: por segurança, não armazene keystores em texto no repositório. Utilize o EAS para gerenciamento de credenciais ou configure secrets seguros.
