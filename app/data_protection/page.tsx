export default function DataProtection() {
    return (
        <div>
            <h1>Datenschutzerklärung</h1>
            <section id="verantwortlicher">
                <h2>Verantwortlicher</h2>
                <p>Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <address>
                    <strong>OpenSource @ TUM e.V.</strong>
                    <br />
                    E-Mail: app at tum dot de
                    <br />
                    Hosting: Die Server werden vom <strong>Leibniz-Rechenzentrum (LRZ)</strong> in Deutschland betrieben.
                </address>
            </section>

            <section id="daten">
                <h2>2. Erhobene Daten</h2>

                <article>
                    <h3>a) Technische Basisinformationen</h3>
                    <p>Beim Start und während der Nutzung der App werden folgende technische Informationen erhoben:</p>
                    <ul>
                        <li>Betriebssystem-Version (z. B. Android-Version)</li>
                        <li>App-Version</li>
                        <li>API-Zugriffe und App-Funktionalitäten</li>
                        <li>Geräteinformationen (z. B. Hersteller, Modell)</li>
                        <li>Verbindung zu Internet/Server</li>
                    </ul>
                    <p>Diese Daten dienen ausschließlich zur Sicherstellung des technischen Betriebs, zur Fehleranalyse und zur Verbesserung der App.</p>
                    <aside>
                        <strong>Hinweis:</strong> Auch Google (als Betreiber des Play Store) kann unabhängig von uns Daten im Rahmen der App-Installation und
                        -Nutzung erheben. Bitte beachten Sie hierzu die{" "}
                        <a href="https://policies.google.com/privacy?hl=de" target="_blank">
                            Datenschutzbestimmungen von Google
                        </a>
                        .
                    </aside>
                </article>

                <article>
                    <h3>b) Anonyme Nutzungsdaten</h3>
                    <p>
                        Zur Optimierung der App erfassen wir anonymisierte Informationen über die Nutzung einzelner Funktionen. Beispielsweise wird registriert,
                        wie häufig bestimmte Bereiche oder Schnittstellen der App verwendet werden. Eine Identifizierung einzelner Nutzer ist dabei nicht
                        möglich.
                    </p>
                </article>

                <article>
                    <h3>c) Fehler- und Absturzberichte (Firebase Crashlytics)</h3>
                    <p>
                        Zur Analyse von App-Abstürzen verwenden wir <strong>Firebase Crashlytics</strong>, einen Dienst von:
                    </p>
                    <address>
                        Google Ireland Ltd.
                        <br />
                        Google Building Gordon House, Barrow Street, Dublin 4, Irland
                    </address>
                    <p>Im Falle eines Absturzes werden folgende anonymisierte Daten an Firebase übermittelt:</p>
                    <ul>
                        <li>Zeitpunkt des Absturzes</li>
                        <li>App-Status</li>
                        <li>Stacktraces (Fehlerberichte)</li>
                        <li>Betriebssystem-Version und Gerätehersteller</li>
                        <li>Letzte Logmeldungen vor dem Absturz</li>
                    </ul>
                    <p>
                        Es werden <strong>keine personenbezogenen Daten</strong> an Google übermittelt. Weitere Informationen zur Datenverarbeitung durch Google
                        finden Sie unter:
                        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
                            https://firebase.google.com/support/privacy
                        </a>
                    </p>
                    <p>
                        Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Fehleranalyse und App-Verbesserung).
                    </p>
                </article>
            </section>

            <section id="personenbezogene-daten">
                <h2>3. Verarbeitung personenbezogener Daten (TUMonline-Login)</h2>
                <p>
                    Bei Login über TUMonline mittels eines autorisierten Tokens erheben und verarbeiten wir die folgenden personenbezogenen Informationen, die
                    mit Ihrem Gerät verknüpft werden:
                </p>
                <ul>
                    <li>Ihr vollständiger Name</li>
                    <li>Ihre TUM-Kennung (z. B. „go42tum“)</li>
                </ul>
                <p>
                    Es werden <strong>keine weiteren personenbezogenen Daten</strong> (z. B. Vorlesungen, Noten, Studienbeitragsstatus) auf unseren Servern
                    gespeichert. Alle studienbezogenen Informationen werden <strong>ausschließlich direkt von TUMonline</strong> abgerufen und verbleiben auf
                    dem Gerät. Der Zugriff erfolgt nur, wenn Sie vorher die entsprechende Berechtigung erteilt haben.
                </p>
            </section>

            <section id="rechte">
                <h2>4. Ihre Rechte</h2>
                <p>Als betroffene Person haben Sie folgende Rechte gemäß Art. 15 ff. DSGVO:</p>
                <ul>
                    <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
                    <li>Berichtigung unrichtiger Daten</li>
                    <li>Löschung Ihrer Daten (sofern keine gesetzliche Aufbewahrungspflicht besteht)</li>
                    <li>Einschränkung der Verarbeitung</li>
                    <li>Widerspruch gegen die Verarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                </ul>
                <p>Zur Ausübung dieser Rechte wenden Sie sich bitte an uns über die oben angegebene Kontaktadresse.</p>
            </section>

            <section id="aenderungen">
                <h2>5. Änderungen der Datenschutzerklärung</h2>
                <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Änderungen werden in der App kenntlich gemacht.</p>
            </section>
        </div>
    );
}
