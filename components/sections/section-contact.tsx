import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import ContactForm from '@/components/form/contact-form';

export default function SectionContact() {
    return (
        <Container
            narrow
            className="flex items-start gap-5"
        >
            <header className="flex-grow max-w-[327px]">
                <EyebrowBlock
                    eyebrow="Kontakt"
                    title="Zarezervujte si první konzultaci"
                    description="Jeden krok, který může změnit směr."
                />
            </header>

            <div className="flex-grow">
                <ContactForm />
            </div>
        </Container>
    );
}