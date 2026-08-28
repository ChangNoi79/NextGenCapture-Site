# Betrieb von nextgencapture.app

## Einmalige All-Inkl-Konfiguration

1. Die Domain und optional `www` auf den All-Inkl-Webspace zeigen lassen.
2. Für `nextgencapture.app` HTTPS aktivieren.
3. Im KAS unter **FTP** einen FTP-Zugang für den Domain-Webspace anlegen bzw. den vorhandenen Zugang verwenden.
4. Den Webroot als Wert für `ALLINKL_REMOTE_PATH` notieren. Je nach KAS-Einstellung ist dies der Domain-Ordner, etwa `/nextgencapture.app/`.

## GitHub-Secrets im Site-Repository

| Secret | Zweck |
| --- | --- |
| `ALLINKL_SFTP_HOST` | FTP-Hostname von All-Inkl (der bestehende Secret-Name wird weiterverwendet) |
| `ALLINKL_SFTP_PORT` | `21` für explizites FTPS |
| `ALLINKL_SFTP_USERNAME` | FTP-Benutzername |
| `ALLINKL_SFTP_PASSWORD` | FTP-Passwort |
| `ALLINKL_REMOTE_PATH` | Absoluter Zielpfad des Domain-Webroots |
| `NEXTGEN_CAPTURE_READ_TOKEN` | Optionaler, feingranularer GitHub-Token mit Lesezugriff auf das Extension-Repo |

## GitHub-Secret im Extension-Repository

`SITE_REPOSITORY_DISPATCH_TOKEN` benötigt ausschließlich das Recht, im Repository `ChangNoi79/NextGenCapture-Site` einen Repository-Dispatch auszulösen. Dadurch werden veröffentlichte Releases und Roadmap-Änderungen zeitnah in die statische Website übernommen.

## Vor dem Go-live

Anschließend den ersten manuellen Workflow-Lauf auslösen und die deutsche sowie englische Version auf der Domain prüfen. Der Upload verwendet explizites FTPS (FTP über TLS); ein SSH-Tarif oder SSH-Host-Key ist dafür nicht erforderlich.
