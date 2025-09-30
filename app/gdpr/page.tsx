import Container from '@/components/container';
import { CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/helpers/contacts';

export default function GDPRPage() {
    return (
        <Container
            as="article"
            className="legal-page pt-12"
        >
            <header>
                <h1>
                    Ochrana osobních údajů (GDPR)
                </h1>
            </header>
            <section>
                <header>
                    <h2>1. Správce osobních údajů</h2>
                </header>
                <p>
                    Správcem osobních údajů je PhDr. Otakar Chaloupka, CSc., se sídlem
                    Čertouská 353/8, 198 00 Praha 9 – Hloubětín, IČO: 49267531.
                </p>
            </section>

            <section>
                <header>
                    <h2>2. Zpracovávané osobní údaje</h2>
                </header>
                <p>
                    Zpracováváme osobní údaje, které nám poskytnete prostřednictvím
                    kontaktního formuláře na našich webových stránkách, konkrétně:
                </p>
                <ul>
                    <li>Jméno a příjmení</li>
                    <li>E-mailová adresa</li>
                    <li>Telefonní číslo</li>
                    <li>Obsah zprávy</li>
                </ul>
            </section>

            <section>
                <header>
                    <h2>3. Účel zpracování osobních údajů</h2>
                </header>
                <p>Vaše osobní údaje zpracováváme za účelem:</p>
                <ul>
                    <li>Kontaktování v reakci na váš dotaz či zprávu</li>
                    <li>Poskytování informací o našich službách</li>
                    <li>Domlouvání schůzek a konzultací</li>
                </ul>
            </section>

            <section>
                <header>
                    <h2>4. Právní základ zpracování</h2>
                </header>
                <p>Zpracování vašich osobních údajů je založeno na:</p>
                <ul>
                    <li>
                        <strong>Oprávněném zájmu</strong> správce na poskytování kvalitních
                        služeb a komunikaci s klienty
                    </li>
                </ul>
            </section>

            <section>
                <header>
                    <h2>5. Doba uchovávání osobních údajů</h2>
                </header>
                <p>
                    Vaše osobní údaje uchováváme po dobu nezbytně nutnou k naplnění výše
                    uvedených účelů, nejdéle však po dobu 3 let od poslední komunikace, pokud
                    zákon nestanoví jinak.
                </p>
            </section>

            <section>
                <header>
                    <h2>6. Příjemci osobních údajů</h2>
                </header>
                <p>Vaše osobní údaje mohou být zpřístupněny:</p>
                <ul>
                    <li>Osobám zajišťujícím technickou podporu našich webových stránek</li>
                    <li>Poskytovatelům IT služeb a hostingu</li>
                </ul>
                <p>
                    Všichni tito zpracovatelé jsou smluvně zavázáni k ochraně vašich osobních
                    údajů.
                </p>
            </section>

            <section>
                <header>
                    <h2>7. Vaše práva</h2>
                </header>
                <p>V souladu s platnými právními předpisy máte právo:</p>
                <ul>
                    <li>Požadovat přístup k vašim osobním údajům</li>
                    <li>Požadovat opravu nepřesných či neaktuálních údajů</li>
                    <li>Požadovat výmaz vašich osobních údajů</li>
                    <li>Vznést námitku proti zpracování</li>
                    <li>Požadovat omezení zpracování</li>
                    <li>Na přenositelnost údajů</li>
                    <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
                </ul>
            </section>

            <section>
                <header>
                    <h2>8. Kontakt</h2>
                </header>
                <p>
                    Pro uplatnění vašich práv či v případě dotazů ohledně zpracování osobních
                    údajů nás můžete kontaktovat na:
                </p>
                <ul>
                    <li>E-mail: <a href={CONTACT_EMAIL_LINK}>{CONTACT_EMAIL}</a></li>
                    <li>Telefon: <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE}</a></li>
                    <li>Adresa: Čertouská 353/8, 198 00 Praha 9 - Hloubětín</li>
                </ul>
            </section>
        </Container>
    )
}