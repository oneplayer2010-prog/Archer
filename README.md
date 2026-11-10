# ARCHER Web

ARCHER è una web app mobile-first che si apre direttamente da un URL HTTPS in Chrome su Android. Non richiede installazioni o APK. L’eventuale aggiunta alla schermata Home è facoltativa.

## Funzioni

Catalogo e Character Studio per personaggi adulti, chat narrative, affinità e memoria persistente. Le conversazioni sono salvate solo nel browser (localStorage). Per ritrovarle usa lo stesso browser e non cancellare i dati del sito. Non c’è autenticazione utente: la sessione locale non equivale a un account o a un’identità verificata.

Il backend usa nessun database: chat, ricordi e personaggi creati restano nel browser del dispositivo (localStorage). Il server usa un provider LLM compatibile OpenAI configurato lato server con `LLM_API_URL`, `LLM_API_KEY`, `LLM_MODEL`. Le credenziali non sono nel frontend. I contenuti consentiti dipendono dal modello e dalle regole del provider scelto.

## Modalità adulta

ARCHER mostra una schermata di autodichiarazione 18+. Non è un sistema di verifica dell’età né dell’identità. I personaggi devono essere maggiorenni; le istruzioni narrative chiedono consenso reciproco e vietano coinvolgimento di minori o attività non consensuali. L’accesso è protetto da `ACCESS_TOKEN` (cookie dopo il primo accesso con `?key=`). Non immettere dati personali o sensibili nelle chat. Prima dell’uso pubblico esteso sono raccomandati verifica d’età effettiva, account, gestione privacy/cancellazione, moderazione e limiti d’uso.

## Esecuzione

Per sviluppo locale occorrono Node.js 20+ e le variabili in `.env.example`. Avvio: `npm ci` e `npm start`. Il server ascolta su `PORT` (default 3000) e inizializza in modo idempotente lo schema e il catalogo iniziale.
