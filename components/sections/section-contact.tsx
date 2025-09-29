import Container from '@/components/container';
import EyebrowBlock from '@/components/eyebrow-block';
import ContactForm from '@/components/form/contact-form';

export default function SectionContact() {
    return (
        <Container
            narrow
            id="contact"
            className="relative flex flex-col md:flex-row items-start gap-8 md:gap-5 z-10"
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