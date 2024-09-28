import Container from "@/components/container";
import TypoJumbo from "@/components/typo/typo-jumbo";
import TypoBody from "@/components/typo/typo-body";
import Image from "next/image";

import imageHeader from "@/public/images/header.jpg";
import PersonCard from "../person-card";
import TypoTitle from "../typo/typo-title";

const PERSONS_ITEMS = [
    {
        name: 'PhDr.Otakar Chaloupka',
        photo: '',
        description: [
            'Od roku 2013 pracuje ve firmě IPPA a dnes je jedním z partnerů. Dominantně se zde zaměřoval na problematiku executive search. Nyní se zaměřuje zejména na lektorování kurzů zaměřených na zvládání stresu, prevenci syndromu vyhoření a kurz psychologické krizové intervence.  Současně působí jako psychoterapeut v soukromé praxi a pořádá semináře Integrativního dýchání pro veřejnost.',
            'Vystudoval jednooborovou psychologii na FF UK v Praze, kde se orientoval zejména na oblast personální a klinické psychologie. Je absolventem komplexního psychoterapeutického výcviku v Integrativní gestalt psychoterapii, absolvoval výcvik „Krizové intervence pro 21.století“, Je certifikovanýám koučem v rámci ICF, prošel výcvikem v Metodě Integrativního dýchání.',
        ],
    },
    {
        name: 'PhDr.Otakar Chaloupka, CSc.',
        photo: '',
        description: [
            'V roce 1993 firmu IPPA založil. Ve firmě se dominantně zaměřuje na executive search a headhunting, dále na vzdělávací a rozvojové programy včetně skupinového a individuálního koučinku, na personálně psychologické a organizační poradenství a na bilanční diagnostiku. ',
            'Vystudoval jednooborovou psychologii na FF UK, teoretické znalosti rozšiřoval během desetiletého působení v Psychologickém ústavu AV ČR v oboru sociální psychologie. ',
            'Dále pracoval jako poradenský psycholog při Úřadu práce hl.m.Prahy, v oblasti přípravy a vývoje manažerských kurzů a tréninků jako člen vývojového projektového týmu Centrály Komerční banky a.s. a poradenské firmy Andersen Consultig a Arthur Andersen Co., v oblasti vedení pracovníků jako personální manažer společnosti Themos Group. ',
            'Je členem Evropské asociace experimentální sociální psychologie a řádným členem Asociace bilanční diagnostiky.  ',
            'Absolvoval řadu rozvojových programů v oblasti vedení lidí, motivace, time managementu, komunikačních dovedností, týmové spolupráce apod. (Andersen Consulting, Bank Austria, TMI – Time Management International, Bercley´s Bank, Middland Bank aj.). Absolvoval program a získal certifikát dovedností trenéra  (Austrian Bankers´College International).',
        ],
    }

];

export default function SectionPersons() {
    return (
        <Container className="flex flex-col items-center gap-8">
            <header>
                <TypoTitle>
                    Náš tým
                </TypoTitle>
            </header>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
                {PERSONS_ITEMS.map((person, index) => (
                    <PersonCard key={`Person: ${index}`}
                        name={person.name}
                        photo={person.photo}
                        description={person.description}
                    />
                ))}
            </div>
        </Container>
    )
}