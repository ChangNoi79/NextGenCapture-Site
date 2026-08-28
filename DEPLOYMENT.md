# Betrieb von nextgencapture.app

## Einmalige All-Inkl-Konfiguration

1. Die Domain und optional `www` auf den All-Inkl-Webspace zeigen lassen.
2. Für `nextgencapture.app` HTTPS aktivieren.
3. Den Webroot als Wert für `ALLINKL_REMOTE_PATH` notieren.
4. Die Host-Key-Zeile des SFTP-Servers in `ALLINKL_SFTP_HOST_KEY` hinterlegen. Sie muss exakt dem Eintrag in `known_hosts` entsprechen.

## GitHub-Secrets im Site-Repository

| Secret | Zweck |
| --- | --- |
| `ALLINKL_SFTP_HOST` | SFTP-Hostname von All-Inkl |
| `ALLINKL_SFTP_PORT` | SFTP-Port |
| `ALLINKL_SFTP_USERNAME` | SFTP-Benutzername |
| `ALLINKL_SFTP_PASSWORD` | SFTP-Passwort |
| `ALLINKL_REMOTE_PATH` | Absoluter Zielpfad des Domain-Webroots |
| `ALLINKL_SFTP_HOST_KEY` | Verifizierter SSH-Host-Key im `known_hosts`-Format |
| `NEXTGEN_CAPTURE_READ_TOKEN` | Optionaler, feingranularer GitHub-Token mit Lesezugriff auf das Extension-Repo |

## GitHub-Secret im Extension-Repository

`SITE_REPOSITORY_DISPATCH_TOKEN` benötigt ausschließlich das Recht, im Repository `ChangNoi79/NextGenCapture-Site` einen Repository-Dispatch auszulösen. Dadurch werden veröffentlichte Releases und Roadmap-Änderungen zeitnah in die statische Website übernommen.

## Vor dem Go-live

Die Platzhalterseite für das Impressum muss mit Betreibername, ladungsfähiger Anschrift und Kontaktangaben vervollständigt werden. Anschließend den ersten manuellen Workflow-Lauf auslösen und die deutsche sowie englische Version auf der Domain prüfen.
